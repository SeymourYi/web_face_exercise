import axios from 'axios'
const baseUrl = 'http://localhost:8080'

export async function getStudentListSservice() {

  return await axios.get('http://localhost:8080/student/getall'
  ).then(result => {
    // console.log(result.data.data);

    return result.data.data;
  }).catch(err => {
    console.error(err);
  });


}

export async function getStudentSearchSservice(Conditions: any) {

  return await axios.get('http://localhost:8080/student/search', { params: Conditions },

    // return await axios.get('http://localhost:8080/student/search', { params: { Conditions } }
  ).then(
    result => {
      return result.data.data
    }).catch(err => {
      console.error(err);
    });
}