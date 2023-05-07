import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';
import { MemoryRouter } from 'react-router-dom';

describe('Given a MainLayout component', () => {
  describe('When it is rendered', () => {
    test('then it should contain a Header component', () => {
      render(
        <MemoryRouter>
          <MainLayout />
        </MemoryRouter>
      );
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    test('then it should contain an Outlet component', () => {
      render(
        <MemoryRouter>
          <MainLayout />
        </MemoryRouter>
      );
      const outlet = screen.getByRole('main');
      expect(outlet).toBeInTheDocument();
    });
  });
});
