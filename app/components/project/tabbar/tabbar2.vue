<template>
  <WrapLayout
    height="415"
    class="card"
    flexDirection="column"
    justifyContent="center"
    :class="{'active':(index == active), 'inactive':(index != active)}"
    @tap="goToPlace(place)"
  >
    <AbsoluteLayout width="56%" height="80%" class="ll" alignSelf="center">
      <Image src="~/assets/icons/box-shadow.png" width="100%" height="97%" class="background" />
      <FlexboxLayout flexDirection="column" width="100%" height="97%" padding="12">
        <StackLayout orientation="vertical" class="head">
          <Label :text="place.name" class="title bold" />
          <Label :text="place.type" class="subTitle semi-bold" horizontalAlignment="center" />
          <FlexboxLayout flexDirection="row" height="12" marginTop="4">
            <Image
              src="~/assets/icons/Star-Red.png"
              v-for="star in place.stars"
              :key="star"
              marginRight="4"
            />
            <Image
              src="~/assets/icons/Star-grey.png"
              v-for="star in (5 - place.stars)"
              :key="(star * 10)"
              marginRight="4"
            />
          </FlexboxLayout>
        </StackLayout>
        <StackLayout
          orientation="vertical"
          :backgroundImage="'~/assets/media/' + place.media"
          height="58%"
          width="100%"
          class="img"
        ></StackLayout>
      </FlexboxLayout>
    </AbsoluteLayout>
  </WrapLayout>
</template>
<script>
//import Place from "./Place";

export default {
  props: {
    place: {
      type: Object
    },
    index: {
      type: Number
    },
    active: {
      type: Number
    }
  },
  mounted() {},
  methods: {
    goToPlace(place) {
      console.log('card');
      // this.$navigateTo(Place, {
      //     props: {
      //         place: place
      //     }
      // });
    }
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.ll {
  background-color: black;
}
.card .background {
  background-color: green;
  transform: scale(1.05);
  opacity: 0.75;
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

.card {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(0.85);
  background-color: yellowgreen;
  vertical-align: center;
  margin-bottom: 0;
}

.card.active {
  animation-name: highlight;
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
}

.card.inactive {
  animation-name: downlight;
  animation-duration: 0.25s;
  animation-fill-mode: backwards;
}

.card .head {
  border-radius: 14 14 0 0;
  background: #ffffff;
  padding: 12;
}

.card .img {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 0 14 14;
}

.card .title {
  color: #545454;
  font-size: 18;
}

.card .subTitle {
  color: #dadada;
  font-size: 16;
}
</style>