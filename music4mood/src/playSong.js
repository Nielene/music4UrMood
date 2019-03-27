import React,{Component} from 'react';
import axios from 'axios'

class PlaySong extends Component{
  constructor(props){
    super(props)
    this.state={
      songs : [],
      mood:'romantic',
      singleSong:{},
      likedSongs:[]
    }
  }

    componentDidMount =async()=>{
      const {mood}=this.state
      let ppid=0;
      if (mood==='romantic'){ppid=180004657}
      else if (mood==='sad'){ppid=115190858}
      else if (mood==='energetic'){ppid=181828048}
      else if (mood==='happy'){ppid=190301292}
      else if (mood==='relaxed'){ppid=222448237}

      await axios.get(`http://api.napster.com/v2.2/playlists/pp.${ppid}/tracks?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=10`)
      .then(thing=>{
        // console.log(thing.data.tracks)
        this.setState({
          songs:thing.data.tracks
        })
      })
      await this.setState({
        singleSong: this.state.songs[Math.floor(Math.random() * 11)]
      })
    }
  render(){
    const {singleSong}=this.state
    console.log(singleSong)



    return(
      <>
        song: {singleSong.name}<br/>
        artist: {singleSong.artistName}<br/>
        album Name: {singleSong.albumName}<br/>
        <iframe src={`https://raw.githubusercontent.com/anars/blank-audio/master/250-milliseconds-of-silence.mp3`} allow='autoplay' id ='audio' style={{display:'none'}} >
        </iframe>
          <audio ref="audio_tag" src={`${singleSong.previewURL}`} controls autoPlay/>

      </>
    )
  }
}

export default PlaySong
