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
      // 只有“title”、“startDate”和“endDate”是强制性的，所以这就足够了:
      let options = {
        title: 'Get groceries',
        // 确保这些是有效的JavaScript日期对象。
        // 在这种情况下，我们现在安排一个活动+ 1小时，持续1小时。
        startDate: new Date(new Date().getTime() + 60 * 60 * 1000),
        endDate: new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
      };

      // 不过，你可以添加很多属性来丰富事件:
      options.location = 'The shop';
      options.notes = 'This event has reminders';

      // iOS有一个单独的'url'字段，但在Android上，该插件将其附加到'notes'字段。
      options.url = 'http://my.shoppinglist.com';

      // 您也可以覆盖日历的默认提醒(以分钟为单位):
      options.reminders = {
        first: 30,
        second: 10
      };

      // 你可以让这个事件重复发生(这个事件每隔一天重复一次，持续10天):
      options.recurrence = {
        frequency: 'daily', // daily | weekly | monthly | yearly
        interval: 2, // 每两天一次
        endDate: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000) // 10 天
      };

      // 想为您的应用程序使用自定义日历吗?传入“名称”。
      // 如果名称还不存在，插件将为您创建它。
      options.calendar = {
        name: 'NativeScript Cal',
        // 颜色，这里是红色
        color: '#FF0000',
        // 可以在Android上对日历进行分组。例如:您的应用程序名称或电子邮件地址
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
        // 搜索时，日期是强制性的——事件必须在这个时间间隔内
        startDate: new Date(new Date().getTime() - 50 * 24 * 60 * 60 * 1000),
        endDate: new Date(new Date().getTime() + 50 * 24 * 60 * 60 * 1000)
      };

      // 如果您知道事件ID，请在这里设置:
      options.id = '123456';

      // 你可以选择传入一些其他属性，任何包含这些属性的事件都会被返回:
      options.title = 'groceries';
      options.location = 'foo';
      options.notes = 'bar'; // 仅限 iOS

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
        // 搜索时，日期是强制性的——事件必须在这个时间间隔内
        startDate: new Date(new Date().getTime() - 50 * 24 * 60 * 60 * 1000),
        endDate: new Date(new Date().getTime() + 50 * 24 * 60 * 60 * 1000)
      };

      // 如果您知道事件ID，请在这里设置:
      options.id = '123456';

      // 你可以选择传入一些其他属性，任何包含这些属性的事件都会被删除:
      options.title = 'groceries'; // 事件 _including_ 该字符串将包含在选择项中
      options.location = 'foo';
      options.notes = 'bar'; // 仅限 iOS

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
          // 返回一个JSON日历对象数组，每个对象都有一个“id”和“name”
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
        // 如果没有删除任何内容，则id为null
        console.log(`Deleted Calendar with id ${id}`);
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
