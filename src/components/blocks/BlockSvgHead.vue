<template>
  <div class="svg-head d-center" ref="containerRef">
    <svg
      class="svg-head__img"
      width="873"
      height="1034"
      viewBox="0 0 873 1034"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="handleClick"
    >
      <path
        id="back-hair"
        d="M419.468 36.3472C538.32 36.3472 631.968 95.5 666.968 225L672.968 261.542L697.968 609C697.968 609 555.968 716.081 419.468 716.081C282.968 716.081 173.468 609 173.468 609L203.968 261.542H203.97C204.237 137.122 300.616 36.3472 419.468 36.3472Z"
        fill="#8BC33C"
        :style="layerStyles.back"
      />
      <mask
        id="mask0_518_229"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="711"
        width="873"
        height="323"
      >
        <path
          d="M231.468 807C298.268 778.6 316.468 731.167 317.968 711H534.468C546.801 727.5 552.823 783.832 601.968 807C671.968 840 759.468 807 814.468 840C869.468 873 879.468 985.5 868.468 1033.5H4.46803C-7.53196 984 3.29005 870.383 53.4681 840C107.968 807 153.848 840 231.468 807Z"
          fill="#F5E7D8"
        />
      </mask>
      <g id="body" mask="url(#mask0_518_229)">
        <path
          d="M231.468 807C298.268 778.6 316.468 731.167 317.968 711H534.468C534.468 731.5 552.823 783.832 601.968 807C671.968 840 759.468 807 814.468 840C869.468 873 885.968 958 874.968 1006H6.46801C-5.53198 956.5 3.28997 870.383 53.468 840C107.968 807 153.848 840 231.468 807Z"
          fill="#F4D1B2"
        />
        <path
          d="M915.468 1053.5H-41.532V756.5H200.865C225.192 863.789 316.073 943.5 424.468 943.5C532.863 943.5 623.744 863.789 648.071 756.5H915.468V1053.5Z"
          fill="url(#paint0_linear_518_229)"
        />
      </g>
      <mask
        id="mask1_518_229"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="317"
        y="563"
        width="218"
        height="306"
      >
        <rect x="317.468" y="563.5" width="217" height="305" fill="#F5E7D8" />
      </mask>
      <g id="neck" mask="url(#mask1_518_229)">
        <rect x="317.468" y="563.5" width="217" height="305" fill="#F4D1B2" />
        <ellipse
          id="head-shadow"
          cx="427.968"
          cy="590"
          rx="121.5"
          ry="128.5"
          fill="#DBB298"
          :style="layerStyles.head"
        />
      </g>
      <rect id="ears" x="202.468" y="312.5" width="447" height="166" rx="50" fill="#DBB298" :style="layerStyles.head" />
      <mask
        id="mask2_518_229"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="229"
        y="99"
        width="393"
        height="572"
      >
        <path
          d="M621.468 318C621.468 318 609.161 468.042 573.468 557C540.968 638 460.468 670.5 429.468 670.5C398.468 670.5 310.968 642 276.468 557C240.438 468.231 229.968 318 229.968 318V251L237.468 99.5H614.468L621.468 318Z"
          fill="#F4D1B2"
        />
      </mask>
      <g id="face" mask="url(#mask2_518_229)" :style="layerStyles.head">
        <g id="face-inner" :style="layerStyles.face">
          <path
            d="M621.468 318C621.468 318 609.161 468.042 573.468 557C540.968 638 460.468 670.5 429.468 670.5C398.468 670.5 310.968 642 276.468 557C240.438 468.231 229.968 318 229.968 318V251L237.468 99.5H614.468L621.468 318Z"
            fill="#F4D1B2"
          />
          <g id="blush" :opacity="blushOpacity" style="transition: opacity 0.2s ease-in-out">
            <ellipse
              cx="302.292"
              cy="453.266"
              rx="69.5"
              ry="42"
              transform="rotate(4.88533 302.292 453.266)"
              fill="url(#paint1_radial_518_229)"
            />
            <ellipse
              cx="69.5"
              cy="42"
              rx="69.5"
              ry="42"
              transform="matrix(-0.996367 0.0851618 0.0851618 0.996367 613.963 400.5)"
              fill="url(#paint2_radial_518_229)"
            />
          </g>
          <path
            d="M418.682 427.992C423.99 418.274 437.946 418.274 443.254 427.992L472.915 482.288C478.011 491.618 471.259 503 460.628 503H401.308C390.677 503 383.925 491.618 389.021 482.288L418.682 427.992Z"
            fill="url(#paint3_linear_518_229)"
          />
          <path
            d="M402.666 487.791C410.315 485.744 417.881 489.187 419.564 495.48C420 497.109 419.998 498.77 419.624 500.372C419.647 499.541 419.555 498.709 419.335 497.888C417.716 491.838 409.839 488.689 401.74 490.856C397.588 491.967 394.185 494.261 392.071 497.047C393.456 492.853 397.392 489.202 402.666 487.791Z"
            fill="#DBB298"
          />
          <path
            d="M456.592 487.791C448.943 485.744 441.377 489.187 439.693 495.48C439.258 497.109 439.26 498.77 439.634 500.372C439.611 499.541 439.703 498.709 439.922 497.888C441.541 491.838 449.419 488.689 457.517 490.856C461.67 491.967 465.072 494.261 467.186 497.047C465.801 492.853 461.865 489.202 456.592 487.791Z"
            fill="#DBB298"
          />
          <path
            d="M491.968 551.5C479.468 568 460.756 588.5 427.958 588.5C395.161 588.5 369.968 562.5 359.468 550.5C359.468 550.5 402.293 562.084 427.958 562C452.659 561.919 491.968 551.5 491.968 551.5Z"
            fill="#EEB096"
          />
          <path
            d="M492.468 550.5C492.468 550.5 470.548 560.588 426.219 561C381.889 561.413 360.468 550.5 360.468 550.5C360.468 550.5 407.292 538.119 411.775 538.531C416.257 538.944 422.732 544.237 426.219 544.304C429.706 544.372 436.679 538.531 440.663 538.531C444.648 538.531 492.468 550.5 492.468 550.5Z"
            fill="#EEB096"
          />
          <path
            d="M349.468 544.5C366.415 554.794 394.641 559.052 427.03 559.052C458.081 559.052 485.576 553.736 502.468 545.572C488.536 556.201 459.813 563.5 426.639 563.5C392.361 563.5 362.834 555.708 349.468 544.5Z"
            fill="#BD7575"
          />
          <path
            id="right-eyelash"
            d="M523.945 331.383C491.952 335.312 468.249 356.685 471.004 379.121C471.027 379.309 471.053 379.495 471.08 379.681C483.599 390.086 506.189 395.42 531.034 392.37C556.484 389.245 577.511 378.155 586.823 364.589C583.851 342.323 555.793 327.473 523.945 331.383Z"
            fill="black"
          />
          <mask
            id="mask3_518_229"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="465"
            y="337"
            width="117"
            height="64"
          >
            <path
              d="M518.72 338.586C486.727 342.514 463.024 363.887 465.779 386.324C465.802 386.511 465.828 386.697 465.855 386.884C478.374 397.288 500.964 402.622 525.808 399.572C551.259 396.447 572.286 385.357 581.598 371.792C578.625 349.525 550.568 334.675 518.72 338.586Z"
              fill="white"
            />
          </mask>
          <g id="right-eye" mask="url(#mask3_518_229)">
            <path
              d="M518.72 338.586C486.727 342.514 463.024 363.887 465.779 386.324C465.802 386.511 465.828 386.698 465.855 386.884C478.375 397.288 500.965 402.622 525.809 399.572C551.26 396.447 572.286 385.357 581.598 371.791C578.625 349.525 550.568 334.675 518.72 338.586Z"
              fill="white"
            />
            <g id="right-eye-pupil" :style="layerStyles.eyes">
              <circle
                cx="38.1395"
                cy="38.1395"
                r="38.1395"
                transform="matrix(-0.992546 0.121869 0.121869 0.992546 554.468 319.267)"
                fill="#7688A2"
              />
              <circle
                cx="20"
                cy="20"
                r="20"
                transform="matrix(-0.992546 0.121869 0.121869 0.992546 538.468 341.333)"
                fill="#313131"
              />
              <circle cx="504.468" cy="357.5" r="7" fill="white" />
            </g>
          </g>
          <path
            d="M328.991 331.383C360.984 335.312 384.687 356.685 381.932 379.121C381.909 379.309 381.883 379.495 381.856 379.681C369.337 390.086 346.747 395.42 321.903 392.37C296.452 389.245 275.425 378.155 266.113 364.589C269.086 342.323 297.143 327.473 328.991 331.383Z"
            fill="black"
          />
          <mask
            id="mask4_518_229"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="271"
            y="337"
            width="117"
            height="64"
          >
            <path
              d="M334.216 338.586C366.209 342.514 389.912 363.887 387.157 386.324C387.134 386.511 387.108 386.697 387.082 386.884C374.562 397.288 351.972 402.622 327.128 399.572C301.677 396.447 280.65 385.357 271.338 371.792C274.311 349.525 302.368 334.675 334.216 338.586Z"
              fill="white"
            />
          </mask>
          <g id="left-eye" mask="url(#mask4_518_229)">
            <path
              d="M334.216 338.586C366.209 342.514 389.912 363.887 387.157 386.324C387.134 386.511 387.108 386.698 387.081 386.884C374.562 397.288 351.971 402.622 327.127 399.572C301.677 396.447 280.65 385.357 271.338 371.792C274.31 349.525 302.368 334.675 334.216 338.586Z"
              fill="white"
            />
            <g id="left-eye-pupil" :style="layerStyles.eyes">
              <circle cx="331.675" cy="361.77" r="38.1395" transform="rotate(7 331.675 361.77)" fill="#7688A2" />
              <circle cx="331.882" cy="363.621" r="20" transform="rotate(7 331.882 363.621)" fill="#313131" />
              <circle cx="314.468" cy="357.5" r="7" fill="white" />
            </g>
          </g>
          <path
            d="M312.745 284.935C352.615 282.451 385.841 294.975 386.958 312.908C387.114 315.406 386.637 317.876 385.595 320.286C369.088 304.755 336.041 295.42 298.653 297.749C279.54 298.94 261.931 303.015 247.352 309.046C257.513 296.645 282.734 286.805 312.745 284.935Z"
            fill="#444B1B"
          />
          <path
            d="M540.032 283.935C500.163 281.451 466.936 293.975 465.819 311.908C465.663 314.406 466.14 316.876 467.182 319.286C483.689 303.755 516.736 294.42 554.125 296.749C573.237 297.94 590.846 302.015 605.425 308.046C595.264 295.645 570.043 285.805 540.032 283.935Z"
            fill="#444B1B"
          />
        </g>
        <path
          d="M399.305 167.5C370.805 157 321.805 155 297.805 176C268.002 202.077 246.305 250 238.805 375C231.305 500 223.805 578.501 256.805 657.501C282.292 718.514 310.295 777.446 315.351 781.751C315.504 781.834 315.655 781.917 315.805 782.001C315.684 781.989 315.532 781.905 315.351 781.751C280.956 762.936 185.411 736.749 164.305 657.501C137.805 558.001 146.305 386 164.305 270.5C182.305 155 223.305 105.5 256.805 75.0001C283.605 50.6001 346.805 49.1667 372.805 55.5C393.805 41.8333 429.477 22.5 474.305 22.5C532.805 22.5 607.805 72 654.805 157C701.805 242 728.305 525 723.805 590.5C720.205 642.9 592.472 749.501 561.805 782.001C576.472 751.167 599.805 721.5 614.805 637.5C641.789 486.39 583.805 267 561.805 215C540.958 165.726 504.808 132.62 468.805 135.5C443.805 137.5 411.305 153 399.305 167.5Z"
          fill="#DBB298"
        />
      </g>
      <path
        id="top-hair"
        d="M397.968 145C369.468 134.5 320.468 132.5 296.468 153.5C266.665 179.577 244.968 227.5 237.468 352.5C229.968 477.5 222.468 556.001 255.468 635.001C280.955 696.014 308.958 754.946 314.014 759.251C314.167 759.334 314.318 759.417 314.468 759.501C314.347 759.489 314.195 759.405 314.014 759.251C279.619 740.436 184.074 714.249 162.968 635.001C136.468 535.501 144.968 363.5 162.968 248C180.968 132.5 221.968 83.0001 255.468 52.5001C282.268 28.1001 345.468 26.6667 371.468 33C392.468 19.3333 428.139 4.1393e-06 472.968 0C531.468 -5.40167e-06 606.468 49.5 653.468 134.5C700.468 219.5 726.968 502.5 722.468 568C718.868 620.4 591.135 727.001 560.468 759.501C575.135 728.667 598.468 699 613.468 615C640.452 463.89 582.468 244.5 560.468 192.5C539.621 143.226 503.471 110.12 467.468 113C442.468 115 409.968 130.5 397.968 145Z"
        fill="#B6F75B"
        :style="layerStyles.head"
      />
      <defs>
        <linearGradient
          id="paint0_linear_518_229"
          x1="437.468"
          y1="794.5"
          x2="437.468"
          y2="1031.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C6D3D9" />
          <stop offset="1" stop-color="#0C1013" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_518_229"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(302.292 453.266) rotate(90) scale(42 69.5)"
        >
          <stop stop-color="#E87D7D" stop-opacity="0.42" />
          <stop offset="1" stop-color="#F4D1B2" stop-opacity="0.59" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_518_229"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(69.5 42) rotate(90) scale(42 69.5)"
        >
          <stop stop-color="#E87D7D" stop-opacity="0.42" />
          <stop offset="1" stop-color="#F4D1B2" stop-opacity="0.59" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_518_229"
          x1="430.968"
          y1="405.5"
          x2="430.968"
          y2="535.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F4D1B2" stop-opacity="0" />
          <stop offset="1" stop-color="#E69775" stop-opacity="0.62" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";

