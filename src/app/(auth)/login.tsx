import { View } from "react-native";
import { Button, Text, useTheme } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLogin } from "@/hooks/useLogin";
import { KeyboardAvoidingContainer } from "@/components/KeyboardAvoidingContainer";
import { SwitchToReg } from "@/components/SwitchToReg";
import { theme as custom } from "@/constants/theme";
import { FormField } from "@/components/FormField";

export default function LoginPage() {
  const { isLoading, loginUser } = useLogin();
  const { theme } = useTheme();

  return (
    <KeyboardAvoidingContainer>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Text h2>
          Log in to{" "}
          <Text
            style={{
              fontFamily: custom.fonts.brandBold,
              color: theme.colors.primary,
            }}
          >
            VinoMemo
          </Text>
        </Text>
        <Text style={{ color: theme.colors.primary }}>
          Welcome back! Sign in with your email to continue
        </Text>
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
          <View style={{ paddingTop: 150 }}>
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
            <View
              style={{
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Button
                onPress={() => handleSubmit()}
                loading={isLoading}
                title="Log in"
                size="lg"
                radius="md"
                containerStyle={{
                  width: "100%",
                  marginBottom: 30,
                }}
              />
              <SwitchToReg />
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingContainer>
  );
}
