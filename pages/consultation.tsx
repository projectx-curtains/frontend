import type { NextPage } from "next";
// import { HeadTags } from "@common/headTags";
import MainLayout from "@layouts/mainLayout/components";
import ConsultationPage from "@modules/consultationPage";
// import { HOME_METADATA } from "@modules/home/mocks/metaData";
import { HEADER_THEME } from "@common/header/constants";

const Consultation: NextPage = () => {
  return (
    <>
      {/* <HeadTags
        title={HOME_METADATA.title}
        description={HOME_METADATA.description}
      /> */}
      <MainLayout
        defaultTheme={HEADER_THEME.brown}
        isScrolled={false}>
        <ConsultationPage />
      </MainLayout>
    </>
  );
};

export default Consultation;
