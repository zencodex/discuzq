(window.webpackJsonp=window.webpackJsonp||[]).push([[38,8],{519:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.title+" - "+this.forums.set_site.site_name:this.title}}}},520:function(t,e,r){},521:function(t,e,r){},522:function(t,e,r){},523:function(t,e,r){"use strict";r.r(e);var n={name:"Cover",mounted:function(){var t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.background="rgba(0, 0, 0, .4)",t.style.zIndex="10",t.id="cover",document.querySelector("body").appendChild(t)},destroyed:function(){var t=document.querySelector("#cover");t.parentNode.removeChild(t)},render:function(){return""}},o=r(13),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.default=component.exports},524:function(t,e,r){},525:function(t,e,r){},526:function(t,e,r){},527:function(t,e,r){},528:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}));r(170),r(51);var n=function(time){var t=(window.currentTime||new Date)-new Date(time);return parseInt(parseInt(t/1e3,0)/60,0)<60?"".concat(Math.ceil(t/1e3/60)>0?Math.ceil(t/1e3/60):1,"分钟前"):parseInt(parseInt(parseInt(t/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(t/1e3/60/60)>0?Math.ceil(t/1e3/60/60):1,"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},o=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)},c=function(t){var e=Math.round(new Date(t)/1e3),r=Math.round(new Date/1e3)-e,n=parseInt(r/86400,0);return n>365?parseInt(r/86400/365,0)+"年":n+"天"}},529:function(t,e,r){},532:function(t,e){e.extensionList=["7Z","AI","APK","CAD","CDR","DOC","DOCX","EPS","EXE","IPA","MP3","MP4","PDF","PPT","PSD","RAR","TXT","XLS","XLSX","ZIP","JPG","WAV"]},533:function(t,e,r){"use strict";r.r(e);var n=r(587),o={name:"VideoPop",props:{url:{type:String,default:""},coverUrl:{type:String,default:""}},data:function(){return{options:{autoplay:!0,controls:!0},player:null}},mounted:function(){document.addEventListener("click",this.removeVideoPop),this.initVideoJs()},methods:{initVideoJs:function(){var t=this;this.player=Object(n.a)("videoPlayer",this.options,(function(){var e=this;n.a.log("Your player is ready!"),this.play(),this.on("error",(function(){e.errorDisplay.close(),e.createModal(t.$t("core.videoError"))}))}))},removeVideoPop:function(t){var e=!0;(t.path||t.composedPath&&t.composedPath()).forEach((function(t){"video-pop"===t.id&&(e=!1),t.classList&&t.classList.contains("svg-icon-video-play")&&(e=!1)})),e&&(this.$emit("remove"),this.player.dispose(),document.removeEventListener("click",this.removeVideoPop))}}},c=(r(535),r(13)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-pop",attrs:{id:"video-pop"}},[e("Cover"),this._v(" "),e("video",{staticClass:"video-js",attrs:{id:"videoPlayer",controls:"",width:"800px",height:"600px",preload:"auto","data-setup":"{}"}},[e("source",{attrs:{src:this.url}}),this._v(" "),e("source",{attrs:{src:this.url,type:"video/webm"}})])],1)}),[],!1,null,"5d02c715",null);e.default=component.exports;installComponents(component,{Cover:r(523).default})},534:function(t,e,r){"use strict";r(39);var n=r(22),o=(r(37),r(29),r(19),r(11),r(36),r(502),r(170),r(51),r(503)),c=(r(505),r(172),r(504));function l(t,e){l=function(t,e){return new m(t,void 0,e)};var r=Object(c.a)(RegExp),d=RegExp.prototype,h=new WeakMap;function m(t,e,n){var o=r.call(this,t,e);return h.set(o,n||h.get(t)),o}function v(t,e){var g=h.get(e);return Object.keys(g).reduce((function(e,r){return e[r]=t[g[r]],e}),Object.create(null))}return Object(o.a)(m,r),m.prototype.exec=function(t){var e=d.exec.call(this,t);return e&&(e.groups=v(e,this)),e},m.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=h.get(this);return d[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"==typeof e){var o=this;return d[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==Object(n.a)(t[t.length-1])&&t.push(v(t,o)),e.apply(this,t)}))}return d[Symbol.replace].call(this,t,e)},l.apply(this,arguments)}var d={topic:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/topic/".concat(t);return'<a href="'.concat(e,'" class="content-topic a-blue">').concat(text,"</a> ")}))}))}},usermention:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/user/".concat(t);return'<a href="'.concat(e,'" class="content-member a-blue">').concat(text,"</a> ")}))}))}},parseHtml1:function(text){if(text){var t=/&lt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return"<"}))}))}},parseHtml2:function(text){if(text){var t=/&gt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return">"}))}))}}};e.a={parse:function(text){for(var t in d)text=d[t](text);return text}}},535:function(t,e,r){"use strict";var n=r(520);r.n(n).a},540:function(t,e,r){"use strict";var n=r(521);r.n(n).a},541:function(t,e,r){"use strict";var n=r(522);r.n(n).a},559:function(t,e,r){"use strict";r.r(e);var n={name:"ProductItem",props:{item:{type:Object,default:function(){}}},data:function(){return{}}},o=(r(540),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.item?r("a",{staticClass:"product-container",attrs:{href:t.item.detail_content,target:"_blank",el:"nofollow"}},[r("el-image",{staticClass:"image",attrs:{src:t.item.image_path,alt:t.item.title,fit:"cover",lazy:""}},[r("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[r("i",{staticClass:"el-icon-loading"})])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"info-header"},[r("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.price>0?r("div",{staticClass:"price"},[t._v(t._s(t.$t("post.yuanItem")+t.item.price+t.$t("post.yuan")))]):t._e()]),t._v(" "),r("div",{staticClass:"btn"},[r("svg-icon",{staticClass:"icon",attrs:{type:"product-icon"}}),t._v(t._s(t.$t("post.buyProudct")))],1)])],1):t._e()}),[],!1,null,"4589e254",null);e.default=component.exports;installComponents(component,{SvgIcon:r(67).default})},560:function(t,e,r){"use strict";r.r(e);r(30),r(11);var n={name:"AudioPlayer",props:{file:{type:Object,default:function(){}},currentAudio:{type:Object,default:function(){}}},data:function(){return{onDragging:!1,delta:0}},computed:{currentFile:function(){return this.currentAudio.id===this.file._jv.id},playing:function(){return this.currentAudio.currentTime&&this.currentAudio.duration}},methods:{formatDuration:function(t){var e=Math.floor(t/60),r=(t-60*e).toString().substr(0,2);return"."===r[1]&&(r="0"+r[0]),e+":"+r},formatCurrentTime:function(t){var e=parseInt(t/60)%60,r=(t%60).toFixed();return(e<10?"0"+e:e)+":"+(r<10?"0"+r:r)},convertToPercentage:function(){return this.currentAudio.currentTime/this.currentAudio.duration*100},onmousedown:function(){window.document.addEventListener("mousemove",this.dragging),window.document.addEventListener("mouseup",this.onMouseUp)},dragging:function(t){this.delta=t.clientX-this.$refs.progress.getBoundingClientRect().x,this.delta<0&&(this.delta=0),this.delta>290&&(this.delta=290);var time=this.delta/290*this.currentAudio.duration;this.$emit("seeking",time)},onMouseUp:function(){var time=this.delta/290*this.currentAudio.duration;this.$emit("seek",time),window.document.removeEventListener("mousemove",this.dragging),window.document.removeEventListener("mouseup",this.onMouseUp)}}},o=(r(541),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"audio"},[t.currentFile&&t.currentAudio.isLoading?r("div",{staticClass:"control"},[r("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"loading",rotate:""}})],1):t.currentFile&&t.currentAudio.isPlay?r("div",{staticClass:"control",on:{click:function(e){return t.$emit("pause")}}},[r("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"audio-pause"}})],1):r("div",{staticClass:"control",on:{click:function(e){return t.$emit("play",t.file)}}},[r("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"audio-play"}})],1),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"title"},[r("span",{staticClass:"title-audio"},[t._v(t._s(t.file.fileName||t.file.file_name))]),t._v(" "),t.currentFile&&t.playing?r("span",{staticClass:"duration-audio"},[t._v("\n        "+t._s(t.formatCurrentTime(t.currentAudio.currentTime))+" / "+t._s(t.formatDuration(t.currentAudio.duration))+"\n      ")]):r("span",{staticClass:"duration-audio"},[t._v("--:--")])]),t._v(" "),t.currentFile&&t.playing?r("div",{ref:"progress",staticClass:"progress",attrs:{id:"progress"}},[r("div",{staticClass:"progress-item",style:{width:t.convertToPercentage()+"%"}}),t._v(" "),r("div",{staticClass:"control-ball",style:{left:t.convertToPercentage()+"%"},attrs:{id:"control-ball"},on:{mousedown:t.onmousedown}})]):t._e()])])}),[],!1,null,"5944d781",null);e.default=component.exports;installComponents(component,{SvgIcon:r(67).default})},562:function(t,e,r){"use strict";r.r(e);r(11);var n=r(534),time=r(528),o=r(532),c=r(518),l={name:"PostItem",filters:{formatDate:function(t){return Object(time.b)(t)}},mixins:[r.n(c).a],props:{item:{type:Object,default:function(){}},showShare:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},infoimage:{type:Boolean,default:!1},canDetail:{type:Boolean,default:!1}},data:function(){return{loading:!1,showVideoPop:!1,isLiked:!1,currentAudio:{id:"",url:"",currentTime:"",duration:"",audio:"",seeking:!1,isPlay:!1,isLoading:!1}}},computed:{unpaid:function(){return!(this.item.paid||0===parseFloat(this.item.price))}},watch:{item:{handler:function(t){this.isLiked=t.firstPost&&t.firstPost.isLiked,this.likeCount=t.firstPost&&t.firstPost.likeCount},deep:!0,immediate:!0}},mounted:function(){this.currentAudio.audio=document.getElementById("audio-player".concat(this.item&&this.item._jv&&this.item._jv.id))},methods:{handleLike:function(){var t=this;if(!this.loading){if(this.item.firstPost.canLike){this.loading=!0;var e=!this.isLiked,r={_jv:{type:"posts",id:this.item.firstPost&&this.item.firstPost._jv&&this.item.firstPost._jv.id},isLiked:e};return this.$store.dispatch("jv/patch",r).then((function(){t.$message.success(e?t.$t("discuzq.msgBox.likeSuccess"):t.$t("discuzq.msgBox.cancelLikeSuccess")),e?t.likeCount+=1:t.likeCount-=1,t.isLiked=e,t.$emit("change")}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))}this.$message.error(this.$t("topic.noThreadLikePermission"))}},toDetail:function(){this.canViewPostsFn()&&this.routerLink()},onClickImage:function(){this.unpaid&&this.canViewPostsFn()&&this.routerLink()},openVideo:function(){this.canViewPostsFn()&&(this.unpaid?this.routerLink():this.showVideoPop=!0)},routerLink:function(){window.open("/thread/".concat(this.item._jv&&this.item._jv.id),"_blank")},onClickContent:function(t){var e=t||window.event;"a"!==(e.target||e.srcElement).nodeName.toLocaleLowerCase()&&this.toDetail()},canViewPostsFn:function(){return this.item.canViewPosts?!this.canDetail||(this.$message.warning(this.$t("topic.joinAfterView")),!1):(this.$message.warning(this.$t("home.noPostingTopic")),!1)},formatTopicHTML:function(html){return n.a.parse(html)},extensionValidate:function(t){return o.extensionList.indexOf(t.toUpperCase())>0?t.toUpperCase():"UNKNOWN"},play:function(t){var e=this;this.unpaid?this.routerLink():this.canViewPostsFn()&&(this.currentAudio.id!==t._jv.id&&(this.resetAudio(this.currentAudio.audio),this.currentAudio.url=t.url||t.media_url,this.currentAudio.id=t._jv.id,this.currentAudio.audio.src=this.currentAudio.url,this.currentAudio.isLoading=!0,this.currentAudio.audio.load()),window.setTimeout((function(){e.currentAudio.audio.play(),e.currentAudio.isPlay=!0,e.currentAudio.audio.addEventListener("timeupdate",e.onProgressing),e.currentAudio.audio.addEventListener("ended",e.onEnded),e.$emit("audioPlay",e.currentAudio.id)}),0))},onProgressing:function(){this.currentAudio.seeking||(this.currentAudio.isLoading=!1,this.currentAudio.duration=this.currentAudio.audio.duration,this.currentAudio.currentTime=this.currentAudio.audio.currentTime)},onEnded:function(){this.resetAudio(this.currentAudio.audio)},resetAudio:function(audio){audio.removeEventListener("timeupdate",this.onProgressing),audio.removeEventListener("ended",this.onEnded),this.currentAudio.isPlay=!1,this.currentAudio.duration="",this.currentAudio.currentTime=""},pause:function(){this.currentAudio.isLoading=!1,this.currentAudio.isPlay=!1,this.currentAudio.audio.pause()},seek:function(time){this.currentAudio.seeking=!1,this.currentAudio.currentTime=time,this.currentAudio.audio.currentTime=time},seeking:function(time){this.currentAudio.seeking=!0,this.currentAudio.currentTime=time}}},d=(r(572),r(13)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-container"},[t.item.isEssence?r("div",{staticClass:"essence"},[r("svg-icon",{attrs:{type:"index-essence"}})],1):t._e(),t._v(" "),5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?r("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.question.beUser.id,username:t.item.question.beUser.username,avatarUrl:t.item.question.beUser.avatarUrl,isReal:t.item.question.beUser.isReal},"prevent-jump":t.canDetail}}):t.item.user?r("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.user.id,username:t.item.user.username,avatarUrl:t.item.user.avatarUrl,isReal:t.item.user.isReal},"prevent-jump":t.canDetail}}):t._e(),t._v(" "),r("div",{staticClass:"main-cont"},[r("div",{staticClass:"top-flex"},[5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?r("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.question.beUser.id:""}},[r("span",{staticClass:"user-name"},[t._v(t._s(t.item.question.beUser.username))]),t._v(" "),t.item.question.beUser&&t.item.question.beUser.groups&&t.item.question.beUser.groups.length>0&&t.item.question.beUser.groups[0].isDisplay?r("span",{staticClass:"admin"},[t._v("\n          ("+t._s(t.item.question.beUser.groups[0].name)+")\n        ")]):t._e()]):t.item.user?r("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[r("span",{staticClass:"user-name"},[t._v(t._s(t.item.user.username))]),t._v(" "),t.item.user&&t.item.user.groups&&t.item.user.groups.length>0&&t.item.user.groups[0].isDisplay?r("span",{staticClass:"admin"},[t._v("\n          ("+t._s(t.item.user.groups[0].name)+")\n        ")]):t._e()]):t._e(),t._v(" "),r("div",{staticClass:"time"},[5===t.item.type&&t.item.question&&1===t.item.question.is_answer?r("div",{staticClass:"answered"},[t._v(t._s(t.$t("topic.answered")))]):t._e(),t._v(" "),t.item.createdAt?[t._v(t._s(t.$t("topic.publishAt"))+" "+t._s(t._f("formatDate")(t.item.createdAt)))]:t._e()],2)],1),t._v(" "),5===t.item.type?r("div",[t.item.question&&0===t.item.question.is_answer?[t._v("\n        "+t._s(t.$t("topic.be"))+"\n        "),t.item.question&&t.item.question.beUser?r("nuxt-link",{staticClass:"blue",attrs:{to:t.item.question.beUser.id>0?"/user/"+t.item.question.beUser.id:""}},[t._v("@"+t._s(t.item.question.beUser.username))]):t._e(),t._v("\n        "+t._s(t.$t("topic.question"))+"\n      ")]:t._e(),t._v(" "),t.item.question&&1===t.item.question.is_answer?[t._v("\n        "+t._s(t.$t("topic.answer"))+"\n        "),t.item.user?r("nuxt-link",{staticClass:"blue",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[t._v("@"+t._s(t.item.user.username))]):t._e(),t._v("\n        "+t._s(t.$t("topic.of"))+t._s(t.$t("topic.question"))+"\n      ")]:t._e()],2):t._e(),t._v(" "),t.item.firstPost?[r("div",{staticClass:"first-post",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[r("div",{on:{click:t.onClickContent}},[1===t.item.type?r("div",{staticClass:"title"},[t._v(t._s(t.$t("home.released"))+"\n            "),r("svg-icon",{directives:[{name:"show",rawName:"v-show",value:parseFloat(t.item.price)>0||parseFloat(t.item.attachmentPrice)>0,expression:"parseFloat(item.price) > 0 || parseFloat(item.attachmentPrice) > 0"}],staticClass:"blue",staticStyle:{"font-size":"17px",display:"inline-block","margin-right":"5px"},attrs:{type:"pay-yuan"}}),t._v(" "),r("span",{staticClass:"blue "},[t._v(t._s(t.item.title))])],1):r("div",{staticClass:"content"},[5===t.item.type?r("svg-icon",{staticClass:"icon-pay-yuan blue",attrs:{type:"question-icon"}}):6===t.item.type?r("svg-icon",{staticClass:"icon-pay-yuan blue",attrs:{type:"product-icon"}}):parseFloat(t.item.price)>0||parseFloat(t.item.attachmentPrice)>0?r("svg-icon",{staticClass:"icon-pay-yuan grey",attrs:{type:"pay-yuan"}}):t._e(),t._v(" "),r("div",{class:{"content-block":5===t.item.type||6===t.item.type||parseFloat(t.item.price)>0,blue:5===t.item.type},domProps:{innerHTML:t._s(t.$xss(t.formatTopicHTML(t.item.firstPost.summary)))}})],1)]),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>0?r("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{url:"data-source"},expression:"{ url: 'data-source' }"}],staticClass:"images",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},t._l(t.item.firstPost.images.slice(0,3),(function(image,e){return r("el-image",{key:e,class:{image:!0,infoimage:t.infoimage},attrs:{src:image.thumbUrl,"data-source":t.unpaid?"":image.url,alt:image.filename,fit:"cover",lazy:t.lazy},on:{click:function(e){return e.target!==e.currentTarget?null:t.onClickImage(e)}}},[r("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[r("i",{staticClass:"el-icon-loading"})])])})),1):t._e(),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>3?r("div",{staticClass:"image-count",on:{click:t.toDetail}},[t._v("\n          "+t._s(t.$t("home.total"))+" "+t._s(t.item.firstPost.images.length)+"\n          "+t._s(t.$t("home.seeAllImage"))+"\n        ")]):t._e(),t._v(" "),2===t.item.type&&t.item.threadVideo?r("div",{staticClass:"video-main",on:{click:function(e){return e.stopPropagation(),t.openVideo(e)}}},[t.item.threadVideo.cover_url?r("el-image",{staticClass:"video-img-cover",attrs:{src:t.item.threadVideo.cover_url,alt:t.item.threadVideo.file_name,fit:"cover",lazy:t.lazy}}):r("div",{staticClass:"no-cover"},[t._v(t._s(t.$t("home.noPoster")))]),t._v(" "),r("svg-icon",{staticClass:"video-play",attrs:{type:"video-play"}})],1):t._e(),t._v(" "),t.showVideoPop?r("video-pop",{attrs:{"cover-url":t.item.threadVideo.cover_url,url:t.item.threadVideo.media_url},on:{remove:function(e){t.showVideoPop=!1}}}):t._e(),t._v(" "),t.item.firstPost.attachments&&t.item.firstPost.attachments.length>0?r("div",{staticClass:"attachment",on:{click:t.toDetail}},[r("svg-icon",{attrs:{type:t.extensionValidate(t.item.firstPost.attachments[0].extension)}}),t._v(" "),r("div",{staticClass:"name text-hidden"},[t._v("\n            "+t._s(t.item.firstPost.attachments[0].fileName)+"\n          ")]),t._v(" "),t.item.firstPost.attachments.length>1?r("div",{staticClass:"total"},[t._v("\n            "+t._s(t.$t("home.etc")+t.item.firstPost.attachments.length+t.$t("home.attachmentTotal"))+"\n          ")]):t._e()],1):t._e()],1),t._v(" "),6===t.item.type?r("product-item",{attrs:{item:t.item&&t.item.firstPost&&t.item.firstPost.postGoods}}):t._e(),t._v(" "),4===t.item.type?r("div",{on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[r("audio-player",{attrs:{file:t.item&&t.item.threadAudio,"current-audio":t.currentAudio},on:{play:t.play,pause:t.pause,seek:t.seek,seeking:t.seeking}}),t._v(" "),r("audio",{staticClass:"audio-player",staticStyle:{display:"none"},attrs:{id:"audio-player"+(t.item._jv&&t.item._jv.id),src:t.currentAudio.url}})],1):t._e(),t._v(" "),t.item.location?r("nuxt-link",{staticClass:"location",attrs:{to:"/topic/position?longitude="+t.item.longitude+"&latitude="+t.item.latitude}},[r("span",{staticClass:"flex"},[r("svg-icon",{staticClass:"icon",attrs:{type:"location"}}),t._v("\n          "+t._s(t.item.location)+"\n        ")],1)]):t._e(),t._v(" "),t.canDetail?t._e():r("div",{staticClass:"bottom-handle"},[r("div",{staticClass:"left"},[r("div",{directives:[{name:"permission",rawName:"v-permission:handleLike",value:"",expression:"''",arg:"handleLike"}],staticClass:"btn like",class:{liked:t.isLiked}},[r("svg-icon",{directives:[{name:"permission",rawName:"v-permission:handleLike",value:"",expression:"''",arg:"handleLike"}],staticClass:"icon",attrs:{type:"like"}}),t._v("\n            "+t._s(t.isLiked?t.$t("topic.liked"):t.$t("topic.like"))+"\n            "+t._s(t.likeCount>0?t.likeCount:"")+"\n          ")],1),t._v(" "),r("div",{directives:[{name:"permission",rawName:"v-permission:toDetail",value:"",expression:"''",arg:"toDetail"}],staticClass:"btn comment"},[r("svg-icon",{staticClass:"icon",attrs:{type:"post-comment"}}),t._v("\n            "+t._s(t.$t("topic.comment"))+"\n            "+t._s(t.item.postCount-1>0?t.item.postCount-1:"")+"\n          ")],1),t._v(" "),t.item._jv&&t.item._jv.id&&t.showShare?r("share-popover",{attrs:{"threads-id":t.item._jv.id}},[r("div",{staticClass:"btn share"},[r("svg-icon",{staticClass:"icon",attrs:{type:"link"}}),t._v("\n              "+t._s(t.$t("topic.share"))+"\n            ")],1)]):t._e()],1),t._v(" "),t._t("bottom-right")],2)]:t._e()],2)],1)}),[],!1,null,"2597336c",null);e.default=component.exports;installComponents(component,{SvgIcon:r(67).default,Avatar:r(252).default,VideoPop:r(533).default,ProductItem:r(559).default,AudioPlayer:r(560).default,SharePopover:r(563).default})},563:function(t,e,r){"use strict";r.r(e);r(251);var n=r(561),o={name:"SharePopover",props:{threadsId:{type:[String,Number],default:""},type:{type:String,default:""}},data:function(){return{qrcode:null,currentType:""}},methods:{copyLink:function(){var t=document.createElement("input");"topic"===this.type?t.value=window.location.href:t.value="".concat(window.location.protocol,"//").concat(window.location.host,"/thread/").concat(this.threadsId),t.id="copyInput",document.body.appendChild(t),t.select(),document.execCommand("Copy"),this.$message.success("链接复制成功"),setTimeout((function(){t.remove()}),100)},onShowPopover:function(){this.currentType=this.type;var path=window.location.href;path="topic"===this.type?window.location.href:"".concat(window.location.protocol,"//").concat(window.location.host,"/thread/").concat(this.threadsId),this.createQrcode(path)},createQrcode:function(link){var t=this;this.qrcode=null,this.$nextTick((function(){t.qrcode=new n(t.$refs.qrcode,{width:88,height:88,text:link})}))},closeCode:function(){this.$refs.qrcode.innerHTML=""}}},c=(r(566),r(567),r(13)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"share-container"},[r("el-popover",{attrs:{placement:"bottom",width:"120","min-width":"120",trigger:"click","popper-class":"custom-popover-width"},on:{show:t.onShowPopover,hide:t.closeCode}},[r("div",{staticClass:"share-cont"},[r("div",{staticClass:"copy",on:{click:t.copyLink}},[r("svg-icon",{staticClass:"copy-icon",attrs:{type:"copy-link"}}),t._v(" "),r("span",[t._v(t._s(t.$t("core.copyLink")))])],1),t._v(" "),r("div",{staticClass:"qrcode"},[r("div",{staticClass:"qrcode-text"},[r("svg-icon",{staticClass:"wechat-logo",attrs:{type:"wechat-logo"}}),t._v(" "),r("span",[t._v(t._s(t.$t("core.wxShare")))])],1),t._v(" "),r("div",{ref:"qrcode",staticClass:"qrcode-cont"})])]),t._v(" "),r("template",{slot:"reference"},[t._t("default")],2)],2)],1)}),[],!1,null,"034fa0b9",null);e.default=component.exports;installComponents(component,{SvgIcon:r(67).default})},564:function(t,e,r){"use strict";r.r(e);var n=r(561),o={name:"Advertising",data:function(){return{qrcode:null,site_name:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{forums:{handler:function(t){t&&t.set_site&&(this.site_name=t.set_site.site_name?t.set_site.site_name:"Discuz! Q")},deep:!0}},mounted:function(){this.site_name=this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.forums.set_site.site_name:"Discuz! Q",this.createQrcode(window.location.href)},destroyed:function(){this.qrcode=null},methods:{createQrcode:function(link){var t=this;this.qrcode=null,this.$nextTick((function(){t.qrcode=new n(t.$refs.qrcode,{width:70,height:70,text:link})}))}}},c=(r(568),r(13)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"adv-container"},[e("div",{ref:"qrcode",staticClass:"qrcode"}),this._v(" "),e("div",{staticClass:"adv-info"},[e("div",{staticClass:"adv-title"},[this._v(" 扫一扫，访问移动端")]),this._v("\n    "+this._s(this.site_name)+"\n  ")])])}),[],!1,null,"038d2a1a",null);e.default=component.exports},565:function(t,e,r){"use strict";r.r(e);var n={name:"Copyright",data:function(){return{year:"2019",site_record_code:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var t=window.currentTime||new Date;this.year=t.getFullYear()}},o=(r(569),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"copyright"},[r("div",{staticClass:"info"},[r("span",[t._v("Powered By")]),t._v(" "),r("a",{staticClass:"site",attrs:{href:"https://discuz.com",target:"_blank"}},[t._v("Discuz! Q")]),t._v(" "),r("span",{staticClass:"block"},[t._v("© "+t._s(t.year))])]),t._v(" "),t.forums&&t.forums.set_site&&(t.forums.set_site.site_record||t.forums.set_site.site_record_code)?r("div",{staticClass:"id"},[r("div",{staticClass:"site-record-code"},[r("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v(t._s(t.forums.set_site?t.forums.set_site.site_record:""))])]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code?r("div",{staticClass:"site-record-code"},[r("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+(t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code.replace(/[^0-9]/gi,"")),target:"_blank"}},[t._v(t._s(t.forums.set_site.site_record_code))])]):t._e()]):t._e()])}),[],!1,null,"68b79e04",null);e.default=component.exports},566:function(t,e,r){"use strict";var n=r(524);r.n(n).a},567:function(t,e,r){"use strict";var n=r(525);r.n(n).a},568:function(t,e,r){"use strict";var n=r(526);r.n(n).a},569:function(t,e,r){"use strict";var n=r(527);r.n(n).a},572:function(t,e,r){"use strict";var n=r(529);r.n(n).a},575:function(t,e,r){},576:function(t,e,r){},588:function(t,e){},632:function(t,e,r){"use strict";var n=r(575);r.n(n).a},633:function(t,e,r){"use strict";var n=r(576);r.n(n).a},645:function(t,e,r){"use strict";r.r(e);var n={name:"CreatePostPopover",data:function(){return{userId:this.$store.getters["session/get"]("userId"),visible:!1,noCreateThread:!1,can_create_thread:!0,can_create_thread_long:!0,can_create_thread_video:!0,can_create_thread_image:!0,can_create_thread_question:!0,can_create_thread_goods:!0}},computed:{userInfo:function(){return this.$store.getters["jv/get"]("/users/".concat(this.userId))},forums:function(){return this.$store.state.site.info.attributes||{}},categoryId:function(){return this.$route.query.categoryId}},methods:{showAndHidePopover:function(){if(!this.visible){var t=this.forums.other,e=this.userInfo;if(!t)return;if(!(t.can_create_thread||t.can_create_thread_long||t.can_create_thread_video||t.can_create_thread_image||t.can_create_thread_question||t.can_create_thread_goods))return void this.$message.error(this.$t("home.noPostingPermission"));if(t.publish_need_real_name&&!e.realname)return void this.$message.error(this.$t("home.needRealname"));if(t.publish_need_bind_phone&&!e.mobile)return void this.$message.error(this.$t("home.needPhone"));if(!t.can_create_thread_in_category)return void this.$message.error(this.$t("home.noPostingCategory"));if(this.categoryId)this.$store.getters["jv/get"]("categories/".concat(this.categoryId)).canCreateThread||this.$message.error(this.$t("home.noPostingCategory"));t.can_create_thread||(this.can_create_thread=!1),t.can_create_thread_long||(this.can_create_thread_long=!1),t.can_create_thread_video||(this.can_create_thread_video=!1),t.can_create_thread_image||(this.can_create_thread_image=!1),t.can_create_thread_question||(this.can_create_thread_question=!1),t.can_create_thread_goods||(this.can_create_thread_goods=!1)}this.visible=!this.visible},toRouter:function(t){this.$router.push("/thread/post?type=".concat(t).concat(this.categoryId?"&categoryId=".concat(this.categoryId):""))}}},o=(r(632),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-popover",{attrs:{placement:"bottom",width:"120","min-width":"120",trigger:"manual","popper-class":"custom-popover-width"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("ul",{staticClass:"type-container"},[t.can_create_thread?r("li",{on:{click:function(e){return e.stopPropagation(),t.toRouter(0)}}},[t._v(t._s(t.$t("home.word")))]):t._e(),t._v(" "),t.can_create_thread_long?r("li",{on:{click:function(e){return e.stopPropagation(),t.toRouter(1)}}},[t._v(t._s(t.$t("home.invitation")))]):t._e(),t._v(" "),t.can_create_thread_image?r("li",{on:{click:function(e){return e.stopPropagation(),t.toRouter(3)}}},[t._v(t._s(t.$t("home.picture")))]):t._e(),t._v(" "),t.can_create_thread_video?r("li",{on:{click:function(e){return e.stopPropagation(),t.toRouter(2)}}},[t._v(t._s(t.$t("home.video")))]):t._e(),t._v(" "),t.can_create_thread_question?r("li",{on:{click:function(e){return e.stopPropagation(),t.toRouter(5)}}},[t._v(t._s(t.$t("home.question")))]):t._e(),t._v(" "),t.can_create_thread_goods?r("li",{on:{click:function(e){return e.stopPropagation(),t.toRouter(6)}}},[t._v(t._s(t.$t("home.product")))]):t._e()]),t._v(" "),r("template",{slot:"reference"},[t._t("button",[r("el-button",{directives:[{name:"permission",rawName:"v-permission:showAndHidePopover",value:"",expression:"''",arg:"showAndHidePopover"}],staticClass:"new-post",attrs:{type:"primary"}},[r("span",{staticClass:"add-icon"},[t._v("+")]),t._v(t._s(t.$t("profile.post"))+"\n      ")])])],2)],2)}),[],!1,null,"67d4de60",null);e.default=component.exports},646:function(t,e,r){"use strict";r.r(e);var n=r(85),o=r(518),c={name:"Category",mixins:[r.n(o).a],props:{postLoading:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}}},data:function(){return{selectId:0,categoryList:[]}},watch:{list:{handler:function(t){var e=0;t.forEach((function(t){e+=t.thread_count})),this.categoryList=[{_jv:{id:0},name:this.$t("topic.whole"),threadCount:e}].concat(Object(n.a)(t))},deep:!0}},mounted:function(){if(0===this.list.length)this.getCategoryList();else{var t=0;this.list.forEach((function(e){t+=e.thread_count})),this.categoryList=[{_jv:{id:0},name:this.$t("topic.whole"),threadCount:t}].concat(Object(n.a)(this.list))}this.$route.params.id&&(this.selectId=this.$route.params.id)},methods:{getCategoryList:function(){var t=this;this.$store.dispatch("jv/get",["categories",{}]).then((function(e){var r=Object(n.a)(e)||[],o=0;r.forEach((function(t){o+=t.thread_count})),t.categoryList=[{_jv:{id:0},name:t.$t("topic.whole"),threadCount:o}].concat(Object(n.a)(r))}),(function(e){t.handleError(e)}))},onChange:function(t){this.postLoading||(this.selectId=t,this.$emit("onChange",t))}}},l=(r(633),r(13)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.categoryList.length>0?r("div",{staticClass:"category-container"},t._l(t.categoryList,(function(e,n){return r("div",{key:n,staticClass:"category-item",class:{active:t.selectId===(e._jv&&e._jv.id),loading:t.postLoading},on:{click:function(r){return t.onChange(e._jv&&e._jv.id)}}},[t.selectId===(e._jv&&e._jv.id)?r("i",{staticClass:"el-icon-arrow-left arrow-icon"}):t._e(),t._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"count"},[t._v(t._s(e.thread_count))])])])})),0):t._e()}),[],!1,null,"b206628e",null);e.default=component.exports},693:function(t,e,r){},852:function(t,e,r){"use strict";var n=r(693);r.n(n).a},959:function(t,e,r){"use strict";r.r(e);r(60),r(29),r(19),r(39);var n=r(85),o=(r(26),r(11),r(9)),c=(r(32),r(7)),l=r(518),d=r.n(l),h=r(173),head=r(519);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:"custom_layout",name:"Search",mixins:[r.n(head).a,d.a],asyncData:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function r(){var n,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.store,h.a.isSpider||e(null,{}),r.prev=2,o={},r.next=6,n.dispatch("jv/get",["categories",{}]);case 6:c=r.sent,Array.isArray(c)?o.categoryData=c:c&&c._jv&&c._jv.json&&((l=c._jv.json.data||[]).forEach((function(t,e){l[e]=v(v(v({},t),t.attributes),{},{_jv:{id:t.id}})})),o.categoryData=l),e(null,o),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),e(null,{});case 14:case"end":return r.stop()}}),r,null,[[2,11]])})))()},data:function(){return{title:this.$t("search.search"),loading:!1,categoryData:[],threadsList:[],pageNum:1,pageSize:10,categoryId:0,q:"",hasMore:!1,threadCount:0,userCount:0,userList:[],userLoading:!1,userPageSize:3,currentAudioId:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{$route:"init"},mounted:function(){this.init()},methods:{init:function(){this.$route.query.categoryId&&(this.categoryId=this.$route.query.categoryId),this.$route.query.q&&(this.q=this.$route.query.q,this.getUserList(),this.pageNum=1,this.getThreadsList())},getUserList:function(){var t=this;this.userList=[],this.userLoading=!0;var e={include:"groups",sort:"createdAt","page[limit]":this.userPageSize,"filter[status]":"normal","filter[username]":"*".concat(this.q,"*")};this.$store.dispatch("jv/get",["users",{params:e}]).then((function(e){var data=e;e&&data.forEach((function(t,i){data[i].groupName=t.groups[0]?t.groups[0].name:""})),t.userCount=data._jv.json.meta.total,t.userList=data}),(function(e){t.handleError(e)})).finally((function(){t.userLoading=!1}))},getThreadsList:function(){var t=this;this.loading=!0;var e={include:"user,user.groups,firstPost,firstPost.images,category,threadVideo,question,question.beUser,question.beUser.groups,firstPost.postGoods,threadAudio","filter[isApproved]":1,"filter[isDeleted]":"no","filter[categoryId]":this.categoryId,"filter[q]":this.q,"page[number]":this.pageNum,"page[limit]":this.pageSize};this.$store.dispatch("jv/get",["threads",{params:e}]).then((function(e){t.hasMore=e.length===t.pageSize,t.threadCount=e._jv.json.meta.threadCount,1===t.pageNum?t.threadsList=e:t.threadsList=[].concat(Object(n.a)(t.threadsList),Object(n.a)(e)),t.pageNum+=1,e._jv&&(t.hasMore=t.threadsList.length<e._jv.json.meta.threadCount)}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},loadMore:function(){this.getThreadsList()},reloadThreadsList:function(){this.pageNum=1,this.threadsList=[],this.getThreadsList()},onChangeCategory:function(t){this.categoryId=t,this.reloadThreadsList()},toUserList:function(){this.$route.query.q&&this.$router.push("/site/search-user?value=".concat(this.$route.query.q))},audioPlay:function(t){this.currentAudioId&&this.currentAudioId!==t&&this.$refs["audio".concat(this.currentAudioId)][0].pause(),this.currentAudioId=t}}},_=(r(852),r(13)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("main",{staticClass:"cont-left"},[r("div",{staticClass:"search-header"},[r("div",{staticClass:"result-count"},[t._v("\n        "+t._s(t.$t("search.find"))+" "),t.q?r("span",{staticClass:"keyword"},[t._v('"'+t._s(t.q)+'"')]):t._e(),t._v("\n        "+t._s(t.$t("search.searchresult"))+" "+t._s(t.userCount+t.threadCount)+" "+t._s(t.$t("topic.item"))+"\n      ")]),t._v(" "),r("create-post-popover")],1),t._v(" "),r("div",{staticClass:"count"},[t._v(t._s(t.$t("search.users")+t.userCount+t.$t("search.usercount"))+" ")]),t._v(" "),r("div",{staticClass:"user-list"},[r("div",{staticClass:"user-flex"},t._l(t.userList.slice(0,t.userPageSize),(function(e,n){return r("nuxt-link",{key:n,staticClass:"user-item",attrs:{to:"/user/"+e.id}},[r("avatar",{attrs:{user:e,size:45}}),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"name text-hidden"},[t._v(t._s(e.username))]),t._v(" "),r("div",{staticClass:"fans"},[t._v(t._s(t.$t("profile.followers"))+" "+t._s(e.fansCount||0))])])],1)})),1),t._v(" "),t.userLoading?r("loading"):[t.userCount>t.userPageSize?r("div",{staticClass:"user-load-more",on:{click:t.toUserList}},[t._v("\n          "+t._s(t.$t("topic.showMore"))+t._s(t.$t("search.users"))+"\n        ")]):t._e(),t._v(" "),0===t.userList.length?r("div",{staticClass:"no-more"},[r("svg-icon",{staticClass:"empty-icon",attrs:{type:"empty"}}),t._v(t._s(t.$t("search.norelatedusersfound"))+"\n        ")],1):t._e()]],2),t._v(" "),r("div",{staticClass:"count"},[t._v(t._s(t.$t("home.invitation"))+" "+t._s(t.threadCount)+" "+t._s(t.$t("topic.item")))]),t._v(" "),r("div",{staticClass:"post-list"},[t._l(t.threadsList,(function(e,n){return[4===e.type?r("post-item",{key:n,ref:"audio"+(e&&e.threadAudio&&e.threadAudio._jv&&e.threadAudio._jv.id),refInFor:!0,attrs:{item:e},on:{audioPlay:t.audioPlay}}):r("post-item",{key:n,attrs:{item:e}})]})),t._v(" "),r("list-load-more",{attrs:{loading:t.loading,"has-more":t.hasMore,"page-num":t.pageNum,length:t.threadsList.length},on:{loadMore:t.loadMore}})],2)]),t._v(" "),r("aside",{staticClass:"cont-right"},[r("div",{staticClass:"category background-color"},[r("category",{attrs:{"post-loading":t.loading,list:t.categoryData},on:{onChange:t.onChangeCategory}})],1),t._v(" "),r("advertising"),t._v(" "),r("copyright",{attrs:{forums:t.forums}})],1)])}),[],!1,null,"80ad5c1e",null);e.default=component.exports;installComponents(component,{CreatePostPopover:r(645).default,Avatar:r(252).default,Loading:r(628).default,SvgIcon:r(67).default,PostItem:r(562).default,ListLoadMore:r(558).default,Category:r(646).default,Advertising:r(564).default,Copyright:r(565).default})}}]);