import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

type TicketData = {
  title: string;
  description: string;
  file: File | null;
};

const Ticket = () => {
  const [ticketData, setTicketData] = useState<TicketData>({
    title: '',
    description: '',
    file: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketData({ ...ticketData, file: e.target.files ? e.target.files[0] : null });
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', ticketData.title);
    formData.append('description', ticketData.description);
    if (ticketData.file) {
      formData.append('file', ticketData.file);
    }
    try {
      const response = await axios.post('/api/tickets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle successful ticket creation
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={ticketData.title} onChange={handleInputChange} />
      <textarea name="description" value={ticketData.description} onChange={handleTextAreaChange} />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default Ticket;