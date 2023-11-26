import React, { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      // Handle successful registration
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;