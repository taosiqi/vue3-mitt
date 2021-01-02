<template>
  <div class="level1">
    <div>level1</div>
    <button @click="clickOneFn">改变level3->str1</button>
    <button @click="clickTwoFn">改变level3->str2</button>
  </div>
  <level2 msg="level2"/>
</template>

<script>
import level2 from '@/components/level2.vue'
import {getCurrentInstance} from 'vue'; //获取组件实例
export default {
  name: 'level1',
  components: {
    level2
  },
  setup() {
    const {proxy} = getCurrentInstance();

    function clickOneFn() {
      // emit用来发布一个事件，第一个参数是订阅名称，第二个参数是需要传递的参数
      proxy.$emitter.emit('str1', {data: '改变str1'});
    }

    function clickTwoFn() {
      proxy.$emitter.emit('str2', {data: '改变str2'});
    }

    return {clickOneFn, clickTwoFn};
  }
}
</script>
