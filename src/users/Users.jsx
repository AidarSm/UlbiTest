import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
