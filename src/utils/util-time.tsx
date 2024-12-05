const calculateCountdown = (expireTime: string) => {
  const expirationDate = new Date(expireTime);
  const currentTime = new Date();
  const timeDiff = expirationDate.getTime() - currentTime.getTime();

  return Math.max(0, Math.floor(timeDiff / 1000));
};

const formatCountdown = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
export { calculateCountdown, formatCountdown };
