<template>
  <Page class="page">
    <me-actionbar :title="'备忘录'"></me-actionbar>

    <TabView height="100%">
      <TabViewItem title="To Do" class="tabview">
        <!-- Positions an input field, a button, and the list of tasks in a vertical stack. -->
        <StackLayout orientation="vertical" width="100%" height="100%">
          <GridLayout columns="2*,*" rows="*" width="100%" height="25%">
            <TextField
              col="0"
              row="0"
              v-model="textFieldValue"
              hint="Type new task..."
              editable="true"
              @returnPress="onButtonTap"
            />
            <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <Button class="btn" col="1" row="0" text="Add task" @tap="onButtonTap" />
          </GridLayout>

          <ListView class="list-group" for="todo in todos" @itemTap="onItemTap" style="height:75%">
            <v-template>
              <Label :text="todo.name" class="list-group-item-heading" />
            </v-template>
          </ListView>
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Completed" class="tabview">
        <ListView class="list-group" for="done in dones" @itemTap="onDoneTap" style="height:75%">
          <v-template>
            <Label :text="done.name" class="list-group-item-heading" />
          </v-template>
        </ListView>
      </TabViewItem>
    </TabView>
  </Page>
</template>
<style scoped>
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
import meActionbar from '../public/actionbar';
export default {
  components: {
    meActionbar
  },
  methods: {
    onItemTap: function(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever']).then(result => {
        console.log(result); // Logs the selected option for debugging.
        switch (result) {
          case 'Mark completed':
            this.dones.unshift(args.item); // Places the tapped active task at the top of the completed tasks.
            this.todos.splice(args.index, 1); // Removes the tapped active  task.
            break;
          case 'Delete forever':
            this.todos.splice(args.index, 1); // Removes the tapped active task.
            break;
          case 'Cancel' || undefined: // Dismisses the dialog
            break;
        }
      });
    },

    onDoneTap: function(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever']).then(result => {
        console.log(result); // Logs the selected option for debugging.
        switch (result) {
          case 'Mark to do':
            this.todos.unshift(args.item); // Places the tapped completed task at the top of the to do tasks.
            this.dones.splice(args.index, 1); // Removes the tapped completed task.
            break;
          case 'Delete forever':
            this.dones.splice(args.index, 1); // Removes the tapped completed task.
            break;
          case 'Cancel' || undefined: // Dismisses the dialog
            break;
        }
      });
    },

    onButtonTap() {
      console.log('New task added: ' + this.textFieldValue + '.'); // Logs the newly added task in the console for debugging.
      this.todos.unshift({
        name: this.textFieldValue
      }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ''; // Clears the text field so that users can start adding new tasks immediately.
    }
  },

  data() {
    return {
      dones: [],
      todos: [],
      textFieldValue: ''
    };
  }
};
</script>

