import React, { useEffect, useState } from 'react';

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
    <div>
      {users.map((user) => (
        <div data-testid="user-item" key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
