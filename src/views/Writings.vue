<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">My writings.</h1>
          </div>
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
              :tab-name="['Vue', 'In progress', 'Progress too']"
              :tab-icon="['integration_instructions', 'autorenew', 'cached']"
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
                  <div class="md-layout-item md-size-25 ml-auto">

                  </div>
                  <div class="md-layout-item md-size-50 mr-auto">
                    <p>

                    </p>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout md-centered">
                  <div class="md-layout-item md-size-25 md-centered">
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
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
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
