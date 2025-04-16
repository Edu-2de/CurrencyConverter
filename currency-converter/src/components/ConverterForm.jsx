import { useState } from 'react';
import '../styles/ConvertForm.css';


const ConvertForm = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = async (e) => {
    e.preventDefault();
    if (fromCurrency === toCurrency) return;

    const accessKey = "87b11e7f900dc0cd77e1638446e3fb9d";
    const response = await fetch(`https://api.exchangerate.host/convert?access_key=${accessKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
    const data = await response.json();
    setResult(data.result);

  };

  return (
    <form className="convert-form" onSubmit={handleConvert}>
      <input
        type="number"
        className="amount-input"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select  
       className="select-input"
       placeholder="De"
       value={fromCurrency}
       onChange={(e) => setFromCurrency(e.target.value)}
      >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
      </select>
      <select  
       className="select-input"
       placeholder="Para"
       value={toCurrency}
       onChange={(e) => setToCurrency(e.target.value)}
      >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
      </select>
   
      <input
       type="number"
       readOnly
       className="result-input"
       placeholder="Resultado"
       value={result}
      />
      <button type="submit" className="add-button">Adicionar</button>
    </form>
  );
};

export default ConvertForm;