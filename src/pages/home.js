import React, { Component } from "react";
import fire from "../config/firebase";
import Header from "../components/header";
//import Card from "../components/card";
import Movie from "../components/movie";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  componentWillMount(){
    let moviesRef = fire.database().ref('movies').orderByKey().limitToLast(100);
    moviesRef.on('child_added', snapshot => {
      let data = snapshot.val();
      let movie = {title: data.title, poster: data.poster, url: data.url, desc: data.desc, key: snapshot.key};
      this.setState({ movies: [movie].concat(this.state.movies) });
    })
  }

  addMovie(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('movies').push({
      poster: this.inputPoster.value,
      url: this.inputUrl.value,
      title: this.inputTitle.value,
      desc: this.inputDesc.value
    });
    this.inputPoster.value = '';
    this.inputUrl.value = '';
    this.inputTitle.value = '';
    this.inputDesc.value = '';
  }
  removeItem(movieID) {
    const movieRef = fire.database().ref(`/items/${movieID}`);
    movieRef.remove();
  }
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="section">
            <div className="row">
              { /* Render movies */
                this.state.movies.map( movie => <Movie key={movie.key} poster={movie.poster} title={movie.title} desc={movie.desc} url={movie.url} /> )
              }
              {/* <Movie poster="https://img.yts.am/assets/images/movies/venom_2018/medium-cover.jpg" title="Venom" desc="Disfruta de una nueva forma de capturar el mundo que te rodea con la cámara del Pixel 3." />
              <Card icon="group" title="La mejor foto" text="Te recomienda automáticamente las mejores fotos, donde nadie esté parpadeando y todo se vea perfecto." />
              <Card icon="settings" title="Google Lens" text="Enfoca la cámara para buscar productos en Internet, identificar monumentos, plantas o animales, añadir eventos al calendario y mucho más." /> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={this.addMovie.bind(this)}>
                <input type="text" placeholder="Poster" ref={ el => this.inputPoster = el } />
                <input type="text" placeholder="Titulo" ref={ el => this.inputTitle = el } />
                <input type="text" placeholder="Descripcion" ref={ el => this.inputDesc = el } />
                <input type="text" placeholder="URL" ref={ el => this.inputUrl = el } />
                <button type="submit">Enviar!</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;