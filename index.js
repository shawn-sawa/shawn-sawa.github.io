function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => {
        console.log("Registration successful", reg);
      })
      .catch((e) => console.error("Error during service worker registration:", e));
  } else {
    console.warn("Service Worker is not supported");
  }
}

registerServiceWorker();

const content = document.querySelector(".content");
const apts = [
  {
    aptName: "Acacia Park Apartments",
    contactName: "Albert Melendez",
    phone: "915-833-7408",
    address: "5848 Acacia Cir",
    city: "El Paso",
    state: "TX",
    zip: "79912",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13559.756862789352!2d-106.52849497195865!3d31.826648300307664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e757e9cb274d5b%3A0xae9defce309fa3b5!2sAcacia%20Park%20Apartments!5e0!3m2!1sen!2sus!4v1633399303641!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/mbfehys8NevDbntK6',
    nav2:'https://www.google.com/maps/place/Van+Horne+Estates+Apartments/@31.9454988,-106.3733643,17z/data=!3m1!4b1!4m5!3m4!1s0x86e7514555555555:0xe35fde208a7ea5a0!8m2!3d31.9454736!4d-106.3711443',
    nav3:'https://www.google.com/maps/dir//Van+Horne+Estates+Apartments,+11611+Dyer+St,+El+Paso,+TX+79934/@31.9454988,-106.3733643,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86e7514555555555:0xe35fde208a7ea5a0!2m2!1d-106.3711443!2d31.9454736',

  },
  {
    aptName: "Desert Sky Townhomes",
    contactName: "Jennifer Conley",
    phone: "915-751-9924",
    address: "9924 Railroad Dr",
    city: "El Paso",
    state: "TX",
    zip: "79924",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13549.337269411764!2d-106.3914066!3d31.8975127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7519dc9b41299%3A0xb81b4fc8c6af0130!2sDesert%20Sky%20Townhomes!5e0!3m2!1sen!2sus!4v1633398985405!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/fCYNQQHqq7ExRYgH6',
  },
  {
    aptName: "High Ridge Apartments",
    contactName: "Veronica Herrera",
    phone: "915-598-0842",
    address: "9353 Viscount",
    city: "El Paso",
    state: "TX",
    zip: "79925",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13567.97567436472!2d-106.37157577198404!3d31.770651800598348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75b3cb0113d49%3A0x5ebbc8ca6ac7c341!2sHigh%20Ridge%20Apartments!5e0!3m2!1sen!2sus!4v1633398978119!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/sVZXieo5bdCMJ9NK8',
  },

  {
    aptName: "Mountain Vista Appartment",
    contactName: "Gidget Flores",
    phone: "915-751-5757",
    address: "5757 Will Ruth",
    city: "El Paso",
    state: "TX",
    zip: "79924",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13550.947001487297!2d-106.41577997193144!3d31.886573999997868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75112dc533305%3A0x86137ab2c896755d!2sMountain%20Vista%20Apartments!5e0!3m2!1sen!2sus!4v1633398970539!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/DmXS8JDXPxzqUYJR6',
  },

  {
    aptName: "Shadow Ridge Apartments",
    contactName: "Kristina Chaves",
    phone: "915-593-5250",
    address: "9375 Viscount Blvd",
    city: "El Paso",
    state: "TX",
    zip: "79925",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13568.095345893204!2d-106.3716907719844!3d31.769835800602596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75b3b719e0801%3A0xdb27f91de7843774!2sShadow%20Ridge%20Apartments!5e0!3m2!1sen!2sus!4v1633398961493!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/TSdaFJ9aaB7X1wRo8',
  },

  {
    aptName: "The Chimineys Apartments",
    contactName: "Laura Esquivel",
    phone: "915-584-4323",
    address: "200 North Festival",
    city: "El Paso",
    state: "TX",
    zip: "79912",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13560.804005337539!2d-106.5196577719619!3d31.819518800344618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75792ad7680f3%3A0x56e26bcb8db35795!2sThe%20Chimneys%20Apartments!5e0!3m2!1sen!2sus!4v1633398955324!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/V4oEZPB34bxRYw2BA',
  },

  {
    aptName: "The Patriot Apartments",
    contactName: "Karen Gutierrez",
    phone: "915-757-6901",
    address: "4600 Fairbanks",
    city: "El Paso",
    state: "TX",
    zip: "79924",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13548.752011993009!2d-106.44570717192465!3d31.90148889992097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e751548eabfab5%3A0xa47b692c4925f4d!2sThe%20Patriot%20Apartments!5e0!3m2!1sen!2sus!4v1633398927145!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/bGPAw9MZ3KymkQRS6',
  },

  {
    aptName: "The Phoenix Apartments",
    contactName: "Bonnie Doblado",
    phone: "915-595-5487",
    address: "7401 Phoenix Ave.",
    city: "El Paso",
    state: "TX",
    zip: "79915",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13570.21688794295!2d-106.37670407199097!3d31.755366600677885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75b41f28e9387%3A0xbcb39aad38ba3ba1!2sThe%20Phoenix%20Apartments!5e0!3m2!1sen!2sus!4v1633398919882!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/KUq6DrePyi5NzDV56',
  },
  {
    aptName: "Van Horne Apartments",
    contactName: "Lucia Sanchez",
    phone: "915-821-0130",
    address: "11611 Dyer St.",
    city: "El Paso",
    state: "TX",
    zip: "79934",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13542.269875550852!2d-106.37993037190465!3d31.945498499694512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7514555555555%3A0xe35fde208a7ea5a0!2sVan%20Horne%20Estates%20Apartments!5e0!3m2!1sen!2sus!4v1633398908845!5m2!1sen!2sus",
    nav:'https://goo.gl/maps/wMZunfs9yzWhaoz66',
  },
];

function makeHTML(apt) {
  const div = document.createElement("div");
  div.innerHTML = `
<div class="apartment">
    <div class="info">
        <div class="aptName">${apt.aptName}</div>
        <div class="contactName">${apt.contactName}</div>
        <div class="phoneNumber">
            <a href="tel:+1${apt.phone.replaceAll("-", "")}">${apt.phone}</a>
        
        </div>
        <div class="address">
        ${apt.address}<br>
        ${apt.city}, 
        ${apt.state}&nbsp
        ${apt.zip}
        </div>
    </div>
    <div>
    <div class="nav"><a href="${apt.nav}">Navigate</a></div>
    ${apt.nav2 ? '<div class="nav"><a href="' + apt.nav2 + '">Navigate 2</a></div>' : ''}
    ${apt.nav3 ? '<div class="nav"><a href="' + apt.nav3 + '">Navigate 3</a></div>' : ''}
    <span>testing</span>
    
    <div class="showMap">Show Map</div>
      <div class="map">
          <iframe
              src="${apt.map}"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
          ></iframe>
      </div>
    
    </div>
</div>
`;
  return div;
}

window.onload = () => {
  console.log("win loaded");
  apts.forEach((apt) => {
    // console.log(apt);
    content.append(makeHTML(apt));
  });
};
