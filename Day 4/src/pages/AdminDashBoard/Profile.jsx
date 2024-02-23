
// import { useState } from 'react';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "../assets/css/Profile.css";
// // import './profile.css'; // Import the CSS file

// function Profile() {
  
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone: '',
//     birthday: '',
//     gender: 'Male', // Default value
//     nationality: '',
//     monthly_income: ''
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//     // Handle form submission here, you can access form data from formData state
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   return (
//     <div className="yellow-background"> 
//     <div className="container">
//       <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
//         <form onSubmit={handleSubmit}>
//           <h3 className="text-center">Personal Information</h3>
//           <div className="row">
//             <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
//               <div className="form-group">
//                 <label className="profile_details_text">First Name:</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   className="form-control"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   required
//                   disabled={!isEditing}
//                 />
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
//               <div className="form-group">
//                 <label className="profile_details_text">Last Name: </label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   className="form-control"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   required
//                   disabled={!isEditing}
//                 />
//               </div>
//             </div>
//           </div>
//           {/* Rest of the input fields follow the same pattern */}
//           <div className="row">
//   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//     <div className="form-group">
//       <label className="profile_details_text">Email Address:</label>
//       <input
//         type="email"
//         name="email"
//         className="form-control"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         disabled={!isEditing}
//       />
//     </div>
//   </div>
// </div>
// <div className="row">
//   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//     <div className="form-group">
//       <label className="profile_details_text">Mobile Number:</label>
//       <input
//         type="tel"
//         name="phone"
//         className="form-control"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//         pattern="[0-9]{10}"
//         disabled={!isEditing}
//       />
//     </div>
//   </div>
// </div>
// <div className="row">
//   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//     <div className="form-group">
//       <label className="profile_details_text">Date Of Birth:</label>
//       <input
//         type="date"
//         name="birthday"
//         className="form-control"
//         value={formData.birthday}
//         onChange={handleChange}
//         required
//         disabled={!isEditing}
//       />
//     </div>
//   </div>
// </div>
// <div className="row">
//   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//     <div className="form-group">
//       <label className="profile_details_text">Gender:</label>
//       <select
//         name="gender"
//         className="form-control"
//         value={formData.gender}
//         onChange={handleChange}
//         required
//         disabled={!isEditing}
//       >
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//     </div>
//   </div>
// </div>
// <div className="row">
//   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//     <div className="form-group">
//       <label className="profile_details_text">Nationality:</label>
//       <input
//         type="text"
//         name="nationality"
//         className="form-control"
//         value={formData.nationality}
//         onChange={handleChange}
//         required
//         disabled={!isEditing}
//       />
//     </div>
//   </div>
// </div>
// <div className="row">
//   <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//     <div className="form-group">
//       <label className="profile_details_text">Monthly Income:</label>
//       <input
//         type="text"
//         name="monthly_income"
//         className="form-control"
//         value={formData.monthly_income}
//         onChange={handleChange}
//         required
//         disabled={!isEditing}
//       />
//     </div>
//   </div>
// </div>


//           <div className="row">
//             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
//               <div className="form-group">
//                 {!isEditing ? (
//                   <button type="button" className="btn btn-primary" onClick={handleEdit}>
//                     Edit
//                   </button>
//                 ) : (
//                   <input type="submit" className="btn btn-success" value="Save Changes" />
//                 )}
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Profile;
import { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../../assets/css/Profile.css'

function Profile() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    birthday: '',
    gender: 'Male', // Default value
    nationality: '',
    monthly_income: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load form data from local storage when component mounts
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  useEffect(() => {
    // Save form data to local storage whenever it changes
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle form submission here, you can access form data from formData state
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="yellow-background"> 
      <div className="container">
        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Personal Information</h3>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">First Name:</label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    disabled={!isEditing}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <label className="profile_details_text">Last Name: </label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
            <div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Email Address:</label>
      <input
        type="email"
        name="email"
        className="form-control"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Mobile Number:</label>
      <input
        type="tel"
        name="phone"
        className="form-control"
        value={formData.phone}
        onChange={handleChange}
        required
        pattern="[0-9]{10}"
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Date Of Birth:</label>
      <input
        type="date"
        name="birthday"
        className="form-control"
        value={formData.birthday}
        onChange={handleChange}
        required
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Gender:</label>
      <select
        name="gender"
        className="form-control"
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
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Nationality:</label>
      <input
        type="text"
        name="nationality"
        className="form-control"
        value={formData.nationality}
        onChange={handleChange}
        required
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="form-group">
      <label className="profile_details_text">Monthly Income:</label>
      <input
        type="text"
        name="monthly_income"
        className="form-control"
        value={formData.monthly_income}
        onChange={handleChange}
        required
        disabled={!isEditing}
      />
    </div>
  </div>
</div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                <div className="form-group">
                  {!isEditing ? (
                    <button type="button" className="btn btn-primary" onClick={handleEdit}>
                      Edit
                    </button>
                  ) : (
                    <input type="submit" className="btn btn-success" value="Save Changes" />
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;

