import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="emailAddress"
        value={user.emailAddress}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleInputChange}
        placeholder="Address"
      />
      <div>
        <PhoneInput
          name="phoneNumber"
          value={user.phoneNumber}
          placeholder="Phone Number"
          inputProps={{
            name: "phoneNumber",
            required: true,
            autoFocus: true,
            onChange: handleInputChange,
          }}
        />
      </div>
      <input
        type="text"
        name="website"
        value={user.website}
        onChange={handleInputChange}
        placeholder="Website"
      />{" "}
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
