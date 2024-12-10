import { axiosPrivate } from "../axios.config";

const fetchUserInfo = async () => {
  const res = await axiosPrivate.get("/user/user-info");
  return res.data;
};

export default fetchUserInfo;
