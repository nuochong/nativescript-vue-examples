<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <StackLayout class="p-20">

          <android>
            <Label class="label-white" text="Please run this on an iOS device/simulator" textWrap="true" />
          </android>

          <ios>
            <Label text="Pick either of these and press the Home button to verify the icon updated" class="t-18 text-center c-white" textWrap="true" />
            <Label text="iOS 10.3 or higher required" class="text-center text-muted t-16" textWrap="true" />

            <GridLayout rows="*, *, *, *" columns="*, *" class="m-t-20" horizontalAlignment="stretch">
              <Image row="0" col="0" @tap=" changeIconRed " src="~/assets/images/example/icon-changer/icon-red-180.png" horizontalAlignment="center" verticalAlignment="center" />
              <Image row="0" col="1" @tap=" changeIconBlue " src="~/assets/images/example/icon-changer/icon-blue-180.png" horizontalAlignment="center" verticalAlignment="center" />
              <Image row="1" col="0" @tap=" changeIconGreen " src="~/assets/images/example/icon-changer/icon-green-180.png" horizontalAlignment="center"
                verticalAlignment="center" />
              <Image row="1" col="1" @tap=" changeIconPurple " src="~/assets/images/example/icon-changer/icon-purple-180.png" horizontalAlignment="center"
                verticalAlignment="center" />
              <Image row="2" col="0" @tap=" changeIconYellow " src="~/assets/images/example/icon-changer/icon-yellow-180.png" horizontalAlignment="center"
                verticalAlignment="center" />
              <Image row="2" col="1" @tap=" changeIconDefault " src="~/assets/images/example/icon-changer/icon-180.png" horizontalAlignment="center" verticalAlignment="center" />
              <StackLayout row="3" colSpan="2" orientation="horizontal" horizontalAlignment="center" verticalAlignment="center">
                <Switch :checked=" showFeedback " class="m-r-16" />
                <Label text="show feedback" class="label-white" :class=" showFeedback ? 'c-black' : 'text-muted' " />
              </StackLayout>
            </GridLayout>
          </ios>

        </StackLayout>
        <!-- <Button class="btn btn-primary" text="修改IOS图标" @tap="btnChange" /> -->
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
// let AppIconChangerPlugin = require('nativescript-app-icon-changer');
// let appIconChanger = new AppIconChangerPlugin.AppIconChanger();
import { AppIconChanger } from 'nativescript-app-icon-changer';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '修改IOS图标',
      appIconChanger: AppIconChanger,
      showFeedback: true
    };
  },
  mounted() {
    this.appIconChanger = new AppIconChanger();
    console.log('Current alternate icon: ' + this.appIconChanger.currentAlternateIcon());
  },
  methods: {
    // btnChange() {
    //   appIconChanger.changeIcon({
    //     iconName: 'icon-blue', // or null to reset to the default
    //     suppressUserNotification: true
    //   });
    // },
    changeIconRed() {
      this.changeIcon('icon-red');
    },

    changeIconBlue() {
      this.changeIcon('icon-blue');
    },

    changeIconGreen() {
      this.changeIcon('icon-green');
    },

    changeIconYellow() {
      this.changeIcon('icon-yellow');
    },

    changeIconPurple() {
      this.changeIcon('icon-purple');
    },

    changeIconDefault() {
      this.changeIcon(null);
    },

    changeIcon(name) {
      this.appIconChanger
        .changeIcon({
          iconName: name,
          suppressUserNotification: !this.showFeedback // default true
        })
        .then(
          () => {
            console.log(`Icon changed to ${name}.`);
          },
          error => {
            console.log(`Error code: ${error.code}`);
            console.log(`Error message: ${error.message}`);
          }
        );
    }
  }
};
</script>

<style scoped lang="scss">
image {
  border: 2px solid #fff;
  border-radius: 10;
  width: 90;
  height: 90;
}
</style>
