import React from 'react';

import  FormGroup  from "../../components/form/FormGroup";

const TeacherForm = () => {
    return (
        <form>
            <FormGroup>
              <label htmlFor="name">Teacher Full Name :</label>
              <input type="text" className="form-control" id="name" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="address">Address :</label>
              <input type="text" className="form-control" id="address" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="number">Mobile Number :</label>
              <input type="number" className="form-control" id="number" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="magor">Magor</label>
              <input type="text" className="form-control" id="magor" />
            </FormGroup>
            <FormGroup>
                <label>
                    Gender :
                    <input
                        className='m-1'
                  type="radio"
                  name="user-type"
                  value="male"
                  // checked={userType === "student"}
                  // onChange={handleUserTypeChange}
                />
                Male
              </label>
              <label>
                    <input
                         className='m-1'
                  type="radio"
                  name="user-type"
                  value="female"
                  // checked={userType === "teacher"}
                  // onChange={handleUserTypeChange}
                />
                Female
              </label>
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email :</label>
              <input type="email" className="form-control" id="email" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password :</label>
              <input type="password" className="form-control" id="password" />
            </FormGroup>
            <FormGroup>
              <label >
                {" "}
                Is Admin ?
                    <input
                         className='m-2'
                  type="checkbox"
                  //   checked={acceptedTerms}
                  //   onChange={handleCheckboxChange}
                />
              </label>
            </FormGroup>

            <FormGroup>
            <label htmlFor="file">Upload Image :</label>
            <input type="file" className="form-control-file" id="file" />

            </FormGroup>
          </form>
    );
}

export default TeacherForm;