import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render a link to the home page', () => {
    render(<Header />);

    const linkElement = screen.getByText('Home');

    expect(linkElement).toBeInTheDocument();
  });

  it('logo should be visible', () => {
    render(<Header />);

    const logo = screen.getByAltText('Challengers Logo');

    expect(logo.src).toContain('.svg');
    expect(logo).toBeVisible();
  });
});
