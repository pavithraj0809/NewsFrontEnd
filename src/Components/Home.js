import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/Home.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (_id) => {
    // console.log(_id)
    navigate(`/detail/${_id}`);
  };
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/content/get");
      console.log("Data", response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const backendPath = "http://localhost:4000/";
  return (
    <>
      <div className="width">
        <div className="Container ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="text-center mt-5 pt-3 ">
                <b>Daily Updates</b>
              </h1>
              <h6 className="my-3 p-3">
                {" "}
                News websites have changed the way we get our information,
                providing many advantages that fit our busy lives. They are
                available 24/7, allowing us to access the latest news whenever
                we want. With real-time updates, we can stay informed about
                events as they happen. These websites are accessible on various
                devices, making it easy to read news on the go. They offer a
                wide range of topics, including politics, sports, and
                entertainment, catering to different interests. The use of
                multimedia such as videos and images enhances the reading
                experience. Additionally, news websites allow for personalized
                content and notifications, ensuring we get news that matters to
                us. Many of these sites are free, making it a cost-effective way
                to stay informed. Finally, they help reduce the environmental
                impact by eliminating the need for paper
              </h6>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="my-4">
                <img
                  src="../images/img2.jpg"
                  alt="About Website"
                  className="img-fluid pt-3 clsimg p-3"
                  style={{ width: "100%", justifyContent: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
      <div className="row">
      {data.map((e, index) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-12 mt-4 p-2">
              <Card  style={{ width: "18rem"}}>
                <Card.Img variant="top" src={backendPath + e.image} />

                <Card.Body>
                  <Card.Title>{e.heading}</Card.Title>
                  <Row className="justify-content-center pt-3">
                    <Col className="col-lg-3 col-md-3 col-sm-12"></Col>
                    <Col className="col-lg-6 col-md-6 col-sm-12">
                      <Button
                        variant="primary"
                        onClick={() => handleClick(e._id)}
                        className=""
                      >
                        Detail
                      </Button>
                    </Col>
                    <Col className="col-lg-3 col-md-3 col-sm-12"></Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          )})}
       
      
      </div>
      </div>
      

    </>
  );
};

export default Home;
