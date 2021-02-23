import React from "react"

function NavBar (props) {

    return (
        <header className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Garima Gupta</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/contact" className={props.currentpage === "contact"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"} >Contact</a>
                        <a href="/portfolio" className={props.currentpage === "portfolio"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"}>Portfolio</a>
                        <a href="/" className={props.currentpage === "about"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"}>About</a>
                    </div>
                </div>
            </nav>
    </header>
    )

}

export default NavBar;