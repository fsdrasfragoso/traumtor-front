import React from 'react';

const Footer = () => {
    return (
        <footer className="footer_part">
            <div className="footer_iner">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-8">
                            <div className="footer_menu">
                                <div className="footer_logo">
                                    <a href="index.html">
                                        <img style={{ width: '50%' }} src="/img/Bonecoatras.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="system_description">
                                <h4>Sistema de Sorteio de Times de Futebol</h4>
                                <p>
                                    Desenvolvido para facilitar a organização dos jogos semanais, nosso sistema permite 
                                    cadastrar jogadores, definir seus níveis de habilidade e sortear equipes balanceadas 
                                    com base nos jogadores confirmados. Garanta que todos tenham uma experiência justa e 
                                    divertida, evitando desequilíbrios entre os times. 
                                </p>
                                <p>
                                    O sistema também impede sorteios inválidos, como times com número incorreto de 
                                    jogadores ou mais de um goleiro. Ideal para grupos de amigos que querem otimizar 
                                    seu tempo e começar o jogo mais rapidamente!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright_text">
                                <p style={{ color: 'white' }}>
                                    Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made by Colorlib
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
