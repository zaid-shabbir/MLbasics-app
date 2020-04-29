<template>
  <div class="aside">
    <div id="accordion">
      <div id="headingOne">
        <h5 class="mb-0">
          <button
            class="btn mybtn btn-outline-secondary btn-block"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Artificial Intelligence
          </button>
        </h5>
      </div>

      <div
        id="collapseOne"
        class="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'ai' }"
              >What is Artificial Intelligence</router-link
            ></a
          >
        </div>
        <hr class="m-0" />
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'ml' }"
              >What is Machine Learning</router-link
            ></a
          >
        </div>
      </div>
      <!-- Section -->
      <div id="headingTwo">
        <h5 class="mb-0">
          <button
            class="btn mybtn btn-outline-secondary"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Types of Machine Learning
          </button>
        </h5>
      </div>
      <!--  -->
      <!--  -->
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div id="accordion1">
          <div>
            <div id="headingsub" class="subheading">
              <a
                class="d-none"
                href="#"
                data-toggle="collapse"
                data-target="#collapsesub"
                aria-expanded="true"
                aria-controls="collapsesub"
                >Child Section</a
              >
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapsesub"
                aria-expanded="true"
                aria-controls="collapsesub"
                ><router-link :to="{ name: 'supervisedml' }"
                  >Supervised Machine Learning</router-link
                ></a
              >
            </div>
            <hr class="m-0" />
            <div
              id="collapsesub"
              class="collapse"
              aria-labelledby="headingsub"
              data-parent="#accordion1"
            >
              <div class="subheading">
                <a
                  ><router-link class="pl-5" :to="{ name: 'classification' }"
                    >Classification</router-link
                  ></a
                >
              </div>
              <hr class="m-0" />
              <div class="subheading">
                <a
                  ><router-link class="pl-5" :to="{ name: 'regression' }"
                    >Regression</router-link
                  ></a
                >
              </div>
            </div>
            <hr class="m-0" />
          </div>
          <div>
            <div class="subheading">
              <a
                ><router-link :to="{ name: 'unsupervisedml' }"
                  >Unsupervised Machine Learning</router-link
                ></a
              >
            </div>
            <hr class="m-0" />
            <div class="subheading">
              <a
                ><router-link :to="{ name: 'reinforcementml' }"
                  >Reinforecement Machine Learning</router-link
                ></a
              >
            </div>
          </div>
        </div>
      </div>
      <div id="headingThree">
        <h5 class="mb-0">
          <button
            class="btn mybtn btn-outline-secondary"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            Applications in Daily Life
          </button>
        </h5>
      </div>
      <div
        id="collapseThree"
        class="collapse"
        aria-labelledby="headingThree"
        data-parent="#accordion"
      >
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'Clustring' }"
              >Placement of Emergency Wards</router-link
            ></a
          >
        </div>
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'GenderPrediction' }"
              >Gender Prediction</router-link
            ></a
          >
        </div>
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'GradesPrediction' }"
              >Grades Prediction</router-link
            ></a
          >
        </div>
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'LifeExpectancy' }"
              >Life Expectancy Rate</router-link
            ></a
          >
        </div>
      </div>
      <div id="headingFour">
        <h5 class="mb-0">
          <button
            class="btn mybtn btn-outline-secondary"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            <router-link class="txt" :to="{ name: 'NeuralNetwork' }">
              Neural Network</router-link
            >
          </button>
        </h5>
      </div>
      <!-- start -->
      <div
        id="collapseFour"
        class="collapse"
        aria-labelledby="headingFour"
        data-parent="#accordion"
      >
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'NNWorking' }"
              >How Neural Network Works</router-link
            ></a
          >
        </div>
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'NNTypes' }"
              >Types of Neural Network</router-link
            ></a
          >
        </div>
        <div class="subheading">
          <a
            ><router-link :to="{ name: 'CNN' }"
              >Convolutional Neural Network</router-link
            ></a
          >
        </div>
        <div id="accordion2">
          <div>
            <div id="headingsub1" class="subheading">
              <a
                class="d-none"
                href="#"
                data-toggle="collapse"
                data-target="#collapsesub1"
                aria-expanded="true"
                aria-controls="collapsesub1"
                >Child Section</a
              >
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapsesub1"
                aria-expanded="true"
                aria-controls="collapsesub1"
              >
                Applications of Neural Networks</a
              >
            </div>
            <hr class="m-0" />
            <div
              id="collapsesub1"
              class="collapse"
              aria-labelledby="headingsub1"
              data-parent="#accordion2"
            >
              <div class="subheading">
                <a
                  ><router-link
                    class="pl-5"
                    :to="{ name: 'DigitsClassification' }"
                    >Digits Classification</router-link
                  ></a
                >
              </div>
              <hr class="m-0" />
              <div class="subheading">
                <a
                  ><router-link
                    class="pl-5"
                    :to="{ name: 'AnimalClassfication' }"
                    >Animal Classification</router-link
                  ></a
                >
              </div>
            </div>
            <hr class="m-0" />
          </div>
          <div></div>
        </div>
      </div>
      <!-- end  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Aside"
};
</script>

<style lang="scss" scoped></style>
