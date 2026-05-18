// LGS İngilizce - Cümle Anlama Modülü
// Sınavlarda sık geçen cümle kalıpları + yakın varyantları.
// Çeldiriciler: anlam farkını ölçer (olumlu/olumsuz, kişi, zaman, modal, sebep/sonuç).

window.SENTENCES = [

  /* ---------- FRIENDSHIP ---------- */
  {
    theme: "friendship",
    en: "We get on well and share our secrets with each other.",
    tr: "İyi anlaşıyoruz ve sırlarımızı birbirimizle paylaşıyoruz.",
    distractors: [
      "İyi anlaşmıyoruz ama sırlarımızı paylaşıyoruz.",
      "İyi anlaşıyoruz ama sırlarımızı paylaşmıyoruz.",
      "Birbirimize ait olan sırları sakladık."
    ]
  },
  {
    theme: "friendship",
    en: "She doesn't support me when I need her.",
    tr: "Ona ihtiyacım olduğunda beni desteklemiyor.",
    distractors: [
      "Ona ihtiyacım olduğunda beni destekliyor.",
      "Bana ihtiyacı olduğunda onu desteklemiyorum.",
      "Beni desteklediğinde ona ihtiyacım olmuyor."
    ]
  },
  {
    theme: "friendship",
    en: "I don't trust Betty, so I don't share my secrets with her.",
    tr: "Betty'ye güvenmiyorum, bu yüzden sırlarımı onunla paylaşmıyorum.",
    distractors: [
      "Betty'ye güveniyorum ama sırlarımı paylaşmıyorum.",
      "Betty bana güvenmiyor, bu yüzden sırlarını paylaşmıyor.",
      "Betty'ye güvendiğim için sırlarımı paylaşıyorum."
    ]
  },
  {
    theme: "friendship",
    en: "Tim doesn't forget to organize parties for my birthdays.",
    tr: "Tim, doğum günlerim için parti düzenlemeyi unutmaz.",
    distractors: [
      "Tim, doğum günlerim için parti düzenlemeyi unutur.",
      "Doğum günlerinde Tim için parti düzenlemeyi unutmam.",
      "Tim doğum günlerimi kutlamayı sevmez."
    ]
  },
  {
    theme: "friendship",
    en: "I have similar interests with her, and we like spending time together.",
    tr: "Onunla benzer ilgi alanlarımız var ve birlikte vakit geçirmeyi seviyoruz.",
    distractors: [
      "Onunla farklı ilgi alanlarımız var ama birlikte vakit geçiriyoruz.",
      "Benzer ilgi alanlarımız olsa da birlikte vakit geçirmeyi sevmiyoruz.",
      "İlgi alanlarımız aynı değil, bu yüzden onunla görüşmüyorum."
    ]
  },
  {
    theme: "friendship",
    en: "Ashley doesn't support me when I need her.",
    tr: "Ashley, ona ihtiyacım olduğunda beni desteklemez.",
    distractors: [
      "Ashley, ihtiyacı olduğunda beni destekler.",
      "Ashley'e ihtiyacım yok ama o beni destekler.",
      "Beni destekleyen tek kişi Ashley'dir."
    ]
  },
  {
    theme: "friendship",
    en: "She is the best student in our class. Her exam results are always good.",
    tr: "Sınıfımızdaki en iyi öğrenci o. Sınav sonuçları her zaman iyi.",
    distractors: [
      "Sınıfımızın en iyi öğrencisi değil ama sınavları geçti.",
      "Sınıfta iyi bir öğrenci ama sınavları her zaman kötü.",
      "Sınavlardaki sonuçları bazen iyi, bazen kötü."
    ]
  },

  /* ---------- TEEN LIFE ---------- */
  {
    theme: "teenlife",
    en: "I rarely watch TV because I have too much homework.",
    tr: "Çok ödevim olduğu için nadiren televizyon izlerim.",
    distractors: [
      "Çok ödevim olmadığı için televizyon izlerim.",
      "Televizyonu sık izlerim çünkü ödevim azdır.",
      "Hiç ödevim olmasa da televizyon izlemem."
    ]
  },
  {
    theme: "teenlife",
    en: "I am good at Maths, but I am not interested in Physics.",
    tr: "Matematikte iyiyim ama Fizik ile ilgilenmiyorum.",
    distractors: [
      "Matematikte iyi değilim ama Fizik ile ilgileniyorum.",
      "Hem Matematikte iyiyim hem Fizik ile ilgileniyorum.",
      "Ne Matematikte iyiyim ne de Fiziği seviyorum."
    ]
  },
  {
    theme: "teenlife",
    en: "She would rather read books than play computer games.",
    tr: "Bilgisayar oyunu oynamaktansa kitap okumayı tercih eder.",
    distractors: [
      "Kitap okumaktansa bilgisayar oyunu oynamayı tercih eder.",
      "Hem kitap okur hem bilgisayar oyunu oynar.",
      "Ne kitap okur ne de bilgisayar oyunu oynar."
    ]
  },
  {
    theme: "teenlife",
    en: "I'd love to come to your party, but I have to study for my exam.",
    tr: "Partine gelmek isterdim ama sınavıma çalışmak zorundayım.",
    distractors: [
      "Partine geleceğim çünkü sınavım yok.",
      "Sınavıma çalıştıktan sonra partine gelmek istemem.",
      "Partine gelirsen sınavıma çalışırım."
    ]
  },
  {
    theme: "teenlife",
    en: "I'm not free this Saturday because I have a lot of homework.",
    tr: "Bu cumartesi müsait değilim çünkü çok ödevim var.",
    distractors: [
      "Bu cumartesi müsaitim ama ödevim var.",
      "Cumartesi günleri ödev yapmam, müsaitim.",
      "Çok az ödevim var, bu yüzden cumartesi müsaitim."
    ]
  },
  {
    theme: "teenlife",
    en: "I can attend the course on weekdays but not on weekends.",
    tr: "Kursa hafta içi katılabilirim ama hafta sonları katılamam.",
    distractors: [
      "Kursa hafta sonu katılabilirim ama hafta içi katılamam.",
      "Kursa her gün katılabilirim.",
      "Kursa ne hafta içi ne de hafta sonu katılırım."
    ]
  },

  /* ---------- IN THE KITCHEN ---------- */
  {
    theme: "kitchen",
    en: "I like being in the kitchen, so I cook the meals.",
    tr: "Mutfakta olmayı severim, bu yüzden yemekleri ben pişiririm.",
    distractors: [
      "Mutfakta olmayı sevmem ama yemek pişiririm.",
      "Yemek pişirmeyi sevdiğim için mutfaktan çıkmam.",
      "Mutfakta olmayı sevsem de yemek pişirmem."
    ]
  },
  {
    theme: "kitchen",
    en: "Boil a cup of milk for about 5 minutes.",
    tr: "Bir bardak sütü yaklaşık 5 dakika kaynat.",
    distractors: [
      "Bir bardak sütü 5 dakika fırında pişir.",
      "5 dakika boyunca bir bardak süt iç.",
      "Sütü kaynattıktan 5 dakika sonra dök."
    ]
  },
  {
    theme: "kitchen",
    en: "Chop the tomatoes and fry them in a pan.",
    tr: "Domatesleri doğra ve tavada kızart.",
    distractors: [
      "Domatesleri tavada kaynat ve doğra.",
      "Domatesleri yıka ama doğrama.",
      "Tavayı doğra ve domatesleri pişir."
    ]
  },
  {
    theme: "kitchen",
    en: "I don't know how to cook, so I can't help you.",
    tr: "Yemek yapmayı bilmiyorum, bu yüzden sana yardım edemem.",
    distractors: [
      "Yemek yapmayı biliyorum, sana yardım edebilirim.",
      "Sana yardım edemem ama yemek yapmayı biliyorum.",
      "Yemek yapmayı sevmiyorum, ama sana yardım ederim."
    ]
  },
  {
    theme: "kitchen",
    en: "How long does it take to bake the cake?",
    tr: "Kekin pişmesi ne kadar sürer?",
    distractors: [
      "Kekin pişmesi nasıl olur?",
      "Keki ne zaman pişiriyorsun?",
      "Kek için kaç tane yumurta gerekir?"
    ]
  },
  {
    theme: "kitchen",
    en: "Can we add some chocolate into the mixture?",
    tr: "Karışıma biraz çikolata ekleyebilir miyiz?",
    distractors: [
      "Karışımdan biraz çikolata çıkarabilir miyiz?",
      "Çikolatayı karışımla yiyebilir miyiz?",
      "Karışım çikolataya benziyor mu?"
    ]
  },
  {
    theme: "kitchen",
    en: "Pour the milk on the slices and let it cool.",
    tr: "Sütü dilimlerin üzerine dök ve soğumaya bırak.",
    distractors: [
      "Dilimleri sütün içine dök ve sıcak ye.",
      "Sütü kaynat ve dilimleri içine at.",
      "Sütü dök ama dilimlere dokunma."
    ]
  },

  /* ---------- ON THE PHONE ---------- */
  {
    theme: "phone",
    en: "May I speak to Mr. Johnson, please?",
    tr: "Bay Johnson ile konuşabilir miyim, lütfen?",
    distractors: [
      "Bay Johnson sizinle konuşabilir mi?",
      "Bay Johnson'a bir mesajınız var mı?",
      "Bay Johnson telefonu kapattı mı?"
    ]
  },
  {
    theme: "phone",
    en: "I'm sorry, but he is not available at the moment.",
    tr: "Üzgünüm ama şu anda müsait değil.",
    distractors: [
      "Üzgünüm, şu anda müsait.",
      "Şu anda burada değil ama müsait.",
      "Bir saat sonra ara, şu an meşgul olabilir."
    ]
  },
  {
    theme: "phone",
    en: "Could you tell him to call me back, please?",
    tr: "Beni geri aramasını söyler misiniz, lütfen?",
    distractors: [
      "Onu geri aramamı söyler misiniz?",
      "Beni aradığını ona söyleyebilir misiniz?",
      "Sizi geri arayacağımı söyleyebilir miyim?"
    ]
  },
  {
    theme: "phone",
    en: "Would you like to leave a message?",
    tr: "Mesaj bırakmak ister misiniz?",
    distractors: [
      "Mesajı bırakabilir miyim?",
      "Mesajınızı aldım mı?",
      "Mesajı silmemi ister misiniz?"
    ]
  },
  {
    theme: "phone",
    en: "Just a minute, please. I'll get him for you.",
    tr: "Bir dakika lütfen. Onu sizin için çağıracağım.",
    distractors: [
      "Bir dakika lütfen. Onu sizinle tanıştıracağım.",
      "Bir dakika sonra onu arayın.",
      "Bir dakika içinde size dönecek."
    ]
  },
  {
    theme: "phone",
    en: "Hold on a minute, please. He is in a meeting now.",
    tr: "Bir dakika hatta kalın, lütfen. Şu anda toplantıda.",
    distractors: [
      "Bir dakika sonra arayın, toplantı bitti.",
      "Toplantısı varsa kapatabilirsiniz.",
      "Bir dakika içinde toplantıya katılacak."
    ]
  },
  {
    theme: "phone",
    en: "Could you repeat that, please? I didn't hear you well.",
    tr: "Tekrar eder misiniz, lütfen? Sizi iyi duyamadım.",
    distractors: [
      "Tekrar dinler misiniz? Beni iyi duydunuz mu?",
      "Sözünüzü kestiğim için özür dilerim.",
      "Bir daha söylemeyin lütfen, anlamadım."
    ]
  },
  {
    theme: "phone",
    en: "Please give me some details about the problem.",
    tr: "Lütfen problem hakkında bana biraz detay verin.",
    distractors: [
      "Lütfen problemi hemen çözün.",
      "Lütfen problem hakkında daha az şey söyleyin.",
      "Lütfen problemi başkasına anlatın."
    ]
  },

  /* ---------- THE INTERNET ---------- */
  {
    theme: "internet",
    en: "Students spend too much time on social media when they are at school.",
    tr: "Öğrenciler okuldayken sosyal medyada çok fazla vakit harcıyorlar.",
    distractors: [
      "Öğrenciler sosyal medyada okul saatinde çok az vakit geçiriyor.",
      "Öğrenciler okul dışında sosyal medyaya hiç girmiyor.",
      "Sosyal medyaya çok az giren öğrenciler okulda iyidir."
    ]
  },
  {
    theme: "internet",
    en: "It helps us to find a lot of information in a short time.",
    tr: "Kısa sürede çok fazla bilgi bulmamıza yardımcı olur.",
    distractors: [
      "Uzun sürede az bilgi bulmamızı sağlar.",
      "Bilgiyi bulmak için bize uzun zaman gerekir.",
      "Çok fazla bilgi bulmamıza engel olur."
    ]
  },
  {
    theme: "internet",
    en: "Shopping and paying the bills online make my life easier.",
    tr: "Online alışveriş ve fatura ödemek hayatımı kolaylaştırıyor.",
    distractors: [
      "Online alışveriş hayatımı zorlaştırıyor.",
      "Faturaları yüz yüze ödemek hayatımı kolaylaştırır.",
      "Alışverişe gitmek hayatımı eğlenceli yapıyor."
    ]
  },
  {
    theme: "internet",
    en: "Don't use your name in your password.",
    tr: "Şifrende adını kullanma.",
    distractors: [
      "Şifrene adını eklemelisin.",
      "Adını şifrenle birlikte kullan.",
      "Şifreni adınla değiştir."
    ]
  },
  {
    theme: "internet",
    en: "I don't think the Internet is useful.",
    tr: "İnternetin faydalı olduğunu düşünmüyorum.",
    distractors: [
      "İnternetin faydalı olduğunu düşünüyorum.",
      "İnternet faydalı olmasa kullanırım.",
      "İnterneti kullanmıyorum ama faydalıdır."
    ]
  },
  {
    theme: "internet",
    en: "I have one more ticket for a pop concert. Shall we go together?",
    tr: "Bir pop konseri için bir biletim daha var. Birlikte gidelim mi?",
    distractors: [
      "Pop konseri biletini sana satayım mı?",
      "Pop konserine hiç bilet almadım, gelir misin?",
      "Pop konserini birlikte izledik mi?"
    ]
  },
  {
    theme: "internet",
    en: "I love reading about famous people's lives.",
    tr: "Ünlü kişilerin hayatları hakkında okumayı seviyorum.",
    distractors: [
      "Ünlü kişilerin hayatlarını yazmayı seviyorum.",
      "Ünlü olmayı seven insanlar hakkında okumam.",
      "Ünlü kişileri tanımayı sevmiyorum."
    ]
  },

  /* ---------- ADVENTURES ---------- */
  {
    theme: "adventures",
    en: "Tony is crazy about activities full of speed and challenge.",
    tr: "Tony, hız ve zorluk dolu aktivitelere bayılıyor.",
    distractors: [
      "Tony, sakin aktiviteleri çok seviyor.",
      "Tony, hızdan ve zorluktan korkar.",
      "Tony, aktivitelerden uzak durmayı tercih eder."
    ]
  },
  {
    theme: "adventures",
    en: "Lily can't stand water sports but she is fond of air sports.",
    tr: "Lily, su sporlarına dayanamaz ama hava sporlarına bayılır.",
    distractors: [
      "Lily, hava sporlarına dayanamaz ama su sporlarını sever.",
      "Lily hem su hem hava sporlarına dayanamaz.",
      "Lily hem su hem hava sporlarına bayılır."
    ]
  },
  {
    theme: "adventures",
    en: "I'd rather try kayaking than kite surfing.",
    tr: "Kite sörfü yapmaktansa kayak (kano) yapmayı tercih ederim.",
    distractors: [
      "Kayak yapmaktansa kite sörfü yapmayı tercih ederim.",
      "Hem kayak hem kite sörfü yapmayı isterim.",
      "Ne kayak ne de kite sörfü yapmayı isterim."
    ]
  },
  {
    theme: "adventures",
    en: "Paragliding is too risky for me.",
    tr: "Yamaç paraşütü benim için fazla riskli.",
    distractors: [
      "Yamaç paraşütü benim için çok güvenli.",
      "Riskli olduğu için yamaç paraşütüne bayılırım.",
      "Yamaç paraşütünü sadece çocuklar yapabilir."
    ]
  },
  {
    theme: "adventures",
    en: "If you really want to learn about extreme sports, go and buy another book.",
    tr: "Ekstrem sporlar hakkında gerçekten bilgi edinmek istiyorsan, git başka bir kitap al.",
    distractors: [
      "Ekstrem sporları öğrenmek istiyorsan bu kitap iyi bir tercih.",
      "Ekstrem sporları sevmiyorsan kitap almana gerek yok.",
      "Ekstrem sporlar için tek kaynak bu kitaptır."
    ]
  },
  {
    theme: "adventures",
    en: "It was both challenging and exciting. I liked it.",
    tr: "Hem zorlayıcı hem heyecan vericiydi. Beğendim.",
    distractors: [
      "Ne zorlayıcı ne heyecan vericiydi. Beğenmedim.",
      "Zorlayıcıydı ama heyecanlı değildi, beğendim.",
      "Heyecanlıydı ama beğenmedim, çünkü zorluydu."
    ]
  },
  {
    theme: "adventures",
    en: "You shouldn't do it without your helmet.",
    tr: "Kaskını takmadan bunu yapmamalısın.",
    distractors: [
      "Kaskını takarak bunu yapmalısın değil.",
      "Kaskını takmadan bunu yapabilirsin.",
      "Bunu yaptığında kaskına ihtiyacın yok."
    ]
  },

  /* ---------- TOURISM ---------- */
  {
    theme: "tourism",
    en: "He enjoys being in nature, so he goes hiking every year.",
    tr: "Doğada olmaktan hoşlanır, bu yüzden her yıl yürüyüşe çıkar.",
    distractors: [
      "Doğayı sevmez ama yine de her yıl yürüyüşe çıkar.",
      "Her yıl yürür ama doğada olmayı sevmez.",
      "Doğada olmayı sever ama yürümekten hoşlanmaz."
    ]
  },
  {
    theme: "tourism",
    en: "You can enjoy its beautiful gardens when you visit it.",
    tr: "Onu ziyaret ettiğinde güzel bahçelerinin tadını çıkarabilirsin.",
    distractors: [
      "Bahçeleri güzel ama ziyaret edemezsin.",
      "Onu ziyaret ettiğinde bahçeleri görmen yasak.",
      "Bahçeleri ziyaret etmek için para öder misin?"
    ]
  },
  {
    theme: "tourism",
    en: "If you love pizza, don't miss this festival.",
    tr: "Pizzayı seviyorsan bu festivali kaçırma.",
    distractors: [
      "Pizzayı sevmiyorsan bu festivale git.",
      "Bu festivali kaçırırsan pizzayı seversin.",
      "Pizzayı sevmesen de festivali kaçır."
    ]
  },
  {
    theme: "tourism",
    en: "I was in Italy for a week on my holiday.",
    tr: "Tatilimde bir hafta İtalya'daydım.",
    distractors: [
      "Tatilim için bir haftalığına İtalya'ya gideceğim.",
      "İtalya'da tatil yapmaya hiç gitmedim.",
      "İtalya'ya bir gün için gittim."
    ]
  },
  {
    theme: "tourism",
    en: "The food was delicious! I'd like to go there again.",
    tr: "Yemekler harikaydı! Oraya tekrar gitmek isterim.",
    distractors: [
      "Yemekler kötüydü, bir daha gitmem.",
      "Yemekler güzeldi ama bir daha gitmek istemem.",
      "Yemekleri beğenmedim, ama yine gitmek isterim."
    ]
  },
  {
    theme: "tourism",
    en: "Visit the historic Aspendos Amphitheater and stay at a luxurious resort.",
    tr: "Tarihi Aspendos Amfi Tiyatrosu'nu ziyaret edin ve lüks bir tatil köyünde kalın.",
    distractors: [
      "Aspendos'u ziyaret edin ama bir çadırda kalın.",
      "Aspendos'a gitmeyin, lüks tesise girin.",
      "Aspendos'taki ucuz pansiyona gidin."
    ]
  },

  /* ---------- CHORES ---------- */
  {
    theme: "chores",
    en: "Laura asks her husband Matt to prepare the dinner before the guests arrive.",
    tr: "Laura, kocası Matt'ten misafirler gelmeden önce akşam yemeğini hazırlamasını ister.",
    distractors: [
      "Matt, Laura'dan misafirler için yemek pişirmesini ister.",
      "Misafirler geldikten sonra Matt yemeği hazırlar.",
      "Laura, Matt geldikten sonra yemeği hazırlar."
    ]
  },
  {
    theme: "chores",
    en: "I take out the rubbish every morning.",
    tr: "Her sabah çöpü dışarı çıkarırım.",
    distractors: [
      "Çöpü her akşam dışarı çıkarırım.",
      "Sabahları çöpü dışarıdan içeri alırım.",
      "Çöpü hiç dışarı çıkarmam."
    ]
  },
  {
    theme: "chores",
    en: "Help your parents with the chores.",
    tr: "Ev işlerinde annene babana yardım et.",
    distractors: [
      "Annenin babanın ev işlerine karışma.",
      "Ev işlerini tek başına yap.",
      "Anne ve baban senin ev işlerine yardım eder."
    ]
  },
  {
    theme: "chores",
    en: "I have to vacuum the floor before my mother comes home.",
    tr: "Annem eve gelmeden önce yerleri elektrikli süpürgeyle süpürmek zorundayım.",
    distractors: [
      "Annem eve geldikten sonra süpürgeyi temizlerim.",
      "Annem geldikçe yerleri ben süpürtürüm.",
      "Annem yerleri süpürmek zorunda."
    ]
  },
  {
    theme: "chores",
    en: "It is my responsibility to walk the dog every evening.",
    tr: "Köpeği her akşam gezdirmek benim sorumluluğumdur.",
    distractors: [
      "Köpek beni her akşam gezdirir.",
      "Sabahları köpeği gezdirmek benim sorumluluğum.",
      "Köpeği gezdirmek zor olduğu için yapmam."
    ]
  },
  {
    theme: "chores",
    en: "Milo helps us with the kitchen chores.",
    tr: "Milo, mutfak işlerinde bize yardım eder.",
    distractors: [
      "Milo, mutfak işlerinde bize engel olur.",
      "Biz Milo'nun mutfak işlerine yardım ederiz.",
      "Milo mutfakta yemek yer."
    ]
  },

  /* ---------- SCIENCE ---------- */
  {
    theme: "science",
    en: "He developed new methods and special tools in medicine.",
    tr: "Tıpta yeni yöntemler ve özel aletler geliştirdi.",
    distractors: [
      "Tıpta eski yöntemleri kullanmaya devam etti.",
      "Yeni yöntemleri kullanmadan tıbba katkı yaptı.",
      "Tıpta yeni hastalıklar buldu."
    ]
  },
  {
    theme: "science",
    en: "Graham Bell invented the telephone in 1876.",
    tr: "Graham Bell, telefonu 1876'da icat etti.",
    distractors: [
      "Graham Bell, 1876'da telefonu icat edemedi.",
      "Telefon 1876'dan önce icat edilmişti.",
      "Graham Bell telefonu 1976'da icat etti."
    ]
  },
  {
    theme: "science",
    en: "Scientists are searching for life forms on other planets.",
    tr: "Bilim insanları diğer gezegenlerde yaşam biçimleri arıyorlar.",
    distractors: [
      "Bilim insanları sadece Dünya'da yaşam arıyor.",
      "Diğer gezegenlerde yaşam aramak yasaktır.",
      "Bilim insanları yaşam biçimleri yarattı."
    ]
  },
  {
    theme: "science",
    en: "It is difficult to tell, but I guess it's the computer.",
    tr: "Söylemek zor ama sanırım o, bilgisayar.",
    distractors: [
      "Söylemek kolay, kesinlikle bilgisayar.",
      "Bilgisayar olduğunu söylemek imkansız.",
      "Sanırım o bir bilgisayar değildi."
    ]
  },
  {
    theme: "science",
    en: "He published lots of articles and he is the writer of many books.",
    tr: "Birçok makale yayımladı ve birçok kitabın yazarıdır.",
    distractors: [
      "Birkaç makale okudu ama kitap yazmadı.",
      "Kitapları okumayı sever ama yazmaz.",
      "Hiç makale yayımlamadı, sadece kitap yazdı."
    ]
  },
  {
    theme: "science",
    en: "We can do many things with it and it makes our lives much easier.",
    tr: "Onunla birçok şey yapabiliriz ve hayatımızı çok daha kolaylaştırır.",
    distractors: [
      "Onunla az şey yapabiliriz ama hayatımızı kolaylaştırır.",
      "Onunla çok şey yapsak da hayatımızı zorlaştırır.",
      "Onsuz hayatımız daha kolaydır."
    ]
  },

  /* ---------- NATURAL FORCES ---------- */
  {
    theme: "natural",
    en: "Stay calm and try to find a safe place during an earthquake.",
    tr: "Deprem sırasında sakin kal ve güvenli bir yer bulmaya çalış.",
    distractors: [
      "Deprem sırasında bağırarak dışarı koş.",
      "Deprem bitince güvenli yer ara.",
      "Sakin olursan güvenli yer bulamazsın."
    ]
  },
  {
    theme: "natural",
    en: "The storm destroyed many houses last night.",
    tr: "Fırtına dün gece birçok evi yok etti.",
    distractors: [
      "Birçok ev fırtınadan sonra yapıldı.",
      "Fırtına bu gece birçok evi yıkacak.",
      "Dün gece birçok ev fırtınayı durdurdu."
    ]
  },
  {
    theme: "natural",
    en: "We must protect ourselves from natural disasters.",
    tr: "Kendimizi doğal afetlerden korumalıyız.",
    distractors: [
      "Doğal afetlerden kendimizi koruyamayız.",
      "Doğal afetler bizi korur.",
      "Doğal afetlere karşı bir şey yapmamalıyız."
    ]
  },
  {
    theme: "natural",
    en: "Listen to the weather forecast before you go on a trip.",
    tr: "Bir geziye çıkmadan önce hava tahmini dinle.",
    distractors: [
      "Hava tahmini dinlemeden geziye çıkma kuralı yok.",
      "Geziden döndükten sonra hava tahmini dinle.",
      "Hava tahmini dinlemek geziyi iptal eder."
    ]
  },
  {
    theme: "natural",
    en: "If there is a flood, evacuate the area immediately.",
    tr: "Sel olursa bölgeyi hemen tahliye et.",
    distractors: [
      "Sel olduğunda bölgeye koş.",
      "Sel bittikten sonra evi tahliye et.",
      "Sel sırasında bölgede kal, çıkma."
    ]
  },
  {
    theme: "natural",
    en: "The volcano erupted and damaged the nearby villages.",
    tr: "Yanardağ patladı ve yakındaki köylere zarar verdi.",
    distractors: [
      "Köyler yanardağı korudu.",
      "Yanardağ patlamadan önce köyler boşaltıldı.",
      "Yakındaki köyler yanardağa zarar verdi."
    ]
  },

  /* ---------- KARIŞIK / SIK GEÇEN KALIPLAR ---------- */
  {
    theme: "friendship",
    en: "Thanks for the invitation, but I have other plans.",
    tr: "Davet için teşekkürler ama başka planlarım var.",
    distractors: [
      "Davet için teşekkür ederim, planım yok geleceğim.",
      "Plan yapacağım için davete teşekkür etmem.",
      "Başka planım olsa da daveti kabul ediyorum."
    ]
  },
  {
    theme: "friendship",
    en: "I'd love to come, but I can't. I have to study.",
    tr: "Gelmek isterdim ama gelemem. Çalışmak zorundayım.",
    distractors: [
      "Geleceğim çünkü çalışmak zorunda değilim.",
      "Çalışmak istemediğim için geleceğim.",
      "Gelmek istemiyorum, çalışmak zorundayım."
    ]
  },
  {
    theme: "teenlife",
    en: "More students prefer rafting than skiing.",
    tr: "Daha fazla öğrenci, kayak yapmaktansa rafting yapmayı tercih ediyor.",
    distractors: [
      "Daha fazla öğrenci, rafting yerine kayak yapmayı tercih ediyor.",
      "Hem rafting hem kayağı eşit sayıda öğrenci tercih ediyor.",
      "Az sayıda öğrenci rafting veya kayak yapıyor."
    ]
  },
  {
    theme: "tourism",
    en: "You have to ride your bike for more than 50 km to finish the whole tour.",
    tr: "Tüm turu bitirmek için bisikletinle 50 km'den fazla sürmek zorundasın.",
    distractors: [
      "Turu bitirmek için bisikletinle 50 km'den az sürmen yeterli.",
      "Tur 50 km'lik olduğu için bisiklet sürmek zorunda değilsin.",
      "Bisikletinle 50 km sürersen tur biter."
    ]
  },
  {
    theme: "internet",
    en: "If you really want to learn more, you should read this book.",
    tr: "Gerçekten daha fazlasını öğrenmek istiyorsan bu kitabı okumalısın.",
    distractors: [
      "Daha fazla öğrenmek istemiyorsan bu kitabı oku.",
      "Bu kitabı okumadan da çok şey öğrenirsin.",
      "Bu kitabı okuyanlar daha az şey öğrenir."
    ]
  },
  {
    theme: "phone",
    en: "I can't put you through to him now, he has gone out.",
    tr: "Şu anda sizi ona bağlayamam, dışarı çıktı.",
    distractors: [
      "Şu anda sizi ona bağlayabilirim, içeride.",
      "Dışarı çıktığı için sizi ona bağlayacağım.",
      "Onu çıkardığım için size bağlanamıyorum."
    ]
  },
  {
    theme: "adventures",
    en: "Half of the students would rather go for a walk in nature.",
    tr: "Öğrencilerin yarısı doğada yürüyüşe çıkmayı tercih eder.",
    distractors: [
      "Öğrencilerin yarısı doğada yürüyüşten nefret eder.",
      "Tüm öğrenciler doğada yürüyüş yapar.",
      "Hiçbir öğrenci doğada yürümek istemez."
    ]
  },
  {
    theme: "kitchen",
    en: "It takes about 20 minutes to bake the cake.",
    tr: "Keki pişirmek yaklaşık 20 dakika sürer.",
    distractors: [
      "Kek 20 dakika sonra pişer ama sürmez.",
      "Keki 20 dakikadan kısa sürede pişirmen lazım.",
      "Kek 2 saat boyunca fırında pişer."
    ]
  }
];
