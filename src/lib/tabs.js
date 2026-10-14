// WAI-ARIA tabs keyboard support: Left/Right move selection and focus between sibling tabs.
// Tabs must carry data-tab={key}.
export function onTabKeyDown(event, keys, active, select) {
  const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
  if (!step) return;
  event.preventDefault();
  const next = keys[(keys.indexOf(active) + step + keys.length) % keys.length];
  select(next);
  event.currentTarget.parentElement.querySelector(`[data-tab="${next}"]`)?.focus();
}
