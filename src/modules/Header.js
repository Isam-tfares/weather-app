export default function Header(){
    return(
        <nav className="navbar bg-body-tertiary">
            <div className="container fw-bold">
                <a className="navbar-brand align-items-center d-flex" href="#g">
                    <span className="text-primary">Weather</span>
                    <i class="bi bi-cloud-haze2-fill ms-1"></i>
                    
                    
                </a>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <a className="nav-link text-secondary" aria-current="page" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="#footer">Contact</a>
                </li>
                <li className="nav-item bg-dark " style={{borderRadius:'20px'}}>
                <a className="nav-link text-light" href="#form" >Get Weather</a>
                </li>
                
            </ul>
            </div>
        </nav>
    );
} 