import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Medrec.sol } from "../target/types/medrec.sol";

describe("medrec.sol", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Medrec.sol as Program<Medrec.sol>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
