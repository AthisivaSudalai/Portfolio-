'use client'
import React from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
    const contentRef = useReveal(0.05)

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0f0c29 0%, #1a1040 40%, #0d1b3e 70%, #0a1628 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '6rem 1.5rem 4rem',
            }}
        >
            {/* Animated background orbs */}
            <div style={{
                position: 'absolute', top: '15%', left: '8%', width: '380px', height: '380px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(50px)', animation: 'heroPulse 7s ease-in-out infinite',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '18%', right: '8%', width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(50px)', animation: 'heroPulse 9s ease-in-out infinite reverse',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '55%', left: '55%', width: '220px', height: '220px',
                background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)', transform: 'translate(-50%,-50%)',
                animation: 'heroPulse 11s ease-in-out infinite',
                pointerEvents: 'none',
            }} />

            {/* Grid pattern overlay */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
            }} />

            {/* Content */}
            <div
                ref={contentRef as React.Ref<HTMLDivElement>}
                className="reveal"
                style={{
                    position: 'relative', zIndex: 1,
                    textAlign: 'center', maxWidth: '820px', width: '100%',
                }}
            >
                {/* Status badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.35)',
                    borderRadius: '50px', padding: '7px 20px', marginBottom: '2rem',
                    backdropFilter: 'blur(12px)',
                }}>
                    <span style={{
                        width: '8px', height: '8px', background: '#6ee7b7', borderRadius: '50%',
                        display: 'inline-block', boxShadow: '0 0 8px #6ee7b7',
                        animation: 'heroPulse 2s ease-in-out infinite',
                    }} />
                    <span style={{
                        color: '#a5b4fc', fontSize: '0.83rem',
                        fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em', fontWeight: 500,
                    }}>
                        Available for full-time roles
                    </span>
                </div>

                {/* Name */}
                <h1 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(3rem, 8vw, 5.75rem)',
                    fontWeight: 800,
                    lineHeight: 1.08,
                    margin: '0 0 1.1rem 0',
                    background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 35%, #c084fc 65%, #f472b6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.03em',
                }}>
                    S. Athisiva
                </h1>

                {/* Role */}
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.1rem, 2.8vw, 1.55rem)',
                    fontWeight: 500,
                    color: '#c4b5fd',
                    margin: '0 0 0.9rem 0',
                    letterSpacing: '0.01em',
                }}>
                    AI/ML Engineer &amp; Full-Stack Developer
                </p>

                {/* Tagline */}
                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                    color: '#94a3b8',
                    margin: '0 0 2.75rem 0',
                    maxWidth: '580px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: 1.7,
                }}>
                    Building production AI systems — from RAG pipelines &amp; LLM tooling
                    to deep-learning research in medical imaging.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="#projects"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '14px 34px',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            color: '#fff', borderRadius: '12px', textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                            boxShadow: '0 0 32px rgba(99,102,241,0.4)',
                            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-3px)'
                            e.currentTarget.style.boxShadow = '0 0 48px rgba(99,102,241,0.55)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.4)'
                        }}
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '14px 34px',
                            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.18)',
                            color: '#e2e8f0', borderRadius: '12px', textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                            backdropFilter: 'blur(12px)',
                            transition: 'background 0.25s ease, border-color 0.25s ease, transform 0.25s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
                            e.currentTarget.style.transform = 'translateY(-3px)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                            e.currentTarget.style.transform = 'translateY(0)'
                        }}
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    marginTop: '4.5rem',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                }}>
                    <span style={{
                        color: '#475569', fontSize: '0.7rem',
                        fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase',
                    }}>
                        Scroll to explore
                    </span>
                    <div style={{
                        width: '24px', height: '40px', border: '1.5px solid rgba(99,102,241,0.45)',
                        borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '7px',
                    }}>
                        <div style={{
                            width: '4px', height: '8px', background: 'linear-gradient(to bottom, #6366f1, #8b5cf6)',
                            borderRadius: '2px', animation: 'scrollBounce 2s ease-in-out infinite',
                        }} />
                    </div>
                </div>
            </div>

            <style>{`
              @keyframes heroPulse {
                0%, 100% { opacity: 0.7; transform: scale(1); }
                50%       { opacity: 1;   transform: scale(1.07); }
              }
              @keyframes scrollBounce {
                0%, 100% { transform: translateY(0);  opacity: 1; }
                50%       { transform: translateY(8px); opacity: 0.35; }
              }
            `}</style>
        </section>
    )
}
