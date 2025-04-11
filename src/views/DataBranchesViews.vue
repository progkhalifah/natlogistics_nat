<template>
  <SidebarCompo>
    <div class="card mainCompo p-3" >
      <div class="row mb-2">
        <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
          <button class="btn btn-success form-control" @click="saveData">{{ $t('add_button') }}</button>
        </div> <!--add button-->
        <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
          <button class="btn btn-primary form-control" @click="updateData">{{ $t('update_button') }}</button>
        </div> <!--update button-->
        <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
          <button class="btn btn-danger form-control">{{ $t('delete_button') }}</button>
        </div> <!--delete button-->
      </div>
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('name_branch') }}</label>
              <input v-model="textNode" type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--name branch-->
            <div class="mb-3">
              <label for="edtxtNoteCrAr" class="form-label custom-font-size">{{ $t('type_branch') }}</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1">
                <label class="form-check-label" for="exampleRadios1">
                  {{ $t('branch') }}
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                  {{ $t('inventory_branch_followed') }}
                </label>
              </div>
              <div class="row">
                <div class="col-4">
                  <input type="text" class="form-control col-2" id="edtxtNoteCrAr" disabled>
                </div>
                <div class="col-8">
                  <input type="text" class="form-control col-4" id="edtxtNoteCrAr" disabled>
                </div>
              </div>
            </div> <!--type branch-->
            <div>
              <h5 class="bg-success text-center text-white p-1 rounded">{{ $t('accounts_related_to_this_branch') }}</h5>
            </div>
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('inventory_account') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--inventory account name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('cash_sales_account') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--cash sales account name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('credit_sales_account') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--credit sales account name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('cash_sales_returns') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--cash sales returns name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('credit_sales_returns') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--credit sales returns name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('customer_folder') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--customer folder name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('supplier_folder') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--supplier folder name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('cash_folder') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--cash folder name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('banks_folder') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--banks folder name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('employees_folder') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--employees folder name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('trucks_folder') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--trucks folder name-->
            <div class="mb-3">
              <label for="edtxtNameCrAr" class="form-label custom-font-size">{{ $t('network_account') }}</label>
              <input type="text" class="form-control" id="edtxtNameCrAr" disabled>
            </div> <!--network account name-->
          </div>
          <div class="col-lg-6 col-md-12 border border-secondary-subtle rounded">
            <treeview :nodes="nodes" :config="config" @nodeFocus="getNode" @nodeOpened="addServerNode" style="cursor: pointer;">
              <template #loading-slot>
                <div class="progress">
                  <div class="indeterminate"></div>
                </div>
              </template>
            </treeview>
          </div>
        </div>
    </div>
  </SidebarCompo>
</template>

<script setup>
import SidebarCompo from "@/components/SideNav/SidebarCompo.vue";
import treeview from "vue3-treeview";
import {onMounted, ref} from "vue";
import {onUnmounted} from "vue-demi";
import {useStore} from "vuex";
import {redirectTo} from "@/services/redirectTo";
import axios from "axios";
import Cookies from "js-cookie";
// import {useI18n} from "vue-i18n";

// const { t } = useI18n()
const token = Cookies.get('tokenOfUser')
const textNode = ref("")
const store = useStore();

const nodes = ref([]);

// Define the config for the treeview
const config = ref({
  roots: [],
  label: 'branchname',  // Property to display in tree nodes
  id: 'id',             // Unique identifier for nodes
  children: 'children',
  openedIcon: {
    type: "shape",
    stroke: "black",
    strokeWidth: 2,
    fill: "none",
    viewBox: "0 0 24 24",
    draw: `
    M 4 8 L 12 16 L 20 8      // Arrow pointing down
  `,
  },
  closedIcon: {
    type: "shape",
    stroke: "black",
    strokeWidth: 2,
    fill: "none",
    viewBox: "0 0 24 24",
    draw: `
    M 16 4 L 8 12 L 16 20      // Arrow pointing right
  `,
  },

});
function transformArrayToObject(data) {
  const tree = {};

  data.forEach((item) => {
    tree[item.id] = {
      ...item,
      text: item.id + item.branchname,
      children: item.children.map((child) => child.id), // Map child IDs
    };
  });

  return tree;
}

function findRootNodes(data) {
  return Object.keys(data).filter((key) => data[key].fatherid === "0");
}



// Function to add server data when a node is opened
const addServerNode = (n) => {
  console.log("Node opened:", n);

  if (n.children && n.children.length > 0) return;

  // Set node loading state to tree
  n.state.isLoading = true;

  // Fake server call
  setTimeout(() => {
    // Create a fake node
    const id = `${Date.now()}`;
    const newNode = {
      text: `loaded from server`,
      children: [],
      state: {},
    };

    // Add the new node to the nodes
    nodes.value[id] = newNode;

    // Set children for the opened node
    n.children = [id];

    // End loading
    n.state.isLoading = false;
  }, 2000);
};

const getNode = (nodeData)=>{
  textNode.value = nodeData.text
  console.log(`node is ${nodeData.text}`)
}

function saveData() {
  redirectTo(store, 'AddDataBranches')
}

function updateData() {
  redirectTo(store, 'UpdateDataBranches')
  // Add your data-saving logic here (e.g., API call).
}

function handleKeydown(event) {
  if (event.key === 'F12') {
    event.preventDefault(); // Prevent default browser action.
    saveData();
  }

  if (event.key === 'F11') {
    event.preventDefault(); // Prevent default browser action.
    updateData();
  }


}

/*function onNodeClick(node) {
  console.log("Node clicked:", node);
}

function toggleExpand(node) {
  node.open = !node.open;
}*/



// End Handle the 'invalid' event for the select element
onMounted(async () => {
  window.addEventListener('keydown', handleKeydown);

  const resultOfTreeBranches = await axios.get(
      `http://192.168.100.135:8000/v1/api/tblaccount/all/`,
      {
        headers:{
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      }
  );

  if(resultOfTreeBranches.status === 200 && resultOfTreeBranches.data.status === 'success' ){
    nodes.value = transformArrayToObject(resultOfTreeBranches.data.data)
    config.value.roots = findRootNodes(nodes.value);
    console.log(`the tree : ${JSON.stringify(resultOfTreeBranches.data.data)}`)
  }

});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});


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