import Vue from "vue";
import VueRouter from "vue-router";
import AIandML from "../views/AIandML.vue";
import ai from "../views/ai.vue";
import ml from "../views/ml.vue";
import supervisedml from "../views/supervisedml.vue";
import unsupervisedml from "../views/unsupervisedml.vue";
import reinforcementml from "../views/reinforcementml.vue";
import classification from "../views/classification.vue";
import regression from "../views/regression.vue";
import Clustring from "../views/Clustring.vue";
import GenderPrediction from "../views/GenderPrediction.vue";
import GradesPrediction from "../views/GradesPrediction.vue";
import LifeExpectancy from "../views/LifeExpectancy.vue";
import NeuralNetwork from "../views/NeuralNetwork.vue";
import NNWorking from "../views/NNWorking.vue";
import NNTypes from "../views/NNTypes.vue";
import CNN from "../views/CNN.vue";
import DigitsClassification from "../views/DigitsClassification.vue";
import AnimalClassfication from "../views/AnimalClassfication.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AIandML",
    component: AIandML
  },
  {
    path: "/ai",
    name: "ai",
    component: ai
  },
  {
    path: "/ml",
    name: "ml",
    component: ml
  },
  {
    path: "/supervisedml",
    name: "supervisedml",
    component: supervisedml
  },
  {
    path: "/supervisedml/classification",
    name: "classification",
    component: classification
  },
  {
    path: "/supervisedml/regression",
    name: "regression",
    component: regression
  },
  {
    path: "/unsupervisedml",
    name: "unsupervisedml",
    component: unsupervisedml
  },
  {
    path: "/reinforcementml",
    name: "reinforcementml",
    component: reinforcementml
  },
  {
    path: "/clustring",
    name: "Clustring",
    component: Clustring
  },
  {
    path: "/genderprediction",
    name: "GenderPrediction",
    component: GenderPrediction
  },
  {
    path: "/gradesprediction",
    name: "GradesPrediction",
    component: GradesPrediction
  },
  {
    path: "/lifeexpectancy",
    name: "LifeExpectancy",
    component: LifeExpectancy
  },
  {
    path: "/neuralnetwork",
    name: "NeuralNetwork",
    component: NeuralNetwork
  },
  {
    path: "/nnworking",
    name: "NNWorking",
    component: NNWorking
  },
  {
    path: "/nntypes",
    name: "NNTypes",
    component: NNTypes
  },
  {
    path: "/cnn",
    name: "CNN",
    component: CNN
  },
  {
    path: "/applications/digitsclassification",
    name: "DigitsClassification",
    component: DigitsClassification
  },
  {
    path: "/applications/animalclassfication",
    name: "AnimalClassfication",
    component: AnimalClassfication
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
