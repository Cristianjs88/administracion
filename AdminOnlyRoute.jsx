import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../App';
import { useLocation } from 'wouter'; 
import { Flex, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const AdminOnlyRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      setLocation('/'); 
    } 
  }, [user, setLocation]); 

  return children;
};

export default AdminOnlyRoute;