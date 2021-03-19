import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    website: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !user.name ||
          !user.emailAddress ||
          !user.address ||
          !user.phoneNumber ||
          !user.website
        )
          return;

        props.addUser(user);
        setUser(initialFormState);
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
          value={user.phoneNumber}
          placeholder="Phone Number"
          inputProps={{
            name: "phoneNumber",
            required: true,
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
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
