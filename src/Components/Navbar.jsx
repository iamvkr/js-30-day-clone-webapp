import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container">
                <span className="navbar-brand text-light">
                <i className="bi bi-list me-2 menuBtn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"></i>
                    <img src="https://camo.githubusercontent.com/16916aec71acffe56544e39810941905c8ee2c39ebec950faf1011bc9a4d715e/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f362f36612f4a6176615363726970742d6c6f676f2e706e67" alt="Logo" width="30" height="30" className="d-inline-block align-text-top " />
                    <span className='ms-3'>Js 30 day challenge</span>
                </span>
            </div>

        </nav>
    )
}

export default Navbar