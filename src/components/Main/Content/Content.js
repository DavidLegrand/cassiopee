import React from "react";
import { Row, Col } from "react-bootstrap";
import { TDAColor } from 'assets/logos'
import Scroll from 'components/Main/Scroll'

const Content = () => {
  return (
    <>
      <article id="content" className="mx-0 my-5 d-inline-block w-100">
        <Row>
          <Col className="col-12 text-center pb-3">
            <img alt="" src={TDAColor} height="200" className="mx-auto mw-100" />
          </Col>
          <Col className="col-12 text-justify">
            <p>
              SPY CASSIOPÉE vous présente sa nouvelle résidence Terre des Arts, située à Villeneuve-Loubet.
            </p>
            <p>
              C’est dans le quartier en plein renouveau des Maurettes, à l’angle de l’avenue du Dr. J.Lefebvre et de l‘avenue de la
              Colline que se dessine Terre des Arts. Vous occupez une place de choix, à proximité des axes majeurs de la ville, à 3
              minutes de l’échangeur de l’autoroute A8 desservant toute la métropole Nice-Côte d’Azur et ses 220 000 emplois et à
              13 minutes de Sophia-Antipolis, 1ère technopole européenne.
            </p>
            <p>
              Découvrez la douceur de vivre de la Côte d’Azur, à l’ombre des pins et de la végétation azuréenne, tout en profitant de
              l’animation d’un cœur de ville dynamique avec le Pôle Marina 7 à 500m de la résidence (700 boutiques, commerces,
              loisirs…). Vous rejoignez le bord de mer, à 10 minutes à pied, où la nouvelle marina de Villeneuve-Loubet, Cœur Marina,
              s’offre à vous.
            </p>
            <p>
              Vous habitez une résidence intimiste, de seulement 32 lots. Les appartements du studio au 4 pièces duplex, offrent des
              intérieurs lumineux aux prestations de qualité avec tout le confort du neuf. Les larges terrasses filantes, donnent sur un
              agréable cœur paysager, à la quiétude de la ville, vous permettant des profiter des 300 jours de soleil de
              Villeneuve-Loubet.
            </p>
            <p> 
              Découvrez dès à présent votre nouvelle résidence auprès de votre conseiller dédié.
            </p>
          </Col>
          
          <Col className="col-12 text-justify">
            <Scroll to="slider" />
          </Col>
        </Row>
      </article>
    </>
  );
};

export default Content;
