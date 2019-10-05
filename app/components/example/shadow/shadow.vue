<template>
  <Page>
    <ActionBarSecond :title="title" />

    <GridLayout rows="*, auto" columns="*">
      <StackLayout v-if="showAndroid" row="0" col="0">
        <Button class="h3 m-15 p-10 ex1" :text="`elevation: ${elevation}`" v-shadow="elevation" @tap="toggleClass()"></Button>
        <Label :class="'h3 m-15 p-15 ' + bclass" :text="` elevation: ${elevation}, pressedElevation: ${elevation + 5}, forcePressAnimation: true`"
          v-shadow="{ elevation, pressedElevation: elevation + 5, forcePressAnimation: true }" @tap="dummy()"></Label>
        <Label :class="'h3 m-15 p-10 ' + bclass2" :text="`elevation: ${elevation}, bgcolor: #006968, shape: shape.RECTANGLE, corderRadius: 15`"
          v-shadow="{ elevation, shape: shape.RECTANGLE, bgcolor: '#006968', cornerRadius: 15 }"></Label>
        <Label :class="'h1 m-15 p-15 ' + bclass3" :text="'☺'" v-shadow="androidData" @tap="dummy()"></Label>
        <Label :class="'h3 m-15 lbl5'" :text="`elevation: ${elevation}, bgcolor: #ff1744, shape: shape.OVAL`"></Label>
      </StackLayout>
      <StackLayout v-else row="0" col="0">
        <Label class="h3 m-15 p-10 ex1" :text="`elevation: ${elevation}`" v-shadow="elevation"></Label>
        <Label :class="'h3 m-15 p-10 ' + bclass" :text="` elevation: ${elevation}`" v-shadow="{ elevation }"></Label>
        <Label :class="'h3 m-15 p-10 ' + bclass2" :text="`elevation: ${elevation}, shadowOffset: 4`" v-shadow="{ elevation: elevation, shadowOffset: 4 }"></Label>
        <Label :class="'h1 m-15 p-15 ' + bclass3" :text="'☺'" v-shadow="iosData"></Label>
        <Label :class="'h3 m-15 lbl5'" :text="`elevation: ${elevation}, offset: 10, opacity: 0.5, radius: 10`"></Label>
      </StackLayout>
      <ListPicker row="1" col="0" :items="stdElevations" selectedIndex="2" @selectedIndexChange="setElevation($event)" class="p-15"></ListPicker>
    </GridLayout>
  </Page>
</template>

<script>
import { Elevation, Shape, ShapeEnum } from 'nativescript-vue-shadow';
import { ListPicker } from 'tns-core-modules/ui/list-picker';
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '阴影1',
      navbarTitle: `Nativescript-Vue-Shadow Demo`,
      elevation: 2,
      shape: ShapeEnum,
      stdElevations: [],
      androidData: {},
      iosData: {},
      bclass: 'ex2',
      bclass2: 'ex3',
      bclass3: 'ex4',
      showAndroid: false
    };
  },
  mounted() {
    if (isAndroid) {
      this.showAndroid = true;
    }
    for (const x in Elevation) {
      if (isNaN(parseInt(x, 10))) {
        this.stdElevations.push(x);
      }
    }
    this.androidData = this.getAndroidData();
    this.iosData = this.getIOSData();
  },
  methods: {
    getAndroidData() {
      return {
        elevation: this.elevation,
        bgcolor: '#ff1744',
        shape: ShapeEnum.OVAL,
        pressedElevation: this.elevation + 15,
        forcePressAnimation: true
      };
    },
    getIOSData() {
      return {
        elevation: this.elevation,
        shadowColor: '#000000',
        shadowOffset: 10,
        shadowOpacity: 0.5,
        shadowRadius: 10
      };
    },
    toggleClass() {
      this.bclass = this.bclass === 'ex2' ? 'ex3' : 'ex2';
      this.bclass2 = this.bclass2 === 'ex3' ? 'ex4' : 'ex3';
      this.bclass3 = this.bclass3 === 'ex4' ? 'ex3' : 'ex4';
    },
    setElevation(newValue) {
      const picker = newValue.object;
      this.elevation = Elevation[this.stdElevations[picker.selectedIndex]];
      this.androidData = this.getAndroidData();
      this.iosData = this.getIOSData();
    },
    // 虚拟点击功能，使一个视图可点击
    dummy() {
      console.log('pressed dummy()');
    }
  }
};
</script>

<style scoped lang="scss">
.btn {
  font-size: 18;
}
label {
  text-align: center;
}
.ex1,
.ex2 {
  background-color: white;
}
.ex3,
.ex4 {
  color: white;
}
.ex3 {
  background-color: #006968;
  border-radius: 15;
}
.ex4 {
  background-color: #ff1744;
  border-radius: 50%;
  width: 80;
  height: 80;
}
</style>
