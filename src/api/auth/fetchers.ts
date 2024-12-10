import { ILogin, IRegister } from "@/types/interfaces";
import { axiosPublic } from "../axios.config";
import { IVerify } from "./type";

const fetchRegister = async (data: IRegister) => {
  const res = await axiosPublic.post("/auth/register", data);
  return res.data;
};
const fetchExpiryTime = async (email: string | null) => {
  const res = await axiosPublic.get("/auth/expiry-time", {
    params: {
      email,
    },
  });
  return res.data;
};
const fetchVerification = async (data: IVerify) => {
  const res = await axiosPublic.post("/auth/verify", data);
  return res.data;
};

const fetchLogin = async (data: ILogin) => {
  const res = await axiosPublic.post("/auth/login", data);
  return res.data;
};
export { fetchRegister, fetchExpiryTime, fetchVerification, fetchLogin };
