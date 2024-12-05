import { useMutation } from "@tanstack/react-query";
import { fetchRegister, fetchVerification } from "./fetchers";

enum QueryKeys {
  REGISTER = "auth-register",
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

export { useRegister, useVerificationCode };
