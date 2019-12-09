<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" @tap="infoOpen" text="开启通知" />
        <Button class="btn btn-primary -primary" @tap="infoClose" text="关闭通知" />
      </StackLayout>
    </ScrollView>
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
      title: '消息通知',
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
          groupedMessages: ['The first', 'Second', 'Keep going', 'one more..', 'OK Stop'], //仅限android
          groupSummary: 'Summary of the grouped messages above', //仅限android
          ongoing: true, // 使通知继续进行 (仅限android)
          icon: 'res://heart',
          image: 'https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg',
          thumbnail: true,
          interval: 'minute',
          channel: 'My Channel', // 默认值: 'Channel'
          sound: 'customsound-ios.wav', // 返回到Android上的默认声音
          at: new Date(new Date().getTime() + 10 * 1000) // 从现在起10秒后
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
          console.log('好吧,它是不见了!');
        } else {
          console.log('没有 ID 5 的计划');
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
