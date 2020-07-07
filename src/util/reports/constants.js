// const appToken = process.env.APPTOKEN;
// const userName = process.env.USERNAME;
// const password = process.env.PASSWORD;
// const applicationName = process.env.APPLICATION_NAME;
// const mailerEmail = process.env.MAILER_EMAIL;
// const mailerPass = process.env.MAILER_PASS;
const appToken =
  "SdEUeIpSkqVRgnnhll+m+dNnEEBWssJwkeREnBHQSJhd8YfPta6Qb3XeoVq0fk4F";
const userName = "mark@adventurelinks.net";
const password = "St@rtup1";
const applicationName = "AdventureLinksNorthernVirginia";
const mailerEmail = process.env.MAILER_EMAIL;
const mailerPass = process.env.MAILER_PASS;

const baseBody = {
  appToken
};

const baseRequest = {
  userName,
  password,
  applicationName
};

const endPoints = {
  base: "https://cors-anywhere.herokuapp.com/https://awapi.active.com/rest",
  fairfaxData:
    "https://cors-anywhere.herokuapp.com/https://fairfax.usedirect.com/FairfaxFCPAWeb/ACTIVITIES/Search.aspx?category_name=CAMPS&search_text=adventure+links&place_id=ALL+PLACES",
  product: {
    season: "camps-season-info",
    session: "camps-session-info",
    tuitionV2: "camps-tuition-info-v2",
    tuition: "camps-tuition-info",
    sessionOption: "camps-session-option-info"
  },
  registration: {
    info: "camps-registration-info-v2"
  },
  payment: {
    info: "camps-payment-info",
    allocation: "camps-payment-allocation-info"
  },
  person: {
    basic: "camps-person-basic-info",
    detail: "camps-person-detail-info",
    answer: "camps-person-answer-info",
    family: "camps-family-info-v2"
  },
  group: {
    assignment: "camps-group-assignment-info",
    participant: "camps-participant-info",
    info: "camps-group-info"
  },
  merchandise: {
    detail: "merchandise-info",
    purchase: "merchandise-purchaser-info"
  }
};

module.exports = {
  endPoints,
  baseBody,
  baseRequest,
  mailerEmail,
  mailerPass
};
