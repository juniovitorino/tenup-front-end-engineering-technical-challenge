import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';

import { isMobileDevice } from '../support/isMobileDevice';
import { setMobileViewport } from '../support/setMobileViewport';

import CompanyLogo from './CompanyLogo';

describe("Company Logo", () => {
  let isMobile = false;

  it('should render CompanyLogo component', () => {
    render(<CompanyLogo isMobile={isMobile} />);
    expect(screen.queryByTestId("companyLogo")).toBeInTheDocument();
  })

  it("should hide company name on mobile", () => {
    setMobileViewport();
    const isMobile = isMobileDevice()

    render(<CompanyLogo isMobile={isMobile} />);
    const companyName = screen.queryByTestId("companyName");
    expect(companyName).not.toBeInTheDocument();
  })

  it("should not hide company name on desktop", () => {
    const isMobile = !isMobileDevice();
    render(<CompanyLogo isMobile={isMobile} />);

    const companyName = screen.queryByTestId("companyName");
    expect(companyName).toBeInTheDocument();
  })
})
