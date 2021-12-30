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

  async function getCategories() {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(url);
    const json = await response.json();
    json.pop();
    json.unshift({ id: 1, name: 'Categorias' });
    setResponseCategories(json);
  }

  async function getProductsFromCategoryAndQuery(type, categoryId, query) {
    let url =
      'https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY';
    if (type === 'dropdonw') {
      url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    } else if (type === 'searchByText') {
      url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    } else {
      url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    }
    const response = await fetch(url);
    const json = await response.json();
    setDataCards(json.results);
  }

  const addToCard = (card, index) => {
    const newCard = {
      id: card.id,
      title: card.title,
      price: card.price,
      key: index,
    };
    carItems ? setCarItems([...carItems, newCard]) : setCarItems([newCard]);
  };

  React.useEffect(() => {
    getCategories();
    getProductsFromCategoryAndQuery('', '', 'acer');
  }, []);

  const payload = {
    search,
    setSearch,
    responseCategories,
    categories,
    setCategories,
    getProductsFromCategoryAndQuery,
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
  };

  return (
    <GlobalContext.Provider value={payload}>{children}</GlobalContext.Provider>
  );
};

GlobalStorage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalContext;
