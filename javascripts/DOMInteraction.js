/*jshint esversion: 6 */

let seasonSelect = document.getElementById("select-season");
let lastSelectedSeason = "";

seasonSelect.addEventListener("change", () => {
    if (lastSelectedSeason !== event.target.value) {
        let seasonLast = document.getElementsByClassName(`${lastSelectedSeason}-discount`);
        for (let i = 0; i < seasonLast.length; i++) {
            let h4ElLast = seasonLast[i].getElementsByTagName("h4");
            for (let i = 0; i < h4ElLast.length; i++) {
                h4ElLast[i].classList.toggle("hidden");
    }}}    
    let season = document.getElementsByClassName(`${event.target.value}-discount`);
    for (let i = 0; i < season.length; i++) {
       let h4El = season[i].getElementsByTagName("h4");
       for (let i = 0; i < h4El.length; i++) {
        h4El[i].classList.toggle("hidden");
       }
    }
    lastSelectedSeason = event.target.value;
});
