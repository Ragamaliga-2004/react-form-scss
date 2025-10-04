import { Link } from "react-router-dom";
import { students } from "./StudentData";

const StudentLink = () => {
  return (
    <div>
      <h1>Student List</h1>
      {students.map((s) => (
        <div key={s.studentId}>
          <Link to={`/student/${s.studentId}`}>{s.studentName}</Link>
        </div>
      ))}
    </div>
  );
};

export default StudentLink;
