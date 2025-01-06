import React from "react";
import "./Room.css";

function Room() {
  return (
    <div className="room-container">
      {/* ส่วนของ checkbox */}
      <div className="checkbox-container">
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Deluxe
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Premier
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox" />
            Suite
          </label>
        </div>
        <span className="price-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          Price
        </span>
      </div>

      {/* พื้นหลังที่ยาว */}
      <div className="background-container">
        {/* การ์ดที่อยู่ภายในพื้นหลัง */}
        <div className="card-row">
          {/* การ์ดที่ 1 */}
          <div className="card-small">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Room"
              className="card-image"
            />
          </div>

          {/* การ์ดที่ 2 และ 3 */}
          <div className="card-column">
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Room"
                className="card-image"
              />
            </div>
            <div className="card">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Room"
                className="card-image"
              />
            </div>
          </div>

          {/* การ์ดที่ 4 */}
          <div className="card-large">
            <div className="card-content">
              {/* ตัวเลือกห้องพัก */}
              <div>
                <h5 class="mb-4" >ตัวเลือกห้องพัก</h5>
                <p>* ฟรีอาหารเช้า</p>
                <p>* ห้องครัว</p>
                <p>* เครื่องปรับอากาศ</p>
              </div>

              {/* ผู้เข้าพัก */}
              <div>
                <h5 class="mb-4" >ผู้เข้าพัก</h5>
                <p>
                  * 2 คน
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                </p>
              </div>

              {/* ราคา/ห้อง/คืน */}
              <div>
                <h5 class="mb-4" >ราคา/ห้อง/คืน</h5>
                <p>* 1350.00 ฿</p>
              </div>
            </div>

            <button className="book-button">ดูรายละเอียด</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
