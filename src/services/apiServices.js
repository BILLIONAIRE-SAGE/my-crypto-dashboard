// src/services/api.js
import axios from 'axios';

// Base URL for Alpha Vantage API
const ALPHA_VANTAGE_API = 'https://www.alphavantage.co/query';

// Replace with your Alpha Vantage API key
const ALPHA_VANTAGE_API_KEY = '0FZWY80QCMAQRE8I'; // Use your actual API key here

// Fetch stock market data
export const getStockData = async (symbol, interval = '5min') => {
  try {
    const response = await axios.get(ALPHA_VANTAGE_API, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol, // e.g., 'IBM'
        interval: interval, // e.g., '5min'
        apikey: ALPHA_VANTAGE_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};