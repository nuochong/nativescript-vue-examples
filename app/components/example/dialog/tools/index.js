import mergeOptions from 'merge-options';
import Dialog from './dialog';

export let defaultOptions = {
  debug: false,
  backdropColor: 'rgba(255, 0, 0, 0.7)',
  bottom: {
    width: null,
    height: '40%',
    backgroundColor: '#ffffff',
    canSwipeOpen: true,
    swipeOpenTriggerWidth: null,
    swipeOpenTriggerHeight: 30,
    swipeOpenTriggerMinDrag: 50,
    swipeCloseTriggerMinDrag: 50,
    swipeOpenTriggerProperties: {},
    animation: {
      openDuration: 300,
      closeDuration: 300
    },
    translationOffsetMultiplier: 1,
    axis: 'Y'
  }
};

export default function install(Vue, options) {
  if (options) {
    defaultOptions = mergeOptions(defaultOptions, options);
  }

  Vue.component('Dialog', Dialog);
}
