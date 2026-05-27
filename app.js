const siteData = {
  nav: [
    { label: "作品", href: "#works" },
    { label: "关于", href: "#about" },
    { label: "联系方式", href: "#contact" },
  ],
  workGroups: [
    {
      title: "3D产品渲染",
      items: [
        { title: "小米耳机", tag: "C4D", image: "assets/01.png" },
        { title: "红米手机", tag: "C4D", image: "assets/P15.png" },
        { title: "惠普打印机", tag: "C4D", image: "assets/24Lio3_MDL_blk_06.png" },
      ],
    },
    {
      title: "3D场景渲染",
      items: [
        { title: "小米洗衣机", tag: "C4D", image: "assets/kv.png" },
        { title: "小米洗衣机", tag: "C4D", image: "assets/02.png" },
        { title: "TVC面板", tag: "C4D", image: "assets/02 (2).png" },
      ],
    },
    {
      title: "3D结构渲染",
      items: [
        { title: "布料结构", tag: "AI", image: "assets/内部/蒸汽除菌.jpg" },
        { title: "AI场景渲染", tag: "AI", image: "assets/内部/透明-1.png" },
        { title: "AI场景渲染", tag: "AI", image: "assets/内部/芯片0034.png" },
      ],
    },
    {
      title: "AI场景设计",
      items: [
        { title: "客厅投影场景", tag: "AI", image: "assets/AI/edited-image.png" },
        { title: "卧室投影仪", tag: "AI", image: "assets/AI/huaban-5806702562.png" },
        { title: "空气净化器场景", tag: "AI", image: "assets/AI/huaban-6404800931.jpg" },
      ],
    },
    {
      title: "AI场景设计",
      items: [
        { title: "露营电源套装", tag: "AI", image: "assets/AI/huaban-6728017252.png" },
        { title: "户外投影仪", tag: "AI", image: "assets/AI/huaban-6925268209.jpg" },
        { title: "荒野投影场景", tag: "AI", image: "assets/AI/huaban-7139495094.png" },
      ],
    },
  ],
  services: [
    {
      title: "1.产品3D渲染",
      text: "围绕产品外观、材质与光影进行高精度视觉呈现，适合电商、发布会与品牌传播。",
    },
    {
      title: "2.产品场景渲染",
      text: "为产品打造更具质感的使用场景和品牌氛围，适配官网、海报与推广物料。",
    },
    {
      title: "3.AI场景渲染",
      text: "结合生成式视觉与后期控制，快速输出概念氛围图、提案图与灵感方向。",
    },
    {
      title: "4.AI动态设计",
      text: "面向短视频、演示和活动物料的轻动态方案，帮助内容更容易被看见。",
    },
  ],
  aboutBlocks: [
    { title: "工作室肖像", image: "assets/肖像/1.png" },
    { title: "团队肖像", image: "assets/肖像/2.png" },
    { title: "创作者肖像", image: "assets/肖像/3.png" },
  ],
  contact: {
    actions: [
      {
        label: "加入我们",
        href: "mailto:jobs@xinghui.studio",
        icon: "mail",
        kind: "link",
      },
      {
        label: "联系我们",
        icon: "chat",
        kind: "contact",
      },
    ],
    info: [
      { term: "邮箱", detail: "1223664304@qq.com" },
      { term: "微信", detail: "o1223664304" },
    ],
    wechatId: "o1223664304",
  },
};

const pageType = document.body?.dataset?.page || "home";
const currentCasePage = Math.min(
  4,
  Math.max(1, Number.parseInt(new URLSearchParams(window.location.search).get("page") || "1", 10) || 1),
);
const homeNav = [
  { label: "作品", href: "#works" },
  { label: "关于", href: "#about" },
  { label: "联系方式", href: "#contact" },
];
const caseNav = [
  { label: "首页", href: "./index.html" },
  { label: "联系方式", action: "contact" },
];
const casePages = [
  { label: "1", href: "./cases.html?page=1" },
  { label: "2", href: "./cases.html?page=2" },
  { label: "3", href: "./cases.html?page=3" },
  { label: "4", href: "./cases.html?page=4" },
];

