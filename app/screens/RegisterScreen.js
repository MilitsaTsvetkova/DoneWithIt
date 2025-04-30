import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import userApi from "../api/users";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState();
  const auth = useAuth();
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApi.login);

  const handleRegister = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) {
        setError(result.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    } else {
      setError(null);

      const { data: authToken } = await loginApi.request(
        userInfo.email,
        userInfo.password
      );
      auth.login(authToken);
    }
  };
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />

      <Screen>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            name="name"
            icon="account"
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppFormField
            name="email"
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            icon="lock"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
