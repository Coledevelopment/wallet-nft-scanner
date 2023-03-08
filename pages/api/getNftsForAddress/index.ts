import type { NextApiRequest, NextApiResponse } from "next";
import { Network, Alchemy, NftFilters } from "alchemy-sdk";

type Data = {
  walletAdr: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const config = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(config);

  try {
    const nfts = await alchemy.nft.getNftsForOwner(
      "0x8579c7B76477643A7B26F86CD20913C6dAD4129E",
      {
        pageSize: 100,
      }
    );

    console.log("NFTs: ", await nfts);
    res.status(200).json({ nfts: nfts });
  } catch (e) {
    console.warn(e);
    res.status(500).send({
      message: "something went wrong, check the log in your terminal",
    });
  }
}