// LGS İngilizce - Soru Kökleri (Question Stems) - Genişletilmiş ve dengeli sürüm
// Çeldirici tasarım kuralları:
//   1) Hiçbir Türkçe metinde BÜYÜK HARF emfazı yok - olumsuzluk doğal dil ile
//      ('değildir', 'olamaz', 'tamamlamaz', 'doldurmaz' vb.).
//   2) Çeldiriciler doğru cevapla aynı uzunluk/yapıda, tek bir anlam ekseninde
//      farklılaşır (olumlu/olumsuz, kişi, kim/ne, kesinlik/olasılık, sebep/sonuç,
//      modal yardımcı, fokus odağı).
//   3) Türkçe yazımda bağlam ipucu vermez; bütün şıklar mantıklı görünür.

window.STEMS = [

  /* ============ "According to" - Genel bilgi ============ */
  {
    en: "According to the information above, which of the following is correct?",
    tr: "Yukarıdaki bilgiye göre aşağıdakilerden hangisi doğrudur?",
    distractors: [
      "Yukarıdaki bilgiye göre aşağıdakilerden hangisi yanlıştır?",
      "Yukarıdaki bilgiye göre aşağıdakilerden hangisi belirsizdir?",
      "Yukarıdaki bilgiye göre konuya en uygun başlık hangisidir?"
    ],
    tip: "'correct' = doğru. Metinle birebir uyumlu seçeneği bul."
  },
  {
    en: "According to the information above, which of the following is not correct?",
    tr: "Yukarıdaki bilgiye göre aşağıdakilerden hangisi doğru değildir?",
    distractors: [
      "Yukarıdaki bilgiye göre aşağıdakilerden hangisi tamamen doğrudur?",
      "Yukarıdaki bilgiye göre aşağıdakilerden hangisi metinde geçer?",
      "Yukarıdaki bilgiye göre aşağıdakilerden hangisi en önemli noktadır?"
    ],
    tip: "Olumsuz bir soru: metinle çelişen tek seçeneği seç."
  },
  {
    en: "According to the text above, which of the following is true?",
    tr: "Yukarıdaki metne göre aşağıdakilerden hangisi doğrudur?",
    distractors: [
      "Yukarıdaki metne göre aşağıdakilerden hangisi yanlıştır?",
      "Yukarıdaki metne göre aşağıdakilerden hangisi konu dışıdır?",
      "Yukarıdaki metne göre aşağıdakilerden hangisi başlıktır?"
    ],
    tip: "Metinle aynı bilgiyi veren seçeneği bul."
  },
  {
    en: "According to the text above, which of the following is false?",
    tr: "Yukarıdaki metne göre aşağıdakilerden hangisi yanlıştır?",
    distractors: [
      "Yukarıdaki metne göre aşağıdakilerden hangisi doğrudur?",
      "Yukarıdaki metne göre aşağıdakilerden hangisi olası değildir?",
      "Yukarıdaki metne göre aşağıdakilerden hangisinden bahsedilir?"
    ],
    tip: "Metinle çelişen seçeneği bul."
  },
  {
    en: "Which of the following information is given in the text above?",
    tr: "Aşağıdaki bilgilerden hangisi yukarıdaki metinde verilmiştir?",
    distractors: [
      "Aşağıdaki bilgilerden hangisi yukarıdaki metinde verilmemiştir?",
      "Aşağıdaki bilgilerden hangisi yazarın görüşüdür?",
      "Aşağıdaki bilgilerden hangisi metnin sonucudur?"
    ],
    tip: "Metinde açıkça yazan bilgiyi seç."
  },
  {
    en: "Which of the following information is not given in the text above?",
    tr: "Aşağıdaki bilgilerden hangisi yukarıdaki metinde verilmemiştir?",
    distractors: [
      "Aşağıdaki bilgilerden hangisi yukarıdaki metinde geçmektedir?",
      "Aşağıdaki bilgilerden hangisi metnin ana fikridir?",
      "Aşağıdaki bilgilerden hangisi metnin son cümlesidir?"
    ],
    tip: "Metinde geçmeyen bilgiyi bul. 4 seçeneği tek tek doğrula."
  },
  {
    en: "Which of the following can we understand from the text above?",
    tr: "Yukarıdaki metinden aşağıdakilerden hangisini anlayabiliriz?",
    distractors: [
      "Yukarıdaki metinden aşağıdakilerden hangisini anlayamayız?",
      "Yukarıdaki metnin ana konusu aşağıdakilerden hangisidir?",
      "Yukarıdaki metnin yazarı aşağıdakilerden hangisidir?"
    ],
    tip: "Metinden mantıklı bir çıkarım yap (inference)."
  },
  {
    en: "Which of the following cannot be understood from the text above?",
    tr: "Yukarıdaki metinden aşağıdakilerden hangisi anlaşılamaz?",
    distractors: [
      "Yukarıdaki metinden aşağıdakilerden hangisi anlaşılır?",
      "Yukarıdaki metinde aşağıdakilerden hangisi vurgulanmıştır?",
      "Yukarıdaki metnin amacı aşağıdakilerden hangisidir?"
    ],
    tip: "Metinden çıkarılamayan ifadeyi seç."
  },

  /* ============ "Who" - Kişi soruları ============ */
  {
    en: "Who is talking about the location of the party?",
    tr: "Partinin yeri hakkında konuşan kişi kimdir?",
    distractors: [
      "Partinin saati hakkında konuşan kişi kimdir?",
      "Partiye gelmeyeceğini söyleyen kişi kimdir?",
      "Partiye davet eden kişi kimdir?"
    ],
    tip: "Konum/yer ile ilgili kelimeyi geçen kişiyi bul."
  },
  {
    en: "Who refuses the invitation with no excuse?",
    tr: "Daveti hiçbir mazeret göstermeden reddeden kişi kimdir?",
    distractors: [
      "Daveti bir mazeretle reddeden kişi kimdir?",
      "Daveti kabul eden kişi kimdir?",
      "Daveti tereddütle karşılayan kişi kimdir?"
    ],
    tip: "Sadece 'gelemem' diyen, sebep belirtmeyen kişiyi bul."
  },
  {
    en: "Who refuses the invitation because of a family plan?",
    tr: "Aile planı yüzünden daveti reddeden kişi kimdir?",
    distractors: [
      "Sınav yüzünden daveti reddeden kişi kimdir?",
      "Sağlık sorunundan daveti reddeden kişi kimdir?",
      "İş yüzünden daveti reddeden kişi kimdir?"
    ],
    tip: "Mazeretin türünü oku: aile mi, sınav mı, hastalık mı?"
  },
  {
    en: "Who has an excuse about his/her own health?",
    tr: "Kendi sağlığıyla ilgili bir mazereti olan kişi kimdir?",
    distractors: [
      "Bir akrabasının sağlığıyla ilgili mazereti olan kişi kimdir?",
      "Sağlık dışı bir mazereti olan kişi kimdir?",
      "Mazeret göstermeden gelmeyen kişi kimdir?"
    ],
    tip: "Mazeret kişinin kendi sağlığı olmalı; başkasının değil."
  },
  {
    en: "Who says something positive about his/her friend?",
    tr: "Arkadaşı hakkında olumlu bir şey söyleyen kişi kimdir?",
    distractors: [
      "Arkadaşı hakkında olumsuz bir şey söyleyen kişi kimdir?",
      "Arkadaşı hakkında bir şey söylemeyen kişi kimdir?",
      "Arkadaşıyla tartıştığını söyleyen kişi kimdir?"
    ],
    tip: "Olumlu sıfatlar arar: kind, helpful, trustworthy gibi."
  },
  {
    en: "Who says something negative about his/her friend?",
    tr: "Arkadaşı hakkında olumsuz bir şey söyleyen kişi kimdir?",
    distractors: [
      "Arkadaşı hakkında olumlu bir şey söyleyen kişi kimdir?",
      "Arkadaşıyla iyi vakit geçiren kişi kimdir?",
      "Arkadaşına güvenen kişi kimdir?"
    ],
    tip: "Olumsuz sıfat veya hareket: doesn't trust, selfish gibi."
  },
  {
    en: "Who did not invite the others to an event?",
    tr: "Diğerlerini bir etkinliğe davet etmeyen kişi kimdir?",
    distractors: [
      "Diğerlerini bir etkinliğe davet eden kişi kimdir?",
      "Etkinliğe gelmeyi reddeden kişi kimdir?",
      "Etkinliği iptal eden kişi kimdir?"
    ],
    tip: "Davet ifadesi içermeyen, sadece bilgi/teşekkür eden kişiyi bul."
  },
  {
    en: "Who definitely cannot attend the party?",
    tr: "Partiye kesinlikle katılamayacak kişi kimdir?",
    distractors: [
      "Partiye kesinlikle katılabilecek kişi kimdir?",
      "Partiye belki katılabilecek kişi kimdir?",
      "Partiyi düzenleyen kişi kimdir?"
    ],
    tip: "'Definitely cannot' = kesin engeli olan kişi."
  },
  {
    en: "Who can definitely attend the party?",
    tr: "Partiye kesinlikle katılabilecek kişi kimdir?",
    distractors: [
      "Partiye kesinlikle katılamayacak kişi kimdir?",
      "Partiye katılma kararını sonra verecek kişi kimdir?",
      "Partiye katılma şartı olan kişi kimdir?"
    ],
    tip: "Hiçbir koşul/şart belirtmeyen, kesin gelen kişiyi bul."
  },
  {
    en: "Who is definitely not available at the moment?",
    tr: "Şu anda kesinlikle müsait olmayan kişi kimdir?",
    distractors: [
      "Şu anda kesinlikle müsait olan kişi kimdir?",
      "Geri arama isteyen kişi kimdir?",
      "Mesaj bırakmak isteyen kişi kimdir?"
    ],
    tip: "Toplantıda, dışarıda, meşgul gibi ifadeler arar."
  },
  {
    en: "Who says something about safety?",
    tr: "Güvenlik hakkında bir şey söyleyen kişi kimdir?",
    distractors: [
      "Tehlike hakkında konuşmayan kişi kimdir?",
      "Aktiviteyi tekrar yapmak istemeyen kişi kimdir?",
      "Aktiviteden heyecan duyan kişi kimdir?"
    ],
    tip: "Helmet, dangerous, safe, careful gibi kelimeleri ara."
  },
  {
    en: "Which two people talk about their own friendship with Sally?",
    tr: "Sally ile kendi arkadaşlıkları hakkında konuşan iki kişi kimdir?",
    distractors: [
      "Sally'nin başarıları hakkında konuşan iki kişi kimdir?",
      "Sally'yi tanımayan iki kişi kimdir?",
      "Sally ile sınıf arkadaşı olan iki kişi kimdir?"
    ],
    tip: "'Own friendship' = kendi arkadaşlığı (we, us, together)."
  },
  {
    en: "Which two people finish their phone conversation?",
    tr: "Telefon konuşmasını bitiren iki kişi kimdir?",
    distractors: [
      "Telefon konuşmasını başlatan iki kişi kimdir?",
      "Telefon konuşmasında mesaj bırakan iki kişi kimdir?",
      "Telefon konuşmasında karşı tarafı arayan iki kişi kimdir?"
    ],
    tip: "'Bye', 'see you', 'take care' gibi veda ifadeleri arar."
  },
  {
    en: "Which two people state that they know how to make pizza?",
    tr: "Pizza yapmayı bildiklerini söyleyen iki kişi kimdir?",
    distractors: [
      "Pizza yapmayı bilmediğini söyleyen iki kişi kimdir?",
      "Pizza yemekten hoşlanmayan iki kişi kimdir?",
      "Pizza siparişi vermek isteyen iki kişi kimdir?"
    ],
    tip: "'I know', 'I can make' gibi ifadeleri olan iki kişi."
  },
  {
    en: "Who knows how to do it?",
    tr: "Bunu nasıl yapacağını bilen kişi kimdir?",
    distractors: [
      "Bunu nasıl yapacağını bilmeyen kişi kimdir?",
      "Bunu yapmak istemeyen kişi kimdir?",
      "Bunu daha önce yapmamış kişi kimdir?"
    ],
    tip: "Yöntemi/aşamaları açıklayan kişiyi bul."
  },

  /* ============ "Which" - Tercih ve eşleştirme ============ */
  {
    en: "Which course should the student choose?",
    tr: "Öğrenci hangi kursu seçmelidir?",
    distractors: [
      "Öğrenci hangi kursu seçmemelidir?",
      "Öğrenciye en pahalı kurs hangisidir?",
      "En kısa süreli kurs hangisidir?"
    ],
    tip: "Bütçe + saat + gün gibi tüm şartları karşılayan tek kursu bul."
  },
  {
    en: "Which tour should the tourist take?",
    tr: "Turist hangi turu almalıdır?",
    distractors: [
      "Turist hangi turu almamalıdır?",
      "En kısa süreli tur hangisidir?",
      "En çok ziyaretçi alan tur hangisidir?"
    ],
    tip: "Turistin tüm isteklerini karşılayan turu bul."
  },
  {
    en: "Which book is the person not going to buy?",
    tr: "Kişinin almayacağı kitap hangisidir?",
    distractors: [
      "Kişinin alacağı kitap hangisidir?",
      "Kişinin daha önce okuduğu kitap hangisidir?",
      "Kişinin tavsiye ettiği kitap hangisidir?"
    ],
    tip: "Kişinin ilgi alanına uymayan kitabı seç."
  },
  {
    en: "Which book would the person buy next?",
    tr: "Kişinin sıradaki alacağı kitap hangisi olur?",
    distractors: [
      "Kişinin almayacağı kitap hangisidir?",
      "Kişinin son okuduğu kitap hangisidir?",
      "Kişinin yazdığı kitap hangisidir?"
    ],
    tip: "Kişinin önceki kitaplarıyla benzer konudaki kitabı seç."
  },
  {
    en: "Which extreme sport is the person going to do?",
    tr: "Kişi hangi ekstrem sporu yapacak?",
    distractors: [
      "Kişi hangi ekstrem sporu yapmayacak?",
      "Kişi hangi ekstrem sporu hiç denememiş?",
      "Hangi ekstrem spor en güvenlidir?"
    ],
    tip: "Verilen ipuçlarını sporun ekipmanı/özelliğiyle eşleştir."
  },
  {
    en: "Which two activities are they going to try at the weekend?",
    tr: "Hafta sonu hangi iki aktiviteyi deneyecekler?",
    distractors: [
      "Hafta sonu hangi iki aktiviteyi yapmayacaklar?",
      "Hafta içi hangi iki aktiviteyi yapacaklar?",
      "Daha önce hangi iki aktiviteyi denemişler?"
    ],
    tip: "Her iki kişinin de zevkine uyan iki aktiviteyi bul."
  },
  {
    en: "Which transportation should the person prefer?",
    tr: "Kişi hangi ulaşım yolunu tercih etmelidir?",
    distractors: [
      "Kişi hangi ulaşım yolunu tercih etmemelidir?",
      "En pahalı ulaşım yolu hangisidir?",
      "En uzun süren ulaşım yolu hangisidir?"
    ],
    tip: "Bütçe + süre + konfor gibi şartları karşılayanı seç."
  },
  {
    en: "Which device should be recommended to the customer?",
    tr: "Müşteriye hangi cihaz tavsiye edilmelidir?",
    distractors: [
      "Müşteriye hangi cihaz tavsiye edilmemelidir?",
      "Hangi cihaz müşteriler tarafından en çok satılır?",
      "Hangi cihaz en yeni teknolojiye sahiptir?"
    ],
    tip: "Müşterinin ihtiyaçlarına en uygun cihazı seç."
  },
  {
    en: "Which recommendation does not match any of the customers' needs?",
    tr: "Hangi tavsiye müşterilerin hiçbir ihtiyacıyla eşleşmez?",
    distractors: [
      "Hangi tavsiye müşterinin tüm ihtiyaçlarını karşılar?",
      "Hangi cihaz en çok müşteriye uygundur?",
      "Müşteriler en çok hangi tavsiyeyi seçer?"
    ],
    tip: "Tüm müşterileri tek tek eşleştir; sahipsiz kalan tavsiye doğrudur."
  },
  {
    en: "Which two words should change places to be in the correct group?",
    tr: "Doğru grupta olabilmesi için hangi iki kelime yer değiştirmelidir?",
    distractors: [
      "Verilen iki gruba ait olmayan kelimeler aşağıdakilerden hangileridir?",
      "Aşağıdaki kelimelerden hangi ikisi her iki gruba da uyabilir?",
      "Yukarıdaki gruplarda yer alan başlıklar hangi iki kelimedir?"
    ],
    tip: "Grup başlığını oku; uyumsuz iki kelimeyi tespit et."
  },

  /* ============ Cümle/konuşma tamamlama ============ */
  {
    en: "Which of the following completes the sentence above?",
    tr: "Aşağıdakilerden hangisi yukarıdaki cümleyi tamamlar?",
    distractors: [
      "Aşağıdakilerden hangisi yukarıdaki cümleyi tamamlamaz?",
      "Aşağıdakilerden hangisi cümlenin başlangıcıdır?",
      "Aşağıdakilerden hangisi cümleyle çelişir?"
    ],
    tip: "Cümlenin akışına uygun, anlamı tamamlayan ifadeyi bul."
  },
  {
    en: "Which of the following does not complete the sentence above?",
    tr: "Aşağıdakilerden hangisi yukarıdaki cümleyi tamamlamaz?",
    distractors: [
      "Aşağıdakilerden hangisi cümleyi en iyi tamamlar?",
      "Aşağıdakilerden hangisi cümleyi tamamlayabilir?",
      "Aşağıdakilerden hangisi cümleyle aynı anlama gelir?"
    ],
    tip: "Anlam veya bağlam olarak akışı bozan tek seçenek."
  },
  {
    en: "Which of the following completes the conversation above?",
    tr: "Aşağıdakilerden hangisi yukarıdaki konuşmayı tamamlar?",
    distractors: [
      "Aşağıdakilerden hangisi yukarıdaki konuşmayı tamamlamaz?",
      "Aşağıdakilerden hangisi konuşmanın başlangıcıdır?",
      "Aşağıdakilerden hangisi konuşmanın özetidir?"
    ],
    tip: "Boşluğun bir önceki ve sonraki cümleyle uyuşmasına bak."
  },
  {
    en: "Which of the following does not complete the conversation above?",
    tr: "Aşağıdakilerden hangisi yukarıdaki konuşmayı tamamlamaz?",
    distractors: [
      "Aşağıdakilerden hangisi konuşmaya en uygundur?",
      "Aşağıdakilerden hangisi konuşmaya başlangıç olur?",
      "Aşağıdakilerden hangisi konuşmayı bitirir?"
    ],
    tip: "Konuşmanın akışıyla uyuşmayan tek seçeneği seç."
  },
  {
    en: "Which of the following fills in the blank above?",
    tr: "Aşağıdakilerden hangisi yukarıdaki boşluğu doldurur?",
    distractors: [
      "Aşağıdakilerden hangisi yukarıdaki boşluğu doldurmaz?",
      "Aşağıdakilerden hangisi boşluğun anlamını değiştirir?",
      "Aşağıdakilerden hangisi cümleyi soruya çevirir?"
    ],
    tip: "Önceki ve sonraki cümlelerle uyumlu seçeneği bul."
  },
  {
    en: "Which of the following does not fill in any of the blanks?",
    tr: "Aşağıdakilerden hangisi boşlukların hiçbirini doldurmaz?",
    distractors: [
      "Aşağıdakilerden hangisi boşlukların hepsini doldurabilir?",
      "Hangi seçenek ilk boşluğu doldurur?",
      "Hangi seçenek son boşluğu doldurur?"
    ],
    tip: "Her boşluğa diğer üç seçenek uyar; bir tek bu uyumsuzdur."
  },
  {
    en: "Which of the following questions does not complete the phone conversation?",
    tr: "Aşağıdaki sorulardan hangisi telefon konuşmasını tamamlamaz?",
    distractors: [
      "Aşağıdaki sorulardan hangisi telefon konuşmasını tamamlar?",
      "Aşağıdaki sorulardan hangisi konuşmaya başlangıçtır?",
      "Aşağıdaki sorulardan hangisi en sık sorulan sorudur?"
    ],
    tip: "Boşluklara üç soru oturur; tek biri akışa uymaz."
  },
  {
    en: "Which of the following is the correct order of the sentences?",
    tr: "Aşağıdakilerden hangisi cümlelerin doğru sıralamasıdır?",
    distractors: [
      "Aşağıdakilerden hangisi cümlelerin yanlış sıralamasıdır?",
      "Aşağıdakilerden hangisi son cümledir?",
      "Aşağıdakilerden hangisi en uzun cümledir?"
    ],
    tip: "Selamlaşma → istek → cevap → kapanış akışını takip et."
  },
  {
    en: "Which of the following is the correct order of the missing words?",
    tr: "Aşağıdakilerden hangisi eksik kelimelerin doğru sıralamasıdır?",
    distractors: [
      "Aşağıdakilerden hangisi eksik kelimelerin yanlış sıralamasıdır?",
      "Aşağıdakilerden hangisi tarifte hiç geçmeyen kelimelerdir?",
      "Aşağıdakilerden hangisi tarifin malzemeleridir?"
    ],
    tip: "Tarifin akışına göre boşluk fiillerini sırasıyla yerleştir."
  },

  /* ============ "Cannot be" - Olamaz/uymaz ============ */
  {
    en: "Which of the following cannot be the teacher's answer?",
    tr: "Aşağıdakilerden hangisi öğretmenin cevabı olamaz?",
    distractors: [
      "Aşağıdakilerden hangisi öğretmenin cevabı olabilir?",
      "Aşağıdakilerden hangisi öğretmenin sorusu olabilir?",
      "Aşağıdakilerden hangisi en uygun cevaptır?"
    ],
    tip: "Sorularla bağdaşmayan, alakasız kalan cevabı bul."
  },
  {
    en: "Which of the following cannot be the teacher's question?",
    tr: "Aşağıdakilerden hangisi öğretmenin sorusu olamaz?",
    distractors: [
      "Aşağıdakilerden hangisi öğretmenin sorusu olabilir?",
      "Aşağıdakilerden hangisi öğrenci yanıtıdır?",
      "Aşağıdakilerden hangisi en uygun cevaptır?"
    ],
    tip: "Verilen tüm cevaplara uymayan tek soruyu seç."
  },
  {
    en: "Which of the following cannot be one of the answers?",
    tr: "Aşağıdakilerden hangisi cevaplardan biri olamaz?",
    distractors: [
      "Aşağıdakilerden hangisi cevaplardan biridir?",
      "Aşağıdakilerden hangisi en doğru cevaptır?",
      "Aşağıdakilerden hangisi sorudur?"
    ],
    tip: "Soruyla mantıklı bağ kuramayan cevabı seç."
  },
  {
    en: "Which of the following cannot be the answer to any of the questions?",
    tr: "Aşağıdakilerden hangisi soruların hiçbirinin cevabı olamaz?",
    distractors: [
      "Aşağıdakilerden hangisi soruların hepsinin cevabıdır?",
      "Aşağıdakilerden hangisi en kısa cevaptır?",
      "Aşağıdakilerden hangisi en kapsamlı cevaptır?"
    ],
    tip: "Sorular sırayla okunup cevaplar elenir; biri sahipsiz kalır."
  },
  {
    en: "Which of the following can be the person's answer?",
    tr: "Aşağıdakilerden hangisi kişinin cevabı olabilir?",
    distractors: [
      "Aşağıdakilerden hangisi kişinin cevabı olamaz?",
      "Aşağıdakilerden hangisi kişinin sorusudur?",
      "Aşağıdakilerden hangisi konu dışıdır?"
    ],
    tip: "Bağlama uygun, mantıklı tek cevabı seç."
  },
  {
    en: "What can you not say to the person on the phone?",
    tr: "Telefondaki kişiye aşağıdakilerden hangisini söyleyemezsin?",
    distractors: [
      "Telefondaki kişiye en kibar nasıl hitap edersin?",
      "Telefondaki kişiye aşağıdakilerden hangisini söylemen gerekir?",
      "Telefondaki kişiyle konuşmaya nasıl başlarsın?"
    ],
    tip: "Rolüne (sekreter/müşteri) uymayan ifadeyi bul."
  },

  /* ============ Soru-cevap eşlemesi ============ */
  {
    en: "Which of the following is the teacher's question?",
    tr: "Aşağıdakilerden hangisi öğretmenin sorusudur?",
    distractors: [
      "Aşağıdakilerden hangisi öğretmenin cevabıdır?",
      "Aşağıdakilerden hangisi öğrencinin sorusudur?",
      "Aşağıdakilerden hangisi en zor sorudur?"
    ],
    tip: "Verilen cevapların ortak konusunu sorgulayan soruyu seç."
  },
  {
    en: "What is the teacher's question?",
    tr: "Öğretmenin sorusu nedir?",
    distractors: [
      "Öğretmenin cevabı nedir?",
      "Öğrencinin cevabı nedir?",
      "Konunun ana fikri nedir?"
    ],
    tip: "Tüm öğrenci yanıtlarını kapsayan soruyu bul."
  },
  {
    en: "Which question has the answer in all four texts above?",
    tr: "Aşağıdaki sorulardan hangisinin cevabı dört metinde de vardır?",
    distractors: [
      "Aşağıdaki sorulardan hangisinin cevabı sadece bir metinde vardır?",
      "Aşağıdaki sorulardan hangisinin cevabı hiçbir metinde yoktur?",
      "Aşağıdaki sorulardan hangisi metinlerin başlığıdır?"
    ],
    tip: "Dört metnin de paylaştığı ortak bilgiyi bul (yer, isim vb.)."
  },
  {
    en: "Which question does not have an answer in the e-mail above?",
    tr: "Aşağıdaki sorulardan hangisinin cevabı e-postada yoktur?",
    distractors: [
      "Aşağıdaki sorulardan hangisinin cevabı e-postada açıkça verilmiştir?",
      "Aşağıdaki sorulardan hangisi en sık sorulur?",
      "Aşağıdaki sorulardan hangisi e-postanın başlığıdır?"
    ],
    tip: "Soruları metne sor; cevabı bulunmayanı seç."
  },
  {
    en: "Which question has the person answered in his/her blog?",
    tr: "Kişi blogunda hangi soruyu cevaplamıştır?",
    distractors: [
      "Kişi blogunda hangi soruyu cevaplamamıştır?",
      "Kişi blogunda hangi soruyu sormaktadır?",
      "Kişi blogunda hangi konuyu eleştirmiştir?"
    ],
    tip: "Blogun konusunu doğrudan ele alan soruyu seç."
  },

  /* ============ Görüş ve düşünce ============ */
  {
    en: "Who does not think the book is useful?",
    tr: "Kitabın faydalı olduğunu düşünmeyen kişi kimdir?",
    distractors: [
      "Kitabı faydalı bulan kişi kimdir?",
      "Kitabı tavsiye eden kişi kimdir?",
      "Kitabı en çok beğenen kişi kimdir?"
    ],
    tip: "Olumsuz yorum yapan kişiyi bul: 'go and buy another book' gibi."
  },
  {
    en: "Who thinks the activity is useful?",
    tr: "Aktivitenin faydalı olduğunu düşünen kişi kimdir?",
    distractors: [
      "Aktivitenin faydalı olmadığını düşünen kişi kimdir?",
      "Aktiviteden bahsetmeyen kişi kimdir?",
      "Aktivitenin tehlikeli olduğunu düşünen kişi kimdir?"
    ],
    tip: "Olumlu sıfatları arar: useful, helpful, important."
  },
  {
    en: "What does the person think about social media?",
    tr: "Kişi sosyal medya hakkında ne düşünüyor?",
    distractors: [
      "Kişi sosyal medyayı ne kadar kullanıyor?",
      "Kişinin sosyal medya hesabı var mı?",
      "Kişi hangi sosyal medya uygulamasını seviyor?"
    ],
    tip: "Görüş kelimelerine bak: 'I think', 'in my opinion'."
  },

  /* ============ Yazarın amacı / metin tipi ============ */
  {
    en: "Why did the person write this email?",
    tr: "Kişi bu e-postayı neden yazmıştır?",
    distractors: [
      "Kişi bu e-postayı kime yazmıştır?",
      "Kişi bu e-postayı ne zaman yazmıştır?",
      "Kişi bu e-postayı nereden yazmıştır?"
    ],
    tip: "Yazma amacı: davet, red, teşekkür, bilgilendirme, özür."
  },
  {
    en: "What is the writer's main purpose?",
    tr: "Yazarın temel amacı nedir?",
    distractors: [
      "Yazarın temel mesleği nedir?",
      "Yazarın yaşı kaçtır?",
      "Yazar nereye seyahat etmiştir?"
    ],
    tip: "Bilgi vermek, ikna etmek, eğlendirmek vb. seçenekleri ele al."
  },
  {
    en: "What is the topic of the text above?",
    tr: "Yukarıdaki metnin konusu nedir?",
    distractors: [
      "Yukarıdaki metnin yazarı kimdir?",
      "Yukarıdaki metnin tarihi nedir?",
      "Yukarıdaki metnin uzunluğu nedir?"
    ],
    tip: "Tüm cümlelerin etrafında döndüğü ana konu."
  },
  {
    en: "What is the main idea of the text above?",
    tr: "Yukarıdaki metnin ana fikri nedir?",
    distractors: [
      "Yukarıdaki metnin son cümlesi nedir?",
      "Yukarıdaki metnin başlığı nedir?",
      "Yukarıdaki metinde geçmeyen bilgi nedir?"
    ],
    tip: "Yazarın iletmek istediği genel mesajı bul."
  },
  {
    en: "Which of the following is the best title for the text?",
    tr: "Aşağıdakilerden hangisi metin için en uygun başlıktır?",
    distractors: [
      "Aşağıdakilerden hangisi metnin son cümlesidir?",
      "Aşağıdakilerden hangisi metnin yazarıdır?",
      "Aşağıdakilerden hangisi metinde geçmemektedir?"
    ],
    tip: "Tüm metni özetleyen, kısa ve kapsayıcı başlığı seç."
  },
  {
    en: "Which heading does not match with any of the texts above?",
    tr: "Aşağıdaki başlıklardan hangisi metinlerin hiçbiriyle eşleşmez?",
    distractors: [
      "Aşağıdaki başlıklardan hangisi tüm metinlere uyar?",
      "Aşağıdaki başlıklardan hangisi ilk metnin başlığıdır?",
      "Aşağıdaki başlıklardan hangisi en kısa olandır?"
    ],
    tip: "Her metni başlıklarla eşleştir; sahipsiz başlık doğrudur."
  },
  {
    en: "Which heading is the best for paragraph two?",
    tr: "İkinci paragraf için en uygun başlık hangisidir?",
    distractors: [
      "İkinci paragrafta geçmeyen kelime hangisidir?",
      "Birinci paragraf için en uygun başlık hangisidir?",
      "Tüm metnin başlığı hangisidir?"
    ],
    tip: "Paragrafın ana fikrini özetleyen başlığı seç."
  },

  /* ============ Sebep-sonuç / niyet ============ */
  {
    en: "Why does the person prefer this option?",
    tr: "Kişi neden bu seçeneği tercih ediyor?",
    distractors: [
      "Kişi neden bu seçeneği reddediyor?",
      "Kişi başka hangi seçenekleri biliyor?",
      "Kişi hangi seçeneği tavsiye ediyor?"
    ],
    tip: "'because' veya 'so' bağlaçlarının ardındaki nedeni ara."
  },
  {
    en: "What is the reason for the person's decision?",
    tr: "Kişinin kararının sebebi nedir?",
    distractors: [
      "Kişinin kararının sonucu nedir?",
      "Kişinin alternatif kararı nedir?",
      "Kişinin kararı kim tarafından alınmıştır?"
    ],
    tip: "Sebep cümlesi (because, since, as) genelde kararın yanındadır."
  },

  /* ============ Tablo / grafik / harita ============ */
  {
    en: "According to the table above, which of the following is true?",
    tr: "Yukarıdaki tabloya göre aşağıdakilerden hangisi doğrudur?",
    distractors: [
      "Yukarıdaki tabloya göre aşağıdakilerden hangisi yanlıştır?",
      "Yukarıdaki tablonun başlığı nedir?",
      "Yukarıdaki tabloda en yüksek değer hangisidir?"
    ],
    tip: "Tablodaki sayıları seçeneklerle birebir karşılaştır."
  },
  {
    en: "According to the table above, which of the following is not possible?",
    tr: "Yukarıdaki tabloya göre aşağıdakilerden hangisi mümkün değildir?",
    distractors: [
      "Yukarıdaki tabloya göre aşağıdakilerden hangisi mümkündür?",
      "Yukarıdaki tabloya göre en eski olan hangisidir?",
      "Yukarıdaki tabloya göre en yeni olan hangisidir?"
    ],
    tip: "Kişinin yaşadığı tarih aralığına dikkat: ölmüş kişi yeni bir aletle bağlantılı olamaz."
  },
  {
    en: "According to the map above, which of the following is false?",
    tr: "Yukarıdaki haritaya göre aşağıdakilerden hangisi yanlıştır?",
    distractors: [
      "Yukarıdaki haritaya göre aşağıdakilerden hangisi doğrudur?",
      "Yukarıdaki haritaya göre tur kaç gün sürer?",
      "Yukarıdaki haritaya göre hangi şehir en yakındır?"
    ],
    tip: "Mesafeleri/günleri toplayıp seçenekle karşılaştır."
  },
  {
    en: "According to the chart above, which group is the largest?",
    tr: "Yukarıdaki grafiğe göre en büyük grup hangisidir?",
    distractors: [
      "Yukarıdaki grafiğe göre en küçük grup hangisidir?",
      "Yukarıdaki grafiğe göre tüm grupların toplamı kaçtır?",
      "Yukarıdaki grafiğe göre yarısından çoğu hangi grubu seçmiştir?"
    ],
    tip: "Sayıları küçükten büyüğe sırala; en yükseği seç."
  },
  {
    en: "According to the chart above, which is not correct?",
    tr: "Yukarıdaki grafiğe göre aşağıdakilerden hangisi doğru değildir?",
    distractors: [
      "Yukarıdaki grafiğe göre aşağıdakilerden hangisi doğrudur?",
      "Yukarıdaki grafiğe göre en az tercih edilen seçenek hangisidir?",
      "Yukarıdaki grafiğe göre en çok tercih edilen seçenek hangisidir?"
    ],
    tip: "Çoğunluk/yarı/azınlık ifadelerini sayılarla doğrula."
  },

  /* ============ Sorumluluk / görev ============ */
  {
    en: "Which of the following is the person's responsibility?",
    tr: "Aşağıdakilerden hangisi kişinin sorumluluğudur?",
    distractors: [
      "Aşağıdakilerden hangisi kişinin sorumluluğu değildir?",
      "Kişinin en sevdiği iş hangisidir?",
      "Aşağıdakilerden hangisi kişinin sevmediği iştir?"
    ],
    tip: "'I have to' / 'I must' / 'my chore' gibi kalıpları ara."
  },
  {
    en: "Which chore is the person going to do?",
    tr: "Kişi hangi ev işini yapacak?",
    distractors: [
      "Kişi hangi ev işini yapmayacak?",
      "Kişi hangi ev işini sevmiyor?",
      "Aile hangi ev işini paylaşıyor?"
    ],
    tip: "Bağlama göre belirlenen, gelecek zamanda yapılacak iş."
  },

  /* ============ Konuşma / iletişim ============ */
  {
    en: "What should you say to learn more about the customer's problem?",
    tr: "Müşterinin problemi hakkında daha fazla bilgi almak için ne söylemelisin?",
    distractors: [
      "Müşterinin problemini çözdüğünü göstermek için ne söylemelisin?",
      "Müşteriden özür dilemek için aşağıdakilerden hangisini söylemelisin?",
      "Müşteriyi telefondan uğurlamak için aşağıdakilerden hangi cümle uygundur?"
    ],
    tip: "Bilgi istemek için açık uçlu soru sor."
  },
  {
    en: "Which of the following is the most appropriate response?",
    tr: "Aşağıdakilerden hangisi en uygun cevaptır?",
    distractors: [
      "Aşağıdakilerden hangisi en az uygun cevaptır?",
      "Aşağıdakilerden hangisi yeni bir sorudur?",
      "Aşağıdakilerden hangisi konu dışıdır?"
    ],
    tip: "Bağlama, ses tonuna ve konuşma kuralına en uygun yanıt."
  },
  {
    en: "Which sentence is suitable to start the conversation?",
    tr: "Konuşmayı başlatmak için hangi cümle uygundur?",
    distractors: [
      "Konuşmayı bitirmek için hangi cümle uygundur?",
      "Konuşmayı kısa kesmek için hangi cümle uygundur?",
      "Konuşmadaki en uzun cümle hangisidir?"
    ],
    tip: "Selamlaşma, kendini tanıtma veya açılış sorusu."
  },
  {
    en: "Which sentence is suitable to end the conversation?",
    tr: "Konuşmayı bitirmek için hangi cümle uygundur?",
    distractors: [
      "Konuşmayı başlatmak için hangi cümle uygundur?",
      "Konuşmaya yeni soru eklemek için hangi cümle uygundur?",
      "Konuşmayı uzatmak için hangi cümle uygundur?"
    ],
    tip: "Veda ifadeleri: bye, see you, take care, talk to you soon."
  },

  /* ============ Tarif / sıralama ============ */
  {
    en: "Which step is missing in the recipe above?",
    tr: "Yukarıdaki tarifte hangi adım eksiktir?",
    distractors: [
      "Yukarıdaki tarifte hangi adım yanlıştır?",
      "Yukarıdaki tarifte hangi malzeme yoktur?",
      "Yukarıdaki tarifin son adımı nedir?"
    ],
    tip: "Adımları sırayla oku, bağlantısı kopan yere bak."
  },
  {
    en: "Which of the following is not a step in the recipe?",
    tr: "Aşağıdakilerden hangisi tarifteki bir adım değildir?",
    distractors: [
      "Aşağıdakilerden hangisi tarifteki ilk adımdır?",
      "Aşağıdakilerden hangisi tarifteki son adımdır?",
      "Aşağıdakilerden hangisi tarifteki ana malzemedir?"
    ],
    tip: "Tarifte hiç geçmeyen eylemi seç."
  },

  /* ============ Şartlar / koşul ============ */
  {
    en: "Under which condition would the person attend the event?",
    tr: "Hangi koşulda kişi etkinliğe katılır?",
    distractors: [
      "Kişi etkinliğe kesinlikle katılmaz mı?",
      "Etkinliğin yeri kişiye uygun mudur?",
      "Etkinliği kim düzenliyor?"
    ],
    tip: "'If', 'only if', 'unless' kalıplarını izle."
  },
  {
    en: "Who would attend the event only if the weather is good?",
    tr: "Etkinliğe sadece hava güzel olursa katılacak kişi kimdir?",
    distractors: [
      "Etkinliğe her durumda katılacak kişi kimdir?",
      "Etkinliğe hiç katılmayacak kişi kimdir?",
      "Etkinliğin saatini soran kişi kimdir?"
    ],
    tip: "'If the weather is good/warm/sunny' kalıbını ara."
  },

  /* ============ Sayı / karşılaştırma ============ */
  {
    en: "How many people share the same opinion?",
    tr: "Aynı görüşü paylaşan kaç kişi vardır?",
    distractors: [
      "Farklı görüşte olan kaç kişi vardır?",
      "Toplam kaç kişi konuşuyor?",
      "Kaç kişi soruyu cevaplamamıştır?"
    ],
    tip: "Aynı fikri öne süren kişileri sayarak ilerle."
  },
  {
    en: "Which of the following is the most popular activity?",
    tr: "Aşağıdakilerden hangisi en popüler aktivitedir?",
    distractors: [
      "Aşağıdakilerden hangisi en az tercih edilen aktivitedir?",
      "Aşağıdakilerden hangisi en yeni aktivitedir?",
      "Aşağıdakilerden hangisi en pahalı aktivitedir?"
    ],
    tip: "Sayısı en yüksek aktiviteyi seç."
  },
  {
    en: "Which of the following is the least popular activity?",
    tr: "Aşağıdakilerden hangisi en az tercih edilen aktivitedir?",
    distractors: [
      "Aşağıdakilerden hangisi en popüler aktivitedir?",
      "Aşağıdakilerden hangisi en yeni aktivitedir?",
      "Aşağıdakilerden hangisi en güvenli aktivitedir?"
    ],
    tip: "Sayısı en düşük aktiviteyi seç."
  },

  /* ============ Çıkarım / yorum ============ */
  {
    en: "What can we say about the person?",
    tr: "Kişi hakkında ne söyleyebiliriz?",
    distractors: [
      "Kişi hakkında ne söyleyemeyiz?",
      "Kişinin yaşı kaçtır?",
      "Kişi hangi şehirde yaşıyor?"
    ],
    tip: "Metinden çıkarılabilecek genel bir özelliği seç."
  },
  {
    en: "What can we infer from the conversation?",
    tr: "Konuşmadan ne çıkarabiliriz?",
    distractors: [
      "Konuşmadan ne çıkarılamaz?",
      "Konuşma kaç kişi arasında geçiyor?",
      "Konuşmanın yeri neresidir?"
    ],
    tip: "Doğrudan değil ima edilen bilgiyi yakalamaya çalış."
  },

  /* ============ Anlam / kelime ============ */
  {
    en: "What does the underlined word mean in the text?",
    tr: "Altı çizili kelime metinde ne anlama gelir?",
    distractors: [
      "Altı çizili kelime metnin neresinde geçer?",
      "Altı çizili kelime hangi dilden gelir?",
      "Altı çizili kelime kaç hecelidir?"
    ],
    tip: "Bağlamdan anlamı çıkar; yakın anlamlı seçeneği bul."
  },
  {
    en: "Which word is closest in meaning to the underlined word?",
    tr: "Aşağıdakilerden hangisi altı çizili kelimeye en yakın anlamdadır?",
    distractors: [
      "Aşağıdakilerden hangisi altı çizili kelimeye zıt anlamdadır?",
      "Aşağıdakilerden hangisi altı çizili kelimeyle aynı kökten gelir?",
      "Aşağıdakilerden hangisi altı çizili kelimenin çoğuludur?"
    ],
    tip: "Eş anlamlı (synonym) seçeneği bul."
  },
  {
    en: "Which word is opposite in meaning to the underlined word?",
    tr: "Aşağıdakilerden hangisi altı çizili kelimeye zıt anlamdadır?",
    distractors: [
      "Aşağıdakilerden hangisi altı çizili kelimeye yakın anlamdadır?",
      "Aşağıdakilerden hangisi altı çizili kelimeyle ilgisizdir?",
      "Aşağıdakilerden hangisi aynı sıfat türündedir?"
    ],
    tip: "Zıt anlamlı (antonym) seçeneği bul."
  },

  /* ============ Davet / öneri ============ */
  {
    en: "Which of the following is suitable to invite a friend?",
    tr: "Bir arkadaşı davet etmek için aşağıdakilerden hangisi uygundur?",
    distractors: [
      "Bir daveti reddetmek için aşağıdakilerden hangisi uygundur?",
      "Bir teşekkür ifadesi için aşağıdakilerden hangisi uygundur?",
      "Bir özür için aşağıdakilerden hangisi uygundur?"
    ],
    tip: "'Would you like to', 'why don't we', 'shall we' kalıpları."
  },
  {
    en: "Which of the following is suitable to refuse politely?",
    tr: "Kibarca reddetmek için aşağıdakilerden hangisi uygundur?",
    distractors: [
      "Kibarca davet etmek için aşağıdakilerden hangisi uygundur?",
      "Kibarca teşekkür etmek için aşağıdakilerden hangisi uygundur?",
      "Kabul etmek için aşağıdakilerden hangisi uygundur?"
    ],
    tip: "'I'd love to but', 'unfortunately', 'I'm afraid I can't' kalıpları."
  },
  {
    en: "Which sentence shows that the person accepts the invitation?",
    tr: "Hangi cümle kişinin daveti kabul ettiğini gösterir?",
    distractors: [
      "Hangi cümle kişinin daveti reddettiğini gösterir?",
      "Hangi cümle daveti unuttuğunu gösterir?",
      "Hangi cümle daveti ertelediğini gösterir?"
    ],
    tip: "'I'll be there', 'sounds great', 'I'd love to' gibi olumlu yanıt."
  },

  /* ============ Etkinlik / plan ============ */
  {
    en: "Which of the following information is included in the invitation?",
    tr: "Aşağıdaki bilgilerden hangisi davetiyede yer almaktadır?",
    distractors: [
      "Aşağıdaki bilgilerden hangisi davetiyede yer almamaktadır?",
      "Aşağıdaki bilgilerden hangisi davetiyenin yazarını belirtir?",
      "Aşağıdaki bilgilerden hangisi davetiyenin tarihini gösterir?"
    ],
    tip: "Yer, saat, tarih, etkinlik türü gibi bilgileri kontrol et."
  },
  {
    en: "Which invitation card includes all the required information?",
    tr: "Hangi davetiye kartı gerekli tüm bilgileri içerir?",
    distractors: [
      "Hangi davetiye kartı en az bilgi içerir?",
      "Hangi davetiye kartı en kibar dildedir?",
      "Hangi davetiye kartı en uzundur?"
    ],
    tip: "Yer + zaman + etkinlik türünün hepsi olmalı."
  },

  /* ============ Olay sırası ============ */
  {
    en: "What did the person do first?",
    tr: "Kişi ilk önce ne yaptı?",
    distractors: [
      "Kişi en son ne yaptı?",
      "Kişi en uzun süre ne yaptı?",
      "Kişi neyi unuttu?"
    ],
    tip: "Olay zincirinin ilk halkasını bul: 'first', 'at first', 'firstly'."
  },
  {
    en: "What did the person do last?",
    tr: "Kişi en son ne yaptı?",
    distractors: [
      "Kişi ilk önce ne yaptı?",
      "Kişi en sık ne yapardı?",
      "Kişinin en sevdiği aktivite neydi?"
    ],
    tip: "Olay zincirinin son halkasını bul: 'finally', 'lastly', 'in the end'."
  },

  /* ============ Sağlık / güvenlik / uyarı ============ */
  {
    en: "Which warning is given in the text above?",
    tr: "Yukarıdaki metinde hangi uyarı verilmektedir?",
    distractors: [
      "Yukarıdaki metinde hangi övgü yapılmaktadır?",
      "Yukarıdaki metinde hangi sonuç vurgulanmıştır?",
      "Yukarıdaki metinde hangi tarihten bahsedilmiştir?"
    ],
    tip: "'Don't', 'be careful', 'avoid' kalıplarına dikkat et."
  },
  {
    en: "What should you do during an emergency?",
    tr: "Acil durum sırasında ne yapmalısın?",
    distractors: [
      "Acil durumdan sonra ne yapmalısın?",
      "Acil durum öncesinde ne yapmalısın?",
      "Acil durumu kim haber verir?"
    ],
    tip: "Anlık uyarılar: stay calm, find shelter, call for help."
  },

  /* ============ İcat / başarı ============ */
  {
    en: "Which of the following was not possible at that time?",
    tr: "Aşağıdakilerden hangisi o zaman mümkün değildi?",
    distractors: [
      "Aşağıdakilerden hangisi o zaman mümkündü?",
      "Aşağıdakilerden hangisi o zaman çok yaygındı?",
      "Aşağıdakilerden hangisi o zaman icat edildi?"
    ],
    tip: "Tablodaki tarihlere bak: cihaz icat edilmediyse kullanılamaz."
  },
  {
    en: "Who is the inventor of the device above?",
    tr: "Yukarıdaki cihazın mucidi kimdir?",
    distractors: [
      "Yukarıdaki cihazı en çok kim kullanır?",
      "Yukarıdaki cihaz hangi yıl bulundu?",
      "Yukarıdaki cihazın günlük kullanımı nedir?"
    ],
    tip: "Tablodaki 'invented by' sütununu kontrol et."
  },

  /* ============ Tavsiye / öneri ============ */
  {
    en: "What does the writer recommend to the readers?",
    tr: "Yazar okuyuculara ne tavsiye eder?",
    distractors: [
      "Yazar okuyuculara ne sormaktadır?",
      "Yazar okuyuculardan ne talep etmektedir?",
      "Yazar okuyucuları nasıl uyarmaktadır?"
    ],
    tip: "'You should', 'I recommend', 'don't miss' kalıplarını ara."
  },
  {
    en: "Which advice is given in the text?",
    tr: "Metinde hangi tavsiye verilmektedir?",
    distractors: [
      "Metinde hangi şikayet dile getirilmiştir?",
      "Metinde hangi soru sorulmuştur?",
      "Metinde hangi olay anlatılmıştır?"
    ],
    tip: "Tavsiye kalıpları: 'should', 'must', 'try to', 'avoid'."
  }
];
