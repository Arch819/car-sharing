import React, { useState } from "react";
import {
  Box,
  Button,
  // FormControl,
  // InputLabel,
  // MenuItem,
  // NativeSelect,
  // Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import { object, string } from "yup";
import {
  AdvertDataBoxStyle,
  AdvertImageFormStyle,
  AdvertsImageContainerStyle,
  DeleteImageStyle,
  LabelAdvertImageStyle,
  LabelAdvertTextStyle,
  TitleAdvertFormStyle,
} from "./AddAdvert.styled";
// import { modelList } from "utils/modelList";

const initialValues = {
  year: "",
  model: "",
  engineSize: "",
  make: "",
  fuelConsumption: "",
  type: "",
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
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
    },
  });
  const handleAvatarChange = (e) => {
    const loadedFile = e.target.files[0];

    if (loadedFile) {
      setFile(loadedFile);
      const blob = new Blob([loadedFile]);
      const objectURL = URL.createObjectURL(blob);
      setPhoto(objectURL);
    }

    if (typeof file != "undefined") {
      // formik.handleChange(file);
      console.log(file);
    }
  };

  const handleDeleteImg = () => {
    setFile(null);
    setPhoto(null);
  };

  return (
    <>
      <TitleAdvertFormStyle>Add Advert</TitleAdvertFormStyle>
      {photo ? (
        <AdvertsImageContainerStyle>
          <img src={photo} alt="avto" />
          <DeleteImageStyle onClick={handleDeleteImg}>
            <DeleteIcon />
          </DeleteImageStyle>
        </AdvertsImageContainerStyle>
      ) : (
        <Box component="form" sx={AdvertImageFormStyle}>
          <LabelAdvertImageStyle>
            <LabelAdvertTextStyle>Add a photo</LabelAdvertTextStyle>
            <input
              type="file"
              name="img"
              label="image"
              onChange={handleAvatarChange}
              accept=".png, .jpg"
            />
          </LabelAdvertImageStyle>
        </Box>
      )}
      <Box component="form" onSubmit={formik.handleSubmit} autoFocus={true}>
        <AdvertDataBoxStyle>
          <TextField
            name="make"
            type="text"
            label="Make"
            variant="standard"
            value={formik.values?.make}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.make && Boolean(formik.errors.make)}
            helperText={formik.touched.make && formik.errors.make}
          />
          <TextField
            name="model"
            type="text"
            label="Model"
            variant="standard"
            value={formik.values?.model}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.model && Boolean(formik.errors.model)}
            helperText={formik.touched.model && formik.errors.model}
          />
          <TextField
            name="year"
            type="text"
            label="Year"
            variant="standard"
            value={formik.values?.year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.year && Boolean(formik.errors.year)}
            helperText={formik.touched.year && formik.errors.year}
          />
          <TextField
            name="type"
            type="text"
            label="Type"
            variant="standard"
            value={formik.values?.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
          />
          <TextField
            name="rentalPrice"
            type="text"
            label="Rental price"
            variant="standard"
            value={formik.values?.rentalPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.rentalPrice && Boolean(formik.errors.rentalPrice)
            }
            helperText={formik.touched.rentalPrice && formik.errors.rentalPrice}
          />
          <TextField
            name="engineSize"
            type="text"
            label="Engine size"
            variant="standard"
            value={formik.values?.engineSize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.engineSize && Boolean(formik.errors.engineSize)
            }
            helperText={formik.touched.engineSize && formik.errors.engineSize}
          />
          <TextField
            name="fuelConsumption"
            type="text"
            label="Fuel consumption"
            variant="standard"
            value={formik.values?.fuelConsumption}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.fuelConsumption &&
              Boolean(formik.errors.fuelConsumption)
            }
            helperText={
              formik.touched.fuelConsumption && formik.errors.fuelConsumption
            }
          />
          {/* <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
            }}
            men
          >
            <InputLabel id="demo-simple-select-standard-label">
              Model
            </InputLabel> */}
          {/* <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={formik.values?.model}
              onChange={formik.handleChange}
              label="Model"
            >
              <MenuItem value="" sx={{ zIndex: "999" }}>
                <em>None</em>
              </MenuItem>
              {modelList.map((model) => (
                <MenuItem value={model.value}>{model.label}</MenuItem>
              ))}
            </Select> */}
          {/* <NativeSelect
              defaultValue=""
              inputProps={{
                name: "Model",
                id: "uncontrolled-native",
              }}
            >
              <option value=""></option>
              {modelList.map((model) => (
                <option value={model.value}>{model.label}</option>
              ))}
            </NativeSelect>
          </FormControl> */}

          <TextField
            name="description"
            type="text"
            label="Description"
            variant="standard"
            value={formik.values?.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </AdvertDataBoxStyle>
        <Button type="submit">Create</Button>
      </Box>
    </>
  );
}

export default AddAdvertForm;
