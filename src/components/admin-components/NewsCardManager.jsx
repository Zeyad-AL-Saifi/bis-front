import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditNewsPage from "./EditNewsPage";
const NewsCardManager = ({ records, deleteData, loading, error }) => {
  const [showModal, setShowModal] = useState(false);

  const [item, setitem] = useState({});

  const handleShowModal = (item) => {
    setitem(item);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };


   const  data =records.map((ele, index) => {
      return (
        <tr key={ele.news_id}>
          <td>{++index}</td>
          <td>
            <Link to={`posts/${ele.news_id}`}> {ele.title}</Link>
            <p>{ele.description}</p>
          </td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button
                variant="success"
                onClick={() => {
                  handleShowModal(ele);
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  deletehadeler(ele);
                }}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });


  const deletehadeler = (item) => {
    if (window.confirm(`Do you really want to delete ${item.title}`))
      deleteData(item.news_id);
  };

  return (
    <>
      {data}
      <EditNewsPage
        loading={loading}
        item={item}
        error={error}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default NewsCardManager;