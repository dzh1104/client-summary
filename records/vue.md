## watch监听
观察和相应Vue实例上的**数据**变动，而不能直接监听Vue实例上的属性或选项对象的变动($route $options.template等)，修正：可以监听$route的改变

## vue上挂载DOM事件
需要在DOM结构渲染完成后，取得节点，若进入一个页面，需要挂载DOM事件的结构用了v-if，此时应该监听v-if条件来挂载事件且使用$nextTick，确保结构渲染完成，挂载事件。