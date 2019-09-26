<template>
  <Page class="page" @loaded="init">
    <ActionBarSecond :title="title" />
    <GridLayout>
      <ScrollView>
        <StackLayout class="p-x-20">
          <!-- <TextView id="tv2" text="Say it with emoji!" borderColor="#eee" borderWidth="1" height="60" class="m-t-15" android:paddingLeft="6" /> -->
          <TextField id="tf1" hint="Enter the price" keyboardType="number" borderColor="#eee" borderWidth="1" class="m-t-15" />
          <TextField id="tf2" :text="getSliderValue()" keyboardType="number" borderColor="#eee" borderWidth="1" class="m-t-15" />
          <TextField id="tf3" :text="email" hint="email@domain.com" keyboardType="email" borderColor="#eee" borderWidth="1" class="m-t-15" />
          <TextView id="tv1" text="" hint="Tell us about yourself.." borderColor="#eee" borderWidth="1" height="60" class="m-t-15" android:paddingLeft="6" />
          <TextView id="tv2" text="Say it with emoji!" borderColor="#eee" borderWidth="1" height="60" class="m-t-15" android:paddingLeft="6" />
          <TextView id="tv3" hint="Don't @ me! " keyboardType="email" borderColor="#eee" borderWidth="1" height="60" class="m-t-15 m-b-20" android:paddingLeft="6" />

          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
          <Label text="Added some text to make the page scroll.." class="scroll-text" />
        </StackLayout>
      </ScrollView>

      <!-- <KeyboardToolbar forId="tv2" height="44">
        <GridLayout columns="*, *, *, *, *, *" class="toolbar">
          <Label col="0" text="👍" @tap="appendToTextView2" />
          <Label col="1" text="👎" @tap="appendToTextView2" />
          <Label col="2" text="😄" @tap="appendToTextView2" />
          <Label col="3" text="🎉" @tap="appendToTextView2" />
          <Label col="4" text="😕" @tap="appendToTextView2" />
          <Label col="5" text="❤️" @tap="appendToTextView2" />
        </GridLayout>
      </KeyboardToolbar> -->

      <KeyboardToolbar forId="tf1" height="44" showWhenKeyboardHidden="false" showAtBottomWhenKeyboardHidden="false">
        <ScrollView orientation="horizontal">
          <StackLayout orientation="horizontal" class="toolbar">
            <Label text="Quick pick:" color="#444444" verticalAlignment="center" horizontalAlignment="center" />
            <Label :text="iconPriceTag + ' ' + 5 " class="icon price-picker" value="5.00" verticalAlignment="center" horizontalAlignment="center" @tap="setAmountInTextField" />
            <Label :text="iconPriceTag + ' ' + 10 " class="icon price-picker" value="10.00" verticalAlignment="center" horizontalAlignment="center" @tap="setAmountInTextField" />
            <Label :text="iconPriceTag + ' ' + 50 " class="icon price-picker" value="50.00" verticalAlignment="center" horizontalAlignment="center" @tap="setAmountInTextField" />
            <Label :text="iconPriceTag + ' ' + 100 " class="icon price-picker" value="100.00" verticalAlignment="center" horizontalAlignment="center" @tap="setAmountInTextField" />
            <Label :text="iconPriceTag + ' ' + 250 " class="icon price-picker" value="250.00" verticalAlignment="center" horizontalAlignment="center" @tap="setAmountInTextField" />
            <Label :text="iconPriceTag + ' ' + 500 " class="icon price-picker" value="500.00" verticalAlignment="center" horizontalAlignment="center" @tap="setAmountInTextField" />
            <Label :text="iconPriceTag + ' ' + 1000 " class="icon price-picker" value="1000.00" verticalAlignment="center" horizontalAlignment="center"
              @tap="setAmountInTextField" />
          </StackLayout>
        </ScrollView>
      </KeyboardToolbar>

      <KeyboardToolbar forId="tf2" height="60">
        <GridLayout rows="auto, *" columns="auto, *, auto" class="toolbar">
          <Label colSpan="3" :text="getSliderValue()" :class="`slider-label slider-label-${getSliderValue() < 0 || getSliderValue() > 100 ? 'in' : ''}valid`"
            verticalAlignment="bottom" horizontalAlignment="center" />
          <Label row="1" col="0" text="0" class="slider-min-max" verticalAlignment="bottom" horizontalAlignment="center" />
          <Slider row="1" col="1" v-model="sliderValue" width="100%" minValue="0" maxValue="100" verticalAlignment="bottom" horizontalAlignment="center" />
          <Label row="1" col="2" text="100" class="slider-min-max" verticalAlignment="bottom" horizontalAlignment="center" />
        </GridLayout>
      </KeyboardToolbar>

      <KeyboardToolbar forId="tf3" height="44">
        <GridLayout columns="auto, auto, *" class="toolbar">
          <Label col="0" :text="iconValid" class="icon m-l-10 email-valid" verticalAlignment="center" horizontalAlignment="center" v-show="emailOK() ? true : false" />
          <Label col="0" :text="iconInvalid" class="icon m-l-10 email-invalid" verticalAlignment="center" horizontalAlignment="center" v-show="!emailOK() ? true : false" />
          <Label col="1" :text="emailOK() ? 'looks good! 🍻' : 'email not OK yet..' " verticalAlignment="center" horizontalAlignment="center" />
          <Button col="2" text="close" verticalAlignment="center" horizontalAlignment="right" class="m-r-10" @tap="hideKeyboardTf3" />
        </GridLayout>
      </KeyboardToolbar>

      <KeyboardToolbar forId="tv1" height="44" showWhenKeyboardHidden="false" showAtBottomWhenKeyboardHidden="false">
        <GridLayout columns="auto, auto, auto, auto, auto, auto, *, auto" class="toolbar">
          <Label col="0" :text="iconDown" class="icon m-l-10" verticalAlignment="center" horizontalAlignment="center" @tap="goToTv2" />
          <Label col="1" :text="iconPaperclip" class="icon" verticalAlignment="center" horizontalAlignment="center" @tap="onTapTv1Camera" />
          <Label col="2" :text="iconCamera" class="icon" verticalAlignment="center" horizontalAlignment="center" @tap="onTapTv1Camera" />
          <Label col="3" :text="iconExpand" class="icon" verticalAlignment="center" horizontalAlignment="center" @tap="onTapTv1Expand" />
          <Label col="4" :text="iconContract" class="icon" verticalAlignment="center" horizontalAlignment="center" @tap="onTapTv1Contract" />
          <Label col="5" :text="iconTrash" class="icon icon-trash" verticalAlignment="center" horizontalAlignment="center" @tap="onTapTv1Trash" />
          <Button col="6" :text="iconMicrophone" class="icon" verticalAlignment="center" horizontalAlignment="right" />
          <Button col="6" text="close" verticalAlignment="center" horizontalAlignment="right" class="m-r-10" @tap="hideKeyboardTv1" />
        </GridLayout>
      </KeyboardToolbar>

      <KeyboardToolbar forId="tv2" height="44" showWhenKeyboardHidden="false" showAtBottomWhenKeyboardHidden="false">
        <GridLayout columns="*, *, *, *, *, *" class="toolbar">
          <Label col="0" text="👍" @tap="appendToTextView2" />
          <Label col="1" text="👎" @tap="appendToTextView2" />
          <Label col="2" text="😄" @tap="appendToTextView2" />
          <Label col="3" text="🎉" @tap="appendToTextView2" />
          <Label col="4" text="😕" @tap="appendToTextView2" />
          <Label col="5" text="❤️" @tap="appendToTextView2" />
        </GridLayout>
      </KeyboardToolbar>

      <KeyboardToolbar forId="tv3" height="44">
        <ScrollView orientation="horizontal" class="toolbar toolbar-twitter">
          <StackLayout orientation="horizontal">
            <Label text="Type an @ to search for a Twitter handle" v-show=" showEddy || showRob || showTrumpsTies ? false : true " verticalAlignment="center"
              horizontalAlignment="center" />
            <Label text="@eddyverbruggen" v-show=" showEddy ? true : false " verticalAlignment="center" horizontalAlignment="center" @tap="appendToTextView3" />
            <Label text="@roblauer" v-show="showRob ? true : false " verticalAlignment="center" horizontalAlignment="center" @tap="appendToTextView3" />
            <Label text="@trumpsties" v-show=" showTrumpsTies ? true : false " verticalAlignment="center" horizontalAlignment="center" @tap="appendToTextView3" />
          </StackLayout>
        </ScrollView>
      </KeyboardToolbar>
    </GridLayout>
  </Page>
