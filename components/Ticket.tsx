import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ticket = () => {
  const [cannedResponses, setCannedResponses] = useState([]);

  const fetchCannedResponses = async () => {
    try {
      const response = await axios.get('/api/canned-responses');
      setCannedResponses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCannedResponses();
  }, []);

  return (
    <div>
      {/* Render your canned responses here */}
    </div>
  );
};

export default Ticket;