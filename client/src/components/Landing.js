import React from "react";

const Landing = () => {
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h1>
            <b>MailFeed!</b>
          </h1>
          <p className="flow-text grey-text text-darken-1">
            Collect feedback from users
          </p>
          <a
            href="/auth/google"
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable red lighten-1"
          >
            Login With Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
