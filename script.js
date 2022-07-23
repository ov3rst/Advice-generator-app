const d = document,
  $advId = d.getElementById("adv-id"),
  $advice = d.getElementById("advice"),
  $loader = d.querySelector(".loader"),
  URL = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  try {
    $loader.style.display = "inline";

    const res = await fetch(URL),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    $loader.style.display = "none";
    $advId.textContent = json.slip.id;
    $advice.textContent = json.slip.advice;
  } catch (error) {
    let msj = error.statusText || "Ocurrio un error";
    $advId.textContent = error.status || "Error";
    $advice.textContent = msj;
  }
};

d.addEventListener("DOMContentLoaded", getAdvice);

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn") || e.target.matches(".btn *")) getAdvice();
});
