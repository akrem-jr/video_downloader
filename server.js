const ytdl = require('ytdl-core');
const fs = require('fs');
const readline = require('readline');


// Function to download YouTube video
async function downloadVideo(url, outputFileName) {
  try {
    const videoInfo = await ytdl.getInfo(url);
    const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' });

    if (!videoFormat) {
      throw new Error('No video format found');
    }

    const videoStream = ytdl(url, { format: videoFormat });
    const writeStream = fs.createWriteStream(outputFileName);

    videoStream.pipe(writeStream);

    writeStream.on('finish', () => {
      console.log(`Video downloaded successfully as ${outputFileName}`);
    });

    writeStream.on('error', (err) => {
      console.error('Error writing video to file:', err);
    });
  } catch (error) {
    console.error('Error downloading video:', error.message);
  }
}

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for YouTube URL
rl.question('Enter the URL of the YouTube video: ', (url) => {
  // Ask user for output file name
  rl.question('Enter the output file name (including extension): ', (outputFileName) => {
    // Download the video
    downloadVideo(url, outputFileName);
    // Close readline interface
    rl.close();
  });
});
