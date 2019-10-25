import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import api from "../Services/api";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn({ history }) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await api
      .post("/user/login", {
        login: email,
        senha: password
      })
      .then(response => {
        console.log(response);
        console.log(response.data);
        //localStorage.setItem("user", _id);
        //history.push("/dashboard");
      })
      .catch(function(error) {
        console.log("error.config");
        console.log(error.config);
        if (error.response) {
          console.log("error.response.data");
          console.log(error.response.data);
          console.log("error.response.status");
          console.log(error.response.status);
          console.log("error.response.headers");
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("error.request");
          console.log(error.request);
        } else {
          console.log('"Error", error.message:');
          console.log("Error", error.message);
        }
      });
  }

  return (
    <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Acessar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/newuser" variant="body2">
                {"Novo por aqui? Cadastre-se"}
              </Link>
            </Grid>
            <Grid item />
          </Grid>
        </form>
      </div>
    </Container>
  );
}
