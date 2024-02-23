import  { useState } from 'react';
import '../../assets/css/Job.css'

import AdminNav from '../../Components/AdminNav';

function ViewJobs() {
  // Mock job data
  const mockJobs = [
    { id: 1, title: 'Software Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'New York', salary: '$100,000' },
    { id: 2, title: 'Data Scientist', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'San Francisco', salary: '$120,000' },
    { id: 3, title: 'Web Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'Los Angeles', salary: '$90,000' },
    { id: 4, title: 'UX/UI Designer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', location: 'Chicago', salary: '$95,000' },
    // Add more mock job data as needed
  ];

  const [jobs] = useState(mockJobs);

  return (
    <>
    <AdminNav/>
    <div className="view-jobs-container">
      <h2><center>Available Jobs</center></h2>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ViewJobs;
