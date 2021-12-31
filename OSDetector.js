const detectOperatingSystem = () => {
  var osName = "Unknown OS";

  if (navigator.appVersion.indexOf("Win") !== -1) {
    osName = "Windows";
  }

  if (navigator.appVersion.indexOf("Mac") !== -1) {
    osName = "MacOS";
  }

  if (navigator.appVersion.indexOf("Linux") !== -1) {
    osName = "Linux";
  }

  console.log("You are using " + osName + " operating system.");
};

detectOperatingSystem();
