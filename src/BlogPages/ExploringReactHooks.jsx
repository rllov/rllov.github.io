import React, { useEffect, useState } from "react";

const ExploringReactHooks = () => {
  //api data fetcher using https://jsonplaceholder.typicode.com/users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="container mx-auto p-4">
          <ul>
            {users.map((users) => (
              <div className="card mb-4 p-4 rounded-2xl bg-base-300 shadow-xl text-center">
                <li key={users.id}>
                  <p>{users.name}</p>
                  <p>{users.email}</p>
                  <p>{users.username}</p>
                  <p>
                    {users.address.street}, {users.address.suite},
                    {users.address.city}, {users.address.zipcode}
                  </p>
                  <p>
                    {users.address.geo.lat}, {users.address.geo.lng}
                  </p>
                  <p>{users.phone}</p>
                  <p>{users.website}</p>
                  <p>{users.company.name}</p>
                  <p>{users.company.catchPhrase}</p>
                  <p>{users.company.bs}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExploringReactHooks;
