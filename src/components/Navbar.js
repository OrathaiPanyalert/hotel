import React from "react";


function Navbar() {
    return (
        <div class="row">
            <nav class="navbar navbar-expand-lg" style={{backgroundColor: '#5A6C57'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="\home">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" style={{ height: '40px' }} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto"> {/*ให้อยู่ด้านขวา*/}
                            <a class="nav-link active me-4 text-light" aria-current="page" href="\home">Home</a>
                            <a class="nav-link me-4 text-light" href="\room">Room</a>
                            {/* <a class="nav-link" href="#">ติดต่อ</a>
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;