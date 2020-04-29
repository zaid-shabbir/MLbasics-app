<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-12 mt-3 mb-3">
        <h4 class="">Gender Prediction</h4>
      </div>
      <div class="col-sm-3 mb-3">
        <button v-on:click="calculate" class="btn gradebtn">
          Predict Gender
        </button>
      </div>
    </div>
    <p v-if="isUploading">
      Uploading file...
    </p>
    <div v-if="result" class="row text-center mt-5">
      <figure class="col-md-6 col-12">
        <img
          class="img-fluid"
          height="300"
          width="300"
          src="../assets/images/ClassifiedImg.jpg"
          alt="Reinforcement Learning Example"
        />
        <figcaption class="mt-2">
          Male Classified Image
        </figcaption>
      </figure>
      <figure>
        <img
          class="img-fluid"
          height="300"
          width="300"
          src="../assets/images/ClassifiedFemale.jpg"
          alt="Reinforcement Learning Example"
        />
        <figcaption class="mt-2">
          Female Classified Image
        </figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  name: "GenderPrediction",
  data() {
    return {
      isUploading: false,
      result: false
    };
  },
  methods: {
    calculate() {
      this.isUploading = true;
      setTimeout(() => {
        this.isUploading = false;
        this.result = true;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
}

.input-file {
  position: absolute;
  opacity: 0;
  margin-right: 10px;
  width: 100%;
  height: 0;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue;
  cursor: pointer; /* when mouse over to the drop zone, change color */
}

.inputimg {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
  cursor: pointer;
}
.imageselected {
  left: 0;
  margin-left: 100px;
  position: absolute;
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
