import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import Paragraph from './Paragraph'

describe('Paragraph', () => {
  beforeEach(() => {});

  it("should render a paragraph", () => {
    render(<Paragraph />)
    expect(screen.queryByTestId("paragraph")).toBeInTheDocument();
  });

  it("should render a heading title and his children", () => {
    render(<Paragraph>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Paragraph>)
    expect(screen.queryByText("Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.")).toBeInTheDocument()
  })
});
