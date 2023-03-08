/* eslint-disable @next/next/no-img-element */
import styles from "./style";
import { CSSProp, CSSObject } from "styled-components";
import classNs from "../../utils/classNs";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/Button";
import Image from "next/image";
import NftCard from "../../components/NftCard";
import { Input } from "../../components/Form/Form";
import Text from "../../components/Text";

interface NftShowcaseProps {
  cssTitle?: CSSProp | CSSObject;
}

const schema = yup.object().shape({
  walletAddress: yup
    .string()
    .trim()
    .matches(/^0x[a-fA-F0-9]{40}$/, "Please add a valid ERC20 wallet Address")
    .required("ERC20 wallet Address is a required"),
});

const NftShowcase: React.FunctionComponent<NftShowcaseProps> = ({
  cssTitle,
}) => {
  const [nfts, setNfts] = useState<any[]>();
  const [submitted, setSubmitted] = useState(false);
  const [walletAdr, setWalletAdr] = useState();
  const [isLoading, setIsloading] = useState(false);

  const { address, isConnected } = useAccount();
  const [chain, setChain] = useState(process.env.NEXT_PUBLIC_ALCHEMY_NETWORK);

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!address) return;

    setValue("walletAddress", address);
  }, [address]);

  const fetchNfts = async () => {
    setIsloading(true);

    try {
      const res = await fetch("/api/getNftsForAddress", {
        method: "POST",
        body: JSON.stringify({
          address: getValues("walletAddress"),
        }),
      }).then((res) => res.json());

      setNfts(res.nfts.ownedNfts);
      console.log(res.nfts);
      setIsloading(false);
      setSubmitted(true);
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading)
    return (
      <div css={styles.cardContainer}>
        <img src={"/img/loading.jpg"} alt="NFT Image" />
      </div>
    );

  return (
    <>
      <div css={styles.container}>
        <Text
          text={"Insert ERC20 wallet address to get all NFT from ETH mainnet"}
          cssText={styles.headerText}
        />

        <form css={styles.form} onSubmit={handleSubmit(() => fetchNfts())}>
          <input
            id={"input"}
            type="text"
            css={styles.input}
            {...register("walletAddress")}
          />
          {errors && errors.walletAddress?.message && (
            <Text
              text={errors.walletAddress?.message as string}
              cssText={styles.formError}
            />
          )}

          <Button
            type="submit"
            text={"Get NFTs"}
            theme={"dark"}
            cssButton={styles.submitButton}
          ></Button>
        </form>
      </div>

      <div css={styles.cardContainer}>
        {nfts && nfts.length > 0
          ? nfts.map((nft, i) => {
              return (
                <div key={i}>
                  <NftCard nft={nft}></NftCard>
                </div>
              );
            })
          : submitted && (
              <Text
                text={"No NFTs in this Wallet to show"}
                cssText={styles.headerText}
              />
            )}
      </div>
    </>
  );
};

export default NftShowcase;
