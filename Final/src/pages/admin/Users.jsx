import ProfileCard from "../../components/Card";
import '../../assets/css/jobs.css'; // Import the CSS file
import { useEffect, useState } from "react";
import { getUser } from "../../services/admin";

export default function Users() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getUser();
                setProfile(res.data);
                console.log(profile);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once after initial render

    return (
        <div className="jobs-container"> {/* Apply the jobs-container class */}
            {profile.map(user => (
                <ProfileCard
                    key={user.id}
                    name={user.firstname}
                    username={user.email}
                    bio="I'm a Front End Developer, follow me to be the first to see my new work."
                    views="15K"
                    projects="82"
                    followers="1.3M"
                />
            ))}
        </div>
    );
}
