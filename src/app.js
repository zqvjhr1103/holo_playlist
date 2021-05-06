import React, { Component } from "react";
import "./assets/app.css";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import SelectPlayList from "./containers/selectPlayList.js";
import AddButton from "./components/addButton.js"
import AllDeleteButton from "./components/allDeleteButton.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagCheckDialg: false,
      playLists: JSON.parse(localStorage.getItem("playLists")) || [
        {
          playListName: "No playlist",
          playList: []
        }
      ]
    };
  }

  addPlayList(e) {
    const files = e.target.files;
    var playLists = []
    if (this.state.playLists[0].playList.length !== 0) {
      playLists = this.state.playLists
    }
    this.state.playLists.forEach((item, index) => {
      if (item.playListName === files[0].name.split(".")[0]) {
        playLists.splice(index, 1);
      }
    })
    var playList = []
    if (files.length > 0) {
      var reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = e => {
        var array = e.target.result.split("\n")
        var encoded = btoa(array[0]);
        if (encoded !== "dXpjSjhRWFpuZE1CNDdaU2E5V1hVR1l3NXRnaWljN1RzanNnektXVw0=") {
          console.debug("Password Incorrect")
          return;
        }
        array.shift()
        var readFlag = true
        array.forEach((item) => {
          if (item.match(/\bPLAYLIST_END_POINT\b/) !== null) {
            console.debug("Read PLAYLIST_END_POINT")
            readFlag = false
          }
          if (readFlag === true) {
            playList.push({
              musicName: item.split(",")[0],
              videoID: item.split(",")[1],
              startTime: item.split(",")[2],
              endTime: item.split(",")[3]
            })
          }
        })

        playLists.push({
          playListName: files[0].name.split(".")[0],
          playList: playList
        })
        this.setState({
          playLists: playLists
        });
        localStorage.clear();
        window.location.reload()
        localStorage.setItem("playLists", JSON.stringify(playLists));
      };
    }
  }

  handleCheckDialog() {
    this.setState({
      flagCheckDialg: !this.state.flagCheckDialg
    })
  }

  onClickDeleteAll() {
    this.setState({
      playLists: [
        {
          playListName: "No playlist",
          playList: []
        }
      ]
    })
    localStorage.clear();
    window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar position="static" color="default">
            <Typography variant="h6">
              Hololive Music PlayList
            </Typography>
          </AppBar>
        </header>
        <main className="App-main">
          <SelectPlayList playLists={this.state.playLists} />
          <div className="App-button">
            <AddButton
              onClickAddPlayList={(e) => {
                this.addPlayList(e)
              }} />
            <AllDeleteButton
              handleCheckDialog={() => { this.handleCheckDialog(); }}
              onClickDeleteAll={() => { this.onClickDeleteAll(); }}
              flagCheckDialg={this.state.flagCheckDialg}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
