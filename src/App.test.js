import { render, screen } from '@testing-library/react';
import App from './App';
import { validateEmail } from './Utils';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Testing validate email ', () => {
  test('When user enters valid email', () => {
      expect(validateEmail('test@noventiq.com')).toEqual('');
  });
})

describe('Testing validate email ', () => {
  test('When user enters invalid email', () => {
      expect(validateEmail('test.com')).toEqual('validationMessage.invalidEmail');
  });
})

describe('Testing validate email ', () => {
  test('When user enters any public domain email', () => {
      expect(validateEmail('test@gmail.com')).toEqual('validationMessage.noPublicProvider');
  });
})

describe('Testing validate email ', () => {
  test('When user enters random text', () => {
      expect(validateEmail('testuser')).toEqual('');
  });
})