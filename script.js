const form = document.getElementById("insuranceForm");

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyqPAdJcd7oU9tu63SUec77XNZZsF9Ig1A3eo3MN2sXndEIiA8jL2a-UNcmSqPKScVsDg/exec";

form.addEventListener("submit", async function (e) {
    e.preventDefault();
const trackingCode =
"BH-" + Date.now().toString().slice(-6);

const discountCode =
"HYD-" + Math.random().toString(36).substring(2,7).toUpperCase();
const data = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,

    insurance: [...document.querySelectorAll('input[name="insurance"]:checked')]
        .map(i => i.value)
        .join(" ، "),

    expire: document.getElementById("expire").value,

    trackingCode: trackingCode,

    discountCode: discountCode,

    note: document.getElementById("note").value
};

    try {

        await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });


document.querySelector(".container").innerHTML = `

<div style="text-align:center;padding:40px">

<h2 style="color:#0b5ed7">
✅ درخواست شما با موفقیت ثبت شد
</h2>

<p style="margin-top:20px;font-size:18px">

اطلاعات شما ثبت شد.

<b>برای تکمیل درخواست، لطفاً مرحله آخر را انجام دهید.</b>

</p>

<div style="background:#fff3cd;
padding:20px;
border-radius:15px;
margin-top:25px">

📎 لطفاً تصاویر مدارک زیر را بارگذاری کنید:

<br><br>

✅ کارت خودرو

<br>

✅ کارت ملی

<br>

✅ بیمه‌نامه قبلی (در صورت وجود)

</div>

<br><br>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSd5totQO5MSGmDa8cTdh1KzxezbeZJ7BA8W0t3yXcHJqwrMOw/viewform?usp=header" target="_blank">

<button style="background:#198754;
color:white;
padding:15px 35px;
font-size:18px;
border:none;
border-radius:10px;
cursor:pointer">

📎 مرحله آخر: بارگذاری مدارک

</button>

</a>

<br><br>

<p style="color:#666">

پس از بارگذاری مدارک، کارشناسان نمایندگی بیمه حیدریان با شما تماس خواهند گرفت.

</p>

</div>

`;
        
        form.reset();

    } catch (err) {

        alert("❌ خطا در ارسال اطلاعات");

    }

});
