import { useMutation } from "@tanstack/react-query";
import { fetchRegister } from "./fetchers";

const useRegister = () =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: fetchRegister,
  });

export { useRegister };
