<template>
  <section>
    <sec-header></sec-header>
    <sec-hero></sec-hero>
    <sec-about></sec-about>
    <sec-access></sec-access>
    <sec-sponsor :sponsors="sponsors"></sec-sponsor>
    <sec-staff :staffs="staffs"></sec-staff>
    <sec-footer></sec-footer>
  </section>
</template>

<script>
  import secHeader from '~/components/header.vue'
  import secHero from '~/components/pages/Top/Hero.vue'
  import secAbout from '~/components/pages/Top/About.vue'
  import secAccess from '~/components/pages/Top/Access.vue'
  import secSponsor from '~/components/pages/Top/Sponsor.vue'
  import secStaff from '~/components/pages/Top/Staff.vue'
  import secFooter from '~/components/Footer.vue'

  export default {
    async asyncData({store}) {
      const [sponsors,staffs] = await Promise.all([
        store.dispatch("fetchSponsors"),
        store.dispatch("fetchStaffs"),
      ])
      return {
        sponsors,
        staffs
      }
    },
    components: {
      secHeader,
      secHero,
      secAbout,
      secAccess,
      secSponsor,
      secStaff,
      secFooter,
    },
  }
</script>

<style>

</style>
