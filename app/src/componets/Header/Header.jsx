import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

import Button from '../Button/Button';
import Input from '../Input/Input';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import * as S from './styled';

const Header = () => {
  const { getProductsFromCategoryAndQuery, setSearch, search } =
    useContext(GlobalContext);
  return (
    <S.Header>
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
      </div>
      <ShoppingCart />
    </S.Header>
  );
};

export default Header;
