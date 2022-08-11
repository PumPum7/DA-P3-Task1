# Phase 3 - Intro to Solana Web3 Development

In this phase the focus will be on understanding basic concepts in solana development and getting familiar with some of the most frequently used packages.

## Note-
* We will be using __DEVNET__ throughout this guide.
* If you are not able to access any of the links, try using an incognito window.

## 1-
Read upon and understand about the [account structure](https://medium.com/@lianxiongdi/a-deep-dive-into-solana-account-model-1-introduction-7b0408656593) of solana blockchain. Also explore the [solana cookbook](https://solanacookbook.com/#contributing), it provides a lot of info which you will find handy.

## 2-
Using CLI perform the following-
* Create a [file wallet](https://medium.com/@lianxiongdi/solana-development-1-basic-operation-of-solana-cli-dcf156137e6).
* Airdrop yourself Sol.
* Create a [spl-token](https://medium.com/@lianxiongdi/a-deep-dive-into-solana-account-model-2-spl-token-d029d97aa6e0).
* Create [associated-token-account](https://medium.com/@lianxiongdi/a-deep-dive-into-solana-account-model-3-associated-token-account-60a7655bec03) for the token you created.
* Transfer some sol and token to a second wallet.

## Try answering the following questions
* Difference between public and private key.
* What is a transaction, instruction in solana and how are they related?
* How does ATA’s differ from token accounts?


## 3-
**For this week the task is to create a `nodejs` project which is to be submitted.**
In the project create a `new transaction`.
For the project make use of `keypair` from a file wallet you have made.

## 4-
Add `instructions` to perform the following to the `transaction` you created-

* Send 0.1 sol to the given wallet.
* Create ATA for any one token you have created for this wallet.
* Transfer 0.1 of that token to the wallet.

Wallet : `HtUaVzWiSNrrY2NSVKroE3883vnBfn8SMrLM2UxA2vDy`