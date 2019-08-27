<template>
  <Page loaded="pageLoaded" ref="page">
    <me-actionbar :title="'图标'"></me-actionbar>
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
      <!-- <Button text="Button" @tap="onButton" /> -->
      <!-- <Label :text="this.$icon.glyphs[0].icon" class="icon" />
      <Label :text="this.$icon.glyphs[11].icon" class="icons" />-->
      <!-- <Label :text="this.$icon.glyphs[0].eb61" class="icon" />
      <Label :text="this.$icon.glyphs[11].eb6a" class="icons" />-->
      <Label :text="this.$icon.eb61" class="icon" />
      <Label :text="this.$icon.e902" class="icons" />
    </GridLayout>
    <!-- <ListView for="item in this.$icon.glyphs">
            <v-template>
                
                <Label :text="item.icon" class="icon" />
            </v-template>
    </ListView>-->
  </Page>
</template>

<script>
const observable = require('tns-core-modules/data/observable');
import meActionbar from './public/actionbar';
export default {
  components: {
    meActionbar
  },
  data() {
    return {
      msg: 'Hello World! ',
      glyphs: []
    };
  },
  mounted() {
    this.pageLoaded();
  },
  methods: {
    pageLoaded: function(args) {
      //var page = args.object;
      var page = this.$refs.page.nativeView;
      //   var viewModel = new observable.Observable();
      //   var glyphs = new Array();
      //   var charCode = 0xeb61;
      //   for (; charCode <= 0xeb69; charCode++) {
      //     var glyph = new observable.Observable();

      //     glyph.set("icon", String.fromCharCode(charCode));
      //     glyph.set("code", charCode.toString(16));
      //     console.log("666666666666",glyph);
      //     glyphs.push(glyph);
      //   }
      //   this.glyphs = glyphs;
      //   viewModel.set("glyphs", glyphs);
      //   console.log('xxxxxx',typeof(viewModel));

      //   page.bindingContext = viewModel;
      console.log('xxxxx', this.$icon);
      this.glyphs = this.$icon.glyphs;
      //page.bindingContext = this.$icon;
    },
    onButton: function() {}
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
.icons {
  font-family: 'icomoon';
  font-size: 48;
}
.icon {
  font-family: iconfont;
  font-size: 48;
}
</style>
