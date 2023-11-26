import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const User = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      <input name="email" type="email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" value={formData.password} onChange={handleChange} />
      <select name="department" value={formData.department} onChange={handleSelectChange}>
        <option value="">Select department</option>
        <option value="sales">Sales</option>
        <option value="support">Support</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default User;