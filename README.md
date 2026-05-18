# 🚀 LGS İngilizce Macerası

8. sınıf öğrencilerinin LGS İngilizce sınavına hazırlanması için
hazırlanmış, **mobil uyumlu**, **oyunlaştırılmış** bir çalışma uygulaması.

İçerik tamamen MEB'in yayımladığı **2021-2025 LGS İngilizce sınavları**
ve **resmi deneme sınavlarından** çıkarıldı; üstüne ortaokul seviyesinde
bilinmesi beklenen yakın anlamlı kelimeler eklendi.

🌐 **Canlı uygulama:** https://servetd.github.io/LGS_ENGN/

---

## ✨ Neler var

### 🎮 Dört oyun modu

| Mod | Açıklama |
|---|---|
| 📚 **Kelime Avı** | İngilizce kelime gösterilir, doğru Türkçe karşılığı seçilir |
| 🎯 **Soru Kökü Ustası** | LGS'de çıkan **101 soru kökü kalıbının** Türkçe anlamı sorulur |
| 💬 **Cümle Anlama** | Tam cümle gösterilir, doğru Türkçe çevirisi seçilir (74 cümle) |
| 🧩 **Karışık Mod** | Üç tip soruyu rastgele harmanlar |

### 📂 10 tema

Friendship · Teen Life · In the Kitchen · On the Phone · The Internet ·
Adventures · Tourism · Chores · Science · Natural Forces

Tüm temalar MEB 8. sınıf İngilizce müfredatına uygun, 342 kelime
içeriyor. Herhangi bir tema seçilebilir ya da "Tüm Temalar" ile karışık
çalışılabilir.

### 🪙 Altın & Güç dükkânı

Doğru cevap başına **1 altın** kazanılır. Zorlandığında bu altınlarla
güç satın alınır:

| Güç | Maliyet | Etkisi |
|---|---|---|
| 🔮 Yarı Yarıya | 3 🪙 | Yanlış bir şıkkı siler |
| 🛟 İkinci Şans | 5 🪙 | İlk yanlışta tur kapanmaz, tekrar deneme hakkı |
| 💡 İpucu | 2 🪙 | Soru tipine özel ipucu (ilk harf / ilk iki kelime / kalıp ipucu) |

### 🏆 Gamification

