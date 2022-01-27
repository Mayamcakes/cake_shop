import './AboutUs.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Heading from '../Headings/Heading';
import Button from '../Buttons/Button';

const AboutUs = () => (
  <div className="about__box">
    <div className="about__text-section">
      <Heading
        firstWord="About"
        secondWord="Us"
      />

      <p className="about__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!
      </p>
      <Link to="/about">
        <Button
          buttonName="EXPLORE"
        />
      </Link>

    </div>

    <div className="about__picture-section">
      <img className="about__image" src="https://js-beginners.github.io/filter-project/img/sweets-1.jpeg" alt="macaroon" />
    </div>
  </div>
);

export default AboutUs;
