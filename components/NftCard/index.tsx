/* eslint-disable @next/next/no-img-element */
import styles from "./style";
import NextLink from "next/link";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import navData from "../../data/nav.json";
import Modal from "../Modal";

interface NftCardProps {
  nft?: any;
  cssNftCard?: CSSProp | CSSObject;
  cssIcon?: CSSProp | CSSObject;
  icon?: string;
}

const NftCard: React.FunctionComponent<NftCardProps> = ({
  nft,
  cssNftCard,
  cssIcon,
  icon,
}) => {
  const [showModal, setShowModal] = useState(false);

  if (!nft.media[0]) return null;

  return (
    <>
      <div css={styles.nftCard} onClick={() => setShowModal(true)}>
        <div css={styles.nftCardMediaContainer}>
          {nft.media[0].format == "mp4" ? (
            <video
              css={styles.nftCardMedia}
              src={nft.media[0].gateway}
              controls
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              css={styles.nftCardMedia}
              src={nft.media[0].gateway as string}
              alt="NFT Image"
            />
          )}
        </div>
        <div css={styles.nftCardDetails}>
          <div css={styles.detailsNames}>
            <h3>#{nft.tokenId}</h3>
            <p>
              {nft.contract.openSea.collectionName
                ? nft.contract.openSea.collectionName
                : nft.contract.name}
            </p>
          </div>
        </div>
      </div>

      {showModal && (
        <div>
          <Modal onClose={() => setShowModal(false)}>
            <div>TEST</div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default NftCard;
