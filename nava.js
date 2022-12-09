// Variables
const $ = document;
const Navas = $.getElementsByTagName("audio");
const navaPlayBtn = $.getElementsByClassName("nava-play-btn");

for (let i = 0; i < Navas.length; i++) {
  // Get Nava Name
  let navaName = Navas[i].dataset.navaname;


  // let navaDuration;
  let navaCtime = "0:00";

  Navas[i].addEventListener("loadedmetadata", function (e) {
    // Get Nava Duration
    let duration = Math.floor(Navas[i].duration);
    let minute = Math.floor(duration / 60);
    let second = duration - minute * 60;
    let navaDuration = " / " + minute + ":" + second;

    const newElement = `
   <div class="nava-box">
   <div class="nava-play">
       <button class="nava-btn nava-play-btn"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
               <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
           </svg></button>
   </div>
   <div>
       <div class="nava-title">
           <b>${navaName}</b>
           <div>
               <small class="nava-ctime">${navaCtime}</small>
               <small class="nava-time">${navaDuration}</small>
           </div>
       </div>
       <div class="nava-range">
           <input type="range" name="" id="">
       </div>
   </div>
   <div class="nava-buttons">
       <button class="nava-btn"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
               <path fill="currentColor"
                   d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z" />
           </svg></button>
   
       <button class="nava-btn"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
               <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
           </svg></button>
   
   
       <button class="nava-btn"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
               </button>
   </div>
   </div>`;

    Navas[i].parentElement.innerHTML = newElement;


    const navaTime = $.getElementsByClassName("nava-ctime");

    navaPlayBtn[i].addEventListener("click", function () {
      e.target.play();



      setInterval(function () {
        let currentTime = Math.floor(e.target.currentTime);
        let currentTimeMinute = Math.floor(currentTime / 60);
        let currentTimeSecond = currentTime - currentTimeMinute * 60;

        if (currentTimeSecond < 10) {
          currentTimeSecond = "0" + currentTimeSecond;
        }

        navaCtime = currentTimeMinute + ":" + currentTimeSecond;
        navaTime[i].innerHTML = navaCtime;
      }, 1000);



    });
  });

  // });
}
