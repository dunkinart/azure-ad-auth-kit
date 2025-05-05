import { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  const graphToken = queryParams.get('graphToken');
  const loginType = queryParams.get('loginType') === 'sso' ? 'Seamless SSO' : 'Manual Login';

  useEffect(() => {
    if (token && graphToken) {
      fetch(`http://localhost:3000/profile?graphToken=${graphToken}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          setUser(data.user);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, []);

  if (loading) return <h2>Loading user profile...</h2>;
  if (!user) return <h2>Failed to load user info.</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {user.displayName}</h1>
      <p><strong>Email:</strong> {user.mail || user.userPrincipalName}</p>
      <p><strong>Job Title:</strong> {user.jobTitle}</p>
      <p><strong>Phone:</strong> {user.mobilePhone || '—'}</p>
      <p><strong>UPN:</strong> {user.userPrincipalName}</p>
      <p><strong>Login Type:</strong> {loginType}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;
