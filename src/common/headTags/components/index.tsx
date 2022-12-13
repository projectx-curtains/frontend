import Head from "next/head";
import { HeadData } from "../types";

const HeadTags = ({ title, description }: HeadData) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
};

export default HeadTags;
