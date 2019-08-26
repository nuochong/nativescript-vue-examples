<template>
  <Page class="page">
    <ActionBar title="Local Data Storage" class="action-bar" />
    <ScrollView>
      <StackLayout class="home-panel form input-field">
        <Label
          text="Store and retrieve data locally by using Application Settings (similar to 'local storage' on the web)."
          textWrap="true"
          class="lbl"
        />

        <!-- store/retrieve number -->
        <Label text="Number" class="heading" />
        <TextField
          v-model="num"
          hint="Enter a Number..."
          class="input input-border"
          keyboardType="number"
        />
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Button text="Save" @tap="saveNumber" class="btn btn-primary" />
          <Button text="Remove" @tap="removeNumber" class="btn btn-primary" />
        </StackLayout>

        <!-- store/retrieve string -->
        <Label text="String" class="heading" />
        <TextField v-model="str" hint="Enter a String..." class="input input-border" />
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Button text="Save" @tap="saveString" class="btn btn-primary" />
          <Button text="Remove" @tap="removeString" class="btn btn-primary" />
        </StackLayout>

        <!-- store/retrieve boolean -->
        <Label text="Boolean" class="heading" />
        <Switch v-model="bool" class="switch" />
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Button text="Save" @tap="saveBoolean" class="btn btn-primary" />
          <Button text="Remove" @tap="removeBoolean" class="btn btn-primary" />
        </StackLayout>

        <StackLayout class="hr-light" />

        <Button text="Remove All App Settings" @tap="removeAll" class="btn btn-primary" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
const appSettings = require('tns-core-modules/application-settings');
const dialogs = require('tns-core-modules/ui/dialogs');
export default {
  data() {
    return {
      num: null,
      str: '',
      bool: false
    };
  },
  methods: {
    saveNumber() {
      appSettings.setNumber('someNumber', parseFloat(this.num));
      dialogs.alert('You saved: ' + appSettings.getNumber('someNumber'));
    },
    removeNumber() {
      appSettings.remove('someNumber');
      dialogs.alert('You removed the number from app settings!');
      this.num = null;
    },
    saveString() {
      appSettings.setString('someString', this.str);
      dialogs.alert('You saved: ' + appSettings.getString('someString'));
    },
    removeString() {
      appSettings.remove('someString');
      dialogs.alert('You removed the string from app settings!');
      this.str = '';
    },
    saveBoolean() {
      appSettings.setBoolean('someBoolean', this.bool);
      dialogs.alert('You saved: ' + appSettings.getBoolean('someBoolean'));
    },
    removeBoolean() {
      appSettings.remove('someBoolean');
      dialogs.alert('You removed the boolean from app settings!');
      this.bool = false;
    },
    removeAll() {
      appSettings.clear();
      dialogs.alert('All app settings values have been cleared!');
      this.num = null;
      this.str = '';
      this.bool = false;
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

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
