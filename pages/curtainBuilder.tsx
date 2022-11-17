import type { NextPage } from "next";
import { HeadTags } from "@common/headTags";
import MainLayout from "@layouts/mainLayout/components";
import CurtainBuilderModule from "@modules/curtainBuilder";
import { HOME_METADATA } from "@modules/home/mocks/metaData";
import { HEADER_THEME } from "@common/header/constants";

const CurtainBuilderPage: NextPage = () => {
  return (
    <>
      <HeadTags
        title={HOME_METADATA.title}
        description={HOME_METADATA.description}
      />
      <MainLayout defaultTheme={HEADER_THEME.brown} isScrolled={false}>
        <CurtainBuilderModule />
      </MainLayout>
    </>
  );
};

export default CurtainBuilderPage;
