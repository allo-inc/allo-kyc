import { useState } from "react";

enum LoginStatus {
  OTPSendSuccess = "success",
  ErrorEmail = "error-email",
  ErrorPassword = "error-password",
  ErrorEmailPassword = "error-email-password",
  ErrorEmailNotSent = "error-email-not-sent",
  Error = "error",
  ErrorResetEmailNotSent = "error-reset-email-not-sent",
}

export const useLogin = () => {
  const [loading, setLoading] = useState<any>(false);
  const [status, setStatus] = useState<any>(LoginStatus.OTPSendSuccess);
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const [signup, setSignup] = useState<any>(false);
  const [isOTP, setIsOTP] = useState<any>(true);
  const [OTPValid, setOTPValid] = useState<any | undefined>(undefined);
  const [OTPValidating, setOTPValidating] = useState<any>(false);

  const LoginErrorMap: any = {
    [LoginStatus.OTPSendSuccess]:
      "An email has been successfully sent to your mailbox.",
    [LoginStatus.ErrorEmail]: "Please enter a valid email.",
    [LoginStatus.ErrorPassword]:
      "Your password is incorrect. Please try again.",
    [LoginStatus.ErrorEmailPassword]:
      "Please enter an existing email/password. If you are trying to\n" +
      "create an account, please click on the link below.",
    [LoginStatus.ErrorEmailNotSent]:
      "Something went wrong with sending your OTP code. Please try\n" +
      " again.",
    [LoginStatus.Error]: "Something went wrong. Please try again.",
    [LoginStatus.ErrorResetEmailNotSent]: "",
  };

  return {
    LoginStatus,
    LoginErrorMap,
    loading,
    setLoading,
    status,
    setStatus,
    email,
    setEmail,
    password,
    setPassword,
    forgotPassword,
    setForgotPassword,
    signup,
    setSignup,
    isOTP,
    OTPValid,
    OTPValidating,
    setIsOTP,
    setOTPValid,
    setOTPValidating,
  };
};
