import React, { useState, useEffect } from "react";
function FetchData() {
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [userId]); // Efek dijalankan setiap kali `userId` berubah
  return (
    <div>
      <p>User ID: {userId}</p>
      <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button>
      {data ? (
        <div>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default FetchData;