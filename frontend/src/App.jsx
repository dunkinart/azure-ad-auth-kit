import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/silent-login", {
      method: "GET",
      credentials: "include"
    }).catch(() => {
      window.location.href = "http://localhost:3000/login"; // fallback to interactive login
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Redirecting to login...</h2>
    </div>
  );
}

export default App;
