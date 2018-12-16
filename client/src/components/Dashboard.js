import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div
        style={{
          height: "75vh"
        }}
        className="container valign-wrapper"
      >
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>
                Welcome To MailFeed!{" "}
                <span role="img" aria-label="wave">
                  📨{" "}
                </span>
              </b>
              <p className="flow-text grey-text text-darken">
                Create surveys to be sent via email and receive feedback
              </p>
            </h4>
            <a
              href="api/logout"
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              className="btn btn-large waves-effect waves-light hoverable red lighten-1"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
