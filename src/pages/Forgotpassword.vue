<template>
  <el-container>
    <div class="container">
     
      <!--forgot password-->
    <h1 class="text-center mt-5">{{$t('forgotpassword_title')}}</h1>
    <div v-if="!emailIsSend" class="row justify-content-center">
      <div class="col-6">
        <form @submit.prevent="submit" class="text-center">
          <div class="form-group">
            <label for="mail">{{$t('forgotpassword_user_mail')}}</label><br>
            <input class="form-contol" type="email" v-model.trim="$v.user.email.$model"
              :placeholder="$t('usermail_exemple')"
              :class="{'is-invalid': $v.user.email.$error,}"
              />
            <div class="invalid-feedback">
            <span class="text-danger" v-if="!$v.user.email.required">{{$t('forgotpassword_email_required') }}</span>
            <span class="text-danger" v-if="!$v.user.email.email">{{$t('forgotpassword_email_invalid')}}</span>
            </div>
          
          </div>

          <button type="submit" class="btn btn-primary" :disabled="this.$v.$invalid">
            {{$t('forgotpassword_button')}}
          </button>
        </form>
      </div>
    </div>
    <div v-if="emailIsSend" class="row justify-content-center mt-5 w-100">
      <div class="col-6">
        <div class="alert alert-success" role="alert">
          {{$t('forgotpassword_submitted_usermail')}}
        </div>
      </div>
    </div>
    <!--end of forgot-->
  </div>
  </el-container>
  
</template>

<script>
  import Container from '../components/container.vue';
  import {
    required,
    email
  } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        user: {
          email: ''
        },
        emailIsSend: false
      }
    },
    validations: {
      user: {
        email: {
          required,
          email
        }
      }
    },
    components:{
      'el-container' : Container,
      
    },
    methods: {
      // this funtion used to submit user email
      submit() {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.emailIsSend = !this.emailIsSend
        console.log(this.user);
        this.$toast.success(this.$t('forgetPassword_success'))
      }
    }
  }
</script>