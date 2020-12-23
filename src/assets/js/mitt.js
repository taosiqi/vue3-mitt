module.exports = function (n) {
	return {
		all: (n = n || new Map()), //实例化一个map结构的all
		on: function (e, t) {
      var i = n.get(e); //get查询map对象
      /*
      * 有两种情况
      * if i为undefined，则(i && i.push(t))为false， 执行||右边，往map对象里面set一个方法
      * else i不为undefined，则往i里面push传入的t方法。这也是为啥项目热更新后，点击emit会执行多次的原因
      */
			(i && i.push(t)) || n.set(e, [t]);
		},
		off: function (e, t) {
      var i = n.get(e);//get查询map对象
      /*
      * 有两种情况
      * if i为undefined，则不处理（传入了不存在的卸载监听方法名）
      * else 使用splice删除方法。这里巧用了无符号右移运算符，我们知道indexOf存在会返回字符串出现的位置，不存在会返回-1，当不存在时
      * 返回一个i.indexOf(t) >>> 0=4294967295，splice自然无法截取到
      * 如果存在的话，依然会返回正确的位置提供给splice截取，注意的是，第二个参数不要传入匿名函数（不要使用箭头函数，indexOf无法判断，会一直返回-1，导致off失败,小伙伴门可以尝试一下， 两个匿名函数不是同一个内存地址，indexof判是强等于）
      * （https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift，如果是正数，返回正数，如果是负数返回负数+2的32次方）
      */
			i && i.splice(i.indexOf(t) >>> 0, 1);
    },
     /*
      * 执行两种情况，指定事件以及所有事件*，两者逻辑一样
      * n.get(e) || [] get查询map对象 如果为undefined 则返回一个数组，防止slice报错
      * slice返回一个新数组，原数组不会改变，slice有两个参数，都是可选的（有些文档说第一个参数必填，以mdn为准）https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
      * map循环方法，并把参数t船体过去
      */
		emit: function (e, t) {
        (n.get(e) || []).slice().map(function (n) {
          console.log(n);
          n(t);
        }),
        (n.get("*") || []).slice().map(function (n) {
          n(e, t);
        });
		},
	};
};
