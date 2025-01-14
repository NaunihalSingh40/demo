import { fetchData } from "features/Api";
import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
} from "../../styles/components/Home/Home";

export interface Data {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    zipcode: string;
  };
}

export const Home = () => {
  const [data, setData] = useState<Data[]>([]); // State to store the fetched data

  useEffect(() => {
    document.title = "Home Page";

    // Fetch data and update state
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData("https://jsonplaceholder.typicode.com/users");
        if (response) {
          setData(response.data); // Assuming `fetchData` returns Axios response
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
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
          {data.map((item) => (
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
    </>
  );
};
