<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="true"
      :nudge-width="100"
      offset-y
      nudge-bottom="5"
    >
      <template v-slot:activator="{ on }">
        <v-avatar v-on="on" class="white--text" width="30" height="30" round tile>
          <img :src="selectedLang" alt />
        </v-avatar>
      </template>
      <v-list class="pa-o ma-0">
        <v-list-item :to="switchLocalePath('en')" @click="en" class="mb-n2">
          <v-list-item-avatar tile>
            <img :src="require('~/assets/img/en.png')" alt />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="switchLocalePath('de')" @click="de" class="mt-n2">
          <v-list-item-avatar tile>
            <img :src="require('~/assets/img/de.png')" alt />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Dutch</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="switchLocalePath('fr')" @click="fr" class="mb-n2">
          <v-list-item-avatar tile>
            <img :src="require('~/assets/img/fr.png')" alt />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>French</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      selectedLang: require("~/assets/img/de.png")
    };
  },
  created() {
    const loc = this.$i18n.locale;
    this.selectedLang = require(`~/assets/img/${loc}.png`);
  },

  methods: {
    de() {
      this.selectedLang = require("~/assets/img/de.png");
    },
    en() {
      this.selectedLang = require("~/assets/img/en.png");
    },
    fr() {
      this.selectedLang = require("~/assets/img/fr.png");
    }
  }
};
</script>
