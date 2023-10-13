<script setup>
import Userlayot from "@/layout/Userlayot.vue";
//----------------------------------------------------------------
//config
import { ref,onMounted } from "vue";
//variable
const profileImageUrl = ref('https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
const email = ref('')
const name = ref('')

//----------------------------------------------------------------
//function
const handleFileUpload = (event)=>{
const file = event.target.files[0]
if (file) {
  const reader = new FileReader()
  reader.onload =(e)=>{
profileImageUrl.value = e.target.result
  }
  reader.readAsDataURL(file)
}
}
const updateProfile =()=>{
  const profileData ={
    imageUrl:profileImageUrl.value,
    email:email.value,
    name:name.value
  }
  localStorage.setItem('profile-data',JSON.stringify(profileData) )
}
onMounted(()=>{
  const profileData =localStorage.getItem('profile-data')
  if (profileData) {
    JSON.parse(profileData)
    profileImageUrl.value = profileData.imageUrl
    name.value =profileData.name
    email.value = profileData.email
  }
})
</script>

<template>
  <main>
    <Userlayot>
      <div
        class="border border-base-200 shadow-xl max-w-2xl mx-auto p-8 my-4 rounded-xl"
      >
        <div class="capitalize font-bold text-2xl">your profile</div>
        <div class="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                :src="profileImageUrl"
                alt=""
              />
            </div>
          </div>
          <div class="form-control w-full flex flex-col items-center">
            <label class="label"> </label>
            <input
              type="file"
              @change="handleFileUpload"
              class="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text capitalize">name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              v-model="name"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text capitalize">email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              v-model="email"
            />
          </div>
          <button class="btn btn-active btn-neutral w-full mt-4" @click="updateProfile">
            update profile
          </button>
        </div>
      </div>
    </Userlayot>
  </main>
</template>
