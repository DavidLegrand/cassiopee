import React from "react";
import { Collapse } from 'react-bootstrap'
import Button from "../../../../node_modules/react-bootstrap/esm/Button";
import css from './Collapsed.module.css'
const Collapsed = ({ open }) => {
  return <Collapse dimension='height' mountOnEnter={true} in={open} timeout={1000} className={css.expanded} >
    <div className={css.content + ' p-4 pt-5'}>
      <p className={css.cursive + " mt-5"}>Groupe familial de constructeurs et promoteurs, nous avons plus de 40
      années d'expertise dans la construction de biens immobiliers, là où il
      fait bon vivre.</p>
      <p className={css.cursive}>Forts de cette longue expérience, nous vous accompagnons tout au
      long de votre projet, depuis son financement, jusqu’à la remise des
      clés de votre appartement…</p>
      <p className='text-center mt-3'><Button variant='danger' style={{ backgroundColor: "var(--red)" }} href="https://www.spycassiopee.fr/" target="_blank">Nos réalisations</Button></p>
      <small style={{ marginTop: "auto" }}>
        SPY CASSIOPÉE : Siren 523 474 831 • 885, avenue Dr Julien Lefebvre, 06270 Villeneuve-Loubet. Illustrations non contractuelles à caractère d’ambiance. Création : Golem Image. Conception : Agence Buenos Aires. Avril 2021.
      </small>
    </div>
  </Collapse >;
};


export default Collapsed;
