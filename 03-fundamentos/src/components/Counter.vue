<template>
  <h2>Counter</h2>
  <p> {{ counter }} <sup>2</sup> = {{ squaredCounter }} </p>

  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter
    },
    increase() {
      this.counter++
    },
    decrease() {
      this.counter--
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

button {
  background-color: #64BB87;
  border-radius: 5px;
  color: white; 
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

</style>