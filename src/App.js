import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users
const url = ' https://reqres.in/api/users'
const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    try {
      fetch(url).then((res) => res.json()).then((json) => setUsers(json.data))
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }, [])
  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}
export default App;
