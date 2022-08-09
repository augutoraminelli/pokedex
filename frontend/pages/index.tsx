import Head from "next/head";
import "antd/dist/antd.css";

import { GetStaticProps } from "next";

import { Button } from "antd";
import api from "../service/api";
import { ITypes, IPokemonInfo, IData  } from "../interfaces/IResponseApi";

const Home = ({ types, cards }: IData) => {
  console.log(cards);
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        {types &&
          types.map((type, i) => (
            <div key={i}>
              <Button type="primary" value={type}>
                {type}
              </Button>
            </div>
          ))}

        {cards &&
          cards.map((card, i) => (
            <div key={i}>
              <li>{card.images}</li>
            </div>
          ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const types: ITypes = await api.get("/types").then((res) => res.data.data);
  const pokeCardsInfo = await api.get("/cards").then((res) => res.data.data);

  const cards = pokeCardsInfo.map((pokemon: IPokemonInfo) => ({
    subtypes: pokemon.subtypes,
    types: pokemon.types,
    images: pokemon.images.small,
    weaknesses: pokemon.weaknesses,
    attacks: pokemon.attacks,
  }));

  return {
    props: {
      types,
      cards,
    },
  };
};

export default Home;
