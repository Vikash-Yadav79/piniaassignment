import React, { useState } from 'react';
import Button from './Button';

interface LoginFormProps {
  onSubmit: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  // State for input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Validate email and password (example: check if they are not empty)
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Call the onSubmit callback function passed from the parent component
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
          <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
