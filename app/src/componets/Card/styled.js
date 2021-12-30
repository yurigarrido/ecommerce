import styled from 'styled-components';

export const Container = styled.div`
  background-color: #444;
  display: flex;
  max-width: 80%;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: white;
  max-width: 22%;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  height: 55vh;
  padding: 1rem;
  border: 1px solid yellow;

  a {
    text-decoration: none;
    color: black;
    height: 50%;
  }

  div > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 12rem;
    object-fit: contain;
  }

  button {
    color: green;
    border-radius: 0.4rem;
    height: 2rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  button:hover {
    transition: 0.7s;
    color: white;
    background-color: green;
  }
`;

export const Title = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1rem;
  max-height: 30%;
  font-family: 'Roboto', sans-serif;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 31%;
`;

export const SubPrice = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 1rem;
  display: block;
  margin: -1rem +0.5rem 0;
`;
