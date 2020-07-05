
let global_state = {
  profile_name: "Major",
  last_updated: new Date(),
};
var adMatrix = {
    "food" : [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2FSwiggy%20Binging%20Ad%2015%20sec%202.mp4?generation=1593347245303506&alt=media&token=cf6605e5-3827-4751-bdc2-f9d09100723a",
            length: 15
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2FSwiggy%20Binging%20Ad%2015%20sec.mp4?generation=1593347244398209&alt=media&token=4b26116a-96d2-4c27-ba73-46fa559ca21f",
            length: 15
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2FSwiggy%20Binging%20Ad%2020%20sec%203.mp4?generation=1593347245604751&alt=media&token=b61fb968-aeb3-40ad-9f6f-72b9d96fa758",
            length: 20
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2FSwiggy%20Lightning%20Fast%20Delivery-5%20sec.mp4?generation=1593347243681231&alt=media&token=6661eea9-bd23-4766-a218-3edf0cb4b65d",
            length: 5
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2FZOMATO%206sec.mp4?generation=1593347245605898&alt=media&token=3ca94af6-3627-49e6-b591-efba716de71d",
            length: 6
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2Fcarlsberg%206%20sec.mp4?generation=1593347243473751&alt=media&token=dd82a0ed-2c6f-435e-98bf-99b68a18acba",
            length: 6
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2Fgrofers%206%20sec%202.mp4?generation=1593347242679613&alt=media&token=1938770f-d607-4f16-b29c-8948c5cff852",
            length: 6
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2Fgrofers%206%20sec.mp4?generation=1593347242301369&alt=media&token=a4a578ed-493f-4fc1-8622-cd9736497ee8",
            length: 6
        }
    ],
    "travel": [
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FTravel%2FAirBNB%20-%206%20sec.mp4?generation=1593347274012074&alt=media&token=1d3dcd4e-5ec6-48fd-b127-c52729139360",
           length: 6
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FTravel%2FHome%20To%20Go%20-%2015%20Second%20TV%20Commercial%202017.mp4?generation=1593347275453688&alt=media&token=38ee69e3-4636-4203-aa2d-dfca7bbbf38b",
           length: 15
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FTravel%2FRome%2015%20second%20Travel%20AD.mp4?generation=1593347275998272&alt=media&token=278d664d-d545-4ad0-8b73-b2d6245521f7",
           length: 15
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FTravel%2FSouthwest%20Airlines-%206%20sec.mp4?generation=1593347273186657&alt=media&token=ae23099a-05bb-49af-961d-2f624db4bffd",
           length: 6
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FTravel%2Fixigo%20tvc%20(TV%20commercial)%20-%2010%20sec.mp4?generation=1593347272786248&alt=media&token=3bcaa8f7-d882-4604-a864-05f5003ab2ed",
           length: 10
       },
    ],
    "car" : [
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fcar%2F30%20second%20Audi%20commercial.mp4?generation=1593347138378876&alt=media&token=5808ae95-e538-4c18-8453-9fbd0a607db8",
           length: 30
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fcar%2FAuto%20Trader%20TV%2030%20second.mp4?generation=1593347139997996&alt=media&token=5d2af8aa-21ad-49bd-be5b-41137067e574",
           length: 30
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fcar%2FBMW%20Ad.%2030sec.mp4?generation=1593347137564748&alt=media&token=6637e42e-e07b-462b-9905-9028ba157dd1",
           length: 30
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fcar%2FBlue%20Star%20Water%20Purifiers%20Cricket%2010%20sec%20TVC%20(3)%20-%202019.mp4?generation=1593347136419346&alt=media&token=fa33a626-b6e5-4555-bb7b-1710d59f0512",
           length: 10
       },
    ],
    "home": [
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fhome%2F99acres.com%20New%20TV%20Ad%20-%20Rent%20Anytime%2020%20Sec%2099acres.com.mp4?generation=1593347176961361&alt=media&token=21acd1f5-7171-4ec3-a239-2129f7bd77df",
           length: 20
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fhome%2F99acres.com%20New%20TVC%20Obsessed%20-%20Tamil%20-%2025%20sec.mp4?generation=1593347179022732&alt=media&token=89a26f04-75a4-40f7-930b-0d22cb3126cc",
           length: 25
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fhome%2FIKEA%20-%2010%20sec.mp4?generation=1593347177173305&alt=media&token=58cf3116-f122-4fc8-9816-1272df7f5274",
           length: 10
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Fhome%2FSky%20Bag%206%20sec.mp4?generation=1593347175459865&alt=media&token=719539df-4706-4439-8af5-499c7c5cb73a",
           length: 6
       },
            
    ],
    "insurance": [
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Finsurance%2FGEICO%20Insurance%2015%20sec.mp4?generation=1593347203887057&alt=media&token=c8cb0d75-befa-46b8-91b3-d2d6df745881",
           length: 15
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Finsurance%2FHeffernan%20Insurance%20Brokers%202012%20-%2015%20Second%20TV%20Ad.mp4?generation=1593347205847663&alt=media&token=5ae670a6-d123-4a1b-a531-b1042df81544",
           length: 15
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Finsurance%2FInsurance%2015%20sec%202.mp4?generation=1593347204276611&alt=media&token=8334b879-eb90-4d3e-b5f1-550de039aa2c",
           length: 15
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Finsurance%2FInsurance%2015%20sec.mp4?generation=1593347204507175&alt=media&token=4a4980e9-8b2a-4d9d-a690-8b5fef7bdf86",
           length: 15
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Finsurance%2FInsurance%20TVC%2030%20sec.mp4?generation=1593347206068343&alt=media&token=8ceda3a7-0001-4df8-8063-4e004bf0af4c",
           length: 30
       },
       {
           src: "https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2Finsurance%2FWriting%20Dog%20-15%20sec%20-%20GEICO%20Insurance.mp4?generation=1593347204341237&alt=media&token=768558a8-f82c-4887-87bf-8709fe8cae53",    
           length: 15
       },
    ]
};
let current_ad_stack = [
    {
        id: 3,
        startTimeSeconds: 50,
        urlSrc: 'https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2FDomino_s%20Pizza%20%2015-second%20ad.mp4?alt=media&token=cccf2500-e6c8-4400-b84d-ee1226dd65c8'
    },
    {
        id: 2,
        startTimeSeconds: 20,
        urlSrc: 'https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2Fcarlsberg%206%20sec.mp4?alt=media&token=dd82a0ed-2c6f-435e-98bf-99b68a18acba'
    },
    {
        id: 1,
        startTimeSeconds: 5,
        urlSrc: 'https://firebasestorage.googleapis.com/v0/b/adengine-new.appspot.com/o/ad_bucket%2FFood%2Fgrofers%206%20sec.mp4?alt=media&token=a4a578ed-493f-4fc1-8622-cd9736497ee8'
    }
 
];
let timeLine = {
    "title": {
        "media": {
            "url": "https://akriya.co.in",
            "caption": "Ad Engine Timeline Title Placeholder.",
            "credit": ""
        },
        "text": {
            "headline": "AdEngine Timeline",
            "text": "<p>Timeline page, to create custom timelines based on <i>host stream schedule</i></p>"
        }
    },
    
    "events": [
        {
           
            "start_date": {
                "millisecond": 0,
                "second": 56,
                "minute": 10,
                "hour": 0,
                
                "year": "2020"
            }, 
            "end_date": {
                "millisecond": 0,
                "second": 2,
                "minute": 12,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "Seg 1",
                "text": "home"
            }
        },
        {
            
            "start_date": {
                "millisecond": 0,
                "second": 50,
                "minute": 19,
                "hour": 0,
                
                "year": "2020"
            }, 
            "end_date": {
                "millisecond": 0,
                "second": 47,
                "minute": 21,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "Seg 2",
                "text": "home"
            }
        },
        {
            
            "start_date": {
                "millisecond": 0,
                "second": 27,
                "minute": 30,
                "hour": 0,
                
                "year": "2020"
            }, 
            "end_date": {
                "millisecond": 0,
                "second": 37,
                "minute": 30,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "Seg 3",
                "text": "home, insurance"
            }
        },
        {
            "media": {
                "url": "https://youtu.be/H7_sqdkaAfo",
                "caption": "I'm Every Women as performed by Whitney Houston.",
                "credit": "Arista Records"
            },
            "start_date": {
                "millisecond": 0,
                "second": 8,
                "minute": 46,
                "hour": 0,
                
                "year": "2020"
            }, 
            "end_date": {
                "millisecond": 0,
                "second": 48,
                "minute": 46,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "Seg 4",
                "text": "home"
            }
        },
        {
           
            "start_date": {
                "millisecond": 0,
                "second": 24,
                "minute": 47,
                "hour": 0,
                
                "year": "2020"
            }, 
            "end_date": {
                "millisecond": 0,
                "second": 8,
                "minute": 49,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "Seg 5",
                "text": "insurance"
            }
        },
        
    ]
};
let firestore = firebase.firestore();

