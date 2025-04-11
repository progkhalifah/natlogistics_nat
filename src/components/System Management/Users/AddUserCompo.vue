<template>
  <SidebarCompo>
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="card mainCompo p-3" >
          <div class="col-lg-12 col-md-12">
            <div class="row mb-3">
              <div class="col-8">
                <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('name_user') }}</label>
                <input type="text" class="form-control" id="edtxtNameCrAr">
              </div> <!--name user-->
              <div class="col-3 mt-5 form-check">
                <label for="checkDisableUser" class="form-check-label custom-font-size">{{ $t('disable_name_user') }}</label>
                <input type="checkbox" class="form-check-input" id="checkDisableUser">
              </div> <!--checkbox disable user-->
            </div>
            <div class="mb-3">
              <label for="selectInventoryAccountName" class="form-label custom-font-size">{{ $t('password') }}</label>
              <input type="password" class="form-control" id="selectInventoryAccountName">
            </div> <!--password-->
            <div class="mb-3">
              <label for="selectCashSalesAccountName" class="form-label custom-font-size">{{ $t('type_permission') }}</label>
              <input v-model="textNode" type="text" class="form-control" id="selectCashSalesAccountName">
            </div> <!--type permission-->
            <div class="mb-3">
              <label for="selectCreditSalesAccount" class="form-label custom-font-size">{{ $t('location_work') }}</label>
              <input v-model="textNode" type="text" class="form-control" id="selectCreditSalesAccount">
            </div> <!--location work-->
            <div class="row mb-3">
              <div class="col-8">
                <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('cash_default') }}</label>
                <input type="text" class="form-control" id="edtxtNameCrAr">
              </div> <!--name user-->
              <div class="col-3 mt-4">
                <button type="submit" class="btn btn-primary form-control">{{ $t('save_button') }}</button>
              </div> <!--checkbox disable user-->
            </div> <!--cash sales returns name-->
            <div class="mb-3">
              <p>{{ $t('pos_permission') }}</p>
              <div class="row p-1">
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('allowed_change_cash') }}</label>
                </div> <!--allowed_change_cash-->
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('enter_invoice_purchase') }}</label>
                </div> <!--enter_invoice_purchase-->
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('review_edit_invoice_closed') }}</label>
                </div> <!--review_edit_invoice_closed-->
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('show_quantity_available') }}</label>
                </div> <!--show_quantity_available-->
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('payment_vouchers') }}</label>
                </div> <!--payment vouchers-->
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('receipt_vouchers') }}</label>
                </div> <!--receipt vouchers-->
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('allow_sale_unavailable_quantity') }}</label>
                </div> <!--allow_sale_unavailable_quantity-->
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('show') }}</label>
                </div>
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('allowed_change_cash') }}</label>
                </div>
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('allowed_change_cash') }}</label>
                </div>
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('allowed_change_cash') }}</label>
                </div>
                <div class="me-1 form-check col-3">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">{{ $t('allowed_change_cash') }}</label>
                </div>
              </div>
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