/**
 * @author HuytpnCe190719
 */
import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService';

/**
 * @author HuytpnCe190719
 */
function ProtectedRoute({ children }) {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, đá về trang login, 'replace' để không lưu lịch sử route cũ
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập, cho phép render component con bên trong
  return children;
}

export default ProtectedRoute;
