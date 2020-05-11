const RtspServer = require('rtsp-streaming-server').default;

const options = {
    serverPort: 4444,
    clientPort: 6554,
    rtpPortStart: 10000,
    rtpPortCount: 10000
};
const server = new RtspServer(options);
 
 
async function run () {
    try {
        console.log(`starting RTSP server with options: ${JSON.stringify(options, null, 2)}`)
        await server.start();
    } catch (e) {
        console.error(e);
    }
}
 
run();