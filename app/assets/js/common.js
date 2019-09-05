export default {
  install(Vue, options) {
    Vue.prototype.localUrl = 'test common local';
    Vue.prototype.itemImgPath = process.env.publicUrl + 'img/bigData/';
    Vue.prototype.navigateTo = function(_this, target, type = 'left') {
      console.log('me-navigateTo');
      let name = 'slide';
      let duration = 200;
      let curve = 'easeIn';
      switch (type) {
        case 'left':
          name = 'slide';
          duration = 200;
          curve = 'easeIn';
          break;
        case 'bounce':
          name = 'slide';
          duration = 380;
          curve = 'spring';
          break;
      }
      _this.$navigateTo(target, {
        animated: true,
        transition: {
          name,
          duration,
          curve
        }
      });
    };
  }
};
