import type { NextPage } from "next";
import { HeadTags } from "@common/headTags";
import MainLayout from "@layouts/mainLayout/components";
import HomeModule from "@modules/home";
import { HEADER_THEME } from "@common/header/constants";
import { HOME_METADATA } from "@modules/home/mocks/meta.data";

const HomePage: NextPage = () => {
  return (
    <>
      <HeadTags
        title={HOME_METADATA.title}
        description={HOME_METADATA.description}
      />
      <MainLayout defaultTheme={HEADER_THEME.transparent} isScrolled={true}>
        <HomeModule />
      </MainLayout>
    </>
  );
};

export default HomePage;
