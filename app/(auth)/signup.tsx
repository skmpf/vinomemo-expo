import { View } from "react-native";
import { Button, Text, Input } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "expo-router";
import { useSignup } from "../../hooks/useSignup";
import { KeyboardAvoidingContainer } from "../../components/KeyboardAvoidingContainer";

export default function Page() {
  const { isLoading, signupUser } = useSignup();

  return (
    <KeyboardAvoidingContainer>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 50,
        }}
      >
        <Text h4 style={{ marginBottom: 20, fontFamily: "Roboto_700Bold" }}>
          Sign up with email
        </Text>
        <Text>
          Save your delicious wine tasting notes and access them anywhere by
          signing up for{" "}
          <Text style={{ fontFamily: "NotoSerif_400Regular" }}>VinoMemo</Text>
        </Text>
      </View>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Field must not be empty."),
          email: Yup.string()
            .email("The format of your email address is not valid.")
            .required("Field must not be empty."),
          password: Yup.string()
            .min(8, "Your password must contain 8 characters or more.")
            .max(20, "Your password must contain 20 characters or less.")
            .required("Field must not be empty."),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password")], "Your password must match")
            .required("Field must not be empty."),
        })}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => {
          !isLoading && signupUser(values.name, values.password, values.email);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ paddingVertical: 20 }}>
            <View style={{ marginBottom: 30 }}>
              <Text>Name</Text>
              <Input
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                errorMessage={errors.name}
                autoCapitalize="words"
              />
            </View>
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
            <View style={{ marginBottom: 30 }}>
              <Text>Confirm password</Text>
              <Input
                onChangeText={handleChange("passwordConfirm")}
                onBlur={handleBlur("passwordConfirm")}
                value={values.passwordConfirm}
                errorMessage={errors.passwordConfirm}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Button
                onPress={handleSubmit}
                loading={isLoading}
                title="Create an account"
                size="lg"
                radius="md"
                containerStyle={{ width: "100%", paddingBottom: 30 }}
              />
              <Link href="/login">
                <Text
                  style={{
                    color: "#932541",
                    fontFamily: "Roboto_400Regular_Italic",
                  }}
                >
                  Already have an account?{" "}
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Roboto_700Bold",
                    }}
                  >
                    Login
                  </Text>
                </Text>
              </Link>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingContainer>
  );
}
