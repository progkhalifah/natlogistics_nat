<template>
  <main class="mt-0 main-content " :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr' ">
    <ToastContainer />
    <section>
      <div class="text-center mt-4 mb-4">
        <img src="@/assets/img/logos/nat_logistics_logo.png" alt="nat_logo" width="150px" height="120px">
      </div>
      <div class="custom-box-signup container">
        <div>
          <h4 class="text-center mt-4 mb-3 fw-bold">{{ $t('sign_up_page') }}</h4>
          <form @submit.prevent="submitSignUpUserForm">
            <div class="mb-3">
              <label for="edtxtUsername" class="form-label custom-font-size text-capitalize">{{ $t('username') }}</label>
              <input v-model="signUpUserForm.username" type="text" class="form-control" id="edtxtUsername" @invalid="handleInvalidUsername" @input="clearCustomValidity" required>
              <span class="text-danger" v-if="v$.username.$error">{{ $t('please_write_username') }}</span>
            </div> <!--username-->
            <div class="mb-3">
              <label for="edtxtPhoneNumber" class="form-label custom-font-size">{{ $t('phoneNumber') }}</label>
              <input v-model="signUpUserForm.phoneNumber" type="text" class="form-control" id="edtxtPhoneNumber" @invalid="handleInvalidPhoneNumber" @input="clearCustomValidity" required>
              <span class="text-danger" v-if="v$.phoneNumber.$error">{{ $t('please_write_phoneNumber') }}</span>
            </div> <!--phone number-->
            <div class="mb-3">
              <label for="edtxtPassword" class="form-label custom-font-size">{{ $t('password') }}</label>
              <input v-model="signUpUserForm.password" type="password" class="form-control" id="edtxtPassword" @invalid="handleInvalidPassword" @input="clearCustomValidity" required>
              <span class="text-danger" v-if="v$.password.$error">{{ $t('please_select_password') }}</span>
            </div> <!--password-->
            <div class="text-center">
              <button type="submit" class="btn btn-primary form-control text-capitalize">{{ $t('login_submit') }}</button>
            </div>
          </form>
          <hr/>
          <p class="fw-normal">{{ $t('you_already_have_account') }} <router-link :to="{name:'SignIn'}">{{ $t('sign_in_page') }}</router-link></p>
        </div>
      </div>

    </section>
  </main>
</template>
<script setup>
import {ref, computed} from "vue";
import {required} from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import {showToast} from "@/services/customToast";
import {useI18n} from "vue-i18n";


const { t } = useI18n()
const signUpUserForm = ref({
  username: '',
  phoneNumber: '',
  password: '',
})

// Start computed
// const hasUpperCase = (value) => /[A-Z]/.test(value) || 'Password must include at least one uppercase letter';
// const hasSpecialChar = (value) => /[!@#$%^&*]/.test(value) || 'Password must include at least one special character';
// const hasNumber = (value) => /\d/.test(value) || 'Password must include at least one number';
const rules = computed(() => ({
  phoneNumber: { required, },
  username: { required, },
  password: { required,  },
}))
// End computed

// Vuelidate validation object
const v$ = useValidate(rules, signUpUserForm)


// Handle the 'invalid' event for the select element

const handleInvalidPhoneNumber = (event) => {
  event.target.setCustomValidity(t("please_write_phoneNumber"));
};
// Clear custom validity when the user interacts with the field
const clearCustomValidity = (event) => {
  event.target.setCustomValidity("");
};

const handleInvalidUsername = (event) => {
  event.target.setCustomValidity(t("please_write_username"));
  // errors.value.branchId = event.target.validationMessage;
};

const handleInvalidPassword = (event) => {
  event.target.setCustomValidity(t("please_select_password"));
  // errors.value.branchId = event.target.validationMessage;
};


// End Handle the 'invalid' event for the select element


const submitSignUpUserForm = async ()=>{

  v$.value.$touch();
  if (!v$.value.$invalid){
    try {


      setTimeout(() => {
        showToast(t('user_sign_in_successfully'), 'success')
      }, 1000);

    } catch (e) {
      console.error('Error submitting form:', e)
    }
  }else {
    console.log('form invalid')
  }

}


</script>
<style lang="css" scoped>

.custom-font-size{
  font-size: 15px;
  font-weight: bold;
}

.custom-box-signup {
  width: 20%;
  height: auto;
  border: #ddd solid thin;
  margin-bottom: 1%;
}

.custom-text-black{
  color: #000000;
}







@media (max-width: 1024px) {
  .custom-box-signup {
    width: 40%; /* Adjust width for tablets */
  }
}


@media (max-width: 768px) {
  .custom-box-signup {
    width: 60%; /* Adjust width for tablets */
  }
}


@media (max-width: 480px) {
  .custom-box-signup {
    width: 95%; /* Full width for mobile screens */

  }
}


</style>