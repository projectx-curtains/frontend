import type { NextPage } from "next";
import { HeadTags } from "@common/headTags";
import MainLayout from "@layouts/mainLayout";
import HomeModule from "@modules/home";
import { HOME_METADATA } from "@modules/home/mocks/meta.data";

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
