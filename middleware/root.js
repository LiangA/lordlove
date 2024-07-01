// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useUser();
    // if (to.path === "/") {
        if (!user.value) {
            return navigateTo("/login"); // 如果未登入，重新導向到登入頁面
        }
    // }
  });
  