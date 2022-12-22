import { myAxios } from "./helper";

const adminData=JSON.parse(sessionStorage.getItem('admin'));

export const signUp=(user)=>{
    return myAxios.post('/ClassCoordinator/SignUp',user).then((response)=>response.data)
}

export const adminLogin=(user)=>{
    return myAxios.post('/ClassCoordinator/Login',user).then((response)=>response.data)
}

export const teacherLogin=(user)=>{
    return myAxios.post('/teacher/Login',user).then((response)=>response.data)
}

export const studentLogin=(user)=>{
    return myAxios.post('/student/Login',user).then((response)=>response.data)
}

//-------------------------------Teacher---------------------------------------

//Get Teacher Data -->Admin Dashboard
export const getTeacherData=(user)=>{
    //console.log(adminData.classcoordinator_id)
    return myAxios.get(`/teacher/getByCoordinator/${adminData.classcoordinator_id}`,user).then((response)=>response.data)
}

//Add Teacher Data -->Admin Dashboard
export const addTeacherData=(user)=>{
    return myAxios.post(`/teacher/add`,user).then((response)=>response.data)
}

//Edit Teacher Data -->Admin Dashboard
export const editTeacherData=(data)=>{
    //console.log(adminData.classcoordinator_id)
    return myAxios.put(`/teacher/update`,data).then((response)=>response.data);
}

//Delete Teacher Data -->Admin Dashboard
export const deleteTeacherData=(data)=>{
    // console.log(adminData.classcoordinator_id)
    return myAxios.delete(`/teacher/delete/${data}`,data).then((response)=>response.data);
}


//----------------------------Student------------------------------------


//Get Student Data --->Admin Dashboard
export const getStudentData=(user)=>{
    // ${adminData.classcoordinator_id}
    return myAxios.get(`/student/getByCoordinator/${adminData.classcoordinator_id}`).then((response)=>response.data)
}

//Edit Student Data --> Admin Dashboard
export const editStudentData=(user)=>{
    return myAxios.put(`/student/update`,user).then((response)=>response.data)
}

//Delete Student Data --> Admin Dashboard
export const deleteStudentData=(user)=>{
    return myAxios.delete(`/student/delete/${user}`,user).then((response)=>response.data)
}

//Add Student Data --> Admin Dashboard
export const addStudentData=(user)=>{
    return myAxios.post(`/student/add/`,user).then((response)=>response.data)
}



//----------------------------------Subject--------------------------------

//Get Subject Data --->Admin Dashboard
export const getSubjectData=(user)=>{
    return myAxios.get(`/subject/getSubject/${adminData.classcoordinator_id}`).then((response)=>response.data)
}

//update Subject Data ---> Admin Dashboard
export const editSubjectData=(data)=>{
    return myAxios.put(`/subject/update`,data).then((response)=>response.data);
}

//delete Subject Data ---> Admin Dashboard
export const deleteSubjectData=(data)=>{
    return myAxios.delete(`/subject/delete/${data}`,data).then((response)=>response.data);
}

//Add Subject Data ---> Admin Dashboard
export const addSubjectData=(data)=>{
    return myAxios.post(`/subject/add`,data).then((response)=>response.data);
}

//--------------------------------Timetable------------------------------------

//Get Timetable--> Common
export const getTimetableData=(data)=>{
    return myAxios.get(`/Timetable/get/${adminData.classcoordinator_id}`,data).then((response)=>response.data);
}

//Add Timetable--> For Admin
export const addTimetableData=(data)=>{
    return myAxios.post(`/Timetable/add`,data).then((response)=>response.data);
}

//Update Timetable--> For Admin
export const editTimetableData=(data)=>{
    return myAxios.put(`/Timetable/update`,data).then((response)=>response.data);
}

//Delete Timetable--> For Admin
export const deleteTimetableData=(data)=>{
    return myAxios.delete(`/Timetable/delete/${data}`,data).then((response)=>response.data);
}

//-----------------Count ---------------------------

//No of Students--> For Cards
export const noOfStudentsData=(data)=>{
    return myAxios.get(`/student/getCount/${data.classcoordinator_id}`,data).then((response)=>response.data);
}

//No of Teachers--> For Cards
export const noOfTeachersData=(data)=>{
    return myAxios.get(`/teacher/getCount/${data.classcoordinator_id}`,data).then((response)=>response.data);
}

//No of Subject--> For Cards
export const noOfSubjectsData=(data)=>{
    return myAxios.get(`/subject/getCount/${data.classcoordinator_id}`,data).then((response)=>response.data);
}


//----------------Common Table Data (No Permisssion)--------------

//Get Subject Data --->Admin Dashboard
export const getCommonSubjectData=(user)=>{
    return myAxios.get(`/subject/getSubject/${user.classcoordinator_id}`).then((response)=>response.data)
}

//Get Timetable Data --->Admin Dashboard
export const getCommonTimetableData=(user)=>{
    return myAxios.get(`/Timetable/get/${user.classcoordinator_id}`,user).then((response)=>response.data);
}

//Get Coordinator Data from Coordinator Id
export const getCoordinatorData=(user)=>{
    return myAxios.get(`/ClassCoordinator/getById/${user.classcoordinator_id}`,user).then((response)=>response.data);
}