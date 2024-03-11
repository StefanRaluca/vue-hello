
const { createApp } = Vue

createApp({
    data() {
        return {
            title: "Hello World 😆",

            imgVue:" https://geology.com/store/wall-maps/blue-ocean-united-states-map-lg.jpg"
        }


    }

}).mount('#app');
console.log(createApp);