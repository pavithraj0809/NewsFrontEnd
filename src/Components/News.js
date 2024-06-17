import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import "../Components/News.css";
import axios from "axios";
import toast from "react-hot-toast";

const News = () => {
  useEffect(() => {
    fetchAuthors();
    fetchCategory();
    getData();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    clearData();
    setShow(true);
  };
  const [fullscreen, setFullscreen] = useState(true);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://news-back-end-iota.vercel.app/content/get"
      );
      console.log("Data", response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `https://news-back-end-iota.vercel.app/content/delete/${id}`
      );
      console.log("data", response);
      toast.error(response.data.message, { position: "top-center" });

      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const [add, setAdd] = useState({
    _id: "",
    heading: "",
    id: "",
    author: "",
    category: "",
    image: "",
    content: "",
  });
  const clearData = () => {
    setAdd({
      _id: "",
      heading: "",
      id: "",
      author: "",
      category: "",
      image: "",
      content: "",
    });
  };

  const handleAdd = async () => {
    // e.preventDefault();
    try {
      alert(JSON.stringify(add));
      const formData = new FormData();
      formData.append("image", add.image);
      formData.append("heading", add.heading);
      formData.append("content", add.content);
      formData.append("author", add.author);
      formData.append("category", add.category);
      let response;
      if (add._id) {
        alert(add._id);
        response = await axios.put(
          `https://news-back-end-iota.vercel.app/content/put/${add._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message, { position: "top-center" });
      } else {
        response = await axios.post(
          "https://news-back-end-iota.vercel.app/content/post",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success(response.data.message, {
          position: "top-center",
          style: { color: "black", background: "orange" },
        });
      }

      console.log(response.data);
      console.log("data", response.data);
      setShow(false);
      getData();
      clearData();
    } catch (error) {
      console.log(error);
    }

    // try {
    //   let response;
    //   if (add._id == "") {
    //     response = await axios.post("http://localhost:4000/content/post", add);
    //     console.log("data", response);
    //   } else {
    //     response = await axios.put(
    //       `http://localhost:4000/content/put/${add._id}`,
    //       add
    //     );
    //   }
    //   console.log("data", response.data);
    //   setShow(false);
    //   getData();
    //   clearData();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const edit = (id) => {
    setShow(true);
    const filterData = data.filter((response) => response._id === id);
    console.log(filterData);
    setAdd({
      _id: id,
      heading: filterData[0].heading,
      content: filterData[0].content,
      author: filterData[0].author,
      category: filterData[0].category,
      image: filterData[0].image,
    });
  };

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(
        "https://news-back-end-iota.vercel.app/user/get"
      );
      setAuthor(response.data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };
  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        "https://news-back-end-iota.vercel.app/user/get"
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  //

  return (
    <>
      <Modal
        show={show}
        // size="lg"
        fullscreen={fullscreen}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-dark">Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a Heading"
                autoFocus
                value={add.heading}
                onChange={(e) => setAdd({ ...add, heading: e.target.value })}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-dark">News Content</Form.Label>
              <Form.Control
                value={add.content}
                as="textarea"
                onChange={(e) => setAdd({ ...add, content: e.target.value })}
                rows={10}
              />
            </Form.Group>
          </Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-dark">Author</Form.Label>
            {/* <Form.Control type="" placeholder="Enter a userName" autoFocus /> */}
            <Form.Control
              as="select"
              value={add.author}
              onChange={(e) => setAdd({ ...add, author: e.target.value })}
            >
              <option>Select an author</option>
              {author.map((author) => (
                <option key={author._id} value={author.name}>
                  {author.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label className="text-dark">Category</Form.Label>
            <Form.Control
              as="select"
              value={add.category}
              onChange={(e) => setAdd({ ...add, category: e.target.value })}
            >
              <option value="">Select an Category</option>
              {category.map((category) => (
                <option key={category._id} value={category.category}>
                  {category.category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label className="text-dark">Upload Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(event) =>
                setAdd({ ...add, image: event.target.files[0] })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12"></div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center my-4">
            <button className="btn btn-primary" onClick={handleShow}>
              Add
            </button>
          </div>
        </div>
      </div>
      <Container>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Heading</th>

              <th>Author</th>
              <th>Category</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((resdata, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{resdata.heading}</td>
                  <td>{resdata.author}</td>

                  <td>{resdata.category}</td>

                  <td className="d-flex text-center">
                    <button
                      className=" btn btn-success  mx-2"
                      onClick={() => edit(resdata._id)}
                    >
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

export default News;
