import { FC } from 'react';
import './Button.scss';
import buttonTitles from '../../data/buttonTitles';

type ButtonProps = {
    buttonName: string,
    clickHandler?: () => void
}

const Button:FC<ButtonProps> = ({ buttonName, clickHandler }) => (
  <button
    className="filterButton"
    onClick={clickHandler}
  >
    {buttonName}
  </button>
);

export default Button;
