const admin = require('firebase-admin');
const serviceAccount = {
    type: "service_account",
    project_id: "qantasrp",
    private_key_id: "f496449c206347d986b8c93530ae053cfc52a9e4",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDPV4pPPXA0efpP\nnYVnO1XR0tRSCDHIHG0B0riZ0mcL16oXsi4sVfLczQjFiN73q84zsxj07hbzNVfo\nDJUDg/HUS6BeJOzZ86Mcviqx8A1bqRnoJr9TCmsyuyxUwItlFQHGm8TwAIvs/78T\n1TFf9tzRnsfK/EEBW3WpElgHzLxQwGD1dpanzoOlvkTs5dJDMI8NsE0we9IPns9M\nxiRAKT/c3b7ilyffJRo1o9JdS5MLnewVijLs8b4wwtHGQZfTb5AHD/nRtxQBUiRV\nDnyP4JQRFtnFSWfjtiWoarG6bDYZ0bXKIw5iZwnPgqj9AHbvYVszLEp2P+8FZn3u\n3hj5bI/NAgMBAAECggEACxQgnATKoMcuuH/Qb7hkKMK03RA6hrh8G5eUjQWIw4F5\nwWvgGzbZc/JRqGpcjYvEyA7nA7lQCR09zfSUJryvWHpU/orHDAtAWSoREnJi6FWk\nAHtHiEqbeTm2j+281QEXF/NdRbylvVtZ7Jec3IWOfXXYM5CgcY/fPNIx2XLXUhIo\nykjYfaE0cnd/5TMEVUUwZUY0iCHIWOzWydnd8aGg5xjxG70Y7bqK6M9Xbpdr/Kri\noW1eMoz2UXkcRgys3bPSbEJWPqRw4Vl9D9G13FmP6a1La55AOKucWoW91swt3yu9\noNvpllReblZUo096g3TtUwaHLC5Zy3ThnLDzL+05kQKBgQDtjObL7lXhQg0IvElR\nuOCtKVarXT4++v1uXf80ypkYARefL7Qxpbx88t/jfxWQ5A0qnxWKaWiK7gr3tv0g\nyEUoHnQlBMit/nimiJmbT8vOvdFHJ3Y2eivOA/IyBL6JrGcFjISmaTYiG/XfIo29\nRWl4u/h6XM29StkBuoA5PPja/QKBgQDfcgTeqoG2UQ3aRIoKV8tBY8kKw0x0A3R+\neNhi4Dz5/G1gQbijqdR4+Wvgi0hVhpg+3zxEElsPvFXxxVxXJEOQRpFgdA6U9fAI\nbBnQFY6jWZSOlXEYmTMf8an70rNFpqHqqeLfxuWo3qUwhVNbc/J0R5WdWSy+unLL\n3en5CjmpEQKBgEnlcgpwWtDW/j0AbYJ5k5LqcCagu/NVmq7RmMkwWQ2JkXKYoWJs\nX0UzPIiFiQzolFv03vuOrNHDGTBUAUxIYJMJXjIB2feeWKPdjIMvAISQseCDmxd5\nS9UrjxUWOruTIP0t6DnoMsnLjuHZ2uPNCvFe7/4IjovbE8Sg4rBrkjJ1AoGAO/4l\nCJPHF+hTS9MzLOu9iuT7yYP+Nvfmgz52+rUyKfx4cWuz411pysFNEZDT7wKgReEy\nESTMhkEO4kcXL95wtX/88GS4tY4C0IAVviTLk1gt5sqA/xXDAESmWxKLR5whxRuv\n6l1AtEJzH7/sTZWn90hxBzo2JU9yGwKOG2t/Z8ECgYAFAaZ9Byo3wyTWPg2eYUW0\n6qR83jpZQpTsgSFLuRbe8Wc86JGTMhfARoViwRkJu5dSMamw/0RNDUuoBLScCwTu\nxIyCUR0PbzmhTYZmmhin7U7wFDDlYP+YqglV4oiPkyMkfH7hQIqRO8FPxlG426m2\njGZn4SEC0RlsksC5X3IPDg==\n-----END PRIVATE KEY-----\n",
    client_email: "thunderbolt@qantasrp.iam.gserviceaccount.com",
    client_id: "112562412383315329862",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/thunderbolt%40qantasrp.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://qantasrp-default-rtdb.firebaseio.com/'
});

module.exports = admin