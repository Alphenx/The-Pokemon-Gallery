import { render } from '@testing-library/react';
import App from './App';

describe('Given the App component', () => {
  test('Then provisional test should pass', () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
