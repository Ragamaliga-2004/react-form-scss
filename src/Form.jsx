import './Form.scss';

const Form = ({studentId, studentName, dateOfBirth, emailId, password}) => {

  return (
    <div className="card">
        <h3 className='one'>Student_Id:  {studentId}</h3>
        <h3 className='two'>Student_Name:  {studentName}</h3>
        <h3 className='three'>Date_Of_Birth:  {dateOfBirth}</h3>
        <h3 className='four'> Email_id : {emailId}</h3>
        <h3 className='five'> password : {password}</h3>

    </div>
  );
};

export default Form;