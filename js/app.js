var demo = new Vue({
    el: '#demo',
    data: {
        title: 'todos',
        todos: [
            {
                done: true,
                content: 'Learn JavaScript'
            },
            {
                done: false,
                content: 'Learn Vue.js'
            }
        ]
    }
});

var MyComponent = Vue.extend({
    template: 'A custom component!'
});

var MyComponent2 = Vue.extend({
    template: '#tmpl1'
});

Vue.component('home', MyComponent);

Vue.component('page1',{
    template: '#tmpl1'
});

var app = new Vue({
    el: '#app',
    data: {
        currentView: 'home'
    },
    methods: {
        change: function (e) {
            // console.log(e.target.tagName) // "A"
            // console.log(e.targetVM === this) // true
            if(this.currentView == 'home') {
                this.currentView = 'page1';
            } else {
                this.currentView = 'home';
            }
            API('ppp');
        }
    }
});

function API(api) {

    console.log('hoge' + api);

};