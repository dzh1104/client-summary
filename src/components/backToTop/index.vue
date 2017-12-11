<style lang="scss" scoped>
.m-back-to-top {
  position: fixed;
  display: inline-block;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
}
</style>

<template>
	<transition :name="transitionName">
		<div 
			class="m-back-to-top f-cur"
			@click="backToTop"
			v-show="visible"
			:style="customStyle"
		>
			<i class="el-icon-caret-top"></i>
		</div>
	</transition>
</template>

<script>
export default {
  props: {
    transitionName: {
      type: String,
      default: "fade"
		},
		visibilityHeight: {
      type: Number,
      default: 400
		},
		backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default() {
        return {
          right: "100px",
          bottom: "150px",
          width: "40px",
          height: "40px",
          "line-height": "45px",
          color: "#409eff",
          "border-radius": "20px",
          background: "#fff"
        };
      }
    }
  },
  data() {
    return {
      visible: false,
      interval: null
    };
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight;
    },
    backToTop() {
      const start = window.pageYOffset;
      let i = 0;
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500));
        if (next <= this.backPosition) {
          window.scrollTo(0, this.backPosition);
          clearInterval(this.interval);
        } else {
          window.scrollTo(0, next);
        }
        i++;
      }, 16.7);
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  },
  mounted() {
		$('.m-back-to-top').on('scroll', this.handleScroll);
    // window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    $('.m-back-to-top').on('scroll', this.handleScroll);
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
};
</script>

