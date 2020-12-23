<template>
  <div class="level3">
    <div>level3</div>
    <button>str1值：{{ str1 }}</button>
    <button>str2值：{{ str2 }}</button>
    <button>str3值：{{ str3 }}</button>
  </div>
</template>

<script>
import {getCurrentInstance, ref} from 'vue'; //获取组件实例
export default {
  name: 'level3',
  props: {
    msg: String
  },
  setup() {
    const {ctx} = getCurrentInstance();
    let str1 = ref(1)
    let str2 = ref(1)
    let str3 = ref(1)
    function str3Fn(e) {
      str1.value++
    }
    //on方法用于订阅一个事件，第一个参数是事件名称，第二个参数是回调函数，他的回调函数接收一个参数，为传递过来的参数。
    ctx.$emitter.on('str1', str3Fn);
    ctx.$emitter.on('str2', e => {
      str2.value++
    });
    //on(*)，订阅所有事件，任何一个emit都会触发它的执行，他的回调函数接收两个参数，第一个参数为发布事件名，第二个才是床底过来的参数。
    ctx.$emitter.on('*', (e,data) => {
      console.log(e,data)
      str3.value++
    });
    ctx.$emitter.on('clearStr1', e => {
      // off用于退订。这里需要注意，工具内部使用indexOf判断，第二个参数不要传入匿名函数，否则会出现退订失败。
      ctx.$emitter.off('str1', str3Fn)
    });
    return {
      str1,
      str2,
      str3,
    };
  },
}
</script>
