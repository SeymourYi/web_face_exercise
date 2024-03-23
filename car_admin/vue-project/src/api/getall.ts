import axios from "axios";
export async function getall() {
  try {
    const response = axios.get('http://localhost:8080/student/getall');
    return response;
  } catch (error) {
    console.log(error);

  }
}
