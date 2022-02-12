import React from "react";
import { Link } from "react-router-dom";

const UserSingle = (props) => {
  return (
    <div className="row">
      <div className="col s3">
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
              Email: {props.player.email} <br></br> First Subscription: {props.player.created_date}
            </p>
          </div>
          <div className="card-action">premission level: {props.player.ability}</div>
          <i class="material-icons delete" onClick={props.deleteUser.bind(this)}>
            delete
          </i>
          <Link to={"/users/edituser"}>
            <i class="material-icons edit">edit</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSingle;
