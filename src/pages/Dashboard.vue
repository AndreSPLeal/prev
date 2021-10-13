<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      
      <h1 class="h3 mb-3 fw-normal">Dashboard</h1>
      <label>Gerar massa.</label>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";


export default {
  name: "Dashboard",
  
  setup() {
    const router = useRouter();
    const init = {
      users: [
        {
          id: 1,
          name: "André",
          email: "a@a",
        },
        {
          id: 2,
          name: "João",
          email: "j@j",
        },
        {
          id: 3,
          name: "Carlos",
          email: "c@c",
        },
        {
          id: 4,
          name: "Antonio",
          email: "a@a",
        },
        {
          id: 5,
          name: "Fernando",
          email: "f@f",
        },
        {
          id: 6,
          name: "José",
          email: "j@j",
        },
        {
          id: 7,
          name: "Tiago",
          email: "t@t",
        },
        {
          id: 8,
          name: "Felipe",
          email: "j@j",
        },
        {
          id: 9,
          name: "Eduardo",
          email: "j@j",
        },
        {
          id: 10,
          name: "Luiz",
          email: "j@j",
        },
        {
          id: 11,
          name: "Last",
          email: "j@j",
        },
      ],
    };

    const submit = async () => {
      const resp = await axios.put("", init);
      console.log(resp);

      await router.push("/users");
    };

    return {
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
</style>
