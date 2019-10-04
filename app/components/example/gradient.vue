<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <ScrollView>
      <StackLayout class="hello-world">
        <Gradient direction="to right" colors="#FF0077, red, #FF00FF">
          <Label class="p-20 c-white" horizontalAlignment="center" text="My gradients are the best." textWrap="true"></Label>
          <Label class="p-10 c-white" horizontalAlignment="center" text="It's true." textWrap="true"></Label>
        </Gradient>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import ActionBarSecond from './public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '渐变'
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
