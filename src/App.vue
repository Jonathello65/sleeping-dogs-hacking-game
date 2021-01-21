<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Game</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
// 'Magistral C Regular'
@font-face {
    font-family: "Magistral C";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Magistral C Regular"), local("MagistralC-Regular"), url(./assets/font/MagistralCRegular.woff2) format("woff2");
}
#app {
    font-family: "Magistral C", "Avenir LT Std", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
