import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import Button from '../componets/Button/Button';

const Checkin = () => {
  const { carItems, setCarItems } = useContext(GlobalContext);

  const removeItem = (card) => {
    const newList = carItems.filter((item) => item.key !== card.key);
    setCarItems(newList);
  };

  return (
    <div>
      <Link to="/">Voltar</Link>
      <p>aqui é onde checo meus itens no carrinho</p>
      <ul>
        {carItems &&
          carItems.map((card, index) => {
            return (
              <li key={index}>
                <p>{card.title}</p>
                <p>{card.price}</p>
                <button onClick={() => removeItem(card)}>Remover</button>
              </li>
            );
          })}
      </ul>
      <p>
        valor total: R$
        {carItems
          ? carItems.reduce((total, item) => {
              const result = Number(total + item.price);
              return result;
            }, 0)
          : '0,00'}
      </p>
      <div>
        {carItems.length >= 1 ? (
          <Link to="payment">Proximo</Link>
        ) : (
          <Link to="/">continuar comprando</Link>
        )}
      </div>
      {carItems.length >= 1 ? (
        <Button text="esvaziar carrinho" onClick={() => setCarItems(null)} />
      ) : (
        <p>seu carrinho está vazio</p>
      )}
    </div>
  );
};

export default Checkin;
