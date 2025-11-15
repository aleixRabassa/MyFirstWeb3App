import { createWalletClient, custom, createPublicClient } from "https:/esm.sh/viem"

// Elements
const connectButton = document.getElementById('connectButton')
const fundButton = document.getElementById('fundButton')
const ethAmountInput = document.getElementById('ethAmount')

// Globals
let walletClient
let publicClient
const isMetaMaskInstalled = typeof window.ethereum !== 'undefined'

/**
 * Connect function - Handles wallet connection logic
 * Checks if MetaMask is installed and creates a wallet client
 */
async function connect() {
    if (isMetaMaskInstalled) {

        // Create a wallet client instance using the browser's ethereum provider
        walletClient = createWalletClient({
            transport: custom(window.ethereum)
        });

        // Request user's wallet addresses from MetaMask
        await walletClient.requestAddresses()

        // Update button text to indicate successful connection
        connectButton.innerText = 'Connected'
    } else {
        // If MetaMask is not installed, update button text to prompt installation
        connectButton.innerText = 'Please install MetaMask'
    }
}

/**
 * Fund function - Sends ETH transaction to buy coffee
 * Connects to wallet if not already connected, retrieves user's address,
 * creates a public client for blockchain interaction, and initiates the ETH transfer
 */
async function fund() {
    const ethAmount = ethAmountInput.value
    console.log(`Funding with ${ethAmount} ETH...`)

    if (isMetaMaskInstalled) {

        // Create a wallet client instance using the browser's ethereum provider
        walletClient = createWalletClient({
            transport: custom(window.ethereum)
        });

        // Request user's wallet addresses from MetaMask
        await walletClient.requestAddresses()

        // Create a public client for reading blockchain data
        publicClient = createPublicClient({
            transport: custom(window.ethereum)
        });

        await publicClient.simulateContract({
            // TODO
        })

        // Update button text to indicate successful connection
        connectButton.innerText = 'Connected'
    } else {
        // If MetaMask is not installed, update button text to prompt installation
        connectButton.innerText = 'Please install MetaMask'
    }
}

// Enable/disable fund button based on input value
function updateFundButtonState() {
    const hasValue = ethAmountInput.value.trim() !== '' && parseFloat(ethAmountInput.value) > 0
    fundButton.disabled = !hasValue
}

connectButton.onclick = connect
fundButton.onclick = fund

// Initial state: button disabled
fundButton.disabled = true

// Listen for input changes
ethAmountInput.addEventListener('input', updateFundButtonState)
ethAmountInput.addEventListener('change', updateFundButtonState)