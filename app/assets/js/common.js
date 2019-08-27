export default{
  install(Vue,options){
      Vue.prototype.localUrl= "test common local";
      Vue.prototype.itemImgPath = process.env.publicUrl + 'img/bigData/';
      Vue.prototype.navigateTo = function(_this,target){
        console.log('me-navigateTo');
        _this.$navigateTo(target, {
          animated: true,
          transition: {
            name: 'slide',
            duration: 380,
            curve: 'easeIn'
          }
        });
      };
  }
}