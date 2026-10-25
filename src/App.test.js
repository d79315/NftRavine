// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftRavine title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftRavine/i);
    expect(titleElement).toBeInTheDocument();
});
