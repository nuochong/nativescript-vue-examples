<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>
    <ScrollView>
      <StackLayout>
        <Button class="btn btn-primary" @tap="counter">Counter</Button>
        <Button class="btn btn-primary" @tap="hello">Hello World</Button>
        <Button class="btn btn-primary" @tap="login">LOgin</Button>

        <Button class="btn btn-primary" @tap="btnToast">Toast</Button>
        <Button class="btn btn-primary" @tap="btnAlert">Alert</Button>
        <Button class="btn btn-primary" @tap="info">Info</Button>

        <Button class="btn btn-primary" @tap="btnDialog">Dialog </Button>

        <Button class="btn btn-primary" @tap="btnPlatformModule">PlatformModule</Button>

        <Button class="btn btn-primary" @tap="btnPhone">Phone</Button>
        <Button class="btn btn-primary" @tap="btnSms">Sms</Button>

        <Button class="btn btn-primary" @tap="btnGeolocation">定位</Button>
        <Button class="btn btn-primary" @tap="btnPermissions">获取权限1</Button>

        <Button class="btn btn-primary" @tap="btnPlatformModule">获取设备信息</Button>
        <Button class="btn btn-primary btn-green" @tap="btnChange" ref="btn">Change Btn</Button>

      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Counter from "./Counter";
import HelloWorld from "./HelloWorld.vue";
import Login from "./Login.vue";

import * as Toast from "nativescript-toast";
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
//import * as LocalNotifications from "nativescript-local-notifications";
import { LocalNotifications } from "nativescript-local-notifications";
//var LocalNotifications = require("nativescript-local-notifications");

const dialogs = require("tns-core-modules/ui/dialogs");

const platformModule = require("tns-core-modules/platform");

const phone = require("nativescript-phone");

const geolocation = require("nativescript-geolocation");
const { Accuracy } = require("tns-core-modules/ui/enums");

const permissions = require("nativescript-permissions");
const CALL_PHONE = android.Manifest.permission.CALL_PHONE;
const Intent = android.content.Intent;
const app = require("application");

