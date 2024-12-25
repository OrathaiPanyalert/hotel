import React from "react";

function Home() {
    return (
        <div className="row">
            <h1 style={{
                textAlign: 'left', // Center the text
                marginBottom: '20px',
                marginTop: '20px',
                paddingLeft: '10%', // Add some left padding to shift text a bit
                paddingRight: '10%' // Add some right padding to shift text a bit
            }}>Welcome to 1480HOTEL, Chiang Mai</h1>

            <h5 style={{
                textAlign: 'left', // Center the text
                marginBottom: '20px',
                paddingLeft: '10%', // Add some left padding to shift text a bit
                paddingRight: '10%' // Add some right padding to shift text a bit
            }}>
                เซ็นทารา ริเวอร์ไซด์ เชียงใหม่<br />
                มองออกไปนอกหน้าต่างเพื่อชมวิวทิวทัศน์อันสวยงามของดอยสุเทพและแม่น้ำปิงในแบบเต็มตา<br />
                จากห้องพักอันกว้างขวางของโรงแรมเซ็นทารา ริเวอร์ไซด์ เชียงใหม่ โรงแรมที่เหมาะสำหรับทุกท่านไม่ว่าจะเป็นนักธุรกิจ
            </h5>

            <div style={{ backgroundColor: '#E4F6E5', padding: '20px 80px', borderRadius: '8px' }}>
                <h1 style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>สำรวจห้องพัก</h1>
                <h5 style={{ textAlign: 'center', marginTop: '5px', marginBottom: '10px' }}>คุณจะพอใจกับโอกาสในการผจญภัย ความโรแมนติก และการพักผ่อนที่ 1480HOTEL</h5>
                <div className="row" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    {/* Card 1 */}
                    <div className="col-md-2">
                        <div className="card" style={{ position: 'relative', border: 'none' }}>
                            <img
                                src="https://www.viehotelbangkok.com/wp-content/uploads/sites/67/2019/02/VIE-Hotel-BKK_02.png" // Replace with your image URL
                                className="card-img"
                                alt="..."
                                style={{
                                    opacity: 0.6, // Make the image semi-transparent
                                    objectFit: 'cover', // Ensure the image covers the entire card area
                                    height: '300px', // Set a fixed height for the image
                                }}
                            />
                            <div className="card-img-overlay" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                                <h5 className="card-title text-body" style={{ marginTop: '165px' }}>Deluxe Room</h5>
                                <a href="\room">
                                    <button
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            border: '1px solid',
                                            borderRadius: '30px',
                                            cursor: 'pointer',
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                        }}
                                    >
                                        ดูรายละเอียด
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-2">
                        <div className="card" style={{ position: 'relative', border: 'none' }}>
                            <img
                                src="https://media.onyx-hospitality.com/-/media/project/amari/common/property/bangkok/hotel-photos/stay/premier/premier-king-2.jpg?h=900&iar=0&w=1600&rev=-1&hash=F0CCC0269EF3D5CDF82629D3AC076905" // Replace with your image URL
                                className="card-img"
                                alt="..."
                                style={{
                                    opacity: 0.6,
                                    objectFit: 'cover',
                                    height: '300px',
                                }}
                            />
                            <div className="card-img-overlay" style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                                <h5 className="card-title text-body" style={{ marginTop: '165px' }}>Premier Room</h5>
                                <a href="\room">
                                    <button
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            border: '1px solid',
                                            borderRadius: '30px',
                                            cursor: 'pointer',
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                        }}
                                    >
                                        ดูรายละเอียด
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-2">
                        <div className="card" style={{ position: 'relative', border: 'none' }}>
                            <img
                                src="https://baiyokesky.baiyokehotel.com/images/room/jr-suite-space/jr-suite-space-10.jpg?v=1.0" // Replace with your image URL
                                className="card-img"
                                alt="..."
                                style={{
                                    opacity: 0.6,
                                    objectFit: 'cover',
                                    height: '300px',
                                }}
                            />
                            <div className="card-img-overlay" style={{ position: 'absolute', bottom: '20px', left: '5px', width: '100%' }}>
                                <h5 className="card-title text-body" style={{ marginTop: '165px' }}>Junior Suite</h5>  {/* Reduced margin-bottom to bring it closer to the button */}
                                <a href="\room">
                                    <button
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            border: '1px solid',
                                            borderRadius: '30px',
                                            cursor: 'pointer',
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                        }}
                                    >
                                        ดูรายละเอียด
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
