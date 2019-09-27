<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <GridLayout columns="*" rows="auto,*">
      <Button text="View Multi Template" @tap="goToMulti"></Button>
      <Accordion row="1" for="item of items">

        <v-template name="header">
          <StackLayout height="100">
            <Label backgroundColor="green" :text="item.headerText"></Label>
          </StackLayout>
        </v-template>

        <v-template name="title">
          <GridLayout backgroundColor="white">
            <Label height="100%" :text="item.title"></Label>
          </GridLayout>
        </v-template>

        <v-template name="content">
          <GridLayout rows="auto,auto">
            <Image height="300" decodeWidth="300" decodeHeight="300" loadMode="async" :src="item.image"></Image>
            <Label row="1" :text="item.text"></Label>
          </GridLayout>
        </v-template>

        <v-template name="footer">
          <StackLayout>
            <Label backgroundColor="yellow" :text="item.footerText"></Label>
          </StackLayout>
        </v-template>
      </Accordion>
    </GridLayout>
  </Page>
</template>

<script>
import Multi from './Multi';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      items: [
        {
          title: '1',
          footer: '10',
          headerText: 'First',
          footerText: '4',
          image: 'http://placehold.it/120x120&text=First',
          items: [
            { image: '~/assets/images/accordion/a9ff17db85f8136619feb0d5a200c0e4.png', text: 'Stop' },
            {
              text: 'Drop',
              image: '~/assets/images/accordion/shazam.jpg'
            }
          ]
        },
        {
          title: '2',
          footer: '20',
          headerText: 'Second',
          footerText: '5',
          image: 'http://placehold.it/120x120&text=Second',
          items: [
            {
              text: 'Drop',
              image: '~/assets/images/accordion/batman.jpg'
            },
            { text: 'Drop', image: '~/images/f29.png' }
          ]
        },
        {
          title: '3',
          footer: '30',
          headerText: 'Third',
          footerText: '6',
          image: 'http://placehold.it/120x120&text=Third',
          items: [
            { text: 'Drop', image: '~/assets/images/accordion/strider.png' },
            {
              text: 'Drop',
              image: '~/assets/images/accordion/f29.png'
            }
          ]
        }
      ]
    };
  },
  methods: {
    goToMulti: function() {
      this.$navigateTo(Multi);
    }
  }
};
</script>

<style scoped lang="scss">
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
