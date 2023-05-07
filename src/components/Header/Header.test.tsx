import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Given a Header component', () => {
  describe('When it is rendered', () => {
    test('then it should show Pokemon logo', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const logo = screen.getByAltText('Pokemon Logo');
      expect(logo).toBeInTheDocument();
    });

    test('then it should show social networks links', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      const socialLinks = screen.getAllByRole('link');
      expect(socialLinks).toHaveLength(4);
    });
  });
});
