import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  TextField,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import { Lock, VisibilityOff, Visibility } from "@mui/icons-material";
import "./login.css";
import LOGO from "../../pics/TTG.png";
import { LoginAuthAction } from "../../redux/actions/AuthActions";

const Login = (props) => {
  const { user, login } = props;
  const iconStyle = {
    width: "100%",
    height: "20vh",
    margin: "90 20 20 20",
    textAlign: "center",
    display: "inline-block",
  };
  const textFieldStyle = {
    margin: 5,
  };
   const history = useNavigate();

  const [value, setValue] = React.useState({ username: "candidate", password: "P@ssw0rd" });
  const [error, setError] = React.useState({ user: false, pass: false });
  const [showPassword, setShowPassword] = React.useState(false);
  const [errorHandler, setErrorHandler] = React.useState({
    hasError: false,
    message: "",
  });

  const loginClick = () => {
    if (value.username === "" && value.password === "") {
      setError({ user: true, pass: true });
    } else if (value.username === "") {
      setError({ ...error, user: true });
    } else if (value.password === "") {
      setError({ ...error, pass: true });
    } else if (error.user === false && error.pass === false) {
       login(value, history, setErrorHandler);
    }
  };

  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        <Grid
          xs={6}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <img src={LOGO} alt="LOGO" />
        </Grid>
        <Grid xs={6}>
          <div className="loginSplit">
            <Lock color="disabled" style={iconStyle} />
            <TextField
              id="outlined-basic"
              label="User"
              error={error.user}
              variant="outlined"
              style={textFieldStyle}
              sx={{ m: 1, width: "25ch" }}
              value={value.username}
              onChange={(e) => {
                setValue({ ...value, username: e.target.value }),
                  setError({ ...error, user: false });
              }}
            />

            <FormControl variant="outlined" sx={{ m: 1, width: "25ch" }}>
              <InputLabel
                htmlFor="outlined-adornment-password"
                error={error.pass}
              >
                Password
              </InputLabel>
              <OutlinedInput
                error={error.pass}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={value.password}
                onChange={(e) => {
                  setValue({ ...value, password: e.target.value }),
                    setError({ ...error, pass: false });
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Button
              variant="outlined"
              style={textFieldStyle}
              onClick={loginClick}
            >
              Login
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <p>Lets Play :D</p>
        <p>Lets Play :D</p>
        <p>Lets Play :D</p>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (value, history, setErrorHandler) => {
      dispatch(LoginAuthAction(value, history, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
