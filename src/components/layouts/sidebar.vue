<template>
    <div class="sidebar">
        <ul>
            <li
                v-for="item in menuItems"
                :key="item.id"
            >
                <router-link :to="item.path">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            menuItems: [
                { id: 1, title: '首页', path: '/' },
                { id: 2, title: '关于', path: '/about' },
                { id: 3, title: '服务', path: '/services' },
                { id: 4, title: '联系', path: '/contact' }
            ]
        };
    }
};
</script>

<style scoped>
.sidebar {
    width: 250px;
    background-color: #f8f9fa;
    padding: 20px 0;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    padding: 10px 20px;
}

.sidebar li a {
    text-decoration: none;
    color: #333;
    display: block;
}

.sidebar li a:hover {
    color: #007bff;
}

.sidebar li a.router-link-exact-active {
    color: #007bff;
    font-weight: bold;
}
</style>
