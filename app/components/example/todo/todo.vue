<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <TabView height="100%">
      <TabViewItem title="要做" class="tabview">
        <!-- Positions an input field, a button, and the list of tasks in a vertical stack. -->
        <StackLayout orientation="vertical" width="100%" height="100%">
          <GridLayout columns="2*,*" rows="*" width="100%" height="25%">
            <TextField class="text-field-white" col="0" row="0" v-model="textFieldValue" hint="添加新任务..." editable="true" @returnPress="onButtonTap" />
            <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <Button class="btn" col="1" row="0" text="添加任务" @tap="onButtonTap" />
          </GridLayout>

          <ListView class="list-group" for="todo in todos" @itemTap="onItemTap" style="height:75%">
            <v-template>
              <Label :text="todo.name" class="label-white list-group-item-heading" />
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="完成" class="tabview">
        <ListView class="list-group" for="done in dones" @itemTap="onDoneTap" style="height:75%">
          <v-template>
            <Label :text="done.name" class="label-white list-group-item-heading" />
          </v-template>
        </ListView>
      </TabViewItem>
    </TabView>
  </Page>
</template>
<style scoped lang="scss">
.btn {
  border: 1px;
  color: black;
  font-size: 14px;
}
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}
.description-label {
  margin-bottom: 15;
}
.tabview {
  background-color: red;
}
</style>
<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '备忘录',
      dones: [],
      todos: [],
      textFieldValue: ''
    };
  },
  methods: {
    onItemTap: function(args) {
      action('您想对这个任务做什么?', '取消', ['完成任务', '永久删除']).then(result => {
        console.log(result); // Logs the selected option for debugging.
        switch (result) {
          case '完成任务':
            this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
            this.todos.splice(args.index, 1); // Removes the tapped active  task.
            break;
          case '永久删除':
            this.todos.splice(args.index, 1); // Removes the tapped active task.
            break;
          case '取消' || undefined: // Dismisses the dialog
            break;
        }
      });
    },

    onDoneTap: function(args) {
      action('您想对这个任务做什么?', '取消', ['移动到未完成', '永远删除']).then(result => {
        console.log(result); // Logs the selected option for debugging.
        switch (result) {
          case '移动到未完成':
            this.todos.unshift(args.item); // Places the tapped completed task at the top of the to do tasks.
            this.dones.splice(args.index, 1); // Removes the tapped completed task.
            break;
          case '永远删除':
            this.dones.splice(args.index, 1); // Removes the tapped completed task.
            break;
          case '取消' || undefined: // Dismisses the dialog
            break;
        }
      });
    },

    onButtonTap() {
      console.log('增加了新任务: ' + this.textFieldValue + '.'); // Logs the newly added task in the console for debugging.
      this.todos.unshift({
        name: this.textFieldValue
      }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ''; // Clears the text field so that users can start adding new tasks immediately.
    }
  }
};
</script>

