import React from "react";
import Filme from '../Filme';

const Secao = ({ secao }) => {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5 class="text-white">{secao[0]?.generos[0]}</h5>
          </div>
        </div>
      </div>
      <div class="col-12">
        <ul class="filme_lista">
        {secao.map((filme) => (
          <Filme filme={filme} />
          ))} 
         </ul>
      </div>
    </section>
  );
};

export default Secao;