const caseWorkGroups = [
  {
    title: "白底",
    items: [
      { title: "智能手表", tag: "白底", image: "assets/更多案例/白底/00.png" },
      { title: "运动手表", tag: "白底", image: "assets/更多案例/白底/01.png" },
      { title: "榨汁机", tag: "白底", image: "assets/更多案例/白底/02.png" },
      { title: "手持洗地机", tag: "白底", image: "assets/更多案例/白底/07.png" },
      { title: "折叠屏手机", tag: "白底", image: "assets/更多案例/白底/20250319-162743.png" },
      { title: "喷墨打印机", tag: "白底", image: "assets/更多案例/白底/24Lio3_MDL_wht_08.png" },
      { title: "素皮手机", tag: "白底", image: "assets/更多案例/白底/P11U_牛仔素皮_反丰碑_1010.png" },
      { title: "紫色手机", tag: "白底", image: "assets/更多案例/白底/P15_Purple_IP64.png" },
      { title: "滚筒洗衣机", tag: "白底", image: "assets/更多案例/白底/打开.png" },
      { title: "蓝牙耳机", tag: "白底", image: "assets/更多案例/白底/耳机 (1).png" },
      { title: "黑色耳机", tag: "白底", image: "assets/更多案例/白底/耳机 (2).png" },
      { title: "浅蓝耳机", tag: "白底", image: "assets/更多案例/白底/耳机 (3).png" },
    ],
  },
  {
    title: "场景",
    items: [
      { title: "浴室热水器场景", tag: "场景", image: "assets/更多案例/场景/02 (3).png" },
      { title: "空调客厅场景", tag: "场景", image: "assets/更多案例/场景/05.jpg" },
      { title: "冰箱客厅场景", tag: "场景", image: "assets/更多案例/场景/1-1.jpg" },
      { title: "冰箱厨房场景", tag: "场景", image: "assets/更多案例/场景/2-1.jpg" },
      { title: "冰箱餐厅场景", tag: "场景", image: "assets/更多案例/场景/9bddf8a84db8af824cffb271394396c.jpg" },
      { title: "冰箱抽屉展示", tag: "场景", image: "assets/更多案例/场景/KV (2).png" },
      { title: "冰箱食材展示", tag: "场景", image: "assets/更多案例/场景/冰淇淋苹果.png" },
      { title: "冰箱人物场景", tag: "场景", image: "assets/更多案例/场景/产品+人物.jpg" },
      { title: "冰箱生活场景", tag: "场景", image: "assets/更多案例/场景/场景1.jpg" },
      { title: "内衣洗衣机场景", tag: "场景", image: "assets/更多案例/场景/场景2.jpg" },
      { title: "冰箱风冷展示", tag: "场景", image: "assets/更多案例/场景/风冷.png" },
      { title: "冰箱干湿分储", tag: "场景", image: "assets/更多案例/场景/干湿分储.png" },
    ],
  },
  {
    title: "暗场",
    items: [
      { title: "洗衣机生活场景", tag: "场景", image: "assets/更多案例/暗场/洗好衣物只需一盏茶时间-场景复用需要替换产品.jpg" },
      { title: "洗衣机场景", tag: "场景", image: "assets/更多案例/暗场/aa9008.jpg" },
      { title: "冰箱臻品母婴", tag: "场景", image: "assets/更多案例/暗场/臻品母婴.png" },
      { title: "洗碗机场景", tag: "场景", image: "assets/更多案例/暗场/01.jpg" },
      { title: "立式空调场", tag: "场景", image: "assets/更多案例/暗场/01_0088.png" },
      { title: "笔记本电脑", tag: "场景", image: "assets/更多案例/暗场/01-1.png" },
      { title: "唱片机结构", tag: "场景", image: "assets/更多案例/暗场/双泵_i3.jpg" },
      { title: "建筑外观", tag: "场景", image: "assets/更多案例/其他/01 (3).png" },
      { title: "投影仪结构", tag: "场景", image: "assets/更多案例/暗场/15_i9.png" },
      { title: "蓝牙耳机", tag: "场景", image: "assets/更多案例/暗场/image (1).png" },
      { title: "耳机组合", tag: "场景", image: "assets/更多案例/暗场/kv-1107.jpg" },
      { title: "电动车交互场景", tag: "场景", image: "assets/更多案例/暗场/01-2.png" },
    ],
  },
  {
    title: "其他",
    items: [
      { title: "跑车渲染", tag: "C4D", image: "assets/更多案例/其他/002.jpg" },
      { title: "洗碗机内部场景", tag: "C4D", image: "assets/更多案例/暗场/04.jpg" },
      { title: "浴室热水器场景", tag: "C4D", image: "assets/更多案例/其他/01 (4).png" },
      { title: "手表组合", tag: "C4D", image: "assets/更多案例/其他/手表.png" },
      { title: "厨房烟机场景", tag: "C4D", image: "assets/更多案例/其他/1.png" },
      { title: "油烟机产品场景", tag: "C4D", image: "assets/更多案例/其他/2.png" },
      { title: "蒸烤箱场景", tag: "C4D", image: "assets/更多案例/其他/3 (2).png" },
      { title: "厨房灶具场景", tag: "C4D", image: "assets/更多案例/其他/3 (3).png" },
      { title: "跑车公路场景", tag: "C4D", image: "assets/更多案例/其他/车0046.png" },
      { title: "洗衣机内筒", tag: "C4D", image: "assets/更多案例/其他/桶自洁_i3.png" },
      { title: "芯片结构", tag: "C4D", image: "assets/更多案例/其他/芯片3.png" },
      { title: "冰箱搁架", tag: "C4D", image: "assets/更多案例/其他/樱桃_i1.png" },
    ],
  },
];

