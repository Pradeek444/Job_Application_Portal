import { useState, useEffect } from 'react';
import '../../assets/css/Userdetails.css';
import AdminNav from '../../Components/AdminNav';

const UserDetails = () => {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    // Fetch job applications from your backend when the component mounts
    // Example: fetchJobApplications();
    // setJobApplications(responseData);
    // For demonstration purpose, I'm using a dummy array
    const dummyData = [
      { id: 1, fullName: 'John Doe', email: 'john@example.com', phoneNumber: '123-456-7890', coverLetter: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, fullName: 'Jane Doe', email: 'jane@example.com', phoneNumber: '987-654-3210', coverLetter: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, fullName: 'Alice Smith', email: 'alice@example.com', phoneNumber: '555-123-4567', coverLetter: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    ];
    setJobApplications(dummyData);
  }, []);

  const handleDelete = (id) => {
    // Filter out the application with the given ID and update the state
    const updatedApplications = jobApplications.filter(application => application.id !== id);
    setJobApplications(updatedApplications);
  };

  const handleUpdate = (id) => {
    // Handle update logic here
    console.log("Update application with ID:", id);
  };

  return (
    <>
      <AdminNav />
      <div className="admin-dashboard">
        <h2>Job Applications</h2>
        <div className="job-applications">
          {jobApplications.map((application) => (
            <div className="job-application" key={application.id}>
              <h3>{application.fullName}</h3>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phoneNumber}</p>
              <p><strong>Cover Letter:</strong> {application.coverLetter}</p>
              <div className="btn-group">
                <button className="update-btn" onClick={() => handleUpdate(application.id)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(application.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDetails;

