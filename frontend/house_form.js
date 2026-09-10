let form = document.querySelector("#form1");

function showResult(message) {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>${message}</p>`;
}

if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const area = document.getElementById("area").value;
    const bedrooms = document.getElementById("bedrooms").value;
    const location = document.getElementById("location").value;

    // Thay đổi dòng này trong file js của bạn:
    const url = `http://127.0.0.1:8000/predict?area=${area}&bedrooms=${bedrooms}&location=${location}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      showResult(`Predict Price: ${data.predict_price} VNĐ`);
    } catch (error) {
      showResult(`Lỗi: ${error.message}`);
    }
  });
}
