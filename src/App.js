import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  // Data
  const usersData = [
    {
      id: 1,
      name: "Shibu",
      emailAddress: "Shibu@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 2,
      name: "Wick",
      emailAddress: "Wick@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 3,
      name: "Smith",
      emailAddress: "Smith@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 4,
      name: "Andrew",
      emailAddress: "Andrew@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 5,
      name: "Bobe",
      emailAddress: "Bobe@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 6,
      name: "Cena",
      emailAddress: "Cena@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 7,
      name: "Obama",
      emailAddress: "Obama@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 8,
      name: "Victor",
      emailAddress: "Victor@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 9,
      name: "Sam",
      emailAddress: "Sam@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 10,
      name: "Steve",
      emailAddress: "John@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 11,
      name: "Amal",
      emailAddress: "Amal@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 12,
      name: "Ravi",
      emailAddress: "Ravi@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 13,
      name: "John",
      emailAddress: "John@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 14,
      name: "Vimal",
      emailAddress: "Vimal@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
    {
      id: 15,
      name: "Rajani",
      emailAddress: "Rajani@gmail.com",
      address: "lvl 6, 338 Pitt Street Sydney NSW 2000 Australia",
      phoneNumber: "+61 477 572 222",
      website: "https://www.bigtincan.com/",
    },
  ];

  const initialFormState = {
    id: null,
    name: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    website: "",
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      emailAddress: user.emailAddress,
      address: user.address,
      phoneNumber: user.phoneNumber,
      website: user.website,
    });
  };

  return (
    <div className="container">
      <h1> Social card</h1>
      <div className="flex-row">
        <div>
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>

    // 	<div>
    //   <ProfileUi
    //       imgUrl='https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg'
    //       name='vineet jk'
    //       designation='designer'
    //       />
    // </div>
  );
};

export default App;
