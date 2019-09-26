<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="创建日历事件" @tap="createEvent" />
        <Button class="btn btn-primary" text="查找日历事件" @tap="findEvents" />
        <Button class="btn btn-primary" text="删除日历事件" @tap="deleteEvents" />
        <Button class="btn btn-primary" text="列表日历事件" @tap="listCalendars" />
        <Button class="btn btn-primary" text="删除日历" @tap="deleteCalendar" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const Calendar = require('nativescript-calendar');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '日历事件'
    };
  },
  mounted() {},
  methods: {
    createEvent() {
      // Only the `title`, `startDate` and `endDate` are mandatory, so this would suffice:
      let options = {
        title: 'Get groceries',
        // Make sure these are valid JavaScript Date objects.
        // In this case we schedule an Event for now + 1 hour, lasting 1 hour.
        startDate: new Date(new Date().getTime() + 60 * 60 * 1000),
        endDate: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
      };

      // You can however add lots of properties to enrich the Event:
      options.location = 'The shop';
      options.notes = 'This event has reminders';

      // iOS has a separate 'url' field, but on Android the plugin appends this to the 'notes' field.
      options.url = 'http://my.shoppinglist.com';

      // You can also override the default reminder(s) of the Calendar (in minutes):
      options.reminders = {
        first: 30,
        second: 10
      };

      // You can make this Event recurring (this one repeats every other day for 10 days):
      options.recurrence = {
        frequency: 'daily', // daily | weekly | monthly | yearly
        interval: 2, // once every 2 days
        endDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000) // 10 days
      };

      // Want to use a custom calendar for your app? Pass in the 'name'.
      // If the name doesn't yet exist the plugin will create it for you.
      options.calendar = {
        name: 'NativeScript Cal',
        // the color, in this case red
        color: '#FF0000',
        // Can be used on Android to group the calendars. Examples: Your app name, or an emailaddress
        accountName: 'My App Name'
      };

      Calendar.createEvent(options).then(
        function(createdId) {
          console.log('Created Event with ID: ' + createdId);
        },
        function(error) {
          console.log('Error creating an Event: ' + error);
        }
      );
    },
    findEvents() {
      let options = {
        // when searching, dates are mandatory - the event must be within this interval
        startDate: new Date(new Date().getTime() - 50 * 24 * 60 * 60 * 1000),
        endDate: new Date(new Date().getTime() + 50 * 24 * 60 * 60 * 1000)
      };

      // if you know the Event ID, set it here:
      options.id = '123456';

      // you can optionally pass in a few other properties, any event containing these will be returned:
      options.title = 'groceries';
      options.location = 'foo';
      options.notes = 'bar'; // iOS only

      Calendar.findEvents(options).then(
        function(events) {
          console.log(JSON.stringify(events));
        },
        function(error) {
          console.log('Error finding Events: ' + error);
        }
      );
    },
    deleteEvents() {
      let options = {
        // when searching, dates are mandatory - the event must be within this interval
        startDate: new Date(new Date().getTime() - 50 * 24 * 60 * 60 * 1000),
        endDate: new Date(new Date().getTime() + 50 * 24 * 60 * 60 * 1000)
      };

      // if you know the Event ID, set it here:
      options.id = '123456';

      // you can optionally pass in a few other properties, any event containing these will be deleted:
      options.title = 'groceries'; // events _including_ this string will be included in the selection
      options.location = 'foo';
      options.notes = 'bar'; // iOS only

      Calendar.deleteEvents(options).then(
        function(deletedEventIds) {
          console.log(JSON.stringify(deletedEventIds));
        },
        function(error) {
          console.log('Error deleting Events: ' + error);
        }
      );
    },
    listCalendars() {
      Calendar.listCalendars().then(
        function(calendars) {
          // a JSON array of Calendar objects is returned, each with an 'id' and 'name'
          console.log('Found these Calendars on the device: ' + JSON.stringify(calendars));
        },
        function(error) {
          console.log('Error while listing Calendars: ' + error);
        }
      );
    },
    deleteCalendar() {
      Calendar.deleteCalendar({
        name: 'My Calendar name'
      }).then(id => {
        // id is null if nothing was deleted
        console.log(`Deleted Calendar with id ${id}`);
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
