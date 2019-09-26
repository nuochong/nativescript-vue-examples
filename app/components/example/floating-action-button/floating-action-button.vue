<template>
  <Page class="page" @loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="title" />
    <GridLayout rows="auto, auto,*" height="100%" width="100%">
      <Label row="0" text="Made with ❤️ by nStudio" class="title" textWrap="true" />
      <StackLayout row="1" orientation="horizontal" class="commands">
        <Button text="MultiFab" @tap="goMultiFab" />
      </StackLayout>
      <ListView row="2" for="item in users">
        <!-- <v-template> -->
        <button :text="item" textWrap="true" fontSize="45" padding="20" />
        <!-- <v-template> -->
      </ListView>
      <Fab id="fabButton" row="2" icon="res://baseline_add_white_24" @tap="fabTap" rippleColor="#ffffff" class="fab-button-bottom" hideOnSwipeOfView="userList"
        swipeAnimation="slideUp" />
      <!-- slideDown, slideUp, slideRight, slideLeft, scale -->
    </GridLayout>
  </Page>
</template>

<script>
import * as app from 'tns-core-modules/application';
import { Color } from 'tns-core-modules/color';
import { EventData, fromObject } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { device, isAndroid } from 'tns-core-modules/platform';
import { Button } from 'tns-core-modules/ui/button';
import { confirm } from 'tns-core-modules/ui/dialogs';
import { Page } from 'tns-core-modules/ui/page';
import { openUrl } from 'tns-core-modules/utils/utils';
import MultifabPage from './multifab-page';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '动态图片',
      // users: [
      //   { name: 'Billy Bob' },
      //   { name: 'Tweeder' },
      //   { name: 'Mox' },
      //   { name: 'Coach' },
      //   { name: 'Lance' },
      //   { name: 'Johnson' },
      //   { name: 'William' },
      //   { name: 'Franklin' },
      //   { name: 'Billy Bob' },
      //   { name: 'Tweeder' },
      //   { name: 'Mox' },
      //   { name: 'Coach' },
      //   { name: 'Lance' },
      //   { name: 'Johnson' },
      //   { name: 'William' },
      //   { name: 'Franklin' }
      // ],
      users: [
        'Billy Bob',
        'Tweeder',
        'Mox',
        'Coach',
        'Lance',
        'Johnson',
        'William',
        'Franklin',
        'Billy Bob',
        'Tweeder',
        'Mox',
        'Coach',
        'Lance',
        'Johnson',
        'William',
        'Franklin',
        'Billy Bob',
        'Tweeder',
        'Mox',
        'Coach',
        'Lance',
        'Johnson',
        'William',
        'Franklin',
        'Billy Bob',
        'Tweeder',
        'Mox',
        'Coach',
        'Lance',
        'Johnson',
        'William',
        'Franklin'
      ],
      viewModel: fromObject({
        users: new ObservableArray(this.users)
      })
    };
  },
  mounted() {},
  methods: {
    pageLoaded(args) {
      //const page = args.object;
      let page = this.$refs.page.nativeView;
      // 更改Lollipop上的状态栏颜色
      if (isAndroid && device.sdkVersion >= '21') {
        const window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new Color('#303F9F').android);
      }

      page.bindingContext = this.viewModel;
    },

    nStudioIconTap() {
      confirm({
        message:
          'nStudio, LLC. specializes in custom software applications ranging from mobile, web, desktop, server and more. Would you like to visit nstudio.io?',
        okButtonText: 'Yes',
        cancelButtonText: 'Close'
      }).then(result => {
        if (result) {
          openUrl('https://nstudio.io');
        }
      });
    },

    fabTap(args) {
      console.log('fab tap event', args.object);
      this.viewModel.users.unshift({ name: 'Gary' });
    },

    goMultiFab: function(args) {
      const button = args.object;
      const page = button.page;
      //page.frame.navigate(MultifabPage);
      this.$navigateTo(this, MultifabPage);
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  font-size: 28;
  horizontal-align: center;
  margin: 20;
}

button {
  font-size: 24;
  horizontal-align: center;
}

.message {
  font-size: 20;
  color: #284848;
  horizontal-align: center;
}

.fab-button-bottom {
  height: 60;
  width: 60;
  margin: 15;
  horizontal-align: right;
  vertical-align: bottom;
  color: #fff;
  background-color: #ff4081;
}

.commands {
  padding: 10 5;
  background-color: #f0f0f0;
}

.commands button {
  font-size: 14;
}
/**/
.fab-button {
  height: 50;
  width: 50;
  margin: 15;
  color: #fff;
  background-color: #ff4081;
}

.top-left {
  background-color: red;
  horizontal-align: left;
  vertical-align: top;
}

.top-right {
  background-color: #336699;
  horizontal-align: right;
  vertical-align: top;
}

.bottom-left {
  background-color: #fff000;
  horizontal-align: left;
  vertical-align: bottom;
}

.bottom-right {
  horizontal-align: right;
  vertical-align: bottom;
}

.center {
  horizontal-align: center;
  vertical-align: center;
}
</style>
