import { useState } from "react";

function Form({ setUsername, fetchUserData }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue);
    fetchUserData(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Upiši GitHub korisnika"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
