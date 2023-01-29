import React from "react";

const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://i.gifer.com/ZZ5H.gif"
        alt="Loaading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="card column" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="card-img-top"></img>
          <div className="card-body">
          <h3 className="card-title">
            {user.first_name} {user.last_name}
          </h3>
          <h4 className="card-text">{user.email}</h4>
          <p>User ID: {user.id}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Users;