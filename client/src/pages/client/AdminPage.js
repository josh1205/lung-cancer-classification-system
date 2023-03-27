import { auth, db } from '../../firebase';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    });

    return unsubscribe;
  }, []);

  const createUser = async () => {
    try {
      const newUser = { name: 'newUser' }; // Replace with your actual user data
      await addDoc(collection(db, 'users'), newUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={createUser}>Create User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;

