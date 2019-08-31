<template>
  <Page class="page">
    <ActionBarSecond :title="'消息通知'" />

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="infoOpen" text="开启通知" />
      <Button class="btn btn-primary" @tap="infoClose" text="关闭通知" />
    </StackLayout>
  </Page>
</template>

<script>
import { LocalNotifications } from 'nativescript-local-notifications';
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '',
      localNotificationsId: 1
    };
  },
  mounted() {},
  methods: {
    infoOpen: function() {
      LocalNotifications.schedule([
        {
          id: this.localNotificationsId,
          title: '标题',
          body: '每分钟重复一次，直到取消为止',
          ticker: 'The ticker',
          color: 'red',
          badge: 1,
          groupedMessages: ['The first', 'Second', 'Keep going', 'one more..', 'OK Stop'], //android only
          groupSummary: 'Summary of the grouped messages above', //android only
          ongoing: true, // makes the notification ongoing (Android only)
          icon: 'res://heart',
          image: 'https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg',
          thumbnail: true,
          interval: 'minute',
          channel: 'My Channel', // default: 'Channel'
          sound: 'customsound-ios.wav', // falls back to the default sound on Android
          at: new Date(new Date().getTime() + 10 * 1000) // 10 seconds from now
        }
      ]).then(
        function() {
          console.log('Notification scheduled');
        },
        function(error) {
          console.log('scheduling error: ' + error);
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
    infoClose: function() {
      LocalNotifications.cancel(this.localNotificationsId).then(function(foundAndCanceled) {
        if (foundAndCanceled) {
          console.log("OK, it's gone!");
        } else {
          console.log('No ID 5 was scheduled');
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
