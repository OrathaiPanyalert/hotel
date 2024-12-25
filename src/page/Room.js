import React from "react";

function Room() {
  return (
    <div>
      {/* ส่วนของ checkbox */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <label>
            <input type="checkbox" />
            Deluxe
          </label>
          <label>
            <input type="checkbox" />
            Premier
          </label>
          <label>
            <input type="checkbox" />
            Suite
          </label>
        </div>
        <span>Price</span>
      </div>

      {/* พื้นหลังที่ยาว */}
      <div
        style={{
          backgroundColor: '#E4F6E5', // สีพื้นหลัง
          padding: '20px 80px', // กำหนด Padding
          borderRadius: '8px', // ทำมุมโค้ง
          width: '100%', // ให้ความกว้างเต็มหน้าจอ
          marginTop: '20px', // เพิ่มระยะห่างจากด้านบน
        }}
      >
        {/* การ์ดที่อยู่ภายในพื้นหลัง */}
        <div
          style={{
            backgroundColor: '#ffffff', // พื้นหลังของการ์ด
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // เงาให้การ์ดดูเด่น
            width: '300px', // ความกว้างของการ์ด
            margin: '0 auto', // จัดการ์ดให้อยู่กลาง
          }}
        >
          {/* ภาพในการ์ด */}
          <img
            src="https://via.placeholder.com/300x200"
            alt="Room"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          
          {/* ข้อความในการ์ด */}
          <h3>Deluxe Room</h3>
          <p>ห้องพักสุดหรูพร้อมวิวทะเลและสิ่งอำนวยความสะดวกครบครัน</p>
          <button style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            จองห้อง
          </button>
        </div>
      </div>
    </div>
  );
}

export default Room;
