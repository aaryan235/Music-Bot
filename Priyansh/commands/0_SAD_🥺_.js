//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT FAIZ ANSARI
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "FAIZ-BOT-5",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI",
  description: "MAHI REPLY MR FAIZ ANSARI",
  commandCategory: "NO PREFIX",
  usages: "STATUS",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["बस एक बार वापस आ जाओ फिर कभी शिकायत का मौका नही दुगा 😊🤸__💔","मैंने बहुत गलतिया कि हैं मानता हूं पर दिल से सॉरी माफ़ कर दो मुझे प्लीज 😊💔👈_🤸","मुझे बस तुम चाहिए और कोई भी नही प्लीज मन जाओ😊💔👈_🤸","मुझे रात को बिना रोए नीद नही आती है 😊💔👈_🤸","सुनो ना तुम्हारे जाने के बाद मुझे अब अपनी जिन्दगी से प्यार नही रहा 😊💔👈_🤸","मैं तुमसे भीख मांगता हूं प्लीज एक बार वापस अ जाओ 😊💔_🤸","सुनो ना बाबू आई रिले मिस यू 😊💔👈_🤸","मुझे आज भी यकीन नही होता है यार की हम अलक हो गाए हैं बाबू प्लीज बापास अ जाओ 😊💔👈_🤸","मुझे कुछ समझ में नहीं आ रहा है कि मैं किस से भीख मागू जिस से तुम मेरी ज़िंदगी में वापस आ जाओ 😊💔👈_🤸","तुम तो सायद जी लो मेरे बिन मैं जीना पाऊंगा तुम्हारे बिन 😊💔👈_🤸","दुआ करो की मैं किसी हादसे में मर जाऊ बाबू 😊💔👈_🤸","प्लीज कोसिस कारो एक बार ओर मेरे पास आने की मैं तुम्हें कभी अब गाली भी नही दुगा प्लीज वापस आ जाओ😊💔👈_🤸","  I MISS U बाबू I LOVE यू बाबू प्लीज जान वापस A जाओ 😊💔👈_🤸","कास आइसा कुछ हो जाए की सब पहिले जैसा ठीक हो जाए miss u 😊💔👈_🤸","प्लीज एक मौका दे दो हमे हम इस बार सच में आप को नही स्तायेगे पक्का यार पार प्लीज लौट आओ मेरी ज़िंदगी में बाबू😊💔👈_🤸","बाबू मुझे तुम चहिए बस और कुछ भी नहीं चहिए pliz वापस a जाओ बाबू😊💔👈_🤸","मुझे kuch भी ठीक नही लगता है तुम्हारे बिना बाबू बहुत कोशिश किया तुम्हे भूलने की pr भूल नही पाए अब bs ya to tum mil jao mujhe ya fir maut a Jaye मुझे बाबू😊💔👈_🤸","मुझे पीने का शौक नही पिता हु गम भुलाने को बाबू i Miss यू 😊💔👈_🤸","आइसा कोई दिन या रात नही जिस दिन tume yaad na किया हो बाबू 😊👈","बाबू मैं मार जाऊंगा रोज मेरे दिल में तकलीफ होती है बाबू प्लीज वापस a jao🥺👈","कोई तो मेरी सुन लो mujhe मेरी बाबू वापस दिला दो 🥺👈","कसम से बाबू मै tume kabhi kuch bhi nhi boluga na hi शक kruga यकीन करो बाबू इस बार मेरा i Miss u yr pliz smjho mujhe🙏🙏🥺👈","बस एक बार बाबू bs ek bar vapas aa jao pliz Babu 🙏🙏🥺👈","suno na Babu tume yaad hai na tum ने कसम भी खाई थी की शादी तुम से ही krugi बाबू😊👈","बाबू प्लीज मन जा yr प्लीज बाबू a ja vapas Babu🥺😊👈","Babu pliz sb kuch चोर kr के मेरे पास आ जाओ बाबू प्लीज बाबू 🥺🥺👈","मेला बाबू मेली जान मेली सोना मेली मोना प्लीज मान जाओ बाबू🥺🥺👈","मुझसे तुम्हारे साथ ही जीना है है बाबू प्लीज वापस आ जाओ🥺🥺👈","सजा प्यार कि मौत से काम नही बाबू 🥺🥺👈","बाबू मुझे गाली दे ले मार ले बाबू मुझे pr pliz Babu vapas aa ja बाबू🥺🥺👈","tu मेरी ज़िंदगी है बाबू प्लीज एक मौका दे दे यार 🥺🥺🙏👈"," I LOVE 💕 YOU JAAN😊👈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "gandu bot") || (event.body.toLowerCase() == "bot gandu") || (event.body.toLowerCase() == "bot gandu hai")) {
     return api.sendMessage("बोस्डीके बोट को गाडू बोलेगा तेरे साइज के जितना मेरा लन्ड है चूतिये 😈", threadID);
   };
  ////////////@prem-babu3608///////////
   mess = "{name}"

  if (event.body.indexOf("JANU") == 0 || (event.body.indexOf("Janu") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }