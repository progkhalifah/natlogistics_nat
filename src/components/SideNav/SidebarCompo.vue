<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr' ">
    <!-- Side navigation bar -->
    <div
        id="mySidenav"
        :style="{ width: sideNavWidth }"
        :class="{ 'sidenav-rtl': $i18n.locale === 'ar', 'sidenav-ltr': $i18n.locale !== 'ar' , }"
    >
      <router-link :to="{name: 'Dashboard'}">{{ $t('dashboard_admin') }}</router-link>
      <a data-bs-toggle="collapse" href="#collapseSystemManagement" role="button" aria-expanded="false" aria-controls="collapseUsers">{{$t('system_management')}}</a>
      <div class="collapse m-1 rounded bg-white" id="collapseSystemManagement" >
        <router-link class="text-black" :to="{name: 'DataCR'}">{{ $t('data_commercial_registration') }}</router-link>
        <router-link class="text-black" :to="{name: 'DataBranches'}">{{ $t('data_branches') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignIn'}">{{ $t('data_secure') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('users_permissions') }}</router-link>
        <router-link class="text-black" :to="{name: 'DataUsers'}">{{ $t('users_data') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('data_currency') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('program_options') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('backup') }}</router-link>
      </div>

      <a data-bs-toggle="collapse" href="#collapseAccounts" role="button" aria-expanded="false"
         aria-controls="collapseUsers">{{ $t('accounts') }}</a>
      <div class="collapse m-1 rounded bg-white" id="collapseAccounts">
        <router-link class="text-black" :to="{name: 'Dashboard'}">{{ $t('accounting_guide') }}</router-link>
        <router-link class="text-black" :to="{name: 'Dashboard'}">{{ $t('chart_of_accounts') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignIn'}">{{ $t('add_an_entry') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('journal_ledger') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('receipt_vouchers') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('payment_vouchers') }}</router-link>
        <hr class="text-black"/>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_receipt_vouchers') }}</router-link>
        <hr class="text-black"/>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_detailed_account_statement') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_summary_of_account_balances') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_trial_balance') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_balance_sheet') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_profit_and_loss_statement') }}</router-link>
      </div>

      <a data-bs-toggle="collapse" href="#collapseLandTransport" role="button" aria-expanded="false"
         aria-controls="collapseUsers">{{ $t('land_transport') }}</a>
      <div class="collapse m-1 rounded bg-white" id="collapseLandTransport">
        <router-link class="text-black" :to="{name: 'Dashboard'}">{{ $t('transportation_invoice') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignIn'}">{{ $t('transport_order') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('consolidated_invoice_for_the_customer') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('consolidated_invoice_for_the_customers_lessor') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_consolidated_invoices_report') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_operating_profit_report_for_shipments') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('report_tax_declaration') }}</router-link>
        <hr class="text-black"/>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('customer_list') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('supplier_list') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('data_drivers') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('data_trucks') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('data_trailer') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('types_of_trailers') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('materials_purchase_prices') }}</router-link>
      </div>

      <a data-bs-toggle="collapse" href="#collapseSystemServices" role="button" aria-expanded="false"
         aria-controls="collapseUsers">{{ $t('system_services') }}</a>
      <div class="collapse m-1 rounded bg-white" id="collapseSystemServices">
        <router-link class="text-black" :to="{name: 'Dashboard'}">{{ $t('technical_support') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignIn'}">{{ $t('change_password') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('command_sql') }}</router-link>
        <router-link class="text-black" :to="{name: 'SignUp'}">{{ $t('schedule_content') }}</router-link>
      </div>

    </div>

    <!-- Main content -->
    <div id="main" :style="{ [mainDirection]: mainLeftMargin }">
      <!-- Navbar -->
      <nav class="navbar " :style="{width: navWidth}">
        <span @click="openCloseNav()" class="menu-icon">&#9776;</span>
        <ul class="navbar-links">
          <li>
            <div class="dropdown">
              <font-awesome-icon class="custom-font-awesome" :icon="['fas', 'globe']" data-bs-toggle="dropdown" aria-expanded="false"/>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" @click="switchLanguage('en')">English</button>
                </li>
                <li>
                  <button class="dropdown-item" @click="switchLanguage('ar')">العربية</button>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <font-awesome-icon class="custom-font-awesome" :icon="['fas', 'arrow-right-from-bracket']" @click="logout"/>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <slot/>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import {computed, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useStore} from "vuex";
import Cookies from "js-cookie";
import {redirectTo} from "@/services/redirectTo";


// Reactive variables for dynamic styles
const sideNavWidth = ref("17%");
const mainLeftMargin = ref("17%");
const navWidth = ref("83%");

const store = useStore();
const { locale } = useI18n()

// Function to open the side navigation
// Determine the layout direction
const isRtl = computed(() => locale.value === 'ar');
const mainDirection = computed(() => (isRtl.value ? 'marginRight' : 'marginLeft'));
const logout = ()=>{
  removeAllCookies();
  redirectTo(store, 'SignIn')
}

function removeAllCookies() {
  // Get all cookies
  const cookies = Cookies.get();  // Get all cookies as an object

  // Loop through all cookies and remove each one
  Object.keys(cookies).forEach(cookieName => {
    // Remove each cookie (no need for domain or path here)
    Cookies.remove(cookieName);
  });
}
const openCloseNav = ()=>{

  if (sideNavWidth.value === "17%" && mainLeftMargin.value === "17%"){
    sideNavWidth.value = "0";
    mainLeftMargin.value = "0";
    navWidth.value = "100%";
  }else {
    sideNavWidth.value = "17%";
    mainLeftMargin.value = "17%";
    navWidth.value = "83%"
  }

}


// Create a computed property for the current language state
// Computed property to get the current language
const isEnglish = computed(() => store.getters.currentLanguage === 'en');

// Method to switch language
const switchLanguage = (lang) => {
  if (lang === 'en') {
    if (!isEnglish.value) store.dispatch('changeLanguage'); // Toggle to English
    locale.value = 'en'; // Update i18n locale
  } else {
    if (isEnglish.value) store.dispatch('changeLanguage'); // Toggle to Arabic
    locale.value = 'ar'; // Update i18n locale
  }
};

/*

// Remove the cookie 'tokenOfUser' with path
Cookies.remove('tokenOfUser', { path: '' });

// Remove the cookie 'tokenOfUser' with domain
Cookies.remove('tokenOfUser', { domain: 'example.com' });

// Usage: Call this function to remove all cookies
removeAllCookies();


*/

</script>

<style lang="css" scoped>
/* General Reset */
body {
  margin: 0;
  background-color: #42b983;
}

/* Navbar Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2581C4;
  color: white;
  padding: 10px 20px;
  position: fixed;
  width: 87%;
  top: 0;
  z-index: 1000;
  transition: 0.5s;

}

.navbar-title {
  margin: 0;
}

.menu-icon {
  cursor: pointer;
  font-size: 20px;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: #E9BE46;
  text-decoration: none;
}

.navbar-links a:hover {
  text-decoration: underline;
}

/* Side Navigation Bar */
.sidenav-ltr {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #2581C4;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  color: white;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.sidenav-rtl {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #2581C4;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  color: white;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.sidenav-ltr::-webkit-scrollbar {
  display: none;
}

.sidenav-rtl::-webkit-scrollbar {
  display: none;
}

/* Side navigation links */
.sidenav-rtl a{
  padding: 8px 10px 8px 8px;
  text-decoration: none;
  font-size: 18px;
  color: #E9BE46;
  display: block;
  transition: 0.3s;
}

.sidenav-ltr a{
  padding: 8px 8px 8px 10px;
  text-decoration: none;
  font-size: 18px;
  color: #E9BE46;
  display: block;
  transition: 0.3s;
}

.sidenav-ltr a:hover,
.sidenav-rtl a:hover{
  background-color: #23B9D7;
}

.sidenav-ltr .closebtn,
.sidenav-rtl .closebtn {
  position: absolute;
  top: 0;
  font-size: 36px;
}

.sidenav-ltr .closebtn {
  right: 25px;
}

.sidenav-rtl .closebtn {
  left: 25px;
}

/* Main Content */
/*#main {
  transition: margin-left 0.5s; !* Smooth transition *!
  margin-top: 60px; !* Adjust for navbar height *!
}*/

#main {
  transition: margin 0.5s; /* Smooth transition for margin changes */
  margin-top: 60px; /* Adjust for navbar height */
}

.custom-font-awesome{
  color: white;
  cursor: pointer;
}

@media (max-width: 1024px) {

}

/* Tablet Screen*/
@media (max-width: 768px) {

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2581C4;
    color: #E9BE46;
    padding: 10px 20px;
    position: fixed;
    width: 87%;
    top: 0;
    z-index: 1000;
    transition: 0.5s;

  }

  /* Side Navigation Bar */
  .sidenav-ltr {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    color: white;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .sidenav-rtl {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 10%;
    background-color: #2581C4;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    color: white;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .sidenav-ltr::-webkit-scrollbar {
    display: none;
  }

  .sidenav-rtl::-webkit-scrollbar {
    display: none;
  }

  /* Side navigation links */
  .sidenav-rtl a{
    padding: 8px 10px 8px 8px;
    text-decoration: none;
    font-size: 18px;
    color: black;
    display: block;
    transition: 0.3s;
  }

  .sidenav-ltr a{
    padding: 8px 8px 8px 10px;
    text-decoration: none;
    font-size: 18px;
    color: #E9BE46;
    display: block;
    transition: 0.3s;
  }

  .sidenav-ltr .closebtn,
  .sidenav-rtl .closebtn {
    position: absolute;
    top: 0;
    font-size: 36px;
  }

  .sidenav-ltr .closebtn {
    right: 25px;
  }

  .sidenav-rtl .closebtn {
    left: 25px;
  }


}
/* End Tablet Screen*/

/* Phone Screen*/
@media (max-width: 480px) {

}
/* End Phone Screen*/
</style>


<!--
<template>

  <div dir="rtl" id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div dir="rtl" id="main">
    <h2>Sidenav Push Example</h2>
    <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
    <span style="font-size:30px;cursor:pointer" @click="openNav()">&#9776; open</span>
  </div>

</template>

<script setup>

const closeNav = ()=> {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const openNav = ()=> {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

</script>

<style lang="css" scoped>

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>


-->
 <!--w3School-->

<!--
<template>
  <div id="sidebar-container" class="d-flex">
    &lt;!&ndash; Sidebar &ndash;&gt;
    <nav
        :class="['sidebar', { 'sidebar-collapsed': isCollapsed }]"
        class="bg-dark text-white vh-100 p-3" v-show="sidebarShow"
    >
      <h5 class="text-center" v-show="sidebarShow">My App</h5>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact</a>
        </li>

      </ul>
    </nav>

    &lt;!&ndash; Main Content &ndash;&gt;
    <div class="content flex-grow-1">
      &lt;!&ndash; Navbar &ndash;&gt;
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
              class="btn btn-outline-light me-2"
              @click="toggleSidebar"
          >
            <i class="bi bi-list"></i>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>
          <button @click="hideSideBar">Click me</button>
        </div>
      </nav>
      <slot/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// State to manage sidebar collapse
const isCollapsed = ref(false);

const sidebarShow = ref(true);

const hideSideBar = ()=>{

  sidebarShow.value = !sidebarShow.value;

}

// Toggle the sidebar
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
/* Sidebar Styling */
.sidebar {
  width: 290px;
  height: auto;
}
.sidebar-collapsed {
  width: 80px;
}

.sidebar ul {
  list-style: none;
  padding-left: 0;
  height: auto;
}

.sidebar a {
  padding: 10px 15px;
  display: block;
  color: white;
  text-decoration: none;
  transition: background 0.3s;
}

.sidebar a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Main Content Styling */
.content {
  overflow-x: hidden;
}

/* Responsive Adjustments (Optional) */
@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }
  .sidebar-collapsed {
    width: 60px;
  }
}
</style>
-->
