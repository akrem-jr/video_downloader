
const fs = require('fs')
const readline = require('readline')
const axios = require('axios')
const { exec } = require('child_process')



// Function to download a video from a URL
async function downloadVideo(url, outputFileName) {
    try {
        const response = await axios.get(url);
        const writeStream = fs.createWriteStream(outputFileName);
        response.data.pipe(writeStream);

        return new Promise((resolve, reject) => {
            writeStream.on('finish', () => {
                console.log(`Video downloaded successfully as ${outputFileName}`);
                resolve();
            });

            writeStream.on('error', (error) => {
                console.error(`Error writing video to file ${error}`);
                reject(error);
            });
        });
    } catch (error) {
        console.error(`Error downloading video ${error}`);
        throw error;
    }
}

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for video URL
rl.question('Enter video link: ', async (url) => {
    rl.question('Enter the output file name (including extension): ', async (outputFileName) => {
        try {
            await downloadVideo(url, outputFileName);
            console.log('Video downloaded successfully!');
        } catch (error) {
            console.error('Error downloading video:', error.message);
        } finally {
            rl.close();
        }
    });
});