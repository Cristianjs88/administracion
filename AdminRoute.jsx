import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'wouter'; // Importar useNavigate de wouter
import { useToast } from '@chakra-ui/react';
import { AuthContext } from '../App'; // Importa el contexto de autenticación

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const toast = useToast();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
      toast({
        title: 'Error',
        description: 'You do not have permission to access this page',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [user, navigate, toast]);

  return children;
};

export default AdminRoute;