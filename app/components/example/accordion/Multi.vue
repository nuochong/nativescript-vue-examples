<template>
  <Page class="page">
    <ActionBarSecond :title="title" />

    <GridLayout columns="*" rows="auto,auto,*">
      <Button class="btn btn-primary" row="0" text="Expand All" @tap="expandAll"></Button>
      <Button class="btn btn-primary" row="1" text="Collapse All" @tap="collapseAll"></Button>
      <Accordion row="2" height="100%" ref="accordion" allowMultiple="true" childItems="children" for="item of items">
        <v-template if="$odd" name="header-odd">
          <StackLayout>
            <Label class="label-white" backgroundColor="green" :text="item.headerText"></Label>
          </StackLayout>
        </v-template>

        <v-template if="$even" name="header-even">
          <StackLayout>
            <Label class="label-white" backgroundColor="orange" :text="item.headerText"></Label>
          </StackLayout>
        </v-template>

        <v-template if="$odd" name="title-odd">
          <StackLayout backgroundColor="white">
            <Label class="label-white" :text="item.title"></Label>
          </StackLayout>
        </v-template>

        <v-template if="$even" name="title-even">
          <StackLayout backgroundColor="white">
            <Label class="label-white" :text="item.title"></Label>
            <Image height="50" decodeWidth="50" decodeHeight="50" loadMode="async" :src="item.image"></Image>
          </StackLayout>
        </v-template>

        <v-template if="$odd" name="content-odd">
          <StackLayout>
            <Image height="100" decodeWidth="100" decodeHeight="100" loadMode="async" :src="item.image"></Image>
            <Label class="label-white" height="200" :text="item.text"></Label>
          </StackLayout>
        </v-template>

        <v-template if="$even" name="content-even">
          <StackLayout backgroundColor="red">
            <Image height="100" decodeWidth="100" decodeHeight="100" loadMode="async" :src="item.image"></Image>
            <Label class="label-white" backgroundColor="yellow" :text="item.text"></Label>
          </StackLayout>
        </v-template>

        <v-template if="$odd" name="footer-odd">
          <StackLayout backgroundColor="yellow">
            <Label class="label-white" :text="item.footerText"></Label>
          </StackLayout>
        </v-template>

        <v-template if="$even" name="footer-even">
          <StackLayout backgroundColor="blue">
            <Label class="label-white" :text="item.footerText"></Label>
          </StackLayout>
        </v-template>
      </Accordion>
    </GridLayout>

  </Page>
</template>

<script>
import Multi from './multi';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
  },
  data() {
    return {
      title: '手风琴',
      items: [
        {
          title: '1 Title',
          footer: '10',
          headerText: 'First',
          footerText: '4',
          image: 'http://placehold.it/120x120&text=First',
          children: [
            { image: '~/assets/images/accordion/a9ff17db85f8136619feb0d5a200c0e4.png', text: 'Someone' },
            {
              text: 'Help',
              image: '~/assets/images/accordion/svg.jpg'
            }
          ]
        },
        {
          title: '2 Title',
          footer: '20',
          headerText: 'Second',
          footerText: '5',
          image: 'http://placehold.it/120x120&text=Second',
          children: [
            {
              text: 'Me',
              image: '~/assets/images/accordion/shazam.jpg'
            },
            { text: 'Stop', image: '~/assets/images/accordion/f29.png' }
          ]
        },
        {
          title: '3 Title',
          footer: '30',
          headerText: 'Third',
          footerText: '6',
          image: 'http://placehold.it/120x120&text=Third',
          children: [
            { text: 'This', image: '~/assets/images/accordion/a9ff17db85f8136619feb0d5a200c0e4.png' },
            {
              text: 'Thing',
              image: '~/assets/images/accordion/shazam.jpg'
            }
          ]
        },
        {
          title: '4 Title',
          footer: '40',
          headerText: 'Fourth',
          footerText: '7',
          image: 'http://placehold.it/120x120&text=Fourth',
          children: [
            { text: 'Now', image: '~/assets/images/accordion/batman.png' },
            {
              text: 'Please',
              image: '~/assets/images/accordion/batman.jpg'
            }
          ]
        }
      ]
    };
  },
  methods: {
    goToMulti: function() {
      this.$navigateTo(Multi);
    },
    goBack: function() {
      this.$navigateBack();
    },
    expandAll: function() {
      this.$refs.accordion.nativeView.expandAll();
    },
    collapseAll: function() {
      this.$refs.accordion.nativeView.collapseAll();
    }
  }
};
</script>

<style scoped lang="scss">
.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>