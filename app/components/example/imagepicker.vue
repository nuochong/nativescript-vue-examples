<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <!-- <ScrollView>
      <StackLayout class="hello-world"> -->
    <GridLayout rows="*, auto, auto">
      <ListView @itemLoading="onItemLoading" for="item in imageAssets" :visibility="isSingleMode?'collapsed':'visible'">
        <v-template>
          <GridLayout columns="auto, *">
            <Image width="80" height="80" :src="item" stretch="aspectFill" />
            <Label class="label-white m-10" id="imageLabel" col="1" />
          </GridLayout>
        </v-template>
      </ListView>
      <Image :src="imageSrc" :visibility="isSingleMode?'visible':'collapsed'" :width="previewSize" :height="previewSize" stretch="aspectFit" />
      <Button class="btn btn-primary" row="1" text="单选" @tap="onSelectSingleTap" horizontalAlignment="center" />
      <Button class="btn btn-primary" row="2" text="多选" @tap="onSelectMultipleTap" horizontalAlignment="center" />
    </GridLayout>
    <!-- </StackLayout>
    </ScrollView> -->
  </Page>
</template>

<script>
import { LocalNotifications } from 'nativescript-local-notifications';
import ActionBarSecond from './public/action-bar-second';
import { Observable } from 'tns-core-modules/data/observable';
import * as imagepicker from 'nativescript-imagepicker';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { Label } from 'tns-core-modules/ui/label';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '图像选择器',
      isSingleMode: true,
      imageAssets: [],
      imageSrc: null,
      previewSize: 300,
      thumbSize: 80,
      thumbSize: null
    };
  },
  methods: {
    onSelectSingleTap: function(e) {
      this.isSingleMode = true;
      let context = imagepicker.create({ mode: 'single' });
      this.startSelection(context);
    },
    onSelectMultipleTap: function() {
      this.isSingleMode = false;
      let context = imagepicker.create({
        mode: 'multiple'
      });
      this.startSelection(context);
    },
    startSelection(context) {
      context
        .authorize()
        .then(() => {
          this.imageAssets = [];
          this.imageSrc = null;
          return context.present();
        })
        .then(selection => {
          console.log('Selection done: ' + JSON.stringify(selection));
          this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0] : null;

          // 设置要从具有最优大小的资产中加载的映像(优化内存使用)
          selection.forEach(element => {
            element.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
            element.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
          });

          this.imageAssets = selection;
        })
        .catch(function(e) {
          console.log(e);
        });
    },
    onItemLoading(args) {
      let label = args.view.getViewById('imageLabel');
      label.text = 'image ' + args.index;
    }
  }
};
</script>

<style scoped lang="scss">
// 启动自定义公共变量
@import '../../assets/css/app-variables';
// 结束自定义公共变量

// 自定义风格
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
