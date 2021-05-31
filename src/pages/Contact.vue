<template>
    <div class="app">
        <el-container>
            <div class="container">
                <h1 class="text-center mt-5">{{ $t("contact_title") }}</h1>
                <div class="d-flex justify-content-center mt-5">
                    <form class="w-100" @submit.prevent="sendMessage">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>{{$t('contact_firstname')}}</label>
                                <input  
                                    type="text"
                                    class="form-control" 
                                    v-model.trim="$v.userMessage.firstName.$model"
                                    :class="{'is-invalid': $v.userMessage.firstName.$error}"
                                />
                                <span class="invalid-feedback" v-if="!$v.userMessage.firstName.required">
                                    {{$t('contact_control_required')}}
                                </span>
                            </div>
                            <div class="form-group col-md-6">
                                <label>{{$t('contact_lastname')}}</label>
                                <input 
                                    type="text" 
                                    class="form-control"
                                    v-model.trim="$v.userMessage.lastName.$model"
                                    :class="{'is-invalid': $v.userMessage.lastName.$error}" 
                                />

                                <span class="invalid-feedback" v-if="!$v.userMessage.lastName.required">
                                    {{$t('contact_control_required')}}
                                </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>{{$t('contact_email')}}</label>
                            <input 
                                type="email" 
                                class="form-control"
                                v-model.trim="$v.userMessage.email.$model"
                                :class="{'is-invalid': $v.userMessage.email.$error}"
                            />
                            <span class="invalid-feedback" v-if="!$v.userMessage.email.required">
                                {{$t('contact_control_required')}}
                            </span>
                            <span class="invalid-feedback" v-if="!$v.userMessage.email.email">
                                {{$t('contact_control_email')}}
                            </span>
                        </div>
                        <div class="form-group">
                            <label>{{$t('contact_subject')}}</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                :placeholder="$t('contact_optionnal_sub')"
                                v-model.trim="userMessage.subject"
                            />
                            
                        </div>
                        <div class="form-group">
                            <label>{{$t('contact_message')}}</label>
                            <textarea 
                                class="form-control" 
                                rows="3"
                                v-model.trim="$v.userMessage.message.$model"
                                :class="{'is-invalid': $v.userMessage.message.$error}"
                            ></textarea>
                            <span class="invalid-feedback" v-if="!$v.userMessage.message.required">
                                {{$t('contact_control_required')}}
                            </span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary pr-5 pl-5" :disabled="this.$v.$invalid">
                                {{ $t("contact_submit") }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </el-container>

    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import container from '../components/container.vue'

export default {
    name: 'contact',
    data() {
        return {
            userMessage: {
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            }
        }
        
    },
    validations:{
        userMessage:{
            firstName:{
                required
            },
            lastName:{
                required
            },
            email:{
                required,
                email
            },
            message:{
                required
            }
        }
    },
    components:{
        'el-container':container
    }
    ,
    methods:{
        sendMessage() {
            this.$v.$touch();
            if (this.$v.$invalid) return;
            console.log(this.userMessage);
            this.$toast.success(this.$t('message_sent'))
        }
    }

    
  

}
</script>

<style>

</style>