import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductTable from "../components/ProductTable";
import { Toaster } from "react-hot-toast";

const ProductListPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Product Module"} />
        <ProductTable />
        <Toaster/>
      </Container>
    </section>
  );
};

export default ProductListPage;