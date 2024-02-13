import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data when component mounts
        axios.get('http://localhost:5000/api/users/3') 
            .then(response => {
                // Handle successful response
                console.log(response.data);
                setUserData(response.data); 
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching user data:', error);
            });
    }, []); // Empty dependency array to run effect only once

    return (
        <div>
            {userData ? (
                <div>
                    <h2>User Profile</h2>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    {/* Render other user data as needed */}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default UserProfile;
