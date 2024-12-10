import { useQuery } from "@tanstack/react-query";
import fetchUserInfo from "./fetchers";

enum QueryKeys {
  GET_USER_INFO = "get-user-info",
}

const useUserInfo = () => {
  const isClient = typeof window !== "undefined";
  const accToken = isClient ? localStorage.getItem("accessToken") : null;
  return useQuery({
    queryKey: [QueryKeys.GET_USER_INFO],
    queryFn: () => fetchUserInfo(),
    enabled: !!accToken,
    retry: 0,
  });
};

export { useUserInfo };
