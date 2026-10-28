/* Prototipe - interaksi ringan (vanilla JS, tanpa library) */
(function () {
  "use strict";

  // ---------- Ikon SVG (gaya Lucide) ----------
  const P = {
    back: '<path d="m15 18-6-6 6-6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    bag: '<path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    store: '<path d="M4 9 5.5 4h13L20 9"/><path d="M4 9h16v2a3 3 0 0 1-5 2 3 3 0 0 1-6 0 3 3 0 0 1-5-2z"/><path d="M5 13v7h14v-7"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/>',
    bell: '<path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    wallet: '<path d="M3 7a2 2 0 0 1 2-2h13v4"/><path d="M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2"/><circle cx="16" cy="14.5" r="1.3"/>',
    bike: '<circle cx="5.5" cy="17" r="3.5"/><circle cx="18.5" cy="17" r="3.5"/><path d="M5.5 17 9 9h5l4.5 8"/><path d="M14 9l-1-3h3"/>',
    truck: '<path d="M3 6h11v10H3z"/><path d="M14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    utensils: '<path d="M4 3v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M6 13v8"/><path d="M17 3c-2 0-3 2-3 5s1 4 3 4v9"/>',
    receipt: '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
    handshake: '<path d="m11 17 2 2a1.5 1.5 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.5 1.5 0 0 0 2-2L13 9l-2 2a1.5 1.5 0 0 1-2-2l3-3h3l5 5"/><path d="M3 11l5-5 3 1"/><path d="M3 11l5 5 1.5 1.5a1.5 1.5 0 0 0 2-2"/>',
    qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
    package: '<path d="m12 3 9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    bank: '<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    signal: '<path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/>',
    wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01"/>',
    battery: '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/><rect x="4" y="9" width="12" height="6" rx="1" fill="currentColor" stroke="none"/>'
  };
  const svg = (name) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || "") + "</svg>";

  // Emoji lama di bottom nav -> ikon SVG
  const EMOJI = {
    "🏠": "home", "📦": "bag", "🕘": "clock", "👤": "user", "🏪": "store", "📋": "list",
    "🔔": "bell", "💰": "wallet", "🛵": "bike", "🚚": "truck", "💳": "card"
  };

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const rp = (n) => "Rp " + Math.max(0, Math.round(n)).toLocaleString("id-ID");
  const num = (s) => parseInt(String(s).replace(/[^\d]/g, ""), 10) || 0;
  const now = () => new Date().toTimeString().slice(0, 5);

  // ---------- Toast ----------
  let toastEl, toastT;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove("show"), 2000);
  }
  window.protoToast = toast;

  document.addEventListener("DOMContentLoaded", () => {
    const app = $(".app");

    // Status bar ala HP (tampil hanya di frame desktop via CSS)
    if (app) {
      const sb = document.createElement("div");
      sb.className = "statusbar";
      sb.innerHTML = '<span>' + now() + '</span><span class="notch"></span><span class="sys">' + svg("signal") + svg("wifi") + svg("battery") + "</span>";
      app.prepend(sb);
    }

    // Ikon
    $$(".back").forEach((b) => {
      const t = b.textContent.trim();
      if (t === "‹") b.innerHTML = svg("back");
      else if (t === "☰") b.innerHTML = svg("grid");
      if (!b.getAttribute("aria-label")) b.setAttribute("aria-label", t === "☰" ? "Daftar isi" : "Kembali");
    });
    $$(".bottom-nav .i").forEach((i) => { const k = EMOJI[i.textContent.trim()]; if (k) i.innerHTML = svg(k); });
    $$("[data-i]").forEach((el) => { el.innerHTML = svg(el.dataset.i); });

    // Switch
    $$(".switch").forEach((s) => s.addEventListener("click", () => {
      s.classList.toggle("on");
      const lbl = s.dataset.on && s.dataset.off ? (s.classList.contains("on") ? s.dataset.on : s.dataset.off) : null;
      const target = s.dataset.label ? $(s.dataset.label) : null;
      if (target && lbl) target.textContent = lbl;
      toast(s.classList.contains("on") ? "Diaktifkan" : "Dinonaktifkan");
    }));

    // Chips & tabs
    $$(".chips").forEach((g) => g.addEventListener("click", (e) => {
      const c = e.target.closest(".chip"); if (!c) return;
      $$(".chip", g).forEach((x) => x.classList.remove("on")); c.classList.add("on");
    }));
    $$(".tabs").forEach((g) => g.addEventListener("click", (e) => {
      const c = e.target.closest(".tabs > div"); if (!c) return;
      $$(":scope > div", g).forEach((x) => x.classList.remove("on")); c.classList.add("on");
    }));

    // Upload
    $$(".upload").forEach((u) => u.addEventListener("click", () => {
      if (u.classList.contains("done")) return;
      u.classList.add("done");
      u.innerHTML = "✓ File terunggah · bukti_" + Math.floor(Math.random() * 9000 + 1000) + ".jpg";
    }));

    // ---------- Keranjang (usaha.html) ----------
    const cartBar = $("#cartBar");
    function updateCart() {
      if (!cartBar) return;
      let items = 0, total = 0;
      $$("[data-price]").forEach((row) => {
        const q = $(".qty span:nth-child(2)", row);
        const n = q ? num(q.textContent) : 0;
        items += n; total += n * num(row.dataset.price);
      });
      $(".cnt", cartBar).textContent = items + " item";
      $(".sum", cartBar).textContent = rp(total);
      cartBar.classList.toggle("disabled", items === 0);
    }
    function qtyHtml(n) { return '<div class="qty"><span>−</span><span>' + n + "</span><span>+</span></div>"; }
    document.addEventListener("click", (e) => {
      const add = e.target.closest(".add-btn");
      if (add) {
        add.outerHTML = qtyHtml(1); updateCart(); toast("Ditambahkan ke keranjang"); return;
      }
      const ctl = e.target.closest(".qty span:first-child, .qty span:last-child");
      if (!ctl) return;
      const box = ctl.parentElement, val = box.children[1];
      let n = num(val.textContent) + (ctl === box.lastElementChild ? 1 : -1);
      const row = box.closest("[data-price]");
      if (n <= 0 && row) { box.outerHTML = '<span class="btn sm add-btn">+ Tambah</span>'; updateCart(); return; }
      val.textContent = Math.max(1, n); updateCart();
    });
    updateCart();

    // ---------- Pilihan bayar (checkout.html) ----------
    const payOpts = $$(".pay-opt");
    function setPay(o) {
      payOpts.forEach((x) => { x.classList.remove("on"); const r = $("input", x); if (r) r.checked = false; });
      o.classList.add("on"); const r = $("input", o); if (r) r.checked = true;
      const notice = $("#payNotice"), btn = $("#orderBtn");
      if (o.dataset.pay === "qris") {
        if (notice) notice.innerHTML = "Bayar ke QRIS perusahaan dengan nominal + kode unik, lalu unggah bukti dalam 15 menit.";
        if (btn) { btn.href = "bayar-qris.html"; btn.textContent = "Lanjut bayar QRIS"; }
      } else {
        if (notice) notice.innerHTML = "Tunai: bayar makanan ke penjual dan ongkir ke driver. Hanya bisa jika batas utang mitra belum terlampaui.";
        if (btn) { btn.href = "pesanan.html"; btn.textContent = "Pesan sekarang"; }
      }
    }
    payOpts.forEach((o) => o.addEventListener("click", () => setPay(o)));
    const firstOn = payOpts.find((o) => o.classList.contains("on"));
    if (firstOn) setPay(firstOn);

    // ---------- Countdown QRIS ----------
    $$("[data-countdown]").forEach((t) => {
      let s = num(t.dataset.countdown);
      const tick = () => {
        const m = String(Math.floor(s / 60)).padStart(2, "0"), d = String(s % 60).padStart(2, "0");
        t.textContent = m + ":" + d;
        if (s <= 0) { clearInterval(iv); t.textContent = "Kedaluwarsa"; toast("Waktu habis, pesanan kedaluwarsa"); }
        s--;
      };
      const iv = setInterval(tick, 1000); tick();
    });

    // Salin nominal
    $$("[data-copy]").forEach((c) => c.addEventListener("click", () => {
      if (navigator.clipboard) navigator.clipboard.writeText(c.dataset.copy).catch(() => {});
      toast("Nominal disalin: " + rp(num(c.dataset.copy)));
    }));

    // ---------- Validasi tawaran (pembeli & driver) ----------
    $$("[data-floor]").forEach((inp) => {
      const floor = num(inp.dataset.floor);
      const hint = $(inp.dataset.hint), btn = $(inp.dataset.btn);
      const comm = $(inp.dataset.comm || "#none"), net = $(inp.dataset.net || "#none"), pct = num(inp.dataset.pct || 20);
      const check = () => {
        const v = num(inp.value);
        inp.value = v ? v.toLocaleString("id-ID") : "";
        const bad = v < floor;
        inp.classList.toggle("error", bad);
        if (hint) { hint.classList.toggle("error", bad); hint.textContent = bad ? "Terlalu rendah. Minimal " + rp(floor) + "." : "Minimal " + rp(floor) + " · OK"; }
        if (btn) btn.classList.toggle("disabled", bad);
        const c = Math.round(v * pct / 100);
        if (comm) comm.textContent = rp(c);
        if (net) net.textContent = rp(v - c);
        $$("[data-mirror='" + inp.id + "']").forEach((m) => (m.textContent = rp(v)));
      };
      inp.addEventListener("input", check); check();
    });

    // ---------- Chat ----------
    $$(".chat-input").forEach((bar) => {
      const inp = $("input", bar), send = $(".btn", bar);
      const chats = $$(".chat"); const chat = chats[chats.length - 1];
      const go = () => {
        const v = inp.value.trim(); if (!v || !chat) return;
        const b = document.createElement("div"); b.className = "bubble out";
        b.textContent = v; const t = document.createElement("div"); t.className = "t"; t.textContent = now() + " ✓✓"; b.appendChild(t);
        chat.appendChild(b); inp.value = ""; b.scrollIntoView({ behavior: "smooth", block: "end" });
      };
      send.addEventListener("click", go);
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
    });

    // ---------- Toast untuk tombol aksi (non-link) ----------
    document.addEventListener("click", (e) => {
      const b = e.target.closest("span.btn, button.btn");
      if (!b || b.closest(".chat-input") || b.classList.contains("add-btn")) return;
      toast(b.dataset.toast || (b.textContent.trim() + " ✓"));
    });
  });
})();
