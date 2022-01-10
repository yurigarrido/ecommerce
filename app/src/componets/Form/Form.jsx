import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Input from '../Input/Input';

const Form = () => {
  const {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    cep,
    setCep,
    log,
    setLog,
    city,
    setCity,
    number,
    setNumber,
    payMethod,
    setPayMehtod,
  } = useContext(GlobalContext);
  return (
    <form>
      <Input text="Nome" placeholder="Petter" value={name} onChange={setName} />
      <Input
        text="Sobrenome"
        placeholder="Parker"
        value={lastName}
        onChange={setLastName}
      />
      <Input
        text="Email"
        placeholder="miranha@marvel.com"
        value={email}
        onChange={setEmail}
      />
      <Input
        text="CEP"
        placeholder="000000000-00"
        type="number"
        value={cep}
        onChange={setCep}
      />
      <Input
        text="logradouro"
        placeholder="Multiverso :D"
        value={log}
        onChange={setLog}
      />
      <Input
        text="cidade"
        placeholder="Brasília"
        value={city}
        onChange={setCity}
      />
      <Input
        text="Numéro de telefone com DDD"
        placeholder="(61) 88888-8888"
        type="number"
        value={number}
        onChange={setNumber}
      />
      <p>forma de pagamento</p>
      <select
        name="payment"
        value={payMethod}
        onChange={({ target }) => setPayMehtod(target.value)}
      >
        <option select value="option">
          Opções
        </option>
        <option value="credit">Crédito</option>
        <option value="debit">Débito</option>
        <option value="pix">Pix</option>
        <option value="bolet">Boleto</option>
      </select>
    </form>
  );
};

export default Form;
