<template>
  <div class="main">
    <form @submit.prevent="addMessage">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{ error }}</p>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="message.username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter a screen name"
          required
        />
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          v-model="message.subject"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter a subject"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="message.message" class="form-control" id="message" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input
          v-model="message.imageURL"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Enter URL to an image"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Message</button>
    </form>

    <div class="list-unstyled" v-for="message in reversedMessages" :key="message._id">
      <li class="media">
        <img v-if="message.imageURL" class="mr-3" :src="message.imageURL" :alt="message.subject" />
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{ message.username }}</h4>
          <h5 class="mt-0 mb-1">{{ message.subject }}</h5>
          {{ message.message }}
          <br />
          <small>{{ message.created }}</small>
        </div>
      </li>
      <hr />
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = `${window.location.protocol}//${window.location.host}/messages`;

export default {
  name: "home",
  data: () => ({
    error: "",
    messages: [],
    message: {
      username: "",
      subject: "",
      message: "",
      imageURL: ""
    }
  }),
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  mounted() {
    axios
      .get(API_URL)
      .then(response => {
        this.messages = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    addMessage() {
      axios
        .post(API_URL, this.message)
        .then(response => {
          this.messages.push(response.data);
          this.error = "";
        })
        .catch(error => {
          console.log(error);
          this.error = "Something went wrong with saving form data!";
        });
    }
  }
};
</script>

<style>
form,
.list-unstyled {
  max-width: 800px;
  margin: 2em auto 5em;
}

img {
  max-width: 300px;
  height: auto;
}
</style>
