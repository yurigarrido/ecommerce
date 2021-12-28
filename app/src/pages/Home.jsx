import React, { useContext } from 'react';
import Input from '../componets/Input/Input';
import GlobalContext from '../context/GlobalContext';

const Home = () => {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <div>
      <Input
        placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        onChange={setSearch}
        value={search}
      />
    </div>
  );
};

export default Home;