</template>

<script>
import { topmost } from 'tns-core-modules/ui/frame';
import ActionBarSecond from './public/action-bar-second';

import { Observable } from 'tns-core-modules/data/observable';
import { action } from 'tns-core-modules/ui/dialogs';
import { isIOS } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import { TextView } from 'tns-core-modules/ui/text-view';
const emailValidator = require('email-validator');
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '键盘助手',
      email: 'nuochong@live.com',
      sliderValue: 0,
      showRob: false,
      showEddy: false,
      showTrumpsTies: false,

      // icons, see https://linearicons.com/free (click a pic for the hex code used below)
      iconCamera: String.fromCharCode(0xe826),
      iconTrash: String.fromCharCode(0xe811),
      iconPaperclip: String.fromCharCode(0xe819),
      iconPriceTag: String.fromCharCode(0xe82f),
      iconMicrophone: String.fromCharCode(0xe85e),
      iconDown: String.fromCharCode(0xe874),
      iconValid: String.fromCharCode(0xe87f),
      iconInvalid: String.fromCharCode(0xe880),
      iconExpand: String.fromCharCode(0xe88c),
      iconContract: String.fromCharCode(0xe88d)
    };
  },
  computed: {
    message() {
      return 'Blank {N}-Vue app';
    }
  },
  loaded() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // laughable code, I know, but it's just a quick demos

      setTimeout(() => {
        const textView = topmost().currentPage.getViewById('tv3');
        if (!textView) {
          return;
        }
        textView.on('textChange', args => {
          const text = textView.text;
          const words = text.split(' ');
          if (words.length === 0) {
            return;
          }
          const lastWord = words[words.length - 1].toLowerCase();

          this.showRob = false;
          this.showEddy = false;
          this.showTrumpsTies = false;
          if (lastWord.indexOf('@') > -1) {
            if ('@' === lastWord) {
              this.showRob = true;
              this.showEddy = true;
              this.showTrumpsTies = true;
            } else if ('@roblauer'.indexOf(lastWord) > -1) {
              this.showRob = true;
              this.showEddy = false;
              this.showTrumpsTies = false;
            } else if ('@eddyverbruggen'.indexOf(lastWord) > -1) {
              this.showRob = false;
              this.showEddy = true;
              this.showTrumpsTies = false;
            } else if ('@trumpsties'.indexOf(lastWord) > -1) {
              this.showRob = false;
              this.showEddy = false;
              this.showTrumpsTies = true;
            }
          }
        });
      }, 500);
    },
    appendToTextView2(args) {
      const textView = topmost().currentPage.getViewById('tv2');
      console.log(args.object.text);
      textView.text += ' ' + args.object.text + ' ';
      this.positionCursorAtEnd(textView);
    },
    positionCursorAtEnd(textView) {
      if (textView.android) {
        textView.android.setSelection(textView.text.length);
      }
    },

    setAmountInTextField(args) {
      const textView = topmost().currentPage.getViewById('tf1');
      textView.text = args.object.value;
      this.positionCursorAtEnd(textView);
      textView.dismissSoftInput();
    },

    appendToTextView2(args) {
      const textView = topmost().currentPage.getViewById('tv2');
      textView.text += ' ' + args.object.text + ' ';
      this.positionCursorAtEnd(textView);
    },

    emailOK() {
      console.log('邮件处理', this.email);
      return emailValidator.validate(this.email);
    },

    goToTv2(args) {
      const textView = topmost().currentPage.getViewById('tv2');
      textView.focus();
      this.positionCursorAtEnd(textView);
    },

    appendToTextView3(args) {
      const textView = topmost().currentPage.getViewById('tv3');
      let newText = textView.text;

      const words = textView.text.split(' ');
      if (words.length > 0) {
        const lastWord = words[words.length - 1].toLowerCase();
        if (args.object.text.startsWith(lastWord)) {
          words.pop();
          newText = words.join(' ');
        }
      }
      textView.text = (newText + ' ' + args.object.text).trim() + ' ';
      this.positionCursorAtEnd(textView);
    },

    showUserForTextView3(args) {
      const textView = topmost().currentPage.getViewById('tv3');
      console.log(args.object.text);
      return textView.text.endsWith('@');
    },

    getSliderValue() {
      return this.sliderValue === undefined ? undefined : Math.round(this.sliderValue);
    },

    onTapTv1Camera() {
      action({
        title: 'Add a picture from..',
        cancelable: true,
        cancelButtonText: 'Cancel',
        actions: ['the camera', 'the photo album']
      });
    },

    onTapTv1Trash() {
      const textView = topmost().currentPage.getViewById('tv1');
      textView.text = '';
    },

    onTapTv1Expand() {
      const textView = topmost().currentPage.getViewById('tv1');
      if (textView.height < 130) {
        textView.height += 10;
      } else {
        console.log('Text already expanded to the maximum we allow ;)');
      }
    },

    onTapTv1Contract() {
      const textView = topmost().currentPage.getViewById('tv1');
      if (textView.height > 30) {
        textView.height -= 10;
      } else {
        console.log('Text already contracted to the minimum we allow ;)');
      }
    },

    onTapTv2() {
      console.log('>> tapped tv2');
    },

    hideKeyboardTf1() {
      const textView = topmost().currentPage.getViewById('tf1');
      textView.dismissSoftInput();
    },

    hideKeyboardTf3() {
      const textView = topmost().currentPage.getViewById('tf3');
      textView.dismissSoftInput();
    },

    hideKeyboardTv1() {
      const textView = topmost().currentPage.getViewById('tv1');
      textView.dismissSoftInput();
    },

    hideKeyboardTv2() {
      const textView = topmost().currentPage.getViewById('tv2');
      textView.dismissSoftInput();
    },
    positionCursorAtEnd(textView) {
      if (textView.android) {
        textView.android.setSelection(textView.text.length);
      }
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '../../assets/css/app-variables';
// End custom common variables
// Custom styles
.fa {
  color: $accent-dark;
}
.info {
  font-size: 20;
}
TextField,
TextView {
  font-size: 13;
  padding: 6 0;
}
TextField {
  font-size: 13;
  padding: 6;
}
.toolbar {
  background-color: #f6f6f6;
  border-color: #c6c6c6;
  border-top-width: 1px;
}
.toolbar label {
  color: #777;
  padding: 5 13;
  text-align: center;
  vertical-align: center;
}
/*------ */
TextField,
TextView {
  font-size: 13;
  padding: 6 0;
}

TextField {
  font-size: 13;
  padding: 6;
}

label.scroll-text {
  font-size: 13;
  color: #777;
  margin: 12 0;
}

.toolbar {
  background-color: #f6f6f6;
  border-color: #c6c6c6;
  border-top-width: 1px;
}

.toolbar.toolbar-twitter {
  background-color: #eaf4fa;
  border-color: #cbe3f5;
}

.toolbar label {
  color: #777;
  padding: 5 13;
  text-align: center;
  vertical-align: center;
}

.toolbar.toolbar-twitter label {
  color: #4594da;
}

.toolbar button {
  border-radius: 1;
}

.toolbar label.email-valid {
  color: green;
}

.toolbar label.email-invalid {
  color: red;
}

.toolbar label.price-picker {
  color: #327bf6;
  font-size: 13;
  border-radius: 50%;
  border-width: 1;
  border-color: #c9c9c9;
  padding: 4 6;
  margin: 0 6;
}

.toolbar Slider {
  margin-bottom: 10;
}

.toolbar label.slider-label {
  font-size: 11;
  font-weight: bold;
  color: #327bf6;
}

.toolbar label.slider-min-max {
  font-size: 13;
  padding-bottom: 10;
}

.icon {
  font-family: 'Linearicons-Free';
  font-size: 24;
  padding: 0 10;
}

label.icon-trash {
  font-size: 20;
  color: red;
}
</style>
