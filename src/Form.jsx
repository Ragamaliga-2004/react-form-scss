import './Form.scss';

const Form = ({studentId, studentName, dateOfBirth}) => {

  return (
    <div className="card">
        <h3 className='one'>Student_Id:  {studentId}</h3>
        <h3 className='two'>Student_Name:  {studentName}</h3>
        <h3 className='three'>Date_Of_Birth:  {dateOfBirth}</h3>

    </div>
  );
};

export default Form;