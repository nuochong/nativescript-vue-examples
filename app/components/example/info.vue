<template>
  <Page class="page">
    <ActionBar class="action-bar" title="消息通知">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    </ActionBar>

    <StackLayout class="hello-world">
      <Button class="btn btn-primary" @tap="info" text="消息通知" />
    </StackLayout>
  </Page>
</template>

<script>
import { LocalNotifications } from 'nativescript-local-notifications';
export default {
  data() {
    return {
      title: ''
    };
  },
  mounted() {},
  methods: {
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
          title: 'The title',
          body: 'Recurs every minute until cancelled',
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
    }
  }
};
</script>

<style scoped>
.hello-world {
  margin: 20;
}

label {
  color: red;
}
</style>
