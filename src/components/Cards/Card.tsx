import { FC } from 'react';
import './Card.scss';

type CardProps = {
    picture: string,
    item:string,
    price:number | string,
    type?:string,
}

const Card:FC<CardProps> = ({
  picture, item, price, type,
}) => (

  <div className="card">
    <div className="picture">
      <img className="zoom" src={picture} alt="" width={300} height={300} />
      <span className="card__buy">Buy</span>
    </div>

    <div className="textSection">
      <span>
        {' '}
        {item}
      </span>
      <span>
        {' '}
        {price}
      </span>
    </div>
  </div>

);
export default Card;
