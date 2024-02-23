import  { useState } from 'react';
import '../../assets/css/CreateJob.css'
import AdminNav from '../../Components/AdminNav';

const CreateJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleJobCreation = () => {
    // Here you can implement the logic to create the job with the provided data
    console.log("Job created:", { jobTitle, description, location, salary });
    // Reset the input fields after job creation
    setJobTitle('');
    setDescription('');
    setLocation('');
    setSalary('');
  };

  return (
    <>
    <AdminNav/>
    <div className='call'>
    <div className="admin-dashboard">
      <h2>Create Job</h2>
      <div className="input-group">
        <label>Title</label>
        
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Salary</label>
        <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
      </div>
      <button className="create-job-btn" onClick={handleJobCreation}>Create Job</button>
    </div>
    </div>
    </>
  );
};

export default CreateJob;
