const transition = require('tns-core-modules/ui/transition');

const CustomTransition = (function(_super) {
  __extends(CustomTransition, _super);
  function CustomTransition() {
    _super.apply(this, arguments);
  }
  CustomTransition.prototype.animateIOSTransition = function(containerView, fromView, toView, operation, completion) {
    toView.transform = CGAffineTransformMakeScale(0, 0);
    fromView.transform = CGAffineTransformIdentity;
    switch (operation) {
      case UINavigationControllerOperation.UINavigationControllerOperationPush:
        containerView.insertSubviewAboveSubview(toView, fromView);
        break;
      case UINavigationControllerOperation.UINavigationControllerOperationPop:
        containerView.insertSubviewBelowSubview(toView, fromView);
        break;
      default:
        break;
    }
    const duration = this.getDuration();
    const curve = this.getCurve();
    UIView.animateWithDurationAnimationsCompletion(
      duration,
      () => {
        UIView.setAnimationCurve(curve);
        toView.transform = CGAffineTransformIdentity;
        fromView.transform = CGAffineTransformMakeScale(0, 0);
      },
      completion
    );
  };

  return CustomTransition;
})(transition.Transition);
exports.CustomTransition = CustomTransition;
