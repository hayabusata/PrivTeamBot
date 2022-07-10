const NodeWebCam = require("node-webcam");

class CaptureImage {

    constructor() {};

    capture() {
        const opts = {
            //picture related
            width: 1920,
            height: 1080,
            quality: 100,
            delay: 0,
             //Save shots in memory
            saveShots: true,

            // [jpeg, png] support varies
            // Webcam.OutputTypes
            output: "jpeg",

            //Which camera to use
            //Use Webcam.list() for results
            //false for default device
            device: "Live Gamer Portable 2",
            // device: "OBS Virtual Camera",

            // [location, buffer, base64]
            // Webcam.CallbackReturnTypes
            callbackReturn: "location",

            //Logging
            verbose: false
        };

        const webCam = NodeWebCam.create(opts);

        webCam.capture("test_picture", function(err, data) {} );

        NodeWebCam.capture("test_picture", opts, function(err, data) {} );

        webCam.list(function(list) {
            var anotherCam = NodeWebCam.create({device: list[0]});
        })

        const opts2 = {
            callbackReturn: "base64"
        };

        NodeWebCam.capture("test_picture", opts, function(err, data) {
            const image = "<img src='" + data + "'>";
            // console.log(image);
        });
    }

    // getSelectedVideo = () => {
    //     const devices = await navigator.mediaDevices.enumerateDevices();
    //     devices.forEach((device) => {
    //         console.log(device.kind + ": " + device.label + "id = " + device.deviceId);
    //     });
    // }
}

module.exports = CaptureImage;