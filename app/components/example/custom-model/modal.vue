<template>
  <Page class="page">
    <ActionBarSecond :title="title" />
    <AbsoluteLayout class="mask-absolute">

      <ScrollView class="mask-scrollview">
        <StackLayout class="hello-world">
          <Button class="btn btn-primary -primary" @tap="modal" text="模态对话框" />
          <Button class="btn btn-primary -primary" @tap="btnActivity" text="活动对话框" />
        </StackLayout>
      </ScrollView>

      <StackLayout class="wrap" :class="classBackdrop">
        <FlexboxLayout flexDirection="column-reverse" class="mask-wrap-flex" justifyContent="space-around">
          <StackLayout alignSelf="center">
            <Image class="mask-img" :src="img" />
            <FIcon name="icon-close2" type="icon" class="icon mask-close" @tap="btnActivityClose" />
          </StackLayout>
        </FlexboxLayout>
      </StackLayout>
    </AbsoluteLayout>
  </Page>
</template>

<script>
import ModalComponent from './modal-component';
//import ModalActivity from './modal-activity';
import ActionBarSecond from '../public/action-bar-second';

export default {
  components: {
    ActionBarSecond
    //ModalActivity
  },
  data() {
    return {
      title: '模态对话框',
      img: '~/assets/images/example/custom-model/flower.png',
      isActive: false
    };
  },
  computed: {
    classBackdrop() {
      return this.isActive ? 'backdrop-visible' : 'backdrop-invisible';
    }
  },
  mounted() {},
  methods: {
    modal: function() {
      this.$showModal(ModalComponent);
    },
    btnActivity: function() {
      this.isActive = true;
    },
    btnActivityClose: function() {
      this.isActive = false;
    }
  }
};
</script>

<style scoped lang="scss">
.mask-absolute {
  .mask-scrollview {
    height: 100%;
    width: 100%;
  }
  .wrap {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(29, 30, 35, 0.9);
    .mask-wrap-flex {
      height: 100%;
      .mask-img {
        width: 200;
        left: 50;
      }
      .mask-close {
        margin-top: 15;
      }
    }
  }
  .backdrop-visible {
    animation-name: activateBackdrop;
    animation-duration: 0.25;
    animation-fill-mode: forwards;
  }

  .backdrop-invisible {
    animation-name: activateBackdrop;
    animation-duration: 0.25;
    animation-fill-mode: forwards;
    animation-direction: reverse;
  }
}

@keyframes activateBackdrop {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
