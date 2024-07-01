<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary">

      <v-app-bar-nav-icon v-if="$vuetify.display.mobile" variant="text"
        @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer :location="$vuetify.display.mobile ? 'top' : undefined" v-model="drawer">
      <v-list>
        <v-list-item :title="user ? user.title : 'Guest'" :subtitle="user ? user.email : ''"
          :prepend-avatar="user ? user.prependAvatar : ''" />
        <v-btn @click="logout">Logout</v-btn>
      </v-list>

      <v-divider></v-divider>

      <v-list :items="items" :lines="false" density="compact" nav>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" rounded="xl" :to="item.to">
          <!-- <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template> -->

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <slot />
  </v-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUser } from '~/composables/state';

const drawer = ref(true);

const router = useRouter();
const user = useUser();

const logout = () => {
  user.value = null
  router.push('/login');
}

if ((user.value == null) || (user.value.title == undefined)) {
  logout()
}

const items = ref([
  { title: 'index', to: '/' },
  { title: 'about', to: '/about' },
]);


</script>
