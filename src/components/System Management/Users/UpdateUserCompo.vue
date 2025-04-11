<template>
  <SidebarCompo>
    <div class="card mainCompo" >
      <div class="card-header">
        <h3>I am card header</h3>
      </div>
      <div class="card-body">
        <h3>I am card Body</h3>
      </div>
      <div class="card-footer">
        <h3>I am card footer</h3>
      </div>
    </div>
  </SidebarCompo>
</template>

<script setup>
import SidebarCompo from "@/components/SideNav/SidebarCompo.vue";

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