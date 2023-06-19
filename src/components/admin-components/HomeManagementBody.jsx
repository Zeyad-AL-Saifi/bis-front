import React, { useState } from "react";
import ImageComp from "../../components/admin-components/ImageComp";
import TextComp from "../../components/admin-components/TextComp";
import NewsModal from "../modals/newsModal";
import NewsContainerManager from "./NewsContainerManager";

const HomeManagementBody = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <div className="container  ">
        <ImageComp />
        <hr className="rounded" />
        <TextComp />
        <hr className="rounded" />
        <div>
          <NewsContainerManager />
        </div>
        <hr className="rounded" />
        <div>
          <button
            className="btn btn-dark w-100 mb-4 p-3"
            onClick={handleShowModal}
          >
            Click here to Add new news
          </button>
        </div>
      </div>
      <NewsModal handleCloseModal={handleCloseModal} showModal={showModal} />
    </div>
  );
};

export default HomeManagementBody;