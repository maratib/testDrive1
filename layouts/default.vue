<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dark color="blue-grey darken-1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link :to="localePath('/')" class="clear">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-btn :to="localePath('/projects')" class="ml-5">Projects</v-btn>
      <v-spacer />
      <Langs />
      <UserMenu v-if="true" class="mx-3" />
      <!-- <Gdpr /> -->
    </v-app-bar>
    <v-content>
      <v-container>
        <Breadcrumb />
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import UserMenu from "@/components/menus/UserMenu";
import Langs from "@/components/misc/Langs";
import Gdpr from "@/components/misc/Gdpr";
import Breadcrumb from "@/components/misc/Breadcrumb";
export default {
  components: {
    UserMenu,
    Langs,
    Gdpr,
    Breadcrumb
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Projects",
          to: "/projects"
        },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "TestDrive"
    };
  }
};
</script>
<style scoped>
.clear {
  text-decoration: none;
}
</style>