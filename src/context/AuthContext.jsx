import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ตรวจสอบว่ามี user ใน localStorage หรือไม่
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // จำลอง API call
      // ในอนาคตจะเปลี่ยนเป็น API จริง
      if (email === 'admin@example.com' && password === 'password') {
        const userData = {
          id: 1,
          email: email,
          name: 'Admin User',
          role: 'admin'
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        return { success: false, error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' };
      }
    } catch (error) {
      return { success: false, error: 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
