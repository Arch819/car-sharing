import React, { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepButton,
  // StepLabel,
  Stepper,
  // FormControl,
  // InputLabel,
  // MenuItem,
  // NativeSelect,
  // Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import { object, string } from "yup";
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
} from "./AddAdvert.styled";
// import { modelList } from "utils/modelList";

const initialValues = {
  make: "",
  model: "",
  year: "",
  type: "",
  rentalPrice: "",
  engineSize: "",
  fuelConsumption: "",
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
  make: string("Enter yor make").required().trim().min(2),
  year: string("Enter yor email").required().trim(),
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
  const [completed, setCompleted] = useState({});
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const data = {
        img: file,
        ...values,
      };
      console.log(data);
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
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    formik.handleReset();
    handleDeleteImg();
  };

  const stepInputList = () => {
    switch (activeStep) {
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
                  onChange={handleAvatarChange}
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
            />
          </>
        );
      case 2:
        return <>step 2</>;
      case 3:
        return (
          <>
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
            />
          </>
        );
      default:
        break;
    }
  };

  const isError = Boolean(Object.keys(formik.errors).length);
  return (
    <>
      <TitleAdvertFormStyle>Add Advert</TitleAdvertFormStyle>
      <Box component="form" autoFocus={true} style={{ width: "100%" }}>
        <Stepper nonLinear activeStep={activeStep} style={StepperStyle}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]} sx={StepStyle}>
              <StepButton
                color={isError ? "#ffaeae" : "#aeaeff"}
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
            <AdvertDataBoxStyle>
              {stepInputList(formik, activeStep)}
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
            </Box>
          </React.Fragment>
        )}
        {/* 
        

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
         */}
        {/* <TextField
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
          /> */}
      </Box>
    </>
  );
  // return (
  //   <>
  //     <TitleAdvertFormStyle>Add Advert</TitleAdvertFormStyle>
  //     {photo ? (
  //       <AdvertsImageContainerStyle>
  //         <img src={photo} alt="avto" />
  //         <DeleteImageStyle onClick={handleDeleteImg}>
  //           <DeleteIcon />
  //         </DeleteImageStyle>
  //       </AdvertsImageContainerStyle>
  //     ) : (
  //       <Box component="form" sx={AdvertImageFormStyle}>
  //         <LabelAdvertImageStyle>
  //           <LabelAdvertTextStyle>Add a photo</LabelAdvertTextStyle>
  //           <input
  //             type="file"
  //             name="img"
  //             label="image"
  //             onChange={handleAvatarChange}
  //             accept=".png, .jpg"
  //           />
  //         </LabelAdvertImageStyle>
  //       </Box>
  //     )}
  //     <Box component="form" onSubmit={formik.handleSubmit} autoFocus={true}>
  //       <AdvertDataBoxStyle>
  //         <TextField
  //           name="make"
  //           type="text"
  //           label="Make"
  //           variant="standard"
  //           value={formik.values?.make}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={formik.touched.make && Boolean(formik.errors.make)}
  //           helperText={formik.touched.make && formik.errors.make}
  //         />
  //         <TextField
  //           name="model"
  //           type="text"
  //           label="Model"
  //           variant="standard"
  //           value={formik.values?.model}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={formik.touched.model && Boolean(formik.errors.model)}
  //           helperText={formik.touched.model && formik.errors.model}
  //         />
  //         <TextField
  //           name="year"
  //           type="text"
  //           label="Year"
  //           variant="standard"
  //           value={formik.values?.year}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={formik.touched.year && Boolean(formik.errors.year)}
  //           helperText={formik.touched.year && formik.errors.year}
  //         />
  //         <TextField
  //           name="type"
  //           type="text"
  //           label="Type"
  //           variant="standard"
  //           value={formik.values?.type}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={formik.touched.type && Boolean(formik.errors.type)}
  //           helperText={formik.touched.type && formik.errors.type}
  //         />
  //         <TextField
  //           name="rentalPrice"
  //           type="text"
  //           label="Rental price"
  //           variant="standard"
  //           value={formik.values?.rentalPrice}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={
  //             formik.touched.rentalPrice && Boolean(formik.errors.rentalPrice)
  //           }
  //           helperText={formik.touched.rentalPrice && formik.errors.rentalPrice}
  //         />
  //         <TextField
  //           name="engineSize"
  //           type="text"
  //           label="Engine size"
  //           variant="standard"
  //           value={formik.values?.engineSize}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={
  //             formik.touched.engineSize && Boolean(formik.errors.engineSize)
  //           }
  //           helperText={formik.touched.engineSize && formik.errors.engineSize}
  //         />
  //         <TextField
  //           name="fuelConsumption"
  //           type="text"
  //           label="Fuel consumption"
  //           variant="standard"
  //           value={formik.values?.fuelConsumption}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={
  //             formik.touched.fuelConsumption &&
  //             Boolean(formik.errors.fuelConsumption)
  //           }
  //           helperText={
  //             formik.touched.fuelConsumption && formik.errors.fuelConsumption
  //           }
  //         />
  //         {/* <FormControl
  //           variant="standard"
  //           sx={{
  //             m: 1,
  //             minWidth: 120,
  //           }}
  //           men
  //         >
  //           <InputLabel id="demo-simple-select-standard-label">
  //             Model
  //           </InputLabel> */}
  //         {/* <Select
  //             labelId="demo-simple-select-standard-label"
  //             id="demo-simple-select-standard"
  //             value={formik.values?.model}
  //             onChange={formik.handleChange}
  //             label="Model"
  //           >
  //             <MenuItem value="" sx={{ zIndex: "999" }}>
  //               <em>None</em>
  //             </MenuItem>
  //             {modelList.map((model) => (
  //               <MenuItem value={model.value}>{model.label}</MenuItem>
  //             ))}
  //           </Select> */}
  //         {/* <NativeSelect
  //             defaultValue=""
  //             inputProps={{
  //               name: "Model",
  //               id: "uncontrolled-native",
  //             }}
  //           >
  //             <option value=""></option>
  //             {modelList.map((model) => (
  //               <option value={model.value}>{model.label}</option>
  //             ))}
  //           </NativeSelect>
  //         </FormControl> */}

  //         <TextField
  //           name="description"
  //           type="text"
  //           label="Description"
  //           variant="standard"
  //           value={formik.values?.description}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={
  //             formik.touched.description && Boolean(formik.errors.description)
  //           }
  //           helperText={formik.touched.description && formik.errors.description}
  //         />
  //         <TextField
  //           name="description"
  //           type="text"
  //           label="Description"
  //           variant="standard"
  //           value={formik.values?.description}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={
  //             formik.touched.description && Boolean(formik.errors.description)
  //           }
  //           helperText={formik.touched.description && formik.errors.description}
  //         />
  //         <TextField
  //           name="functionalities"
  //           type="text"
  //           label="Functionalities"
  //           variant="standard"
  //           value={formik.values?.functionalities}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={
  //             formik.touched.functionalities &&
  //             Boolean(formik.errors.functionalities)
  //           }
  //           helperText={
  //             formik.touched.functionalities && formik.errors.functionalities
  //           }
  //         />
  //         <TextField
  //           name="mileage"
  //           type="text"
  //           label="Mileage"
  //           variant="standard"
  //           value={formik.values?.mileage}
  //           onChange={formik.handleChange}
  //           onBlur={formik.handleBlur}
  //           error={formik.touched.mileage && Boolean(formik.errors.mileage)}
  //           helperText={formik.touched.mileage && formik.errors.mileage}
  //         />
  //       </AdvertDataBoxStyle>
  //       <Button type="submit">Create</Button>
  //     </Box>
  //   </>
  // );
}

export default AddAdvertForm;
