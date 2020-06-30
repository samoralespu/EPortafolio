<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">My synopsis.</h1>
          </div>
          <br />
          <md-button
            href="https://www.youtube.com/watch?v=g4vOR9paav4&t"
            class="md-success md-lg"
            target="_blank"
          ><i class="fas fa-play"></i>My first podcast!</md-button
          >
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
            </div>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['VueJs', 'C and C++']"
              :tab-icon="['integration_instructions', 'integration_instructions']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                    <p>
                      The use of web pages has grown exponentially in recent years. This is why the Front-end development (how the user interfaces that can be observed on the client-side, taking into account different devices) has been rising as well. For this reason, it has become necessary to unify and organize the HTML (code structure), CSS (the design and styles), and JavaScript code (the web behavior), especially the latter, which make the web pages more dynamic and powerful. The best way to organize these codes is to use JavaScript frameworks like React, Angular, or in this case Vue.js.
                    </p>
                    <p>
                      Evan You, an ex-google worker, tired of the high complexity of Angular, decided to create a Framework extracting the most liked parts of Angular framework and develop something lighter with a faster learning curve, as a result of this Vue.js is Officially released in February 2014.
                    </p>
                    <p>
                      Vue.js is an approachable, versatile, and performant framework, that helps developers to create a testable and maintainable codebase. One of the advantages of this framework is that If we have an existing web application, we can plug Vue just into a part of this application that needs a richer, more interactive experience.
                    </p>
                    <p>
                      For these, and for more reasons, VueJs has become today one of the most used frameworks, outperforming even Angular and projecting for this 2020 as the most used web development framework.
                    </p>
                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                    <img :src="tabPane1[3].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                    <H4>the programmings language that revolutionized humanity</H4>
                    <p>
                      It is evident that programming languages have been important for humanity without them we would not get to where we are today and technology would not be as we know it. Many of them have programmed great applications, operating systems, games, and other programs that we use on a daily basis. But a couple of them stand out from the rest, as they have significantly influenced everything we use on a daily basis.
                    </p>
                    <p>
                      The first one is C, C was created in the early 1970s by Dennis M. Ritchie an employee from Bell Labs. This language emerged as a complement to another called B (Birth), which was incomplete and lacked different functionalities (like data-types), these being added by C., On the other hand, is C++, this programming language was invented in the very early 80s by Bjarne Stroustrup which wanted to add some features to C making it to support Object Oriented concept. Its name comes from the ++ operator, which means an is an operator for incrementing a variable, which gives some insight into how Stroustrup regarded the language.
                    </p>
                    <p>
                      Great projects, programs, and applications have been written in these languages starting with UNIX one of the first operating systems developed also in Bell Labs, from which Linux emerged, and was the inspiration to create Windows and Mac OS, also developed in C and C++. These languages have also served to develop great websites like Amazon, Facebook, Google (Chromium browser and Google file system), Android, and many more programs that we use daily. But it is not only about programs, but they have also been used in huge projects one of the most recent the launch of the crew dragon the SpaceX spacecraft who managed to bring a couple of astronauts to the ISS again. For all this and more, these programming languages have been and continue to be important.
                    </p>
                  </div>
                  <div class="md-layout-item md-size-15 mr-auto">
                    <img :src="tabPane2[0].image" class="rounded" />
                    <img :src="tabPane2[1].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                    <img :src="tabPane2[3].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/java_html_css.png") },
        { image: require("@/assets/img/react.png") },
        { image: require("@/assets/img/adv-2.jpg") },
        { image: require("@/assets/img/vue-logo.png") }
      ],
      tabPane2: [
        { image: require("@/assets/img/c and cplus.jpg") },
        { image: require("@/assets/img/c and cplus2.jpg") },
        { image: require("@/assets/img/cplus3.png") },
        { image: require("@/assets/img/cplus4.png") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/front6.jpeg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
