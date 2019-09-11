<template>
  <GridLayout rows="auto, *">
    <MyHeader row="0" col="0" />
    <ScrollView row="1" col="0" orientation="vertical" scrollBarIndicatorVisible="false">
      <StackLayout>
        <!-- <TabView :selectedIndex="selectedIndex">
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
    </TabView> -->

        <HeadPanel />
        <TaskPanel />
        <BindingPrompt />
        <InfoPanel />
        <InfoPanel />
        <Button class="btn setting-exit" text="退出当前账号"/>
      </StackLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import InfoPanel from '../settings/info-panel';
import HeadPanel from '../settings/head-panel';
import MyHeader from '../settings/my-header';
import TaskPanel from '../settings/task-panel';
import BindingPrompt from '../settings/binding-prompt';
import WriteArticle from '../settings/write-article';
import Swiper from '../settings/swiper';

export default {
  components: {
    InfoPanel,
    HeadPanel,
    MyHeader,
    TaskPanel,
    BindingPrompt,
    Swiper,
    WriteArticle
  },
  data() {
    return {
      title: '',
      msg: 'Hello World!'
    };
  },
  methods: {
    onButtonTap: function() {}
  }
};
</script>

<style scoped lang="scss">
.setting-exit{
  text-align: center;
  border-width: 1;
  border-color: #009100;
  color: #009100;
  padding:10;
  width:40%;
  border-radius:50%;
}
</style>
