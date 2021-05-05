import React, { Component } from 'react';

import YouTube from 'react-youtube';

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import ListButton from "../components/listButton.js";

class PlayPlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
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
        // 初回プレイリスト選択時
        if (event.target.getDuration() === 0) {
            this.setMusic(0)
            return;
        }
        // 二回目以降プレイリスト選択時（再生中にダイアログ閉じるとtureのまま）
        if (this.state.isPlaying === true) {
            this.playStop()
            this.setMusic(0)
            return;
        }
        this.playStart()
        // https://developers.google.com/youtube/iframe_api_reference?hl=ja
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
                <div>
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
                <div style={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}
                >
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
                        {this.props.playList.map((item, index) => {
                            return (
                                <ListButton
                                    listName={item.musicName}
                                    onEventSelectList={() => {
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
