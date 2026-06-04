// Shared copy loader. Pulls universal rendered text from content.json (symlinked
// from _shared/) and injects it into [data-copy] / [data-copy-split] hooks.
// Edit the copy once in _shared/content.json; every version that loads this updates.
(async () => {
  let data;
  try {
    const res = await fetch("content.json", { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    data = await res.json();
  } catch (err) {
    console.error("[content] failed to load content.json:", err);
    return;
  }

  const get = (path) =>
    path.split(".").reduce((o, k) => (o == null ? o : o[k]), data);

  // Plain text: element's full text content becomes the resolved string.
  document.querySelectorAll("[data-copy]").forEach((el) => {
    const val = get(el.getAttribute("data-copy"));
    if (val != null) el.textContent = val;
  });

  // Headline: split into staggered word-spans (200ms start, +80ms each, trailing
  // bullet on the last word) so a version's reveal animation survives the swap.
  document.querySelectorAll("[data-copy-split]").forEach((el) => {
    const val = get(el.getAttribute("data-copy-split"));
    if (val == null) return;
    const words = String(val).trim().split(/\s+/);
    el.innerHTML = words
      .map((w, i) => {
        const delay = 200 + i * 80;
        const bullet =
          i === words.length - 1 ? '<span class="bullet">•</span>' : "";
        return `<span class="word"><span style="animation-delay:${delay}ms">${w}${bullet}</span></span>`;
      })
      .join("\n");
  });
})();
