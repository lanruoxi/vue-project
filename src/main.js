// 引入资源
import Vue from 'vue';

// 注册全局组件 start
import MyUl from './components/Commons/MyUl.vue';
import MyLi from './components/Commons/MyLi.vue';
import Backheader from './components/Commons/Backheader.vue';
Vue.component(MyUl.name, MyUl);
Vue.component(MyLi.name, MyLi);
Vue.component(Backheader.name, Backheader);
// 注册全局组件 end



// 路由相关组件 -start
import App from './components/App.vue';
import Home from './components/Home/Home.vue'
import Shopcart from './components/Shopcart/Shopcart.vue'
import Member from './components/Member/Member.vue'
import Search from './components/Search/Search.vue'
import Newlist from './components/Home/New/Newlist.vue'
import Newdetail from './components/Home/New/Newdetail.vue'
// 路由相关组件 -end


// VueRouter -start
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 创建路由对象
let router = new VueRouter();
router.addRoutes([
        // 重定向到首页
        {
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        // 首页
        {
            name: 'home',
            path: '/home',
            component: Home,

        },
        // 会员
        {
            name: 'member',
            path: '/member',
            component: Member
        },
        //购物车
        {
            name: 'shopcart',
            path: '/shopcart',
            component: Shopcart
        },
        //查找
        {
            name: 'search',
            path: '/search',
            component: Search
        },
        {
            name: 'news',
            path: '/news',
            component: Newlist,
            children: [{
                name: 'newdetail',
                path: 'newdetail',
                component: Newdetail
            }]
        }


    ])
    // VueRouter -end


// MintUi -start
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
// MintUi -end


// 引入自己的css
import './static/css/global.css'


// Axios start
import Axios from 'axios';
Vue.prototype.$axios = Axios;
// 设置默认URL请求基础路径
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
// Axios end


new Vue({
    el: '#app',
    render: c => c(App),
    router
})