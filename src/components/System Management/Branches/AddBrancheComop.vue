<template>
  <SidebarCompo>
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="card mainCompo p-3" >
            <div class="col-lg-12 col-md-12">
              <div class="mb-3">
                <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('name_branch') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="edtxtNameCrAr">
              </div> <!--name branch-->
              <div class="mb-3">
                <label for="edtxtNoteCrAr" class="form-label custom-font-size"  >{{ $t('type_branch') }}</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" v-model="selectedOption">
                  <label class="form-check-label" for="exampleRadios1">{{ $t('branch') }}</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" v-model="selectedOption">
                  <label class="form-check-label" for="exampleRadios2">{{ $t('inventory_branch_followed') }}</label>
                </div>
                <div class="row">
                  <div class="col-4">
                    <input type="text" class="form-control col-2" id="edtxtNoteCrAr" :disabled="selectedOption !== 'option2'">
                  </div>
                  <div class="col-8">
                    <input type="text" class="form-control col-4" id="edtxtNoteCrAr" :disabled="selectedOption !== 'option2'">
                  </div>
                </div>
              </div> <!--type branch-->
              <div>
                <h5 class="bg-success text-center text-white p-1 rounded">{{ $t('accounts_related_to_this_branch') }}</h5>
              </div>
              <div class="mb-3">
                <label for="selectInventoryAccountName" class="form-label custom-font-size">{{ $t('inventory_account') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectInventoryAccountName" list="datalistInventoryAccountName" :placeholder="$t('type_to_search')">
                <datalist id="datalistInventoryAccountName">
                  <option value="San Francisco"></option>
                  <option value="New York"></option>
                  <option value="Seattle"></option>
                  <option value="Los Angele"></option>
                  <option value="Chicago"></option>
                </datalist>
              </div> <!--inventory account name-->
              <div class="mb-3">
                <label for="selectCashSalesAccountName" class="form-label custom-font-size">{{ $t('cash_sales_account') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectCashSalesAccountName" list="datalistCashSalesAccountName" :placeholder="$t('type_to_search')">
                <datalist id="datalistCashSalesAccountName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--cash sales account name-->
              <div class="mb-3">
                <label for="selectCreditSalesAccount" class="form-label custom-font-size">{{ $t('credit_sales_account') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectCreditSalesAccount" list="datalistCreditSalesAccountName" :placeholder="$t('type_to_search')">
                <datalist id="datalistCreditSalesAccountName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--credit sales account name-->
              <div class="mb-3">
                <label for="selectCashSalesReturnsName" class="form-label custom-font-size">{{ $t('cash_sales_returns') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectCashSalesAccountName" list="datalistCashSalesReturnsName" :placeholder="$t('type_to_search')">
                <datalist id="datalistCashSalesReturnsName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--cash sales returns name-->
              <div class="mb-3">
                <label for="selectCreditSalesReturnsName" class="form-label custom-font-size">{{ $t('credit_sales_returns') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectCreditSalesReturnsName" list="datalistCreditSalesReturnsName" :placeholder="$t('type_to_search')">
                <datalist id="datalistCreditSalesReturnsName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--credit sales returns name-->
              <div class="mb-3">
                <label for="selectCustomerFolderName" class="form-label custom-font-size">{{ $t('customer_folder') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectCustomerFolderName" list="datalistCustomerFolderName" :placeholder="$t('type_to_search')">
                <datalist id="datalistCustomerFolderName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--customer folder name-->
              <div class="mb-3">
                <label for="selectSupplierFolderName" class="form-label custom-font-size">{{ $t('supplier_folder') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectSupplierFolderName" list="datalistSupplierFolderName" :placeholder="$t('type_to_search')">
                <datalist id="datalistSupplierFolderName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--supplier folder name-->
              <div class="mb-3">
                <label for="selectCashFolderName" class="form-label custom-font-size">{{ $t('cash_folder') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectCashFolderName" list="datalistCashFolderName" :placeholder="$t('type_to_search')">
                <datalist id="datalistCashFolderName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--cash folder name-->
              <div class="mb-3">
                <label for="selectBanksFolderName" class="form-label custom-font-size">{{ $t('banks_folder') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectBanksFolderName" list="datalistBandFolderName" :placeholder="$t('type_to_search')">
                <datalist id="datalistBandFolderName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--banks folder name-->
              <div class="mb-3">
                <label for="selectEmployeesFolderName" class="form-label custom-font-size">{{ $t('employees_folder') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectCashFolderName" list="datalistEmployeesFolderName" :placeholder="$t('type_to_search')">
                <datalist id="datalistEmployeesFolderName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--employees folder name-->
              <div class="mb-3">
                <label for="selectTrucksFolderName" class="form-label custom-font-size">{{ $t('trucks_folder') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectTrucksFolderName" list="datalistTrucksFolderName" :placeholder="$t('type_to_search')">
                <datalist id="datalistTrucksFolderName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--trucks folder name-->
              <div class="mb-3">
                <label for="selectNetworkFolderName" class="form-label custom-font-size">{{ $t('network_account') }}</label>
                <input v-model="textNode" type="text" class="form-control" id="selectNetworkFolderName" list="datalistNetworkFolderName" :placeholder="$t('type_to_search')">
                <datalist id="datalistNetworkFolderName">
                  <option value="sd3f2"></option>
                  <option value="s56df"></option>
                  <option value="s3d2f13ds2"></option>
                  <option value="s63dfa1s2d"></option>
                  <option value="s5dfsdf"></option>
                </datalist>
              </div> <!--network account name-->
              <div class="mb-3">
                <button type="submit" class="btn btn-primary form-control">{{ $t('save_button') }}</button>
              </div> <!--network account name-->

            </div>
        </div>
      </div>
      <div class="col-lg-2"></div>
    </div>

  </SidebarCompo>
</template>

<script setup>
import SidebarCompo from "@/components/SideNav/SidebarCompo.vue";
import {onMounted, ref} from "vue";


const selectedOption = ref('option2'); // Default selection.











onMounted(()=>{

});




// Handle the 'invalid' event for the select element

// const handleInvalidNameCrAr = (event) => {
//   event.target.setCustomValidity(t("please_select_branchename"));
// };
// const handleInvalidNoteCrAr = (event) => {
//   event.target.setCustomValidity(t("please_select_username"));
// };
// const handleInvalidImageCr = (event) => {
//   event.target.setCustomValidity(t("please_select_password"));
//   // errors.value.branchId = event.target.validationMessage;
// };
// const handleInvalidNameCrEn = (event) => {
//   event.target.setCustomValidity(t("please_select_branchename"));
// };
// const handleInvalidNoteCrEn = (event) => {
//   event.target.setCustomValidity(t("please_select_username"));
// };
//
// const clearCustomValidity = (event) => {
//   event.target.setCustomValidity("");
// };


</script>

<style lang="css" scoped>

.mainCompo{
  margin: 5px 20px 0 20px;
}

@media (max-width: 1024px) {

}


@media (max-width: 768px) {

}

@media (max-width: 480px) {

}


</style>