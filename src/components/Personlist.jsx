import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

function Personlist() {
  const [data, setData] = useState([
    { id: 1, name: "North", gender: "man" },
    { id: 2, name: "Note", gender: "man" },
    { id: 3, name: "New", gender: "woman" },
    { id: 4, name: "Nam", gender: "woman" },
  ]);
  const [show, setShow] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            รายชื่อบุคคล
          </h1>
          <button 
            onClick={() => setShow(!show)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
          >
            {show ? "ซ่อนรายการ" : "แสดงรายการ"}
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-600">
            จำนวนประชากรทั้งหมด: <span className="font-semibold text-blue-600">{data.length}</span> คน
          </p>
        </div>

        {show && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <div 
                key={item.id}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src={item.gender === "man" ? boy : girl} 
                    width={40} 
                    height={40}
                    alt={item.gender === "man" ? "ชาย" : "หญิง"}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      ID: {item.id} | เพศ: {item.gender === "man" ? "ชาย" : "หญิง"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Personlist;
