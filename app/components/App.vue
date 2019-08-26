<template>
  <Page>
    <ActionBar class="action-bar" title="Welcome to NativeScript-Vue!">
      <ActionItem
        @tap="onTapEdit"
        v-show="!isEditing"
        ios.systemIcon="2"
        ios.position="right"
        android.systemIcon="ic_menu_edit"
      />
      <ActionItem
        @tap="onTapSave"
        v-show="isEditing"
        ios.systemIcon="3"
        ios.position="right"
        android.systemIcon="ic_menu_save"
      />
      <ActionItem
        @tap="onTapCancel"
        v-show="isEditing"
        ios.systemIcon="1"
        android.systemIcon="ic_menu_close_clear_cancel"
      />
    </ActionBar>
    <ScrollView>
      <!--<GridLayout colums="*" rows="*">-->
      <StackLayout>
        <Label class="message" :text="msg" col="0" row="0" />
        <Button class="btn btn-primary" text="示例" @tap="example" />
        <Button class="btn btn-primary dd" text="应用" @tap="project" />
      </StackLayout>
      <!-- </GridLayout> -->
    </ScrollView>
  </Page>
</template>

<script>
import example from './example/Main';
import project from './project/Main';

export default {
  data() {
    return {
      msg: 'Hello World!'
    };
  },
  mounted() {},
  methods: {
    example: function() {
      this.$navigateTo(example);
    },
    project: function() {
      this.$navigateTo(project);
      console.log('project');
    },
    onButtonTap: function() {
      this.$navigateTo(HelloWorld, {
        animated: true,
        transition: {
          name: 'slide',
          duration: 380,
          curve: 'easeIn'
        }
      });
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
