import React, { Component } from "react";

import ListButton from "../components/listButton.js";
import PlayPlayList from "../containers/playPlayList.js"

class SelectPlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readYoutubeFlag: false,
            playFlag: false,
            playListName: null,
            playList: [
                {
                    musicName: null,
                    videoID: null,
                    startTime: null,
                    endTime: null
                }
            ]
        };
    }

    handleClickPlayFlag() {
        this.setState({
            readYoutubeFlag: !this.state.readYoutubeFlag,
            playFlag: !this.state.playFlag,
        });
    }

    arrayShuffle(array) {
        for (var i = (array.length - 1); 0 < i; i--) {

            // 0〜(i+1)の範囲で値を取得
            var r = Math.floor(Math.random() * (i + 1));

            // 要素の並び替えを実行
            var tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }
        return array;
    }

    selectPlayList(index) {
        this.setState({
            playListName: this.props.playLists[index].playListName,
            playList: this.arrayShuffle(this.props.playLists[index].playList)
        });
    }

    render() {
        return (
            <div>
                {this.props.playLists.map((item, index) => {
                    return (
                        <ListButton
                            listName={item.playListName}
                            onEventSelectList={() => {
                                if (item.playList.length !== 0) {
                                    this.handleClickPlayFlag();
                                    this.selectPlayList(index);
                                }
                            }}
                        />
                    );
                })}
                <PlayPlayList
                    readYoutubeFlag={this.state.readYoutubeFlag}
                    playListName={this.state.playListName}
                    playList={this.state.playList}
                    open={this.state.playFlag}
                    onClose={() => {
                        this.handleClickPlayFlag();
                    }}
                />
            </div>
        );
    }
}

export default SelectPlayList;
