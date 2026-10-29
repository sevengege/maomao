(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const T=["数学","语文","英语","其他"],m={数学:{badge:"bg-sky-100 text-sky-700 border-sky-200",icon:"🔢"},语文:{badge:"bg-rose-100 text-rose-700 border-rose-200",icon:"📖"},英语:{badge:"bg-violet-100 text-violet-700 border-violet-200",icon:"🔤"},其他:{badge:"bg-amber-100 text-amber-700 border-amber-200",icon:"📝"}},j="maomao-wrong-questions-v1";function _(e){return e.masteredAt!==null}function h(){try{const e=localStorage.getItem(j);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function w(e){localStorage.setItem(j,JSON.stringify(e))}function O(e){const t=h(),s={id:`q-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,subject:e.subject,content:e.content,reason:e.reason,createdAt:Date.now(),listenedAt:null,practicedAt:null,masteredAt:null};return t.unshift(s),w(t),s}function H(e,t){const s=h(),r=s.find(o=>o.id===e);if(!r)return{question:null,justMastered:!1};r[t]=r[t]===null?Date.now():null;const n=r.masteredAt!==null,a=r.listenedAt!==null&&r.practicedAt!==null;return r.masteredAt=a?r.masteredAt??Date.now():null,w(s),{question:r,justMastered:!n&&a}}function N(e){w(h().filter(t=>t.id!==e))}function x(e){const t=new Date(e);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}function D(e){return x(e)===x(Date.now())}function Y(e){return e.filter(_).length}function I(e){const t=new Set;for(const n of e)n.masteredAt!==null&&t.add(x(n.masteredAt));const s=new Date;t.has(x(s.getTime()))||s.setDate(s.getDate()-1);let r=0;for(;t.has(x(s.getTime()));)r+=1,s.setDate(s.getDate()-1);return r}function A(e,t){return{recorded:e.filter(s=>x(s.createdAt)===t),mastered:e.filter(s=>s.masteredAt!==null&&x(s.masteredAt)===t)}}const E=["每天弄会一道错题，就是在悄悄变优秀！","错题不怕多，弄会一道是一道！","毛毛加油，今天的错题今天消灭光！","听讲解 + 做同类题，知识就长在脑子里啦！","星星一颗一颗攒，优秀一天一天来！"];let v="数学",b=0,u=null;function g(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function S(e){const t=new Date(e);return`${t.getMonth()+1}月${t.getDate()}日`}function K(){const e=new Date,t=["日","一","二","三","四","五","六"][e.getDay()];return`${e.getMonth()+1}月${e.getDate()}日 星期${t}`}const $=["一","二","三","四","五","六","日"];function M(e){return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`}function y(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()}function P(e){const t=new Date,s=t.getDay(),r=(s===0?-6:1-s)+e*7,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()+r);return Array.from({length:7},(a,o)=>new Date(n.getFullYear(),n.getMonth(),n.getDate()+o))}function F(e,t,s,r){return`
    <div class="flex items-start gap-3 rounded-3xl border-2 border-[#EFE3D0] bg-white/80 p-4">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-xl">${t}</div>
      <div>
        <p class="font-kuai text-base text-[#4A3F35]">
          <span class="mr-1 text-[#F5A623]">${e}</span>${s}
        </p>
        <p class="mt-0.5 text-xs leading-relaxed text-[#8A7B6B]">${r}</p>
      </div>
    </div>`}function q(e){const t=E[Math.floor(Math.random()*E.length)];e.innerHTML=`
  <div class="min-h-screen">
    <div class="mx-auto max-w-2xl px-4 pb-20 pt-6 sm:pt-10">

      <header class="mb-6 flex items-center justify-between">
        <div>
          <h1 class="font-kuai text-3xl text-[#4A3F35] sm:text-4xl">
            毛毛得优小计划
          </h1>
          <p class="mt-1 text-sm text-[#8A7B6B]">${K()} · 约定：每天把不会的题和错题弄会</p>
        </div>
        <div class="flex shrink-0 items-center gap-1.5 rounded-full border-2 border-[#F5A623]/40 bg-white/90 px-4 py-2">
          <span id="star-icon" class="text-xl leading-none">⭐</span>
          <span id="star-count" class="font-kuai text-xl text-[#F5A623]">0</span>
        </div>
      </header>

      <section class="mb-5 grid gap-3 sm:grid-cols-3">
        ${F("①","📒","记录错题","找到今天不会的题、做错的题，记进错题本。")}
        ${F("②","🎧","听讲解","打开洋葱数学或作业帮，听老师把这道题讲明白。")}
        ${F("③","✏️","做同类题","再找几道同样知识点的题练一练，真的学会它！")}
      </section>

      <section id="today-progress" class="mb-6"></section>

      <section id="week-calendar" class="mb-6"></section>

      <section class="mb-8 rounded-3xl border-2 border-dashed border-[#F5A623]/50 bg-white/90 p-5">
        <h2 class="font-kuai mb-3 text-lg text-[#4A3F35]">✍️ 记一道错题</h2>
        <div id="subject-pills" class="mb-3 flex flex-wrap gap-2">
          ${T.map(s=>`
            <button type="button" data-subject="${s}"
              class="subject-pill rounded-full border-2 px-4 py-1.5 text-sm transition-transform active:scale-95">
              ${m[s].icon} ${s}
            </button>`).join("")}
        </div>
        <textarea id="q-content" rows="3" placeholder="题目是什么？比如：数学练习册 P25 第 3 题，两位数乘两位数……"
          class="mb-3 w-full resize-none rounded-2xl border-2 border-[#EFE3D0] bg-[#FFFDF7] p-3 text-sm text-[#4A3F35] outline-none transition-colors placeholder:text-[#C4B5A0] focus:border-[#F5A623]"></textarea>
        <input id="q-reason" type="text" placeholder="为什么错了？（选填）比如：进位忘记加 1"
          class="mb-4 w-full rounded-2xl border-2 border-[#EFE3D0] bg-[#FFFDF7] px-3 py-2.5 text-sm text-[#4A3F35] outline-none transition-colors placeholder:text-[#C4B5A0] focus:border-[#F5A623]" />
        <button id="add-btn" type="button"
          class="w-full rounded-2xl bg-[#F5A623] py-3 font-kuai text-lg text-white shadow-[0_4px_0_#D98E0B] transition-all hover:brightness-105 active:translate-y-0.5 active:shadow-none">
          📒 记进错题本
        </button>
      </section>

      <section class="mb-8">
        <h2 class="font-kuai mb-3 text-lg text-[#4A3F35]">🔥 待攻克 <span id="pending-count" class="text-sm text-[#F4745F]"></span></h2>
        <div id="pending-list" class="grid gap-4"></div>
      </section>

      <section class="mb-8">
        <h2 class="font-kuai mb-3 text-lg text-[#4A3F35]">🏆 已攻克荣誉墙</h2>
        <div id="mastered-list" class="grid gap-3"></div>
      </section>

      <footer class="text-center">
        <p class="font-kuai text-base text-[#B09A82]">🌟 ${t} 🌟</p>
      </footer>
    </div>
  </div>`}function J(e,t,s){const r=M(e),n=A(t,r),a=y(e)>s,o=y(e)===s,l=r===u,i=n.mastered.length>0;let c="border-[#EFE3D0] bg-white/80 text-[#4A3F35] hover:border-[#F5A623]/60";i&&(c="border-[#2FBF8F]/50 bg-[#F0FBF6] text-[#4A3F35] hover:border-[#2FBF8F]"),o&&(c="border-[#F5A623] bg-[#F5A623]/10 text-[#4A3F35] hover:border-[#F5A623]"),l&&(c="border-[#F5A623] bg-[#F5A623] text-white shadow-[0_4px_12px_rgba(245,166,35,0.35)]"),a&&(c="border-[#EFE3D0]/60 bg-white/40 text-[#C4B5A0]");const f=n.recorded.length>0||n.mastered.length>0?`<span class="flex h-4 items-center justify-center gap-1 text-[10px] leading-none">
          ${n.recorded.length>0?`<span class="${l?"text-white/90":"text-[#8A7B6B]"}">📒${n.recorded.length}</span>`:""}
          ${n.mastered.length>0?`<span class="${l?"text-white":"text-[#2FBF8F]"}">⭐${n.mastered.length}</span>`:""}
        </span>`:`<span class="flex h-4 items-center justify-center text-[10px] leading-none ${l?"text-white/70":"text-[#D8C9B4]"}">·</span>`;return`
    <button type="button" data-action="pick-day" data-key="${r}" ${a?"disabled":""}
      class="flex flex-col items-center gap-0.5 rounded-2xl border-2 px-1 py-1.5 transition-all active:scale-95 ${c} ${a?"cursor-default":""}">
      <span class="text-[10px] leading-none ${l?"text-white/90":"text-[#B09A82]"}">${$[C(e)]}</span>
      <span class="font-kuai text-base leading-tight">${e.getDate()}</span>
      ${f}
    </button>`}function C(e){return(e.getDay()+6)%7}function B(e){const t=m[e.subject],s=e.content.length>30?`${e.content.slice(0,30)}…`:e.content,r=e.masteredAt!==null?'<span class="shrink-0 rounded-full bg-[#2FBF8F]/10 px-2 py-0.5 text-[10px] text-[#2FBF8F]">已攻克</span>':'<span class="shrink-0 rounded-full bg-[#F4745F]/10 px-2 py-0.5 text-[10px] text-[#F4745F]">待攻克</span>';return`
    <div class="flex items-center gap-2 rounded-xl border border-[#EFE3D0] bg-white px-3 py-2">
      <span class="text-sm">${t.icon}</span>
      <span class="min-w-0 flex-1 truncate text-xs text-[#4A3F35]">${g(s)}</span>
      ${r}
    </div>`}function Q(e){if(u===null)return"";const t=A(e,u),[s,r,n]=u.split("-").map(i=>Number(i)),a=new Date(s,r-1,n),o=`${r}月${n}日 周${$[C(a)]}`,l=[];return t.recorded.length>0&&l.push(`
      <div class="mt-3">
        <p class="mb-1.5 text-xs font-bold text-[#8A7B6B]">📒 记录了 ${t.recorded.length} 道</p>
        <div class="grid gap-1.5">${t.recorded.map(B).join("")}</div>
      </div>`),t.mastered.length>0&&l.push(`
      <div class="mt-3">
        <p class="mb-1.5 text-xs font-bold text-[#2FBF8F]">⭐ 攻克了 ${t.mastered.length} 道</p>
        <div class="grid gap-1.5">${t.mastered.map(B).join("")}</div>
      </div>`),l.length===0&&l.push('<p class="mt-3 text-center text-xs text-[#B09A82]">这一天还没有错题记录哦～</p>'),`
    <div class="card-slide-in mt-3 rounded-3xl border-2 border-[#F5A623]/30 bg-[#FFFDF7] p-4">
      <div class="flex items-center justify-between">
        <h3 class="font-kuai text-base text-[#4A3F35]">${o}的错题情况</h3>
        <button type="button" data-action="close-day"
          class="rounded-full px-2 py-0.5 text-xs text-[#C4B5A0] transition-colors hover:bg-[#F5A623]/10 hover:text-[#F5A623]">✕ 收起</button>
      </div>
      ${l.join("")}
    </div>`}function W(e){const t=document.querySelector("#week-calendar");if(!t)return;const s=P(b),r=y(new Date),n=s[0],a=s[6],o=`${n.getMonth()+1}月${n.getDate()}日 - ${a.getMonth()+1}月${a.getDate()}日`,l=s.reduce((i,c)=>i+A(e,M(c)).mastered.length,0);t.innerHTML=`
    <div class="rounded-3xl border-2 border-[#EFE3D0] bg-white/80 p-4">
      <div class="mb-2 flex items-center justify-between gap-2">
        <h2 class="font-kuai text-lg text-[#4A3F35]">📅 每周打卡日历</h2>
        <div class="flex items-center gap-1">
          <button type="button" data-action="prev-week" aria-label="上一周"
            class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#EFE3D0] bg-white text-[#8A7B6B] transition-all hover:border-[#F5A623]/60 active:scale-95">‹</button>
          <button type="button" data-action="this-week"
            class="rounded-full border-2 px-3 py-1 text-xs transition-all active:scale-95 ${b===0?"cursor-default border-[#EFE3D0] bg-[#F3E9D8] text-[#B09A82]":"border-[#EFE3D0] bg-white text-[#8A7B6B] hover:border-[#F5A623]/60"}">本周</button>
          <button type="button" data-action="next-week" aria-label="下一周"
            class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#EFE3D0] bg-white text-[#8A7B6B] transition-all hover:border-[#F5A623]/60 active:scale-95">›</button>
        </div>
      </div>
      <p class="mb-3 text-xs text-[#B09A82]">${o} · 本周攻克 <b class="text-[#2FBF8F]">${l}</b> 道</p>
      <div class="mb-1 grid grid-cols-7 gap-1">
        ${$.map(i=>`<span class="text-center text-[10px] text-[#B09A82]">${i}</span>`).join("")}
      </div>
      <div class="grid grid-cols-7 gap-1">
        ${s.map(i=>J(i,e,r)).join("")}
      </div>
      <p class="mt-2 text-center text-[10px] text-[#C4B5A0]">📒 记录数 · ⭐ 攻克数，点日期可看当天明细</p>
      ${Q(e)}
    </div>`}function k(e,t,s,r,n,a){const o=e[t]!==null;return`
    <button type="button" data-action="toggle" data-id="${e.id}" data-step="${t}"
      class="step-btn flex flex-1 items-center gap-2 rounded-2xl border-2 px-2.5 py-2 text-left transition-all active:scale-95 ${o?`${a} border-transparent text-white`:"border-[#EFE3D0] bg-[#FFFDF7] text-[#8A7B6B] hover:border-[#F5A623]/60"}">
      <span class="step-check flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-sm ${o?"border-white/70 bg-white/25 text-white":"border-[#E3D5BE] bg-white text-transparent"}">✓</span>
      <span class="min-w-0">
        <span class="block text-xs font-bold leading-tight">${s} ${r}</span>
        <span class="block truncate text-[10px] leading-tight ${o?"text-white/85":"text-[#B09A82]"}">${n}</span>
      </span>
    </button>`}function z(e){const t=m[e.subject];return`
  <article class="card-slide-in rounded-3xl border-2 border-[#EFE3D0] bg-white/90 p-4 shadow-[0_4px_16px_rgba(180,140,80,0.08)]">
    <div class="mb-2 flex items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="rounded-full border px-2.5 py-0.5 text-xs ${t.badge}">${t.icon} ${e.subject}</span>
        <span class="text-xs text-[#B09A82]">${S(e.createdAt)}记录</span>
      </div>
      <button type="button" data-action="remove" data-id="${e.id}" title="删除"
        class="rounded-full px-2 py-0.5 text-xs text-[#C4B5A0] transition-colors hover:bg-rose-50 hover:text-[#F4745F]">✕ 删除</button>
    </div>
    <p class="mb-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-[#4A3F35]">${g(e.content)}</p>
    ${e.reason?`<p class="mb-1 text-xs text-[#F4745F]">错因：${g(e.reason)}</p>`:""}
    <div class="mt-3 flex flex-col gap-2 sm:flex-row">
      <div class="flex flex-1 items-center gap-2 rounded-2xl border-2 border-transparent bg-[#2FBF8F] px-2.5 py-2 text-white">
        <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white/70 bg-white/25 text-sm text-white">✓</span>
        <span class="min-w-0">
          <span class="block text-xs font-bold leading-tight">📒 已记录</span>
          <span class="block truncate text-[10px] leading-tight text-white/85">错题进本子啦</span>
        </span>
      </div>
      ${k(e,"listenedAt","🎧","听讲解","洋葱数学/作业帮","bg-[#4EA8F0]")}
      ${k(e,"practicedAt","✏️","做同类题","找类似知识点练","bg-[#F5A623]")}
    </div>
  </article>`}function R(e){const t=m[e.subject],s=e.content.length>60?`${e.content.slice(0,60)}…`:e.content;return`
  <article class="relative overflow-hidden rounded-3xl border-2 border-[#2FBF8F]/30 bg-[#F0FBF6] p-4">
    <div class="stamp-badge font-kuai">已攻克</div>
    <div class="flex items-center gap-2">
      <span class="rounded-full border px-2.5 py-0.5 text-xs ${t.badge}">${t.icon} ${e.subject}</span>
      <span class="text-xs text-[#5FA98C]">${e.masteredAt!==null?S(e.masteredAt):""} 攻克</span>
    </div>
    <p class="mt-2 break-words text-sm leading-relaxed text-[#4A3F35]/80">${g(s)}</p>
  </article>`}function p(){const e=h(),t=e.filter(d=>d.masteredAt===null),s=e.filter(d=>d.masteredAt!==null),r=document.querySelector("#star-count");r&&(r.textContent=String(Y(e)));const n=I(e),a=e.filter(d=>D(d.createdAt)).length,o=e.filter(d=>d.masteredAt!==null&&D(d.masteredAt)).length,l=document.querySelector("#today-progress");if(l){const d=e.length===0?0:Math.round(s.length/e.length*100);l.innerHTML=`
      <div class="rounded-3xl border-2 border-[#EFE3D0] bg-white/80 p-4">
        <div class="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#8A7B6B]">
          <span>📒 今日记录 <b class="text-[#4A3F35]">${a}</b> 道</span>
          <span>⭐ 今日攻克 <b class="text-[#2FBF8F]">${o}</b> 道</span>
          <span>🔥 连续打卡 <b class="text-[#F5A623]">${n}</b> 天</span>
          <span class="ml-auto font-kuai text-[#F5A623]">${d}%</span>
        </div>
        <div class="h-3 overflow-hidden rounded-full bg-[#F3E9D8]">
          <div class="progress-bar h-full rounded-full bg-gradient-to-r from-[#F5A623] to-[#2FBF8F]" style="width:${d}%"></div>
        </div>
      </div>`}W(e);const i=document.querySelector("#pending-count");i&&(i.textContent=t.length>0?`${t.length} 道等你消灭`:"");const c=document.querySelector("#pending-list");c&&(c.innerHTML=t.length===0?`<div class="rounded-3xl border-2 border-dashed border-[#EFE3D0] bg-white/50 p-8 text-center">
             <p class="text-3xl">🎉</p>
             <p class="mt-2 font-kuai text-[#8A7B6B]">没有待攻克的错题啦，太棒了！</p>
           </div>`:t.map(z).join(""));const f=document.querySelector("#mastered-list");f&&(f.innerHTML=s.length===0?`<div class="rounded-3xl border-2 border-dashed border-[#EFE3D0] bg-white/50 p-6 text-center">
             <p class="text-sm text-[#B09A82]">攻克的错题会盖着「已攻克」印章出现在这里</p>
           </div>`:s.map(R).join(""))}function U(){const e=document.createElement("div");e.className="celebration pointer-events-none fixed inset-0 z-50 flex flex-col items-center justify-center",e.innerHTML=`
    <div class="celebrate-stamp font-kuai rounded-3xl border-4 border-[#2FBF8F] bg-white/95 px-8 py-4 text-3xl text-[#2FBF8F] shadow-[0_10px_40px_rgba(47,191,143,0.35)]">
      已攻克！+1 ⭐
    </div>
    <p class="celebrate-text font-kuai mt-4 text-lg text-[#F5A623]">毛毛太棒了，又弄会一道题！</p>`,document.body.appendChild(e);const t=document.querySelector("#star-icon");t&&(t.classList.remove("star-pop"),t.offsetWidth,t.classList.add("star-pop")),window.setTimeout(()=>e.remove(),1400)}function L(){document.querySelectorAll(".subject-pill").forEach(e=>{const t=e.dataset.subject===v;e.className=`subject-pill rounded-full border-2 px-4 py-1.5 text-sm transition-transform active:scale-95 ${t?"border-[#F5A623] bg-[#F5A623] font-bold text-white":"border-[#EFE3D0] bg-white text-[#8A7B6B] hover:border-[#F5A623]/60"}`})}function G(e){e.addEventListener("click",s=>{const r=s.target,n=r.closest("[data-subject]");if(n){v=n.dataset.subject,L();return}const a=r.closest("[data-action]");if(!a)return;const o=a.dataset.action,l=a.dataset.id??"";if(o==="toggle"){const i=a.dataset.step,{justMastered:c}=H(l,i);p(),c&&U()}else if(o==="remove")window.confirm("确定要删掉这道错题吗？")&&(N(l),p());else if(o==="prev-week")b-=1,u=null,p();else if(o==="next-week")b+=1,u=null,p();else if(o==="this-week")b!==0&&(b=0,u=null,p());else if(o==="pick-day"){const i=a.dataset.key??"";u=u===i?null:i,p()}else o==="close-day"&&(u=null,p())}),e.querySelector("#add-btn")?.addEventListener("click",()=>{const s=e.querySelector("#q-content"),r=e.querySelector("#q-reason");if(!s||!r)return;const n=s.value.trim();if(!n){s.classList.add("shake","border-[#F4745F]"),s.placeholder="先写一写是哪道题哦～",window.setTimeout(()=>s.classList.remove("shake","border-[#F4745F]"),600);return}O({subject:v,content:n,reason:r.value.trim()}),s.value="",r.value="",p()})}function V(){const e=document.querySelector("#app");e&&(q(e),L(),G(e),p())}V();
