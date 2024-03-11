import { useState } from 'react';
import '../../assets/css/profile.css'; 

function Profile() {
  // State for form data and editing mode
  const [formData, setFormData] = useState({
    first_name: 'Parthiba',
    last_name: 'S',
    email: 'abc@gmail.com',
    phone: '1235469870',
    birthday: '',
    gender: 'Female', // Default value
    nationality: 'Indian'
  });
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle form submission here, you can access form data from formData state
  };

  // Function to handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-container">
      <div className="edit-information-container"> 
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* Heading for the form */}
              <h3 className="profile-heading">Edit Personal Information</h3>

              {/* Row for input fields */}
              <div className="profile-row">
                {/* First name input field */}
                <div className="profile-col">
                  <div className="profile-form-group">
                    <label className="profile-label">First Name:</label>
                    <input
                      type="text"
                      name="first_name"
                      className="profile-form-control"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                {/* Last name input field */}
                <div className="profile-col">
                  <div className="profile-form-group">
                    <label className="profile-label">Last Name: </label>
                    <input
                      type="text"
                      name="last_name"
                      className="profile-form-control"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

            {/* Rest of the input fields */}
<div className="profile-row">
  {/* Input field for email */}
  <div className="profile-col">
    <div className="profile-form-group">
      <label className="profile-label">Email Address:</label>
      <input
        type="email"
        name="email"
        className="profile-form-control"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
<div className="profile-row">
  {/* Input field for phone number */}
  <div className="profile-col">
    <div className="profile-form-group">
      <label className="profile-label">Mobile Number:</label>
      <input
        type="tel"
        name="phone"
        className="profile-form-control"
        value={formData.phone}
        onChange={handleChange}
        required
        pattern="[0-9]{10}"
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
<div className="profile-row">
  {/* Input field for date of birth */}
  <div className="profile-col">
    <div className="profile-form-group">
      <label className="profile-label">Date Of Birth:</label>
      <input
        type="date"
        name="birthday"
        className="profile-form-control"
        value={formData.birthday}
        onChange={handleChange}
        required
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
<div className="profile-row">
  {/* Input field for gender */}
  <div className="profile-col">
    <div className="profile-form-group">
      <label className="profile-label">Gender:</label>
      <select
        name="gender"
        className="profile-form-control"
        value={formData.gender}
        onChange={handleChange}
        required
        disabled={!isEditing}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </div>
</div>
<div className="profile-row">
  {/* Input field for nationality */}
  <div className="profile-col">
    <div className="profile-form-group">
      <label className="profile-label">Nationality:</label>
      <input
        type="text"
        name="nationality"
        className="profile-form-control"
        value={formData.nationality}
        onChange={handleChange}
        required
        disabled={!isEditing}
      />
    </div>
  </div>
</div>

              
              {/* Row for submit button */}
              <div className="profile-row">
                <div className="profile-col">
                  <div className="profile-form-group submit">
                    {/* If not editing, show Edit button, else show Save Changes button */}
                    {!isEditing ? (
                      <button type="button" className="profile-btn profile-btn-primary" onClick={handleEdit}>
                        Edit
                      </button>
                    ) : (
                      <input type="submit" className="profile-btn profile-btn-success" value="Save Changes" />
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
