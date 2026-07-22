'use client'
import React, { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const [open,     setOpen]     = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "👋 Hi! I'm Athisiva's portfolio assistant. Ask me anything about his skills, projects, or experience!",
    },
  ])
  const [input,   setInput]    = useState('')
  const [loading, setLoading]  = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')

    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, content: m.content })) }),
      })
      const data = await res.json()
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.reply ?? 'Sorry, something went wrong.' },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Network error — please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* ── Chat panel ─────────────────────────────────────── */}
      <div className={`chatbot-panel${open ? ' open' : ' closed'}`}
           style={{ background: '#0f0e1f', border: '1px solid rgba(99,102,241,0.25)' }}>

        {/* Header */}
        <div style={{
          padding: '1rem 1.25rem', flexShrink: 0,
          background: 'linear-gradient(135deg, #1a1535, #1e1b40)',
          borderBottom: '1px solid rgba(99,102,241,0.18)',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            borderRadius: '10px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem', flexShrink: 0,
          }}>🤖</div>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#f1f5f9' }}>
              Portfolio Assistant
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1px' }}>
              <span style={{ width: '6px', height: '6px', background: '#6ee7b7', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: '#64748b' }}>Online</span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer',
              color: '#64748b', padding: '4px', borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f1f5f9')}
            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <line x1="3" y1="3" x2="13" y2="13"/><line x1="13" y1="3" x2="3" y2="13"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '1rem',
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}>
              <div style={{
                maxWidth: '82%',
                padding: '0.65rem 0.9rem',
                borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                background: msg.role === 'user'
                  ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                  : 'rgba(255,255,255,0.05)',
                border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.08)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                lineHeight: 1.55,
                color: msg.role === 'user' ? '#fff' : '#cbd5e1',
              }}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                padding: '0.65rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px 14px 14px 4px',
                display: 'flex', gap: '5px', alignItems: 'center',
              }}>
                {[0.1, 0.25, 0.4].map(delay => (
                  <span key={delay} style={{
                    width: '6px', height: '6px', background: '#6366f1', borderRadius: '50%',
                    display: 'inline-block',
                    animation: `chatDot 1.2s ${delay}s ease-in-out infinite`,
                  }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '0.75rem 1rem', flexShrink: 0,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: '#0f0e1f',
          display: 'flex', gap: '8px', alignItems: 'center',
        }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about Athisiva…"
            disabled={loading}
            style={{
              flex: 1, padding: '10px 14px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px', outline: 'none',
              fontFamily: "'Inter', sans-serif", fontSize: '0.875rem',
              color: '#f1f5f9',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            aria-label="Send message"
            style={{
              width: '40px', height: '40px', flexShrink: 0,
              background: input.trim() && !loading
                ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                : 'rgba(255,255,255,0.06)',
              border: 'none', borderRadius: '10px', cursor: input.trim() && !loading ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
          >
            <svg width="16" height="16" fill="none" stroke={input.trim() && !loading ? '#fff' : '#475569'} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── FAB button ─────────────────────────────────────── */}
      <div className="chatbot-fab">
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close assistant' : 'Open assistant'}
          style={{
            width: '56px', height: '56px',
            background: open
              ? 'rgba(30,27,64,0.9)'
              : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            border: open ? '1px solid rgba(99,102,241,0.4)' : 'none',
            borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          {open
            ? <svg width="20" height="20" fill="none" stroke="#a5b4fc" strokeWidth={2} strokeLinecap="round"><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></svg>
            : <svg width="20" height="20" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          }
        </button>
      </div>

      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  )
}
