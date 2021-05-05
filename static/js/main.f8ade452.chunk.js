(this.webpackJsonpholo_playlist=this.webpackJsonpholo_playlist||[]).push([[0],{64:function(t,e,a){},65:function(t,e,a){},85:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a(7),n=a.n(i),l=(a(64),a(19)),o=a(20),r=a(22),c=a(21),p=(a(65),a(114)),u=a(38),h=a(6),d=a(109),y=a(112),j=a(113),b=a(3),f=Object(h.a)((function(t){return{root:{}}}))((function(t){var e=t.classes;return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(d.a,{children:Object(b.jsx)(y.a,{button:!0,onClick:function(e){return t.onEventSelectList()},children:Object(b.jsx)(j.a,{primary:t.listName})})})})})),g=a(47),m=a(118),v=a(117),L=a(115),O=a(116),x=a(50),N=a.n(x),k=function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={isPlaying:!1,videoID:null,opts:{height:"180",width:"320"},currentIndex:-1},s}return Object(o.a)(a,[{key:"playStart",value:function(){this.setState({isPlaying:!0})}},{key:"playStop",value:function(){this.setState({isPlaying:!1})}},{key:"setMusic",value:function(t){this.setState({videoID:this.props.playList[t].videoID,opts:{height:"180",width:"320",playerVars:{autoplay:1,disablekb:1,enablejsapi:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0,showinfo:0,start:this.props.playList[t].startTime,end:this.props.playList[t].endTime}},currentIndex:t})}},{key:"_onReady",value:function(t){if(console.debug("onReady. Length:"+t.target.getDuration()),console.debug("isPlay is "+this.state.isPlaying),0!==t.target.getDuration()){if(!0===this.state.isPlaying)return this.playStop(),void this.setMusic(0);this.playStart(),t.target.setPlaybackQuality("small"),t.target.setVolume(50)}else this.setMusic(0)}},{key:"_onError",value:function(t){console.debug("onError")}},{key:"_onApiChange",value:function(t){console.debug("onApiChange")}},{key:"_onStateChange",value:function(t,e){console.debug("onStateChange:"+t.data),0===t.data&&(this.playStop(),this.props.playList.length===e+1?this.setMusic(0):this.setMusic(e+1))}},{key:"render",value:function(){var t=this;return Object(b.jsxs)(m.a,{fullScreen:!0,open:this.props.open,onClose:this.props.onClose,scroll:"paper",disableBackdropClick:"false",disableEscapeKeyDown:"false",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(p.a,{position:"fixed",color:"default",children:Object(b.jsxs)(L.a,{children:[Object(b.jsx)(O.a,{edge:"start",color:"inherit",onClick:this.props.onClose,children:Object(b.jsx)(N.a,{})}),Object(b.jsx)(u.a,{variant:"h6",children:this.props.playListName})]})}),Object(b.jsx)(L.a,{})]}),Object(b.jsx)("div",{style:{justifyContent:"center",alignItems:"center",textAlign:"center"},children:Object(b.jsxs)(v.a,{dividers:"true",children:[Object(b.jsx)(g.a,{videoId:this.state.videoID,opts:this.state.opts,onReady:function(e){t._onReady(e,t.state.playList)},onError:this._onError,onApiChange:this._onApiChange,onStateChange:function(e){t._onStateChange(e,t.state.currentIndex)}}),this.props.playList.map((function(e,a){return Object(b.jsx)(f,{listName:e.musicName,onEventSelectList:function(){t.playStop(),t.setMusic(a)}})}))]})})]})}}]),a}(s.Component),C=function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={readYoutubeFlag:!1,playFlag:!1,playListName:null,playList:[{musicName:null,videoID:null,startTime:null,endTime:null}]},s}return Object(o.a)(a,[{key:"handleClickPlayFlag",value:function(){this.setState({readYoutubeFlag:!this.state.readYoutubeFlag,playFlag:!this.state.playFlag})}},{key:"arrayShuffle",value:function(t){for(var e=t.length-1;0<e;e--){var a=Math.floor(Math.random()*(e+1)),s=t[e];t[e]=t[a],t[a]=s}return t}},{key:"selectPlayList",value:function(t){this.setState({playListName:this.props.playLists[t].playListName,playList:this.arrayShuffle(this.props.playLists[t].playList)})}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[this.props.playLists.map((function(e,a){return Object(b.jsx)(f,{listName:e.playListName,onEventSelectList:function(){0!==e.playList.length&&(t.handleClickPlayFlag(),t.selectPlayList(a))}})})),Object(b.jsx)(k,{readYoutubeFlag:this.state.readYoutubeFlag,playListName:this.state.playListName,playList:this.state.playList,open:this.state.playFlag,onClose:function(){t.handleClickPlayFlag()}})]})}}]),a}(s.Component),S=a(86),P=a(51),I=a.n(P),F=Object(h.a)((function(t){return{root:{display:"flex",justifyContent:"center"},input:{display:"none"},paper:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgb(245, 245, 245)",width:"120px",height:"20px",padding:"7px"},typography:{},icon:{}}}))((function(t){var e=t.classes;return Object(b.jsxs)("div",{className:e.root,children:[Object(b.jsx)("input",{className:e.input,accept:"playlist",id:"contained-button-file",multiple:!0,type:"file",onChange:function(e){t.onClickAddPlayList(e)}}),Object(b.jsx)("label",{htmlFor:"contained-button-file",children:Object(b.jsxs)(S.a,{className:e.paper,children:[Object(b.jsx)(I.a,{className:e.icon}),Object(b.jsx)(u.a,{className:e.typography,children:"Add PlayList"})]})})]})})),E=function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(t){var s;return Object(l.a)(this,a),(s=e.call(this,t)).state={playLists:JSON.parse(localStorage.getItem("playLists"))||[{playListName:"No playlist",playList:[]}]},s}return Object(o.a)(a,[{key:"addPlayList",value:function(t){var e=this,a=t.target.files,s=!0;this.state.playLists.forEach((function(t){t.playListName===a[0].name.split(".")[0]&&(s=!1)}));var i=[];0!==this.state.playLists[0].playList.length&&s&&(i=this.state.playLists);var n=[];if(a.length>0){var l=new FileReader;l.readAsText(a[0]),l.onload=function(t){var s=t.target.result.split("\n");"dXpjSjhRWFpuZE1CNDdaU2E5V1hVR1l3NXRnaWljN1RzanNnektXVw0="===btoa(s[0])?(s.shift(),s.forEach((function(t){""!==t&&n.push({musicName:t.split(",")[0],videoID:t.split(",")[1],startTime:t.split(",")[2],endTime:t.split(",")[3]})})),i.push({playListName:a[0].name.split(".")[0],playList:n}),e.setState({playLists:i}),localStorage.clear(),localStorage.setItem("playLists",JSON.stringify(i))):console.debug("Password Incorrect")}}}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(p.a,{position:"static",color:"default",children:Object(b.jsx)(u.a,{variant:"h6",children:"Hololive Music PlayList"})})}),Object(b.jsxs)("main",{className:"App-main",children:[Object(b.jsx)(C,{playLists:this.state.playLists}),Object(b.jsx)(F,{onClickAddPlayList:function(e){t.addPlayList(e)}})]})]})}}]),a}(s.Component);n.a.render(Object(b.jsx)(E,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.f8ade452.chunk.js.map