import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users
const url = ' https://reqres.in/api/users'
const App = () => {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  useEffect(() => {
    try {
      fetch(url).then((res) => res.json()).then((json) => setUsers(json.data))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter((_id) => {
        return _id != id
      })
      )
    } else {
      setInvites([...invites, id])
    }
  }

  return (
    <div className="App">
      <Users
        items={users}
        isLoading={isLoading}
        handleChange={handleChange}
        value={value}
        invites={invites}
        onClickInvite={onClickInvite}
      />
      {/* <Success /> */}
    </div>
  );
}
export default App;
