import React, { Component } from 'react';
import "../assets/playPlayList.css";

import YouTube from 'react-youtube';

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import ListButton from "../components/listButton.js";
import BackNextButton from "../components/backNextButton.js"

class PlayPlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: true,
            videoID: null,
            opts: {
                height: '180',
                width: '320',
            },
            currentIndex: -1
        };
    }

    playStart() {
        this.setState({
            isPlaying: true,
        })
    }

    playStop() {
        this.setState({
            isPlaying: false,
        })
    }

    setMusic(index) {
        this.setState({
            musicName: this.props.playList[index].musicName,
            videoID: this.props.playList[index].videoID,
            opts: {
                height: '180',
                width: '320',
                playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 1,        // 自動再生オン
                    //controls: 0,      // プレーヤーコントロール非表示
                    disablekb: 1,       // キーボード操作オフ
                    enablejsapi: 1,     // api制御オン
                    fs: 0,              // 全画面表示ボタン非表示
                    iv_load_policy: 3,  // アノテーション非表示
                    modestbranding: 1,  // YouTubeロゴ非表示
                    playsinline: 1,     // iOSの全画面表示再生オフ
                    rel: 0,             // 再生した動画と同じチャンネルから関連動画を選択
                    showinfo: 0,        // タイトルやユーザー情報を非表示（2018年9月25日以降は利用不可）
                    // 動画の先頭から指定された秒数分進めた位置から動画の再生が開始
                    start: this.props.playList[index].startTime,
                    // 動画を特定の位置で停止させる場合に、再生を開始してからの時間（秒数）でその位置を指定
                    end: this.props.playList[index].endTime
                }
            },
            currentIndex: index
        });
    }

    _onReady(event) {
        console.debug("onReady. Length:" + event.target.getDuration())
        console.debug("isPlay is " + this.state.isPlaying)
        if (this.state.isPlaying === true) {
            this.playStop()
            this.setMusic(0)
            return;
        }
        this.playStart()
        // https://developers.google.com/youtube/iframe_api_reference?hl=ja
        //event.target.mute()
        event.target.playVideo()
        event.target.setPlaybackQuality("small");
        event.target.setVolume(50);
    }

    _onError(event) {
        console.debug("onError")
    }

    _onApiChange(event) {
        console.debug("onApiChange")
    }

    _onStateChange(event, index) {
        console.debug("onStateChange:" + event.data)
        if (event.data === 0) {
            this.playStop()
            if (this.props.playList.length === index + 1) {
                this.setMusic(0)
            } else {
                this.setMusic(index + 1)
            }
        }
    }

    onClickBackNext(type) {
        this.playStop()
        if (type === "Back") {
            if (-1 === this.state.currentIndex - 1) {
                this.setMusic(this.props.playList.length - 1)
            } else {
                this.setMusic(this.state.currentIndex - 1)
            }
        }
        if (type === "Next") {
            if (this.props.playList.length === this.state.currentIndex + 1) {
                this.setMusic(0)
            } else {
                this.setMusic(this.state.currentIndex + 1)
            }
        }
    }

    render() {
        return (
            <Dialog

                fullScreen
                open={this.props.open}
                onClose={this.props.onClose}
                scroll="paper"
                disableBackdropClick="false"
                disableEscapeKeyDown="false"
            >
                <div id="dialog-top">
                    <AppBar position="fixed" color="default">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.props.onClose}>
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6">
                                {this.props.playListName}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Toolbar />
                </div>
                <div className="playPlayList-youtube">
                    <DialogContent dividers="true">
                        <YouTube
                            videoId={this.state.videoID}
                            opts={this.state.opts}
                            onReady={(event) => {
                                this._onReady(event, this.state.playList);
                            }}
                            onError={this._onError}
                            onApiChange={this._onApiChange}
                            onStateChange={(event) => {
                                this._onStateChange(event, this.state.currentIndex);
                            }}
                        />
                        <div className="playPlayList-button">
                            <BackNextButton type={"Back"} onClickBackNext={() => { this.onClickBackNext("Back"); }} />
                            {this.state.musicName}
                            <BackNextButton type={"Next"} onClickBackNext={() => { this.onClickBackNext("Next"); }} />
                        </div>
                        {this.props.playList.map((item, index) => {
                            return (
                                <ListButton
                                    listName={item.musicName}
                                    onEventSelectList={() => {
                                        document.getElementById('dialog-top').scrollIntoView(true)
                                        this.playStop()
                                        this.setMusic(index);
                                    }}
                                />
                            );
                        })}
                    </DialogContent>
                </div>
            </Dialog >
        );
    }
}

export default PlayPlayList;
