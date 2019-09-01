<template>
  <StackLayout id="home">
    <!-- <Label textWrap="true" text="Hello John !" class="h1 align-center extra-bold" /> -->
    <!-- <Button width="30" height="5" class="hr" />
        <Label textWrap="true" text="Which city are you looking for today ?"
    class="h2 align-center bold" />-->
    <!-- <AbsoluteLayout width="80" height="80" class="search-btn" >
            <Image src="~/assets/images/project/Search.png" left="28" top="25" width="25"
                height="25" class="icon" />
            <Button class="background" left="0" top="0" width="100%" height="100%"
                />
    </AbsoluteLayout>-->

    <!-- <Label textWrap="true" text="Make a research" class="h3 description-label align-center semi-bold" /> -->
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },

  methods: {
    toggleSearch() {
      console.log('CLICK');
    }
  }
};
</script>

<style scoped lang="scss">
.extra-bold {
  font-family: 'Assistant-ExtraBold', 'Assistant ExtraBold';
  font-weight: 800;
}
#home {
  animation-name: bounceIn;
  .hr {
    background: linear-gradient(-45deg, #ff067f, #ff0154);
    border-radius: 16px;
    margin-bottom: 25;
    opacity: 0;
    animation-name: bounceIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
  .h1 {
    font-size: 40;
    margin-bottom: 25;
    opacity: 0;
    animation-name: fadeInDown;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
  .h2 {
    font-size: 18;
    margin-bottom: 25;
    opacity: 0;
    animation-name: fadeInUp;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
  .h3 {
    color: #dadada;
  }
  .search-btn {
    opacity: 0;
    animation-name: bounceIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    margin-bottom: 25;
    margin-top: 25;
    .icon {
      opacity: 0;
      animation-name: bounceIn;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      animation-delay: 1.25s;
      z-index: 100000;
    }
    .background {
      width: 100;
      height: 100;
      border-radius: 16;
      background: linear-gradient(-45deg, #ff067f, #ff0154);
    }
  }
  .description-label {
    opacity: 0;
    animation-name: bounceIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
    margin-bottom: 15;
  }
}
#home.h1,
#home .h2 {
  color: #545454;
}
</style>