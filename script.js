const DONATION_URL = "https://www.buymeacoffee.com/libertylock";
const CHROME_WEB_STORE_URL = "https://chromewebstore.google.com/detail/liberty-lock-plus/bidblgoobmadjoogpfpldkonhlhlhfmn";

document.querySelectorAll("[data-donation-link]").forEach(link => {
  const donationUrl = new URL(DONATION_URL);

  donationUrl.searchParams.set("utm_source", "liberty_lock_plus_site");
  donationUrl.searchParams.set("utm_medium", "donation_button");
  link.href = donationUrl.toString();
});

function triggerInstall() {
  window.location.href = CHROME_WEB_STORE_URL;
}

function closeModal() {
  document.getElementById("install-success").classList.remove("open");
}
