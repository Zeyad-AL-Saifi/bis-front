import React, { useState } from "react";

import NoteInTable from "./NoteInTable";
import FilterForm from "../public/filterForm";
import NoteShowModal from "../../modals/NoteShowModal";
import TitleSections from "../../public-components/TitleSections";
const NoteManageBody = ({
  filterNote,
  title,
  handelDelete,
  handelInput,
  handelUpdateStatusCode,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [item, setItem] = useState({});
  const handleShowModal = (item) => {
    setItem(item);
    setShowModal(true);
  };

  const deletehadeler = (item) => {
    if (window.confirm(`Do you really want to delete ${item.note_id}`)) {
      handelDelete(item.note_id);
    }
  };

  const updateHandler = (item) => {
    if (
      window.confirm(`Do you sure you accepte this note ? 👌 ${item.note_id}`)
    ) {
      handelUpdateStatusCode(item);
    }
  };
  const filteredData = filterNote.filter((ele) => ele.note_status_code === 0);

  const data = filteredData.map((ele, index) => {
    return (
      <NoteInTable
        key={ele.note_id}
        index={index}
        ele={ele}
        handelUpdateStatusCode={() => {
          updateHandler(ele);
        }}
        handleShowModal={handleShowModal}
        handelDelete={() => {
          deletehadeler(ele);
        }}
      />
    );
  });

  return (
    <div style={{ minHeight: "670px" }}>
      <FilterForm handelInput={handelInput} />
      <table className=" table">
        <thead>
          <tr>
            <th>
              <TitleSections
                title={title}
                content={
                  "You can show the note and you have the license to accept or reject it "
                }
              />
            </th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
      <div className="text-center">
        <NoteShowModal
          item={item}
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default NoteManageBody;
