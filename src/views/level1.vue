<template>
  <div class="home">
    <div>level1
      -><button @click="clickOneFn">操作level3(clickOneFn)</button>
      -><button @click="clickTwoFn">操作level3(clickTwoFn)</button>
    </div>
    <level2 msg="level2"/>
  </div>
</template>

<script>
import level2 from '@/components/level2.vue'
import { getCurrentInstance } from 'vue'; //获取组件实例
export default {
  name: 'level1',
  components: {
    level2
  },
 setup() {
      const { ctx } = getCurrentInstance();
      function clickOneFn() {
          ctx.$emitter.emit('str1', { data: 'level1传过来的' });
      }
      function clickTwoFn() {
          ctx.$emitter.emit('str2', { data: 'level1传过来的' });
      }
      return { clickOneFn,clickTwoFn };
  }
}
</script>
