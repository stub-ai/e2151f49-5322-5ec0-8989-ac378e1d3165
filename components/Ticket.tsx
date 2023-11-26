import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CannedResponse, { CannedResponseData } from './CannedResponse';

const Ticket = () => {
  const [cannedResponses, setCannedResponses] = useState<CannedResponseData[]>([]);

  const fetchCannedResponses = async () => {
    try {
      const response = await axios.get('/api/canned-responses');
      setCannedResponses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCannedResponse = (response: CannedResponseData) => {
    setCannedResponses([...cannedResponses, response]);
  };

  useEffect(() => {
    fetchCannedResponses();
  }, []);

  return (
    <div>
      <CannedResponse onAdd={handleAddCannedResponse} />
      {/* Render your canned responses here */}
    </div>
  );
};

export default Ticket;