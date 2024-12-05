import { useQuery } from "@tanstack/react-query";
import { fetchExpiryTime } from "./fetchers";

enum QueryKeys {
  VERIFICATION_EXPIRATION_TIME = "verification-expiration-time",
}
const useVerificationExpirationTime = (email: string | null) =>
  useQuery({
    queryKey: [QueryKeys.VERIFICATION_EXPIRATION_TIME],
    queryFn: () => fetchExpiryTime(email),
    enabled: !!email,
    retry: 0,
  });

export { useVerificationExpirationTime };
