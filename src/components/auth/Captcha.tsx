import { Box, Typography } from "@mui/material";
import SubmitButton from "../common/SubmitButton";
import { useCallback, useEffect, useState } from "react";
import CaptchaInput from "../common/Captcha";

function Captcha(props: { phoneNumber: string }) {
  const { phoneNumber } = props ?? {};
  const [second, setSecond] = useState<number>(30);
  const [isReset, setIsReset] = useState<boolean>(false);

  const handleCountDown = useCallback(() => {
    setIsReset(false);
    const timer = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond <= 0) {
          clearInterval(timer);
          setIsReset(true);
          return 0;
        }
        return prevSecond - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    handleCountDown();
  }, [handleCountDown]);

  const handleResend = () => {
    if (isReset) {
      setSecond(30);
      handleCountDown();
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ mt: { xs: 2, md: 0 } }}
    >
      <Typography
        textAlign={"center"}
        color="#0036B4"
        fontWeight={700}
        sx={{ fontSize: { xs: "1.5rem", md: "50px" } }}
        px={5}
      >
        NHẬP OTP
      </Typography>
      <Typography
        color="#0036B4"
        textAlign={"center"}
        sx={{ fontSize: { xs: "0.8rem", md: "24px" } }}
        mt={1}
      >
        Một mã OTP vừa được gửi vào số
        <span style={{ fontWeight: "bold" }}> {phoneNumber}</span>
      </Typography>
      <CaptchaInput />
      <SubmitButton text="Xác nhận" color="white" backgroundColor="#0036B4" />
      <Typography
        color="#0036B4"
        textAlign={"center"}
        sx={{ fontSize: { xs: "1rem", md: "20px" } }}
        mt={3}
      >
        Mã sẽ được gửi trong vòng {second} GIÂY
      </Typography>
      <Box onClick={handleResend}>
        <Typography
          color={isReset ? "#0036B4" : "#ccc"}
          sx={{ cursor: isReset ? "pointer" : "not-allowed" }}
          textAlign={"center"}
          fontSize={"16px"}
          fontWeight={100}
          mt={3}
        >
          Gửi lại mã
        </Typography>
      </Box>
    </Box>
  );
}

export default Captcha;
