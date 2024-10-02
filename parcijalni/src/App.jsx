import { useState } from "react";
import Form from "./components/Form";
import UserDetails from "./components/UserDetails";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUserData = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!userResponse.ok) throw new Error("Korisnik nije pronađen");
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (error) {
      alert(error.message);
      setUserData(null);
      setRepos([]);
    }
  };

  const resetApp = () => {
    setUsername("");
    setUserData(null);
    setRepos([]);
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Form setUsername={setUsername} fetchUserData={fetchUserData} />
      {userData && <UserDetails userData={userData} repos={repos} />}
      {userData && <button onClick={resetApp}>Reset</button>}
    </div>
  );
}

export default App;
