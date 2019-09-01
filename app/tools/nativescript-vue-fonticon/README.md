## A simpler way to use font icons with NativeScript + Vue.js

[![LICENSE](https://img.shields.io/github/license/emiliogrv/nativescript-vue-fonticon.svg)](https://github.com/emiliogrv/nativescript-vue-fonticon/blob/master/LICENSE.md)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/emiliogrv/nativescript-vue-fonticon/issues)

### The Problem

You can use icon fonts with NativeScript by combining a class with a unicode reference in the view:

- CSS

```css
/* app.css or styles.scss */
.fa {
  font-family: FontAwesome;
}
```

- view

```html
<label class="fa" text="\uf293"></label>
```

This works but keeping up with unicodes is not fun.

### The Solution

With this plugin, you can instead reference the `fonticon` by the specific classname:

```html
<FontIcon name="fa-play" @tap="tapAction" />
```

## Prerequisites / Requirements

You will have to manually [install](https://docs.nativescript.org/ui/styling#using-fonts) the fonts you want to use.

## Install

```
npm install nativescript-vue-fonticon --save
or
yarn add nativescript-vue-fonticon
```

## Usage

[FontAwesome](https://fortawesome.github.io/Font-Awesome/) will be used in the following examples but you can use any custom font icon collection.

- Place font icon `.ttf` file in `app/fonts`, for example:

```
fonts/FontAwesome.ttf
```

- Create base class in `app.css` global file, for example:

```css
/* app.css or styles.scss */
.fa {
  font-family: FontAwesome;
}
```

**NOTE**: Android uses the name of the file for the font-family (In this case, `fontawesome-webfont`.ttf. iOS uses the actual name of the font; for example, as found [here](https://github.com/FortAwesome/Font-Awesome/blob/master/css/font-awesome.css#L8). You could rename the font filename to `FontAwesome.ttf` to use just: `font-family: FontAwesome`. You can [learn more here](http://fluentreports.com/blog/?p=176).(http://fluentreports.com/blog/?p=176).

- Copy css to `app` somewhere, for example:

```
assets/css/font-awesome.css
```

Then modify the css file to isolate just the icon fonts needed. [Watch this video to better understand](https://www.youtube.com/watch?v=qb2sk0XXQDw).

- Configure your fonts and setup the converter:

```js
import Vue from 'nativescript-vue'
import FontIcon from 'nativescript-vue-fonticon'

import './styles.scss'

Vue.use(FontIcon, {
  componentName: 'FIcon', // <-- Optional. Will be the name for component icon.
  debug: true, // <-- Optional. Will output the css mapping to console.
  paths: {
    fa: './assets/css/font-awesome.css',
    ion: './assets/css/ionicons.css'
  }
})

...
```

## API

### Installing

| Parameters      | Type      | Default    | Description                             |
| --------------- | --------- | ---------- | --------------------------------------- |
| `componentName` | `String`  | `FontIcon` | Name for component icon.                |
| `debug`         | `Boolean` | `false`    | Show output the css mapping to console. |
| `paths`         | `Object`  |            | Object of paths to css fonts.           |

### Using

| Parameters | Type               | Default | Description                                                                     |
| ---------- | ------------------ | ------- | ------------------------------------------------------------------------------- |
| `name`     | `String`           |         | Name of class icon.                                                             |
| `color`    | `String`           |         | Sets a solid-color value to the matched view’s foreground or can use class too. |
| `size`     | `[String, Number]` | `15`    | Size icon.                                                                      |
| `type`     | `String`           | `fa`    | CSS class icon to use.                                                          |
| `@tap`     | `Function`         |         | Listener of tap event.                                                          |

# License

[MIT](https://github.com/emiliogrv/nativescript-vue-fonticon/blob/master/LICENSE.md)
