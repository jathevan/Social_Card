import React from "react";
import ProfileUi from "react-profile-card";
import '../index.css'
const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>User Profile</th>
        {/* <th>Username</th> */}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>
              <ProfileUi
                name={user.name}
                imgUrl="https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg"
                emailAddress={user.emailAddress}
                address={user.address}
                phoneNumber={user.phoneNumber}
                website={user.website}
              ></ProfileUi>
            </td>

            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn"
              >
              <i className="fa fa-edit"></i> 
              </button>
            </td>
            <td>
              <button 
                onClick={() => props.deleteUser(user.id)}
                className="btn"
              >
               <i className="fa fa-trash"></i> 
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
