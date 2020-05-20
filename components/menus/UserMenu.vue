<template>
  <div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="true" :nudge-width="300" offset-y>
      <template v-slot:activator="{ on }">
        <v-avatar v-on="on" width="35" height="35">
          <img src="@/assets/img/waleed.jpeg" alt />
        </v-avatar>
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar width="90" height="90">
              <img src="@/assets/img/waleed.jpeg" alt="user" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="caption grey--text font-weight-medium">Hello,</v-list-item-title>
              <v-list-item-subtitle class="title">{{ $auth.user.name }}</v-list-item-subtitle>
              <nuxt-link :to="localePath('/edit-profile')">{{ $t('userMenu.editProfile') }}</nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list>
          <v-divider></v-divider>
          <v-list-item-group v-model="item">
            <v-list-item :to="localePath('/checklist')">
              <v-list-item-icon>
                <v-icon>mdi-clipboard-check-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('userMenu.checklist') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item :to="localePath('/settings')">
              <v-list-item-icon>
                <v-icon>mdi-tune</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('userMenu.settings') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item :to="localePath('/app')">
              <v-list-item-icon>
                <v-icon>mdi-download</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('userMenu.app') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item @click="loggedOut" class="mb-n2">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t('userMenu.logout') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    item: 1
  }),
  methods: {
    loggedOut() {
      this.$auth.logout();
      this.$router.push(this.localePath("/"));
    }
  }
};
</script>
