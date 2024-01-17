<script>
import AboutCertificateSingle from "@/components/about/AboutCertificateSingle.vue";
import certificates from "@/data/certificates";

export default {
  components: {AboutCertificateSingle},
  data: () => {
    return {
      clientsHeading: 'Several certificates that I have achieved',
      certificates
    };
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <p
        class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-3 mt-10 sm:mt-14 gap-6">
      <AboutCertificateSingle
          v-for="cert in certificates"
          :key="cert.id"
          :certificates="cert"
      />
    </div>
  </div>
</template>
