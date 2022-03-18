import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import classes from "./services.module.css";

const SERVICES_DATA = [
  {
    image: null,
    text:
      "At Moonbeam Trading Company, our team of technology consultants and specialists applies the latest in technology innovation to solve your most important business challenges.",
    heading: "Technology",
    path: "#more"
  },
  {
    image: serviceImage2,
    text:
      "Our team of international trading specialists is active in engaging with new suppliers to source products from around the world.",
    heading: "Trade - Import and Export",
    path: "#more"
  },
  {
    image: serviceImage3,
    text:
      "Moonbeam Trading Company is dedicated to offering quality products from around the world to our customers.",
    heading: "Ecommerce",
    path: "#more"
  },
  {
    image: serviceImage4,
    text:
      "Moonbeam Trading Company is collaborating with industry leaders and local farms to create innovative and sustainable agri-food solutions.",
    heading: "Agri-Food",
    path: "#more"
  }
];
const Services = () => {
  return (
    <Box
      as="section"
      id="services"
      sx={styles.services}
      className={classes.services}
    >
      <Container>
        <BlockTitle
          title="What We Do"
          text="Services that create business, customer and community value"
        />
        <Grid sx={styles.grid} className={classes.title}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"]
  },
  grid: {
    gridGap: "40px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"]
  }
};
