<template>
  <SidebarCompo>
    <div class="card mainCompo p-3" >
      <div class="row mb-2">
        <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
          <button class="btn btn-success form-control" @click="saveData">{{ $t('add_button') }}</button>
        </div> <!--add button-->
      </div>

      <div class="card-body">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ $t('name_of_user') }}</th>
            <th scope="col">{{ $t('name_of_user') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
                  <button class="btn btn-primary form-control" @click="updateData">{{ $t('update_button') }}</button>
                </div> <!--update button-->
                <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
                  <button class="btn btn-danger form-control">{{ $t('delete_button') }}</button>
                </div> <!--delete button-->
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
              <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
                  <button class="btn btn-primary form-control" @click="updateData">{{ $t('update_button') }}</button>
                </div> <!--update button-->
                <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
                  <button class="btn btn-danger form-control">{{ $t('delete_button') }}</button>
                </div> <!--delete button-->
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SidebarCompo>
</template>

<script setup>
import SidebarCompo from "@/components/SideNav/SidebarCompo.vue";
import {redirectTo} from "@/services/redirectTo";
import store from "@/store/store";
// import Cookies from "js-cookie";

// const token = Cookies.get('tokenOfUser')
function saveData() {
  redirectTo(store, 'AddUserCompo')
}

function updateData() {
  redirectTo(store, 'UpdateUserCompo')
  // Add your data-saving logic here (e.g., API call).
}
</script>

<style lang="css" scoped>

.mainCompo{
  margin: 70px 20px 0 20px;
}

@media (max-width: 1024px) {

}


@media (max-width: 768px) {

}

@media (max-width: 480px) {

}


</style>