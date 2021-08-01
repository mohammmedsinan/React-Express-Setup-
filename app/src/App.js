import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/customers')
      .then((res) => res.json())
      .then((res) => setData(res, console.log('customers fetched...', res)));
  }, []);
  return (
    <div>
      {data.map((customer) => {
        return (
          <>
            <div key={customer.id} style={{display:"flex" , justifyContent:"space-around" ,textAlign:"center" }}>
              <span style={{ color: 'red', margin: '10px 30px' }} key={customer.id}>
                {customer.name}
              </span>
              <span style={{ color: 'red', margin: '10px 30px' }} key={customer.name}>
                {customer.Age}
              </span>
              <span style={{ color: 'red', margin: '10px 30px' }} key={customer.age}>
                {customer.job}
              </span>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default App;
