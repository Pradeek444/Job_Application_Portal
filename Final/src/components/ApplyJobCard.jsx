import PropTypes from 'prop-types';
import '../assets/css/card.css'; // Import the CSS file
import { useState } from 'react';
import { applyJob } from '../services/user';

function JobCard(props) {
    const { name, username, bio, views, type, followers } = props;
    const authDataString = sessionStorage.getItem("persist:root");
    const [formData, setFormData] = useState({
        companyName: username,
        role: name,
        name: '',
        email: '',
        resume: "to/path/pdf"
    });

    
    const handleApply = async () => {
        if (authDataString) {
            const authData = JSON.parse(authDataString);
            const auth = JSON.parse(authData.auth);
            const eemail = auth.role.sub;
            const uname=auth.role.iss;
            // setFormData(prevFormData => ({
            //     ...prevFormData,
            //     email: eemail,
            //     name:uname
            // }));
            formData.name=uname;
            formData.email=eemail;
            console.log(eemail);
            console.log(uname);
        }
        console.log(formData)
        try{
            const res=await applyJob(formData);
            console.log("applied"+res.data);
        }
        catch(error)
        {
            console.log(error);
        }
        // Implement apply functionality here
    };

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
                        <h4>{type} Application</h4>
                    </li>
                </ul>
                <div className="links">
                    <button className="follow" onClick={handleApply}>Apply Now</button>
                </div>
            </div>
        </div>
    );
}

JobCard.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, // Fixed typo here
    followers: PropTypes.string.isRequired
};

export default JobCard;
