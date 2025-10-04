import { students } from "./StudentData";
import { useParams } from "react-router-dom";

const StudentDetailPage = () => {
    const {studentId}=useParams();

    const student =students.find((s)=>s.studentId===parseInt(studentId))
    if (!student) return <p>Student id Not found</p>
  return (
    <div style={{
        border: "1px solid gray",
        padding: "15px",
        width: "300px",
        margin: "20px",
        backgroundColor:'lightpink'
      }}
      >
        <h1>Student Page</h1>
        <h2>Student id : {student.studentId}</h2>
        <h2>Student Name: {student.studentName}</h2>
        <h2>Department : {student.department}</h2>
        <h2>Year of Passing : {student.yearOfPassing}</h2>
    </div>
  )
}

export default StudentDetailPage