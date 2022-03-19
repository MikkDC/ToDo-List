import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import TodoInput from './components/TodoInput';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/to do list/i);
  expect(linkElement).toBeInTheDocument();
});

test("Input box is shown to user", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Please enter a task/i);
  expect(linkElement).toBeInTheDocument();
})

test("fireEvent on Submit button", () => {
  render(<App />)
  const submitbutton = screen.getByText("Add Task")
  fireEvent.click(submitbutton)
  const deleteButton = screen.getByText("X")
  expect(deleteButton).toBeInTheDocument()
});

