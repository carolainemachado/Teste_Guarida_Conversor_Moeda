import React, { useState } from 'react';
import { exchangeRates } from '../data/exchangeRates';
import { Currency } from '../types/Currency';

const Converter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD');
  const [toCurrency, setToCurrency] = useState<Currency>('EUR');
  const [result, setResult] = useState<number | null>(null);

  const convertCurrency = () => {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;
    setResult(convertedAmount);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Conversor de Moeda</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Valor"
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value as Currency)}>
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <span>para</span>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value as Currency)}>
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <button onClick={convertCurrency}>Converter</button>

      {result !== null && (
        <h2>
          Resultado: {result.toFixed(2)} {toCurrency}
        </h2>
      )}
    </div>
  );
};

export default Converter;
