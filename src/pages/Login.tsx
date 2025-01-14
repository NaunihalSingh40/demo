import {
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { Wrapper } from "../styles/components/Login/Login";
import { darkTheme, lightTheme } from "../theme/color";
import { useNavigate } from "react-router-dom";
import { Theme, useTheme } from "@mui/material/styles";
import { postData } from "features/Api";

// Define interface for form data
export interface ILoginForm {
  Username: string;
  Password: string;
  Role: string;
}

const names = ["Admin", "Product Manager", "HR", "Financer"];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

function Login() {
  const themme = useTheme();
  const [personName] = React.useState<string[]>([]);

  const theme = useSelector(
    (state: { theme: { value: boolean } }) => state.theme.value
  );
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ILoginForm>();

  React.useEffect(() => {
    document.title = "Login Page";
  }, []);

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const key = "loginCredentials:";

    try {
      // Pass the correct URL dynamically
      const response = await postData(
        data,
        "https://8631-112-196-2-205.ngrok-free.app/api/auth/login"
      );

      console.log(response);
      
      // Store data as a string in localStorage if needed
      localStorage.setItem(key, JSON.stringify(data));

      // Retrieve the data
      const token = localStorage.getItem(key);
      if (token) {
        console.log("Token saved in localStorage:", token);
      } else {
        console.log("No token found in localStorage");
      }

      reset(); // Reset form after submission

      // Redirect based on Role
      if (data.Role === "Admin") {
        navigate("/Admin");
      } else if (data.Role === "Product Manager") {
        navigate("/ProductManager");
      } else if (data.Role === "Financer") {
        navigate("/Financer");
      } else if (data.Role === "HR") {
        navigate("/HR");
      } else {
        console.log("Role not found!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error if needed (e.g., show an error message to the user)
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <Wrapper $isDarkMode={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <Controller
            name="Username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is mandatory!!" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.Username}
                helperText={errors.Username ? errors.Username.message : ""}
                sx={{
                  input: {
                    color: theme
                      ? darkTheme.textPrimary
                      : lightTheme.textPrimary,
                  },
                  label: {
                    color: theme
                      ? darkTheme.textPrimary
                      : lightTheme.textPrimary,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: theme ? darkTheme.border : lightTheme.border,
                    },
                    "&:hover fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                  },
                }}
              />
            )}
          />

          <Controller
            name="Password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is Required!!" }}
            render={({ field }) => (
              <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.Password}
                sx={{
                  input: {
                    color: theme
                      ? darkTheme.textPrimary
                      : lightTheme.textPrimary,
                  },
                  label: {
                    color: theme
                      ? darkTheme.textPrimary
                      : lightTheme.textPrimary,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: theme ? darkTheme.border : lightTheme.border,
                    },
                    "&:hover fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                  },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={!!errors.Password}
                  sx={{
                    input: {
                      color: theme
                        ? darkTheme.textPrimary
                        : lightTheme.textPrimary,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme
                          ? darkTheme.border
                          : lightTheme.border,
                      },
                      "&:hover fieldset": {
                        borderColor: theme
                          ? darkTheme.accent
                          : lightTheme.accent,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme
                          ? darkTheme.accent
                          : lightTheme.accent,
                      },
                    },
                  }}
                />
                {errors.Password && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors.Password.message}
                  </span>
                )}
              </FormControl>
            )}
          />

          <Controller
            name="Role"
            control={control}
            defaultValue="" // Default value for the Role field
            rules={{ required: "Role is mandatory!!" }} // Validation rules
            render={({ field, fieldState: { error } }) => (
              <FormControl
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!error}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: theme
                      ? darkTheme.textPrimary
                      : lightTheme.textPrimary,
                    "&.Mui-focused": {
                      color: theme ? darkTheme.accent : lightTheme.accent,
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: theme ? darkTheme.border : lightTheme.border,
                    },
                    "&:hover fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme ? darkTheme.accent : lightTheme.accent,
                    },
                  },
                }}
              >
                <InputLabel id="select-role-label">Select Role</InputLabel>
                <Select
                  {...field}
                  labelId="select-role-label"
                  id="select-role"
                  value={field.value || ""}
                  onChange={(event: SelectChangeEvent<string>) =>
                    field.onChange(event.target.value)
                  }
                  input={<OutlinedInput label="Select Role" />}
                  sx={{
                    input: {
                      color: theme
                        ? darkTheme.textPrimary
                        : lightTheme.textPrimary,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: theme
                          ? darkTheme.border
                          : lightTheme.border,
                      },
                      "&:hover fieldset": {
                        borderColor: theme
                          ? darkTheme.accent
                          : lightTheme.accent,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme
                          ? darkTheme.accent
                          : lightTheme.accent,
                      },
                    },
                  }}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, themme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                {error && (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {error.message}
                  </span>
                )}
              </FormControl>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Login;
