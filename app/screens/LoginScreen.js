import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const { login } = useAuth();

  const handleLogin = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);

    login(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email or password."
          visible={loginFailed}
        />
        <AppFormField
          name="email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
