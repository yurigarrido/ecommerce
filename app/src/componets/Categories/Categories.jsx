import React, { useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';

import * as S from './styled';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

const Categories = () => {
  const { responseCategories, getProductsFromCategoryAndQuery } =
    useContext(GlobalContext);
  const [searchByCategorie, setSearchByCategorie] = useState(false);

  return (
    <S.Categories>
      <div>
        <p onClick={() => setSearchByCategorie(!searchByCategorie)}>
          Pesquise por categoria:
        </p>
        <button onClick={() => setSearchByCategorie(!searchByCategorie)}>
          {searchByCategorie ? <AiFillCloseCircle /> : <BsArrowsAngleExpand />}
        </button>
      </div>
      {searchByCategorie && (
        <aside>
          {responseCategories &&
            responseCategories.map((categ) => {
              return (
                <button
                  key={categ.id}
                  onClick={() => {
                    getProductsFromCategoryAndQuery('byClickButton', categ.id),
                      setSearchByCategorie(!searchByCategorie);
                  }}
                >
                  {categ.name}
                </button>
              );
            })}
        </aside>
      )}
    </S.Categories>
  );
};

export default Categories;
