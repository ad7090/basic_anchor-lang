import * as anchor from "@coral-xyz/anchor";
import { Program ,utils} from "@coral-xyz/anchor";
import { DepWith } from "../target/types/dep_with";
import {  PublicKey } from "@solana/web3.js";
describe("dep-with", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const dataAccount = anchor.web3.Keypair.generate();

  const wallet = provider.wallet;


  const program = anchor.workspace.DepWith as Program<DepWith>;

  it("Is initialized!", async () => {
    // Add your test here.
    // const tx = await program.methods.initialize().rpc();
    // console.log("Your transaction signature", tx);

    const [campaign] = await PublicKey.findProgramAddress(
      [
        utils.bytes.utf8.encode("CAMPAIGN_DEMO"),
        provider.wallet.publicKey.toBuffer(),
      ],
      program.programId
    );
    console.log(campaign)

    const vtransferael1 = await program.methods
      .creat("amin","test")  
      .accounts({ 
        campaign,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,})
      .rpc();
      console.log("vael1", vtransferael1);


  });
});
