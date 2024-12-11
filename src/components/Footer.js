import React from "react";

function Footer() {
    return (
        <div className="row">
            <div style={{ backgroundColor: '#5A6C57', padding: '20px 80px', borderRadius: '8px' }}>
                <h2 className="text-light" style={{ textAlign: 'left', marginTop: '10px', marginBottom: '20px' }}>Contact us</h2>
                
                <h5 className="text-light" style={{ textAlign: 'left', marginTop: '5px', marginBottom: '20px' }}>
                    10/18 Moo.2 Super Highway Rd. Chang Phueak, A.Muang, Chiang Mai 50300
                </h5>
                <h5 className="text-light" style={{ textAlign: 'left', marginTop: '5px', marginBottom: '10px' }}>
                    Tel: +66 5321 4828, +66 94 706 7222
                </h5>

                <h5 className="text-light" style={{ textAlign: 'left', marginTop: '5px', marginBottom: '20px' }}>+66 62 310 5632 (08.30 - 17.30hrs)</h5>
                <h5 className="text-light" style={{ textAlign: 'left', marginTop: '5px', marginBottom: '10px' }}>stay@1480chiangmai.com</h5>
            </div>
        </div>);
}
export default Footer;