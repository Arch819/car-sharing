import React, { useState } from "react";
import {
  // number,
  object,
  string,
} from "yup";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Step,
  StepButton,
  Stepper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
// import { CheckBox } from "@mui/icons-material";
import { modelList } from "utils/modelList";
import ClearIcon from "@mui/icons-material/Clear";
import {
  AdvertDataBoxStyle,
  // AdvertImageFormStyle,
  AdvertsImageContainerStyle,
  DeleteImageStyle,
  LabelAdvertImageStyle,
  LabelAdvertTextStyle,
  TitleAdvertFormStyle,
  StepStyle,
  StepUnderline,
  StepperStyle,
  StepErrorUnderTextStyle,
  // AddressContainerStyle,
  FormSelectCheckedItemList,
  ClearItemListButtonStyle,
} from "./AddAdvert.styled";

const initialValues = {
  make: "",
  model: "",
  year: "",
  type: "",
  engineSize: "",
  functionalities: "",
  street: "",
  city: "",
  country: "",
  fuelConsumption: [],
  accessories: [],
  minimumAge: "",
  driverLicense: false,
  otherRequirements: "",
  mileage: "",
  rentalPrice: "",
  description: "",
};

const validationSchema = object().shape({
  make: string("Enter yor make")
    .required()
    .trim()
    .min(2, "Must be min 2 characters"),
  year: string().required().trim().max(4).min(4, "Must be 4 characters"),
});

const steps = [
  "Image",
  "Basic information",
  "Accessories and functionalities",
  "Rental Conditions",
  "Description",
];

