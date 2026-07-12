const form = document.getElementById("insuranceForm");

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyqPAdJcd7oU9tu63SUec77XNZZsF9Ig1A3eo3MN2sXndEIiA8jL2a-UNcmSqPKScVsDg/exec";

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: form.elements[0].value,
        mobile: form.elements[1].value,
        insurance: [...document.querySelectorAll('input[name="insurance"]:checked')]
.map(i => i.value)
.join(" ، "),
        expire: form.elements[3].value,
        note: form.elements[7].value
    };

    try {

        await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const trackingCode =
"BH-" + Date.now().toString().slice(-6);

const discountCode =
"HYD-" + Math.random().toString(36).substring(2,7).toUpperCase();

document.querySelector(".container").innerHTML = `

<div style="text-align:center;padding:40px">

<h2 style="color:#0b5ed7">
✅ درخواست شما با موفقیت ثبت شد
</h2>

<p style="margin-top:20px">

کارشناسان نمایندگی بیمه حیدریان
در اولین فرصت با شما تماس خواهند گرفت.

</p>

<div style="margin-top:30px;background:#eef5ff;padding:20px;border-radius:15px">

<h3>🆔 کد پیگیری</h3>

<h2>${trackingCode}</h2>

</div>

<div style="margin-top:20px;background:#fff7e6;padding:20px;border-radius:15px">

<h3>🎁 کد هدیه</h3>

<h2>${discountCode}</h2>

<p>

این کد تخفیف را هنگام تماس یا مراجعه به نمایندگی اعلام کنید.

</p>

</div>

<br>

<a href="tel:09146876636">

<button>

تماس با نمایندگی

</button>

</a>

</div>

`;
        form.reset();

    } catch (err) {

        alert("❌ خطا در ارسال اطلاعات");

    }

});
