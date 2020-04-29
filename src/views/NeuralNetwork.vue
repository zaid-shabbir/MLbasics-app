<template>
  <div>
    <div class="text-left">
      <h4 class="heading">Neural Networks:</h4>
      <p class="content">
        Neural Networks are composed of multiple nodes, which imitate biological
        neurons of human brain. The neurons are connected by links and they
        interact with each other. The nodes can take input data and perform
        simple operations on the data.
      </p>
    </div>
    <div class="text-center mt-3">
      <div class="carex">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-interval="10000"
        >
          <div class="carousel-inner cinnerex">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="../assets/images/NN2.gif"
                alt="First"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/images/NN3.gif"
                alt="Second"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next mr-5"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeuralNetwork"
};
</script>

<style lang="scss" scoped></style>
