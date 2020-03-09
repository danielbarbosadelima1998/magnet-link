import React, { useState, useEffect } from 'react';
import WebTorrent from "webtorrent";

const client = new WebTorrent()

const App = () => {
  const [torrentId, setTorrentId] = useState(''); 

  const OpenTorrent = () => {
    // var torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
    client.add(torrentId, function (torrent) {
      // Torrents can contain many files. Let's use the .mp4 file
      var file = torrent.files.find(function (file) {
        return file.name.endsWith('.mp4')
      })
      var image = torrent.files.find(function (file) {
        return file.name.endsWith('.img') ||
          file.name.endsWith('.png') ||
          file.name.endsWith('.jpeg') ||
          file.name.endsWith('.jpg')

      })
      console.log(torrent)
      // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
      
      file.appendTo('body')
      image.appendTo('#teste')

    })
  }
  return (
    <div>
      <h1>Abra torrent no seu navegador!</h1>
      <label>Magnet Link: </label> <br />
      <textarea type="text" cols="140" rows="10" onChange={(e) => setTorrentId(e.target.value.toString())} /> <br />
      <button onClick={OpenTorrent}>Abrir torrent</button>
      <div 
      // style={{
      //   width: '200px',
      //   height:'200px'
      // }}
       className="teste" id="teste" >

      </div>
    </div>
  )
}
export default App;




// import React, { useState, useEffect } from 'react';
// var WebTorrent = require('webtorrent');


// const App = () => {
//   const [torrentInfoHash, setTorrentInfoHash] = useState("")
//   const [torrentMagnetURI, setTorrentMagnetURI] = useState("")
//   const [torrentName, setTorrentName] = useState("")
//   const [torrentProgress, setTorrentProgress] = useState("")
//   const [torrentFiles, setTorrentFiles] = useState([])
//   const [client, setClient] = useState();
//   useEffect(() => {
//     setClient(new WebTorrent())
//   }, [])

//   const Test = () => {
//     // Sintel, a free, Creative Commons movie
//     const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'



//     if(client){
//       console.log(client)
//       client.on('error', err => {
//         console.log('[+] Webtorrent error: ' + err.message);
//       });

//       client.add(torrentId, (torrent) => {
//         console.log("torrent", torrent)
//         const interval = setInterval(() => {
//           // console.log('[+] Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
//           setTorrentProgress((torrent.progress * 100).toFixed(1) + '%');
//         }, 5000);
//         torrent.on('done', () => {
//           console.log('Progress: 100%');
//           clearInterval(interval);
//         })

//         setTorrentInfoHash(torrent.infoHash);
//         setTorrentMagnetURI(torrent.magnetURI);
//         setTorrentName(torrent.name);
//         setTorrentFiles(torrent.files);
//         console.log('image: ', torrent)
//         // TODO Figure out a better way to render these files 
//         torrentFiles.forEach((file) =>
//           file.appendTo('body')
//         )
//       });
//     }
//   }

//   return (
//     <div>
//       <button onClick={Test}>Teste</button>
//       <h1>{torrentName}</h1>
//       <p><b>Torrent Info Hash: </b>{torrentInfoHash}</p>
//       <p><b>Torrent Progress: </b>{torrentProgress}</p>
//     </div>
//   );
// }
// export default App;