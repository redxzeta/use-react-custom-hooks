import { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useForm } from '../src';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
const initValue = { name: '', age: 42, job: '' };

const App = () => {
  const [display, setDisplay] = useState(false);
  const { form, handleChange, onSubmit } = useForm(initValue, () =>
    setDisplay(true)
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label id="name-label">Name</label>
        <input
          aria-label="name-label"
          name="name"
          onChange={handleChange}
          value={form.name}
          type="text"
        />
        <label id="age-label">Age</label>
        <input
          aria-label="age-label"
          name="age"
          onChange={handleChange}
          value={form.age}
          type="number"
        />
        <label id="job-label">Job</label>
        <input
          aria-label="job-label"
          name="job"
          onChange={handleChange}
          value={form.job}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {display && (
        <>
          {' '}
          <ul>
            <li>{form.name}</li>
            <li>{form.age}</li>
            <li>{form.job}</li>
          </ul>
        </>
      )}
    </div>
  );
};

test('should test useForm hook', () => {
  render(<App />);
  const nameField = screen.getByLabelText(/Name/i);
  userEvent.type(nameField, 'Flip');

  const ageField = screen.getByLabelText(/Age/i);
  userEvent.type(ageField, '26');

  const jobField = screen.getByLabelText(/Job/i);
  userEvent.type(jobField, 'engineer');

  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  waitFor(() => {
    expect(screen.findByText(/Flip/i)).toBeInTheDocument();
    expect(screen.findByText(/26/i)).toBeInTheDocument();
    expect(screen.findByText(/engineer/i)).toBeInTheDocument();
  });
});
