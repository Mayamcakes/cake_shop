import { FC } from 'react';
import './Heading.scss';

type HeadingProps = {
    firstWord: string,
    secondWord: string,
}

const Heading:FC<HeadingProps> = ({ firstWord, secondWord }) => (

  <div className="heading">
    <h3 className="firstHeadingWord">{firstWord}</h3>
    <h1 className="secondHeadingWord">{secondWord}</h1>
  </div>

);

export default Heading;
