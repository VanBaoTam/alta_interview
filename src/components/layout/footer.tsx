import { Box, Grid2, Typography } from "@mui/material";
import { NAV_BAR } from "../../constants";

function Footer() {
  return (
    <Box
      sx={{ display: { xs: "none", md: "block" }, minHeight: "20vh", px: 4 }}
    >
      <Grid2 container sx={{ py: 2 }}>
        <Grid2 size={2}>
          <img src="logo.png" />
        </Grid2>
        <Grid2 size={10}>
          <Grid2 size={12} sx={{ display: "flex", alignItems: "center" }}>
            {NAV_BAR.map((ele) => {
              return (
                <Typography sx={{ p: 2, color: "#336CC8", fontWeight: "bold" }}>
                  {ele}
                </Typography>
              );
            })}
          </Grid2>
          <Grid2 container sx={{ pt: 3 }}>
            <Grid2 size={8}>
              <Typography textAlign={"center"} color="#336CC8">
                Copyright © 2022 Aquafina Vietnam
              </Typography>
              <Typography textAlign={"center"} color="#336CC8">
                AQUAFINA là thương hiệu nước uống đóng chai của Pepsico-Suntory.
                <br />
                Đây là kênh bán hàng của The Water MAN - nhà phân phối nước suối
                Aquafina.
              </Typography>
            </Grid2>
            <Grid2 size={3}></Grid2>
            <Grid2 size={1}>
              <Typography sx={{ color: "#336CC8", fontWeight: "bold" }}>
                Follow Us
              </Typography>
              <img src="social.png" />
              <Typography
                sx={{ color: "#FA4238", display: "flex", alignItems: "center" }}
              >
                <img src="warning-2.png" />
                Báo lỗi
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Footer;
