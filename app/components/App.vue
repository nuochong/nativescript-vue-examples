<template>
  <Page loaded="pageLoaded" ref="page">
    <ActionBar class="action-bar" title="Welcome to NativeScript-Vue!">
      <ActionItem @tap="onTapEdit" v-show="!isEditing" ios.systemIcon="2" ios.position="right" android.systemIcon="ic_menu_edit" />
      <ActionItem @tap="onTapSave" v-show="isEditing" ios.systemIcon="3" ios.position="right" android.systemIcon="ic_menu_save" />
      <ActionItem @tap="onTapCancel" v-show="isEditing" ios.systemIcon="1" android.systemIcon="ic_menu_close_clear_cancel" />
    </ActionBar>
    <ScrollView>
      <!--<GridLayout colums="*" rows="*">-->
      <StackLayout>
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="Button" @tap="onButtonTap" />
        <Button class="btn btn-primary" text="Base Function" @tap="onButtonBase" />
        <Button class="btn btn-primary" text="input" @tap="onInput" />
        <Button class="btn btn-primary" text="Fab" @tap="onFab" />
        <Button class="btn btn-primary" text="ToDo" @tap="onTodo" />
        <Button class="btn btn-primary" text="Drawer" @tap="onDrawer" />
        <Label text="111" class="icon" />
      </StackLayout>
      <!--</GridLayout>-->

      <ListView for="item in glyphs">
        <v-template>
          <!-- Shows the list item label in the default color and style. -->
          <Label :text="item.icon" class="icon"/>
        </v-template>
      </ListView>

    </ScrollView>
  </Page>
</template>

<script>
import HelloWorld from "./hello";
import Home from "./base/Home";
import Input from "./Input";
import Fab from "./Fab";
import Todo from "./todo/todo";
import Drawer from "./drawer";
var observable = require("tns-core-modules/data/observable");
export default {
  data() {
    return {
      msg: "Hello World!",
      glyphs: [],
    };
  },
  mounted() {
    this.pageLoaded();
  },
  methods: {
    pageLoaded: function(args) {
      //ar page = args.object;
      var page = this.$refs.page.nativeView;
      var viewModel = new observable.Observable();
      var glyphs = new Array();
      var charCode = 0xe900;
      for (; charCode <= 0xe902; charCode++) {
        var glyph = new observable.Observable();
        glyph.set("icon", String.fromCharCode(charCode));
        glyph.set("code", charCode.toString(16));
        glyphs.push(glyph);
        console.log("666666666666");
      }
      this.glyphs = glyphs;
      //viewModel.set("glyphs", glyphs);

      page.bindingContext = viewModel;
    },
    onDrawer: function() {
      this.$navigateTo(Drawer);
    },
    onTapEdit: function() {
      console.log("xxxx");
    },
    onButtonTap: function() {
      console.log("xxxxx");
      this.$navigateTo(HelloWorld, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn" //spring
        }
      });
    },
    onButtonBase: function() {
      this.$navigateTo(Home, {
        animated: true,
        transition: {
          name: "fade",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    onInput: function() {
      this.$navigateTo(Input, {
        animated: true,
        transition: {
          name: "fade",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    onFab: function() {
      this.$navigateTo(Fab, {
        animated: true,
        transition: {
          name: "fade",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    onTodo: function() {
      this.$navigateTo(Todo, {
        animated: true,
        transition: {
          name: "fade",
          duration: 380,
          curve: "easeIn"
        }
      });
    }
  }
};
console.log("xxxxxxxxx");
function pageLoaded(args) {
  console.log("666666666666");
  var page = args.object;
  var viewModel = new observable.Observable();
  var glyphs = new Array();
  var charCode = 0xe900;
  for (; charCode <= 0xe902; charCode++) {
    var glyph = new observable.Observable();
    glyph.set("icon", String.fromCharCode(charCode));
    glyph.set("code", charCode.toString(16));
    glyphs.push(glyph);
  }
  viewModel.set("glyphs", glyphs);
  page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
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
.icon {
  font-family: "icomoon";
  font-size: 48;
}
</style>
