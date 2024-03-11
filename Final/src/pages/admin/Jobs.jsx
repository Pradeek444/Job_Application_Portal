// Jobs.jsx
import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import JobCard from '../../components/JobCard';
import JobForm from '../../components/JobForm';
import instance from '../../services/axios'; // Import the axios instance
import { addJob, deleteJob } from '../../services/admin';

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        role: '',
        companyName: '',
        salary: '',
        description: '',
        type:'',
    });

    const fetchData = async () => {
        try {
            const response = await instance.get('http://localhost:8080/api/v1/admin/jobs/get');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        try {
            console.log(formData);
            const res = await addJob(formData); // Submit job data
            console.log(res.data);
            setJobs([...jobs, formData]);
            setFormData({ // Reset the formData state
                role: '',
                companyName: '',
                salary: '',
                description: '',
                type: '', // Reset the type field
            });
            // fetchData()// Close dialog
            setOpen(false); 
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteJob = async (id) => {
        try {
            await deleteJob(id);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="admin-job">
            <Button variant="contained" onClick={handleClickOpen}>
                Add Job
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <JobForm formData={formData} setFormData={setFormData} />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Add Job
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="jobs-container">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        id={job.id}
                        name={job.role}
                        username={job.companyName}
                        bio={job.description}
                        views={job.salary}
                        type={job.type}
                        onDelete={handleDeleteJob}
                        onChange={fetchData}
                    />
                ))}
            </div>
        </div>
    );
}
