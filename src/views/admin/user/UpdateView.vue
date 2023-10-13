<script setup>
import Adminlayot from "@/layout/Adminlayot.vue";
//----------------------------------------------------------------
import { useAdminUserStore } from "@/stores/admin/user";
import { onMounted, reactive, ref } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useEventStore } from "@/stores/event";
//----------------------------------------------------------------
const eventStore= useEventStore();
const adminUserStore = useAdminUserStore();
const route = useRoute();
const router = useRouter();
const userIndex = ref(-1)
const formData = [
  {
    name: "Name",
    field: "fullname",
    type: "text",
  },
  {
    name: "Role",
    field: "role",
    type: "select",
    dropdownlist: ["admin", "moderator", "user"],
  },
  {
    name: "Status",
    field: "status",
    type: "select",
    dropdownlist: ["active", "inactive"],
  },
];
const Datauser = reactive({
  name:"",
  role: "",
  status: "",
});
onMounted(()=>{
if (route.params.id) {
  userIndex.value = parseInt(route.params.id);
  const selectedUser = adminUserStore.getUser(userIndex.value)
  Datauser.fullname = selectedUser.fullname
  Datauser.role = selectedUser.role
  Datauser.status = selectedUser.status
}
})
const updateUser = () => {
  adminUserStore.updateUser(userIndex.value,Datauser);
  eventStore.popupMessage('success','updated user successfully')
  router.push({name:'admin-user-list'})
};
</script>
<template>
  <Adminlayot>
    <div class="shadow-xl rounded-xl p-8 mt-4">
      <div class="text-xl font-bold capitalize">update user</div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2">
        <div class="form-control w-full" v-for="form in formData">
          <label class="label">
            <span class="label-text">{{ form.name }}</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
            v-if="form.type === 'text'"
            v-model="Datauser[form.field]"
          />
          <select class="select select-bordered" v-if="form.type === 'select'" v-model="Datauser[form.field]">
            <option disabled selected>select {{ form.name }}</option>
            <option v-for="item in form.dropdownlist">{{ item }}</option>
          </select>
        </div>
      </div>
      <div class="mt-4 flex justify-end gap-3">
        <RouterLink :to="{ name: 'admin-user-list' }">
          <button class="btn btn-ghost capitalize">back</button>
        </RouterLink>

        <button
          class="btn shadow text-white bg-maire hover:bg-neutral capitalize"
          @click="updateUser()"
        >
          update user
        </button>
      </div>
    </div>
  </Adminlayot>
</template>
