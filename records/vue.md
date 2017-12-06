## watch监听
观察和相应Vue实例上的**数据**变动，而不能直接监听Vue实例上的属性或选项对象的变动($route $options.template等)，修正：可以监听$route的改变

## vue上挂载DOM事件
需要在DOM结构渲染完成后，取得节点，若进入一个页面，需要挂载DOM事件的结构用了v-if，此时应该监听v-if条件来挂载事件且使用$nextTick，确保结构渲染完成，挂载事件。

## props也是值传递
如果传递的是复杂数据类型，如果对其修改也会影响到父组件的数据。应该使用computed或data来处理下，再对其操作，也可以使用深复制。

## this.$options.template = `<div>${this.content}</div>` 动态模板
在content中，使用了vue的指令@click绑定事件，如果直接用v-html去渲染出来，点击事件不会生效，可以利用动态模板来实现