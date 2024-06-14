import React from "react";
import "../Components/Contact.css";
import { Container } from "react-bootstrap";

const Contact = () => (
  <>
    <div className="width">
      <div className="row">
        <div className="text-center text-primary my-4">
          <h2>
            <i class="fa-regular fa-address-book mx-3"></i>Contact Us
          </h2>
        </div>
      </div>
      <div className="row mx-2">
        <div className="col-lg-2 col-md-2 col-sm-12 ">
          <h6>
            <i class="fa-solid fa-phone-volume text-danger mx-2 "></i>Phone
            No:+91 4428540001
          </h6>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 ">
          <h6>
            <i class="fa-solid fa-envelope text-danger mx-2"></i>
            dailyupdates@gmail.com
          </h6>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 ">
          <h6>
            <i class="fa-brands fa-youtube text-danger mx-2 "></i>
            Youtube:Daily Updates
          </h6>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h6>
            <i class="fa-brands fa-instagram text-danger mx-2 "></i>
            Instagram:dailyupdates
          </h6>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12 ">
          <h6>
            <i class="fa-brands fa-x-twitter text-danger mx-2"></i>
            Twitter:dailyupdates
          </h6>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <h6>
            <i class="fa-solid fa-tv text-danger mx-2 "></i>
            DailyUpdates
          </h6>
        </div>
      </div>
    </div>
    <hr></hr>
    <div className=" row my-4 width">
      <div className="">
        <div className="my-2 mx-3">
          <h5 className="text-center text-primary">Contact us Via Email</h5>
          <h6>
            <i class="fa-regular fa-square-check mx-2 text-success"></i>
            For Online &Mobile Ads/Content :pavi@dailyupdates.in(Phone NO:+91
            9790674409)
          </h6>
          <h6>
            <i class="fa-regular fa-square-check mx-2 text-success"></i>
            For Print ads :prints@dailyupdates.in(Phone No:+91 44 23456789)
          </h6>

          <h6>
            <i class="fa-regular fa-square-check mx-2 text-success"></i>For
            Content feedback :dotcomdept@dailyupdates.in
          </h6>

          <h6>
            <i class="fa-regular fa-square-check mx-2 text-success"></i>For
            Technical :webmaster@dailyupdates.in
          </h6>
        </div>
      </div>
    </div>
    <hr></hr>
    <h5 className="text-primary text-center">Edition Offices</h5>
    <div className="row mx-3 my-4">
      <div className="col-lg-3 col-md-3 col-sm-12 p-2">
        <h6 className="text-danger">Chennai</h6>
        <b>
          Address:No-38 E VK Sampath Rd, Vepery, Periyamet, Chennai, Tamil
          Nadu 600007 Phone: 085915 85915
        </b>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 p-2">
        <h6 className="text-danger">Salem</h6>
        <b>
          Address:No-30 E VK Gorimedu,salem Tamil Nadu -636008 Phone: 085915
          90915
        </b>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 p-2">
        <h6 className="text-danger">Coimbatore</h6>
        <b>
          Address:No-08 766, Avinashi Road. Coimbatore - 641018 |
          phone:04222215545
        </b>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 p-2">
        <h6 className="text-danger">Bangalore</h6>
        <b>
          Address:54/1, 70th Cross, VI Blo Rajaji Nagar, Bangalore - 560010
          Phone:08023153467
        </b>
      </div>
      </div>
  </>
);
export default Contact;
