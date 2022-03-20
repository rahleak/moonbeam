import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Jackpot from "sections/jackpot";
import CallToAction from "sections/call-to-action";
import Featured from "sections/featured";
import Pricing from "sections/pricing";
import Testimonials from "sections/testimonials";
import Blogs from "sections/blogs";
import Subscribe from "sections/subscribe";
import Employment from "sections/employment";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Moonbeam Trading Company" />
          <Banner />
          <Services />
          <Jackpot />
          <CallToAction />
          <Featured />
          <Pricing />
          <Testimonials />
          <Blogs />
          <Employment/>
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
