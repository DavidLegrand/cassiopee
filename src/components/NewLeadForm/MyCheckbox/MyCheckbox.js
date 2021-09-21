import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import { FormCheck } from "react-bootstrap";

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: props.type });
  return (
    <>
      <FormCheck
        name={props.id || props.name}
        id={props.id || props.name}
        isInvalid={meta.touched && meta.error}
        label={children}
        type={props.type}
        {...field}
        {...props}
      ></FormCheck>

      {meta.touched && meta.error ? (
        <FormCheck.Feedback type="invalid">{meta.error}</FormCheck.Feedback>
      ) : null}
    </>
  );
};

MyCheckbox.propTypes = {
  children: PropTypes.string,
};

export default MyCheckbox;