interface Coordinates {
  x: number;
  y: number;
}

const containerRef = ref<HTMLDivElement | null>(null);

const mouse: Coordinates = { x: 0, y: 0 };
const current: Coordinates = reactive({ x: 0, y: 0 });
const blushOpacity = ref(0.5);
let blushTimeout: number | null = null;

const handleClick = () => {
  blushOpacity.value = 1;
  if (blushTimeout) {
    clearTimeout(blushTimeout);
  }
  setTimeout(() => {
    blushOpacity.value = 0.5;
  }, 1000);
};

let animationFrameId: number | null = null;

const handleMouseMove = (e: MouseEvent) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
};

const handleTouchMove = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    if (touch) {
      mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (touch.clientY / window.innerHeight) * 2 - 1;
    }
  }
};

const animate = () => {
  const ease = 0.08;

  current.x += (mouse.x - current.x) * ease;
  current.y += (mouse.y - current.y) * ease;

  animationFrameId = requestAnimationFrame(animate);
};

const layerStyles = computed(() => {
  const angleZ = current.x * 8;

  return {
    back: {
      transform: `translate(${current.x * 8}px, ${current.y * 5}px) rotateZ(${angleZ}deg)`,
      transformOrigin: "center",
      transition: "none",
    },
    head: {
      transform: `translate(${current.x * 15}px, ${current.y * 10}px) rotateZ(${angleZ}deg)`,
      transformOrigin: "center",
      transition: "none",
    },
    face: {
      transform: `translate(${current.x * 12}px, ${current.y * 8}px)`,
      transformOrigin: "center",
      transition: "none",
    },
    eyes: {
      transform: `translate(${current.x * 28}px, ${current.y * 18}px)`,
      transformOrigin: "center",
      transition: "none",
    },
  };
});

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("touchmove", handleTouchMove);
  animate();
});

onUnmounted(() => {
  if (blushTimeout) {
    clearTimeout(blushTimeout);
  }
  blushTimeout = null;
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("touchmove", handleTouchMove);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/mixins.scss";
.svg-head {
  width: 100%;
  height: auto;
  touch-action: none;

  &__img {
    width: 50%;
    height: auto;
    @include mixins.tablet-up {
      width: 70%;
    }
    @include mixins.desktop-up {
      width: 90%;
    }
  }
}
</style>