const icons = {
  mail: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="m3 7 9 6 9-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  chat: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.5 6.5h13A2.5 2.5 0 0 1 21 9v5a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 3v-3H5.5A2.5 2.5 0 0 1 3 14V9a2.5 2.5 0 0 1 2.5-2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>
  `,
};

const els = {
  siteNav: document.getElementById("siteNav"),
  workGroups: document.getElementById("workGroups"),
  serviceGrid: document.getElementById("serviceGrid"),
  aboutGallery: document.getElementById("aboutGallery"),
  contactActions: document.getElementById("contactActions"),
  contactInfo: document.getElementById("contactInfo"),
  casePagination: document.getElementById("casePagination"),
  previewModal: document.getElementById("previewModal"),
  previewImage: document.getElementById("previewImage"),
  previewTitle: document.getElementById("previewTitle"),
  previewMeta: document.getElementById("previewMeta"),
  contactModal: document.getElementById("contactModal"),
  contactQrImage: document.getElementById("contactQrImage"),
  contactQrTitle: document.getElementById("contactQrTitle"),
  contactQrMeta: document.getElementById("contactQrMeta"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function iconMarkup(name) {
  return icons[name] || "";
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = Math.imul(state ^ (state >>> 15), state | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function buildQrDataUri(value) {
  const size = 29;
  const cell = 12;
  const margin = 18;
  const total = size * cell + margin * 2;
  const grid = Array.from({ length: size }, () => Array(size).fill(false));
  const rand = seededRandom(hashString(value));
  const reserve = (x0, y0, boxSize) => {
    for (let y = y0; y < y0 + boxSize; y += 1) {
      for (let x = x0; x < x0 + boxSize; x += 1) {
        if (grid[y] && grid[y][x] !== undefined) grid[y][x] = true;
      }
    }
  };

  const drawFinder = (x0, y0) => {
    for (let y = 0; y < 7; y += 1) {
      for (let x = 0; x < 7; x += 1) {
        const isBorder = x === 0 || x === 6 || y === 0 || y === 6;
        const isCenter = x >= 2 && x <= 4 && y >= 2 && y <= 4;
        grid[y0 + y][x0 + x] = isBorder || isCenter;
      }
    }
  };

  drawFinder(0, 0);
  drawFinder(size - 7, 0);
  drawFinder(0, size - 7);
  reserve(8, 0, 5);
  reserve(0, 8, 5);
  reserve(size - 8, 8, 5);
  reserve(8, size - 8, 5);

  for (let i = 8; i < size - 8; i += 1) {
    grid[6][i] = i % 2 === 0;
    grid[i][6] = i % 2 === 0;
  }

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (grid[y][x] !== false) continue;
      if (x === 6 || y === 6) continue;
      const proximity = Math.min(
        Math.abs(x - 14),
        Math.abs(y - 14),
      );
      const threshold = 0.34 + Math.max(0, 0.08 - proximity * 0.005);
      grid[y][x] = rand() > threshold;
    }
  }

  grid[14][14] = true;
  grid[14][15] = true;
  grid[15][14] = true;
  grid[15][15] = true;

  const modules = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (!grid[y][x]) continue;
      modules.push(`<rect x="${margin + x * cell}" y="${margin + y * cell}" width="${cell}" height="${cell}" fill="#111111" rx="1.5" ry="1.5" />`);
    }
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="${total}" viewBox="0 0 ${total} ${total}">
      <rect width="100%" height="100%" fill="#ffffff" />
      <rect x="10" y="10" width="${total - 20}" height="${total - 20}" rx="20" ry="20" fill="#f8f8f8" />
      ${modules.join("")}
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function placeholderImage(title, tag) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1096" viewBox="0 0 1600 1096">
      <rect width="1600" height="1096" fill="#444444"/>
      <text x="80" y="978" fill="#777777" font-family="Arial, sans-serif" font-size="42">${escapeHtml(title)}</text>
      <text x="80" y="1035" fill="#777777" font-family="Arial, sans-serif" font-size="30">${escapeHtml(tag)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderNav() {
  const navItems = pageType === "cases" ? caseNav : homeNav;
  els.siteNav.innerHTML = navItems
    .map((item) => {
      if (item.action === "contact") {
        return `<button type="button" class="site-nav-btn" data-open-contact="true">${escapeHtml(item.label)}</button>`;
      }
      return `<a href="${escapeAttr(item.href)}">${escapeHtml(item.label)}</a>`;
    })
    .join("");
}

function renderWorkGroups() {
  if (pageType === "cases") {
    const group = caseWorkGroups[currentCasePage - 1];
    const caseItems = group ? group.items.slice(0, 12) : [];

    els.workGroups.innerHTML = group
      ? `
        <section class="work-group case-group" aria-label="${escapeAttr(group.title)}">
          <div class="work-grid">
            ${caseItems
              .map((item) => {
                const previewSrc = item.image || placeholderImage(item.title, item.tag);
                const media = item.image
                  ? `<div class="work-media"><img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.title)}" loading="lazy" /></div>`
                  : `<div class="work-media" role="img" aria-label="${escapeAttr(item.title)} 图片占位"></div>`;

                return `
                  <button
                    class="work-card"
                    type="button"
                    data-preview-src="${escapeAttr(previewSrc)}"
                    data-preview-title="${escapeAttr(item.title)}"
                    data-preview-meta="${escapeAttr(item.tag)}"
                    aria-label="查看 ${escapeAttr(item.title)} 原始大图"
                  >
                    ${media}
                    <div class="work-caption">
                      <strong>${escapeHtml(item.title)}</strong>
                      <span>${escapeHtml(item.tag)}</span>
                    </div>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `
      : "";

    if (els.casePagination) {
      els.casePagination.innerHTML = casePages
        .map((item, index) => {
          const active = index + 1 === currentCasePage ? "is-active" : "";
          return `<a class="pagination-link ${active}" href="${escapeAttr(item.href)}">${escapeHtml(item.label)}</a>`;
        })
        .join("");
    }
    return;
  }

  els.workGroups.innerHTML = siteData.workGroups
    .map(
      (group, index) => `
        <section class="work-group" aria-labelledby="work-group-${index}">
          <h2 id="work-group-${index}">${escapeHtml(group.title)}</h2>
          <div class="work-grid">
            ${group.items
              .map((item) => {
                const previewSrc = item.image || placeholderImage(item.title, item.tag);
                const media = item.image
                  ? `<div class="work-media"><img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.title)}" loading="lazy" /></div>`
                  : `<div class="work-media" role="img" aria-label="${escapeAttr(item.title)} 图片占位"></div>`;

                return `
                  <button
                    class="work-card"
                    type="button"
                    data-preview-src="${escapeAttr(previewSrc)}"
                    data-preview-title="${escapeAttr(item.title)}"
                    data-preview-meta="${escapeAttr(item.tag)}"
                    aria-label="查看 ${escapeAttr(item.title)} 原始大图"
                  >
                    ${media}
                    <div class="work-caption">
                      <strong>${escapeHtml(item.title)}</strong>
                      <span>${escapeHtml(item.tag)}</span>
                    </div>
                  </button>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderServices() {
  if (pageType !== "home" || !els.serviceGrid) return;
  els.serviceGrid.innerHTML = siteData.services
    .map(
      (item) => `
        <article class="service-item">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `,
    )
    .join("");
}

function renderAboutGallery() {
  if (pageType !== "home" || !els.aboutGallery) return;
  els.aboutGallery.innerHTML = siteData.aboutBlocks
    .map((item) => {
      if (item.image) {
        return `
          <div class="about-block">
            <img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.title)}" loading="lazy" />
          </div>
        `;
      }

      return `<div class="about-block" role="img" aria-label="${escapeAttr(item.title)} 图片占位"></div>`;
    })
    .join("");
}

function renderContact() {
  if (pageType !== "home" || !els.contactActions || !els.contactInfo) return;
  els.contactActions.innerHTML = siteData.contact.actions
    .map(
      (item) => `
        ${item.kind === "contact"
          ? `<button class="action-btn" type="button" data-open-contact="true">
              ${iconMarkup(item.icon)}
              <span>${escapeHtml(item.label)}</span>
            </button>`
          : `<a class="action-btn" href="${escapeAttr(item.href)}">
              ${iconMarkup(item.icon)}
              <span>${escapeHtml(item.label)}</span>
            </a>`
        }
      `,
    )
    .join("");

  els.contactInfo.innerHTML = siteData.contact.info
    .map(
      (item) => `
        <div>
          <dt>${escapeHtml(item.term)}</dt>
          <dd>${escapeHtml(item.detail)}</dd>
        </div>
      `,
    )
    .join("");
}

function openContactModal() {
  if (!els.contactModal) return;
  els.contactQrImage.src = "assets/wechat.jpg";
  els.contactQrImage.alt = `微信二维码 ${siteData.contact.wechatId}`;
  els.contactQrTitle.textContent = "微信二维码";
  els.contactQrMeta.textContent = siteData.contact.wechatId;
  els.contactModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeContactModal() {
  if (!els.contactModal) return;
  els.contactModal.hidden = true;
  els.contactQrImage.removeAttribute("src");
  document.body.classList.remove("modal-open");
}

function openPreview(card) {
  if (!els.previewModal) return;
  els.previewImage.src = card.dataset.previewSrc || "";
  els.previewImage.alt = card.dataset.previewTitle || "";
  els.previewTitle.textContent = card.dataset.previewTitle || "";
  els.previewMeta.textContent = card.dataset.previewMeta || "";
  els.previewModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closePreview() {
  if (!els.previewModal) return;
  els.previewModal.hidden = true;
  els.previewImage.removeAttribute("src");
  document.body.classList.remove("modal-open");
}

function enablePreviewModal() {
  document.addEventListener("click", (event) => {
    const card = event.target.closest(".work-card");
    if (card) {
      openPreview(card);
      return;
    }

    if (event.target.closest("[data-close-preview='true']")) {
      closePreview();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && els.previewModal && !els.previewModal.hidden) {
      closePreview();
    }
  });
}

function enableContactModal() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-contact='true']")) {
      openContactModal();
      return;
    }

    if (event.target.closest("[data-close-contact='true']")) {
      closeContactModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && els.contactModal && !els.contactModal.hidden) {
      closeContactModal();
    }
  });
}

function enableSmoothAnchors() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", hash);
  });
}

function protectImages() {
  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest("img, .work-card, .work-media, .about-block, .preview-media")) {
      event.preventDefault();
    }
  });

  document.addEventListener("dragstart", (event) => {
    if (event.target.closest("img")) {
      event.preventDefault();
    }
  });
}

renderNav();
renderWorkGroups();
renderServices();
renderAboutGallery();
renderContact();
enablePreviewModal();
enableContactModal();
enableSmoothAnchors();
protectImages();