export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  mounted() {
    console.log("***********");
  },
  methods: {
    counter: function() {
      this.$navigateTo(Counter, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "spring"
        }
      });
    },
    hello: function() {
      this.$navigateTo(HelloWorld, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "spring"
        }
      });
    },
    login: function() {
      this.$navigateTo(Login, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "spring"
        }
      });
    },
    btnToast: function() {
      console.log("111");
      let toast = Toast.makeText("Hello World", "long");
      toast.show();
    },
    btnAlert: function() {
      console.log("xxx");
      //TNSFancyAlert.showSuccess('Success!', 'Fancy alerts are nice.', 'Yes they are!');
      TNSFancyAlert.showSuccess(
        "Success!",
        "Fancy alerts are nice.",
        "Yes they are!"
      ).then(() => {
        /* user pressed the button */
      });
    },
    info: function() {
      //console.dir(LocalNotifications);
      // LocalNotifications.schedule([{
      //     id: 2,
      //     title: 'Hi',
      //     body: 'I\'m soundless',
      //     sound: null,
      //     at: new Date(new Date().getTime() + 10*1000)
      // }])

      LocalNotifications.schedule([
        {
          id: 1,
          title: "The title",
          body: "Recurs every minute until cancelled",
          ticker: "The ticker",
          color: "red",
          badge: 1,
          groupedMessages: [
            "The first",
            "Second",
            "Keep going",
            "one more..",
            "OK Stop"
          ], //android only
          groupSummary: "Summary of the grouped messages above", //android only
          ongoing: true, // makes the notification ongoing (Android only)
          icon: "res://heart",
          image:
            "https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg",
          thumbnail: true,
          interval: "minute",
          channel: "My Channel", // default: 'Channel'
          sound: "customsound-ios.wav", // falls back to the default sound on Android
          at: new Date(new Date().getTime() + 10 * 1000) // 10 seconds from now
        }
      ]).then(
        function() {
          console.log("Notification scheduled");
        },
        function(error) {
          console.log("scheduling error: " + error);
        }
      );

      // LocalNotifications.addOnMessageReceivedCallback(
      //     function (notificationData) {
      //         dialogs.alert({
      //             title: "Notification received",
      //             message: "ID: " + notificationData.id +
      //             "\nTitle: " + notificationData.title +
      //             "\nBody: " + notificationData.body,
      //             okButtonText: "Excellent!"
      //         });
      //     }
      // ).then(
      //     function() {
      //         dialogs.alert({
      //             title: "Listener added",
      //             message: "We'll let you know when a notification is received.",
      //             okButtonText: "Nice :)"
      //         });
      //     }
      // );
    },
    btnDialog: function() {
      dialogs.alert({
        title: "Notification received",
        message: "message",
        okButtonText: "Excellent!"
      });
    },
    btnPlatformModule: function() {
      console.log("######");
      console.log(platformModule.device.model);
      console.log("######");
    },
    btnPhone: function() {
      phone.requestCallPermission();
      phone.dial("212-555-1234", true);
    },
    btnSms: function() {
      phone
        .sms("212-555-1234", "My Message") //New Method for single number is phone.sms(["212-555-1234"],"My Message")
        .then(
          function(args) {
            /// args.reponse: "success", "cancelled", "failed"
            console.log(JSON.stringify(args));
          },
          function(err) {
            console.log("Error: " + err);
          }
        );
    },
    btnGeolocation: function() {
      geolocation.enableLocationRequest();
      console.log("xxxx");
      geolocation
        .getCurrentLocation({
          desiredAccuracy: Accuracy.high,
          maximumAge: 5000,
          timeout: 20000
        })
        .then(res => {
          console.log("***");
          this.lat = res.latitude;
          this.lon = res.longitude;
          this.speed = res.speed;
          console.log("定位", this.lat);
          console.log("定位", this.lon);
          console.log("定位", this.lat);
        });
    },
    btnPermissions: function() {
      permissions
        .requestPermission(
          android.Manifest.permission.READ_CONTACTS,
          "I need these permissions because I'm cool"
        )
        .then(function() {
          console.log("Woo Hoo, I have the power!");
        })
        .catch(function() {
          console.log("Uh oh, no permissions - plan B time!");
        });
    },
    btnPlatformModule: function() {
      console.log("######");
      console.log(platformModule.device.model);
      console.log("######");
      // vm.set("deviceInformationmodel", platformModule.device.model);
      // vm.set("deviceInformationdeviceType", platformModule.device.deviceType);
      // vm.set("deviceInformationos", platformModule.device.os);
      // vm.set("deviceInformationosVersion", platformModule.device.osVersion);
      // vm.set("deviceInformationsdkVersion", platformModule.device.sdkVersion);
      // vm.set("deviceInformationlanguage", platformModule.device.language);
      // vm.set("deviceInformationmanufacturer", platformModule.device.manufacturer);
      // vm.set("deviceInformationuuid", platformModule.device.uuid);
      // vm.set("screenInformationheightDIPs", platformModule.screen.mainScreen.heightDIPs);
      // vm.set("screenInformationheightPixels", platformModule.screen.mainScreen.heightPixels);
      // vm.set("screenInformationscale", platformModule.screen.mainScreen.scale);
      // vm.set("screenInformationwidthDIPs", platformModule.screen.mainScreen.widthDIPs);
      // vm.set("screenInformationwidthPixels", platformModule.screen.mainScreen.widthPixels);
    },
    btnChange: function() {
      let btn = this.$refs.btn.nativeView;
      btn.color = 'blue';
      //btn.background = "red";
      btn.fontSize = 50;
      btn.text = "xxx";
      btn.rotate = '10';
      btn.opacity = 0.5;
      btn.padding = 10;
      
      //console.log(btn._getNativeViewsCount());
      // btn.on("tap", function(params) {
      //   console.log("呵呵");
      // });
    }
  }
};
</script>

<style  scoped>
  .btn-green{
    background-color: blue;
    color: green;
    font-size: 20px;
  }
</style>
