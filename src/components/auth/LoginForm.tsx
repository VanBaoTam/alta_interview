import { Box, TextField, Typography } from "@mui/material";
import SubmitButton from "../common/SubmitButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LoginForm(props: any) {
  const { handleLogin, phoneNumber, handleChange } = props ?? {};

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
        ĐĂNG NHẬP
      </Typography>
      <Typography
        color="#0036B4"
        sx={{ fontSize: { xs: "1rem", md: "24px" } }}
        fontWeight={700}
      >
        Số điện thoại
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Nhập số điện thoại của bạn"
        value={phoneNumber}
        onChange={handleChange}
        sx={{ ml: 1, flex: 1, backgroundColor: "white" }}
      />
      <SubmitButton
        fnc={handleLogin}
        text="Đăng nhập"
        color="white"
        backgroundColor="#0036B4"
      />
      <Typography
        color="#0036B4"
        textAlign={"center"}
        sx={{ fontSize: { xs: "1rem", md: "24px" } }}
        mt={1}
      >
        Hoặc
      </Typography>
      <SubmitButton text="Đăng ký" color="#0036B4" />{" "}
      <a>
        <Typography
          color="#0036B4"
          textAlign={"center"}
          sx={{
            cursor: "pointer",
            fontSize: { xs: "1rem", md: "20px" },
            textDecoration: "underline",
          }}
          mt={3}
        >
          Xem thêm thể lệ chi tiết
        </Typography>
      </a>
    </Box>
  );
}

export default LoginForm;
