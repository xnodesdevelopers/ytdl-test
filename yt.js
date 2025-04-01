const ytdl = require("garfield-ytdl");
const cookies = [
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "GPS",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "1"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "YSC",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "8P5xypq0HNI"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "VISITOR_INFO1_LIVE",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "8zLOKUr7WwA"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "VISITOR_PRIVACY_METADATA",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "CgJHQhIEGgAgRQ%3D%3D"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "PREF",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "tz=Asia.Colombo"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-1PSIDTS",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "sidts-CjEB7pHptZsuafLBTmLVdy2FgcGDQ8Y6q4SvnElAKMEJueaHjuqKMA5ukDVkLCwHiekJEAA"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-3PSIDTS",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "sidts-CjEB7pHptZsuafLBTmLVdy2FgcGDQ8Y6q4SvnElAKMEJueaHjuqKMA5ukDVkLCwHiekJEAA"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "HSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "AFIknu3GL_fCIPVnE"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "SSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "AA2YkDJ9WwJvrsL5b"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "APISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "5X31BXfVw-wreDgY/Au8TqwFud1oOlhRFS"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "SAPISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "T2YxYg4s1JPdUynU/AwgbdyH_mmbCYGRr4"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-1PAPISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "T2YxYg4s1JPdUynU/AwgbdyH_mmbCYGRr4"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-3PAPISID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "T2YxYg4s1JPdUynU/AwgbdyH_mmbCYGRr4"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "SID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "g.a000vQhqA7ss3wZHxXhgkYwCwTKNFD4pMT0pQIUdN8bnwh7smsEFUa8JI5nxY-Qf4xeZHw_dQgACgYKAWESARASFQHGX2MiUz43plcxXZ6RR23XiwsUjxoVAUF8yKqbu0XhRNinuBI_aaLvdFbX0076"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-1PSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "g.a000vQhqA7ss3wZHxXhgkYwCwTKNFD4pMT0pQIUdN8bnwh7smsEFzW0cYHFzRfBlZ2hf5Y52GQACgYKAT4SARASFQHGX2MisahmqIdNyShuPquAHu3XhRoVAUF8yKoZNE7iL7m3d8euhfEzCuGl0076"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-3PSID",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "g.a000vQhqA7ss3wZHxXhgkYwCwTKNFD4pMT0pQIUdN8bnwh7smsEFGDDvADYM0VhwvDcPmt_HmAACgYKAVUSARASFQHGX2MitzLPw1G4OJiNzV_NXsqWfhoVAUF8yKrDwUSNQEzRZV9GtKwD0gNY0076"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-ROLLOUT_TOKEN",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "CKe_3Z6Zg9uOJhCPj6y2jraMAxjPseLpjraMAw%3D%3D"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "LOGIN_INFO",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "AFmmF2swRAIgSQJmfCiB_EFPxBmaUg0B-KbwnwsT2L4EI74F8OgklLgCIF6XO3DvyKVixTuXui4rr8NrZmjLo-Jm_ckmXwBlcN8J:QUQ3MjNmelVNeFdEcmJZa2FnS21hM2N2UGZPaUs4ZjFaRTdRODhmVHZkWU93R0NuOFlfVVJRTnV3cUJ1QXdXQldzZkhPU0VUaXI3ckxVVGpxYXFpZkN4S3I5VThJX1pIaU9oS1dqbG1kRHhOR1RYU1hqNXlpaGM2aVZXZzdUNXJVTTN3YS01c0RWdkM1MkxIemxqTjBTd0VSdks4SURjVld3"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "SIDCC",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "AKEyXzWmLd6Nm3Fv1Dy1P-LHGpBtZ5IEo3rgnn9ApXpTpR9qLutYsK2ZdhN9MG5_evn6M97H6A"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-1PSIDCC",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "AKEyXzUEj_cI3s3yZGSEgelnTDOlwtP4A9ABvtD-n-md9_nyzHTg3LJKzKxw48V_KnWQUomM"
  },
  {
    "domain": ".youtube.com",
    "hostOnly": false,
    "httpOnly": true,
    "name": "__Secure-3PSIDCC",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": true,
    "session": false,
    "value": "AKEyXzUt5-_t4s6vidgD9s8A5l82Q7KpQlhILJk0prSocpIFcrBfOCvpQYvyykoG-rboiAA6"
  }
];
const agent = ytdl.createAgent(cookies);

// Custom headers and options for ytdl
const ytdlOptions = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
  },
  agent: agent, // Use the custom agent with cookies
};

// Create a custom agent
// 2. Video URL to process
const videoUrl = "https://www.youtube.com/watch?v=cBoh3SroBMo";

// 3. Process and filter function
async function processAndFilterVideo() {
  try {
   try {
  // Setup with cookies
  const info = await ytdl.getInfo(videoUrl, ytdlOptions);

  // Get video formats with both video and audio
  const videoFormats = info.formats.filter(
    (format) => format.hasVideo && format.hasAudio
  );

  // Console out the filtered formats
  console.log("Formats with video and audio:", videoFormats);

} catch (error) {
  console.error("Error:", error.message);
}
}

// Start process
processAndFilterVideo();
