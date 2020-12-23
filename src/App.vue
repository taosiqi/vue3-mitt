<template>
  <router-view/>
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
   function a(){
      return 1
   }
   function a(){
      return 1
   }
  let arr=[()=>{
    return 1
  }]
  console.log(arr.indexOf(()=>{
    return 1
  }));
  return {  };
  }
}
</script>
