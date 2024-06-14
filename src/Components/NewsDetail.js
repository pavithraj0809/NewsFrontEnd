import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../Components/Newsdetail.css'
const NewsDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/content/get");
      console.log("Data", response.data);

      setData(response.data.find((e) => e._id == id));
    } catch (error) {
      console.log(error);
    }
  };
  const backendPath = "http://localhost:4000/";
  return (
    <>
    <div className="NewsDetailWidth">
      <div className="row mt-4">
        <div className="col-lg-3 col-md-3 col-sm-12"></div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <div className="my-4">
            <img
              src={backendPath + data.image}
              alt="About Website"
              className="img-fluid text-center"
              style={{ width: "100%", justifyContent: "center" }}
            />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12"></div>
      </div>
      <div className="row p-5">
        <h1>{data.heading}</h1>
        <div className="d-flex mt-3">
        <h4 className="text-danger mx-5">Author : {data.author}</h4>
        <h4 className="text-danger">Category : {data.category}</h4>
        </div>

        <p className="my-4 ">{data.content}</p> 
      </div>
      </div>
    </>
  );
};

export default NewsDetail;
