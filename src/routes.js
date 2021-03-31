import Home from './components/Home.vue'
import Product from './components/Products.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Sell from './components/Sell.vue'
import Profile from './components/Profile.vue'
import EditProfile from './components/EditProfile.vue'
import SellerSignUp from './components/SellerSignup.vue' 
import MultipleSelect from './components/MultiSelect.vue'
//import Favourite from './components/Favourite.vue'
export default[
    { path: '/', component: Home},
    { path: '/product', component: Product},
    { path: '/login', component: Login},
    { path: '/signup', component: Signup},
    { path: '/sell', component: Sell},
    { path: '/profile', component: Profile},
    { path: '/edit', component: EditProfile}, 
    { path: '/sellersignup', component: SellerSignUp}, 
    { path: '/multipleselect', component: MultipleSelect}, 
    //{ path: '/Fav', component: Favourite}
]

//For breadcrumb reference
/*{
    path: '/', 
    component: Page,
    meta: {
      breadcrumb: 'Home Page',
    },
    children: [
      {
        path: '/foo', 
        component: Foo,
        meta: {
          breadcrumb: 'Foo Page'  
        }
      },
      {
        path: '/bar', 
        component: Bar,
        meta: {
          breadcrumb: 'Bar Page'
        }
      }*/


