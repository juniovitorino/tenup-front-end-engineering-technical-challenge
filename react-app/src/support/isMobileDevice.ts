export const isMobileDevice = () => {
  const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isSmallScreen = window.innerWidth <= 480;

  return isMobile && isSmallScreen;
}
