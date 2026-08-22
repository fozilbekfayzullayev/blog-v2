// lib/readTime.ts

type LexicalNode = {
  text?: string;
  children?: LexicalNode[];
  [key: string]: unknown;
};

type LexicalContent = {
  root?: {
    children?: LexicalNode[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

function extractTextFromLexical(
  content: LexicalContent | null | undefined,
): string {
  if (!content?.root?.children) return "";

  function traverse(nodes: LexicalNode[]): string {
    return nodes
      .map((node) => {
        if (typeof node.text === "string") return node.text;
        if (Array.isArray(node.children)) return traverse(node.children);
        return "";
      })
      .join(" ");
  }

  return traverse(content.root.children);
}

export function calculateReadTime(
  content: LexicalContent | null | undefined,
): number {
  const text = extractTextFromLexical(content);
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}
