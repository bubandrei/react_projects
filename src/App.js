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
  const [success, setSuccess] = useState(false);
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
      setInvites(invites => invites.filter((_id) => {
        return _id != id
      })
      )
    } else {
      setInvites([...invites, id])
    }
  }
  const successInvite = () => {
    setSuccess(!success)
  }
  return (
    <div className="App">
      {success ? <Success successInvite={successInvite} count={invites.length} /> :
        <Users
          items={users}
          isLoading={isLoading}
          handleChange={handleChange}
          value={value}
          invites={invites}
          onClickInvite={onClickInvite}
          successInvite={successInvite}
        />
      }
    </div>
  );
}
export default App;
