import { View } from "react-native";
import { Button, Text, useTheme } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSignup } from "@/hooks/useSignup";
import { KeyboardAvoidingContainer } from "@/components/KeyboardAvoidingContainer";
import { SwitchToLogin } from "@/components/SwitchToLogin";
import { theme as custom } from "@/constants/theme";
import { FormField } from "@/components/FormField";

export default function Page() {
  const { isLoading, signupUser } = useSignup();
  const { theme } = useTheme();

  return (
    <KeyboardAvoidingContainer>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Text h2>Sign up with email</Text>
        <Text style={{ color: theme.colors.primary }}>
          Save your delicious wine tasting notes and access them anywhere by
          signing up for{" "}
          <Text
            style={{
              fontFamily: custom.fonts.brand,
              color: theme.colors.primary,
            }}
          >
            VinoMemo
          </Text>
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
          <View style={{ paddingTop: 40 }}>
            <FormField
              label="Name"
              name="name"
              value={values.name}
              errorMessage={errors.name}
              handleChange={handleChange}
              handleBlur={handleBlur}
              autoCapitalize="words"
            />
            <FormField
              label="Email"
              name="email"
              value={values.email}
              errorMessage={errors.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormField
              label="Password"
              name="password"
              value={values.password}
              errorMessage={errors.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              secureTextEntry={true}
            />
            <FormField
              label="Confirm password"
              name="passwordConfirm"
              value={values.passwordConfirm}
              errorMessage={errors.passwordConfirm}
              handleChange={handleChange}
              handleBlur={handleBlur}
              secureTextEntry={true}
            />
            <View
              style={{
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Button
                onPress={() => handleSubmit()}
                loading={isLoading}
                title="Create an account"
                size="lg"
                radius="md"
                containerStyle={{ width: "100%", marginBottom: 30 }}
              />
              <SwitchToLogin />
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingContainer>
  );
}
