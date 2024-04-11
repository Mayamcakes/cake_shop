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
        Welcome to Whimsical Time Bakery: Nairobis Time-Twisting Delights,Crafting confections that defy both time and taste.
        Step into our enchanted bakery in Nairobi, Kenya, and prepare to be transported through the ages with our whimsical creations.
        Try our Temporal Tartlets, where each bite takes you on a journey through history, from the Renaissance to the Roaring Twenties. Or indulge in our Cosmic Cake Pops, which sparkle with galaxies and taste like stardust.
        Feeling adventurous? Sink your teeth into our Chrono-Chocolate Croissants, where every flaky layer is a portal to a different era.
        And don not forget to sip on our Eternal Elixirs, specially brewed to tantalize your taste buds while bending the fabric of time itself.
        At Whimsical Time Bakery, every bite is a magical adventure. Come join us as we bake our way through the ages!
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
