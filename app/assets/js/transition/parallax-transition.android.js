const transition = require('tns-core-modules/ui/transition');
const platform = require('tns-core-modules/platform');
var lazy_1 = require('tns-core-modules/utils/lazy');
var screenWidth = lazy_1.default(function() {
  return platform.screen.mainScreen.widthPixels;
});
var screenHeight = lazy_1.default(function() {
  return platform.screen.mainScreen.heightPixels;
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
            translationValues[1] = -screenWidth();
            break;
          case transition.AndroidTransitionType.popEnter:
            translationValues[0] = -screenWidth();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.popExit:
            translationValues[0] = 0;
            translationValues[1] = screenWidth();
            break;
        }
        break;
      case 'right':
        switch (transitionType) {
          case transition.AndroidTransitionType.enter:
            translationValues[0] = -screenWidth();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.exit:
            translationValues[0] = 0;
            translationValues[1] = screenWidth();
            break;
          case transition.AndroidTransitionType.popEnter:
            translationValues[0] = screenWidth();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.popExit:
            translationValues[0] = 0;
            translationValues[1] = -screenWidth();
            break;
        }
        break;
      case 'top':
        switch (transitionType) {
          case transition.AndroidTransitionType.enter:
            translationValues[0] = screenHeight();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.exit:
            translationValues[0] = 0;
            translationValues[1] = -screenHeight();
            break;
          case transition.AndroidTransitionType.popEnter:
            translationValues[0] = -screenHeight();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.popExit:
            translationValues[0] = 0;
            translationValues[1] = screenHeight();
            break;
        }
        break;
      case 'bottom':
        switch (transitionType) {
          case transition.AndroidTransitionType.enter:
            translationValues[0] = -screenHeight();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.exit:
            translationValues[0] = 0;
            translationValues[1] = screenHeight();
            break;
          case transition.AndroidTransitionType.popEnter:
            translationValues[0] = screenHeight();
            translationValues[1] = 0;
            break;
          case transition.AndroidTransitionType.popExit:
            translationValues[0] = 0;
            translationValues[1] = -screenHeight();
            break;
        }
        break;
    }
    var prop;
    if (this._direction === 'left' || this._direction === 'right') {
      prop = 'translationX';
    } else {
      prop = 'translationY';
    }
    var animator = android.animation.ObjectAnimator.ofFloat(null, prop, translationValues);
    var duration = this.getDuration();
    if (duration !== undefined) {
      animator.setDuration(duration);
    }
    animator.setInterpolator(this.getCurve());
    return animator;
  };
  ParallaxTransition.prototype.toString = function() {
    return _super.prototype.toString.call(this) + ' ' + this._direction;
  };
  return ParallaxTransition;
})(transition.Transition);
exports.ParallaxTransition = ParallaxTransition;
//# sourceMappingURL=slide-transition.android.js.map
