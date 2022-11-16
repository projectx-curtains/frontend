import type { NextPage } from "next";
import { HeadTags } from "@common/headTags";

import MainLayout from "@layouts/mainLayout";
import FabricsModule from "@modules/catalogue";

const FabricsPage: NextPage = () => {
  return (
    <>
      {/* TODO: add metadata for catalog page */}
      {/* <HeadTags
        title={CATALOGUE_METADATA.title}
        description={CATALOGUE_METADATA.description}
      /> */}
      <MainLayout>
        <FabricsModule />
      </MainLayout>
    </>
  );
};
export default FabricsPage;
