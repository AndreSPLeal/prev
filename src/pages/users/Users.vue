<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users.users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="prev">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="next">Next</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="refresh">Refresh</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "Users",
  setup() {
    const users = ref([]);
    //const page = ref(1);

    onMounted(async () => {
      const { data } = await axios.get('');
      users.value = data;
      console.log(users.value);
    });

    const next = () => {
      console.log("next");
    };

    const prev = () => {
      console.log("prev");
    };

    const refresh = () => {
      console.log("update");
    };

    return {
      users,
      next,
      prev,
      refresh
    };
  },
};
</script>