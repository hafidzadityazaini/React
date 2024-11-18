function User({ name, age, country }) {
  return (
    <div>
      <h4 style={{ color: "blue" }}>Info Pengguna</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}

// PRAKTEK

// SOAL 1
function Message(name, message) {
  console.log("Name :" + { name }, "Message:" + { message });
}

// SOAL 2

function UserProfile({ username, age, location }) {
  return (
    <div>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export { User, Message, UserProfile };