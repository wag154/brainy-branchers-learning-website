function pdfToImages(pdf, dir) {
    // Create a new PDF.js document instance
    let pdfDoc = new PDFJS.getDocument(pdf);

    // Loop through each page of the pdf document
    pdfDoc.then(function (doc) {
        for (let i = 1; i <= doc.numPages; i++) {
            // Get the page object
            doc.getPage(i).then(function (page) {
                let canvas = document.createElement("canvas");
                let context = canvas.getContext("2d");
                let viewport = page.getViewport(1);
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                page.render({
                    canvasContext: context,
                    viewport: viewport,
                }).then(function () {
                    // Convert the canvas to a data URL
                    let dataURL = canvas.toDataURL("image/png");

                    // Create a file name for the image
                    let fileName = "page" + i + ".png";

                    // Create a file object from the data URL
                    let file = dataURLtoFile(dataURL, fileName);

                    // Save the file to the directory
                    saveFile(file, dir);
                });
            });
        }
    });
}

// This function converts a data URL to a file object
function dataURLtoFile(dataurl, filename) {
    // Split the data URL into parts
    let arr = dataurl.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    // Convert the binary string to a byte array
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    // Create a file object from the byte array
    return new File([u8arr], filename, { type: mime });
}

// This function saves a file object to a directory
function saveFile(file, dir) {
    // Create a file system object
    let fs = require("fs");

    // Create a file reader object
    let reader = new FileReader();

    // Read the file as a buffer
    reader.readAsArrayBuffer(file);

    // When the file is loaded
    reader.onload = function () {
        // Get the buffer from the reader
        let buffer = Buffer.from(reader.result);

        // Create a file path for the file
        let filePath = dir + "/" + file.name;

        // Write the buffer to the file path
        fs.writeFile(filePath, buffer, function (err) {
            // If there is an error, log it
            if (err) {
                console.error(err);
            }
            // Otherwise, log a success message
            else {
                console.log("File saved: " + filePath);
            }
        });
    };
}
