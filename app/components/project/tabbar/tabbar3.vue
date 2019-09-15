<template>
  <TabView :selectedIndex="selectedIndex">
    <TabViewItem title="关注">
      <StackLayout>
        <GridLayout class="page" rows="auto, *">
          <ScrollView row="1">
            <StackLayout>
              <StackLayout>
                <StackLayout class="hr-light"></StackLayout>
                <Label text="care team" class="care-common-list-header text-uppercase t-14 p-l-15 p-t-30 p-b-7"></Label>
                <StackLayout class="hr-light"></StackLayout>
              </StackLayout>
              <GridLayout rows="auto, auto, auto" columns="auto, *, auto" class="p-t-10 p-l-15" (tap)="onContactTap(contact)">
                <Label row="0" rowSpan="2" col="0" class="connect-team-avatar p-5 m-r-10 m-y-auto text-center" text="contact.monogram"></Label>
                <Label row="0" col="1" text="contact.name" class="font-weight-bold"></Label>
                <Label row="1" col="1" text="contact.relation" class="text-muted m-b-10"></Label>
                <Label row="0" rowSpan="3" col="2" text=">" class="fa text-muted m-r-10 m-b-10 m-y-auto"></Label>
                <StackLayout row="2" colSpan="3" class="hr-light"></StackLayout>
              </GridLayout>
            </StackLayout>
          </ScrollView>
        </GridLayout>
      </StackLayout>
    </TabViewItem>
    <TabViewItem title="专题">
      <Label text="Content for Tab 2" />
    </TabViewItem>
    <TabViewItem title="连载">
      <Label text="Content for Tab 2" />
    </TabViewItem>
    <TabViewItem title="文集">
      <Label text="Content for Tab 2" />
    </TabViewItem>
  </TabView>
</template>

<script>
import Header from '../header';
import Footer from '../footer';

export default {
  props: {
    place: {
      type: Object
    }
  },
  data() {
    return {
      canBack: true,
      lorem: `Celeri discursantes optandi nobis nec praedam qui similes parvi aut similes umquam optandi poterat impetraverint si nobis rapiunt nec discursantes qui poterat rapacium nobis milvorum aut volatu nobis impetraverint impetraverint parvi momento volatu impetraverint qui celeri parvi nisi amici similes tamen optandi parvi discursantes impetraverint volatu non discursantes nisi.`
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
.image {
  background-size: cover;
}
.desc {
  text-justify: justify;
  font-size: 14;
  color: #545454;
  background-color: transparent;
  border-color: transparent;
}
.text {
  margin: 0 25;
  .title {
    margin-top: 8;
  }
  .desc {
    margin-top: 16;
  }
}
.actions {
  z-index: 10;
  left: 0;
  top: 170;
  padding: 0 25;
  .ac-btn {
    border-radius: 100%;
    margin-right: 8;
    background: linear-gradient(-45deg, #ff067f, #ff0154);
  }
  #star {
    opacity: 0;
    animation-name: bounceIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 0.75s;
  }
  #plus {
    opacity: 0;
    animation-name: bounceIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
}
.header {
  margin: 25 10 10;
  height: 32;
}
.footer {
  margin: 10 50 10;
  height: 32;
}
.head {
  padding: 0 25;
  margin-bottom: 25;
  margin-top: 16;
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 0.25s;
}
.title {
  color: #545454;
  font-size: 28;
  margin-bottom: 4;
}
.subTitle {
  color: #dadada;
  font-size: 20;
  margin-bottom: 10;
}
</style>