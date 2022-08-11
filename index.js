const web3 = require("@solana/web3.js");
const splToken = require("@solana/spl-token");
require('dotenv').config();


(async () => {
	if (!process.env.toWallet || !process.env.wallet || !process.env.tokenMint) {
		console.error("Please make sure your environment variables are set!")
	}

	// Connect to cluster
	console.log(web3.clusterApiUrl('devnet'))
	const connection = new web3.Connection(
		web3.clusterApiUrl('devnet'),
		'confirmed',
	);

	const fromWallet = web3.Keypair.fromSecretKey(Uint8Array.from(JSON.parse(process.env.wallet)))

	const toWallet = new web3.PublicKey(process.env.toWallet)

	// Add solana transfer instruction to transaction
	const transaction = new web3.Transaction().add(web3.SystemProgram.transfer({
		fromPubkey: fromWallet.publicKey,
		toPubkey: toWallet,
		lamports: web3.LAMPORTS_PER_SOL / 10,
	}),)


	// Sign transaction, broadcast, and confirm
	const signature = await web3.sendAndConfirmTransaction(
		connection,
		transaction,
		[fromWallet],
	);
	console.log('Signature: ' + signature);

	// token
	const mint = new web3.PublicKey(process.env.tokenMint)

	const fromTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
		connection,
		fromWallet,
		mint,
		fromWallet.publicKey,
	)

	// Get the token account of the toWallet address, and if it does not exist, create it
	const toTokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
		connection,
		fromWallet,
		mint,
		toWallet
	);

	const tokenSignature = await splToken.transfer(
		connection,
		fromWallet,
		fromTokenAccount.address,
		toTokenAccount.address,
		fromWallet,
		web3.LAMPORTS_PER_SOL / 10
	);

	console.log("Token signature: " + tokenSignature)
})();
