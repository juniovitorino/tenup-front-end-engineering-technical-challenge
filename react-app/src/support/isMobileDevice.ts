/**
 * Determines if the current device is a mobile device.
 * @returns {boolean} True if the device is a mobile device, otherwise false.
 */
export const isMobileDevice = () => {
  const userAgent =
    typeof window.navigator === "undefined" ? "" : navigator.userAgent;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );
  const isSmallScreen = window.innerWidth <= 480;

  return isMobile && isSmallScreen;
};
