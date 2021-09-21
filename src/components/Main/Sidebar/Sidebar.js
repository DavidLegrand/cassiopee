import React from "react";
import NewLeadForm from "components/NewLeadForm";
import { Row, Col } from "react-bootstrap";
import { TDAColor } from 'assets/logos'
import styles from "./Sidebar.module.css";


const Sidebar = () => {
  return (
    <section className={`${styles.form_container} px-4 pt-2 pb-4`}>
      <Row className={`align-items-center ${styles.row}`}>
        <Col className={`align-self-center col-12 pt-4 pb-2 mb-auto text-center ${styles.background}`}>
          <img alt="" src={TDAColor} height={90} className={`${styles.TDAColor} my-2`} />
          <p className="mt-2 mb-5" style={{ color: 'var(--bold)' }}>Contactez-nous au <a href="tel:+33682010180" className="text-danger h6 font-weight-bold" style={{ color: 'var(--red)' }}>06 82 01 01 80</a></p>
        </Col>
        <Col className='align-self-center col-12 mt-auto mb-auto'>
          <p className="m-0">Pour plus de renseignements sur la résidence Terre des Arts :</p>
          <NewLeadForm></NewLeadForm>
          <p className='m-0'>* Champs obligatoires</p>
        </Col>
        <Col className='align-self-center col-12 mt-auto'>
          <small>
            <span>
              Les informations recueillies sur ce formulaire sont transmises par mail à un conseiller Spy Cassiopée pour vous accompagner dans votre recherche immobilière.
              Elles peuvent par la suite être jusqu'à 3 ans et sont destinées exclusivement aux services marketing et commerciaux du groupe Spy Cassiopée.
              Conformément à la loi « RGPD », vous pouvez exercer votre droit d’accès aux données en cliquant <a href="https://www.spycassiopee.fr/contact/" rel="noreferrer" target="_blank" style={{ color: "#790b16" }}>ici</a>
            </span>
          </small>
        </Col>
      </Row>
    </section>
  );
};

export default Sidebar;
