import { createRouter, createWebHistory } from 'vue-router'
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import DashboardView from "@/views/DashboardView.vue";
import DataCRCompo from "@/components/System Management/DataCRCompo.vue";
import DataBranchesViews from "@/views/DataBranchesViews.vue";
import AddBrancheComop from "@/components/System Management/Branches/AddBrancheComop.vue";
import UpdateBrancheComop from "@/components/System Management/Branches/UpdateBrancheComop.vue";
import DataUsersView from "@/views/DataUsersView.vue";
import AddUserCompo from "@/components/System Management/Users/AddUserCompo.vue";
import UpdateUserCompo from "@/components/System Management/Users/UpdateUserCompo.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/singin",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/singin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  //////////////////////// System Management /////////////////

  {
    path: "/system-management/data-commercial-registration",
    name: "DataCR",
    component: DataCRCompo,
  },

  // Data Branches //
  {
    path: "/system-management/data-branches",
    name: "DataBranches",
    component: DataBranchesViews,
  },

  {
    path: "/system-management/add-data-branch",
    name: "AddDataBranches",
    component: AddBrancheComop,
  },
  {
    path: "/system-management/update-data-branches",
    name: "UpdateDataBranches",
    component: UpdateBrancheComop,
  },
// End Data Branches //

  // Data Users //
  {
    path: "/system-management/data-users",
    name: "DataUsers",
    component: DataUsersView,
  },

  {
    path: "/system-management/add-data-user",
    name: "AddUserCompo",
    component: AddUserCompo,
  },

  {
    path: "/system-management/update-data-user",
    name: "UpdateUserCompo",
    component: UpdateUserCompo,
  },

// End Data Branches //




  // End System Management //



  //////////////////////// End System Management /////////////////


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
