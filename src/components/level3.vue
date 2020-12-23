<template>
  <div class="hello">
    <div>{{ msg }}->{{'默认值'+str1}}->{{'默认值'+str2}}->{{'默认值'+str3}}</div>
  </div>
</template>

<script>
import { getCurrentInstance,ref } from 'vue'; //获取组件实例
export default {
  name: 'level3',
  props: {
    msg: String
  },
  setup(props) {
    const { ctx } = getCurrentInstance();
    let str1=ref(1)
    let str2=ref(1)
    let str3=ref(1)
    function strFn(e){
      console.log(e);
      str1.value++
    }
    ctx.$emitter.on('str1', strFn);
    ctx.$emitter.on('str2', e => {
      console.log(e);
      str2.value++
    });
    //on(*)监听所有事件
    ctx.$emitter.on('*', e => {
      console.log('str3');
      str3.value++
    });
    // 清除监听
    ctx.$emitter.on('clearStr1', e => {
       ctx.$emitter.off('str1',strFn)
    });
    return {
      str1,
      str2,
      str3,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
