import  { useState } from 'react';
import '../../assets/css/apply.css';
import UserNav from '../../Components/UserNav';

const ApplyJob= () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = () => {
    // Here you can implement the logic to submit the job application
    console.log("Job application submitted:", { fullName, email, phoneNumber, coverLetter });
    // Reset the input fields after submission
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setCoverLetter('');
  };

  return (
    <>
    <UserNav/>
    <div className="user-dashboard">
      <h2>Apply for Job</h2>
      <div className="input-group">
        <label>Name</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Phone</label>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Description</label>
        <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
      </div>
      <button className="apply-btn" onClick={handleSubmit}>Apply</button>
    </div>
    </>
  );
};

export default ApplyJob;
