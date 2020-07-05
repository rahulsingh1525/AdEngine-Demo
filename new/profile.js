let submitBtn = document.getElementById("profile-btn");
let inputBox = document.getElementById("profile-input");
let firestore = firebase.firestore();
submitBtn.addEventListener("click", (e) => {
  setProfileNameValue();
});

inputBox.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitBtn.click();
  }
});

function setProfileNameValue() {
  let val = inputBox.value;
  console.log(val);

  localforage.setItem("ae-profile_name", val).then((val) => {
    console.log(`Updated profile name value ${val}`);
  });


  firestore.collection('/ad-screens').doc(val).set({
      name: val,
      profile: 'home',
      lastUpdatedClientTime: new Date()
  })
}

async function initProfile() {
  console.log("trying INIT");

  try {
    let itemValue = await localforage.getItem("ae-profile_name");
    console.log(`Value of profile = ${itemValue}`);
    if (itemValue) {
      inputBox.value = itemValue;
      // updateUIProfile(itemValue);
    }
  } catch (error) {
    console.error(error);
  }
}

initProfile();
