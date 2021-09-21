import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Formik, Form } from "formik";
import MyInput from "../MyInput";
import MySelect from "../MySelect";
import { Button, Row, Col } from "react-bootstrap";

const MyForm = ({ initialValues, validationSchema, onSubmit, validationMessage }) => {
  const [size, setsize] = useState("")
  const handleWindowSizeChange = () => {
    setsize(() => window.innerWidth <= 992 || window.innerHeight >= 1000 ? "lg" : window.innerHeight >= 900 ? "" : "sm")

  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Row>
          <Col className="col-12 mb-1">
            <MyInput name="firstname" type="text" placeholder="Prénom*" size={size} />
          </Col>
          <Col className="col-12 mb-1">
            <MyInput name="lastname" type="text" placeholder="Nom*" size={size} />
          </Col>
          <Col className="col-12 mb-1">
            <MyInput name="email" type="email" placeholder="Email*" size={size} />
          </Col>
          <Col className="col-12 mb-1">
            <MyInput name="mobile_phone" type="tel" placeholder="Téléphone*" size={size} />
          </Col>
          <Col className="col-12 mb-1">
            <MyInput name="address" type="text" placeholder="Adresse" size={size} />
          </Col>
          <Col className="pr-0 col-6 mb-1">
            <MyInput name="postal_code" type="text" placeholder="Code Postal*" size={size} />
          </Col>
          <Col className="pl-0 col-6 mb-1">
            <MyInput name="city" type="text" placeholder="Ville" size={size} />
          </Col>
          <Col className="col-12 mb-1">
            <MySelect name="achat" value="" size={size} >
              <option value="" disabled hidden>Type d'achat envisagé</option>
              <option value="Résidence principale">Résidence principale</option>
              <option value="Résidence secondaire">Résidence secondaire</option>
              <option value="Investissement">Investissement</option>
            </MySelect>
          </Col>
          <Col className="col-12 mb-1">
            <MySelect name="bien" value="" size={size} >
              <option value="" disabled hidden>Type de bien recherché</option>
              <option value="Studio">Studio</option>
              <option value="2 Pièces">2 Pièces</option>
              <option value="3 Pièces">3 Pièces</option>
              <option value="4 Pièces">4 Pièces</option>
              <option value="Autre">Autre</option>
            </MySelect>
          </Col>
          {validationMessage && <Col className="col-12 mb-1">
            <strong>{validationMessage}</strong>
          </Col>
          }
          {/* <Col className="col-12 mb-1">
            <small>
              <span className={styles.form_text}>
                En validant le formulaire vous acceptez d'être recontacté(e)
                et/ou de recevoir des informations et des offres concernant la
                résidence Imprimerie Nouvelle à Marseille. Vous recevrez des
                informations par e-mail dans le respect de la réglementation en
                matière de protection des données à caractère personnel, et dans
                le respect de vos consentements.
              </span>
            </small>
          </Col> */}
          <Col className="col-12">
            <Button
              type="submit"
              size={size}
              block
              variant='danger'
              style={{ backgroundColor: "var(--red)" }}
            >
              Valider
            </Button>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

MyForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationMessage: PropTypes.string
};

export default MyForm;
