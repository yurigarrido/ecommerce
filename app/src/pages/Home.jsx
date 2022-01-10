import React from 'react';
import Card from '../componets/Card/Card';
import Categories from '../componets/Categories/Categories';
import Header from '../componets/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <div>
        <Card />
      </div>
    </>
  );
};

export default Home;
