import React, { useState, useEffect } from "react";

const Header = ({hideMenu}) => {

  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@user')));
  }, []);

  return (
    <header class="row">
      <div class="col-2">
        <img src={require("../../assets/logo.png").default} />
      </div>
      {!hideMenu && ( <div class="col-8">
        <ul class="menu_list">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Filmes</a>
          </li>
          <li>
            <a href="#">Mais Recentes</a>
          </li>
          <li>
            <a href="#">Minha lista</a>
          </li>
        </ul>
      </div>)}
      <div className="col-2 text-right">
        <a onClick={logout} className="text-white">Olá, {user?.nome}. Sair</a>
      </div>
    </header>
  );
};

export default Header;
