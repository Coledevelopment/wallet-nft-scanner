This is a Next.js project bootstrapped with create-next-app.

# Getting Started
Clone the repo to your local machine. 
To run the development server:
``` node
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

## Known issues
There is a known issue with the development server in this application. Running this application on localhost using yarn dev might give an Websocket error. A workaround for this is to build the app, and serve it.

to build and run the application locally :
``` node
yarn build
yarn start
```
Open http://localhost:3000 with your browser to see the result.

# About the app
This is a 48 hour "take-home test". 

## The application task is to create:
A feature that displays a list of NFTs (Non-Fungible Tokens) of a given address.

The list of NFTs should be displayed as a grid of cards, with each card displaying the
NFT's details. And when a user clicks on a card, a modal should be displayed that shows more details
about the NFT, such as its description and the owner's address.

The modal should have a button that allows the user to purchase the NFT. Clicking
the button should navigate them to the relevant OpenSea page.

# Preview Deployment
This application is deployed on vercel. The following <a href="https://wallet-nft-scanner.vercel.app/">link</a> will take you to the application to try out.
You will need access to a ERC20 wallet address to rund the app, or you can log in to the apllication with a wallet you have access to to get the address filled out automatically.

# Learn More About Next.js
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
