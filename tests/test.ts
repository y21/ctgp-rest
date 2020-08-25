import CTGP from '../';

const trackName = 'Luigi Circuit';

(async () => {
  // Request all regular tracks
  const tracks = await CTGP.getOriginalTracks();

  // Find the track by its name
  const track = tracks.leaderboards.find(x => x.name === trackName);

  // Error handling to make TypeScript happy!
  if (!track) return console.log('track not found');

  // Calculate correct hash (slot ID as HEX + track ID)
  // Slot ID 15 would become 0F
  const correctHash = track.slotId.toString(16).padStart(2, '0') + track.trackId;

  // Get track data
  const {ghosts} = await CTGP.getTrack(correctHash);

  // Print the first ghost
  console.log(ghosts[0]);
})();