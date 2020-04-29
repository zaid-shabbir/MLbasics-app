<template>
  <div>
    <div class="text-left">
      <h4 class="heading">Animal Classification</h4>
      <p class="content pb-3">
        Classification of animals depending upon their features which include
        color, texture, shape and size can be done using Neural Networks.
      </p>
    </div>
    <div class="text-center mt-2">
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
                src="../assets/images/AnimalClassification1.gif"
                alt="First"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/images/AnimalClassification2.gif"
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
  name: "AnimalClassfication"
};
</script>

<style lang="scss" scoped></style>
