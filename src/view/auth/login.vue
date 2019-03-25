<template>
    <div :class="['bg','animated','fadeInDown']" :style="{backgroundImage:`url('${bg}')`}">
      <div class="container">
         <Card style="width:300px;">
             <Form class="form" :model='formData'>
                 <FormItem prop="username">
                     <Input type="text"  placeholder="同户名" class="form-item" size="large" v-model="formData.username">
                     <Icon type="ios-person-outline" slot="prepend" color="#fff" size="20"></Icon>
                     </Input>
                 </FormItem>
                 <FormItem prop="password">
                     <Input type="password"  placeholder="密码" class="form-item" size="large" v-model="formData.password">
                     <Icon type="ios-lock-outline" slot="prepend" color="#fff" size="20"></Icon>
                     </Input>
                 </FormItem>
                 <FormItem prop='remember'>
                     <Checkbox class="form-item" v-model="formData.remember">记住密码</Checkbox>
                 </FormItem>
             </Form>
             <footer class="login-btn">
                 <Button type="success" @click="_onClickLogin">登录</Button>
             </footer>
         </Card>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations,mapActions } from 'vuex'
const banners = [
    require('../../assets/images/banner1.jpg'),
    require('../../assets/images/banner2.jpg'),
    require('../../assets/images/banner3.png'),
]
export default Vue.extend({
    name:'login',
    data(){
       return {
           text:'hellow',
           bg:banners[0],
           formData:{
               username:'admin',
               password:'123456',
               remember:true
           }
       }
    },
    methods:{
        ...mapActions([
            'login'
        ]),
        _onClickLogin(){
            this.login().then(res=>{
                 this.$router.push({
//                    name: 'index'
                     name: 'grid_manager'
                })
            })
        }
    },
    mounted(){
        this.timer && clearInterval(this.timer)
        let index = 1
        this.timer = setInterval(() => {
            this.bg = banners[index]
            index++
            if(index>=3) index = 1
        }, 3000)
    },
    destroyed(){
         this.timer && clearInterval(this.timer)
    },
})
</script>


<style scoped>
.bg{ width: 100%; height: 100%;background-size: cover;background-repeat: no-repeat;position: relative;transition: all .5s;overflow: hidden;}
.container{
    display: flex;
    height: 100%;
    width:100%;
    flex-direction: column;  /* 子元素横向排列 */
    justify-content:center;
    align-items:center
}
.animated{animation-duration: 1s;animation-fill-mode: both;}
.fadeInDown{animation-name: fadeInDown;}
@keyframes fadeInDown {0%{opacity: 0;}100%{opacity: 1;}}
.logo{padding-top: 5%;}
.logo img{width:100%;}

.login-box{background-color: rgba(0,0,0,.6);border-radius: 0.05rem;}
.login-box .form{padding: 0.3rem 0.3rem 0 0.3rem;}
.login-box .form .form-item{
    background: none;
    color: #fff;
}

.login-box .form .form-item .ivu-input{
    background: rgba(0,0,0,.5);
    color: #fff;
    border-radius: 0;
    border: none;
}
.login-box .form .form-item .ivu-input-group-prepend{
    background: #000;
    border-radius: 0;
    border: none;
}
.login-btn{
    text-align: center;
    padding: 0.1rem 0.2rem 0.2rem 0.2rem;
    border-top: 1px solid rgba(0,0,0,.1);
}
.login-btn button{
    width: 100%;
}
</style>



