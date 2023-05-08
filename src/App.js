import React from 'react';
import image from './img/imagem.png';
import './App.css';

function App() {

  const [comentario, setComentario] = React.useState();
  const [todosOsComentarios, setTodosOsComentarios] = React.useState([]);

  function conteudoTexteArea(event) {
    setComentario(event.target.value);
  };

  function clickNoBotao() {
    const todosOsComentariosAnteriores = [...todosOsComentarios, comentario];

    setTodosOsComentarios(todosOsComentariosAnteriores);
  };

  return (
    <div className='container'>
      <img className='imagem' src={image} alt="" />
      <textarea onChange={conteudoTexteArea}></textarea>
      <button onClick={clickNoBotao}>Comentar</button>

      <ul>
        {todosOsComentarios.map(coment => (
          <li key={coment}>{coment}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
