import "emoji-log";
import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
  console.emoji("🦄", "onInstalled....");
});

browser.runtime.onMessage.addListener((message, sender) => {
  console.emoji("🦄", "onMessage....", message, sender);
});
