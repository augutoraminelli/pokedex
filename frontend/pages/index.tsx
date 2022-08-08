import Head from "next/head";
import "antd/dist/antd.css";

import { Button } from "antd";
import api from "../service/api";
import ITypes from "../interfaces/IResponseApi";

const Home = ({ types }: ITypes) => {
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
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const types: ITypes = await api.get("/types").then((res) => res.data.data);

  return {
    props: {
      types,
    },
  };
}

export default Home;
