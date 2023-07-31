import React from "react";
import { View } from "react-native";
import { Button, Text, Input } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "expo-router";
import { useLogin } from "../../hooks/useLogin";

export default function Page() {
  const { isLoading, loginUser } = useLogin();

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
      }}
    >
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text h4 style={{ marginBottom: 20, fontFamily: "Roboto_700Bold" }}>
          Log in to{" "}
          <Text
            style={{
              fontFamily: "NotoSerif_700Bold",
            }}
          >
            VinoMemo
          </Text>
        </Text>
        <Text>Welcome back! Sign in with your email to continue</Text>
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("The format of your email address is not valid.")
            .required("Field must not be empty."),
          password: Yup.string()
            .min(8, "Your password must contain 8 characters or more.")
            .max(20, "Your password must contain 20 characters or less.")
            .required("Field must not be empty."),
        })}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => {
          !isLoading && loginUser(values.email, values.password);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ marginTop: 100 }}>
            <View style={{ marginBottom: 30 }}>
              <Text>Email</Text>
              <Input
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errorMessage={errors.email}
                autoCapitalize="none"
              />
            </View>
            <View style={{ marginBottom: 30 }}>
              <Text>Password</Text>
              <Input
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errorMessage={errors.password}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Button
                onPress={handleSubmit}
                loading={isLoading}
                title="Log in"
                size="lg"
                radius="md"
                containerStyle={{
                  width: "100%",
                  paddingBottom: 30,
                }}
              />
              <Link href="/signup">
                <Text
                  style={{
                    color: "#932541",
                    fontFamily: "Roboto_400Regular_Italic",
                    fontStyle: "italic",
                  }}
                >
                  Not registered on VinoMemo yet?{" "}
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Roboto_700Bold",
                    }}
                  >
                    Signup
                  </Text>
                </Text>
              </Link>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
