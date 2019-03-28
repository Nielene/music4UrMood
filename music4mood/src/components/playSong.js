import React, { Component } from 'react';
import axios from 'axios';
import '../css/playSong.css';
import NavbarVert from './NavbarVert.js'
class PlaySong extends Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      mood: this.props.match.params.mood,
      singleSong: {},
      likedSongs: [],
    };
  }

  getThings=async()=>{

  const { mood } = this.state;

  let ppid = 0;
  if (mood === 'romantic') {ppid = 180004657;} else if (mood === 'sad') {ppid = 115190858;} else if (mood === 'energy') {ppid = 181828048;} else if (mood === 'happy') {ppid = 190301292;} else if (mood === 'relaxed') {ppid = 222448237;}

  await axios.get(`http://api.napster.com/v2.2/playlists/pp.${ppid}/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=25`)
  .then(thing=> {

    this.setState({
      songs: thing.data.tracks,
    });
  });
  await this.setState({
    singleSong: this.state.songs[Math.floor(Math.random() * 25)],
  });
  }
  componentDidMount =()=> {
      this.getThings()
  };

  addToFavorites=()=> {
    const{ singleSong, likedSongs } = this.state;

    this.setState({
      likedSongs: [...likedSongs, singleSong],
    });
  };

  dislike=()=> {
    this.setState({
      singleSong: this.state.songs[Math.floor(Math.random() * 25)],
    });
  };

  checkMood=()=>{
    const {mood}=this.state
    if(mood!=this.props.match.params.mood){

      this.setState({
        mood:this.props.match.params.mood
      })
      this.getThings();
    }
  }
  componentDidUpdate=()=>{
    this.checkMood();
  }


  render() {
    const { singleSong, likedSongs,mood } = this.state;
    // console.log(this.props.match.params.mood);
    // console.log(this.state.mood)


    return (
      <div className={`${mood}con`}>
      <NavbarVert />
        <div className='border'>
          <div className='songCont'>
              <li className='artist'>Artist: {singleSong.artistName}</li><br/>
              <li>Song: {singleSong.name}</li><br/>
              <li>Album : {singleSong.albumName}</li><br/>
          </div>

          <div>
            <audio ref="audio_tag" src={`${singleSong.previewURL}`} controls autoPlay/>
            <br/>
            <button onClick={this.dislike}>SKIP</button>
            <button onClick={this.addToFavorites}>LOVE</button><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaySong;
