<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <!-- 这里的[列]位使该应用程序在平板电脑上是两列布局，在手机上是一列布局 -->
    <GridLayout :columns="isTablet ? '*, 2*' : '*'">
      <GridLayout col="0" class="left-column">
        <!-- 列表视图同时显示在平板电脑和手机上。在平板电脑上，列表占据屏幕的左侧，一个手机的列表视图占据整个屏幕。 -->
        <ListView class="list-group" for="item in pokemon" @itemTap="select">
          <v-template>
            <GridLayout class="list-group-item" rows="*" columns="auto, *">
              <Image row="0" col="0" :src="item.src" class="thumb"></Image>
              <Label row="0" col="1" :text="item.name"></Label>
            </GridLayout>
          </v-template>
        </ListView>
      </GridLayout>
      <!-- 下面的标记在DetailPage中复制。您可能希望将这段代码抽象为一个共享组件，或者您可能希望将实现保持独立，以便能够根据用户是在手机上还是在平板电脑上定制标记。下面的标记是平板电脑用户看到的UI，下面的DetailPage中的标记是手机用户看到的标记。-->
      <StackLayout col="1" class="p-20" v-if="isTablet">
        <Label class="h1 m-b-10" :text="selected.name"></Label>
        <Image height="200" :src="selected.src" class="thumb img-circle"></Image>
        <Label class="body" textWrap="true" :text="selected.description"></Label>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
const DeviceType = require('tns-core-modules/ui/enums').DeviceType;
const isTablet = require('tns-core-modules/platform').device.deviceType == DeviceType.Tablet;
import DetailPage from './detail-page';
const pokemon = require('./data').pokemon;
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '页面分割',
      isTablet: isTablet,
      pokemon: pokemon,
      selected: {}
    };
  },
  methods: {
    select: function(event) {
      // 为平板电脑用户更新选定的实例变量
      const selected = pokemon[event.index];
      if (isTablet) {
        this.selected = selected;
      } else {
        this.$navigateTo(DetailPage, {
          props: { selected: selected }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>
