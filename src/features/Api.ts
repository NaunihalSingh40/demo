import axios from "axios";
import { Data } from "views/Home/Home";


// interface loginCredentials{
//     "email":String;
//     "password":String;
// }
export const fetchData = async (Link: String) => {
  try {
    const response = await axios.get<Data[]>(String(Link));
    return response;
  } catch (error) {
    console.log("Error while fetching data:", error);
  }
};

// export const postData = async (Credentials: loginCredentials, Link: string) => {
//   try {
//     const response = await axios.post(Link, Credentials);
//     console.log("Item created:", response.data);
//     return response.data; // Returning the response for further use
//   } catch (error) {
//     console.log("Error while posting data:", error);
//     throw error; // Throw error to be handled at the call site
//   }
// };
