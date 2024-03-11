import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../../assets/css/jobs.css'; // Import the CSS file
import ApplyJobCard from "../../components/ApplyJobCard";
import { getJobByType } from '../../services/user';

export default function JobListing({ jobType }) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        console.log('useEffect called with jobType:', jobType); // Debug statement
        const fetchData = async () => {
            try {
                const res = await getJobByType(jobType);
                setJobs(res.data);
                console.log('Fetched jobs:', res.data); // Debug statement
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchData();
    }, [jobType]); // Include jobType in dependency array to re-fetch data when jobType changes

    console.log('Rendering JobListing with jobType:', jobType); // Debug statement

    return (
        <div className="admin-job">
            <div className="jobs-container"> {/* Apply the jobs-container class */}
                {jobs.map(job => (
                    <ApplyJobCard
                        key={job.id}
                        name={job.role}
                        username={job.companyName}
                        bio={job.description}
                        views={job.salary}
                        type={job.type}
                    />
                ))}
            </div>
        </div>
    );
}

JobListing.propTypes = {
    jobType: PropTypes.string.isRequired, // Define jobType prop validation
};
