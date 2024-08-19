import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); // useNavigate substitui useHistory
  const isAuthenticated = localStorage.getItem('userName') !== null;
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.removeItem('userName'); // Remove o nome de usuário do localStorage
    navigate('/login'); // Redireciona o usuário para a página de login
  };

  return (
    <header className="main_menu home_menu">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/"> 
                <img style={{ width: '20%' }} src="/img/golaço.png" alt="logo" />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="menu_icon"><i className="fas fa-bars"></i></span>
              </button>

              <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  
                  <li className="nav-item">
                    {isAuthenticated ? (
                      <>
                        <Link className="nav-link" to="/footballer">Olá, {userName}!</Link>
                       
                      </>
                    ) : (
                      <Link className="nav-link" to="/login">Login</Link>
                    )}
                  </li>
                  {isAuthenticated ? (
                    <>
                    <li>                     
                    <Link className="nav-link" to="/criar-grupo">Criar Grupo</Link>
                      
                    </li>
                   <li>
                                            
                        <button 
                          className="nav-link" 
                          onClick={handleLogout} 
                          style={{ cursor: 'pointer' }}>
                          Sair
                        </button>
                     
                    </li>                    
                      </>
                    ) : (
                      <spn></spn>
                    )}
                </ul>
              </div>
              <div className="hearer_icon d-flex align-items-center">
                <Link to="/cart">
                  <i className="flaticon-shopping-cart-black-shape"></i>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
