<template>
  <main class="" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr' ">
    <ToastContainer />
    <section>
      <div class="text-center mb-4 mt-4">
        <img src="@/assets/img/logos/nat_logistics_logo.png" alt="nat_logo" width="150px" height="120px">
      </div>
      <div class="custom-box-login container">
        <div>
          <h4 class="text-center mt-4 mb-3 fw-bold">{{ $t('sign_in_page') }}</h4>

          <form @submit.prevent="submitSignInUserForm">
            <div class="mb-3">
              <label for="lblselectBranch" class="form-label custom-font-size text-capitalize">{{ $t('select_branch') }}</label>
              <select v-model="signInUserForm.branchId" id="lblselectBranch" class="form-select" @invalid="handleInvalidBranchName" @input="clearCustomValidity" required>
                <option v-for="branch in listOfBranches" :key="branch.id" :value="branch.id">{{ branch.branchname }}</option>
              </select>
              <span class="text-danger" v-if="v$.branchId.$error">{{ $t('please_select_branchename') }}</span>
            </div> <!--branch-->
            <div class="mb-3">
              <label for="lblselectUser" class="form-label custom-font-size text-capitalize">{{ $t('select_user') }} </label>
              <select v-model="signInUserForm.username" id="lblselectUser" class="form-select" @invalid="handleInvalidUsername" @input="clearCustomValidity" required >
                <option v-for="loginUser in listOfLoginUsers" :key="loginUser.username" :value="loginUser.username">
                  {{ loginUser.username }}
                </option>
              </select>
              <span class="text-danger" v-if="v$.username.$error">{{ $t('please_select_username') }}</span>
            </div> <!--username-->
            <div class="mb-3">
              <label for="edtxtPassword" class="form-label custom-font-size">{{ $t('password') }}</label>
              <input v-model="signInUserForm.password" type="password" class="form-control" id="edtxtPassword" @invalid="handleInvalidPassword" @input="clearCustomValidity" required>
              <span class="text-danger" v-if="v$.password.$error">{{ $t('please_select_password') }}</span>
            </div> <!--password-->


            <div class="form-check form-check-inline" >
              <label class="form-check-label " for="chkBoxRememberIDUser" >{{ $t('remember_id_user') }}</label>
              <input class="form-check-input" type="checkbox" id="chkBoxRememberIDUser" v-model="rememberIdUser"
                     @change="chkRememberIDUser">
            </div>
            <div class="form-check form-check-inline">
              <label class="form-check-label " for="chkBoxRememberPassword">{{ $t('remember_password') }}</label>
              <input class="form-check-input text-end" type="checkbox" id="chkBoxRememberPassword"
                     v-model="rememberPassword" @change="chkRememberPassword">
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-primary form-control text-capitalize">{{$t('login_submit')}}
              </button>
            </div>
          </form>
          <hr/>
          <p class="text-center ">{{ $t('create_new_account') }}
            <router-link to="/signup">{{ $t('sign_up_page') }}</router-link>
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { onMounted, ref, watch, computed} from "vue";
import axios from "axios";
import {showToast} from "@/services/customToast";
import Cookies from "js-cookie";
import {useI18n} from "vue-i18n";
import {required} from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import {redirectTo} from "@/services/redirectTo";
import {useStore} from "vuex";

const { t } = useI18n()
const store = useStore()
const listOfBranches = ref([])
const listOfLoginUsers = ref([])

const rememberIdUser = ref(false);
const rememberPassword = ref(false);

/*
const errors = ref({
  username: '',
  password: '',
  branchId: '',
});
*/

const signInUserForm = ref({
  username: '',
  password: '',
  branchId: '',
})





// Handle the 'invalid' event for the select element

const handleInvalidBranchName = (event) => {
  event.target.setCustomValidity(t("please_select_branchename"));

  // errors.value.branchId = event.target.validationMessage;
};
// Clear custom validity when the user interacts with the field
const clearCustomValidity = (event) => {
  event.target.setCustomValidity("");
};

const handleInvalidUsername = (event) => {
  event.target.setCustomValidity(t("please_select_username"));
  // errors.value.branchId = event.target.validationMessage;
};

const handleInvalidPassword = (event) => {
  event.target.setCustomValidity(t("please_select_password"));
  // errors.value.branchId = event.target.validationMessage;
};


// End Handle the 'invalid' event for the select element

const chkRememberIDUser = () => {

  if (rememberIdUser.value) {

    if (signInUserForm.value.username !== null || signInUserForm.value.username !== "") {
      Cookies.set('rememberIdUser', signInUserForm.value.username, {
        secure: true,
        sameSite: 'Strict',
        httpOnly: false,
      });
    }
  } else {
    console.log(`hello I am rememberIdUser value: ${rememberIdUser.value}`)
    if (Cookies.get('rememberIdUser')) {
      console.log(`hello I am getting rememberIdUser value: ${Cookies.get('rememberIdUser')}`)
      Cookies.remove('rememberIdUser');
    }
  }

}
const chkRememberPassword = ()=>{

  if (rememberPassword.value){
    if (signInUserForm.value.password !== null || signInUserForm.value.password !== ""){
      Cookies.set('rememberPassword', signInUserForm.value.password,{
        secure: true,
        sameSite: 'Strict',
        httpOnly: false,
      });
    }
  }else{
    if (Cookies.get('rememberPassword')){
      Cookies.remove('rememberPassword');
    }
  }

}

