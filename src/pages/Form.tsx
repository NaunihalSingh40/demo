import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// Define the interface for the form data
interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  terms: boolean;
  Rating: number;
  Stakeholder: string;
}

const Formm: React.FC = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log("Form Data:", data);
    reset(); // Resets the form after submission
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>React Hook Form with Controller</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name Field */}
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: "First Name is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/* Last Name Field */}
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: "Last Name is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/* Email Field */}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/* Mobile Number */}
        <Controller
          name="mobile"
          control={control}
          defaultValue=""
          rules={{
            required: "Mobile Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Mobile Number"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!error}
              helperText={error ? error.message : ""}
            />
          )}
        />
        {/* Gender Radio Buttons */}
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          rules={{
            required: "Gender selection is required",
          }}
          render={({ field }) => (
            <FormControl>
              <FormLabel id="gender-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="gender-radio-buttons-group-label"
                name="gender"
                value={field.value}
                onChange={field.onChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="preferNotToSay" control={<Radio />} label="Prefer Not To Say" />
              </RadioGroup>
            </FormControl>
          )}
        />
        {/* Terms and Conditions Checkbox */}
        <Controller
          name="terms"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="I agree to the Terms and Conditions"
              required
            />
          )}
        />
        {/* Rating */}
        <Controller
          name="Rating"
          control={control}
          defaultValue={2.5}
          render={({ field }) => (
            <>
              <Typography component="legend">Rate Form Quality</Typography>
              <Rating {...field} name="rating" defaultValue={2.5} precision={0.5} />
            </>
          )}
        />
        {/* Stakeholder Type Select */}
        <Controller
          name="Stakeholder"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="stakeholder-type-select-label">Stakeholder Type</InputLabel>
              <Select
                labelId="stakeholder-type-select-label"
                {...field}
                label="Stakeholder Type"
              >
                <MenuItem value="Intern">Intern</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
                <MenuItem value="Core Member">Core Member</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "16px" }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Formm;
