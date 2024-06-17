import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../Components/User.css";
import axios from "axios";
import {Table,Container,Row,Col} from "react-bootstrap"
import toast from "react-hot-toast";



const User = () => {
  useEffect(() => {
    getData();
    // clearData();

  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    clearData();
    setShow(true);
  } 

  const [data, setData] = useState([""]);
  const getData = async () => {
    try {
      const response = await axios.get("https://news-back-end-iota.vercel.app/user/get");
      console.log("data", response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `https://news-back-end-iota.vercel.app/user/delete/${id}`
      );
      console.log("data", response);
      // alert("Data Deleted SuccessFully")
      toast.error(response.data.message,{position:"top-center"});

      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const [add, setAdd] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    category: "",
  });
  const clearData = () => {
    setAdd({
      _id: "",
      name: "",
      email: "",
      password: "",
      mobile: "",
      category: "",
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (add._id == "") {
        response = await axios.post("https://news-back-end-iota.vercel.app/user/post", add);
        console.log("data", response);
        toast.success(response.data.message,{position:"top-center"});

      } else {
        response = await axios.put(
          `https://news-back-end-iota.vercel.app/user/put/${add._id}`,
          add
        );
        toast.success(response.data.message,{position:"top-center",style:{ color:"black",background:'orange'}});

      }
      console.log("data", response.data);
      setShow(false);
      getData();
      clearData();
    } catch (error) {
      console.log(error);
    }
  };
  const edit=(id)=>{
    setShow(true)

    const filterData=data.filter((response)=>response._id===id);
    setAdd({
      _id:id,
      name:filterData[0].name,
      email:filterData[0].email,
      password:filterData[0].password,
      mobile:filterData[0].mobile,
      category:filterData[0].category
    })

  }
  return (
    <>
      <Container className="my-5">
      <Row className="d-flex">
        <Col lg={6} md={6} sm={12}>
          <Row>
            <Col lg={6} md={6} sm={12}></Col>
            <Col lg={6} md={6} sm={12}>
              <h4>Daily Updates</h4>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Row>
            <Col lg={6} md={6} sm={12}></Col>
            <Col lg={6} md={6} sm={12}>
              <Button className="btn btn-primary" onClick={handleShow}>
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                value={add.name}
                onChange={(e)=>setAdd({...add,name:e.target.value})}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter a mail" autoFocus 
              value={add.email} 
              onChange={(e)=>setAdd({...add,email:e.target.value})}
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter a strong Password"
                autoFocus
                value={add.password}
                onChange={(e)=>setAdd({...add,password:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter Your Mobile Number"
                autoFocus
                value={add.mobile}
                onChange={(e)=>setAdd({...add,mobile:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="News category" autoFocus 
              value={add.category}
              onChange={(e)=>setAdd({...add,category:e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <table className="table table-bordered table-striped "> */}
      <Container>
      <Table responsive striped bordered hover>

        <thead>
          <tr>
            <th>S.No</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Password</th>
            <th>MobileNumber</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((resdata, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{resdata.name}</td>
                <td>{resdata.email}</td>
                <td>{resdata.password}</td>
                <td>{resdata.mobile}</td>
                <td>{resdata.category}</td>
                <td className="d-flex text-center">
                  <button className=" btn btn-success  mx-2" 
                  onClick={()=>edit(resdata._id)}>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn btn-danger "
                    onClick={() => deleteData(resdata._id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </Container>
    </>
  );
};

export default User;
