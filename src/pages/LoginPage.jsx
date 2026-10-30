/**
 * @author HuytpnCe190719
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

/**
 * @author HuytpnCe190719
 */
function LoginPage() {
  // Local UI State cho Form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi reload trang mặc định của form
    setError('');

    // Validation cơ bản
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    const result = authService.login(username, password);
    if (result.success) {
      // Đăng nhập thành công -> Điều hướng sang Admin Dashboard
      navigate('/admin/dashboard');
    } else {
      // Thất bại -> Hiển thị lỗi
      setError(result.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--bg-main)' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>FUNews Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input 
              type="text" 
              className="input-field" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input 
              type="password" 
              className="input-field" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          {error && <span className="text-error" style={{ marginBottom: '15px' }}>{error}</span>}
          <button type="submit" className="btn" style={{ width: '100%' }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
