var MyComponent = Vue.extend({
    template: '#form-weather'
});

Vue.component('form-weather', MyComponent);

Vue.component('form-sub',{
    template: '#form-sub'
});

function API(api) {

    console.log('hoge' + api);

};

var demo = new Vue({
    el: 'body',
    data: {
        title: 'Title',
        currentView: 'form-weather',
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
    },
    methods: {
        change: function (e) {
            // console.log(e.target.tagName) // "A"
            // console.log(e.targetVM === this) // true
            if(this.currentView == 'form-weather') {
                this.currentView = 'form-sub';
            } else {
                this.currentView = 'form-weather';
            }
            API('ppp');
        },
        getWeather: function (e) {
          $.ajax({
//            url: base + '?' + param.join('&')
            url: 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp'
          }).done(function(data){
            // // setとかreplaceとかしなくても、これでもViewは更新される
            // $data.results = data.data;
                console.log(data);
          }).fail(function(data){
            alert('error occured.');
          });
        }
    }
});


// var app = new Vue({
//     el: '#app',
//     data: {
//         currentView: 'home'
//     },
//     methods: {
//         change: function (e) {
//             // console.log(e.target.tagName) // "A"
//             // console.log(e.targetVM === this) // true
//             if(this.currentView == 'home') {
//                 this.currentView = 'page1';
//             } else {
//                 this.currentView = 'home';
//             }
//             API('ppp');
//         }
//     }
// });

