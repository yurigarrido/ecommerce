import React, { createContext } from 'react';
import PropTypes from 'prop-types';

// esse eu importo para usar no useContext
const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [search, setSearch] = React.useState('');
  const [responseCategories, setResponseCategories] = React.useState(null);
  const [categories, setCategories] = React.useState(1);
  const [dataCards, setDataCards] = React.useState(null);
  const [carItems, setCarItems] = React.useState(null);

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
  };

  return (
    <GlobalContext.Provider value={payload}>{children}</GlobalContext.Provider>
  );
};

GlobalStorage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default GlobalContext;
