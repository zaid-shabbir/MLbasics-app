<template>
  <div class="row gradeform justify-content-center">
    <form v-on:submit.prevent="calculate" class="col-lg-7 col-10">
      <h4 class="mt-3 mb-5">Life Expectancy Rate</h4>
      <div class="form-group row">
        <label for="age" class="col-sm-6 col-form-label"
          >What is your age?</label
        >
        <div class="col-sm-6">
          <input
            v-model="age"
            type="number"
            class="form-control"
            id="age"
            placeholder="Present Age"
            min="1"
            max="200"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="country" class="col-sm-6 col-form-label"
          >Your Country</label
        >
        <div class="col-sm-6">
          <input
            v-model="country"
            type="text"
            class="form-control"
            id="country"
            placeholder="Your Country Name"
            min="1"
            max="5000"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="smoking" class="col-sm-6 col-form-label"
          >Do you smoke?</label
        >
        <div class="col-sm-6">
          <div class="custom-control custom-radio custom-control-inline">
            <input
              v-model="smoking"
              type="radio"
              id="smokingyes"
              name="smokingyes"
              value="Yes"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="smokingyes">Yes</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              v-model="smoking"
              type="radio"
              id="smokingno"
              name="smokingno"
              value="No"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="smokingno">No</label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="gender" class="col-sm-6 col-form-label"
          >What is your gender?</label
        >
        <div class="col-sm-6">
          <div class="custom-control custom-radio custom-control-inline">
            <input
              v-model="gender"
              type="radio"
              id="male"
              name="male"
              value="Male"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="male">Male</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              v-model="gender"
              type="radio"
              id="female"
              name="female"
              value="Female"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="female">FeMale</label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-6 text-center">
          <button type="submit" class="btn gradebtn btn-block">
            Find Expectancy Rate
          </button>
        </div>
        <div class="col-sm-6 text-center">
          <button v-on:click="reset" class="btn gradebtn btn-block">
            Reset Form
          </button>
        </div>
      </div>
      <div v-if="result" class="mt-3">
        <h3>Your Life Expectancy is {{ result }} years.</h3>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "LifeExpectancy",
  data() {
    return {
      age: "",
      smoking: "",
      country: "",
      gender: "",
      result: false
    };
  },
  methods: {
    reset() {
      this.age = "";
      this.smoking = "";
      this.country = "";
      this.gender = "";
      this.result = false;
    },
    calculate() {
      this.result = true;
      if (this.smoking == "Yes" && this.gender == "Male") {
        this.result = 70 - this.age;
      } else if (this.smoking == "Yes" && this.gender == "Female") {
        this.result = 65 - this.age;
      } else if (this.smoking == "No" && this.gender == "Male") {
        this.result = 80 - this.age;
      } else if (this.smoking == "No" && this.gender == "Female") {
        this.result = 70 - this.age;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
