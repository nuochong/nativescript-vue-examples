<template>
  <Page class="page">
    <ActionBarSecond :title="'计数器'"></ActionBarSecond>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline" />
        <Label :text="message" alignSelf="baseline" class="h2" />
        <Button @tap="increment" text="+" class="btn btn-outline" />
      </FlexboxLayout>
      <Image v-if="surprise" src="~/assets/images/NativeScript-Vue.png" />
    </StackLayout>
  </Page>
</template>

<script>
import { mapActions } from 'vuex';

import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  computed: {
    message() {
      return this.$store.state.counter.count.toString();
    },
    surprise() {
      return this.$store.state.counter.count >= 5;
    }
  },
  methods: mapActions(['decrement', 'increment'])
};
</script>
