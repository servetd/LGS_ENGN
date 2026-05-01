// LGS İngilizce - Soru Kökleri (Question Stems)
// LGS sorularından çıkarılmış kalıplar + Türkçe karşılıkları + kısa açıklama.
// Şıklarda doğru Türkçe + 3 yakın anlamlı çeldirici verilir.

window.STEMS = [
  {
    en: "According to the information above, which of the following would Mark say?",
    tr: "Yukarıdaki bilgiye göre, Mark aşağıdakilerden hangisini söylerdi?",
    distractors: [
      "Yukarıdaki bilgiye göre, Mark aşağıdakilerden hangisini söylemezdi?",
      "Yukarıdaki bilgilere göre, Mark hangi soruyu sorardı?",
      "Aşağıdakilerden hangisi Mark'ın cevabı olamaz?"
    ],
    tip: "'would say' = söylerdi. Olumlu/olumsuz farkına dikkat!"
  },
  {
    en: "Which of the following completes the sentence above?",
    tr: "Aşağıdakilerden hangisi yukarıdaki cümleyi tamamlar?",
    distractors: [
      "Aşağıdakilerden hangisi cümleyi tamamlamaz?",
      "Aşağıdakilerden hangisi cümleye benzer?",
      "Aşağıdakilerden hangisi cümleye karşıdır?"
    ],
    tip: "'completes' = tamamlar. Boşluğa uygun seçeneği bulacaksın."
  },
  {
    en: "Which of the following does NOT fill in the blank above?",
    tr: "Aşağıdakilerden hangisi yukarıdaki boşluğu doldurmaz?",
    distractors: [
      "Aşağıdakilerden hangisi boşluğu doldurur?",
      "Aşağıdakilerden hangisi boşluğa en uygun olandır?",
      "Aşağıdakilerden hangisi boşluğun cevabıdır?"
    ],
    tip: "DİKKAT: 'NOT' var! Boşluğa UYMAYANI seç."
  },
  {
    en: "According to the information above, which course should Kübra choose?",
    tr: "Yukarıdaki bilgiye göre, Kübra hangi kursu seçmelidir?",
    distractors: [
      "Yukarıdaki bilgiye göre, Kübra hangi kursu seçmemelidir?",
      "Aşağıdakilerden hangisi Kübra'nın istemediği kurstur?",
      "Aşağıdaki kurslardan hangisi en pahalıdır?"
    ],
    tip: "'should choose' = seçmeli. Tüm şartlara uyan seçenek doğrudur."
  },
  {
    en: "Which of the following extreme sports is Anthony going to do?",
    tr: "Anthony aşağıdaki ekstrem sporlardan hangisini yapacak?",
    distractors: [
      "Anthony aşağıdaki ekstrem sporlardan hangisini yapmayacak?",
      "Anthony hangi sporu yapmaktan korkar?",
      "Anthony hangi sporda iyidir?"
    ],
    tip: "'going to do' = yapacak. Verilen ipuçlarıyla eşleştir."
  },
  {
    en: "Which of the following CANNOT be the teacher's answer?",
    tr: "Aşağıdakilerden hangisi öğretmenin cevabı OLAMAZ?",
    distractors: [
      "Aşağıdakilerden hangisi öğretmenin cevabı olabilir?",
      "Aşağıdakilerden hangisi öğretmenin sorusudur?",
      "Aşağıdakilerden hangisi öğrencinin cevabıdır?"
    ],
    tip: "'CANNOT be' = OLAMAZ. Soruyla bağdaşmayan cevabı bul."
  },
  {
    en: "Who is talking about the location of the party?",
    tr: "Partinin yeri hakkında konuşan kim?",
    distractors: [
      "Partinin saati hakkında konuşan kim?",
      "Partiye gelmeyecek olan kim?",
      "Partiyi düzenleyen kim?"
    ],
    tip: "'location' = yer/konum. Yer ifadesi geçen konuşmacıyı bul."
  },
  {
    en: "Which of the following CANNOT be one of Emily's answers?",
    tr: "Aşağıdakilerden hangisi Emily'nin cevaplarından biri OLAMAZ?",
    distractors: [
      "Aşağıdakilerden hangisi Emily'nin cevabıdır?",
      "Aşağıdakilerden hangisi Emily'nin sorduğu sorudur?",
      "Emily aşağıdakilerden hangisini sorar?"
    ],
    tip: "Sorular ile uyuşmayan cevap doğrudur. 'CANNOT' = OLAMAZ."
  },
  {
    en: "Who says something positive about his/her friend?",
    tr: "Arkadaşı hakkında olumlu bir şey söyleyen kim?",
    distractors: [
      "Arkadaşı hakkında olumsuz bir şey söyleyen kim?",
      "Arkadaşıyla tartışan kim?",
      "Arkadaşı hakkında konuşmayan kim?"
    ],
    tip: "'positive' = olumlu. Güzel/iyi şeyler söyleyeni seç."
  },
  {
    en: "Which of the following books is Clara NOT going to buy?",
    tr: "Aşağıdaki kitaplardan hangisini Clara almayacak?",
    distractors: [
      "Aşağıdaki kitaplardan hangisini Clara alacak?",
      "Clara hangi kitabı tavsiye eder?",
      "Aşağıdaki kitaplardan hangisi en ucuzdur?"
    ],
    tip: "'NOT going to buy' = almayacak. İlgi alanına uymayanı seç."
  },
  {
    en: "Which two words should change places to be in the correct group?",
    tr: "Doğru grupta olabilmesi için hangi iki kelimenin yer değiştirmesi gerekir?",
    distractors: [
      "Aşağıdaki kelimelerden hangisi yanlış gruptadır?",
      "Aşağıdaki kelimelerden hangisi her iki gruba da uyar?",
      "Aşağıdaki kelimelerden hangisi grup başlığıdır?"
    ],
    tip: "İki yanlış konumdaki kelimeyi bul ve yer değiştir."
  },
  {
    en: "Who is DEFINITELY NOT available at the moment?",
    tr: "Şu anda KESİNLİKLE müsait olmayan kim?",
    distractors: [
      "Şu anda kesinlikle müsait olan kim?",
      "Daha sonra geri dönecek olan kim?",
      "Mesaj bırakmak isteyen kim?"
    ],
    tip: "'DEFINITELY NOT available' = kesinlikle müsait değil."
  },
  {
    en: "Which of the following headings does NOT match with any of the texts above?",
    tr: "Aşağıdaki başlıklardan hangisi yukarıdaki metinlerin hiçbiriyle eşleşmez?",
    distractors: [
      "Aşağıdaki başlıklardan hangisi metinlerle eşleşir?",
      "Hangi başlık ilk metne en uygundur?",
      "Tüm metinler için ortak başlık nedir?"
    ],
    tip: "'NOT match' = eşleşmez. Metinde geçmeyen konuyu bul."
  },
  {
    en: "Who did NOT invite Susan to an event?",
    tr: "Susan'ı bir etkinliğe DAVET ETMEYEN kim?",
    distractors: [
      "Susan'ı etkinliğe davet eden kim?",
      "Susan'ın daveti reddettiği kişi kim?",
      "Susan'a teşekkür eden kim?"
    ],
    tip: "'NOT invite' = davet etmedi. Sadece teşekkür/bilgi veren kişidir."
  },
  {
    en: "Who does NOT think the book is useful?",
    tr: "Kitabın faydalı olduğunu düşünmeyen kim?",
    distractors: [
      "Kitabı faydalı bulan kim?",
      "Kitabı tavsiye eden kim?",
      "Kitabı en çok beğenen kim?"
    ],
    tip: "Olumsuz yorum yapan kişiyi bul. 'NOT useful' = faydalı değil."
  },
  {
    en: "Which question has the answer in all four texts above?",
    tr: "Hangi sorunun cevabı yukarıdaki dört metnin hepsinde vardır?",
    distractors: [
      "Hangi sorunun cevabı metinlerin hiçbirinde yoktur?",
      "Hangi soruya sadece bir metin cevap verir?",
      "İlk metin hangi soruyu cevaplar?"
    ],
    tip: "Tüm metinlerde geçen ortak bilgiyi bul."
  },
  {
    en: "According to the map above, which of the following is false?",
    tr: "Yukarıdaki haritaya göre, aşağıdakilerden hangisi yanlıştır?",
    distractors: [
      "Yukarıdaki haritaya göre, aşağıdakilerden hangisi doğrudur?",
      "Haritaya göre tur ne kadar sürer?",
      "Hangi kamp alanı en uzaktır?"
    ],
    tip: "'false' = yanlış. Haritayla çelişen seçeneği bul."
  },
  {
    en: "Who refuses Kevin's invitation with NO excuse?",
    tr: "Kevin'in davetini HİÇBİR mazeret göstermeden reddeden kim?",
    distractors: [
      "Kevin'in davetini bir mazeretle reddeden kim?",
      "Kevin'in davetini kabul eden kim?",
      "Kevin'i davet eden kim?"
    ],
    tip: "'no excuse' = mazeret yok. Sadece 'hayır' diyen kişidir."
  },
  {
    en: "Who says something about the process of making a tomato sauce?",
    tr: "Domates sosu yapma süreci hakkında bir şey söyleyen kim?",
    distractors: [
      "Domates sosunu sevmeyen kim?",
      "Yemek yapmayı bilmeyen kim?",
      "Tarifi başkasından isteyen kim?"
    ],
    tip: "'process' = süreç/aşama. Adımları anlatanı seç."
  },
  {
    en: "Which of the following is the teacher's question?",
    tr: "Aşağıdakilerden hangisi öğretmenin sorusudur?",
    distractors: [
      "Aşağıdakilerden hangisi öğrencinin cevabıdır?",
      "Aşağıdakilerden hangisi öğretmenin cevabıdır?",
      "Hangi soru cevapsız kalmıştır?"
    ],
    tip: "Verilen tüm cevaplara uygun ortak soruyu bul."
  },
  {
    en: "Why did Lisa write this email?",
    tr: "Lisa bu e-postayı neden yazdı?",
    distractors: [
      "Lisa bu e-postayı kime yazdı?",
      "Lisa e-postayı ne zaman yazdı?",
      "Lisa nereden yazdı?"
    ],
    tip: "'Why' = neden. Yazma amacını/niyetini bul."
  },
  {
    en: "Who refuses the invitation because she has a plan with her family?",
    tr: "Aile planı olduğu için daveti reddeden kim?",
    distractors: [
      "Sınav çalıştığı için daveti reddeden kim?",
      "Daveti kabul eden kim?",
      "Hasta olduğu için daveti reddeden kim?"
    ],
    tip: "Mazeret AİLE planı olmalı. Diğer mazeretlerle karıştırma."
  },
  {
    en: "Which two people finish their phone conversation?",
    tr: "Telefon konuşmasını sonlandıran iki kişi kimdir?",
    distractors: [
      "Telefon konuşmasına başlayan iki kişi kimdir?",
      "Telefon konuşmasını yarıda kesen kim?",
      "Telefonu açmayan kim?"
    ],
    tip: "'finish' = bitirmek. 'See you', 'take care', 'bye' gibi kapanış."
  },
  {
    en: "Which of the following does NOT complete the conversation?",
    tr: "Aşağıdakilerden hangisi konuşmayı tamamlamaz?",
    distractors: [
      "Aşağıdakilerden hangisi konuşmayı tamamlar?",
      "Aşağıdakilerden hangisi konuşmaya başlangıçtır?",
      "Hangi cümle konuşmayı bitirir?"
    ],
    tip: "'NOT complete' = tamamlamaz. Akışı bozan ifadeyi bul."
  },
  {
    en: "Who created a password according to the rules above?",
    tr: "Yukarıdaki kurallara göre kim şifre oluşturdu?",
    distractors: [
      "Kurallara uymadan şifre oluşturan kim?",
      "En uzun şifreyi yazan kim?",
      "Şifresini unutan kim?"
    ],
    tip: "Tüm kurallara uyan tek kişiyi bul. Tek tek kontrol et."
  },
  {
    en: "Which of the following is correct?",
    tr: "Aşağıdakilerden hangisi doğrudur?",
    distractors: [
      "Aşağıdakilerden hangisi yanlıştır?",
      "Aşağıdakilerden hangisi belirsizdir?",
      "Aşağıdakilerden hangisi alakasızdır?"
    ],
    tip: "Metinle BİREBİR uyumlu seçeneği bul."
  },
  {
    en: "Which two people state that they know how to make pizza?",
    tr: "Pizza yapmayı bildiklerini söyleyen iki kişi kimdir?",
    distractors: [
      "Pizza yapmayı bilmeyen iki kişi kimdir?",
      "Pizzayı sevmeyen kim?",
      "Pizza siparişi vermek isteyen kim?"
    ],
    tip: "'state that they know' = bildiklerini ifade ediyorlar."
  },
  {
    en: "Which of the following can be David's answer to Andy?",
    tr: "Aşağıdakilerden hangisi David'in Andy'ye cevabı olabilir?",
    distractors: [
      "Aşağıdakilerden hangisi David'in cevabı olamaz?",
      "Andy'nin sorusu nedir?",
      "Hangi cevap daveti reddeder?"
    ],
    tip: "Bağlama göre kabul/red ifadesini doğru seç."
  },
  {
    en: "Which of the following is the correct order of the sentences?",
    tr: "Aşağıdakilerden hangisi cümlelerin doğru sırasıdır?",
    distractors: [
      "Aşağıdakilerden hangisi cümlelerin yanlış sırasıdır?",
      "Hangi cümle cevapsızdır?",
      "Hangi cümle ilk değildir?"
    ],
    tip: "Konuşma akışına göre selam → istek → cevap → kapanış."
  },
  {
    en: "Which of the following is Milo's responsibility?",
    tr: "Aşağıdakilerden hangisi Milo'nun sorumluluğudur?",
    distractors: [
      "Aşağıdakilerden hangisi Milo'nun sorumluluğu değildir?",
      "Milo neyi sevmez?",
      "Milo hangi odada çalışır?"
    ],
    tip: "Görseldeki/metindeki ipuçlarıyla görevi eşleştir."
  },
  {
    en: "Which of the following should Mike prefer?",
    tr: "Mike aşağıdakilerden hangisini tercih etmelidir?",
    distractors: [
      "Mike aşağıdakilerden hangisini tercih etmemelidir?",
      "Mike'ın bütçesi en az hangisine yeter?",
      "En pahalı seçenek hangisidir?"
    ],
    tip: "Bütçe + süre/şart kriterlerinin HEPSİNE uyanı seç."
  },
  {
    en: "Which question has Sandra answered in her blog?",
    tr: "Sandra blogunda hangi soruyu cevaplamıştır?",
    distractors: [
      "Sandra hangi soruyu sormaktadır?",
      "Sandra'nın cevaplamadığı soru hangisidir?",
      "Sandra hangi konuda yazmamıştır?"
    ],
    tip: "Blog metninin konusuna uygun soruyu bul."
  },
  {
    en: "Who says something about safety?",
    tr: "Güvenlik hakkında bir şey söyleyen kim?",
    distractors: [
      "Tehlike hakkında konuşmayan kim?",
      "Aktiviteyi tekrar yapmak isteyen kim?",
      "Heyecanı belirten kim?"
    ],
    tip: "'safety' = güvenlik. Helmet/safe/warning gibi kelimeler ipucudur."
  },
  {
    en: "Which of the following is NOT correct?",
    tr: "Aşağıdakilerden hangisi DOĞRU DEĞİLDİR?",
    distractors: [
      "Aşağıdakilerden hangisi doğrudur?",
      "Aşağıdakilerden hangisi metinde yer alır?",
      "Aşağıdakilerden hangisi en önemlisidir?"
    ],
    tip: "DİKKAT: 'NOT' var. Metinle çelişen seçenek doğru cevaptır."
  },
  {
    en: "What was your comment?",
    tr: "Yorumun ne oldu?",
    distractors: [
      "Yorumun ne olmadı?",
      "Hangi yorumu beğenmedin?",
      "Yorum yapmadın mı?"
    ],
    tip: "Bağlama uygun olumlu/olumsuz yorum cümlesini seç."
  },
  {
    en: "What should you say to the customer to learn more about his problem?",
    tr: "Müşterinin sorunu hakkında daha fazla bilgi almak için ne söylemelisin?",
    distractors: [
      "Müşteriyi nasıl yatıştırırsın?",
      "Müşteriden nasıl özür dilersin?",
      "Müşteriye nasıl veda edersin?"
    ],
    tip: "Bilgi istemek için soru cümlesi/rica cümlesi seçilir."
  },
  {
    en: "Which information is NOT in the text above?",
    tr: "Aşağıdaki bilgilerden hangisi yukarıdaki metinde YOKTUR?",
    distractors: [
      "Aşağıdaki bilgilerden hangisi metinde vardır?",
      "Hangi bilgi en önemlidir?",
      "Hangi bilgi metnin başlığıdır?"
    ],
    tip: "'NOT in the text' = metinde geçmiyor. Tek tek doğrula."
  },
  {
    en: "Which chore is Matt going to do before the guests arrive?",
    tr: "Misafirler gelmeden önce Matt hangi ev işini yapacak?",
    distractors: [
      "Matt hangi ev işini yapmayacak?",
      "Misafirler geldikten sonra hangi iş yapılır?",
      "Laura hangi işi yapacak?"
    ],
    tip: "Bağlamda hangi iş istendi? (örn. yemek hazırlamak)."
  },
  {
    en: "Who has an excuse about his/her own health?",
    tr: "Kendi sağlığıyla ilgili mazereti olan kim?",
    distractors: [
      "Bir akrabasının sağlığıyla ilgili mazereti olan kim?",
      "Mazeret göstermeden reddeden kim?",
      "Daveti kabul eden kim?"
    ],
    tip: "'own health' = kendi sağlığı. Başkası için olanlar yanlıştır."
  },
  {
    en: "Which of the following was NOT possible?",
    tr: "Aşağıdakilerden hangisi mümkün DEĞİLDİ?",
    distractors: [
      "Aşağıdakilerden hangisi mümkündü?",
      "Hangisi en eski icattır?",
      "Hangisi en yeni icattır?"
    ],
    tip: "Tarihlere bak: kişi öldükten sonra çıkan teknolojiyi kullanamaz."
  },
  {
    en: "Which of the following questions does NOT complete the phone conversation?",
    tr: "Aşağıdaki sorulardan hangisi telefon konuşmasını tamamlamaz?",
    distractors: [
      "Aşağıdakilerden hangisi konuşmayı tamamlar?",
      "Hangi soru ilk sorulmuştur?",
      "Hangi soru cevapsız kalmıştır?"
    ],
    tip: "Boşluklara cevapları yerleştir; uymayan tek soru kalır."
  },
  {
    en: "What can you NOT say to the woman on the phone?",
    tr: "Telefondaki kadına aşağıdakilerden hangisini SÖYLEYEMEZSİN?",
    distractors: [
      "Telefondaki kadına ne söylersin?",
      "Hangi cümle saygılıdır?",
      "Hangi cümle veda cümlesidir?"
    ],
    tip: "Sekreter sıfatına uymayan ifadeyi seç (örn. müşterinin söylediği ifade)."
  },
  {
    en: "Which of the following recommendations does NOT match with any of the customers' needs?",
    tr: "Aşağıdaki tavsiyelerden hangisi müşterilerin ihtiyaçlarının hiçbiriyle eşleşmez?",
    distractors: [
      "Hangi tavsiye ihtiyaçla eşleşir?",
      "Hangi cihaz en pahalıdır?",
      "Hangi müşteri en gençtir?"
    ],
    tip: "Tüm müşterileri tek tek eşleştir; eşi olmayan tavsiye doğru cevaptır."
  },
  {
    en: "Which of the following does NOT have an answer in the e-mail above?",
    tr: "Aşağıdakilerden hangisinin yukarıdaki e-postada cevabı YOKTUR?",
    distractors: [
      "Aşağıdakilerden hangisinin cevabı e-postada vardır?",
      "E-postanın konusu nedir?",
      "E-postayı kim yazmıştır?"
    ],
    tip: "Soruları metne sor; cevabı bulunmayan soru doğrudur."
  },
  {
    en: "Who can DEFINITELY attend the party?",
    tr: "Partiye KESİNLİKLE katılabilecek kim?",
    distractors: [
      "Partiye kesinlikle katılamayacak kim?",
      "Belki katılabilecek kim?",
      "Partiyi düzenleyen kim?"
    ],
    tip: "'definitely' = kesinlikle. Şartı/koşulu olmayan tek kişiyi bul."
  },
  {
    en: "According to the recipe, which is the correct order of the missing words?",
    tr: "Tarife göre, eksik kelimelerin doğru sırası hangisidir?",
    distractors: [
      "Tarife göre eksik kelimelerin yanlış sırası hangisidir?",
      "Hangi kelime tarifte geçmez?",
      "Tarifin son adımı nedir?"
    ],
    tip: "Boşlukları sırayla doldur (add → soak → sprinkle gibi)."
  },
  {
    en: "Which two activities are they going to try at the weekend?",
    tr: "Hafta sonu hangi iki aktiviteyi deneyecekler?",
    distractors: [
      "Hafta sonu hangi aktiviteyi yapmayacaklar?",
      "Hafta içi hangi aktiviteyi yaparlar?",
      "Tek başına hangi aktiviteyi yapar?"
    ],
    tip: "Her iki kişinin de zevkine UYGUN aktiviteyi seç."
  },
  {
    en: "Which of the following tour should Richard take?",
    tr: "Richard aşağıdaki turlardan hangisini almalıdır?",
    distractors: [
      "Richard hangi turu almamalıdır?",
      "Hangi tur en pahalıdır?",
      "Hangi tur en kısadır?"
    ],
    tip: "TÜM ihtiyaçlara (tarihi yer, outdoor spor, kamp) uyan turu seç."
  },
  {
    en: "Which of the following is the correct order?",
    tr: "Aşağıdakilerden hangisi doğru sıralamadır?",
    distractors: [
      "Aşağıdakilerden hangisi yanlış sıralamadır?",
      "Hangi adım en önce gelir?",
      "Hangi adım atlanmıştır?"
    ],
    tip: "Mantık sırasına dikkat: başlangıç → orta → kapanış."
  },
  {
    en: "What does the underlined word mean?",
    tr: "Altı çizili kelime ne anlama gelir?",
    distractors: [
      "Altı çizili kelime nasıl yazılır?",
      "Altı çizili kelime hangi kelime ile zıt anlamlıdır?",
      "Altı çizili kelime kaç hecelidir?"
    ],
    tip: "Bağlamdan anlamı çıkar; eş/yakın anlamlı seçeneği seç."
  }
];
