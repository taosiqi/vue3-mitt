<template>
  <div class="level2">
    <div>level2</div>
    <button @click="clearAllFn">使用clear清除所有</button>
    <button @click="clearOneFn">使用off清除单个</button>
  </div>
  <level3 msg='level3'></level3>
</template>

<script>
import { getCurrentInstance } from 'vue'; //获取组件实例
import level3 from '@/components/level3.vue'
export default {
  name: 'level2',
   components: {
    level3
  },
  setup() {
    const { ctx } = getCurrentInstance();
    // 退订所有，工具内部使用Map管理订阅者，clear实际是map自带的方法，用于移除Map的所有键值对
    function clearAllFn(){
      ctx.$emitter.all.clear()
    }
    // 退订指定订阅者
    function clearOneFn(){
      ctx.$emitter.emit('clearStr1');
    }
    return {
      clearAllFn,clearOneFn
    };
  },
}
</script>
