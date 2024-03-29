import type {FC} from "react";

interface LogoProps {
  isMobile: boolean;
}

const Logo: FC<LogoProps> = ({isMobile}) => {
  return (
    <svg
      data-testid="companyLogo"
      xmlns="http://www.w3.org/2000/svg"
      height="46">
      {!isMobile && (
        <path
          data-testid="companyName"
          fill="#fff"
          d="M61.82 31H76.7v-3.3H65.72V10h-3.9v21ZM95.808 31.3c6.51 0 11.31-4.56 11.31-10.8 0-6.24-4.8-10.8-11.31-10.8-6.51 0-11.31 4.59-11.31 10.8 0 6.21 4.8 10.8 11.31 10.8Zm0-3.42c-4.23 0-7.38-3.09-7.38-7.38s3.15-7.38 7.38-7.38 7.38 3.09 7.38 7.38-3.15 7.38-7.38 7.38ZM132.192 26.8c-1.35.78-2.82 1.08-4.32 1.08-4.44 0-7.59-3.12-7.59-7.38 0-4.35 3.15-7.38 7.62-7.38 2.25 0 4.14.75 5.79 2.4l2.46-2.4c-1.98-2.25-4.92-3.42-8.43-3.42-6.57 0-11.37 4.53-11.37 10.8 0 6.27 4.8 10.8 11.31 10.8 2.97 0 6.03-.9 8.22-2.67v-8.37h-3.69v6.54ZM158.936 31.3c6.51 0 11.31-4.56 11.31-10.8 0-6.24-4.8-10.8-11.31-10.8-6.51 0-11.31 4.59-11.31 10.8 0 6.21 4.8 10.8 11.31 10.8Zm0-3.42c-4.23 0-7.38-3.09-7.38-7.38s3.15-7.38 7.38-7.38 7.38 3.09 7.38 7.38-3.15 7.38-7.38 7.38Z"
        />
      )}
      <path
        fill="#17CF97"
        d="M20 10c0 5.523-4.477 10-10 10H0V10C0 4.477 4.477 0 10 0s10 4.477 10 10ZM20 30c0-5.523 4.477-10 10-10h10v10c0 5.523-4.477 10-10 10s-10-4.477-10-10ZM0 30c0 5.523 4.477 10 10 10h10V30c0-5.523-4.477-10-10-10S0 24.477 0 30ZM40 10c0-5.523-4.477-10-10-10H20v10c0 5.523 4.477 10 10 10s10-4.477 10-10Z"
      />
    </svg>
  );
};

export default Logo;
