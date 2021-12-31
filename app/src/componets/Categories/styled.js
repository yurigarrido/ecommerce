import styled from 'styled-components';

export const Categories = styled.div`
  background-color: #669bbc;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
  }

  div > p {
    margin: 0 auto;
  }

  div,
  aside {
    width: 80%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  div > p {
    color: #fdf0d5;
    text-transform: uppercase;
    opacity: 0.7;
  }

  aside > button {
    font-size: 1.1rem;
    background-color: transparent;
    border: 1px solid #003049;
    border-top: none;
    border-bottom: none;
    border-right: none;
    padding: 0px 5px;
    cursor: pointer;
  }

  aside > button:hover {
    transition: 0.5s;
    background-color: #003049;
    color: #fdf0d5;
  }

  div > button {
    height: 1.6rem;
    width: 1.6rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
