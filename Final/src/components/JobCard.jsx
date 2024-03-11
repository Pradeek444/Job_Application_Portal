
import PropTypes from 'prop-types';
import '../assets/css/card.css'; // Import the CSS file
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import JobForm from './JobForm';
import { useState } from 'react';
import { getJobById, updateJob } from '../services/admin';
import { faL } from '@fortawesome/free-solid-svg-icons';

function JobCard(props) {
    const { id,type,name, username, bio, views, projects, followers,onDelete,onChange } = props;
    const handleDelete = () => {
        onDelete(id);
    };
    const [updateData,setUpdateData]=useState([]);
    const handleClickOpen = async(e) => {
        setOpen(true);
        const res=await getJobById(id);
        setUpdateData(res.data);
    };
    const handleClose = async(e) => {
        try{
        const res=await updateJob(id,updateData);
        setUpdateData(res.data);
        console.log(res.data);
        setUpdateData([]);
        setOpen(false);
        onChange();
        }
        catch(error)
        {
            console.log(error);
        }
    };
    const [open, setOpen] = useState(false);
    return (
        <div className="profile-card">
            <div className="infos">
                <div className="name">
                    <h2>{name}</h2>
                    <h4>@{username}</h4>
                </div>
                <p className="text">{bio}</p>
                <ul className="profile-stats">
                    <li>
                        <h3>{views}</h3>
                        <h4>{type}</h4>
                    </li>
                    
                </ul>
                <div className="links">
                    <button className="follow" onClick={handleClickOpen}>Edit</button>
                    <button className="view" onClick={handleDelete}>Delete</button>
                    
                     <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <JobForm formData={updateData} setFormData={setUpdateData} />
                </DialogContent>
                <DialogActions>
                <Button className="follow" variant="contained"onClick={handleClose}>Save</Button>

                    
                </DialogActions>
            </Dialog>
                </div>
            </div>
        </div>
    );
}

JobCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default JobCard;
