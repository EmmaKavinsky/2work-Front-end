<template>
    <el-container>
        <div class="container">
            <h1 class="text-center mt-5">{{ $t("register_title") }}</h1>
            <div class="d-flex justify-content-center mt-5">
              <form class="w-100" @submit.prevent="submitForm">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputName">{{ $t("register_firstName") }}</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model.trim="$v.user.firstName.$model"
                      :class="{ 'is-invalid': $v.user.firstName.$error }"
                    />
                    <div class="invalid-feedback">
                      <span v-if="!$v.user.firstName.required">
                        {{ $t("register_required") }}
                      </span>
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputName">{{ $t("register_lastName") }}</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model.trim="$v.user.lastName.$model"
                      :class="{'is-invalid': $v.user.lastName.$error,}"
                    />
                    <div class="invalid-feedback">
                      <span v-if="!$v.user.lastName.required">
                        {{ $t("register_required") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputEmail">{{ $t("register_email") }}</label>
                  <input
                    type="email"
                    class="form-control"
                    :placeholder="$t('register_exemple')"
                    v-model.trim="$v.user.email.$model"
                    :class="{'is-invalid': $v.user.email.$error}"
                  />
                  <div class="invalid-feedback">
                    <span v-if="!$v.user.email.required">
                      {{ $t("register_required") }}
                    </span>
                    <span v-if="!$v.user.email.email">
                      {{$t("register_error_email")}}
                    </span>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputPassword">{{ $t("register_password") }}</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="$v.user.password.$model"
                      :class="{ 'is-invalid': $v.user.password.$error }"
                    />
                    <div class="invalid-feedback">
                      <span class="text-danger" v-if="!$v.user.password.required">
                        {{ $t("register_required") }}
                      </span>
                      <span class="text-danger" v-if="!$v.user.password.minLength">
                         {{ $t("register_password_error") }}
                      </span>
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputConfirmePassword">{{$t("register_confirme")}}</label>
                    <input
                      type="password"
                      class="form-control"
                      v-model="$v.user.confirmePassword.$model"
                      :class="{ 'is-invalid': $v.user.confirmePassword.$error }"
                    />
                    <div class="invalid-feedback">
                      <span class="text-danger" v-if="!$v.user.confirmePassword.sameAs">
                        {{ $t("register_confirmation_password_error") }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputGender">{{ $t("register_gender") }}</label>
                    <select
                      class="form-control"
                      v-model="$v.user.gender.$model"
                      :class="{ 'is-invalid': $v.user.gender.$error }"
                    >
                      <option value="m">{{ $t("register_male") }}</option>
                      <option value="f">{{ $t("register_female") }}</option>
                    </select>
                    <div class="invalid-feedback">
                      <span class="text-danger" v-if="!$v.user.gender.required">
                        {{ $t("register_required") }}
                      </span>
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="birthday">{{ $t("register_birthday") }}</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="$v.user.birthday.$model"
                      required
                    />
                  </div>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="$v.user.acceptTerms.$model"
                    required
                  />
                  <label class="form-check-label" for="acceptTerms">
                    {{ $t("register_acceptTerms") }}
                  </label>
                </div>
                <div class="d-flex justify-content-center">
                  <button v-if="!loader" type="submit" class="btn btn-primary pr-5 pl-5 rounded-pill" :disabled="this.$v.$invalid">
                    {{ $t("register_submit") }}
                  </button>
                  <el-loader v-if="loader" />
                </div>
              </form>
            </div>
        </div>
    </el-container>
</template>

<script>
/**
 * This page is for Register
 */
import Container from '../components/container.vue';
import Loader from '../components/loader.vue';

import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmePassword: "",
        gender: "",
        acceptTerms: false,
        birthday: "",
    },
    loader: false
    }
  },
  validations: {
    user: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmePassword: {
        same: sameAs("password")
      },
      gender: {
        required
      },
      acceptTerms: {
        checked(val) {
          return val;
        },
      },
      birthday: {
        required,
      }
    }
  },
  components :{
        'el-container' : Container,
        'el-loader': Loader
    },
  methods: {

    ...mapActions(["register"]),

    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.loader = true
      this.register(this.user)
      .then(() => {
          this.loader = false
      })
      .catch(() => {
          this.loader = false
      })
    }
  }
}
</script>
