import { Keypair, TransactionBuilder, Networks, Operation, BASE_FEE, Asset } from 'stellar-sdk';
import StellarSDK from "stellar-sdk";

export const POST = async (req: any, res: any) => {
    // Extract data from the request
    const { receiverAddress, amount, privateKey } = await req.json();
    console.log("Received values:", receiverAddress, amount, privateKey);

    // Initialize the Stellar server
    const server = new StellarSDK.server('https://horizon-testnet.stellar.org', { allowHttp: true });
    const donorKeypair = Keypair.fromSecret(privateKey);
    // console.log("Donor account:", donorKeypair);
    // Fetch the donor account from the network
    const donorAccount = await server.loadAccount(donorKeypair.publicKey());
    console.log("Donor account:", donorAccount);

    try {
        // Create a Keypair from the private key


        // Build the transaction
        const transaction = new TransactionBuilder(donorAccount, {
            fee: BASE_FEE,
            networkPassphrase: Networks.TESTNET,
        })
            .addOperation(
                Operation.payment({
                    destination: receiverAddress,
                    asset: Asset.native(),
                    amount: amount,
                })
            )
            .setTimeout(30)
            .build();

        // Sign the transaction
        transaction.sign(donorKeypair);

        // Send the transaction
        const transactionResult = await server.submitTransaction(transaction);
        console.log("Transaction successful:", transactionResult);

        // Return success response
        return new Response(JSON.stringify("Transaction Successful."), { status: 201 });

    } catch (error) {
        console.error("Transaction failed:", error);
        // Return error response
        return new Response(JSON.stringify("Failed to transact"), { status: 500 });
    }
};
