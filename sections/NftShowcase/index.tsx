/* eslint-disable @next/next/no-img-element */
import styles from "./style";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";
import { useAccount } from "wagmi";
import { useState } from "react";
import Button from "../../components/Button";
import Image from "next/image";
import NftCard from "../../components/NftCard";

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
        <Button text={"Get NFTs"} theme={"dark"} onClick={fetchNfts}></Button>
      </div>
      <div css={styles.cardContainer}>
        {nfts &&
          nfts.length > 0 &&
          nfts.map((nft, i) => {
            return (
              <div key={i}>
                <NftCard nft={nft}></NftCard>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NftShowcase;
