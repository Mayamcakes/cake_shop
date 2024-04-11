import { Link } from 'react-router-dom';
import './Welcome.scss';
import Heading from '../Headings/Heading';
import Button from '../Buttons/Button';

const Welcome = () => (
  <div className="welcome__box">
    <div className="welcome__text">
      <div className="welcome__heading">
        <Heading
          firstWord="Welcome To"
          secondWord="Whimsical Time Bakery"
        />
      </div>

      <div className="welcome_button">
        <Link to="/about">
          <Button buttonName="EXPLORE" />
        </Link>
      </div>
    </div>
  </div>
);

export default Welcome;
