"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ─── Types ─── */
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  error?: boolean;
}

/* ─── API Config ─── */
const WEBHOOK_URL = "/api/chat";
const TIMEOUT_MS = 360000;

/* ─── Suggested Questions ─── */
const SUGGESTIONS = [
  "Which Galaxy Pro model is right for my business?",
  "Tell me about your Lease & Learn program",
  "Do you offer gelato catering for events?",
];

const WELCOME_MESSAGE =
  "Welcome to Miles Ice Tech! I'm here to help you find the perfect gelato machine for your business — from choosing the right Galaxy Pro model to leasing options and catering. How can I help you today?";

/* ─── Helper: Generate Session ID ─── */
function getSessionId(): string {
  let sid = sessionStorage.getItem("miles_session_id");
  if (!sid) {
    sid =
      "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem("miles_session_id", sid);
  }
  return sid;
}

/* ─── Helper: Format Time ─── */
function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ─── Helper: Unique ID ─── */
function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
}

/* ─── Icons (inline SVGs) ─── */
function ChatIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function MinimizeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function RetryIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  );
}

/* ─── Gelato Icon for avatar ─── */
function GelatoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 6.5 5 7 5 9.5C5 11.5 6.5 13 8 13.5L9.5 22H14.5L16 13.5C17.5 13 19 11.5 19 9.5C19 7 16.5 6.5 16.5 6.5C16.5 4 14.5 2 12 2Z"
        fill="white"
        strokeWidth="0"
      />
    </svg>
  );
}

/* ─── Status Indicator (progressive messages) ─── */
function StatusIndicator({ message }: { message: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "4px 16px" }}>
      <div style={styles.avatar}>
        <GelatoIcon />
      </div>
      <div style={styles.botBubble}>
        <span
          style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: "1.5" }}
          dangerouslySetInnerHTML={{
            __html:
              message +
              '&nbsp;<span class="miles-dot miles-dot-1"></span><span class="miles-dot miles-dot-2"></span><span class="miles-dot miles-dot-3"></span>',
          }}
        />
      </div>
    </div>
  );
}

/* ─── Message Bubble ─── */
function MessageBubble({
  msg,
  onRetry,
}: {
  msg: Message;
  onRetry?: () => void;
}) {
  const isBot = msg.role === "assistant";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "8px",
        padding: "4px 16px",
        justifyContent: isBot ? "flex-start" : "flex-end",
      }}
    >
      {isBot && (
        <div style={{ ...styles.avatar, marginBottom: "20px" }}>
          <GelatoIcon />
        </div>
      )}
      <div style={{ maxWidth: "80%", display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div
          style={{
            padding: "10px 16px",
            fontSize: "13.5px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "anywhere" as const,
            ...(isBot
              ? {
                  background: "var(--bg-warm)",
                  color: "var(--text-primary)",
                  borderRadius: "16px 16px 16px 4px",
                }
              : {
                  background: "var(--accent)",
                  color: "#ffffff",
                  borderRadius: "16px 16px 4px 16px",
                }),
            ...(msg.error
              ? { border: "1px solid rgba(220, 38, 38, 0.3)", background: "#fef2f2" }
              : {}),
          }}
        >
          {msg.error ? (
            <span dangerouslySetInnerHTML={{ __html: msg.content }} />
          ) : (
            msg.content
          )}
          {msg.error && onRetry && (
            <button
              onClick={onRetry}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "8px",
                fontSize: "12px",
                fontWeight: 500,
                color: "#dc2626",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <RetryIcon />
              Retry
            </button>
          )}
        </div>
        <span
          style={{
            fontSize: "10px",
            color: "var(--text-muted)",
            marginTop: "4px",
            textAlign: isBot ? "left" : "right",
          }}
        >
          {formatTime(msg.timestamp)}
        </span>
      </div>
    </div>
  );
}