function AddAdvertForm() {
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [errorStep, setErrorStep] = useState(false);
  const [completed, setCompleted] = useState({});
  const [accessories, setAccessories] = useState([]);
  const [fuelConsumption, setFuelConsumption] = useState([]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const data = {
        img: file,
        accessories: accessories,
        fuelConsumption: fuelConsumption,
        ...values,
      };
      console.log(data);
    },
  });
  const isError = Boolean(Object.keys(formik.errors).length);

  const handleImageChange = (e) => {
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

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    if (isError) {
      setErrorStep(true);
      setTimeout(() => {
        setErrorStep(false);
      }, 2000);
      return;
    }
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    if (isError) {
      setErrorStep(true);
      setTimeout(() => {
        setErrorStep(false);
      }, 2000);
      return;
    }
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setAccessories([]);
    setFuelConsumption([]);
    formik.handleReset();
    handleDeleteImg();
  };
  const handleChangeSelect = (e) => {
    const { name, value } = e.target;
    if (name === "accessories" && value) {
      if (accessories.includes(value)) {
        return;
      }
      setAccessories((prev) => [...prev, value]);
    }
    if (name === "fuelConsumption" && value) {
      if (fuelConsumption.includes(value)) {
        return;
      }
      setFuelConsumption((prev) => [...prev, value]);
    }
    // console.log(accessories);
    // console.log(fuelConsumption);
  };
  const handleClearItem = (e) => {
    const { id, title } = e.target;
    if (title === "accessories") {
      setAccessories((prev) =>
        prev.filter((item, index) => index !== Number(id))
      );
    }
    if (title === "fuelConsumption") {
      setFuelConsumption((prev) =>
        prev.filter((item, index) => index !== Number(id))
      );
    }
  };

  const stepInputList = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            {photo ? (
              <AdvertsImageContainerStyle>
                <img src={photo} alt="avto" />
                <DeleteImageStyle onClick={handleDeleteImg}>
                  <DeleteIcon />
                </DeleteImageStyle>
              </AdvertsImageContainerStyle>
            ) : (
              // <Box component="form" sx={AdvertImageFormStyle}>
              <LabelAdvertImageStyle>
                <LabelAdvertTextStyle>Add a photo</LabelAdvertTextStyle>
                <input
                  type="file"
                  name="img"
                  label="image"
                  onChange={handleImageChange}
                  accept=".png, .jpg"
                />
              </LabelAdvertImageStyle>
              // </Box>
            )}
          </>
        );
      case 1:
        return (
          <>
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
              required
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
              required
            />
            <TextField
              name="year"
              type="number"
              label="Year"
              variant="standard"
              value={formik.values?.year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.year && Boolean(formik.errors.year)}
              helperText={formik.touched.year && formik.errors.year}
              required
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
              required
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
              required
            />
            <TextField
              name="functionalities"
              type="text"
              label="Functionalities"
              variant="standard"
              value={formik.values?.functionalities}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.functionalities &&
                Boolean(formik.errors.functionalities)
              }
              helperText={
                formik.touched.functionalities && formik.errors.functionalities
              }
              required
            />
            <TextField
              name="street"
              type="text"
              label="Street"
              variant="standard"
              value={formik.values?.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.street && Boolean(formik.errors.street)}
              helperText={formik.touched.street && formik.errors.street}
              required
            />
            <TextField
              name="city"
              type="text"
              label="City"
              variant="standard"
              value={formik.values?.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              required
            />
            <TextField
              name="country"
              type="text"
              label="Country"
              variant="standard"
              value={formik.values?.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <FormControl
              variant="standard"
              sx={{
                display: "flex",
                margin: "0 auto",
                minWidth: 600,
              }}
              men
            >
              <InputLabel id="demo-simple-select-standard-label">
                Accessories
              </InputLabel>
              <Select
                value=""
                name="accessories"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleChangeSelect}
              >
                <MenuItem value="" sx={{ zIndex: "999" }}>
                  <em>None</em>
                </MenuItem>
                {modelList.map((model) => (
                  <MenuItem value={model.value}>{model.label}</MenuItem>
                ))}
              </Select>
              <FormSelectCheckedItemList>
                {accessories.map((item, index) => {
                  return (
                    <li key={index}>
                      {item}
                      <ClearItemListButtonStyle
                        type="button"
                        onClick={handleClearItem}
                        id={index}
                        title="accessories"
                      >
                        <ClearIcon fontSize="small" />
                      </ClearItemListButtonStyle>
                    </li>
                  );
                })}
              </FormSelectCheckedItemList>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{
                display: "flex",
                margin: "0 auto",
                minWidth: 600,
              }}
              men
            >
              <InputLabel id="demo-simple-select-standard-label">
                Fuel Consumption
              </InputLabel>
              <Select
                name="fuelConsumption"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={handleChangeSelect}
              >
                <MenuItem value="" sx={{ zIndex: "999" }}>
                  <em>None</em>
                </MenuItem>
                {modelList.map((model) => (
                  <MenuItem value={model.value}>{model.label}</MenuItem>
                ))}
              </Select>
              <FormSelectCheckedItemList>
                {fuelConsumption.map((item, index) => {
                  return (
                    <li key={index}>
                      {item}
                      <ClearItemListButtonStyle
                        type="button"
                        onClick={handleClearItem}
                        id={index}
                        title="fuelConsumption"
                      >
                        <ClearIcon fontSize="small" />
                      </ClearItemListButtonStyle>
                    </li>
                  );
                })}
              </FormSelectCheckedItemList>
            </FormControl>
          </>
        );
      case 3:
        return (
          <>
            <TextField
              name="minimumAge"
              type="text"
              label="Minimum Age"
              variant="standard"
              value={formik.values?.minimumAge}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.minimumAge && Boolean(formik.errors.minimumAge)
              }
              helperText={formik.touched.minimumAge && formik.errors.minimumAge}
              required
            />
            <TextField
              name="otherRequirements"
              type="text"
              label="Other Requirements"
              variant="standard"
              value={formik.values?.otherRequirements}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.otherRequirements &&
                Boolean(formik.errors.otherRequirements)
              }
              helperText={
                formik.touched.otherRequirements &&
                formik.errors.otherRequirements
              }
              required
            />
            <TextField
              name="mileage"
              type="text"
              label="Mileage"
              variant="standard"
              value={formik.values?.mileage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mileage && Boolean(formik.errors.mileage)}
              helperText={formik.touched.mileage && formik.errors.mileage}
              required
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
              helperText={
                formik.touched.rentalPrice && formik.errors.rentalPrice
              }
              required
            />
            <FormControlLabel
              name="driverLicense"
              checked={formik.values?.driverLicense}
              value={formik.values?.driverLicense}
              control={<Checkbox />}
              label="Driver License"
              onChange={formik.handleChange}
              required
            />
          </>
        );
      case 4:
        return (
          <>
            <TextField
              name="description"
              type="text"
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
              variant="standard"
              value={formik.values?.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              required
            />
          </>
        );
      default:
        break;
    }
  };

  return (
    <>
      <TitleAdvertFormStyle>Add Advert</TitleAdvertFormStyle>
      <Box component="form" autoFocus={true} style={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep} style={StepperStyle}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]} sx={StepStyle}>
              <StepButton
                color={!errorStep ? "#ffaeae" : "#aeaeff"}
                onClick={handleStep(index)}
              >
                {activeStep === index && label}
              </StepButton>
              {activeStep === index && (
                <StepUnderline color={isError ? "#ffaeae" : "#aeaeff"} />
              )}
            </Step>
          ))}
        </Stepper>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
              <Button type="submit" onClick={formik.handleSubmit}>
                Create
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}> */}
            <AdvertDataBoxStyle id={activeStep}>
              {stepInputList(activeStep)}
            </AdvertDataBoxStyle>
            {/* </Typography> */}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                disabled={activeStep === 4}
                sx={{ mr: 1 }}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
              {errorStep && (
                <StepErrorUnderTextStyle>
                  All fields must be filled in and correct
                </StepErrorUnderTextStyle>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}

export default AddAdvertForm;
