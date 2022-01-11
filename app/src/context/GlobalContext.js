import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [search, setSearch] = useState('');
  const [responseCategories, setResponseCategories] = useState(null);
  const [categories, setCategories] = useState(1);
  const [dataCards, setDataCards] = useState(null);
  const [carItems, setCarItems] = useState(null);
  //form
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [cep, setCep] = useState(null);
  const [log, setLog] = useState(null);
  const [city, setCity] = useState(null);
  const [number, setNumber] = useState(null);
  const [payMethod, setPayMehtod] = useState(null);

  const addToCard = (card, index) => {
    const newCard = {
      id: card.id,
      title: card.title,
      price: card.price,
      key: index,
    };
    carItems ? setCarItems([...carItems, newCard]) : setCarItems([newCard]);
  };

  const payload = {
    search,
    setSearch,
    responseCategories,
    categories,
    setCategories,
    dataCards,
    carItems,
    setCarItems,
    addToCard,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    log,
    setLog,
    city,
    setCity,
    number,
    setNumber,
    payMethod,
    setPayMehtod,
    cep,
    setCep,
    setResponseCategories,
    setDataCards,
  };

  return (
    <GlobalContext.Provider value={payload}>{children}</GlobalContext.Provider>
  );
};

GlobalStorage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalContext;
