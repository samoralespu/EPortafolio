<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">My reviews.</h1>
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
              :tab-name="['IntelliJ', 'TPB AFK']"
              :tab-icon="['integration_instructions', 'integration_instructions']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 ml-auto">
                    <h4>IntelliJ IDEA</h4>
                    <p>
                      IntelliJ IDEA is an Integrated Development Environment that enables programmers to consolidate the different aspects of programming, this means that this software helps the programmer increase productivity combining activities like editing source code, building executables, and debugging just in a single application. This application brings with it a variety of advantages, such as smart code completion, framework-specific assistance, developer ergonomics, and many more advantages that they explain on their website.
                    </p>
                    <p>
                      Starting with Jetbrains, its creator company, it is quite recognized in the software sector, since it has created and designed great applications and even a multiplatform programming language. All of these are used by big companies like Google, Twitter, NASA, and many more that have the high caliber that their applications have. That is why it can be said that IntelliJ.
                    </p>
                    <p>
                      For the above, I set out to test the application for a project that I was carrying out for 6 months creating a web page, where I realized all the benefits of using this IDE (Integrated development environment). Thanks to institutional mail, I was able to access the full version of this software, which allowed me to fully explore all the options that this program brings. One of the options that I liked the most was the marketplace offered by adding a plugin, letting you easily search and find the plugin and adding it from the interface quickly.  Another great advantage is the number of options it offers for each language, giving the possibility of having the most used languages unifying them on a single platform. In addition to the previous ones, and an infinity of advantages that this application brings, it is the great flexibility and number of options that it has to configure the user interface, being the night mode of the options that I liked the most, as well as some parameters that one can configure to suit your preference.
                    </p>
                    <p>
                      In addition to the previous ones, and an infinity of advantages that this application brings, it is the great flexibility and number of options that it has to configure the user interface, being the night mode of the options that I liked the most, as well as some parameters that one can configure to suit your preference. What makes it one of the best IDEs that currently exist, due to its great versatility, user-friendly, and one of the most complete, that if you are a developer you will surely like this programming environment.
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
                  <div class="md-layout-item md-size-50 mr-auto">
                    <h4>TPB AFK: The Pirate Bay Away from Keyboard</h4>
                    <p>“TPB AFK: The Pirate Bay Away from Keyboard” is a documentary about the judgment of the creators of one of the biggest file-sharing websites ever. The documentary brings the viewer inside the developers minds, letting him know their vision of the world especially on the subject of copyright, of how the big companies got together and focused on attacking a small group of people which, according to them, only watched over freedom of expression. Big record labels, film studios, and even video games studios were disappointed to realize that "The Pirate Bay" was a much less organized enemy than they believed, it’s three creators didn't even have an office, instead of meeting via online chats and they rarely met together AFK (Away from keyboard) term they used to refer to real life, so that not even, with the best lawyers, the corporations could knock down the website.</p>
                    <p>One of the advantages of this documentary is that it was financed via crowdfunding, so it should be very little biased, and indeed it was, throughout the documentary we see how it also show the ideals of the judges, the police and the lawyers of the companies, exposing their arguments and why they sued the owners of the website. Another proof in favor of the impartiality of the report is that the protagonists are not sought to show with the best charisma or the best personality, unlike other documentaries that show their protagonists only on one side (good or bad).</p>
                    <p>The documentary made me constantly question myself about copyright and piracy, and think about how billion-dollar corporations do right or wrong in attacking these people at the same time that it is interesting to get into and learn a little more about the world of piracy and what better than to do it with a documentary with good direction and good music that you will surely love it if you are a geek or just someone very curious about technology, and if you are not, you will still enjoy seeing it as a sunday film.</p>
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