var storage = firebase.storage();
var storageRef = storage.ref();

async function updateGlobalState(key, value) {
  global_state[key] = value;
  global_state["last_updated"] = new Date();

  firestore.collection('/ad-screens').doc(value).onSnapshot((data) => {
      let dataOnCloud = data.data();
      global_state["profile"] = dataOnCloud.profile;
      generateAdStack();
  });
  console.log(global_state);
}

async function initProfile() {
  console.log("trying INIT");

  try {
    let itemValue = await localforage.getItem('ae-profile_name');
    console.log(`Value of profile = ${itemValue}`);
    if (itemValue) {
      updateGlobalState("profile_name", itemValue);
      // updateUIProfile(itemValue);
    }
  } catch (error) {
    console.error(error);
  }
}

var pref = `home`;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    
    initProfile();
    generateAdStack();
    playVid();
  },
  false
);

function playVid() {
    document.getElementById("stream-vid").muted = true;
  document.getElementById("stream-vid").play();
  checkForAdUpdate();
}

function getCurrentStreamTime() {
  let streamElement = document.getElementById("stream-vid");
  return streamElement.currentTime;
}

function getCurrentAdPlayTime() {
    let overlayElement = document.getElementById("overlay-vid");
    return overlayElement.currentTime;
  }
function getCurrentAdDuration() {
let overlayElement = document.getElementById("overlay-vid");
return overlayElement.duration;
}


