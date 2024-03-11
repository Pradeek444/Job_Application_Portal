import { useState } from 'react';
import '../assets/css/jobform.css'; // Import your CSS file
import { addJob } from '../services/admin';

const JobForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(name);
        console.log(formData);
        if (name === 'type') {
            console.log('Selected job type:', value);
        }
    };

    return (
        <div className="job-form-container">
            <h2>Add Job Details</h2>
            <form>
                <label htmlFor="role">Role:</label><br />
                <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} required /><br /><br />

                <label htmlFor="companyName">Company Name:</label><br />
                <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required /><br /><br />

                <label htmlFor="salary">Salary:</label><br />
                <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} /><br /><br />

                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" rows="4" cols="50" value={formData.description} onChange={handleChange} required></textarea><br /><br />

                {/* Dropdown for job type */}
                <label htmlFor="jobType">Job Type:</label><br />
                <select id="type" name="type" value={formData.type} onChange={handleChange}>
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                </select><br /><br />
            </form>
        </div>
    );
};

export default JobForm;
