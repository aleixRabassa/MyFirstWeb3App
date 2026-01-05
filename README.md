# My First Web3 App

A decentralized web app for connecting to MetaMask, managing smart contract interactions, and handling ETH transactions using Viem.

## Features

- **Wallet Connection**: Connect to MetaMask wallet seamlessly
- **Balance Checking**: View contract ETH balance in real-time
- **Fund Contract**: Send ETH transactions to fund the contract
- **Withdraw Funds**: Withdraw all funds from the smart contract
- **Input Validation**: Smart button states with real-time validation
- **TypeScript Support**: Full TypeScript implementation with type safety
- **Modern UI**: Responsive design with gradient styling

## Technologies

- HTML5, CSS3
- TypeScript
- Viem v2.43+ (Ethereum library)
- Vite (Development server & build tool)
- MetaMask
- pnpm (Package manager)

## Prerequisites

- Modern web browser
- [MetaMask](https://metamask.io/) extension installed
- Node.js and pnpm (for TypeScript compilation)
- Local Ethereum node (Anvil) running on `http://localhost:8545`

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser to `http://localhost:5173`

## Usage

1. Start the dev server with `pnpm dev`
2. Open your browser to `http://localhost:5173`
3. Click "Connect Wallet" to connect MetaMask
4. Click "Get balance" to view the contract balance
5. Enter an ETH amount and click "Fund" to send ETH to the contract
6. Click "Withdraw all" to withdraw funds from the contract (owner only)

## Project Structure

```
web3-course/
├── src/
│   ├── ts/
│   │   ├── index.ts        # Main TypeScript application logic
│   │   └── constants.ts    # Contract address and ABI
│   └── css/
│       └── styles.css      # Styling with gradient design
├── contracts/
│   └── fundme-anvil.json   # Contract deployment data
├── index.html              # Main HTML file
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # Documentation
```

## Smart Contract Functions

- **fund()**: Send ETH to the contract (requires ETH value)
- **withdraw()**: Withdraw all funds from the contract (owner only, no ETH value)

## Development

The project uses Vite for fast development and hot module replacement:

- **Dev Server**: Run `pnpm dev` to start the Vite development server
- **TypeScript**: Vite handles TypeScript compilation automatically
- **Hot Reload**: Changes are reflected instantly in the browser

Vite configuration uses native ES modules for optimal performance.
