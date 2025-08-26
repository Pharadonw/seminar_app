import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          ยินดีต้อนรับสู่ระบบ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              ข้อมูลผู้ใช้
            </h3>
            <p className="text-blue-700">
              <strong>ชื่อ:</strong> {user.name}
            </p>
            <p className="text-blue-700">
              <strong>อีเมล:</strong> {user.email}
            </p>
            <p className="text-blue-700">
              <strong>บทบาท:</strong> {user.role === 'admin' ? 'ผู้ดูแลระบบ' : 'ผู้ใช้'}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              การเข้าถึง
            </h3>
            <p className="text-green-700">
              คุณสามารถเข้าถึงฟีเจอร์ต่างๆ ได้แล้ว
            </p>
            <p className="text-green-700 mt-2">
              ใช้เมนูด้านบนเพื่อนำทาง
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              ฟีเจอร์ที่มี
            </h3>
            <ul className="text-purple-700 space-y-1">
              <li>• ระบบเข้าสู่ระบบ</li>
              <li>• จัดการรายชื่อบุคคล</li>
              <li>• การนำทางที่ปลอดภัย</li>
              <li>• ออกจากระบบ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
