/* eslint-disable @next/next/no-img-element */
import styles from "./style";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";
import { useAccount } from "wagmi";
import { useState } from "react";
import Button from "../../components/Button";
import Image from "next/image";

interface NftShowcaseProps {
  cssTitle?: CSSProp | CSSObject;
}

const NftShowcase: React.FunctionComponent<NftShowcaseProps> = ({
  cssTitle,
}) => {
  const [nfts, setNfts] = useState<any[]>();
  const [walletAdr, setWalletAdr] = useState();
  const [isLoading, setIsloading] = useState(false);

  const { address, isConnected } = useAccount();
  const [chain, setChain] = useState(process.env.NEXT_PUBLIC_ALCHEMY_NETWORK);

  const fetchNfts = async () => {
    try {
      const res = await fetch("/api/getNftsForAddress", {
        method: "POST",
        body: JSON.stringify({
          address: walletAdr,
        }),
      }).then((res) => res.json());

      setNfts(res.nfts.ownedNfts);
      console.log(res.nfts);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        <p>Hello NFT Showcase</p>

        <Button text={"Get NFTs"} theme={"dark"} onClick={fetchNfts}></Button>
      </div>
      <div>
        {nfts &&
          nfts.length > 0 &&
          nfts.map((nft, i) => {
            return (
              <div key={i}>
                {nft.media[0].format == "mp4" ? (
                  <video css={styles.image} src={nft.media[0].gateway} controls>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div>
                    <img
                      css={styles.image}
                      src={nft.media[0].gateway as string}
                      alt="NFT Image"
                    />
                    <p>{nft.tokenId}</p>
                    <p>{nft.title}</p>
                    <p>{nft.contract.name}</p>
                    <p>{nft.contract.openSea.floorPrice}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NftShowcase;
