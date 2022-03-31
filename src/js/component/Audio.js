import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
 
  render() {
 
    // Datos que debe cargar el audio
 
    const item = [
      {
        id: 1,
        audio: 'https://djlist.net/song/684771710/Epica_Star_WartsThe_Imperial_March_Epica/',
        formato: 'mp3',
      }
    ];
 
    return (
 
      item.map(item => { 
 
        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id } 
 
        return  <div key={ item.id }>
                  <audio controls>
                    <source src={ item.audio } type={ item.formato }/>
                  </audio>
                </div>
       
 
      })
 
    )
  }
}
