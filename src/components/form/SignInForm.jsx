import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Notify } from "notiflix";
import { signInThunk } from "store/auth/authThunk";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { ButtonSubmit, UserFormStyle } from "./SignUpInForm.styled";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = object().shape({
  email: string("Enter your email")
    .email("Enter a valid email")
    .trim()
    .required("Email is required"),
  password: string("Enter your password")
    .trim()
    .required("Password is required"),
});

function SignInForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      dispatch(signInThunk(values)).then(({ payload }) => {
        if (payload.token) {
          Notify.success(
            "You have been successfully logged in! Your session is now active."
          );
          resetForm();
        }
      });
    },
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={UserFormStyle}
      autoFocus={true}
    >
      <TextField
        name="email"
        label="Email"
        variant="standard"
        value={formik.values?.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        InputLabelProps={{
          style: { color: "#aeaeae" },
        }}
        InputProps={{ style: { color: "#aeaeae" } }}
      />
      <FormControl variant="standard">
        <InputLabel
          htmlFor="standard-adornment-password"
          sx={{ color: "#aeaeae" }}
        >
          Password
        </InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          name="password"
          label="Password"
          value={formik.values?.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          sx={{ color: "#aeaeae" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {formik.touched.password && (
          <Typography sx={{ color: "#d32f2f" }}>
            {formik.errors.password}
          </Typography>
        )}
      </FormControl>
      <Button variant="contained" fullWidth type="submit" sx={ButtonSubmit}>
        Login
      </Button>
    </Box>
  );
}

export default SignInForm;
