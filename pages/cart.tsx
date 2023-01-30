import type { NextPage } from "next";
import { HeadTags } from "@common/headTags";

import MainLayout from "@layouts/mainLayout/components";
import CartModule from "@modules/cart";
import { CATALOGUE_METADATA } from "@modules/catalogue/mocks/meta.data";
import { HEADER_THEME } from "@common/header/constants";

const Cart: NextPage = () => {
  return (
    <>
      {/* TODO: add metadata for catalog page */}
      <HeadTags
        title={CATALOGUE_METADATA.title}
        description={CATALOGUE_METADATA.description}
      />
      <MainLayout
        defaultTheme={HEADER_THEME.brown}
        isScrolled={false}>
        <CartModule />
      </MainLayout>
    </>
  );
};
export default Cart;
