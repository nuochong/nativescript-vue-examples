<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <StackLayout>
      <Label text="Hello world !" />
      <!-- <Button class="btn btn-primary" text="Get from URL" @tap="axiosGet" /> -->
      <Button class="btn btn-primary" text="Post JSON" @tap="axiosPost" />

      <Label textWrap="true">
        <FormattedString>
          <Span text="Data :" />
          <Span :text="data" />
        </FormattedString>
      </Label>
    </StackLayout>
  </Page>
</template>

<script>
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: 'NSVue Axios'
    };
  },
  methods: {
    // axiosGet() {
    //   this.axios
    //     .get('https://httpbin.org/get')
    //     .then(response => {
    //       console.dir(response.data);
    //       this.data = JSON.stringify(response.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    axiosPost() {
      this.axios
        .post('https://www.easy-mock.com/mock/5d60c006f81908124e0fcc23/example/upload', {
          headers: { 'Content-Type': 'application/json' },
          body: {
            foo: 'bar',
            one: 'two'
          }
        })
        .then(response => {
          console.dir(response.data);
          this.data = JSON.stringify(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

