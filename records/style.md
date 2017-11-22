## css
* css单位**vh**，用于让元素高度等于窗口高度(**100vh**)

---

## element-ui style
* 有时需要将style标签的**scoped**属性去掉，设置的样式才能生效
* 不可直接在element-ui的组件上使用flex布局，因为这个样式会加在组件的根节点下，可找到对应的组件的内部样式类，加上width等属性来控制**或者**找到相应的组件内部的元素的父节点样式类加上display: flex;(参考login.vue)

