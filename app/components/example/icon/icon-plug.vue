<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <ListView for="(item,index) in icons" class="list-group">
        <v-template>
          <GridLayout class="list-group-item" rows="*" columns="auto, *">
            <Label class="iconfont" text="&#xeb69;">&#xeb69;</Label>
            <IconFont name="icon-tiaoshi"/>
          </GridLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图标插件',
      icons: [0,1,2,3,4,5]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
// .iconfont{
//   font-family: iconfont;
//   font-size: 48;
//   color: white;
// }
</style>
