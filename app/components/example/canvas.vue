<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <StackLayout>
      <CanvasView width="100" height="100" @draw="onDraw"></CanvasView>
      <Label fontSize="16" width="100" height="100" backgroundColor="yellow">test</Label>
    </StackLayout>
  </Page>
</template>

<script>
import * as frameModule from 'tns-core-modules/ui/frame';
import Vue from 'nativescript-vue';
import { Component } from 'vue-property-decorator';
import { createRect, Paint, Style } from 'nativescript-canvas';
import { Color } from 'tns-core-modules/color/color';
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '绘图'
    };
  },
  mounted() {},
  methods: {
    onDraw(event) {
      const canvas = event.canvas;
      console.log('onDraw canvas:', canvas.getWidth(), canvas.getHeight());
      const bgPaint = new Paint();
      bgPaint.setAntiAlias(true);
      bgPaint.setTextSize(16);
      bgPaint.setColor('yellow');
      bgPaint.strokeWidth = 10;
      // rect
      canvas.drawRect(createRect(0, 0, 100, 100), bgPaint);
      bgPaint.setStyle(Style.STROKE);
      bgPaint.setColor(new Color(255, 0, 255, 0));
      canvas.drawRect(createRect(10, 10, 80, 80), bgPaint);
      bgPaint.setStyle(Style.STROKE);
      bgPaint.strokeWidth = 1;
      bgPaint.setColor(new Color(255, 255, 255, 0));
      canvas.drawRect(createRect(0, 0, 50, 50), bgPaint);
      bgPaint.setStyle(Style.FILL);
      bgPaint.setColor(new Color(255, 0, 0, 0));
      canvas.drawText('test', 0, 20, bgPaint);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
