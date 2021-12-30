import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

const Details = () => {
  const { dataCards, addToCard } = useContext(GlobalContext);
  const idItem = location.pathname.split('/details/', 2);
  const infoItem = dataCards.filter((card) => {
    return card.id == idItem[1];
  });
  const { title, thumbnail, price } = infoItem[0];
  return (
    <div>
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>{price}</p>
      <button onClick={() => addToCard(infoItem[0], Math.random() * 100)}>
        Add to Card
      </button>
      {infoItem[0].shipping.free_shipping && <h3>Frete Gratis</h3>}
      <Link to="/">Continuar comprando</Link>
      <Link to="/checkin">Voltar para o carrinho</Link>
    </div>
  );
};

export default Details;
