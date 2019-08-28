<template>
  <GridLayout>
    <!-- Main Content (default slot) -->
    <slot />

    <Label
      v-show="backdropVisible"
      ref="backDrop"
      opacity="0"
      :backgroundColor="optionsInternal.backdropColor"
      @tap="close()"
    />

    <template v-for="(side,index) in computedSidesEnabled">
      <!-- Drawer Content -->
      <GridLayout
        @layoutChanged="onDrawerLayoutChange(side)"
        @tap="noop"
        :ref="`${side}Drawer`"
        :style="computedDrawerStyle(side)"
        opacity="0"
        :key="index"
      >
        <slot :name="side" />
      </GridLayout>
      <!-- Open Trigger -->
    </template>
  </GridLayout>
</template>

<script>
import * as utils from 'tns-core-modules/utils/utils';
import mergeOptions from 'merge-options';
// import { defaultOptions } from './index';

export default {
  model: {
    prop: 'state',
    event: 'stateChange'
  },
  props: {
    enabled: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      required: false
    },
    state: {
      type: [String, Boolean],
      default: false
    }
  },
  watch: {
    async state(side) {
      if (this.computedOpenSide !== side) {
        await this.close();
      }
      if (side) {
        this.open(side);
      }
    },
    options: {
      handler(options) {
        this.optionsInternal = mergeOptions(defaultOptions, options);
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      // handled by the watcher
      optionsInternal: {},
      sides: {
        bottom: {
          open: false,
          translationOffset: 0
        }
      },
      backdropVisible: false,
      isAnimating: false,
      isPanning: false
    };
  },
  computed: {
    computedSidesEnabled() {
      console.log('computedSidesEnabled');
      const validSides = Object.keys(this.sides);
      return Object.keys(this.$slots).filter(slotName => validSides.includes(slotName));
    },
    computedDrawerStyle() {
      console.log('computedDrawerStyle');
      return side => ({
        transform: `translate${this.optionsInternal[side].axis}(${this.sides[side].open ? 0 : this.sides[side].translationOffset})`,
        ...(this.optionsInternal[side].width ? { width: this.optionsInternal[side].width } : {}),
        ...(this.optionsInternal[side].height ? { height: this.optionsInternal[side].height } : {}),
        backgroundColor: this.optionsInternal[side].backgroundColor,
        [this.optionsInternal[side].axis === 'X' ? 'horizontalAlignment' : 'verticalAlignment']: side
      });
    },
    computedOpenSide() {
      console.log('computedOpenSide');
      return this.computedSidesEnabled.find(side => this.sides[side].open) || false;
    }
  },
  methods: {
    noop() {
      // helper for catching events that we don't want to pass through.
    },
    async open(side = null) {
      //active
      console.log('open');
      if (!side) {
        if (!this.computedSidesEnabled.length) {
          throw new Error('No sides are enabled, at least one side must be enabled to open the drawer');
        }
        side = this.computedSidesEnabled[0];
      }

      if (!this.computedSidesEnabled.includes(side)) {
        return;
      }

      if (this.isPanning || this.isAnimating) {
        return;
      }

      this.isPanning = false;
      this.isAnimating = true;
      this.backdropVisible = true;

      const duration = this.optionsInternal[side].animation.openDuration;

      this.$refs.backDrop.nativeView.animate({
        opacity: 1,
        duration
      });
      this.$refs[`${side}Drawer`][0].nativeView.animate({
        opacity: 1,
        duration
      });

      this.sides[side].open = true;
      this.isAnimating = false;
      this.$emit('stateChange', side);
    },
    async close(side = null) {
      //active
      console.log('close');
      if (this.isAnimating) {
        return;
      }
      if (!side) {
        side = this.computedOpenSide;
      }
      if (!side) {
        return;
      }

      this.isPanning = false;
      this.isAnimating = true;

      const duration = this.optionsInternal[side].animation.closeDuration;

      await this.$refs.backDrop.nativeView.animate({
        opacity: 0,
        duration
      });
      this.$refs[`${side}Drawer`][0].nativeView.animate({
        opacity: 0,
        duration
      });
      this.sides[side].open = false;
      this.backdropVisible = false;
      this.isAnimating = false;
      this.$emit('stateChange', false);
    },
    onDrawerLayoutChange(side) {
      //active  四次
      console.log('onDrawerLayoutChange');
      const view = this.$refs[`${side}Drawer`][0].nativeView;
      this.sides[side].translationOffset =
        this.optionsInternal[side].translationOffsetMultiplier *
        utils.layout.toDeviceIndependentPixels(this.optionsInternal[side].axis === 'X' ? view.getMeasuredWidth() : view.getMeasuredHeight());
    }
  }
};
</script>
