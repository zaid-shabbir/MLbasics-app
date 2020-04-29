<template>
  <div>
    <div class="text-left">
      <h4 class="heading">Artificial Intelligence:</h4>
      <p class="content">
        Artificial intelligence (AI) is an area of computer science that
        emphasizes the creation of intelligent machines that work and react like
        humans.
      </p>
    </div>
    <div class="text-center mt-3">
      <div class="carai">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-interval="10000"
        >
          <div class="carousel-inner cinnerai">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="../assets/images/AI_1.gif"
                alt="First"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/images/AI_2.gif"
                alt="Second"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="../assets/images/speechrecognition.gif"
                alt="Third"
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
  name: "ai"
};
</script>

<style lang="scss" scoped></style>
