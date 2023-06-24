import { useDispatch } from "react-redux";
import Check from "../../utils/guard/load/Check";
import CustomDropdown from "../public-components/CustomDropdown/CustomDropdown";
import { useState } from "react";
import getFormattedDateTime from "../../hooks/getDate";
import { addTeacherNote } from "../../store/notes/teacherNotes/teacherNotesSlice";
const FormSendNotes = ({ userInfo }) => {
  const [forHow, setForHow] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setForHow(selectedValue);
  };

  const date = getFormattedDateTime();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!forHow || !note) {
      alert(
        "you cannot send not wthout select for how you want send and write youe note please"
      );
    } else {
      dispatch(
        addTeacherNote({
          teacher_id_from: userInfo.teacher_id,
          teacher_name_from: userInfo.full_name,
          student_name_to: forHow,
          note_status_code: 0,
          note: note,
          time: date,
        })
      ).then(() => {
        alert("Send Note Successfully 👌😁");
      });
    }
  };
  return (
    <div className="px-5 ">
      <div className="row">
        <h3 className=" m-4">Do you want to send a note ?</h3>
        <div className="add-new-note ">
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                value={userInfo.full_name}
                className="form-control"
                id="nameInput"
                disabled={true}
                placeholder="Enter your name"
              />
            </div>
            <CustomDropdown handleSelect={handleSelect} />
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                rows={3}
                placeholder="Enter your message"
                defaultValue={""}
                value={note}
                onChange={(event) => {
                  setNote(event.target.value);
                }}
              />
            </div>
            <Check>
              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </Check>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSendNotes;
