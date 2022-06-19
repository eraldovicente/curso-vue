<template>
  <h2>Counter</h2>
  <p> {{ counter }} <sup>2</sup> = {{ squaredCounter }} </p>
</template>

<script>
export default {
  data() {
    return {
      counter: 10
    }
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter
    }
  },
  computed: {
    squaredCounter() {
      return this.counter * this.counter
    }
  }
}
</script>

<style>

</style>