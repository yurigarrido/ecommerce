import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import GlobalContext from '../../context/GlobalContext';

const Card = () => {
  const { dataCards, addToCard } = React.useContext(GlobalContext);

  return (
    <S.Container>
      {!dataCards && <p>loading...</p>}
      {dataCards &&
        dataCards.map((card, index) => {
          return (
            <S.Card key={index}>
              <Link to={`details/${card.id}`}>
                <S.Title>{card.title}</S.Title>
                <S.Price>R$ {card.price}</S.Price>
                <S.SubPrice>
                  12x R$ {(+card.price / 12).toFixed(2)} sem juros
                </S.SubPrice>
              </Link>
              <div>
                <img src={card.thumbnail} alt={`imagem de ${card.title}`} />
              </div>
              <button
                onClick={() => addToCard(card, index + Math.random() * 100)}
              >
                adicionar ao carrinho
              </button>
            </S.Card>
          );
        })}
    </S.Container>
  );
};

export default Card;
