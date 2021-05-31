<template>
  <el-container>

    <div class="container">

      <!--Reset password -->
      <h2 class="text-center mt-5">{{$t('respect_password_title')}}</h2>
      <h5 class="text-center mt-5">{{$t('add_password')}}</h5>
      <div v-if="!resetDone" class="row justify-content-center">
        <div class="col-8">
          <form @submit.prevent="submit" class="text-center">
            <div class="form-group">
              <label for="exampleInputPassword1">{{$t('respect_password_password')}}</label>
              <input type="password" class="form-control" v-model.trim="user.newpassword"
                :class="{'is-invalid': $v.user.newpassword.$error}">
              <div class="invalid-feedback">
                <span class="text-danger"
                  v-if="!$v.user.newpassword.minLength">{{$t('respect_password_minlenght')}}</span>
                <span class="text-danger"
                  v-if="!$v.user.newpassword.required">{{$t('respect_password_newpassword_required')}}</span>

              </div>

            </div>

            <div class="form-group ">
              <label for="exampleInputPassword1">{{$t('resetPassword_passwordConfirmation')}}</label>
              <input type="password" class="form-control" v-model.trim="user.confirmPassword"
                :class="{'is-invalid': $v.user.confirmPassword.$error}">
              <div class="invalid-feedback">
                <span class="text-danger"
                  v-if="!$v.user.confirmPassword.sameAsPassword">{{$t('respect_password_incompatible_passwords')}}</span>
              </div>

            </div>

            <button type="submit" class="btn btn-primary mt-5" :disabled="this.$v.$invalid">
              {{$t('respect_password_button')}}
            </button>
          </form>
        </div>
      </div>

      <div v-if="resetDone" class="row justify-content-center mt-5 w-100">
        <div class="col-6">
          <div class="alert alert-success" role="alert">
            {{$t('forgotpassword_submitted_usermail')}}
          </div>
        </div>
      </div>

    </div>

  </el-container>

  <!--End of reset-->
</template>



<script>
  import Container from '../components/container.vue';
  import {
    required,
    sameAs,
    minLength
  } from 'vuelidate/lib/validators'



  export default {
    name: 'resetpassword',
    data() {
      return {
        user: {
          newpassword: "",
          confirmPassword: ""
        },
        resetDone: false
      }
    },
    validations: {
      user: {
        newpassword: {
          required,
          minLength: minLength(8)
        },
        confirmPassword: {
          sameAsPassword: sameAs("newpassword")
        }
      }
    },

    components: {
      'el-container': Container,


    },

    methods: {
      submit() {
        this.$v.$touch();
        if (this.$v.$invalid) return;
        this.resetDone = !this.resetDone
        console.log(this.user);
        this.$toast.success(this.$t('ressetpassword_success'))
      }
    },

  }
</script>