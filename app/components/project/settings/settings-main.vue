<template>
  <Page>
    <ActionBarSecond :title="title" />

    <GridLayout rows="auto, *">
      <ScrollView row="1">
        <StackLayout>
          <InfoPanel />
          <InfoPanel />
        </StackLayout>
      </ScrollView>
    </GridLayout>

  </Page>
</template>

<script>
import InfoPanel from './info-panel';
import ActionBarSecond from '../../example/public/action-bar-second';

export default {
  components: {
    InfoPanel,
    ActionBarSecond
  },
  data() {
    return {
      title: '设置',
      contact: {
        monogram: 'MR',
        name: 'Bil James',
        relation: 'Nurse'
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
