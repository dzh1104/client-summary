/*
 * @Author: dzh 
 * @Date: 2017-11-24 09:53:57 
 * @Last Modified by:   dzh 
 * @Last Modified time: 2017-11-24 09:53:57 
 */
// 作用是将loading
export default class vueUtil {
  static $content = null;
  static loadObj = null;

  static init() {
    this.$content = null;
    let loadObj = this.loadObj;
    if (loadObj !== null) {
      loadObj.close();
      this.loadObj = null;
    }
  }

  static getContentEl(vue) {
    let $content = this.$content;

    if ($content === null) {
      $content = $(vue.$el).parents('.content');
      $content.removeClass('loading');
      this.$content = $content;
    }

    return $content;
  }

  // 在页面中使用，例如created中，调用：addLoadingWatch(this)
  static addLoadingWatch(vue) {
    let self = this;
    vue.$watch('loading', function (flag) {
      let $content = self.getContentEl(vue);
      if (flag) {
        $content.addClass('loading');
        self.loadObj = vue.$loading({
          target: $content[0],
          fullscreen: false,
          lock: true,
          text: '拼命加载中'
        });
      } else {
        let loadObj = self.loadObj;
        $content.removeClass('loading');
        if (loadObj !== null) {
          loadObj.close();
        }
      }
    });
  }

  static closeLoading() {
    this.init();
  }
}
