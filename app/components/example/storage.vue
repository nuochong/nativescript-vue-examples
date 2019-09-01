<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <ScrollView>
      <StackLayout class="home-panel form input-field">
        <Label text="使用应用程序设置(类似于web上的“本地存储”)在本地存储和检索数据。" textWrap="true" class="lbl" />

        <!-- store/retrieve number -->
        <Label text="Number" class="heading" />
        <TextField
          v-model="num"
          hint="Enter a Number..."
          class="input input-border"
          keyboardType="number"
        />
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Button text="保存" @tap="saveNumber" class="btn btn-primary" />
          <Button text="移除" @tap="removeNumber" class="btn btn-primary" />
        </StackLayout>

        <!-- store/retrieve string -->
        <Label text="String" class="heading" />
        <TextField v-model="str" hint="Enter a String..." class="input input-border" />
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Button text="保存" @tap="saveString" class="btn btn-primary" />
          <Button text="移除" @tap="removeString" class="btn btn-primary" />
        </StackLayout>

        <!-- store/retrieve boolean -->
        <Label text="Boolean" class="heading" />
        <Switch v-model="bool" class="switch" />
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Button text="保存" @tap="saveBoolean" class="btn btn-primary" />
          <Button text="移除" @tap="removeBoolean" class="btn btn-primary" />
        </StackLayout>

        <StackLayout class="hr-light" />

        <Button text="删除所有应用程序设置" @tap="removeAll" class="btn btn-primary" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const appSettings = require('tns-core-modules/application-settings');
const dialogs = require('tns-core-modules/ui/dialogs');
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '本地存储',
      num: null,
      str: '',
      bool: false
    };
  },
  methods: {
    saveNumber() {
      appSettings.setNumber('someNumber', parseFloat(this.num));
      dialogs.alert('你保存了: ' + appSettings.getNumber('someNumber'));
    },
    removeNumber() {
      appSettings.remove('someNumber');
      dialogs.alert('你从应用程序设置中删除了number！');
      this.num = null;
    },
    saveString() {
      appSettings.setString('someString', this.str);
      dialogs.alert('你保存了: ' + appSettings.getString('someString'));
    },
    removeString() {
      appSettings.remove('someString');
      dialogs.alert('你从应用程序设置中删除了string！');
      this.str = '';
    },
    saveBoolean() {
      appSettings.setBoolean('someBoolean', this.bool);
      dialogs.alert('你保存了: ' + appSettings.getBoolean('someBoolean'));
    },
    removeBoolean() {
      appSettings.remove('someBoolean');
      dialogs.alert('你从应用程序设置中删除了boolean！');
      this.bool = false;
    },
    removeAll() {
      appSettings.clear();
      dialogs.alert('所有应用程序设置值都已清除！');
      this.num = null;
      this.str = '';
      this.bool = false;
    }
  }
};
</script>

<style scoped lang="scss">
.home-panel {
  font-size: 16;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}

.btn {
  font-size: 18;
}

.lbl {
  margin-bottom: 20;
}

.heading {
  font-size: 24;
  font-weight: 600;
}

.strong {
  font-weight: 600;
}

.input {
  margin: 10;
}

.hr-light {
  margin: 10;
}
</style>
