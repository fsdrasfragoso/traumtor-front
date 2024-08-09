// src/presentation/components/LoginSection.js
import React from 'react';

const LoginSection = ({ onSubmit, email, setEmail, password, setPassword }) => (
  <section className="login_part section_padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="login_part_text text-center">
            <div className="login_part_text_iner">
              <h2>Novo no site?</h2>
              <a href="#" className="btn_3">Criar uma conta</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="login_part_form">
            <div className="login_part_form_iner">
              <h3>Bem vindo de volta!<br /> Por favor, faça login</h3>
              <form className="row contact_form" onSubmit={onSubmit} noValidate>
                <div className="col-md-12 form-group p_star">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <div className="col-md-12 form-group p_star">
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
                <div className="col-md-12 form-group">
                  <div className="creat_account d-flex align-items-center">
                    <input type="checkbox" id="f-option" name="selector" />
                    <label htmlFor="f-option">Lembrar conta</label>
                  </div>
                  <button type="submit" value="submit" className="btn_3">Entrar</button>
                  <a className="lost_pass" href="#">Esqueceu a senha?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LoginSection;
