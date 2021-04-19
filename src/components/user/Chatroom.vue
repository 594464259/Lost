<template>
  <div class="test">

  </div>
</template>

<script>
    export default {
      name : 'test',
      data() {
        return {
          websock: null,
        }
      },
      created() {
        this.initWebSocket();
      },
      destroyed() {
        this.websock.close() //离开路由之后断开websocket连接
      },
      methods: {
        initWebSocket(){ //初始化weosocket
          const wsuri = "ws://127.0.0.1:8080";
          this.websock = new WebSocket(wsuri);
          this.websock.onmessage = this.websocketonmessage;
          this.websock.onopen = this.websocketonopen;
          this.websock.onerror = this.websocketonerror;
          this.websock.onclose = this.websocketclose;
        },
        websocketonopen(){ //连接建立之后执行send方法发送数据
          let actions = {"test":"12345"};
          this.websocketsend(JSON.stringify(actions));
        },
        websocketonerror(){//连接建立失败重连
          this.initWebSocket();
        },
        websocketonmessage(e){ //数据接收
          const redata = JSON.parse(e.data);
        },
        websocketsend(Data){//数据发送
          this.websock.send(Data);
        },
        websocketclose(e){  //关闭
          console.log('断开连接',e);
        },
      },
    //
    //   init: function() {
    //     if (typeof(WebSocket) === "undefined") {
    //       alert("您的浏览器不支持socket")
    //     } else {
    //       // 实例化socket
    //       this.socket = new WebSocket(this.path)
    //       // 监听socket连接
    //       this.socket.onopen = this.open
    //       // 监听socket错误信息
    //       this.socket.onerror = this.error
    //       // 监听socket消息
    //       this.socket.onmessage = this.getMessage
    //     }
    //   },
    //   open: function() {
    //     console.log("socket连接成功")
    //   },
    //   error: function() {
    //     console.log("连接错误")
    //   },
    //   getMessage: function(msg) {
    //     console.log(msg.data)
    //   },
    //   send: function() {
    //     this.socket.send(params)
    //   },
    //   close: function() {
    //     console.log("socket已经关闭")
    //   }
    //
    //
    // },
    // mounted: function () {
    //   let url=location.search;
    //   let info=url.split(/[=&]/)
    //   this.user_id=info[1]
    //   this.token=info[3]
    //   console.log(this.user_id)
    //
    //   this.path=this.path+this.user_id+'/'+this.token;
    //   this.init();
    //
    //
    //
    //   window.addEventListener('scroll', this.handleScroll, true);
    //   this.getName();
    //   this.loadMyQ();
    //   this.loadMyA();
    //   this.loadMyFan();
    //   this.loadMyFol();
    //   this.loadMyColl();
    //   this.loadMyFou();
    // },
    // destroyed() {
    //   // 销毁监听
    //   this.socket.onclose = this.close
    // }
    //
    // }
    }
</script>

<style lang="scss" scoped>
  .chat-box {
    margin: 0 auto;
    background: #fafafa;
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 700px;
    header {
      position: fixed;
      width: 100%;
      height: 3rem;
      background: #409eff;
      max-width: 700px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: white;
      font-size: 1rem;
    }
    .msg-box {
      position: absolute;
      height: calc(100% - 6.5rem);
      width: 100%;
      margin-top: 3rem;
      overflow-y: scroll;
      .msg {
        width: 95%;
        min-height: 2.5rem;
        margin: 1rem 0.5rem;
        position: relative;
        display: flex;
        justify-content: flex-start !important;
        .user-head {
          min-width: 2.5rem;
          width: 20%;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: #f1f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          .head {
            width: 1.2rem;
            height: 1.2rem;
          }
          // position: absolute;
        }
        .user-msg {
          width: 80%;
          // position: absolute;
          word-break: break-all;
          position: relative;
          z-index: 5;
          span {
            display: inline-block;
            padding: 0.5rem 0.7rem;
            border-radius: 0.5rem;
            margin-top: 0.2rem;
            font-size: 0.88rem;
          }
          .left {
            background: white;
            animation: toLeft 0.5s ease both 1;
          }
          .right {
            background: #53a8ff;
            color: white;
            animation: toright 0.5s ease both 1;
          }
          @keyframes toLeft {
            0% {
              opacity: 0;
              transform: translateX(-10px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }
          @keyframes toright {
            0% {
              opacity: 0;
              transform: translateX(10px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }
        }
      }
    }
    .input-box {
      padding: 0 0.5rem;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3.5rem;
      background: #fafafa;
      box-shadow: 0 0 5px #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        height: 2.3rem;
        display: inline-block;
        width: 100%;
        padding: 0.5rem;
        border: none;
        border-radius: 0.2rem;
        font-size: 0.88rem;
      }
      .btn {
        height: 2.3rem;
        min-width: 4rem;
        background: #e0e0e0;
        padding: 0.5rem;
        font-size: 0.88rem;
        color: white;
        text-align: center;
        border-radius: 0.2rem;
        margin-left: 0.5rem;
        transition: 0.5s;
      }
      .btn-active {
        background: #409eff;
      }
    }
  }
</style>