/* ─── Main Widget Component ─── */
export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [hasUnread, setHasUnread] = useState(false);
  const [unreadType, setUnreadType] = useState<"success" | "error">("success");
  const [textareaOverflow, setTextareaOverflow] = useState(false);
  const [waitStatus, setWaitStatus] = useState("Thinking");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sessionIdRef = useRef<string>("");
  const waitTimerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    sessionIdRef.current = getSessionId();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, waitStatus]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 350);
      setHasUnread(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: uid(),
          role: "assistant",
          content: WELCOME_MESSAGE,
          timestamp: new Date(),
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const userMsg: Message = {
        id: uid(),
        role: "user",
        content: text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setShowSuggestions(false);
      setIsLoading(true);
      setWaitStatus("Thinking");
      waitTimerRef.current.forEach(clearTimeout);
      waitTimerRef.current = [];

      waitTimerRef.current.push(
        setTimeout(() => setWaitStatus("Still working on your answer"), 30000)
      );
      waitTimerRef.current.push(
        setTimeout(() => setWaitStatus("Almost there, hang tight"), 60000)
      );
      waitTimerRef.current.push(
        setTimeout(
          () =>
            setWaitStatus(
              'Taking longer than usual &mdash; email us at <a href="mailto:info@milestac.com" style="color: var(--accent); font-weight: 500; text-decoration: underline;">info@milestac.com</a>'
            ),
          120000
        )
      );

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

        const response = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionIdRef.current,
            message: text,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        waitTimerRef.current.forEach(clearTimeout);
        waitTimerRef.current = [];

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();

        const botMsg: Message = {
          id: uid(),
          role: "assistant",
          content: data.reply || "I could not process that. Please try again.",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMsg]);

        if (!isOpen) {
          setHasUnread(true);
          setUnreadType("success");
        }
      } catch {
        const errorMsg: Message = {
          id: uid(),
          role: "assistant",
          content:
            'I\u2019m having a moment. Please try again or email us at <a href="mailto:info@milestac.com" style="color: var(--accent); font-weight: 500; text-decoration: underline;">info@milestac.com</a>.',
          timestamp: new Date(),
          error: true,
        };
        setMessages((prev) => [...prev, errorMsg]);
        setHasUnread(true);
        setUnreadType("error");
        waitTimerRef.current.forEach(clearTimeout);
        waitTimerRef.current = [];
      } finally {
        setIsLoading(false);
      }
    },
    [isOpen]
  );

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || text.length > 2000) return;
    setInputValue("");
    sendMessage(text);
    if (inputRef.current) inputRef.current.style.height = "auto";
  };

  const handleSuggestion = (text: string) => sendMessage(text);

  const handleRetry = (msgIndex: number) => {
    const errorMsg = messages[msgIndex];
    if (!errorMsg) return;
    setMessages((prev) => prev.filter((_, i) => i !== msgIndex));
    for (let i = msgIndex - 1; i >= 0; i--) {
      if (messages[i].role === "user") {
        sendMessage(messages[i].content);
        break;
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = "auto";
    const newHeight = Math.min(e.target.scrollHeight, 96);
    e.target.style.height = newHeight + "px";
    setTextareaOverflow(e.target.scrollHeight > 96);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const charCount = inputValue.length;

  return (
    <>
      {/* Chat Window */}
      <div
        style={{
          position: "fixed",
          bottom: "96px",
          right: "16px",
          zIndex: 9999,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(16px)",
          pointerEvents: isOpen ? "auto" : "none",
          width: "min(380px, calc(100vw - 2rem))",
          fontFamily: "var(--font)",
        }}
        role="dialog"
        aria-label="Miles Ice Tech Chat Assistant"
      >
        <div
          style={{
            background: "var(--white)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "min(560px, calc(100vh - 120px))",
            boxShadow: "0 8px 40px rgba(232, 82, 31, 0.12), 0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          {/* ── Header ── */}
          <div
            style={{
              background: "linear-gradient(135deg, #c84315 0%, #e8621f 60%, #f08050 100%)",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
                  M.
                </span>
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "14px", lineHeight: "1.2", margin: 0 }}>
                    Miles Assistant
                  </p>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#4ade80",
                      display: "inline-block",
                      boxShadow: "0 0 6px rgba(74, 222, 128, 0.6)",
                    }}
                  />
                </div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", margin: 0 }}>
                  Gelato equipment expert
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
              <button onClick={() => setIsOpen(false)} style={styles.headerBtn} aria-label="Minimize chat">
                <MinimizeIcon />
              </button>
              <button onClick={() => setIsOpen(false)} style={styles.headerBtn} aria-label="Close chat">
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* ── Messages ── */}
          <div
            className="miles-chat-scroll"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px 0",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            {messages.map((msg, i) => (
              <MessageBubble
                key={msg.id}
                msg={msg}
                onRetry={msg.error ? () => handleRetry(i) : undefined}
              />
            ))}

            {/* Suggested Questions */}
            {showSuggestions && messages.length <= 1 && (
              <div style={{ padding: "8px 16px 4px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {SUGGESTIONS.map((q) => (
                  <button key={q} onClick={() => handleSuggestion(q)} style={styles.suggestion}>
                    {q}
                  </button>
                ))}
              </div>
            )}

            {isLoading && <StatusIndicator message={waitStatus} />}
            <div ref={messagesEndRef} />
          </div>

          {/* ── Input Area ── */}
          <div
            style={{
              borderTop: "1px solid var(--border)",
              padding: "10px 12px",
              flexShrink: 0,
              background: "var(--white)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask about machines, leasing, catering..."
                rows={1}
                maxLength={2000}
                className={textareaOverflow ? "miles-textarea-scroll" : "miles-textarea-noscroll"}
                style={{
                  flex: 1,
                  padding: "8px 14px",
                  fontSize: "13.5px",
                  lineHeight: "1.5",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-cool)",
                  outline: "none",
                  resize: "none",
                  fontFamily: "var(--font)",
                  color: "var(--text-primary)",
                  maxHeight: "96px",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent)";
                  e.target.style.boxShadow = "0 0 0 3px var(--accent-light)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--border)";
                  e.target.style.boxShadow = "none";
                }}
                aria-label="Type your message"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-sm)",
                  background: inputValue.trim() ? "var(--accent)" : "var(--accent)",
                  color: "#fff",
                  border: "none",
                  cursor: inputValue.trim() ? "pointer" : "not-allowed",
                  opacity: inputValue.trim() ? 1 : 0.3,
                  transition: "all 0.2s",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "6px",
                padding: "0 4px",
              }}
            >
              <p style={{ fontSize: "10px", color: "var(--text-muted)", margin: 0 }}>
                Powered by Miles Ice Tech
              </p>
              {charCount >= 1500 && (
                <span
                  style={{
                    fontSize: "10px",
                    color: charCount >= 1900 ? "#dc2626" : "var(--text-muted)",
                    fontWeight: charCount >= 1900 ? 500 : 400,
                  }}
                >
                  {charCount}/2000
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating Trigger Button ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "16px",
          zIndex: 9999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          background: isOpen ? "var(--white)" : "var(--accent)",
          color: isOpen ? "var(--text-primary)" : "#fff",
          boxShadow: isOpen
            ? "0 4px 20px rgba(0,0,0,0.1)"
            : "0 4px 24px rgba(232, 82, 31, 0.35)",
          fontFamily: "var(--font)",
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <CloseIcon />
        ) : (
          <>
            <ChatIcon />
            {hasUnread && (
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  background: unreadType === "error" ? "#dc2626" : "#22c55e",
                }}
              />
            )}
          </>
        )}
      </button>

      {/* ── Widget Styles ── */}
      <style>{`
        /* Scrollbar inside chat widget */
        .miles-chat-scroll::-webkit-scrollbar { width: 4px; }
        .miles-chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .miles-chat-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
        .miles-chat-scroll::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
        .miles-chat-scroll { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }

        /* Status dots animation */
        .miles-dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.4;
          margin-left: 2px;
          vertical-align: middle;
          animation: milesDotBounce 1.4s ease-in-out infinite;
        }
        .miles-dot-2 { animation-delay: 200ms; }
        .miles-dot-3 { animation-delay: 400ms; }
        @keyframes milesDotBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-3px); }
        }

        /* Textarea scrollbar */
        .miles-textarea-noscroll { overflow-y: hidden; }
        .miles-textarea-scroll { overflow-y: auto; }
        .miles-textarea-scroll::-webkit-scrollbar { width: 3px; }
        .miles-textarea-scroll::-webkit-scrollbar-track { background: transparent; }
        .miles-textarea-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }
        .miles-textarea-scroll { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }

        /* Suggestion hover */
        .miles-suggestion:hover {
          border-color: var(--accent) !important;
          background: var(--accent-light) !important;
          color: var(--accent) !important;
        }

        /* Mobile full-screen */
        @media (max-width: 480px) {
          div[role="dialog"][aria-label="Miles Ice Tech Chat Assistant"] {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            max-width: 100vw !important;
          }
          div[role="dialog"][aria-label="Miles Ice Tech Chat Assistant"] > div {
            border-radius: 0 !important;
            height: 100vh !important;
            max-height: 100vh !important;
          }
        }
      `}</style>
    </>
  );
}

/* ─── Shared inline styles ─── */
const styles: Record<string, React.CSSProperties> = {
  avatar: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "var(--accent)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  botBubble: {
    background: "var(--bg-warm)",
    borderRadius: "16px 16px 16px 4px",
    padding: "10px 16px",
  },
  headerBtn: {
    padding: "6px",
    background: "none",
    border: "none",
    color: "rgba(255,255,255,0.6)",
    cursor: "pointer",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
  },
  suggestion: {
    width: "100%",
    textAlign: "left" as const,
    padding: "10px 14px",
    fontSize: "13px",
    borderRadius: "var(--radius-sm)",
    border: "1px solid var(--border)",
    background: "var(--white)",
    color: "var(--text-secondary)",
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "var(--font)",
  },
};