- **10 seviye** (Çırak → LGS Üstadı) ile dengeli XP eğrisi
- **Seri (streak)** ve **kombo çarpanı** (3 ardışıkta x2, 6'da x3)
- **Günlük hedef:** 20 doğru cevap
- **16 rozet** (İlk Adım, Yüzlük Klüp, Volkan, Kelime Ustası, LGS Kralı, vs.)
- Konfeti, motivasyon mesajları, ses efektleri

### 📊 Gelişim Raporu

Çocuğun **kendi gelişimini somut görebileceği** kişisel pano:

- 🎯 Genel başarı yüzdesi + kişiselleştirilmiş yorum
- 📅 Son 7 günün doğru/yanlış grafiği
- 📚 Tema bazında başarı (zayıftan güçlüye sıralı)
- 🎮 Modül bazında başarı (Kelime / Soru Kökü / Cümle)
- 🔁 En çok hata yapılan ilk 10 madde (tekrar listesi)
- 💡 Otomatik üretilen kişisel öneri

### 🧹 Sıfırlama
İki adımlı onay ile tüm veriyi sıfırlama (yanlışlıkla basma koruması var).

---

## 📱 Telefona nasıl yüklenir

Uygulama bir **PWA (Progressive Web App)**, yani sıradan web sitesi gibi
açılır ama gerçek bir uygulama gibi davranır — internetsiz çalışır,
ana ekrandan tek dokunuşla açılır.

### Android (Chrome)

1. Tarayıcıda **https://servetd.github.io/LGS_ENGN/** adresini aç
2. Sağ üstte **⋮** menüsüne dokun
3. **"Uygulamayı yükle"** veya **"Ana ekrana ekle"** seçeneğini seç
4. Ana ekrana 🚀 simgesi eklenir
5. Bundan sonra tek dokunuşla, tarayıcı çubuğu olmadan açılır

### iPhone / iPad (Safari)

1. **https://servetd.github.io/LGS_ENGN/** adresini aç
2. Alt menüde **Paylaş** ikonuna (kare + yukarı ok) dokun
3. Aşağı kaydır → **"Ana Ekrana Ekle"**
4. Ana ekrana eklendikten sonra tam ekran açılır

### Bilgisayar

Doğrudan tarayıcıda https://servetd.github.io/LGS_ENGN/ adresinden
kullanılabilir.

---

## 💾 Veri saklama

Tüm ilerleme (XP, seviye, altın, rozetler, istatistikler) **çocuğun
kendi cihazında** kaydedilir. Sunucu yok, hesap yok, internet
gerekmiyor.

İki katmanlı saklama:
- **IndexedDB** — kalıcı yerel veritabanı (mobil cihazda)
- **localStorage** — hızlı erişim önbelleği

Bu sayede tarayıcı geçici verileri temizlense de, iOS Safari uzun
süredir kullanılmadıysa otomatik silse de — IndexedDB'deki ana veri
geri yüklenir.

---

## 📚 İçerik kaynakları

İçerik tamamen **MEB / ÖDSGM** tarafından yayımlanan **resmi LGS
sınavlarından** çıkarıldı:

- 2021, 2022, 2023, 2024, 2025 LGS İngilizce sınavları
- LGS 2-7 numaralı resmi deneme sınavları

Bu sınavlarda geçen kelimeler tema bazında gruplandırıldı, üzerine
**ortaokul seviyesinde bilinmesi beklenen yakın anlamlı kelimeler**
eklenerek 342 kelimelik tema havuzu oluşturuldu.

**Soru kökleri** — LGS'de en sık çıkan 101 farklı kalıp yine
sınavlardan toplandı; her birinin Türkçe anlamı ve çocuğun yanılgıya
düşmemesi için kısa öğretici ipucu yazıldı (`NOT`, `CANNOT`, `DEFINITELY`
gibi anahtar kelimelerin nasıl okunacağı dahil).

**Cümle Anlama** modülündeki 74 cümle de yine sınav ve denemelerde
yer alan sık geçen kalıplar; çeldiriciler özellikle anlam farkını
test edecek şekilde tasarlandı (olumlu/olumsuz, kişi karışıklığı,
modal yardımcı, zaman farkı).

---

## 🛠️ Geliştirici notları

### Teknoloji

- Saf **HTML / CSS / JavaScript** (framework yok, build adımı yok)
- **Web Audio API** ile ses efektleri
- **Canvas** ile konfeti animasyonu
- **IndexedDB + Service Worker** ile offline-first PWA
- Mobil-öncelikli responsive tasarım (320px ila tablet)

### Proje yapısı

```
.
├── index.html          # Ana uygulama kabuğu
├── style.css           # Tüm stiller (mobile-first, gradient tema)
├── app.js              # Oyun mantığı, durum, IDB, PWA kaydı
├── manifest.json       # PWA manifesti
├── service-worker.js   # Offline desteği için cache yöneticisi
├── icons/              # PWA ikonları (SVG)
└── data/
    ├── vocabulary.js   # 10 tema · 342 kelime
    ├── stems.js        # 101 soru kökü kalıbı
    └── sentences.js    # 74 cümle anlama
```

### Yerelde çalıştırmak

```bash
git clone https://github.com/servetd/LGS_ENGN.git
cd LGS_ENGN
python3 -m http.server 8080
```

Tarayıcıdan `http://localhost:8080` adresine gidilir. (Service Worker
için `file://` üzerinden açmak çalışmaz; küçük bir HTTP sunucusu lazım.)

### İçerik genişletme

- **Yeni kelime eklemek:** `data/vocabulary.js` içindeki ilgili temaya
  `{ en: "...", tr: "..." }` ekle.
- **Yeni soru kökü:** `data/stems.js` dizisine `{ en, tr, distractors, tip }`
  ekle. Çeldiriciler doğru cevapla aynı yapıda olmalı (uzunluk farkı
  &le; 30 karakter).
- **Yeni cümle:** `data/sentences.js` dizisine `{ theme, en, tr, distractors }`
  ekle.

---

## 🙏 Teşekkür

İçeriği yayımlayan **T.C. Millî Eğitim Bakanlığı – Ölçme,
Değerlendirme ve Sınav Hizmetleri Genel Müdürlüğü**'ne (ÖDSGM)
teşekkürler.

---

Sevgiyle, oğlumun LGS yolculuğuna küçük bir katkı olsun diye. 💜
