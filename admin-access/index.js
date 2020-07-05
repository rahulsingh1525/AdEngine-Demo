var admin = require("firebase-admin");

var serviceAccount = require("./admin-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "adengine-new.appspot.com"
});

var bucket = admin.storage().bucket();

// bucket.getFiles({
//     autoPaginate: false,
//     delimiter: '/'
//   }, (err, files) => {
//     console.log(err);
//     console.log(files);
// })


bucket.getFiles().then((val) => {
    // console.log(val[0][5])
    let fileMeta = val[0].map(x => 'https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/' + x.metadata.mediaLink.split('/')[x.metadata.mediaLink.split('/').length - 1] + `&token=` + x.metadata.metadata.firebaseStorageDownloadTokens)
    console.log(fileMeta);

})

// async function listFiles() {
//     const files = await bucket.getFiles();

//     console.log(files);
// }


// listFiles();