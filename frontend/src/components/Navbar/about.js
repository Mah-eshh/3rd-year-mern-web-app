import React from "react";
import "./style.css";
import imgg from "./imgg.png";

const About = () => {
  return (
    <div class="aboutcontainer">
      <div class="aboutcard">
        <div class="imgBx">
          <img src={imgg} />
          <div class="aboutcontent">
            <h3>About</h3>

            <p>
              Hey!... You are welcome to MAHESH blog App. This is a something
              new blog article web application. In here you can create a new
              account and you can also register with the App on google or other
              in your choice. But it is must to write a very new article of your
              own if you need. If you have any trouble or doubts feel free to
              <p>
                <b>CONTACT ME @</b>
              </p>
              <a href="https://www.facebook.com/Mahesh0Abeykoon">
                {" "}
                <b>Facebook</b>
              </a>
              <un> &</un>
              <a href="https://www.instagram.com/mahe_sh">
                {" "}
                <b>Instagram</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
