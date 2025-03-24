<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { getStockData } from './services/apiServices';

const apiResponse = getStockData()
</script>

<template>
  <div class="p-4">
    <div class="flex flex-col items-start">
      <h2 class="text-4xl font-bold text-sky-900">Financial Dashboard</h2>
      <p class="mt-2 text-lg text-gray-600">Track stocks and cryptocurrencies in real-time.</p>
    </div>
  </div>

  <div class="flex flex-col lg:flex-row h-screen bg-gray-100">
    <!-- Left Sidebar (Stacked on Small Screens) -->
    <aside class="w-full lg:w-64 bg-gray-800 text-white p-4 mb-4 lg:mb-0">
      <h2 class="text-xl font-bold mb-4">Dashboard</h2>
      <ul class="space-y-2">
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Overview</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Stocks</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Cryptocurrencies</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Transactions</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Analytics</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Reports</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center space-x-2 hover:text-blue-400">
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </aside>

    <!-- Main Dashboard Container -->
    <main class="flex flex-1 flex-col lg:flex-row bg-gray-100 p-4 overflow-y-auto">
      <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-4 w-full">
        <!-- Main Content (Stacked on Small Screens) -->
        <div class="flex-1 bg-white p-4 rounded-lg shadow-md mb-4 lg:mb-0">
          <h1 class="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>
          <p class="mt-2 text-gray-600">Track your investments and financial data here.</p>
        </div>

        <!-- Watchlist (Stacked on Small Screens) -->
        <aside class="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-xl font-bold text-gray-800">Watchlist</h2>
          <p class="mt-2 text-sm text-gray-600">Track your favorite assets</p>
          <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            + Add to Watchlist
          </button>
        </aside>
      </div>
    </main>
  </div>



  <div>
    <h2>Stocks</h2>
    <p>TTop performing stocks today</p>

    <div>
      <p>Name</p>
      <p>Price</p>
      <p>Change</p>
      <p>% Change</p>
      <p>Volume (24h)</p>
    </div>

    <div>
      <p>Apple Inc.<br>AAPL</p>
      <p>Microsoft Corporation <br>MSFT</p>
      <p>Alphabet Inc. <br>GOOGL</p>
      <p>Amazon.com, Inc. <br>AMZN</p>
      <p>Tesla, Inc.<br>TSLA</p>
    </div>

  </div>

  <div>
    <h2>Cryptocurrencies</h2>
    <p>Top cryptocurrencies by market cap</p>

    <div>
      <p>Name</p>
      <p>Price</p>
      <p>24h Change</p>
      <p>Market Cap</p>
      <p>Volume (24h)</p>
    </div>

    <div>
      <p>Bitcoin <br>BTC</p>
      <p>Ethereum <br>ETH</p>
      <p>Binance Coin <br>BNB</p>
      <p>Solana <br>SOL</p>
      <p>Cardano<br>ADA</p>
    </div>
    
  </div>


  <div>
    <h2>Market News</h2>
    <p>Latest financial news and updates</p>

    <h3>Fed Signals Potential Rate Cuts in 2024 as Inflation Cools</h3>
    <p>Financial Times . 2 hours ago . Economy</p>

    <h3>Apple Unveils New AI Features for iPhone and Mac</h3>
    <p>TechCrunch . 4 hours ago . Technology</p>

    <h3>Bitcoin Surges Past $42,000 as Institutional Adoption Grows</h3>
    <p>CoinDesk . 6 hours ago . Cryptocurrency</p>

    <h3>Tesla Announces New Gigafactory in Asia, Shares Jump 3%</h3>
    <p>Reuters . 8 hours ago . Automotive</p>

    <h3>Oil Prices Fall on Concerns About Global Demand</h3>
    <p>Bloomberg . 10 hours ago . Commodities</p>
  </div>
</template>
