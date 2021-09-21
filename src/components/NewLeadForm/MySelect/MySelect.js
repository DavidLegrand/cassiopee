import React from "react";
import PropTypes from "prop-types";
import { useField } from 'formik';
import { FormControl } from "react-bootstrap";


const MySelect = ({ children, size, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>

      <FormControl
        className="form-select"
        as="select"
        onChange={() => helpers.setTouched(true)}
        onBlur={() => helpers.setTouched(true)}
        isInvalid={meta.touched && meta.error}
        isValid={(meta.touched && !meta.error) || field.value}
        size={size}
        custom
        {...field}
      >
        {children}

      </FormControl>
      {meta.touched && meta.error ? (
        <FormControl.Feedback type="invalid">{meta.error}</FormControl.Feedback>
      ) : null}
    </>
  );
};

MySelect.propTypes = {
  label: PropTypes.string,
};

export default MySelect;
