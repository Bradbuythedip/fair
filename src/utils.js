import { marked } from 'marked';

export async function loadMarkdown(path) {
  const response = await fetch(path);
  const text = await response.text();
  return marked(text);
}