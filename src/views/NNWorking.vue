<template>
  <div class="text-left">
    <h4 class="heading">How Neural Network Works</h4>
    <p class="content">
      The basic idea behind a neural network is to simulate lots of densely
      interconnected brain cells inside a computer so you can get it to learn
      things, recognize patterns, and make decisions in a humanlike way.
    </p>
    <ul>
      <li>
        The first layer is called the Input Layer
      </li>
      <li>
        The last layer is called the Output Layer
      </li>
      <li>
        All layers in between are called Hidden Layers.
      </li>
    </ul>

    <div class="text-center mt-0">
      <video class="videoNN" autoplay>
        <source src="../assets/images/WorkingOfNN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <span>Working of Neural Networks</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NNWorking"
};
</script>

<style lang="scss" scoped></style>
