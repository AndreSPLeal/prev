
<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Register</h1>

      <input v-model="name" class="form-control" placeholder="Name" />

      <input
        v-model="email"
        type="email"
        class="form-control"
        placeholder="name@example.com"
      />

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      <router-link to="/users" active-class="active" class="nav-link">
        Back
      </router-link>
    </form>
  </main>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "Register",
  setup() {
    const name = ref("");
    const email = ref("");

    const router = useRouter();

    const submit = async () => {
      const resp = await axios.put("", [
        {
          name: name.value,
          email: email.value,
        },
      ]);
      console.log(resp);

      await router.push("/users");
    };

    return {
      name,
      email,
      submit,
    };
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
