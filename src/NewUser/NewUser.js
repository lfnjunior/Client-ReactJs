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
import DateFnsUtils from "@date-io/date-fns";
import ptLocale from "date-fns/locale/pt-BR";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
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
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  date: {
    border: "1px solid #aaa",
    padding: "10px",
    borderRadius: "6px"
  }
}));

export default function SignUp() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState(new Date("01/01/2000"));
  const [sex, setSex] = useState(0);
  async function handleSubmit(event) {
    event.preventDefault();
    await api
      .post("/user", {
        username: username,
        password: password,
        email: email,
        birthdate: birthdate,
        sex: sex
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro de Usuário
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                value={username}
                onChange={event => setUsername(event.target.value)}
                id="firstName"
                label="Nome de usuário"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={event => setEmail(event.target.value)}
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password}
                onChange={event => setPassword(event.target.value)}
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password2}
                onChange={event => setPassword2(event.target.value)}
                name="password2"
                label="Repetir senha"
                type="password"
                id="password2"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.date}>
                <FormLabel component="legend">Sexo</FormLabel>
                <RadioGroup
                  aria-label="position"
                  name="position"
                  value={sex}
                  onChange={event => setSex(event.target.value)}
                  row
                >
                  <FormControlLabel
                    value="Marculino"
                    control={<Radio color="primary" />}
                    label="Masculino"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="Feminino"
                    control={<Radio color="primary" />}
                    label="Feminino"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </div>
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                <KeyboardDatePicker
                  autoOk
                  fullWidth
                  variant="inline"
                  inputVariant="outlined"
                  label="With keyboard"
                  format="dd/MM/yyyy"
                  value={birthdate}
                  onChange={date => setBirthdate(date)}
                  InputAdornmentProps={{ position: "start" }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Já possui uma conta? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
