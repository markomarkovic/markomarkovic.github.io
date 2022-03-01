<script setup>
function old(y = 1980, m = 6, d = 17) {
  const bday = new Date(y, m - 1, d)
  const now = new Date()
  let years = now.getFullYear() - bday.getFullYear()
  let months = now.getMonth() - bday.getMonth()
  let days = now.getDate() - bday.getDate()
  if (months < 0) {
    years--
    months += 12
  }
  if (days < 0) {
    months = Math.max(0, months - 1)
    days += 30
  }
  let msg = `${years} years`
  if (months !== 0) {
    msg += `, ${months} months`
  }
  if (days !== 0) {
    msg += `, ${days} days`
  }
  msg += ' old'
  return msg
}
</script>

<template>
  <div class="max-w-2xl mx-auto mx-4 px-4 mt-10">
    <h1 class="font-normal leading-tight text-3xl mb-10">Marko Marković</h1>

    <!-- Homebase -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-map-pin" />
      <p>is currently in <b>Dubai</b>, United Arab Emirates</p>
      <!-- <p>is currently in <b>Belgrade</b>, Serbia</p> -->
    </section>

    <!-- Age -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-hourglass" />
      <p>
        is {{ old() }}
        <!-- fnord -->
      </p>
    </section>

    <!-- Language -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-language" />
      <p>speaks <b>Serbian</b>, <b>English</b>, and <b>German</b></p>
    </section>

    <!-- Mail -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-mail" />
      <p>
        uses
        <a href="mailto:okram@civokram.com"><b>okram@civokram.com</b></a> as a
        primary email address
      </p>
    </section>

    <!-- Phone -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-phone" />
      <p>
        can be reached on
        <a href="tel:+38162200512">
          <b><abbr title="Serbia">+381</abbr> 62 200 512</b>
        </a>
        phone number when in Serbia
      </p>
    </section>

    <!-- Phone -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-phone" />
      <p>
        or on
        <a href="tel:+971502526569">
          <b><abbr title="United Arab Emirates">+971</abbr> 50 252 6569</b>
        </a>
        when in UAE
      </p>
    </section>

    <!-- GitHub -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-brand-github" />
      <p>
        codes on
        <a href="https://github.com/markomarkovic/"
          >GitHub: <b>markomarkovic</b></a
        >
      </p>
    </section>

    <!-- Instagram -->
    <!--
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-brand-instagram" />
      <p>
        posts photos to
        <a href="https://www.instagram.com/okramcivokram/">
          Instagram: <b>okramcivokram</b>
        </a>
      </p>
    </section>
    -->

    <!-- CV -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-history" />
      <p>
        touches up his
        <a href="https://markomarkovic.github.io/cv/">
          <abbr title="Curriculum Vitae"><b>CV</b></abbr>
        </a>
        only when looking for work
      </p>
    </section>

    <!-- ID -->
    <section class="flex items-center mb-5 leading-none">
      <div class="min-w-5 min-h-5 mr-4 i-tabler-id" />
      <p>
        and offers a
        <a href="/marko-markovic.vcard"><b>VCard for download</b></a>
        or scan below
      </p>
    </section>

    <img src="/vcard.svg" alt="VCard" class="my-10" />

    <footer>
      <div class="pt-5 text-gray-300 text-right text-sm">
        Last update: __LAST_UPDATE__
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
* {
  font-family: 'Roboto Condensed', sans-serif;
}
a {
  border-bottom: 1px solid #444;
}
</style>
