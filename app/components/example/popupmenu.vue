<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout>
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="pop" @tap="buttonTap" ref="btn" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { Popup, PopupOptions } from '../../tools/nativescript-popup';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { Label } from 'tns-core-modules/ui/label';
import { Button } from 'tns-core-modules/ui/button';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import { Menu } from '../../tools/nativescript-menu';

import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '弹出菜单',
      msg: 'Hello World!'
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
