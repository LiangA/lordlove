<template>
    <v-form @submit.prevent="login">
        <v-text-field v-model="email" label="Email"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
        <v-btn type="submit">Login</v-btn>
    </v-form>
</template>

<script setup>
import { useState } from '#app'
import { useRouter } from 'vue-router'
import { useUser } from '~/composables/state';

definePageMeta({
    layout: false
});

const user = useUser();

// const email = useState('email', () => '')
// const password = useState('password', () => '')
const router = useRouter()

async function login() {
    // 這裡發送登入請求到後端 API
    try {
        const response = await $fetch('/api/login', {
            method: 'POST',
            body: { email: email.value, password: password.value }
        })

        // 登入成功，儲存用戶資訊
        const user = useState('user')
        user.value = response.user // 假設後端回傳 { user: { ... } }

        // 跳轉到其他頁面
        router.push('/')
    } catch (error) {
        // 處理登入失敗
        console.error(error)
        user.value = {
            prependAvatar: "https://cdn.vuetifyjs.com/images/john.png",
            email: "john@google.com",
            title: "John Leider"
        }
        router.push('/')
    }
}
</script>