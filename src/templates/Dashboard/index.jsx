import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import './styles.css';

function Dashboard() {

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return setShouldRedirect(true);

    async function fetchTransactions() {
      const response = await fetch('http://localhost:3333/transaction', {
        method: "GET",
        headers: { 'Authorization': token },
      })
        .then((data) => data.json());

      setTransactions(response);
    }

    async function fetchUser() {
      const response = await fetch('http://localhost:3333/user', {
        method: "GET",
        headers: { 'Authorization': token },
      })
        .then((data) => data.json());

      setUser(response);
    }

    fetchTransactions();
    fetchUser();
  }, [setShouldRedirect]);

  if (shouldRedirect) return <Redirect to='/notfound' />

  const { name, balance } = user;
  return (
    <div className="dashboard-container">
      <div className="dashboard-bar">
        <span>Welcome {name}</span>
        <span>Your balance: ${parseFloat(balance).toFixed(2)}</span>
      </div>
      {transactions.map(({ createdAt, value, description }, index) => {
        const date = new Date(createdAt);
        return <div key={index} className='transaction'>
          <p>{description}</p>
          <div className="right">
            <p>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `}</p>
            <p style={{ 'color': value > 0 ? 'green' : 'red' }}>{value > 0 ? `+$${value}` : `$${value}`}</p>
          </div>
        </div>
      })}
    </div>
  );
}

export default Dashboard;
