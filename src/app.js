import React, { Component } from "react";
import "./assets/app.css";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import SelectPlayList from "./containers/selectPlayList.js";
import AddPlayList from "./components/addPlayList.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playLists: JSON.parse(localStorage.getItem("playLists")) || [
        {
          playListName: "No playlist",
          playList: []
        }
      ]
    };
    if (false) {
      localStorage.clear();
    }
  }

  addPlayList(e) {
    const files = e.target.files;
    var flag = true;
    this.state.playLists.forEach((item) => {
      if (item.playListName === files[0].name.split(".")[0]) {
        flag = false
      }
    })
    var playLists = []
    if (this.state.playLists[0].playList.length !== 0 && flag) {
      playLists = this.state.playLists
    }
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
        array.forEach((item) => {
          if (item !== "") {
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
        localStorage.setItem("playLists", JSON.stringify(playLists));
      };
    }
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
          <AddPlayList
            onClickAddPlayList={(e) => {
              this.addPlayList(e)
            }} />
        </main>
      </div>
    );
  }
}

export default App;
