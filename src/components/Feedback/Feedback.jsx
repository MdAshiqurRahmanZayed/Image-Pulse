// import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
// import AllFeedbacks from "./AllFeedbacks";

const Feedback = (props) => {
  const initialValues = {
    photoId: props.photoId,
    name: "",
    message: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const url =
      "https://image-pulse-44040-default-rtdb.firebaseio.com/feedbacks.json";
    axios
      .post(url, values)
      .then((response) => console.log("axios then response", response.data))
      .catch((error) => console.log(error.message));
    console.log("handle submiut values:", values);
    resetForm();
    setSubmitting(false);

    props.addFeedBack(values);
  };

  let form = (
    <h6> 
      <b>
      Please Login for feedback
      </b>
    </h6>
  )

  if(localStorage.getItem('token')){
    form = (

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <Field as="textarea" name="message" className="form-control" />
              <ErrorMessage
                name="message"
                component="div"
                className="text-danger"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    )
  }

  return (
    <div>
      <h1>Comments</h1>

      {/* <AllFeedbacks photoId={props.photoId} /> */}
{form}
    </div>
  );
};

export default Feedback;
