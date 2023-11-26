import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

type CannedResponseData = {
  title: string;
  content: string;
};

const CannedResponse = () => {
  const [cannedResponseData, setCannedResponseData] = useState<CannedResponseData>({
    title: '',
    content: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCannedResponseData({ ...cannedResponseData, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCannedResponseData({ ...cannedResponseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/canned-responses', cannedResponseData);
      // Handle successful canned response creation
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={cannedResponseData.title} onChange={handleInputChange} />
      <textarea name="content" value={cannedResponseData.content} onChange={handleTextAreaChange} />
      <button type="submit">Create Canned Response</button>
    </form>
  );
};

export default CannedResponse;