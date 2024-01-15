<template>
  <section id="app">
    <header>
      <h1>Profiles</h1>
    </header>
    <ul>
      <div>{{profile.id}}</div>
      <div>{{profile.name}}</div>
      <div>{{profile.phone}}</div>
      <div>
        <img :src="profile.img" alt="profile image" />
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        id: 1,
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
    }
  }
}

</script>



<style>

</style>