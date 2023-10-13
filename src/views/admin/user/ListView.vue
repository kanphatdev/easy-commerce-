<script setup>
import Adminlayot from "@/layout/Adminlayot.vue";
import Table from "@/components/Table.vue";

//----------------------------------------------------------------
import Edit from "@/components/icons/Edit.vue";
import Disable from "@/components/icons/Shield.vue";
//----------------------------------------------------------------
import { useAdminUserStore } from "@/stores/admin/user";
import { RouterLink } from "vue-router";
import { useEventStore } from "@/stores/event";
//----------------------------------------------------------------
const adminUserStore = useAdminUserStore();
const eventStore= useEventStore();
//----------------------------------------------------------------
const changeStatus = (index) => {
  let selectedUser = adminUserStore.list[index];
  selectedUser.status = selectedUser.status === "active" ? "inactive" : "active";
  adminUserStore.updateUser(selectedUser);
};
</script>
<template>
  <Adminlayot>
    <div class="flex items-center justify-between my-4">
      <div class="capitalize text-3xl font-bold">user list</div>
    </div>
    <Table :headers="['name', 'role', 'status', 'update at', 'action']">
      <tr v-for="(user, index) in adminUserStore.list" class="text-center">
        <td>{{ user.fullname }}</td>
        <td>{{ user.role }}</td>
        <td>
          <div
            class="badge uppercase"
            :class="user.status === 'active' ? 'badge-success' : 'badge-error'  "
          >
            {{ user.status }}
          </div>
        </td>
        <td>{{ user.updatedAt }}</td>

        <td>
          <div class="flex justify-center gap-2">
            <RouterLink :to="{ name: 'admin-user-update', params: { id: index } }">
              <button class="btn btn-square btn-ghost text-orange-400">
                <Edit></Edit>
              </button>
            </RouterLink>
            <button
              class="btn btn-square btn-ghost"
              :class="user.status === 'active' ? 'text-mint' : 'text-red-400'"
              @click="changeStatus(index)"
            >
              <Disable></Disable>
            </button>
          </div>
        </td>
      </tr>
    </Table>
  </Adminlayot>
</template>
