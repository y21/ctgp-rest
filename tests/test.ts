import CTGP from "../";

(async () => {
    const stats = await CTGP.getOriginalTracks();
    console.log(stats.leaderboards.length + ' original tracks');
})();