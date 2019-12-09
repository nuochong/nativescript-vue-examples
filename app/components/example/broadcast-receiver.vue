<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Button class="btn btn-primary -primary" text="广播事件" @tap="btnBroadcastReceiver" />
        <RequestContent :content="content" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import RequestContent from './request/request-content';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond,
    RequestContent
  },
  data() {
    return {
      title: '',
      content: 'null'
    };
  },
  mounted() {},
  methods: {
    btnBroadcastReceiver: function() {
      console.log('点击了按钮：');
      if (this.$platform.isAndroid) {
        // 使用tn -platform-dclarations访问本地api(例如android.content.Intent)
        const receiverCallback = (androidContext, intent) => {
          const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
          const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
          const percent = (level / scale) * 100.0;
          this.content = '目前的电池电量：' + percent;
          //vm.set('batteryLife', percent.toString());
        };
        this.$application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, receiverCallback);
      } else {
        this.content = '不是安卓平台';
      }
      console.log(this.content);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
