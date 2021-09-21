import React, { useState, useEffect } from "react";
import axios from 'axios'
import * as Yup from "yup";
import MyForm from "./Form";
import { Switch, Route, useLocation } from "react-router-dom";

const NewLeadForm = () => {

  const [validationMessage, setValidationMessage] = useState("")
  const [origin, setOrigin] = useState("")
  const location = useLocation();
  useEffect(() => {
    setOrigin(() => location.pathname === '/CPL' || location.pathname === '/cpl' ? "performance" : "landing")
    //console.log(location.pathname)
  }, [location])
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    mobile_phone: "",
    address: "",
    postal_code: "",
    city: "",
    achat: "",
    bien: ""
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .trim()
      .max(50, "Le prénom ne doit pas faire plus de 50 caractères")
      .required("Le prénom est requis"),
    lastname: Yup.string()
      .trim()
      .max(50, "Le nom ne doit pas faire plus de 50 caractères")
      .required("Le nom est requis"),
    email: Yup.string()
      .email("Adresse email invalide")
      .required("L'email est requis"),
    mobile_phone: Yup.string()
      .matches(
        /^(\+33|0)[0-9](( |\.|-)?[0-9]{2}){4}$/,
        "Merci d'entrer un numéro de téléphone mobile valide"
      )
      .required("Le numéro de téléphone est requis"),
    address: Yup.string(),
    postal_code: Yup.number()
      .required("Le code postal est requis")
      .typeError("Le code postal doit être un nombre")
      .integer("Le code postal doit être un nombre")
      .positive("Le code postal doit être un nombre")
      .test("len", "Le code postal doit être valide", (val) =>
        val ? val.toString().length === 5 : true
      ),
    city: Yup.string(),
    achat: Yup.string().required("Le type d'achat est obligatoire"),
    bien: Yup.string().required("Le type de bien est obligatoire"),
  });



  const onSubmit = async (values, { setSubmitting, resetForm }) => {

    values.origine = origin

    setValidationMessage("...")
    //console.log(values)
    axios.post("https://terre-des-arts.fr/api/sendmail", values)
    setSubmitting(false);
    resetForm();
    setValidationMessage("Merci. Votre envoi a bien été pris en compte")
  };

  return (
    <Switch>
      <Route exact path={["/", "/CPL", "/cpl"]}>
        <MyForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validationMessage={validationMessage}
        ></MyForm>
      </Route>
    </Switch>
  );
};

export default NewLeadForm;