function muteStreamPlayback() {
  let streamElement = document.getElementById("stream-vid");
    streamElement.muted = true;
}


function checkForAdUpdate() {
  let currentStreamTime = getCurrentStreamTime();
  if (current_ad_stack.length != 0) {
    let latestElement = current_ad_stack[current_ad_stack.length - 1];
    if (latestElement.isCurrentlyPlaying) {
        if (getCurrentAdDuration() - getCurrentAdPlayTime() < 0.01) {
            let ad = current_ad_stack.pop();
            endTheAd(ad);
        }
    }
    else if (currentStreamTime > latestElement.startTimeSeconds + 5) {
        //we have missed the window to play;
        //happens when things get updated after playback started

        current_ad_stack.pop();
    }
    else if (currentStreamTime > latestElement.startTimeSeconds ) {
        triggerTheAd(latestElement);
    }
  }
  requestAnimationFrame(checkForAdUpdate);
}

function triggerTheAd(adElement) {
    console.log('Triggered a new Ad');
    adElement.isCurrentlyPlaying = true;

    let streamElement = document.getElementById("stream-vid");
    let overlayElement = document.getElementById("overlay-vid");
    streamElement.muted = true;
    overlayElement.setAttribute('src', adElement.urlSrc);
    overlayElement.play();
    overlayElement.muted = false;
    overlayElement.parentElement.style.display = 'block';

}

function endTheAd(adElement) {
    console.log('an Ad Finished');

    adElement.isCurrentlyPlaying = false;
    adElement.hasPlayed = true;

    let streamElement = document.getElementById("stream-vid");
    let overlayElement = document.getElementById("overlay-vid");
    streamElement.muted = false;
    overlayElement.muted = true;
    overlayElement.parentElement.style.display = 'none';
}


function generateAdStack() {
    let current_profile = global_state.profile ?? 'home';
    let timeLineEvents = timeLine.events;

    let temp_adMatrix = [];
    let ad_offset = 0;
    console.log('started');
    timeLineEvents.forEach( (slot) => {
        console.log('SLOT Started');
        let slotStartSeconds = slot.start_date.second + (slot.start_date.minute * 60) + (slot.start_date.hour * 60 * 60);
        let slotEndSeconds = slot.end_date.second + (slot.end_date.minute * 60) + (slot.end_date.hour * 60 * 60);
        let offSet = 0;

        let totalSlotTime = slotEndSeconds - slotStartSeconds;
        console.log(`Total time for this slot = ${totalSlotTime}`);
        let ad = adMatrix[current_profile][ad_offset++ % adMatrix[current_profile].length];


        while(slotStartSeconds + offSet + ad.length < slotEndSeconds) {
            temp_adMatrix.push({
                startTimeSeconds: slotStartSeconds + offSet,
                urlSrc: ad.src
            });
            offSet += ad.length;
            ad = adMatrix[current_profile][ad_offset++ % adMatrix[current_profile].length];
            console.log('added an Ad');
        }
        console.log('slot Filled');
    });
    console.log(temp_adMatrix);
    current_ad_stack = temp_adMatrix.sort((a,b) => {
        return b.startTimeSeconds - a.startTimeSeconds
    });

}

function clickToUnMute() {
    let streamElement = document.getElementById("stream-vid");
    streamElement.muted = false;
    document.getElementById('unmuteDiv').style.display = 'none';
}
