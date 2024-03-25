const Header = ()=>{
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{marginRight: 10 +'%'}}>
                    <img src="../../images/logo.png" alt="" width="200px"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{width:'140px',height:'60px'}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Menu1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Menu2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Menu3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-disabled="true">Menu4</a>
                    </li>

                    </ul>

                <div>
                    <a className="nav-link" aria-disabled="true">
                    <img src="../../images/user.png" alt="" width="100px"/>
                    </a>
                </div>

                </div>
                </div>
            </nav>
    
}