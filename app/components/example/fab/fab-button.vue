<template>
  <StackLayout class="fab-button" @tap="$emit('onButtonTap')" @touch="onButtonTouch">
    <GridLayout rows="2, auto" horizontalAlignment="center" class="fab-icon" :class="buttonAnimation">
      <Label row="1" class="fab-dash--1" />
      <Label row="1" class="fab-dash--2" />
    </GridLayout>
  </StackLayout>
</template>


<script>
export default {
  props: {
    isActive: Boolean
  },
  computed: {
    buttonAnimation() {
      return this.isActive ? 'iconActive' : 'iconIdle';
    }
  },
  methods: {
    onButtonTouch(args) {
      this.$emit('onButtonTouch', args);
    }
  }
};
</script>

<style scoped lang="scss">
.fab-button {
  width: 56;
  height: 56;
  background-color: orangered;
  border-radius: 28;
  vertical-align: center;
}

.fab-icon {
  height: 16;
  width: 16;
}

.fab-dash--1,
.fab-dash--2 {
  background-color: #fff;
  transform: translate(0, -2);
  height: 16;
  width: 3;
}

.fab-dash--1 {
  transform: rotate(90deg) translate(0, -2);
}

.iconActive {
  animation-name: iconActive;
  animation-duration: 0.25;
  animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  animation-fill-mode: forwards;
}

.iconIdle {
  animation-name: iconActive;
  animation-duration: 0.25;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-direction: reverse;
}

@keyframes iconActive {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(225deg);
  }
}
</style>