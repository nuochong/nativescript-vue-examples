<template>
  <WrapLayout height="345" class="card" flexDirection="column" justifyContent="center" :class="{'active':(index == active), 'inactive':(index != active)}">
    <AbsoluteLayout width="100%" height="100%" alignSelf="center">
      <Image src="~/assets/images/project/box-shadow.png" width="100%" height="100%" />
      <FlexboxLayout flexDirection="column" width="100%" height="98%" padding="10">
        <StackLayout orientation="vertical" class="head">
          <Label :text="place.name" class="title bold" />
          <Label :text="place.type" class="subTitle semi-bold" horizontalAlignment="center" />
          <FlexboxLayout flexDirection="row" height="12" marginTop="4">
            <Image src="~/assets/images/project/Star-Red.png" v-for="star in place.stars" :key="star" marginRight="4" />
            <Image src="~/assets/images/project/Star-grey.png" v-for="star in (5 - place.stars)" :key="(star * 10)" marginRight="4" />
          </FlexboxLayout>
        </StackLayout>
        <StackLayout orientation="vertical" :backgroundImage="'~/assets/images/project/media/' + place.media" height="65%" width="100%" class="img" />
      </FlexboxLayout>
    </AbsoluteLayout>
  </WrapLayout>
</template>

<script>
export default {
  props: {
    place: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goToPlace(place) {
      console.log('card');
    }
  }
};
</script>

<style scoped lang="scss">
.semi-bold {
  font-family: 'Assistant-SemiBold', 'Assistant SemiBold';
  font-weight: 600;
}
.card {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(0.85);
  //background-color: green;
  vertical-align: center;
  margin-bottom: 0;
  .background {
    //background-color: blue;
    transform: scale(1.05);
    opacity: 0.75;
  }
  &.active {
    animation-name: highlight;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
  }
  &.inactive {
    animation-name: downlight;
    animation-duration: 0.25s;
    animation-fill-mode: backwards;
  }
  .head {
    border-radius: 14 14 0 0;
    background: #ffffff;
    padding: 12;
  }
  .img {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 0 14 14;
  }
  .title {
    color: #545454;
    font-size: 18;
  }
  .subTitle {
    color: #dadada;
    font-size: 16;
  }
}

@keyframes highlight {
  from {
    transform: scale(0.85);
  }
  to {
    transform: scale(1);
  }
}

@keyframes downlight {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.85);
  }
}
</style>