import type { NextPage } from "next";
import Head from "next/head";
import "antd/dist/antd.css";

import { Button } from "antd";
import { useEffect } from "react";
import api from "../service/api";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <Button type="primary" shape="circle">
          Hellor World!
        </Button>
      </main>
    </div>
  );

  // export async function getStaticProps() {
  //   // Call an external API endpoint to get posts.
  //   // You can use any data fetching library
  //   const res = await api("https://.../posts");
  //   const posts = await res.json();

  //   // By returning { props: { posts } }, the Blog component
  //   // will receive `posts` as a prop at build time
  //   return {
  //     props: {
  //       posts,
  //     },
  //   };
  // }
};

export default Home;
