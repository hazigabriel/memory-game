import logo from "./images/header-logo.png"


function Header() {
    
    return (
        <section class="headerSection">
            <div className="scoreboardWrapper">
                <h2>Current score: 2</h2>
                <h2>Best score: 23</h2>
            </div>
            <img src={logo} className="headerLogo"></img>
            <div className="gameInfo"><p>?</p></div>
        </section>
    )

}

export default Header