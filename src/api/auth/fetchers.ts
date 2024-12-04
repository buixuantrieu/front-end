import { IRegister } from "@/types/interfaces";
import { axiosPublic } from "../axios.config";

const fetchRegister = async (data: IRegister) => {
  const res = await axiosPublic.post("/auth/register", data);
  return res.data;
};
export { fetchRegister };
