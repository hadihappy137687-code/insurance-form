const form = document.getElementById("insuranceForm");

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyqPAdJcd7oU9tu63SUec77XNZZsF9Ig1A3eo3MN2sXndEIiA8jL2a-UNcmSqPKScVsDg/exec";

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: form.elements[0].value,
        mobile: form.elements[1].value,
        insurance: form.elements[2].value,
        expire: form.elements[3].value,
        note: form.elements[7].value
    };

    try {

        await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        alert("✅ درخواست شما با موفقیت ثبت شد.");

        form.reset();

    } catch (err) {

        alert("❌ خطا در ارسال اطلاعات");

    }

});
