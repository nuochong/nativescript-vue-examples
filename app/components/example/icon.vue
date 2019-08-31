<template>
  <Page class="page" loaded="pageLoaded" ref="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <ListView for="(item,index) in icons" class="list-group">
        <v-template>
          <GridLayout class="list-group-item" rows="*" columns="auto, *">
            <!-- <Image row="0" col="0" :src="item.src" class="thumb img-circle" /> -->
            <Label row="0" col="0" class="icon" :text="item.icon" />
            <Label row="0" col="1" class="icon" :text="item.code" />
          </GridLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>

<script>
const observable = require('tns-core-modules/data/observable');
import ActionBarSecond from './public/action-bar-second';
export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图标',
      icons: {}
    };
  },
  mounted() {
    this.pageLoaded();
    this.icons = this.$icon.glyphs;
  },
  methods: {
    pageLoaded: function(args) {
      let page = this.$refs.page.nativeView;
      console.dir('xxx', this.$icon);
    },
    onButton: function() {}
  }
};
</script>

<style scoped lang="scss">
.icon {
  font-family: iconfont;
  font-size: 48;
  color: white;
}
</style>
