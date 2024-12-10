import { useMutation } from "@tanstack/react-query";
import { fetchLogin, fetchRegister, fetchVerification } from "./fetchers";

enum QueryKeys {
  REGISTER = "auth-register",
  LOGIN = "auth-login",
  VERIFY_ACCOUNT = "verify-account",
}
const useRegister = () => {
  return useMutation({
    mutationKey: [QueryKeys.REGISTER],
    mutationFn: fetchRegister,
  });
};

const useVerificationCode = () => {
  return useMutation({
    mutationKey: [QueryKeys.VERIFY_ACCOUNT],
    mutationFn: fetchVerification,
  });
};

const useLogin = () => {
  return useMutation({
    mutationKey: [QueryKeys.LOGIN],
    mutationFn: fetchLogin,
  });
};

export { useRegister, useVerificationCode, useLogin };
