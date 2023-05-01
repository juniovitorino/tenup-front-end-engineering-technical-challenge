import "@testing-library/jest-dom/extend-expect";
import {render, screen} from "@testing-library/react";
import TenUpLogo from "./TenUpLogo";

describe("10up Logo", () => {
  beforeEach(() => render(<TenUpLogo />));
  it("should render the 10up logo", () => {
    expect(screen.queryByTestId("tenUpLogo")).toBeInTheDocument();
  });
});
