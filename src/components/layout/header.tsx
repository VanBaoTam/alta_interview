import { Box, Grid2, Typography } from "@mui/material";
import { NAV_BAR } from "../../constants";
import "./index.css";
function Header() {
  return (
    <Box sx={{ minHeight: 160, px: 4 }}>
      <Grid2
        container
        sx={{
          py: 2,
        }}
      >
        <Grid2 size={{ xs: 4, sm: 3 }}>
          <img src="logo.png" className="responsive-image" />
        </Grid2>
        <Grid2 size={1} sx={{ display: { xs: "block", md: "none" } }}></Grid2>
        <Grid2 size={7} sx={{ display: { xs: "block", md: "none" } }}>
          <Box
            sx={{
              backgroundColor: "#0036B4",
              px: 2,
              borderRadius: 36,
              boxShadow: "inset 0px 0px 10px 5px rgba(50, 143, 253, 0.6)",
            }}
          >
            <Typography
              sx={{
                color: "white",

                py: 1,
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Phân tích A.I
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#0036B4",
                pt: 1,
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              Khám phá phong cách thuần khiết
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={9}>
          <Grid2
            size={12}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {NAV_BAR.map((ele) => {
              return (
                <Typography sx={{ p: 2, color: "#707172", fontWeight: "bold" }}>
                  {ele}
                </Typography>
              );
            })}
            <img
              src="Exit.png"
              style={{
                height: "100px",
                width: "100px",
                paddingTop: 20,
                paddingLeft: 30,
              }}
            ></img>
          </Grid2>
          <Grid2
            size={12}
            sx={{ display: "flex", justifyContent: "right", pr: 10 }}
          >
            <Box
              sx={{
                border: "0.5px solid lightblue",
                display: { xs: "none", md: "flex" },
                borderRadius: 36,
                boxShadow: "0px 4px 20px rgb(141, 179, 218)",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0036B4",
                  px: 2,
                  borderRadius: 36,
                  boxShadow: "inset 0px 0px 10px 5px rgba(50, 143, 253, 0.6)",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                  }}
                >
                  Phân tích A.I
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ color: "#0036B4", px: 2, pt: 1, fontWeight: 600 }}
                >
                  Khám phá phong cách thuần khiết
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Header;
