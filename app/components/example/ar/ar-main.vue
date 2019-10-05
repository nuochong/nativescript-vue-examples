<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="AR" @tap="btnAr" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Ar from './ar';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'AR'
    };
  },
  mounted() {},
  methods: {
    btnAr: function() {
      this.navigateTo(this, Ar);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
