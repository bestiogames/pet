const unityApp = {
    // ... (დატოვეთ applyCommonFixes, tryRotationLock, tryLockAspectRatio, isMobile და სხვა დამხმარე ფუნქციები უცვლელად)

    startLoading: function () {
        const canvas = document.querySelector("#unity-canvas");
        const loadingBar = document.querySelector("#unity-loading-bar");
        const progressBarFull = document.querySelector("#unity-progress-bar-full");

        // აქ წავშალეთ "Build/" და დავტოვეთ ცარიელი სტრიქონი, 
        // რაც ნიშნავს რომ ფაილები იმავე საქაღალდეშია, სადაც HTML-ია.
        const buildUrl = ""; 
        const loaderUrl = buildUrl + "GasStation[9]-mirraSDK[5.0.18].loader.js";
        
        const config = {
            arguments: [],
            dataUrl: buildUrl + "GasStation[9]-mirraSDK[5.0.18].data.unityweb",
            frameworkUrl: buildUrl + "GasStation[9]-mirraSDK[5.0.18].framework.js.unityweb",
            codeUrl: buildUrl + "GasStation[9]-mirraSDK[5.0.18].wasm.unityweb",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "WebCave",
            productName: "Gas Station",
            productVersion: "4.2",
            showBanner: (msg, type) => {
                switch (type) {
                    case 'error': { console.error(msg); break; }
                    default: { console.warn(msg); break; }
                }
            },
        };

        // ... (დანარჩენი კოდი იგივე რჩება)
        const matchWebGLToCanvasSize = "";
        if (!this.isEmpty(matchWebGLToCanvasSize)) {
            config.matchWebGLToCanvasSize = this.toBoolean(matchWebGLToCanvasSize);
        }

        const autoSyncPersistentDataPath = "";
        if (!this.isEmpty(autoSyncPersistentDataPath)) {
            config.autoSyncPersistentDataPath = this.toBoolean(autoSyncPersistentDataPath);
        }

        const devicePixelRatio = this.toNumber("");
        if (this.isNumber(devicePixelRatio)) {
            config.devicePixelRatio = this.toNumber(devicePixelRatio);
        }

        loadingBar.style.display = "block";
        const script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
            createUnityInstance(canvas, config, (progress) => {
                progressBarFull.style.width = 100 * progress + "%";
            }).then((unityInstance) => {
                loadingBar.style.display = "none";
            }).catch((message) => {
                alert(message);
            });
        };
        document.body.appendChild(script);
    },

    // ... (დარჩენილი ფუნქციები: isMobile, isEmpty, toBoolean, isNumber, toNumber იგივე რჩება)
};

// ... (შემდგომი გამოძახებებიც იგივე რჩება)
unityApp.applyCommonFixes();
unityApp.tryRotationLock();
unityApp.tryLockAspectRatio();
unityApp.startLoading();
