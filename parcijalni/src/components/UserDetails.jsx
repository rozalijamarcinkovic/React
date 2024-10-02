const UserDetails = ({ userData, repos }) => {
  return (
    <div>
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="150" />
          <h2>{userData.name}</h2>
          <p>Location: {userData.location || "Not provided"}</p>
          <p>Bio: {userData.bio || "No bio available"}</p>
          <h3>Repositories:</h3>
          <ul className="repo-list">
            {repos.map((repo) => (
              <li key={repo.id} className="repo-item">
                <span className="repo-name">{repo.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
