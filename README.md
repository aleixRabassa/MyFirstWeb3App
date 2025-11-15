# Web3 Coffee Shop

A simple web app for connecting to MetaMask, checking your balance, and buying coffee with ETH using Viem.

## Features

- Connect to MetaMask wallet
- Check wallet balance
- Send ETH transactions (buy coffee)
- Input validation with disabled button states
- Modern, responsive UI

## Technologies

- HTML5, CSS3, JavaScript (ES6+)
- Viem (Ethereum library)
- MetaMask

## Prerequisites

- Modern web browser
- [MetaMask](https://metamask.io/) extension installed

## Usage

1. Open `index.html` in your browser
2. Click "Connect Wallet" to connect MetaMask
3. Click "Get balance" to view your balance
4. Enter an ETH amount and click "Buy coffee" to send a transaction

## Project Structure

```
web3-course/
├── src/
│   ├── js/
│   │   ├── index.js        # Main JavaScript logic
│   │   └── constants.js    # Contract address and ABI
│   └── css/
│       └── styles.css      # Styling
├── contracts/
│   └── fundeme-anvil.json  # Contract deployment data
├── index.html              # Main HTML file
└── README.md               # Documentation
```
