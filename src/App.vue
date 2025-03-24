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

           <!-- Market Overview Section -->
    <div class="mt-6">
        <h2 class="text-xl font-bold text-gray-800">Market Overview</h2>
        <h6 class="mt-2 text-sm text-gray-600">Live market indices and commodities</h6>

        <!-- Horizontal List of Markets -->
        <div class="flex flex-col lg:flex-row justify-between mt-4 space-y-4 lg:space-y-0">
          <p class="text-center lg:w-1/6 px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700">S&P 500</p>
          <p class="text-center lg:w-1/6 px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700">Dow Jones</p>
          <p class="text-center lg:w-1/6 px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700">Nasdaq</p>
          <p class="text-center lg:w-1/6 px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700">Bitcoin</p>
          <p class="text-center lg:w-1/6 px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700">Ethereum</p>
          <p class="text-center lg:w-1/6 px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700">Gold</p>
        </div>
      </div>
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


  <div class="p-4">
    <!-- Stocks Section -->
    <div>
      <h2 class="text-2xl font-bold text-gray-800">Stocks</h2>
      <p class="mt-2 text-gray-600">Top performing stocks today</p>

      <!-- Table Headers -->
      <div class="flex flex-col lg:flex-row justify-between mt-4 border-b border-gray-300 pb-2">
        <p class="font-semibold text-gray-700 lg:w-1/5">Name</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">Price</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">Change</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">% Change</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">Volume (24h)</p>
      </div>

      <!-- Stock Entries -->
      <div class="mt-4 space-y-4">
        <!-- Apple Inc. -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Apple Inc.<br><span class="text-sm text-gray-500">AAPL</span></p>
          <p class="text-gray-800 lg:w-1/5">$150.25</p>
          <p class="text-green-600 lg:w-1/5">+2.50</p>
          <p class="text-green-600 lg:w-1/5">+1.69%</p>
          <p class="text-gray-800 lg:w-1/5">50M</p>
        </div>

        <!-- Microsoft Corporation -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Microsoft Corporation<br><span class="text-sm text-gray-500">MSFT</span></p>
          <p class="text-gray-800 lg:w-1/5">$300.50</p>
          <p class="text-red-600 lg:w-1/5">-1.75</p>
          <p class="text-red-600 lg:w-1/5">-0.58%</p>
          <p class="text-gray-800 lg:w-1/5">40M</p>
        </div>

        <!-- Alphabet Inc. -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Alphabet Inc.<br><span class="text-sm text-gray-500">GOOGL</span></p>
          <p class="text-gray-800 lg:w-1/5">$2,800.00</p>
          <p class="text-green-600 lg:w-1/5">+10.25</p>
          <p class="text-green-600 lg:w-1/5">+0.37%</p>
          <p class="text-gray-800 lg:w-1/5">30M</p>
        </div>

        <!-- Amazon.com, Inc. -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Amazon.com, Inc.<br><span class="text-sm text-gray-500">AMZN</span></p>
          <p class="text-gray-800 lg:w-1/5">$3,400.00</p>
          <p class="text-red-600 lg:w-1/5">-5.00</p>
          <p class="text-red-600 lg:w-1/5">-0.15%</p>
          <p class="text-gray-800 lg:w-1/5">25M</p>
        </div>

        <!-- Tesla, Inc. -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Tesla, Inc.<br><span class="text-sm text-gray-500">TSLA</span></p>
          <p class="text-gray-800 lg:w-1/5">$700.00</p>
          <p class="text-green-600 lg:w-1/5">+15.00</p>
          <p class="text-green-600 lg:w-1/5">+2.19%</p>
          <p class="text-gray-800 lg:w-1/5">60M</p>
        </div>
      </div>
    </div>
  </div>

  <div class="p-4">
    <!-- Cryptocurrencies Section -->
    <div>
      <h2 class="text-2xl font-bold text-gray-800">Cryptocurrencies</h2>
      <p class="mt-2 text-gray-600">Top cryptocurrencies by market cap</p>

      <!-- Table Headers -->
      <div class="flex flex-col lg:flex-row justify-between mt-4 border-b border-gray-300 pb-2">
        <p class="font-semibold text-gray-700 lg:w-1/5">Name</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">Price</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">24h Change</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">Market Cap</p>
        <p class="font-semibold text-gray-700 lg:w-1/5">Volume (24h)</p>
      </div>

      <!-- Cryptocurrency Entries -->
      <div class="mt-4 space-y-4">
        <!-- Bitcoin -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Bitcoin<br><span class="text-sm text-gray-500">BTC</span></p>
          <p class="text-gray-800 lg:w-1/5">$27,000</p>
          <p class="text-green-600 lg:w-1/5">+3.5%</p>
          <p class="text-gray-800 lg:w-1/5">$520B</p>
          <p class="text-gray-800 lg:w-1/5">20B</p>
        </div>

        <!-- Ethereum -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Ethereum<br><span class="text-sm text-gray-500">ETH</span></p>
          <p class="text-gray-800 lg:w-1/5">$1,900</p>
          <p class="text-red-600 lg:w-1/5">-1.2%</p>
          <p class="text-gray-800 lg:w-1/5">$230B</p>
          <p class="text-gray-800 lg:w-1/5">15B</p>
        </div>

        <!-- Binance Coin -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Binance Coin<br><span class="text-sm text-gray-500">BNB</span></p>
          <p class="text-gray-800 lg:w-1/5">$300</p>
          <p class="text-green-600 lg:w-1/5">+2.1%</p>
          <p class="text-gray-800 lg:w-1/5">$50B</p>
          <p class="text-gray-800 lg:w-1/5">10B</p>
        </div>

        <!-- Solana -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Solana<br><span class="text-sm text-gray-500">SOL</span></p>
          <p class="text-gray-800 lg:w-1/5">$25</p>
          <p class="text-red-600 lg:w-1/5">-0.8%</p>
          <p class="text-gray-800 lg:w-1/5">$9B</p>
          <p class="text-gray-800 lg:w-1/5">5B</p>
        </div>

        <!-- Cardano -->
        <div class="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-2">
          <p class="text-gray-800 lg:w-1/5">Cardano<br><span class="text-sm text-gray-500">ADA</span></p>
          <p class="text-gray-800 lg:w-1/5">$0.50</p>
          <p class="text-green-600 lg:w-1/5">+1.5%</p>
          <p class="text-gray-800 lg:w-1/5">$18B</p>
          <p class="text-gray-800 lg:w-1/5">8B</p>
        </div>
      </div>
    </div>
  </div>


  <div class="p-4">
    <!-- Market News Section -->
    <div>
      <h2 class="text-2xl font-bold text-gray-800">Market News</h2>
      <p class="mt-2 text-gray-600">Latest financial news and updates</p>

      <!-- News Entry 1 -->
      <div class="mt-6 border-b border-gray-300 pb-4">
        <h3 class="text-lg font-bold text-gray-800">Fed Signals Potential Rate Cuts in 2024 as Inflation Cools</h3>
        <p class="mt-2 text-gray-600 flex items-center">
          Financial Times . 2 hours ago .
          <span class="ml-2 px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-700">Economy</span>
        </p>
      </div>

      <!-- News Entry 2 -->
      <div class="mt-6 border-b border-gray-300 pb-4">
        <h3 class="text-lg font-bold text-gray-800">Apple Unveils New AI Features for iPhone and Mac</h3>
        <p class="mt-2 text-gray-600 flex items-center">
          TechCrunch . 4 hours ago .
          <span class="ml-2 px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-700">Technology</span>
        </p>
      </div>

      <!-- News Entry 3 -->
      <div class="mt-6 border-b border-gray-300 pb-4">
        <h3 class="text-lg font-bold text-gray-800">Bitcoin Surges Past $42,000 as Institutional Adoption Grows</h3>
        <p class="mt-2 text-gray-600 flex items-center">
          CoinDesk . 6 hours ago .
          <span class="ml-2 px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-700">Cryptocurrency</span>
        </p>
      </div>

      <!-- News Entry 4 -->
      <div class="mt-6 border-b border-gray-300 pb-4">
        <h3 class="text-lg font-bold text-gray-800">Tesla Announces New Gigafactory in Asia, Shares Jump 3%</h3>
        <p class="mt-2 text-gray-600 flex items-center">
          Reuters . 8 hours ago .
          <span class="ml-2 px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-700">Automotive</span>
        </p>
      </div>

      <!-- News Entry 5 -->
      <div class="mt-6 border-b border-gray-300 pb-4">
        <h3 class="text-lg font-bold text-gray-800">Oil Prices Fall on Concerns About Global Demand</h3>
        <p class="mt-2 text-gray-600 flex items-center">
          Bloomberg . 10 hours ago .
          <span class="ml-2 px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-700">Commodities</span>
        </p>
      </div>
    </div>
  </div>
</template>
