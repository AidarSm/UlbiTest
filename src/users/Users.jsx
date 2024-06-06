import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users.map((user) => (
        <Link
          style={{ display: 'block', margin: '10px 0' }}
          to={`/users/${user.id}`}
          data-testid="user-item"
          key={user.id}
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
