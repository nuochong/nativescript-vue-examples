<template>
  <StackLayout padding="15">
    <!-- <ActionBar color="white" backgroundColor="#53ba82" class="action-bar" title="RadCalendar demo">
      <ActionItem text="Week" android.position="popup" @tap="onWeekTap"></ActionItem>
      <ActionItem text="Month" android.position="popup" @tap="onMonthTap"></ActionItem>
      <ActionItem text="Month Names" android.position="popup" @tap="onMonthNamesTap"></ActionItem>
      <ActionItem text="Year" android.position="popup" @tap="onYearTap"></ActionItem>
      <ActionItem text="Day" android.position="popup" @tap="onDayTap"></ActionItem>
    </ActionBar> -->
    <GridLayout columns="*, *,*,*,*" rows="auto">
      <Label text="Week" row="0" col="0" backgroundColor="#43b883" @tap="onWeekTap" />
      <Label text="Month" row="0" col="1" backgroundColor="#1c6b48" @tap="onMonthTap" />
      <Label text="Month Names" row="0" col="2" backgroundColor="#289062" @tap="onMonthNamesTap" />
      <Label text="Year" row="0" col="3" backgroundColor="#43b883" @tap="onYearTap" />
      <Label text="Day" row="0" col="4" backgroundColor="#43b883" @tap="onDayTap" />
    </GridLayout>
    <RadCalendar :eventSource="events" :eventsViewMode="eventsViewMode" :viewMode="viewMode">
    </RadCalendar>
  </StackLayout>

</template>

<script>
import { getEvents } from './data/data';
import { CalendarViewMode, CalendarEventsViewMode } from 'nativescript-ui-calendar';

export default {
  name: 'calendar-view',
  data() {
    return {
      events: getEvents(20),
      eventsViewMode: CalendarEventsViewMode.Popover,
      viewMode: CalendarViewMode.Month
    };
  },
  methods: {
    onWeekTap() {
      this.viewMode = CalendarViewMode.Week;
    },
    onMonthTap() {
      this.viewMode = CalendarViewMode.Month;
    },
    onMonthNamesTap() {
      this.viewMode = CalendarViewMode.MonthNames;
    },
    onYearTap() {
      this.viewMode = CalendarViewMode.Year;
    },
    onDayTap() {
      this.viewMode = CalendarViewMode.Day;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
