import React, { useEffect, useState } from "react";
import "./css/main.css";

const UserInput = () => {
  const [user, setUser] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // Извлечение данных из Local Storage
    const storedName = localStorage.getItem("user");
    if (storedName) {
      setUser(storedName);
    }
  }, []);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("user", user);
  };

  const [storedName, setStoredName] = useState({
    firstName: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setStoredName(data);
    }
  }, []);
  return (
    <div className="user-input">
      <input
        className="user-input"
        type="text"
        id="localStorageData"
        onChange={handleChange}
        value={storedName.firstName}
      />
    </div>
  );
};

export default UserInput;
