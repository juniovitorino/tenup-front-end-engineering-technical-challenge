import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import SectionTitle from './SectionTitle'

describe('Title', () => {
  beforeEach(() => {});

  it("should render a heading title", () => {
    render(<SectionTitle />)
    expect(screen.queryByRole('heading')).toBeInTheDocument();
  });

  it("should render a heading title and his children", () => {
    render(<SectionTitle>Section title</SectionTitle>)
    expect(screen.queryByText("Section title")).toBeInTheDocument()
  })
});
