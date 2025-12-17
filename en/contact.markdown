---
layout: default
title: Contact Us｜MAX GEAR LTD
permalink: /en/contact/
lang: en
description: "從傳動齒輪設計到量產，我們提供一站式專業解決方案"
---
<div class="relative h-[30vh] md:h-[50vh] flex flex-col items-center justify-center bg-cover bg-center" style="background-image: url('/assets/images/ContactUS.webp');">
  <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer"
     class="absolute bottom-2 right-2 text-[10px] text-gray-300 opacity-70 hover:opacity-100 transition">
    Image by tirachardImage on Freepik
  </a>
  <div class="backdrop-blur-sm bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-slate-900/40 w-full ">
    <div class="container mx-auto max-w-6xl text-left py-8 px-6 md:px-12 xl:px-0">
      <h1 class="text-2xl md:text-6xl font-extrabold text-blue-500 drop-shadow-lg py-4">
        Contact us
      </h1>
    </div>
  </div>
</div>

<div class="container mx-auto px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow">
    <div class="order-1 md:order-2  p-8">
      <form id="contactForm" class="space-y-4">
        <input type="hidden" name="access_key" value="fbb8a4fe-eda4-42d7-816c-4e13b408f3ec">
        <input type="hidden" name="from_name" value="官網-聯繫通知">
        <div>
          <label class="block text-sm font-medium">Company*</label>
          <input type="text" name="company" required class="mt-1 w-full rounded-md border px-3 py-2" placeholder="Enter your company name">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium">Name</label>
            <input type="text" name="name" required class="mt-1 w-full rounded-md border px-3 py-2" placeholder="Name">
          </div>
          <div>
            <label class="block text-sm font-medium">Phone Number</label>
            <input type="text" name="phone" class="mt-1 w-full rounded-md border px-3 py-2" placeholder="
your contact number">
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium">Email*</label>
          <input type="email" name="email" required class="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@example.com">
        </div>
        <div>
          <label class="block text-sm font-medium">Question*</label>
          <textarea name="message" required class="mt-1 w-full rounded-md border px-3 py-2" rows="5"></textarea>
        </div>
        <div class="h-captcha" data-captcha="true"></div>
        <button type="submit"
          class="w-full px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
    <div class="order-2 md:order-1  p-8">
      <p class="mb-3"><strong class="text-2xl">MAX GEAR LTD.</strong></p>
      <p class="mb-1"><i class="fa-solid fa-location-pin"></i> No. 31, Gongye 2nd Rd., Annan Dist., Tainan City 709410, Taiwan (R.O.C.)</p>
      <p class="mb-1"><i class="fa-solid fa-envelope"></i><a href="mailto:info@maxgeartw.com" class="hover:text-sky-400"> info@maxgeartw.com</a></p>
      <p class="mb-1">LINE ID：<a href="https://lin.ee/sOzcQLX" class="hover:text-sky-400 ">@226zgoio</a></p>
      <div class="mt-4 relative w-full pb-[56.25%] md:h-auto md:pb-[100%]   rounded-xl overflow-hidden">
        <iframe class="absolute top-0 left-0 w-full h-full"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.750493764668!2d120.15572661172733!3d23.03293161585306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346dd87ffaeac317%3A0xa0a1d96c609649a!2zNzA56Ie65Y2X5biC5a6J5Y2X5Y2A5bel5qWt5LqM6LevMzHomZ8!5e0!3m2!1szh-TW!2stw!4v1764858024299!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      <div>
    </div>
  </div>
</div>

<div id="successBox" class="fixed inset-0 bg-black/40 hidden items-center justify-center">
  <div class="bg-white p-6 rounded-xl shadow-lg text-center">
    <h3 class="text-xl font-bold mb-3">Successfully submitted!</h3>
    <p class="text-slate-600 mb-4">We will contact you as soon as possible.</p>
    <button onclick="closeSuccessBox()" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      OK
    </button>
  </div>
</div>

<script>
  const form = document.getElementById("contactForm");
  const successBox = document.getElementById("successBox");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      successBox.classList.remove("hidden");
      successBox.classList.add("flex"); 
      form.reset();
    } else {
      alert("送出失敗，請稍後再試！");
    }
  });

  function closeSuccessBox() {
    successBox.classList.add("hidden");
    
  }
</script>
