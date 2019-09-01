import { TNSFontIcon, fonticon } from '../../nativescript-fonticon';

import FontIcon from './components/FontIcon';

const install = (Vue, { componentName, debug = false, paths = {} } = {}) => {
  TNSFontIcon.debug = debug;
  TNSFontIcon.paths = paths;
  TNSFontIcon.loadCss();

  Vue.component(componentName || FontIcon.name, FontIcon);
  console.dir('过滤器函数：', fonticon);
  Vue.filter('fonticon', fonticon);
};

/**
 * 错误数据
 * JS: 'xxx' { _observers: {}, icon: '', code: 'eb66', eb66: '' }
 * JS: 'xxx' { _observers: {}, icon: '', code: 'eb67', eb67: '' }
 * JS: 'xxx' { _observers: {}, icon: '', code: 'eb68', eb68: '' }
 */

export default install;
