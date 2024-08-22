import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

const UserModal = ({ isOpen, onClose, user, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
      setDisabled(user.disabled); // Agrega el campo disabled
    } else {
      setName('');
      setEmail('');
      setRole('');
      setDisabled(false); // Inicializa disabled en falso para un nuevo usuario
    }
  }, [user]);

  const handleSave = async () => {
    const requestData = {
      name,
      email,
      role,
      disabled, // Incluya el campo disabled en la solicitud
    };

    try {
      if (user) {
        const response = await fetch(`http://127.0.0.1:8355/api/v1/users/me`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(requestData),
        });
        if (!response.ok) {
          throw new Error('Error updating user'); 
        }
      } else {
        const response = await fetch('/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(requestData),
        });
        if (!response.ok) {
          throw new Error('Error creating user'); 
        }
      }
      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving user:', error);
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{user ? 'Editar Usuario' : 'Crear Usuario'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Nombre</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Rol</FormLabel>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="conaf">Conaf</option>
              <option value="usuario">Usuario</option>
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Desactivado</FormLabel>
            <input 
              type="checkbox" 
              checked={disabled} 
              onChange={(e) => setDisabled(e.target.checked)} 
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Guardar
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;