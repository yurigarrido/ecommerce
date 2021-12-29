import React from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
// import Button from '../Button/Button';

const Card = () => {
  const { dataCards, carItems, setCarItems } = React.useContext(GlobalContext);

  const addToCard = (card, index) => {
    const newCard = {
      id: card.id,
      title: card.title,
      price: card.price,
      key: index,
    };
    carItems ? setCarItems([...carItems, newCard]) : setCarItems([newCard]);
  };

  return (
    <div>
      {dataCards &&
        dataCards.map((card, index) => {
          return (
            <div key={index}>
              <Link to={`details/${card.id}`}>
                <div>{card.title}</div>
                <div>{card.price}</div>
                <div></div>
                <img src={card.thumbnail} alt={`imagem de ${card.title}`} />
              </Link>
              <button
                onClick={() => addToCard(card, index + Math.random() * 100)}
              >
                Add to Card
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
