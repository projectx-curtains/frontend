import type { NextPage } from "next";
import { HeadTags } from "../src/common/headTags";
import MainLayout from "../src/layouts/mainLayout";
import HomeModule from "../src/modules/home";
import { HOME_METADATA } from "../src/modules/home/metaData";

const HomePage: NextPage = () => {
  return (
    <>
      <HeadTags
        title={HOME_METADATA.title}
        description={HOME_METADATA.description}
      />
      <MainLayout>
        <HomeModule />
      </MainLayout>
    </>
  );
};

export default HomePage;
