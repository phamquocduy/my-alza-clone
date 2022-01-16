import Head from "next/head";

import Breadcrumb from "../components/layout/Breadcrumb";
import ContentHeader from "../components/layout/ContentHeader";
import CategoryList from "../components/layout/CategoryList";
import BestBuySection from "../components/layout/BestBuySection";
import ProductList from "../components/layout/ProductList";

import Footer from "../components/layout/Footer";

const Index = ({ productData = [] }) => {
  return (
    <div className="bg-gradient-to-b from-white via-sky-200 to-sky-200">
      <Head>
        <title>Alza clone</title>
        <meta name="description" content="My Alza.cz clone" />
        <link rel="icon" href="/favicon-alza.ico" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <Breadcrumb />
      </div>

      <main className="relative pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <ContentHeader />

        <CategoryList />

        <BestBuySection products={productData} />

        <ProductList products={productData} />
      </main>

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://www.alza.cz/Services/RestService.svc/v2/products", {
    body: JSON.stringify({
      filterParameters: {
        id: 18855843,
        isInStockOnly: false,
        newsOnly: false,
        wearType: 0,
        orderBy: 0,
        page: 1,
        params: {
          tId: 0,
          v: [],
        },
        producers: [],
        sendPrices: true,
        type: "action",
        typeId: "",
        branchId: "",
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const result = await res.json();

  return {
    props: {
      productData: result ? result.data : [],
    },
  };
}

export default Index;
