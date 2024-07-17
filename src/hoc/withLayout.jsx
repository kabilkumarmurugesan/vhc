// hoc/withLayout.tsx
import React from "react";
import Layout from "../pages/Layout";

const withLayout = (Component) => {
  return (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;
