<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="检查" @tap="btnCheck" />
        <Button class="btn btn-primary -primary" text="显示" @tap="btnShow" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { appRater } from 'nativescript-rater';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '应用评分'
    };
  },
  mounted() {
    appRater.init({
      showNeverButton: false,
      debugMode: true
    });
  },
  methods: {
    btnCheck: function() {
      appRater.showRateDialogIfMeetsConditions();
    },
    btnShow: function() {
      appRater.showRateDialog();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
