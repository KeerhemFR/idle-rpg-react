import App from '../App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Test for App Router', () => {
  test('Should render Homepage on default route', () => {
    render(<App />);
    //verify page content for default route
    expect(screen.getByText(/Squalala/)).toBeInTheDocument();
  });
});
