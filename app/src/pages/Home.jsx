import React, { useContext } from 'react';
import Button from '../componets/Button/Button';
import Card from '../componets/Card/Card';
import Input from '../componets/Input/Input';
import ShoppingCart from '../componets/ShoppingCart/ShoppingCart';
import GlobalContext from '../context/GlobalContext';

const Home = () => {
  const {
    search,
    setSearch,
    responseCategories,
    categories,
    getProductsFromCategoryAndQuery,
  } = useContext(GlobalContext);
  return (
    <>
      <div>
        <Input
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          onChange={setSearch}
          value={search}
        />
        <Button
          text="pesquisar"
          onClick={getProductsFromCategoryAndQuery}
          type="search"
        />
        <ShoppingCart />
      </div>
      <div>
        {responseCategories && (
          <Input
            onChange={getProductsFromCategoryAndQuery}
            value={categories}
            categories={responseCategories}
          />
        )}
      </div>
      <div>
        <Card />
      </div>
    </>
  );
};

export default Home;
