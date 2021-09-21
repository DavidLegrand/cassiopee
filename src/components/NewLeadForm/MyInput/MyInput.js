import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import { FormLabel, FormControl } from "react-bootstrap";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label && <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>}
      <FormControl
        className="text-input"
        name={props.id || props.name}
        id={props.id || props.name}
        isInvalid={meta.touched && meta.error}
        isValid={meta.touched && !meta.error}
        size={props.size}
        {...field}
        {...props}
      >

      </FormControl>
      {meta.touched && meta.error ? (
        <FormControl.Feedback type="invalid">{meta.error}</FormControl.Feedback>
      ) : null}
    </>
  );
};

MyInput.propTypes = {
  label: PropTypes.string,
};

export default MyInput;
