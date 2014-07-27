
Vue.component('form-weather',{
    template: '#form-weather',
    data: {
        userId:''
    },
    methods: {
        requestAPI:function() {
            console.log(this.userId);
            demo.requestAPI();
        }
    }
});

Vue.component('form-sub',{
    template: '#form-sub'
});

var demo = new Vue({
    el: 'body',
    data: {
        title: 'Title',
        currentTargetNo: 1,
        currentView: 'form-weather',
        isAPISuccess: false,
        targetList: [
            {
                targetNo: 1,
                targetName: 'target1',
                targetHost: 'http://www.yahoo.co.jp'
            },
            {
                targetNo: 2,
                targetName: 'target2',
                targetHost: 'http://www.yahoo.co.jp'
            },
            {
                targetNo: 3,
                targetName: 'target3',
                targetHost: 'http://www.yahoo.co.jp'
            }
        ],
        todos: [
            {
                no: 1,
                done: true,
                content: 'function1',
                contentView: 'form-weather'
            },
            {
                no: 2,
                done: false,
                content: 'function2',
                contentView: 'form-sub'
            }
        ]
    },
    computed: {
        currentTargetName: function() {
            var l = this.targetList.length;
            for(var i = 0; i < l; i++) {
                if(this.currentTargetNo == this.targetList[i].targetNo) {
                    return this.targetList[i].targetName;
                }
            }
            return null;
        }
    },
    methods: {
        changeView: function(no) {
            var l = this.todos.length;
            for(var i = 0; i < l; i++) {
                if(no == this.todos[i].no) {
                    this.todos[i].done = true;
                    this.currentView = this.todos[i].contentView;
                } else {
                    this.todos[i].done = false;
                }
            }
        },
        changeTarget: function (targetNo) {
            this.currentTargetNo = targetNo;
        },
        requestAPI: function (e) {
            console.log('hogehoge');
            this.isAPISuccess = true;
            var that = this;
            setTimeout(function() {
                console.log('end');
                that.isAPISuccess = false;
            },1000);
          return;
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


