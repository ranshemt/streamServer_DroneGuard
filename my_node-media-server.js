//modules
const express = require('express')
const NodeMediaServer = require("node-media-server")
const port = 3333
const config = {
    rtmp: {
      port: 1935,
      chunk_size: 30000,
      gop_cache: true,
      ping: 30,
      ping_timeout: 60
    },
    http: {
      port: 8000,
      allow_origin: '*'
    },
    // relay: {
    //   // ffmpeg: '/usr/local/bin/ffmpeg',
    //   ffmpeg: 'C:/Users/ransh/Downloads/FFmpeg/bin/ffmpeg.exe',
    //   tasks: [
    //     {
    //       app: 'appName',
    //       mode: 'static',
    //       edge: 'rtsp://192.168.68.131/live/myVideo',
    //       name: 'streamName',
    //       rtsp_transport : 'udp' //['udp', 'tcp', 'udp_multicast', 'http']
    //     }
    //   ]
    // }
  };
//app & server
const app = express()
app.listen(port, () => console.log(`server running on port: ${port}`))
const nms = new NodeMediaServer(config)
nms.run();


nms.on('preConnect', (id, args) => {
    console.log(
      '[NodeEvent on preConnect]',
      `id=${id} args=${JSON.stringify(args)}`
    );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on('postConnect', (id, args) => {
    console.log(
      '[NodeEvent on postConnect]',
      `id=${id} args=${JSON.stringify(args)}`
    );
  });
  
  nms.on('doneConnect', (id, args) => {
    console.log(
      '[NodeEvent on doneConnect]',
      `id=${id} args=${JSON.stringify(args)}`
    );
  });
  
  nms.on('prePublish', (id, StreamPath, args) => {
    console.log(
      '[NodeEvent on prePublish]',
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
    );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on('postPublish', (id, StreamPath, args) => {
    console.log(
      '[NodeEvent on postPublish]',
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
    );
  });
  
  nms.on('donePublish', (id, StreamPath, args) => {
    console.log(
      '[NodeEvent on donePublish]',
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
    );
  });
  
  nms.on('prePlay', (id, StreamPath, args) => {
    console.log(
      '[NodeEvent on prePlay]',
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
    );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on('postPlay', (id, StreamPath, args) => {
    console.log(
      '[NodeEvent on postPlay]',
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
    );
  });
  
  nms.on('donePlay', (id, StreamPath, args) => {
    console.log(
      '[NodeEvent on donePlay]',
      `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`
    );
  });
