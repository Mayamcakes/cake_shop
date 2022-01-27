import { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Welcome from '../components/Welcome/Welcome';
import AboutUs from '../components/AboutUs/AboutUs';
import Button from '../components/Buttons/Button';
import Input from '../components/Input/Input';
import Card from '../components/Cards/Card';
import Heading from '../components/Headings/Heading';
import buttonTitles from '../data/buttonTitles';
import shopItems from '../data/shopItems';

const Home = () => {
  const [filterCards, setFilterCards] = useState(shopItems);
  const [search, setSearch] = useState('');

  const clickHandlerFilterCards = (item:string) => {
    if (item === 'ALL') {
      setFilterCards(shopItems);
      return;
    }
    const newArr = shopItems.filter(({ type }) => type === item);
    setFilterCards(newArr);
  };
  return (
    <>
      <Navigation />
      <Welcome />
      <AboutUs />

      <div className="contentWrapper">
        <div className="heading">
          <Heading
            firstWord="Our"
            secondWord="Store"
          />
        </div>

        <div className="buttonWrapper">
          {buttonTitles.map(({ buttonTitle }) => (
            <Button
              key={buttonTitle}
              buttonName={buttonTitle}
              clickHandler={() => clickHandlerFilterCards(buttonTitle)}
            />
          ))}
        </div>

        <div>
          <Input
            input={search}
            setInput={setSearch}
          />
        </div>

        <div className="cardBox">
          {filterCards.filter((item) => item.type.toLowerCase().includes(search.toLowerCase()))
            .map(({ title, imgSrc, price }) => (
              <Card
                key={price}
                picture={imgSrc}
                item={title}
                price={`$ ${price}`}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default Home;
