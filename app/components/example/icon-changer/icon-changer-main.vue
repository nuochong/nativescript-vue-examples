<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary" text="修改IOS图标" @tap="btnIconChangerIos" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import IconChangerIos from './icon-changer-ios';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '修改图标',
      see: 'android修改图标：https://github.com/myinnos/AppIconNameChanger'
    };
  },
  mounted() {},
  methods: {
    btnIconChangerIos: function() {
      this.navigateTo(this, IconChangerIos);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
