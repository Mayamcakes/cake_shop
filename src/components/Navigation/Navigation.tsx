import { Link } from 'react-router-dom';
import './Navigation.scss';
import { FC } from 'react';

type NavigationProps = {
  sum?:number,
}

const Navigation:FC<NavigationProps> = ({ sum }) => (
  <div className="nav__box">
    <div>
      <Link to="/">
        <img src="https://js-beginners.github.io/filter-project/img/logo.svg" alt="doughnut" />
      </Link>
    </div>

    <div className="nav__link-box">
      <Link to="/" className="nav__link">Home</Link>
      <Link to="/about" className="nav__link">About</Link>
      <button className="nav__link" onClick={() => window.scrollTo(0, 1155)}>Store</button>
    </div>

    <div className="nav__contacts">
      <span>&#128222;</span>
      <span>+123 456 789</span>
    </div>

    <div className="nav__shopping">
      <button className="nav__button">
        &#128722;
        {sum}
      </button>
    </div>
  </div>

);

export default Navigation;
