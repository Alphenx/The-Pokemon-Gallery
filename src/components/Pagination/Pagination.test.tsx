import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';

describe('Given a Pagination component', () => {
  describe('When it is rendered', () => {
    const setPage = jest.fn();
    const setLimit = jest.fn();
    const maxPages = 10;

    beforeEach(() => {
      setPage.mockClear();
      setLimit.mockClear();
    });

    test('then it should show a highlighted number with active page', () => {
      render(
        <MemoryRouter>
          <Pagination
            setPage={setPage}
            setLimit={setLimit}
            page={1}
            maxPages={maxPages}
          />
        </MemoryRouter>
      );

      const activeButton = screen.getByText('1');
      expect(activeButton).toHaveClass('active');
    });

    test('if is first page, then it should show disabled buttons', () => {
      render(
        <MemoryRouter>
          <Pagination
            setPage={setPage}
            setLimit={setLimit}
            page={0}
            maxPages={maxPages}
          />
        </MemoryRouter>
      );

      const firstButton = screen.getByTestId('Go to first page');
      const prevButton = screen.getByTestId('Go to previous page');
      const lastButton = screen.getByTestId('Go to last page');
      const nextButton = screen.getByTestId('Go to next page');

      expect(firstButton).toBeDisabled();
      expect(prevButton).toBeDisabled();
      expect(lastButton).not.toBeDisabled();
      expect(nextButton).not.toBeDisabled();
    });

    test('then it should show buttons up to max pages', () => {
      render(
        <MemoryRouter>
          <Pagination
            setPage={setPage}
            setLimit={setLimit}
            page={5}
            maxPages={maxPages}
          />
        </MemoryRouter>
      );

      const firstButton = screen.getByTestId('Go to first page');
      const prevButton = screen.getByTestId('Go to previous page');
      const lastButton = screen.getByTestId('Go to last page');
      const nextButton = screen.getByTestId('Go to next page');

      expect(firstButton).not.toBeDisabled();
      expect(prevButton).not.toBeDisabled();
      expect(lastButton).not.toBeDisabled();
      expect(nextButton).not.toBeDisabled();

      const buttons = screen.getAllByRole('button', { name: /[0-9]+/ });
      const buttonValues = buttons.map((button) => Number(button.textContent));

      expect(buttonValues).toEqual([3, 4, 5, 6, 7]);
    });

    test('then it should call the setPage function when a button is clicked', () => {
      render(
        <MemoryRouter>
          <Pagination
            setPage={setPage}
            setLimit={setLimit}
            page={5}
            maxPages={maxPages}
          />
        </MemoryRouter>
      );

      const button = screen.getByText('7');
      fireEvent.click(button);

      expect(setPage).toHaveBeenCalledWith(7);
    });

    test('then it should call the setLimit function when a limit is selected', () => {
      render(
        <MemoryRouter>
          <Pagination
            setPage={setPage}
            setLimit={setLimit}
            page={5}
            maxPages={maxPages}
          />
        </MemoryRouter>
      );

      const select = screen.getByLabelText('Results/page');
      fireEvent.change(select, { target: { value: '50' } });

      waitFor(() => {
        expect(setLimit).toHaveBeenCalledWith(50);
      });
    });

    test('consecutive clicks and  current page highlight should work correctly', () => {
      const setPage = jest.fn();
      const setLimit = jest.fn();

      render(
        <MemoryRouter>
          <Pagination
            setPage={setPage}
            setLimit={setLimit}
            page={5}
            maxPages={10}
          />
        </MemoryRouter>
      );

      const firstButton = screen.getByTestId('Go to first page');
      const prevButton = screen.getByTestId('Go to previous page');
      const lastButton = screen.getByTestId('Go to last page');
      const nextButton = screen.getByTestId('Go to next page');

      fireEvent.click(firstButton);
      expect(setPage).toHaveBeenCalledWith(0);

      waitFor(() => {
        fireEvent.click(nextButton);
        expect(setPage).toHaveBeenCalledWith(1);
      });

      fireEvent.click(prevButton);
      expect(setPage).toHaveBeenCalledWith(0);

      fireEvent.click(lastButton);
      expect(setPage).toHaveBeenCalledWith(10);
    });
  });
});
