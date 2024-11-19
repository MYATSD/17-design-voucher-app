import React from "react";
import Container from "../../../components/Container";
import Breadcrumb from "../../../components/BreadCrumb";
import ProductCreateForm from "../components/ProductCreateForm";
import { Toaster } from "react-hot-toast";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Create Product"}
          links={[{ title: "Product Module", path: "/dashboard/product" }]}
        />
        <ProductCreateForm/>
        <Toaster/>
      </Container>
    </section>
  );
};

export default ProductCreatePage;