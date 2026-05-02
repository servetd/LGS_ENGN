/* ============================================================
 * LGS İngilizce Macerası - Oyun Mantığı
 * - Kelime ve Soru Kökü çoktan seçmeli kuiz
 * - XP, seviye, seri (streak), kombo, rozet, günlük hedef
 * - localStorage ile ilerleme kaydı
 * ============================================================ */

(function () {
  "use strict";

  /* ---------- Sabitler ---------- */
  const QUESTIONS_PER_ROUND = 10;
  const XP_PER_CORRECT = 10;
  const XP_STREAK_BONUS = 5;       // Her 3 doğruda bir bonus
  const COINS_PER_CORRECT = 1;     // Her doğru cevapta +1 altın
  const DAILY_GOAL = 20;           // Günlük doğru hedefi
  const POWERUP_COSTS = { fifty: 3, second: 5, hint: 2 };
  const LEVEL_TITLES = [
    "Çırak", "Acemi", "Öğrenen", "Bilgin", "Usta",
    "Şampiyon", "Efsane", "LGS Kralı"
  ];

  const BADGES = [
    { id: "first_step",   name: "İlk Adım",         desc: "İlk doğru cevabını verdin",  emoji: "👣", check: s => s.totalCorrect >= 1 },
    { id: "ten_correct",  name: "On Numara",        desc: "10 doğru cevap",              emoji: "🎯", check: s => s.totalCorrect >= 10 },
    { id: "fifty_correct",name: "Yarım Yüz",        desc: "50 doğru cevap",              emoji: "💪", check: s => s.totalCorrect >= 50 },
    { id: "hundred",      name: "Yüzlük Klüp",      desc: "100 doğru cevap",             emoji: "💯", check: s => s.totalCorrect >= 100 },
    { id: "streak5",      name: "Seri Avcı",        desc: "5'lik seri yakaladın",        emoji: "🔥", check: s => s.bestStreak >= 5 },
    { id: "streak10",     name: "Alev Topu",        desc: "10'luk seri yakaladın",       emoji: "🌋", check: s => s.bestStreak >= 10 },
    { id: "streak20",     name: "Volkan",           desc: "20'lik seri yakaladın",       emoji: "🌟", check: s => s.bestStreak >= 20 },
    { id: "level3",       name: "Yeni Seviye",      desc: "Seviye 3'e ulaştın",          emoji: "🚀", check: s => s.level >= 3 },
    { id: "level5",       name: "Yarı Yolda",       desc: "Seviye 5'e ulaştın",          emoji: "⭐", check: s => s.level >= 5 },
    { id: "level8",       name: "LGS Kralı",        desc: "En yüksek seviyeye ulaştın",  emoji: "👑", check: s => s.level >= 8 },
    { id: "vocab_master", name: "Kelime Ustası",    desc: "1 turda 10/10 kelime",        emoji: "📚", check: s => s.perfectVocab },
    { id: "stem_master",  name: "Soru Kökü Ustası", desc: "1 turda 10/10 soru kökü",     emoji: "🎯", check: s => s.perfectStem },
    { id: "sent_master",  name: "Cümle Ustası",     desc: "1 turda 10/10 cümle",         emoji: "💬", check: s => s.perfectSentence },
    { id: "daily_done",   name: "Günü Bitirdim",    desc: "Günlük hedefi tamamladın",    emoji: "🌈", check: s => s.dailyGoalsHit >= 1 },
    { id: "all_themes",   name: "Tüm Temalar",      desc: "Her tema için en az 1 tur",   emoji: "🌍", check: s => Object.keys(s.themesPlayed||{}).length >= 10 },
    { id: "rich",         name: "Zengin",           desc: "50 altın biriktirdin",        emoji: "💰", check: s => (s.maxCoins||0) >= 50 },
    { id: "powerup_user", name: "Güç Avcısı",       desc: "Bir gücü ilk kez kullandın",  emoji: "🔮", check: s => s.usedPowerup }
  ];

  /* ---------- State ve persistence ---------- */
  const STORAGE_KEY = "lgs_eng_progress_v1";
  const defaultState = {
    totalXp: 0,
    coins: 0,
    level: 1,
    streak: 0,
    bestStreak: 0,
    totalCorrect: 0,
    totalWrong: 0,
    perfectVocab: false,
    perfectStem: false,
    perfectSentence: false,
    usedPowerup: false,
    maxCoins: 0,
    dailyDate: todayKey(),
    dailyCorrect: 0,
    dailyGoalsHit: 0,
    badges: {},
    themesPlayed: {},
    themeStats: {},   // { themeKey: { correct, wrong } }
    modeStats: {},    // { vocab|stem|sentence: { correct, wrong } }
    missed: {},       // { "kind:en": { en, tr, kind, themeKey, count, lastWrong } }
    history: {},      // { "YYYY-M-D": { correct, wrong } } - last 30 days
    selectedTheme: "all"
  };

  let state = loadState();

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      const s = { ...defaultState, ...JSON.parse(raw) };
      // Günlük sıfırlama
      if (s.dailyDate !== todayKey()) {
        s.dailyDate = todayKey();
        s.dailyCorrect = 0;
      }
      return s;
    } catch (e) {
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  /* ---------- Seviye hesaplama ---------- */
  // Seviye eşikleri: kümülatif XP. Seviye N için: 100 * N
  function xpForLevel(n) { return 100 * n; }
  function totalXpForLevel(n) {
    let t = 0;
    for (let i = 1; i < n; i++) t += xpForLevel(i);
    return t;
  }
  function computeLevel() {
    let lvl = 1;
    let need = 0;
    while (state.totalXp >= need + xpForLevel(lvl) && lvl < LEVEL_TITLES.length) {
      need += xpForLevel(lvl);
      lvl++;
    }
    state.level = lvl;
    return { level: lvl, levelStart: need, levelNeed: xpForLevel(lvl) };
  }

  /* ---------- DOM yardımcıları ---------- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  /* ---------- Üst bar / XP / günlük güncelleme ---------- */
  function refreshTopBar() {
    const info = computeLevel();
    $("#totalXp").textContent = state.totalXp;
    $("#coins").textContent = state.coins;
    $("#streak").textContent = state.streak;
    $("#levelNumber").textContent = state.level;
    $("#levelTitle").textContent = LEVEL_TITLES[Math.min(state.level - 1, LEVEL_TITLES.length - 1)];

    const inLevelXp = state.totalXp - info.levelStart;
    const pct = Math.min(100, Math.round((inLevelXp / info.levelNeed) * 100));
    $("#xpFill").style.width = pct + "%";
    $("#xpText").textContent = `${inLevelXp} / ${info.levelNeed} XP`;

    // Günlük
    const dailyPct = Math.min(100, Math.round((state.dailyCorrect / DAILY_GOAL) * 100));
    $("#dailyFill").style.width = dailyPct + "%";
    $("#dailyDoneText").textContent = state.dailyCorrect;
  }

  /* ---------- Tema gridi ---------- */
  function renderThemeGrid() {
    const grid = $("#themeGrid");
    grid.innerHTML = "";

    const all = document.createElement("button");
    all.className = "theme-card" + (state.selectedTheme === "all" ? " active" : "");
    all.dataset.theme = "all";
    all.innerHTML = `
      <div class="theme-emoji" style="background:linear-gradient(135deg,#ffce47,#ff6b9d);">🌟</div>
      <div class="theme-text">
        <span class="theme-tr">Tüm Temalar</span>
        <span class="theme-en">All Themes</span>
      </div>`;
    grid.appendChild(all);

    Object.entries(window.VOCAB).forEach(([key, t]) => {
      const btn = document.createElement("button");
      btn.className = "theme-card" + (state.selectedTheme === key ? " active" : "");
      btn.dataset.theme = key;
      btn.innerHTML = `
        <div class="theme-emoji" style="background:${hexToBg(t.color)};">${t.icon}</div>
        <div class="theme-text">
          <span class="theme-tr">${t.nameTr}</span>
          <span class="theme-en">${t.name}</span>
        </div>`;
      grid.appendChild(btn);
    });

    grid.addEventListener("click", onThemeClick, { once: true });
  }
  function onThemeClick(e) {
    const card = e.target.closest(".theme-card");
    if (card) {
      state.selectedTheme = card.dataset.theme;
      saveState();
      renderThemeGrid();
    }
  }
  function hexToBg(hex) {
    return `linear-gradient(135deg, ${hex}, ${hex}aa)`;
  }

  /* ---------- Mod kartları ---------- */
  function setupModeButtons() {
    $$(".mode-card").forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = btn.dataset.mode;
        if (mode === "badges") return showBadges();
        if (mode === "report") return showReport();
        startQuiz(mode);
      });
    });
  }

  /* ---------- Kuiz oluşturma ---------- */
  let currentQuiz = null;

  function startQuiz(mode) {
    const items = buildQuestionPool(mode);
    if (items.length === 0) {
      alert("Bu tema için soru bulunamadı.");
      return;
    }
    shuffle(items);
    const questions = items.slice(0, QUESTIONS_PER_ROUND);

    currentQuiz = {
      mode,
      theme: state.selectedTheme,
      questions,
      idx: 0,
      correct: 0,
      wrong: 0,
      bestStreak: 0,
      streak: 0,
      gainedXp: 0,
      combo: 1
    };

    showView("quizView");
    renderQuestion();
  }

  function buildQuestionPool(mode) {
    const themes = state.selectedTheme === "all"
      ? Object.keys(window.VOCAB)
      : [state.selectedTheme];

    const pool = [];

    if (mode === "vocab" || mode === "mixed") {
      themes.forEach(tk => {
        const t = window.VOCAB[tk];
        if (!t) return;
        t.words.forEach(w => {
          pool.push({ kind: "vocab", themeKey: tk, en: w.en, tr: w.tr });
        });
      });
    }
    if (mode === "stems" || mode === "mixed") {
      window.STEMS.forEach(s => {
        pool.push({ kind: "stem", en: s.en, tr: s.tr, distractors: s.distractors, tip: s.tip });
      });
    }
    if ((mode === "sentences" || mode === "mixed") && window.SENTENCES) {
      const themeSet = new Set(themes);
      window.SENTENCES.forEach(s => {
        if (state.selectedTheme === "all" || themeSet.has(s.theme)) {
          pool.push({ kind: "sentence", themeKey: s.theme, en: s.en, tr: s.tr, distractors: s.distractors });
        }
      });
    }
    return pool;
  }

  function renderQuestion() {
    const q = currentQuiz.questions[currentQuiz.idx];
    $("#qIndex").textContent = currentQuiz.idx + 1;
    $("#qTotal").textContent = currentQuiz.questions.length;

    const pct = Math.round((currentQuiz.idx / currentQuiz.questions.length) * 100);
    $("#progressFill").style.width = pct + "%";

    $("#comboBadge").textContent = "x" + currentQuiz.combo;

    // İpucu metnini varsayılana sıfırla
    const tip = $("#quizTip");
    tip.style.color = "";
    tip.style.fontWeight = "";

    if (q.kind === "vocab") {
      $("#quizTag").textContent = "Kelime";
      $("#quizQuestion").textContent = q.en;
      $("#quizTip").textContent = "Türkçe karşılığını seç";
    } else if (q.kind === "sentence") {
      $("#quizTag").textContent = "Cümle";
      $("#quizQuestion").textContent = q.en;
      $("#quizTip").textContent = "Cümlenin doğru Türkçesini seç";
    } else {
      $("#quizTag").textContent = "Soru Kökü";
      $("#quizQuestion").textContent = q.en;
      $("#quizTip").textContent = "Türkçe anlamını seç";
    }

    const choices = buildChoices(q);
    const wrap = $("#optionsWrap");
    wrap.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.dataset.correct = c.correct ? "1" : "0";
      btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${escapeHtml(c.text)}</span>`;
      btn.addEventListener("click", () => onAnswer(btn, c.correct, q));
      wrap.appendChild(btn);
    });

    // Güç durumlarını yeni soru için sıfırla
    currentQuiz.powerupsUsed = { fifty: false, second: false, hint: false };
    currentQuiz.secondChanceActive = false;
    refreshPowerups();

    $("#feedback").classList.add("hidden");
    $("#quizCard").classList.remove("hidden");
  }

  /* ---------- Güçler (Power-ups) ---------- */
  function refreshPowerups() {
    $$(".pu-btn").forEach(btn => {
      const key = btn.dataset.pu;
      const used = currentQuiz && currentQuiz.powerupsUsed && currentQuiz.powerupsUsed[key];
      const cost = POWERUP_COSTS[key];
      btn.classList.toggle("used", !!used);
      btn.classList.toggle("disabled", !used && state.coins < cost);
    });
  }

  function setupPowerups() {
    $$(".pu-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (!currentQuiz) return;
        const key = btn.dataset.pu;
        if (currentQuiz.powerupsUsed[key]) return;
        const cost = POWERUP_COSTS[key];
        if (state.coins < cost) {
          // Yetersiz altın -> kısa uyarı
          flashTip(`Yetersiz altın! Bu güç için ${cost} 🪙 gerekli.`);
          return;
        }
        state.coins -= cost;
        state.usedPowerup = true;
        currentQuiz.powerupsUsed[key] = true;
        btn.classList.add("flash");
        setTimeout(() => btn.classList.remove("flash"), 500);
        applyPowerup(key);
        saveState();
        refreshTopBar();
        refreshPowerups();
      });
    });
  }

  function applyPowerup(key) {
    const q = currentQuiz.questions[currentQuiz.idx];
    if (key === "fifty") {
      // Yanlış şıklardan rastgele birini sil
      const wrongOpts = $$(".option").filter(o =>
        o.dataset.correct === "0" && !o.classList.contains("eliminated")
      );
      if (wrongOpts.length === 0) return;
      const pick = wrongOpts[Math.floor(Math.random() * wrongOpts.length)];
      pick.classList.add("eliminated");
    } else if (key === "second") {
      currentQuiz.secondChanceActive = true;
      flashTip("🛟 İkinci şansın aktif! İlk yanlışta tur kapanmaz.");
    } else if (key === "hint") {
      let hint = "";
      if (q.kind === "vocab") {
        hint = `İlk harf: "${q.tr.charAt(0).toUpperCase()}…"`;
      } else if (q.kind === "sentence") {
        const words = q.tr.split(/\s+/).slice(0, 2).join(" ");
        hint = `Cümle şöyle başlıyor: "${words}…"`;
      } else if (q.kind === "stem") {
        hint = q.tip || "Soru köküne göre olumlu/olumsuz farkına dikkat et!";
      }
      flashTip("💡 " + hint);
    }
  }

  function flashTip(text) {
    const tip = $("#quizTip");
    tip.textContent = text;
    tip.style.color = "#ffce47";
    tip.style.fontWeight = "700";
  }

  function buildChoices(q) {
    let pool = [];
    if (q.kind === "vocab") {
      // Aynı temadan rastgele 3 yanlış Türkçe (eş anlamlı tekrarları engelle)
      const used = new Set([q.tr]);
      const sameTheme = window.VOCAB[q.themeKey].words
        .map(w => w.tr)
        .filter(t => !used.has(t));
      shuffle(sameTheme);
      const wrong = [];
      for (const t of sameTheme) {
        if (!used.has(t)) { wrong.push(t); used.add(t); }
        if (wrong.length === 3) break;
      }
      // Yetmezse diğer temalardan tamamla
      if (wrong.length < 3) {
        const allTr = [];
        Object.values(window.VOCAB).forEach(t => t.words.forEach(w => {
          if (!used.has(w.tr)) allTr.push(w.tr);
        }));
        shuffle(allTr);
        for (const t of allTr) {
          if (!used.has(t)) { wrong.push(t); used.add(t); }
          if (wrong.length === 3) break;
        }
      }
      pool = wrong.map(t => ({ text: t, correct: false }));
      pool.push({ text: q.tr, correct: true });
    } else {
      // Stem ve Sentence: doğru + verilen 3 çeldirici
      pool = q.distractors.map(d => ({ text: d, correct: false }));
      pool.push({ text: q.tr, correct: true });
    }
    shuffle(pool);
    return pool.slice(0, 4);
  }

  /* ---------- İstatistik kaydı (rapor için) ---------- */
  function recordStat(q, correct) {
    const themeKey = q.themeKey || "stem";
    const kind = q.kind;
    const day = todayKey();

    state.themeStats[themeKey] = state.themeStats[themeKey] || { correct: 0, wrong: 0 };
    state.modeStats[kind]      = state.modeStats[kind]      || { correct: 0, wrong: 0 };
    state.history[day]         = state.history[day]         || { correct: 0, wrong: 0 };

    if (correct) {
      state.themeStats[themeKey].correct++;
      state.modeStats[kind].correct++;
      state.history[day].correct++;
    } else {
      state.themeStats[themeKey].wrong++;
      state.modeStats[kind].wrong++;
      state.history[day].wrong++;
      const k = `${kind}:${q.en}`;
      state.missed[k] = state.missed[k] || { en: q.en, tr: q.tr, kind, themeKey, count: 0 };
      state.missed[k].count++;
      state.missed[k].lastWrong = day;
    }

    // 30 günden eski geçmişi temizle
    pruneHistory();
  }

  function pruneHistory() {
    const keys = Object.keys(state.history);
    if (keys.length <= 60) return;
    // basit yaklaşım: tarihleri sıralayıp en yeni 30'unu tut
    const sorted = keys
      .map(k => ({ k, d: dayKeyToDate(k) }))
      .filter(x => x.d)
      .sort((a, b) => b.d - a.d)
      .slice(30);
    sorted.forEach(x => delete state.history[x.k]);
  }

  function dayKeyToDate(s) {
    const [y, m, d] = s.split("-").map(n => parseInt(n, 10));
    if (!y || !m || !d) return null;
    return new Date(y, m - 1, d);
  }

  /* ---------- Cevap işleme ---------- */
  function onAnswer(btn, correct, q) {
    // İkinci şans aktif ve yanlış cevaplandıysa: tur kapanmaz, sadece bu şık silinir
    if (!correct && currentQuiz.secondChanceActive) {
      currentQuiz.secondChanceActive = false; // tek seferlik
      btn.classList.add("second-tried", "shake");
      flashTip("🛟 Tekrar dene! Bir şansın daha var.");
      return;
    }

    $$(".option").forEach(o => o.classList.add("disabled"));

    // Detaylı istatistik kaydı (rapor için)
    recordStat(q, correct);

    if (correct) {
      btn.classList.add("correct", "glow");
      currentQuiz.correct++;
      currentQuiz.streak++;
      currentQuiz.bestStreak = Math.max(currentQuiz.bestStreak, currentQuiz.streak);
      state.streak++;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      state.totalCorrect++;
      state.dailyCorrect++;
      state.themesPlayed[q.themeKey || "stem"] = true;

      // Kombo: 3 ardışık doğruda x2, 6'da x3
      if (currentQuiz.streak >= 6) currentQuiz.combo = 3;
      else if (currentQuiz.streak >= 3) currentQuiz.combo = 2;
      else currentQuiz.combo = 1;

      let gain = XP_PER_CORRECT * currentQuiz.combo;
      if (currentQuiz.streak > 0 && currentQuiz.streak % 3 === 0) gain += XP_STREAK_BONUS;
      currentQuiz.gainedXp += gain;
      state.totalXp += gain;
      state.coins += COINS_PER_CORRECT;
      if (state.coins > (state.maxCoins || 0)) state.maxCoins = state.coins;
      currentQuiz.gainedCoins = (currentQuiz.gainedCoins || 0) + COINS_PER_CORRECT;

      playBeep(660, 0.06);
      setTimeout(() => playBeep(880, 0.07), 80);

      if (currentQuiz.streak >= 5 && currentQuiz.streak % 5 === 0) burstConfetti();

      showFeedback(true, q, gain);
    } else {
      btn.classList.add("wrong", "shake");
      // Doğru olanı göster
      $$(".option").forEach(o => {
        const text = o.querySelector(".opt-text").textContent;
        if (text === q.tr) o.classList.add("reveal");
      });
      currentQuiz.wrong++;
      currentQuiz.streak = 0;
      currentQuiz.combo = 1;
      state.streak = 0;
      state.totalWrong++;

      playBeep(180, 0.18, "square");
      showFeedback(false, q, 0);
    }

    // Günlük hedef tamamlandıysa
    if (state.dailyCorrect === DAILY_GOAL) {
      state.dailyGoalsHit = (state.dailyGoalsHit || 0) + 1;
    }

    saveState();
    refreshTopBar();
  }

  function showFeedback(isCorrect, q, gain) {
    const fb = $("#feedback");
    fb.classList.remove("hidden");
    if (isCorrect) {
      const cheers = ["🎉 Süpersin!", "🌟 Harika!", "🚀 Mükemmel!", "🔥 Aferin!", "💪 Devam et!", "✨ Çok iyi!"];
      $("#feedbackEmoji").textContent = ["🎉","🌟","🚀","🔥","💪","✨"][Math.floor(Math.random()*6)];
      $("#feedbackText").textContent = cheers[Math.floor(Math.random()*cheers.length)] + ` +${gain} XP`;
      $("#feedbackExplain").textContent = explainText(q);
    } else {
      $("#feedbackEmoji").textContent = "💡";
      $("#feedbackText").textContent = "Doğrusunu öğrendin!";
      $("#feedbackExplain").textContent = explainText(q);
    }
  }

  function explainText(q) {
    if (q.kind === "vocab") return `${q.en} = ${q.tr}`;
    if (q.kind === "sentence") return `“${q.en}” → ${q.tr}`;
    return `${q.tr}` + (q.tip ? ` • İpucu: ${q.tip}` : "");
  }

  $("#nextBtn").addEventListener("click", nextQuestion);
  function nextQuestion() {
    currentQuiz.idx++;
    if (currentQuiz.idx >= currentQuiz.questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  /* ---------- Bitiş ---------- */
  function finishQuiz() {
    if (currentQuiz.correct === currentQuiz.questions.length) {
      if (currentQuiz.questions.every(q => q.kind === "vocab")) state.perfectVocab = true;
      if (currentQuiz.questions.every(q => q.kind === "stem")) state.perfectStem = true;
      if (currentQuiz.questions.every(q => q.kind === "sentence")) state.perfectSentence = true;
    }
    saveState();

    const newBadges = checkAndUnlockBadges();
    refreshTopBar();

    $("#rCorrect").textContent = currentQuiz.correct;
    $("#rWrong").textContent = currentQuiz.wrong;
    $("#rXp").textContent = "+" + currentQuiz.gainedXp;
    $("#rCoins").textContent = "+" + (currentQuiz.gainedCoins || 0);
    $("#rStreak").textContent = currentQuiz.bestStreak;

    const ratio = currentQuiz.correct / currentQuiz.questions.length;
    let title, emoji;
    if (ratio === 1) { title = "Mükemmel! 🏆"; emoji = "🏆"; burstConfetti(2.5); }
    else if (ratio >= 0.7) { title = "Harika iş!"; emoji = "🎉"; burstConfetti(); }
    else if (ratio >= 0.5) { title = "Güzel devam!"; emoji = "💪"; }
    else { title = "Pes etme, tekrar dene!"; emoji = "🌱"; }
    $("#resultTitle").textContent = title;
    $("#resultEmoji").textContent = emoji;

    if (newBadges.length) {
      $("#newBadgesWrap").classList.remove("hidden");
      $("#newBadges").innerHTML = newBadges.map(b => `<div class="nbadge">${b.emoji} ${b.name}</div>`).join("");
      burstConfetti(2);
    } else {
      $("#newBadgesWrap").classList.add("hidden");
    }

    showView("resultView");
  }

  $("#againBtn").addEventListener("click", () => startQuiz(currentQuiz.mode));
  $("#homeBtn").addEventListener("click", () => goHome());
  $("#backBtn").addEventListener("click", () => goHome());

  /* ---------- Rozet ekranı ---------- */
  $("#badgesBack").addEventListener("click", () => goHome());

  function showBadges() {
    const grid = $("#badgesGrid");
    grid.innerHTML = "";
    BADGES.forEach(b => {
      const unlocked = !!state.badges[b.id];
      const card = document.createElement("div");
      card.className = "badge-card " + (unlocked ? "unlocked" : "locked");
      card.innerHTML = `
        <div class="badge-emoji">${unlocked ? b.emoji : "🔒"}</div>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.desc}</div>`;
      grid.appendChild(card);
    });
    showView("badgesView");
  }

  /* ---------- Gelişim Raporu ---------- */
  $("#reportBack").addEventListener("click", () => goHome());

  function showReport() {
    const totalC = state.totalCorrect || 0;
    const totalW = state.totalWrong || 0;
    const total = totalC + totalW;

    if (total === 0) {
      $("#reportContent").classList.add("hidden");
      $("#reportEmpty").classList.remove("hidden");
      showView("reportView");
      return;
    }
    $("#reportEmpty").classList.add("hidden");
    $("#reportContent").classList.remove("hidden");

    // Genel başarı
    const pct = Math.round((totalC / total) * 100);
    $("#overallPct").textContent = pct + "%";
    $("#overallCorrect").textContent = totalC;
    $("#overallWrong").textContent = totalW;
    $("#overallFill").style.width = pct + "%";
    $("#overallComment").textContent = overallComment(pct, total);

    // Haftalık çubuklar
    renderWeekBars();

    // Tema başarısı
    renderThemeStats();

    // Modül başarısı
    renderModeStats();

    // En çok hata yapılanlar
    renderMissedList();

    // Öneri
    $("#suggestionText").innerHTML = buildSuggestion();

    showView("reportView");
  }

  function overallComment(pct, total) {
    if (total < 10) return `Henüz ${total} soru çözdün. Birkaç tur daha sonra rapor daha anlamlı olacak.`;
    if (pct >= 90) return "Olağanüstü! Bu tempoyu koru, LGS senin için kolay olacak. 🚀";
    if (pct >= 75) return "Çok iyi gidiyorsun! Zayıf alanlara odaklanırsan mükemmel olursun. 💪";
    if (pct >= 60) return "Güzel başlangıç. Hatalı sorulara dönüp tekrar et, hızla yükselirsin. 🌱";
    if (pct >= 40) return "Henüz ısınma aşamasındasın. Her gün 20 doğru hedefini tutturmaya çalış. 🔥";
    return "Yavaş ama emin adımlarla. Pes etme, her tur seni geliştiriyor. ✨";
  }

  function renderWeekBars() {
    const wrap = $("#weekBars");
    wrap.innerHTML = "";
    const days = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
      const data = state.history[key] || { correct: 0, wrong: 0 };
      days.push({ key, d, label: ["P","P","S","Ç","P","C","C"][d.getDay()], data });
      // ^ Pazar=0 → P, Pzt=1 → P, Sal=2 → S, Çar=3 → Ç, Per=4 → P, Cum=5 → C, Ctsi=6 → C
    }
    const maxTotal = Math.max(1, ...days.map(d => d.data.correct + d.data.wrong));

    days.forEach(day => {
      const total = day.data.correct + day.data.wrong;
      const ch = total ? Math.round((day.data.correct / maxTotal) * 80) : 0;
      const wh = total ? Math.round((day.data.wrong   / maxTotal) * 80) : 0;
      const isToday = sameDay(day.d, today);
      const dayName = ["Paz","Pzt","Sal","Çar","Per","Cum","Cts"][day.d.getDay()];

      const col = document.createElement("div");
      col.className = "week-bar";
      col.innerHTML = `
        <span class="bar-count">${total || ""}</span>
        <div class="bar-stack" style="height:${ch+wh}px;">
          <div class="bar-wrong" style="height:${wh}px;"></div>
          <div class="bar-correct" style="height:${ch}px;"></div>
        </div>
        <span class="bar-day" style="${isToday ? 'color:#ffce47;font-weight:800' : ''}">${dayName}</span>
      `;
      wrap.appendChild(col);
    });
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function renderThemeStats() {
    const wrap = $("#themeStatsList");
    wrap.innerHTML = "";
    const rows = Object.entries(window.VOCAB).map(([key, t]) => {
      const s = state.themeStats[key] || { correct: 0, wrong: 0 };
      const total = s.correct + s.wrong;
      const pct = total ? Math.round((s.correct / total) * 100) : 0;
      return { key, name: t.nameTr, icon: t.icon, total, pct, s };
    });
    // Çalışılmamış olanlar listenin altına; çalışılanlarda zayıftan güçlüye sıralama
    rows.sort((a, b) => {
      if (a.total === 0 && b.total === 0) return 0;
      if (a.total === 0) return 1;
      if (b.total === 0) return -1;
      return a.pct - b.pct;
    });
    rows.forEach(r => {
      const cls = r.total === 0 ? "" : (r.pct < 50 ? "low" : r.pct < 75 ? "mid" : "high");
      const numText = r.total === 0
        ? `<span style="color:var(--muted);font-style:italic">çalışılmadı</span>`
        : `<b>${r.s.correct}</b>/${r.total} • <b>${r.pct}%</b>`;
      const row = document.createElement("div");
      row.className = "stat-row";
      row.innerHTML = `
        <span class="stat-name">${r.icon} ${escapeHtml(r.name)}</span>
        <div class="stat-bar"><div class="stat-fill ${cls}" style="width:${r.pct}%"></div></div>
        <span class="stat-num">${numText}</span>
      `;
      wrap.appendChild(row);
    });
  }

  function renderModeStats() {
    const wrap = $("#modeStatsList");
    wrap.innerHTML = "";
    const modes = [
      { key: "vocab",    name: "Kelime",     icon: "📚" },
      { key: "stem",     name: "Soru Kökü",  icon: "🎯" },
      { key: "sentence", name: "Cümle",      icon: "💬" }
    ];
    modes.forEach(m => {
      const s = state.modeStats[m.key] || { correct: 0, wrong: 0 };
      const total = s.correct + s.wrong;
      const pct = total ? Math.round((s.correct / total) * 100) : 0;
      const cls = total === 0 ? "" : (pct < 50 ? "low" : pct < 75 ? "mid" : "high");
      const numText = total === 0
        ? `<span style="color:var(--muted);font-style:italic">çalışılmadı</span>`
        : `<b>${s.correct}</b>/${total} • <b>${pct}%</b>`;
      const row = document.createElement("div");
      row.className = "stat-row";
      row.innerHTML = `
        <span class="stat-name">${m.icon} ${m.name}</span>
        <div class="stat-bar"><div class="stat-fill ${cls}" style="width:${pct}%"></div></div>
        <span class="stat-num">${numText}</span>
      `;
      wrap.appendChild(row);
    });
  }

  function renderMissedList() {
    const wrap = $("#missedList");
    wrap.innerHTML = "";
    const items = Object.values(state.missed || {})
      .filter(m => m.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
    if (items.length === 0) {
      wrap.innerHTML = `<div class="missed-empty">🎉 Henüz tekrar etmen gereken bir şey yok!</div>`;
      return;
    }
    items.forEach(m => {
      const tag = m.kind === "vocab" ? "📚" : m.kind === "stem" ? "🎯" : "💬";
      const row = document.createElement("div");
      row.className = "missed-row";
      row.innerHTML = `
        <div>
          <div class="missed-en">${tag} ${escapeHtml(m.en)}</div>
          <div class="missed-tr">→ ${escapeHtml(m.tr)}</div>
        </div>
        <div class="missed-count">${m.count} hata</div>
      `;
      wrap.appendChild(row);
    });
  }

  function buildSuggestion() {
    const themeRows = Object.entries(state.themeStats)
      .map(([k, s]) => ({ k, total: s.correct + s.wrong, pct: s.correct + s.wrong ? s.correct / (s.correct + s.wrong) : 1 }))
      .filter(r => r.total >= 5);
    const modeRows = Object.entries(state.modeStats)
      .map(([k, s]) => ({ k, total: s.correct + s.wrong, pct: s.correct + s.wrong ? s.correct / (s.correct + s.wrong) : 1 }))
      .filter(r => r.total >= 5);

    const tips = [];
    // Çalışılmamış tema var mı?
    const untouched = Object.keys(window.VOCAB).filter(k => !state.themeStats[k] || (state.themeStats[k].correct + state.themeStats[k].wrong) === 0);
    if (untouched.length > 0 && untouched.length < 10) {
      const t = window.VOCAB[untouched[0]];
      tips.push(`Henüz <b>${t.nameTr}</b> temasını hiç çalışmadın. Bir tur denemeye ne dersin?`);
    }
    if (themeRows.length) {
      themeRows.sort((a, b) => a.pct - b.pct);
      const weakest = themeRows[0];
      if (weakest.pct < 0.7) {
        const name = window.VOCAB[weakest.k]?.nameTr || weakest.k;
        tips.push(`En zayıf temam <b>${name}</b> (%${Math.round(weakest.pct*100)}). Bu temada Kelime Avı yapmaya odaklan.`);
      } else {
        tips.push(`<b>${window.VOCAB[weakest.k]?.nameTr || weakest.k}</b> bile %${Math.round(weakest.pct*100)} — harika gidiyorsun!`);
      }
    }
    if (modeRows.length) {
      modeRows.sort((a, b) => a.pct - b.pct);
      const weakMode = modeRows[0];
      if (weakMode.pct < 0.7) {
        const label = weakMode.k === "vocab" ? "Kelime" : weakMode.k === "stem" ? "Soru Kökü" : "Cümle";
        tips.push(`<b>${label}</b> modülünde başarın %${Math.round(weakMode.pct*100)}. Bugün bu modülde 1-2 tur yap.`);
      }
    }
    // Hatalı item'lar
    const missedCount = Object.values(state.missed || {}).reduce((a, m) => a + m.count, 0);
    if (missedCount >= 5) {
      tips.push(`Toplam <b>${missedCount} hatalı</b> kayıtın var. "Tekrar Etmen Gerekenler" listesindekileri ezberleyince başarın hızla yükselecek.`);
    }
    if (tips.length === 0) {
      tips.push("Harika gidiyorsun! Her gün 20 doğru hedefini tutturmaya çalış. 🌟");
    }
    return tips.map(t => `• ${t}`).join("<br>");
  }

  function checkAndUnlockBadges() {
    const newly = [];
    BADGES.forEach(b => {
      if (!state.badges[b.id] && b.check(state)) {
        state.badges[b.id] = true;
        newly.push(b);
      }
    });
    saveState();
    return newly;
  }

  /* ---------- Görünüm değiştirici ---------- */
  function showView(id) {
    ["homeView","quizView","resultView","badgesView","reportView"].forEach(v => {
      const el = document.getElementById(v);
      if (!el) return;
      if (v === id) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });
  }
  function goHome() {
    showView("homeView");
    renderThemeGrid();
    refreshTopBar();
  }

  /* ---------- Yardımcılar ---------- */
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  }

  /* ---------- Ses (Web Audio) ---------- */
  let audioCtx = null;
  function playBeep(freq, dur, type) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type || "sine";
      o.frequency.value = freq;
      g.gain.value = 0.001;
      o.connect(g); g.connect(audioCtx.destination);
      const t = audioCtx.currentTime;
      g.gain.exponentialRampToValueAtTime(0.18, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.start(t); o.stop(t + dur + 0.02);
    } catch (e) {}
  }

  /* ---------- Konfeti ---------- */
  const confettiCanvas = $("#confetti");
  const cctx = confettiCanvas.getContext("2d");
  let confettiPieces = [];
  function resizeCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function burstConfetti(intensity) {
    intensity = intensity || 1;
    const n = Math.floor(60 * intensity);
    const colors = ["#ffce47", "#ff6b9d", "#7b61ff", "#3ec1d3", "#2ecc71", "#ff9a3c"];
    for (let i = 0; i < n; i++) {
      confettiPieces.push({
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * 100,
        vx: (Math.random() - 0.5) * 6,
        vy: 2 + Math.random() * 4,
        size: 6 + Math.random() * 6,
        color: colors[Math.floor(Math.random()*colors.length)],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        life: 0
      });
    }
    if (!confettiRunning) loopConfetti();
  }
  let confettiRunning = false;
  function loopConfetti() {
    confettiRunning = true;
    cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiPieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12;
      p.rot += p.vr;
      p.life++;
      cctx.save();
      cctx.translate(p.x, p.y);
      cctx.rotate(p.rot);
      cctx.fillStyle = p.color;
      cctx.fillRect(-p.size/2, -p.size/2, p.size, p.size * 0.6);
      cctx.restore();
    });
    confettiPieces = confettiPieces.filter(p => p.y < window.innerHeight + 40 && p.life < 400);
    if (confettiPieces.length > 0) {
      requestAnimationFrame(loopConfetti);
    } else {
      confettiRunning = false;
      cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  /* ---------- Başlat ---------- */
  function init() {
    renderThemeGrid();
    setupModeButtons();
    setupPowerups();
    refreshTopBar();
  }
  init();

})();
