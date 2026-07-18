const unityApp = {
    applyCommonFixes: function () {
        window.addEventListener("wheel", (event) => event.preventDefault(), { passive: false });
        window.addEventListener("keydown", (event) => {
            if (["ArrowUp", "ArrowDown"].includes(event.key)) event.preventDefault();
        });
        window.addEventListener('contextmenu', (event) => event.preventDefault());
    },
    
    // დანარჩენი ფუნქციები (tryRotationLock, tryLockAspectRatio, startLoading და ა.შ.)
    // ჩასვით აქ...
    
    // ბოლოში დარწმუნდით, რომ ეს სამი ხაზი წერია:
    startLoading: function () {
        const canvas = document.querySelector("#unity-canvas");
        const loadingBar = document.querySelector("#unity-loading-bar");
        const progressBarFull = document.querySelector("#unity-progress-bar-full");
        const buildUrl = ""; 
        const loaderUrl = buildUrl + "GasStation[9]-mirraSDK[5.0.18].loader.js";
        const config = {
            dataUrl: buildUrl + "GasStation[9]-mirraSDK[5.0.18].data.unityweb",
            frameworkUrl: buildUrl + "GasStation[9]-mirraSDK[5.0.18].framework.js.unityweb",
            codeUrl: buildUrl + "GasStation[9]-mirraSDK[5.0.18].wasm.unityweb",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "WebCave",
            productName: "Gas Station",
            productVersion: "4.2"
        };
        const script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
                progressBarFull.style.width = 100 * progress + "%";
            }).then((unityInstance) => {
                loadingBar.style.display = "none";
            }).catch((message) => alert(message));
        };
        document.body.appendChild(script);
    },
    isEmpty: function (val) { return val === undefined || val === null || val === ""; },
    toBoolean: function (val) { return val === true || val === "true" || val === 1; },
    isNumber: function (val) { return typeof val === 'number'; },
    toNumber: function (val) { return parseFloat(val) || 0; },
    isMobile: function () { return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); },
    tryRotationLock: function() {},
    tryLockAspectRatio: function() {}
};

unityApp.applyCommonFixes();
unityApp.tryRotationLock();
unityApp.tryLockAspectRatio();
unityApp.startLoading();
