import { useQuery } from "react-query";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "../../styles/components/Home/Home";
import { ProjectTable } from "views/Project";
import { Navbar } from "components/Navbar/Navbar";

export interface Data {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    zipcode: string;
  };
}

// Fetch function
const fetchData = async (): Promise<Data[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const Home = () => {
  const { data, isLoading, error } = useQuery<Data[], Error>({
    queryKey: ["users"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Navbar>
      <>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>City</TableHeader>
              <TableHeader>Zipcode</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableData>{item.id}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>{item.email}</TableData>
                <TableData>{item.address.city}</TableData>
                <TableData>{item.address.zipcode}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <ProjectTable />
      </>
    </Navbar>
  );
};
