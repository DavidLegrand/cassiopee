import Carousel from "react-bootstrap/Carousel";
import images from "assets/slider";
import css from "./Slider.module.css";
import Scroll from "../Scroll";
import Maquette from "../Maquette/Maquette";

const Slider = () => {
  const slides = [
    {
      image: images[0],
      alt: 'Facade',
      caption: <><span>Une élégante résidence,</span><br /><span>réservée à 32 privilégiés</span></>
    }, {
      image: images[1],
      alt: 'Interieur',
      caption: <><span>Des prestations tout confort !</span></>
    }, {
      image: images[2],
      alt: 'Terrase',
      caption: <><span>Votre nouvel art de vivre</span><br /><span>à Villeneuve-Loubet</span></>
    },]
  return (
    <div className={`${css.sliderContainer} w-100`} id="slider">
      <Carousel className={css.slider} controls={true} interval={500000} indicators={false} slide={false}>
        {slides.map((s, i) => (
          <Carousel.Item style={{ height: "100%" }} key={i}>
            <img className={`${css.slide} d-block w-100`} src={s.image} alt={s.alt} />
            <Carousel.Caption>{s.caption}</Carousel.Caption>
          </Carousel.Item>
        ))}
        <Carousel.Item style={{ height: "100%" }} key={"button"} className={css.maquette}>
          <img className={`${css.slide} ${css.maquetteImg} d-block w-100`} src={images[3]} alt={"Maquette 3d"} />
          <Maquette />
        </Carousel.Item>
      </Carousel>
      <Scroll to="content" />
    </div>
  );
};

export default Slider;
