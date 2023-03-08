import type { NextApiRequest, NextApiResponse } from "next";
import { Network, Alchemy, NftFilters } from "alchemy-sdk";

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
      JSON.parse(req.body).address,
      {
        pageSize: 100,
      }
    );

    console.log("NFTs: ", await nfts);
    res.status(200).json({ nfts: nfts });
  } catch (e) {
    console.warn(e);
    res.status(500).send({
      message: "Something went wrong",
    });
  }
}
