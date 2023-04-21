import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';

import { isMobileDevice } from '../support/isMobileDevice';
import { setMobileViewport } from '../support/setMobileViewport';

import Logo from './Logo';

describe("Logo", () => {
  let isMobile = false;

  it('should render Logo component', () => {
    render(<Logo isVisible={isMobile} />);
    expect(screen.queryByTestId("logo")).toBeInTheDocument();
  })

  it("should hide company name on mobile", () => {
    setMobileViewport();
    const isMobile = isMobileDevice()

    render(<Logo isVisible={isMobile} />);
    const companyName = screen.queryByTestId("companyName");
    expect(companyName).not.toBeInTheDocument();
  })

  it("should not hide company name on desktop", () => {
    const isMobile = !isMobileDevice();
    render(<Logo isVisible={isMobile} />);

    const companyName = screen.queryByTestId("companyName");
    expect(companyName).toBeInTheDocument();
  })
})
