<template>
  <GridLayout rows="auto, *">
    <MyHeader row="0" col="0" />
    <ScrollView row="1" col="0" orientation="vertical" scrollBarIndicatorVisible="false">
      <StackLayout>
        <HeadPanel />
        <TaskPanel />
        <BindingPrompt />
        <InfoPanel />
        <InfoPanel />
        <Button class="btn setting-exit" text="退出当前账号" @tap="btnExit" />
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import InfoPanel from '../settings/info-panel';
import HeadPanel from '../settings/head-panel';
import MyHeader from '../settings/my-header';
import TaskPanel from '../settings/task-panel';
import BindingPrompt from '../settings/binding-prompt';
import WriteArticle from '../settings/write-article';
import Swiper from '../settings/swiper';

export default {
  components: {
    InfoPanel,
    HeadPanel,
    MyHeader,
    TaskPanel,
    BindingPrompt,
    Swiper,
    WriteArticle
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    btnExit: function() {
      this.$navigateBack();
      //this.$setStatusBarFontColors();
    }
  }
};
</script>

<style scoped lang="scss">
.setting-exit {
  text-align: center;
  border-width: 1;
  border-color: #009100;
  color: #009100;
  padding: 10;
  width: 40%;
  border-radius: 50%;
}
</style>
