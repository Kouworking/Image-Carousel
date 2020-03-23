const path = require('path');
const fs = require('fs');

const downloadPhotos = callback => {
  for (let i = 0; i < 30; i++) {
    const fakeImageUrl = `wget https://loremflickr.com/640/480/corporate -O ${i} \n`
    const photoPath = path.join(__dirname, 'fillerImages.sh');

    fs.appendFile(photoPath, fakeImageUrl, (err, data) => {
      if (err) console.log(err, null);
    });
  }
}

downloadPhotos();