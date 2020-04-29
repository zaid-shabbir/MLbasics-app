<template>
  <div class="row">
    <div class="gradeform justify-content-center col-lg-6 col-10">
      <form v-on:submit.prevent="calculate">
        <h3 class="mt-3 mb-5">Grades Prediction</h3>
        <div class="form-group row">
          <label for="hours" class="col-sm-6 col-form-label"
            >How many hours a day you study?</label
          >
          <div class="col-sm-6">
            <input
              v-model="hours"
              type="number"
              class="form-control"
              id="hours"
              placeholder="Study Hours"
              min="1"
              max="24"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="marks" class="col-sm-6 col-form-label"
            >Obtained Marks in you last exam?</label
          >
          <div class="col-sm-6">
            <input
              v-model="marks"
              type="number"
              class="form-control"
              id="marks"
              placeholder="Obtained Marks"
              min="0"
              max="1000"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="totalmarks" class="col-sm-6 col-form-label"
            >Total Marks</label
          >
          <div class="col-sm-6">
            <input
              v-model="totalmarks"
              type="number"
              class="form-control"
              id="totalmarks"
              placeholder="Total Marks"
              min="1"
              max="5000"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="percentage" class="col-sm-6 col-form-label"
            >How much syllabus have you covered?</label
          >
          <div class="col-sm-6">
            <div class="input-group">
              <input
                v-model="percentage"
                type="number"
                class="form-control"
                id="percentage"
                placeholder="Syllabus Covered in %"
                min="0"
                max="100"
              />
              <div class="input-group-append">
                <span class="input-group-text">%</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-6 text-center mt-3">
            <button type="submit" class="btn gradebtn btn-block">
              Predict Grades
            </button>
          </div>
          <div class="col-sm-6 text-center mt-3">
            <button v-on:click="reset" class="btn gradebtn btn-block">
              Reset Form
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-if="result" class="col-lg-6 col-12 mt-5">
      <h3 class="mt-4">Probability of Grades are:</h3>
      <div class="mt-3">
        <h5>A Grade: {{ agrade }}%</h5>
      </div>
      <div>
        <h5>B Grade: {{ bgrade }}%</h5>
      </div>
      <div>
        <h5>C Grade: {{ cgrade }}%</h5>
      </div>
      <div>
        <h5>D Grade: {{ dgrade }}%</h5>
      </div>
      <div>
        <h5>E Grade: {{ egrade }}%</h5>
      </div>
      <div>
        <h5>F Grade: {{ fgrade }}%</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GradesPrediction",
  data() {
    return {
      result: false,
      hours: "",
      marks: "",
      totalmarks: "",
      percentage: "",
      agrade: "",
      bgrade: "",
      cgrade: "",
      dgrade: "",
      egrade: "",
      fgrade: ""
    };
  },
  methods: {
    reset() {
      this.hours = "";
      this.marks = "";
      this.totalmarks = "";
      this.percentage = "";
      this.result = false;
      this.agrade = "";
      this.bgrade = "";
      this.cgrade = "";
      this.dgrade = "";
      this.egrade = "";
      this.fgrade = "";
    },
    calculate() {
      this.result = true;
      if (this.hours != 0 && this.hours < 2) {
        this.agrade = 30;
        this.bgrade = 40;
        this.cgrade = 50;
        this.dgrade = 60;
        this.egrade = 70;
        this.fgrade = 80;
      } else if (this.hours != 0 && this.hours > 2 && this.hours < 5) {
        this.agrade = 80;
        this.bgrade = 70;
        this.cgrade = 50;
        this.dgrade = 40;
        this.egrade = 30;
        this.fgrade = 20;
      } else if (this.hours != 0 && this.hours > 5 && this.hours < 24) {
        this.agrade = 99;
        this.bgrade = 90;
        this.cgrade = 70;
        this.dgrade = 30;
        this.egrade = 20;
        this.fgrade = 10;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
