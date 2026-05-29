"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProseContentProps {
  content: string;
}

function CodeBlock({ language, value }: { language: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-border my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/60 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground">{language || "code"}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-teal-500" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Копирано!" : "Копирай"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          fontSize: "0.875rem",
          background: "hsl(var(--muted) / 0.3)",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}

// Strip {#anchor-id} from heading text and use it as the element id
function parseHeading(children: React.ReactNode): { id?: string; text: React.ReactNode } {
  if (typeof children === "string") {
    const match = children.match(/^(.*?)\s*\{#([^}]+)\}\s*$/);
    if (match) return { id: match[2], text: match[1].trim() };
  }
  if (Array.isArray(children)) {
    const last = children[children.length - 1];
    if (typeof last === "string") {
      const match = last.match(/^(.*?)\s*\{#([^}]+)\}\s*$/);
      if (match) {
        const rest = [...children.slice(0, -1), match[1].trim()].filter(Boolean);
        return { id: match[2], text: rest };
      }
    }
  }
  return { text: children };
}

export function ProseContent({ content }: ProseContentProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none
      prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-24
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/60
      prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
      prose-p:text-muted-foreground prose-p:leading-relaxed
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-foreground prose-strong:font-semibold
      prose-code:bg-muted/60 prose-code:text-foreground prose-code:rounded-md prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono
      prose-code:before:content-none prose-code:after:content-none
      prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-0
      prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
      prose-blockquote:text-foreground
      prose-table:text-sm
      prose-th:text-left prose-th:font-semibold prose-th:text-foreground
      prose-td:text-muted-foreground
      prose-li:text-muted-foreground
      prose-hr:border-border"
    >
      <ReactMarkdown
        components={{
          h1({ children }: any) {
            const { id, text } = parseHeading(children);
            return <h1 id={id} className="scroll-mt-24">{text}</h1>;
          },
          h2({ children }: any) {
            const { id, text } = parseHeading(children);
            return <h2 id={id} className="scroll-mt-24">{text}</h2>;
          },
          h3({ children }: any) {
            const { id, text } = parseHeading(children);
            return <h3 id={id} className="scroll-mt-24">{text}</h3>;
          },
          h4({ children }: any) {
            const { id, text } = parseHeading(children);
            return <h4 id={id} className="scroll-mt-24">{text}</h4>;
          },
          code({ node, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match;
            return isInline ? (
              <code className={className} {...props}>{children}</code>
            ) : (
              <CodeBlock language={match[1]} value={String(children).replace(/\n$/, "")} />
            );
          },
          pre({ children }: any) {
            return <>{children}</>;
          },
          a({ href, children }: any) {
            const isExternal = href?.startsWith("http");
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1"
              >
                {children}
                {isExternal && <ExternalLink className="h-3 w-3 inline" />}
              </a>
            );
          },
          table({ children }: any) {
            return (
              <div className="overflow-x-auto my-6 rounded-xl border border-border">
                <table className="w-full border-collapse">{children}</table>
              </div>
            );
          },
          th({ children }: any) {
            return (
              <th className="bg-muted/50 px-4 py-3 text-left text-sm font-semibold text-foreground border-b border-border">
                {children}
              </th>
            );
          },
          td({ children }: any) {
            return (
              <td className="px-4 py-3 text-sm text-muted-foreground border-b border-border/40">
                {children}
              </td>
            );
          },
          blockquote({ children }: any) {
            return (
              <blockquote className="my-6 pl-4 border-l-4 border-primary bg-primary/5 rounded-r-xl py-3 pr-4">
                {children}
              </blockquote>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
