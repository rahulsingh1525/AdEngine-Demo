let firestore = firebase.firestore();
let screensRef = firestore.collection("ad-screens");

let profile_options = ["food", "travel", "car", "home", "insurance"];
async function updateUIRoomList(room_list) {
  let all_roomsRef = document.getElementById("all-rooms");
  let table_html = `
    <tr>
      <th>Screen Name</th>
      <th>Profile</th>
      <th>Last Updated</th>
      
    </tr>
    `;
  room_list.forEach((room) => {
    room.playerCount = 0;
    let room_html = `
        <tr id="${room.name}">
            <td>${room.name}</td>
            <td>${selectTagWithProfile(room.name, room.profile)}</td>
            <td>${room.lastUpdatedClientTime.toDate().toDateString()}</td>
            
        </tr>
        `;
    table_html += room_html;
    Date;
  });

  all_roomsRef.innerHTML = `<table> ${table_html} </table>`;
}
function updateProfileToFirebase(name, profile, event) {
    console.log(event);
    console.log(name);
    console.log(event.value);
    
    screensRef.doc(name).update({
        "profile": event.value,
        lastUpdatedClientTime: new Date()
    })
}
function selectTagWithProfile(profileName, profile) {
  let select_id = profileName;
  let DOM_string = `<select name="profile-selector" id="select-${profileName}" onchange="updateProfileToFirebase('${profileName}', '${profile}', this)">`;

  profile_options.forEach((option) => {
      DOM_string += `<option value="${option}" ${profile === option ? 'selected' : ''}> ${option} </option>`
  });
  DOM_string += `</select>`;
  return DOM_string;
}

screensRef.onSnapshot((roomsSnapshot) => {
  let room_list = [];
  roomsSnapshot.forEach((room) => {
    let screenData = room.data();
    room_list.push(screenData);
    console.log(screenData);
  });
  updateUIRoomList(room_list);
});
