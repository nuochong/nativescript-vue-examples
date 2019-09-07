const transition = require('tns-core-modules/ui/transition');
const floatType = java.lang.Float.class.getField('TYPE').get(null);

const CustomTransition = (function(_super) {
  __extends(CustomTransition, _super);
  function CustomTransition() {
    _super.apply(this, arguments);
  }
  CustomTransition.prototype.createAndroidAnimator = function(transitionType) {
    const scaleValues = java.lang.reflect.Array.newInstance(floatType, 2);
    switch (transitionType) {
      case transition.AndroidTransitionType.enter:
      case transition.AndroidTransitionType.popEnter:
        scaleValues[0] = 0;
        scaleValues[1] = 1;
        break;
      case transition.AndroidTransitionType.exit:
      case transition.AndroidTransitionType.popExit:
        scaleValues[0] = 1;
        scaleValues[1] = 0;
        break;
      default:
        break;
    }
    const objectAnimators = java.lang.reflect.Array.newInstance(android.animation.Animator.class, 2);
    objectAnimators[0] = android.animation.ObjectAnimator.ofFloat(null, 'scaleX', scaleValues);
    objectAnimators[1] = android.animation.ObjectAnimator.ofFloat(null, 'scaleY', scaleValues);
    const animatorSet = new android.animation.AnimatorSet();
    animatorSet.playTogether(objectAnimators);
    const duration = this.getDuration();
    if (duration !== undefined) {
      animatorSet.setDuration(duration);
    }
    animatorSet.setInterpolator(this.getCurve());

    return animatorSet;
  };

  return CustomTransition;
})(transition.Transition);
exports.CustomTransition = CustomTransition;
