<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['endTimerCount'])
const props = defineProps({
  timeout: {
    type: Number,
    required: true
  }
})

const timer = ref(null)
const FULL_CIRCLE_TIMER = 283
const TIMER_COLOR = {
  base: {
    color: 'blue',
  },
  alert: {
    color: 'red',
    threshold: 2
  }
}

const countDown = (sec) => {
  timer.value = sec
  let interval = setInterval(() => {
    timer.value--
    if (timer.value === 0) {
      emit('endTimerCount')
      clearInterval(interval)
      return
    }
  }, 1000)
}

const circleCount = computed(() => `${(timerFraction.value * FULL_CIRCLE_TIMER).toFixed(0)} 283`)

const timerFraction = computed(() => {
  const rawTimeFraction = timer.value / props.timeout
  return rawTimeFraction - (1 / props.timeout) * (1 - rawTimeFraction)
})

const remainingPathColor = computed(() => {
  const { base, alert } = TIMER_COLOR
  if (timer.value <= alert.threshold) return alert.color
  return base.color
})

watch(
  () => props.timeout,
  () => {
    countDown(props.timeout)
  },
  { immediate: true }
)
</script>
<template>
  <div class="timer text-blue-950">
    <svg class="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="timer__circle">
        <circle class="timer__path" cx="50" cy="50" r="45" />

        <path
          :stroke-dasharray="circleCount"
          :class="remainingPathColor"
          class="timer__remaining-time"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="timer__label">{{ timer }}</span>
  </div>
</template>
<style>
.timer {
  position: relative;
  width: 100px;
  height: 100px;
}
.timer__svg {
  transform: scaleX(-1);
}

.timer__circle {
  fill: none;
  stroke: none;
}

.timer__path {
  stroke-width: 10px;
  stroke:  #fef3c7;
}

.timer__remaining-time {
  stroke-width: 10px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: currentColor;
}

.timer__remaining-time.blue {
  color: #0c4a6e;
}

.timer__remaining-time.red {
  color: red;
}

.timer__label {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>
