const transition = require('tns-core-modules/ui/transition');
const platform = require('tns-core-modules/platform');
var lazy_1 = require('tns-core-modules/utils/lazy');
//parallax-transitoin.android.js相关

var screenWidth = lazy_1.default(function() {
  return platform.screen.mainScreen.widthPixels;
});
var ParallaxTransition = (function(_super) {
  __extends(ParallaxTransition, _super);
  function ParallaxTransition(direction, duration, curve) {
    var _this = _super.call(this, duration, curve) || this;
    _this._direction = direction;
    return _this;
  }
  ParallaxTransition.prototype.createAndroidAnimator = function(transitionType) {
    var translationValues = Array.create('float', 2);
    switch (this._direction) {
      case 'left':
        switch (transitionType) {
          case transition.AndroidTransitionType.enter:
            translationValues[0] = screenWidth();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.exit:
            translationValues[0] = 0;
            translationValues[1] = -screenWidth() / 3;
            break;
          case transition.AndroidTransitionType.popEnter:
            translationValues[0] = -screenWidth() / 3;
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.popExit:
            translationValues[0] = 0;
            translationValues[1] = screenWidth();
            break;
        }
        break;
    }

    var prop;
    if (this._direction === 'left') {
      prop = 'translationX';
    }
    var animator = android.animation.ObjectAnimator.ofFloat(null, prop, translationValues);

    var duration = this.getDuration();
    if (duration !== undefined) {
      animator.setDuration(duration);
    }
    // 回弹动画
    // animator.setInterpolator(this.getCurve());
    return animator;
  };
  ParallaxTransition.prototype.toString = function() {
    return _super.prototype.toString.call(this) + ' ' + this._direction;
  };
  return ParallaxTransition;
})(transition.Transition);
exports.ParallaxTransition = ParallaxTransition;
//# sourceMappingURL=slide-transition.android.js.map
