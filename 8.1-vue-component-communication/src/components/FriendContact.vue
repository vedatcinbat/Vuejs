<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite ? "(Favorite)" : '' }}</h2>
    <button @click="toggleFavorite">Toggle Details</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  /*props: [
      'name',
      'phoneNumber',
      'emailAddress',
      'isFavorite'
  ],*/
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: this.name,
        phone: this.phoneNumber,
        email: this.emailAddress,
      },
      friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    }
  }
};
</script>