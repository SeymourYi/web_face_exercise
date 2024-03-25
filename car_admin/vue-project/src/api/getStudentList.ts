

import request from "@/utils/request.ts";
export function getStudentListSservice() {

  return request.get('/student/getall')
}

export function getStudentSearchSservice(Conditions: any) {

  return request.get('/student/search', { params: Conditions },)

  // return await axios.get('http://localhost:8080/student/search', { params: { Conditions } }
}