<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
    Main Content
    <div>
      <h1>Welcome to the index page</h1>
    </div>
  </v-main>
</template>

<script setup>
definePageMeta({
  middleware: 'root' // 在訪問此頁面前執行 auth middleware
});

import { useRouter } from 'vue-router';
import { useUser } from '~/composables/state';

const router = useRouter();
const user = useUser();

// if ((user.value == null) || (user.value.title == undefined)) {
//   router.push('/login');
// }
</script>