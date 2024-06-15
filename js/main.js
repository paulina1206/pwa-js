window.onload = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((req) => {
        console.log("Service Worker registered successfully", req);
      })
      .catch((err) => {
        console.warn("Error while registering Service Worker", err);
      });
  }
};
