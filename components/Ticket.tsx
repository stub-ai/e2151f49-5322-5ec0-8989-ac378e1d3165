import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const Ticket = () => {
  const [ticketData, setTicketData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/tickets', ticketData);
      // Handle successful ticket creation
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={ticketData.title} onChange={handleInputChange} />
      <textarea name="description" value={ticketData.description} onChange={handleTextAreaChange} />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default Ticket;