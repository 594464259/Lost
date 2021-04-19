<template>
<!--  <el-affix :offset="300">-->
<!--    <el-button type="primary">距离顶部 120px</el-button>-->
<!--  </el-affix>-->

</template>

<script>
  export default {
    name: 'Test',
    data: function() {
      return{
        name: "Tsukihi", // 昵称
        websocket: null, // WebSocket对象
        aisle: "", // 对方频道号
        messageList: [], // 消息列表
        messageValue: "" // 消息内容

      }
  },
    methods:{
    //   sendMyMessage:function () {
    //    const Websocket = require('ws')
    //     const ws =new Websocket('ws://localhost:9117/socket')
    //     ws.on('open',function () {
    //       const array = new Float32Array(5);
    //       for (let i =0; i< array.length; ++i){
    //         array[i]=i/2;
    //       }
    //       ws.send(array)
    //     })
    //
    //   }
    // },
    // mounted () {
    //   this.sendMyMessage();
    // }

      init: function () {
        let token='1111';

        // this.axios({
        //   method:'POST',
        //   url:'http://localhost:8080/toLogin?user=张三&pwd=123'
        // }).then(res=>{
        //   console.log(res)
          // sessionStorage.setItem("user",'王五');

          // sessionStorage.setItem('userId','1')
          this.socket = new WebSocket("ws://localhost:1234/ws");
          // this.socket = new WebSocket("ws://localhost:9117/socket/"+this.name);

          // 监听socket连接
          this.socket.onopen = this.open
          // 监听socket错误信息
          this.socket.onerror = this.error
          // 监听socket消息
          this.socket.onmessage = this.getMessage

          // }

          // let message = {
          //   fromUser:this.username,
          //   toUser:'zs',
          //   msg:"日你先人",
          //   type: 1
          // };

          let json = {"toName": '李四', "message": 'data'};

        if (this.socket.readyState===1) {
          this.socket.send(JSON.stringify(json));
        }
          // message = JSON.stringify(message);
          //添加事件监听
          // this.socket.addEventListener('open', function () {
            // this.send(message)
            // let socketMsg = { msg: message, toUser: this.aisle };
            // if (this.aisle === "") {
            //   //群聊.
            //   socketMsg.type = 0;
            // } else {
            //   //单聊.
            //   socketMsg.type = 1;
            // }
            // this.websocket.sendMessage(JSON.stringify(socketMsg));


          //   this.websocket.send(JSON.stringify(json))
          // });
        // })

      },
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {

        console.log(msg.data)
      },
      send: function () {
        this.socket.send(params)
      },
      sendMessage: function() {
        let socketMsg = { msg: this.messageValue, toUser: this.aisle };
        if (this.aisle === "") {
          //群聊.
          socketMsg.type = 0;
        } else {
          //单聊.
          socketMsg.type = 1;
        }
        this.websocket.send(JSON.stringify(socketMsg));

      },

      showInfo: function(people, aisle) {
        this.$notify({
          title: "当前在线人数：" + people,
          message: "您的频道号：" + aisle,
          duration: 0
        });
      },

      close: function () {
        console.log("socket已经关闭")
      },

    },
    destroyed () {
      // 销毁监听
      this.close();
    },
    mounted () {
      this.init();
      // this.send();
    }
  }
</script>

<style scoped>

</style>
