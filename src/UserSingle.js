import React from "react";

const UserSingle = (props) => {
  return (
    <div className="row">
      <div className="col s2">
        <div className="card">
          <div className="card-image">
            <img src="avatar-15.png" alt="Soccer image" />
            <span className="card-title red">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>User name: {props.player.userName} </p>

            <p>
              Email: {props.player.email} <br></br> Adding user on: {props.player.created_date}
            </p>
          </div>
          <div className="card-action">premission level: {props.player.ability}</div>
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
