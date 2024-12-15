import { useParams } from 'react-router-dom';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' }
];

function UserDetails() {
  const { id } = useParams();
  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
}

export default UserDetails;