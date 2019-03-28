import React, { Component } from 'react';
import NavbarVert from './NavbarVert'
import "../css/YourMoods.css";

class YourMoods extends Component {
  render() {
    return (
      <div>
      <NavbarVert />
      <div className='div1'>

<h1> Your Mood History</h1>
    <div class="grid-container">
      <div class="sampleMoods">
        <div class="mood1">
          <ul>
            <li>Mood: Happy</li>
            <li>Artist: Pharrell Williams</li>
            <li>Song: Happy</li>
            <li>Album: Happy</li>
          </ul>
        </div>
        <div class="mood2">
          <ul>
            <li>Mood: Sad</li>
            <li>Artist: N'SYNC</li>
            <li>Song: Crazy</li>
            <li>Album: n'sync</li>
          </ul>
        </div>
        <div class="mood3">
          {" "}
          <ul>
            <li>Mood: Happy</li>
            <li>Artist: Journey</li>
            <li>Song:Don't Stop Believing</li>
            <li>Album:Escape</li>
          </ul>
        </div>
        <div class="mood4">
          <ul>
            <li>Mood: Romantic</li>
            <li>Artist:Bill Medley, Jennifer Warnes</li>
            <li>Song:Time of my life </li>
            <li>Album:Dirty Dancing</li>
          </ul>
        </div>
        <div class="mood5">
          <ul>
            <li>Mood: Emo</li>
            <li>Artist:Blink-182</li>
            <li>Song:I miss you</li>
            <li>Album:Blink-182</li>
          </ul>
        </div>
        <div class="mood6">
          <ul>
            <li>Mood: Romantic</li>
            <li>Artist:Aventura</li>
            <li>Song:Solo Por Un Beso</li>
            <li>Album:God's Project</li>
          </ul>
        </div>
        <div class="mood7">
          <ul>
            <li>Mood: Hyped</li>
            <li>Artist:Keith Ape</li>
            <li>Song:it g ma</li>
            <li>Album:</li>
          </ul>
        </div>
        <div class="mood8">
          <ul>
            <li>Mood: Relaxed</li>
            <li>Artist:UB40</li>
            <li>Song:Red Red Wine</li>
            <li>Album:Labour of Love</li>
          </ul>
        </div>
        <div class="mood9">
          <ul>
            <li>Mood: Happy</li>
            <li>Artist:The Beatles</li>
            <li>Song:Love</li>
            <li>Album:Love</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
  }
}


export default YourMoods;
