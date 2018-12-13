<template>
  <Page>
    <ActionBar class="action-bar" title="Welcome to NativeScript-Vue!">
      <ActionItem @tap="onTapEdit" v-show="!isEditing" ios.systemIcon="2" ios.position="right" android.systemIcon="ic_menu_edit" />
      <ActionItem @tap="onTapSave" v-show="isEditing" ios.systemIcon="3" ios.position="right" android.systemIcon="ic_menu_save" />
      <ActionItem @tap="onTapCancel" v-show="isEditing" ios.systemIcon="1" android.systemIcon="ic_menu_close_clear_cancel" />
    </ActionBar>
    <ScrollView>
      <!--<GridLayout colums="*" rows="*">-->
      <StackLayout>
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="路由跳转" @tap="onButtonTap" />
        <Button class="btn btn-primary" text=" 基础示例" @tap="onButtonBase" />
        <Button class="btn btn-primary" text="input" @tap="onInput" />
        <Button class="btn btn-primary" text="Fab" @tap="onFab" />
        <Button class="btn btn-primary" text="ToDo" @tap="onTodo" />
        <Button class="btn btn-primary" text="Drawer" @tap="onDrawer" />
        <Button class="btn btn-primary" text="Icon" @tap="onIcon" />
        <Button class="btn btn-primary" text="mask" @tap="onMask" />
        <Button class="btn btn-primary m-t-20" text="Open Modal" @tap="showModal" />
        <Button class="btn btn-primary m-t-20" text="drawer" @tap="onDrawers" />
        <Button class="btn btn-primary m-t-20" text="iOS NavigationBar with Large Title" @tap="onlargeTitle" />
      </StackLayout>

      <!-- </GridLayout> -->

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
import Icon from "./icon";
import Mask from "./mask";
import ModalComponent from "./customModel/ModalComponent";
import Drawers from "./MultiDrawer/drawer";
import LargeTitle from "./largeTitle/largeTitle";

export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  mounted() {},
  methods: {
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
    },
    onIcon: function() {
      this.$navigateTo(Icon);
    },
    onMask: function() {
      console.log("遮罩层");
      this.$navigateTo(Mask);
    },
    showModal() {
      console.dir("xxxxxx", this);
      this.$showModal(ModalComponent);
    },
    onDrawers() {
      this.$navigateTo(Drawers);
    },
    onlargeTitle(){
      this.$navigateTo(LargeTitle);
    }
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
</style>
