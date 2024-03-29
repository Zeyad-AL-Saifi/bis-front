import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";

import {
  getAllStudents,
  updateStudents,
} from "../../store/profile/students/studentsSlice";
import FormGroup from "./FormGroup";
import { updateStudentsSchema } from "../../utils/validation/validationSchema";
const EditStudentForm = ({ item, handleCloseModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: item,
    validationSchema: updateStudentsSchema,
    onSubmit: (values) => {
      dispatch(updateStudents(values))
        .then((action) => {
          const message = action.payload.message;
          alert(message);
        })
        .then(() => {
          dispatch(getAllStudents());
        })
        .then(handleCloseModal)
        .catch((error) => {
          alert(error.message);
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Form.Label htmlFor="name">Student Full Name :</Form.Label>
        <Form.Control
          type="text"
          name="full_name"
          className="form-control"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.full_name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.full_name}
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup>
        <Form.Label htmlFor="address">Address :</Form.Label>
        <Form.Control
          type="text"
          name="address"
          className="form-control"
          id="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          isInvalid={!!formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup>
        <Form.Label htmlFor="number">Mobile Number :</Form.Label>
        <Form.Control
          type="text"
          name="mobile_number"
          className="form-control"
          id="number"
          onChange={formik.handleChange}
          value={formik.values.mobile_number}
          isInvalid={!!formik.errors.mobile_number}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.mobile_number}
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup>
        <Form.Label htmlFor="date_of_birth">Data of birth</Form.Label>
        <Form.Control
          type="text"
          name="major"
          className="form-control"
          id="date_of_birth"
          onChange={formik.handleChange}
          value={formik.values.date_of_birth}
          isInvalid={!!formik.errors.date_of_birth}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.date_of_birth}
        </Form.Control.Feedback>
      </FormGroup>

      <FormGroup>
        <Form.Label htmlFor="email">Email :</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          isInvalid={!!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </FormGroup>

      <Button className="w-100" variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditStudentForm;
