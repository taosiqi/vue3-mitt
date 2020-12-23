<template>
  <div class="hello">
    <div>{{ msg }}
      -><button @click="clearAllFn">使用clear清除所有</button>
      -><button @click="clearOneFn">使用off清除单个</button>
    </div>
    <level3 msg='level3'></level3>
  </div>
</template>

<script>
import { getCurrentInstance,ref } from 'vue'; //获取组件实例
import level3 from '@/components/level3.vue'
export default {
  name: 'level2',
  props: {
    msg: String
  },
   components: {
    level3
  },
  setup(props) {
    const { ctx } = getCurrentInstance();
    // 清除所有
    function clearAllFn(){
      ctx.$emitter.all.clear()
    }
    // 清除单个
    function clearOneFn(){
      ctx.$emitter.emit('clearStr1');
    }
    return {
      clearAllFn,clearOneFn
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
