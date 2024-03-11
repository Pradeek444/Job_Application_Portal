
import PropTypes from 'prop-types';
import '../assets/css/card.css'; // Import the CSS file

function ProfileCard(props) {
    const { name, username, bio, views, projects, followers } = props;

    return (
        <div className="profile-card">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLWo6jGA63byzL5RlMg_mILAZJmyAByEViw&usqp=CAU" alt="Profile" />
            </div>
            <div className="infos">
                <div className="name">
                    <h2>{name}</h2>
                    <h4>@{username}</h4>
                </div>
                <p className="text">{bio}</p>
                <ul className="profile-stats">
                    <li>
                        <h3>{views}</h3>
                        <h4>Views</h4>
                    </li>
                    <li>
                        <h3>{projects}</h3>
                        <h4>Projects</h4>
                    </li>
                    <li>
                        <h3>{followers}</h3>
                        <h4>Followers</h4>
                    </li>
                </ul>
                <div className="links">
                    <button className="follow">View profile</button>
                    <button className="view">Delete</button>
                </div>
            </div>
        </div>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired
};

export default ProfileCard;
