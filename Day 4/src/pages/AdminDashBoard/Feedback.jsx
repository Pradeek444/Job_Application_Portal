
import AdminNav from '../../Components/AdminNav';
import '../../assets/css/Feedback.css'



function Feedback() {
  return (
    <>
    <AdminNav/>
    
      <div className="price-list-container">
        <h1><center>FeedBack</center></h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Feed</th>
            </tr>
          </thead>
          <tbody>
           <tr>
              <td>nandha</td>
              <td>nandha@gmail.com</td>
              <td>Good platform</td>
            </tr>   
            <tr>
              <td>Navanee</td>
              <td>navanee@gmail.com</td>
              <td>Great platform</td>
            </tr> 
          </tbody>
        </table><br></br>
        <button className="update-button">Read</button>
      </div>
    </>
  );
}

export default Feedback;