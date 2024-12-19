import { Grid2, Typography } from "@mui/material";
import LoginForm from "../components/auth/LoginForm";
import { useCallback, useState } from "react";
import Captcha from "../components/auth/Captcha";

function Auth() {
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const handleLogin = useCallback(() => {
    if (phoneNumber.length === 10) setIsLogined(true);
  }, [phoneNumber.length]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numbersOnly = value.replace(/\D/g, "");
    const truncated = numbersOnly.slice(0, 10);
    setPhoneNumber(truncated);
  };
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Typography
          textAlign={"center"}
          color="#0036B4"
          sx={{ fontSize: { xs: "2rem", md: "70px" } }}
          fontWeight={"700"}
        >
          KHÁM PHÁ PHONG CÁCH
        </Typography>
        <Typography
          textAlign={"center"}
          color="#00D7F9"
          sx={{ fontSize: { xs: "2rem", md: "70px" } }}
          fontWeight={"700"}
        >
          thuần khiết
        </Typography>
        <Typography
          textAlign={"center"}
          color="#0036B4"
          sx={{ fontSize: { xs: "1.5rem", md: "40px" } }}
          fontWeight={"700"}
        >
          CÙNG AQUAFINA A.I
        </Typography>
        <Typography
          textAlign={"center"}
          color="#0036B4"
          sx={{ fontSize: { xs: "1.5rem", md: "40px" } }}
        >
          Nhận <span style={{ fontWeight: 700 }}>thông điệp tỏa sáng</span> mỗi
          ngày
        </Typography>
      </Grid2>
      <Grid2 size={12} display={"flex"} justifyContent={"center"}>
        <img
          src="prize.png"
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "721px",
            maxHeight: "421px",
          }}
        />
      </Grid2>
      <Grid2 size={12}>
        <Typography
          textAlign={"center"}
          color="#0036B4"
          sx={{ fontSize: { xs: "1.5rem", md: "40px" } }}
        >
          Tổng quà tặng giá trị hơn{" "}
          <span style={{ fontWeight: 700 }}>200 triệu đồng</span>
        </Typography>
      </Grid2>
      <Grid2 size={12} display={"flex"} justifyContent={"center"}>
        {isLogined ? (
          <Captcha phoneNumber={phoneNumber} />
        ) : (
          <LoginForm
            handleLogin={handleLogin}
            setIsLogined={setIsLogined}
            phoneNumber={phoneNumber}
            handleChange={handleChange}
          ></LoginForm>
        )}
      </Grid2>
    </Grid2>
  );
}

export default Auth;
