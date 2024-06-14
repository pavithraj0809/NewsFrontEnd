import React from "react";
import "../Components/About.css";

const About = () => {
  return (
    <>
      <div className="row width">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h2 className="text-center my-4">About US!</h2>
          <h6 className="p-3">
            News Website Our news website delivers up-to-date news coverage with
            a user-friendly design. The navbar includes Home, About, News,
            Users, and Contact sections. The
            <b style={{ color: "red" }}> Home</b> page introduces the website,
            while <b style={{ color: "red" }}> About</b> details its features.
            On the <b style={{ color: "red" }}>Users</b> page, clicking the
            "Add" button opens a modal for new user registration with fields for
            author name, news categories, mobile number, email, and password.
            The <b style={{ color: "red" }}>News</b> page features an "Add News"
            button that triggers a modal for submitting news, including fields
            for the heading, author, content, images, and with author and
            categories retrieved from registered users. Built with React and
            React-Bootstrap, the site ensures a seamless experience across
            devices.The news are showed in home page in list .the list have the{" "}
            <b style={{ color: "red" }}>Detail </b>
            button .The user clicked the detail button it's navigated to the
            detailed News.<b style={{ color: "red" }}>Contact </b>This page
            includes the contact information about the News Website(daily
            updates).
          </h6>
        </div>
      </div>
    </>
  );
};

export default About;
