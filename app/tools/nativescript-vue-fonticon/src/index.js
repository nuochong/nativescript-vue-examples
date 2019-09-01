import { TNSFontIcon, fonticon } from 'nativescript-fonticon'

import FontIcon from './components/FontIcon'

const install = (Vue, { componentName, debug = false, paths = {} } = {}) => {
  TNSFontIcon.debug = debug
  TNSFontIcon.paths = paths
  TNSFontIcon.loadCss()

  Vue.component(componentName || FontIcon.name, FontIcon)

  Vue.filter('fonticon', fonticon)
}

export default install
