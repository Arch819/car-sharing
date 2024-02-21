import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { object, string } from "yup";

const initialValues = {
  year: "",
  model: "",
  engineSize: "",
  make: "",
  fuelConsumption: "",
  type: "",
  img: "",
  rentalPrice: "",
  address: {
    street: "",
    city: "",
    country: "",
  },
  accessories: [],
  description: "",
  functionalities: "",
  rentalConditions: {
    minimumAge: "",
    driverLicense: "",
    otherRequirements: "",
  },
  mileage: "",
};

const validationSchema = object().shape({
  year: string("Enter yor email"),
});

function AddAdvertForm() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} autoFocus={true}>
      <TextField
        type="file"
        name="img"
        label="image"
        variant="standard"
        value={formik.values?.img}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.img && Boolean(formik.errors.img)}
        helperText={formik.touched.img && formik.errors.img}
      />
    </Box>
  );
}

export default AddAdvertForm;
