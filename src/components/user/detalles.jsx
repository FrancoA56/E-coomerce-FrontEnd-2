import React, { useState, useEffect } from 'react';
import axios from 'axios'; // O el método que utilices para hacer solicitudes HTTP

// Suponiendo que tienes un API que devuelve la información del usuario por su ID
const fetchUserDetails = async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`); // Reemplaza con tu endpoint real
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
};

export const UserDetails = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const userDetails = await fetchUserDetails(userId);
      setUser(userDetails);
    };
    getUserDetails();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <div>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Nombre Completo:</strong> {user.firstname} {user.lastname}</p>
        <p><strong>Dirección:</strong> {user.address}, {user.city}, {user.state}, {user.zipcode}</p>
        <p><strong>Teléfono:</strong> {user.phone}</p>
        <p><strong>País:</strong> {user.country}</p>
        <p><strong>Logo:</strong> {user.logo ? <img src={user.logo} alt="Logo" width="100" /> : 'No disponible'}</p>
        <p><strong>Rol:</strong> {user.role}</p>
        <p><strong>Tipo:</strong> {user.type}</p>
        <p><strong>Estado:</strong> {user.isDisabled ? 'Desactivado' : 'Activo'}</p>
        <p><strong>Creado En:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        <p><strong>Actualizado En:</strong> {new Date(user.updatedAt).toLocaleDateString()}</p>
        <p><strong>Eliminado En:</strong> {user.deletedAt ? new Date(user.deletedAt).toLocaleDateString() : 'No eliminado'}</p>
      </div>
    </div>
  );
};
