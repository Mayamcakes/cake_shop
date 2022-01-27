import { FC } from 'react';
import './Card.scss';

type CardProps = {
    picture: string,
    item:string,
    price:number | string,
    type?:string,
    onClick?:()=>void,
}

const Card:FC<CardProps> = ({
  picture, item, price, type, onClick,
}) => (

  <div className="card">
    <div className="picture">
      <img className="zoom" src={picture} alt="" width={300} height={300} />
    </div>

    <div className="textSection">
      <span>
        {' '}
        {item}
      </span>
      <span onClick={onClick} className="card__buy">&#128722;</span>
      <span>
        {' '}
        {price}
      </span>
    </div>
  </div>

);
export default Card;
