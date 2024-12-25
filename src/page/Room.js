import React from "react";

function Room() {
  return (
    <div style={{ padding: "5px", borderRadius: "8px" }}>
      {/* ส่วนของ checkbox */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", gap: "30px" , marginRight: "10px" }}>
          <label style={{ fontSize: "18px" }}>
            <input
              type="checkbox"
              style={{
                transform: "scale(2)", // ขยายขนาดของ checkbox
                marginRight: "10px",
                marginLeft: "50px",
                marginTop: "20px", // ระยะห่างระหว่าง checkbox กับข้อความ
              }}
            />
            Deluxe
          </label>
          <label style={{ fontSize: "18px" }}>
            <input
              type="checkbox"
              style={{
                transform: "scale(2)", // ขยายขนาดของ checkbox
                marginRight: "10px",
                marginTop: "20px", // ระยะห่างระหว่าง checkbox กับข้อความ
              }}
            />
            Premier
          </label>
          <label style={{ fontSize: "18px" }}>
            <input
              type="checkbox"
              style={{
                transform: "scale(2)", // ขยายขนาดของ checkbox
                marginRight: "10px",
                marginTop: "20px", // ระยะห่างระหว่าง checkbox กับข้อความ
              }}
            />
            Suite
          </label>
        </div>
        <span style={{ fontSize: "18px", marginRight: "190px", marginTop: "20px",}}>Price</span>
      </div>


      {/* พื้นหลังที่ยาว */}
      <div
        style={{
          backgroundColor: '#85A98F', // สีพื้นหลัง
          padding: '20px 80px', // กำหนด Padding
          borderRadius: '8px', // ทำมุมโค้ง
          width: '100%', // ให้ความกว้างเต็มหน้าจอ
          marginTop: '20px', // เพิ่มระยะห่างจากด้านบน
        }}
      >
        {/* การ์ดที่อยู่ภายในพื้นหลัง */}
        <div
          style={{
            display: 'flex', // ใช้ Flexbox เพื่อให้การ์ดอยู่ในแถวเดียวกัน
            flexDirection: 'row', // ให้การ์ดทั้งหมดอยู่ในแถวเดียวกัน
            gap: '20px', // ระยะห่างระหว่างการ์ด
          }}
        >
          {/* การ์ดที่ 1 */}
          <div
            style={{
              backgroundColor: '#ffffff', // พื้นหลังของการ์ด
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // เงาให้การ์ดดูเด่น
              width: '700px', // ความกว้างของการ์ด
              height: '275px',
            }}
          >
            <img
              src="https://via.placeholder.com/300x200"
              alt="Room"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>

          {/* กล่องที่จะจัดการการ์ดที่ 2, 3 และ 4 ให้เป็นแถวเดียวกัน */}
          <div
            style={{
              display: 'flex', // ใช้ Flexbox ภายในนี้
              flexDirection: 'column', // ให้การ์ดที่ 2 และ 3 เรียงกันในแนวตั้ง
              gap: '20px', // ระยะห่างระหว่างการ์ดที่ 2 และ 3
              width: '350px', // ความกว้างที่แน่นอนสำหรับการ์ด 2 และ 3
            }}
          >
            {/* การ์ดที่ 2 */}
            <div
              style={{
                backgroundColor: '#ffffff', // พื้นหลังของการ์ด
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // เงาให้การ์ดดูเด่น
                width: '100%', // ความกว้างของการ์ด
              }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt="Room"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>

            {/* การ์ดที่ 3 */}
            <div
              style={{
                backgroundColor: '#ffffff', // พื้นหลังของการ์ด
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // เงาให้การ์ดดูเด่น
                width: '100%', // ความกว้างของการ์ด
              }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt="Room"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
          </div>

          {/* การ์ดที่ 4 (ย้ายมาอยู่ข้างๆ) */}
          <div
            style={{
              backgroundColor: '#ffffff', // พื้นหลังของการ์ด
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // เงาให้การ์ดดูเด่น
              width: '120%', // ความกว้างของการ์ด
              justifyContent: 'center',
              position: 'relative', // ทำให้ตำแหน่งของปุ่มสัมพันธ์กับการ์ด
            }}
          >
            {/* เนื้อหาของการ์ด */}
            <div style={{ display: 'flex', gap: '350px', alignItems: 'flex-start' }}>
              {/* ตัวเลือกห้องพัก */}
              <div>
                <h5>ตัวเลือกห้องพัก</h5>
                <p style={{ marginBottom: '5px', lineHeight: '1.2' }}>* ฟรีอาหารเช้า</p>
                <p style={{ marginBottom: '5px', lineHeight: '1.2' }}>* ห้องครัว</p>
                <p style={{ marginBottom: '5px', lineHeight: '1.2' }}>* เครื่องปรับอากาศ</p>
              </div>

              {/* ผู้เข้าพัก */}
              <div>
                <h5>ผู้เข้าพัก</h5>
                <p>* 2</p>
              </div>

              {/* ราคา/ห้อง/คืน */}
              <div>
                <h5>ราคา/ห้อง/คืน</h5>
                <p>* 1350.00 ฿</p>
              </div>
            </div>

            {/* ปุ่ม จองห้อง */}
            <button
              style={{
                position: 'absolute', // ทำให้ปุ่มอยู่ในตำแหน่งที่กำหนด
                bottom: '20px', // ระยะห่างจากขอบล่างของการ์ด
                right: '20px', // ระยะห่างจากขอบขวาของการ์ด
                padding: '10px 15px',
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid gray', // เพิ่มขอบที่มีสี black และความหนา 1px
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              จองห้อง
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Room;
