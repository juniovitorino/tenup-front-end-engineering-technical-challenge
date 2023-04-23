import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from '@testing-library/react';

import TopNavigationMenu from './TopNavigationMenu';

let openCloseBtn: HTMLElement | null;

describe("Menu", () => {
  let isMobile = false;

  beforeEach(async () => {
    render(<TopNavigationMenu />);
    openCloseBtn = screen.getByRole('button');
    if (openCloseBtn) await fireEvent.click(openCloseBtn);
  })

  it('should render TopNavigationMenu component', () => {
    expect(screen.queryByTestId("top-navigation-menu")).toBeInTheDocument();
  })

  it('should render have menu item for News', () => {
    expect(screen.queryByText("News")).toBeInTheDocument()
  })

  it('should render have menu item for About', () => {
    expect(screen.queryByText("About")).toBeInTheDocument()
  })

  it('should render have menu item for Products', () => {
    expect(screen.queryByText("Products")).toBeInTheDocument()
  })

  it('should render have menu item for Contact', () => {
    expect(screen.queryByText("Contact")).toBeInTheDocument()
  })

  it('should have a open/close button', () => {
    expect(screen.queryByTestId('toggleMenuButton')).toBeInTheDocument();
  });

  it("should show menu when open/close button is clicked", async () => {
    expect(screen.queryByRole("navigation")).toBeInTheDocument()
  });

  it("should hide menu when open/close button is clicked again", async () => {
    if (openCloseBtn) await fireEvent.click(openCloseBtn);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument()
  });
})
