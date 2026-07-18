const form = document.getElementById("insuranceForm");

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzepjycnPsKSRKj5vXR7D5ZJyolQXVws8BnFwA4SxRMyL5nWPy04NaFTP9OdnxGupDG/exec";

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const trackingCode = "BH-" + Date.now().toString().slice(-6);
    const discountCode = "HYD-" + Math.random().toString(36).substring(2,7).toUpperCase();

    const data = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        insurance: [...document.querySelectorAll('input[name="insurance"]:checked')]
            .map(i => i.value)
            .join(" ، "),
        expire: document.getElementById("expire").value,
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
        <br><br>
        <b>برای تکمیل درخواست، لطفاً مرحله آخر را انجام دهید.</b>
        </p>

        <div style="background:#eef5ff;padding:20px;border-radius:15px;margin-top:20px">
        <h3>🆔 کد پیگیری</h3>
        <h2>${trackingCode}</h2>
        </div>

        <div style="background:#fff7e6;padding:20px;border-radius:15px;margin-top:20px">
        <h3>🎁 کد هدیه</h3>
        <h2>${discountCode}</h2>
        <p>این کد را هنگام تماس یا مراجعه اعلام کنید.</p>
        </div>

        <div style="background:#fff3cd;padding:20px;border-radius:15px;margin-top:20px">
        📎 لطفاً تصاویر کارت خودرو، کارت ملی و بیمه‌نامه قبلی را بارگذاری کنید.
        </div>

        <br>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5totQO5MSGmDa8cTdh1KzxezbeZJ7BA8W0t3yXcHJqwrMOw/viewform?usp=header" target="_blank">
        <button style="background:#198754;color:#fff;padding:15px 35px;border:none;border-radius:10px;font-size:18px;cursor:pointer">
        📎 مرحله آخر: بارگذاری مدارک
        </button>
        </a>

        <br><br>

        <a href="tel:09146876636">
        <button style="padding:12px 25px;">
        تماس با نمایندگی
        </button>
        </a>

        </div>
        `;

        form.reset();

        } catch (err) {
    alert(
        "خطا:\n" +
        err +
        "\n\nWEB_APP_URL:\n" +
        WEB_APP_URL
    );
    }
});