watch(()=>signInUserForm.value.password, (newPassword)=>{
  if (rememberPassword.value){
    Cookies.set('rememberPassword', newPassword,{
            secure: true,
            sameSite: 'Strict',
            httpOnly: false,
          });
  }
})


// Start computed
// const hasUpperCase = (value) => /[A-Z]/.test(value) || 'Password must include at least one uppercase letter';
// const hasSpecialChar = (value) => /[!@#$%^&*]/.test(value) || 'Password must include at least one special character';
// const hasNumber = (value) => /\d/.test(value) || 'Password must include at least one number';
const rules = computed(() => ({
  branchId: { required, },
  username: { required, },
  password: { required,  },
}))
// End computed

// Vuelidate validation object
const v$ = useValidate(rules, signInUserForm)

const submitSignInUserForm = async ()=>{

  v$.value.$touch();
  if (!v$.value.$invalid){
    try {
      const resultOfSignInUser = await axios.post(
          'http://192.168.100.135:8000/v1/api/auth/login/',
          {
            username: signInUserForm.value.username,
            password: signInUserForm.value.password,
            branch_id: signInUserForm.value.branchId
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }
      );
      console.log(`username is: ${signInUserForm.value.username}`)
      console.log(`username is: ${signInUserForm.value.password}`)
      console.log(`username is: ${signInUserForm.value.branchId}`)
      /*const resultOfSignInUserGet = await axios.get(
          `https://foods.alkarmoshy.com/cashier_api/admin/login`,
          {
            params: {
              name: signInUserForm.value.username,
              password: signInUserForm.value.password,
            },
            headers: {
              'Accept': 'application/json',
            },
          }
      );*/

      /*if (token) {
        const result = await axios.get(
            'https://foods.alkarmoshy.com/cashier_api/protected-data',  // Example API endpoint
            {
              headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,  // Include the token in the Authorization header
              },
            }
        );*/


      if (resultOfSignInUser.status === 200 && resultOfSignInUser.data.status === "success"){
        Cookies.set('tokenOfUser', resultOfSignInUser.data.data.access_token,{
          expires: 1, // Cookie expiration in days
          secure: true, // Ensures cookie is only sent over HTTPS
          sameSite: 'Strict', // Helps prevent CSRF attacks
          httpOnly: false,
        });
        console.log(`print token of user: ${resultOfSignInUser.data.data.access_token}`)
        console.log("login success")
        // localStorage.setItem("isAdmin", JSON.stringify(true))
        setTimeout(() => {
          showToast(t('user_sign_in_successfully'), 'success')
        }, 1000);
        redirectTo(store, 'Dashboard')

      }

      console.log(`I am wrong password: ${resultOfSignInUser.status} && ${resultOfSignInUser.data.status}`)

      if(resultOfSignInUser.status === 401){
        console.log(`login failed ${resultOfSignInUser.data.status}`)
        console.log(`login failed ${resultOfSignInUser.data.message}`)
        setTimeout(() => {
          showToast("Invalid username or password", 'error')
        }, 1000);

      }

    } catch (e) {
      setTimeout(() => {
        showToast("wrong password", 'error')
      }, 1000);
      console.error('Error submitting form:', e)
    }
  }else {
    console.log('form invalid')
  }

}

onMounted(async ()=>{

  if (Cookies.get('rememberIdUser')){
    signInUserForm.value.username = Cookies.get('rememberIdUser')
    rememberIdUser.value = true
  }

  if (Cookies.get('rememberPassword')){
    signInUserForm.value.password = Cookies.get('rememberPassword')
    rememberPassword.value = true
  }



  let resultOfBranches = await axios.get(
      `http://192.168.100.135:8000/v1/api/branches/all/`
  );
  if (resultOfBranches.status === 200 && resultOfBranches.data.total > 0) {
    console.log(resultOfBranches.data);
    listOfBranches.value = resultOfBranches.data.data;
  }

  let resultOfLoginUsers = await axios.get(
      `http://192.168.100.135:8000/v1/api/users/get-login/`
  );
  if (resultOfLoginUsers.status === 200 && resultOfLoginUsers.data.total > 0) {
    console.log(resultOfLoginUsers.data);
    listOfLoginUsers.value = resultOfLoginUsers.data.data;
  }




})



</script>
<style scoped>

.custom-select{
  width: 350px;
  border-style: solid;
  border-color: grey;
}

.font-droid-arabic-kufi {
  font-family: 'Droid Arabic Kufi', sans-serif;
}

.custom-text-black{
  color:#000000;
}

.custom-font-size{
  font-size: 15px;
  font-weight: bold;
}

.custom-box-login {
  width: 30%;
  height: auto;
  border: #ddd solid thin;
  margin-bottom: 1%;
}

@media (max-width: 1024px) {
  .custom-box-login {
    width: 40%; /* Adjust width for tablets */
  }
}


@media (max-width: 768px) {
  .custom-box-login {
    width: 60%; /* Adjust width for tablets */
  }
}

@media (max-width: 480px) {
  .custom-box-login {
    width: 95%; /* Full width for mobile screens */

  }
}


</style>