import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Grid2 } from "@mui/material";
function MainLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <Grid2 container>
      <Grid2 size={12} sx={{ backgroundColor: "#fff" }}>
        <Header />
      </Grid2>
      <Grid2
        size={12}
        sx={{ minHeight: "90vh", py: 3, backgroundColor: "#DBE2EC" }}
      >
        {children}
      </Grid2>
      <Grid2 size={12} sx={{ backgroundColor: "#fff" }}>
        <Footer />
      </Grid2>
    </Grid2>
  );
}

export default MainLayout;
