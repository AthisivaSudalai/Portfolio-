'use client'
import React from 'react'
import { useReveal } from '../hooks/useReveal'

const contactLinks = [
    {
        id: 'email',
        label: 'Email',
        value: 'svkathisiva2006@gmail.com',
        href: 'mailto:svkathisiva2006@gmail.com',
        icon: '✉️',
        color: '#6366f1',
        glowColor: 'rgba(99,102,241,0.18)',
        description: 'Best way to reach me',
    },
    {
        id: 'github',
        label: 'GitHub',
        value: 'AthisivaSudalai',
        href: 'https://github.com/AthisivaSudalai',
        icon: '🐙',
        color: '#8b5cf6',
        glowColor: 'rgba(139,92,246,0.18)',
        description: 'Check out my code',
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'athi-siva',
        href: 'https://www.linkedin.com/in/athi-siva',
        icon: '💼',
        color: '#06b6d4',
        glowColor: 'rgba(6,182,212,0.18)',
        description: "Let's connect professionally",
    },
]

export default function ContactUs() {
    const headerRef = useReveal()
    const cardsRef  = useReveal(0.05)
    const ctaRef    = useReveal()

    return (
        <section
            id="contact"
            style={{
                padding: '7rem 1.5rem 5rem',
                background: 'linear-gradient(180deg, #0c0c20 0%, #080812 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* bg glow */}
            <div style={{
                position: 'absolute', top: '15%', left: '50%',
                transform: 'translateX(-50%)',
                width: '700px', height: '320px',
                background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
                filter: 'blur(40px)', pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div
                    ref={headerRef as React.Ref<HTMLDivElement>}
                    className="reveal"
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <span style={{
                        display: 'inline-block', color: '#a5b4fc', fontSize: '0.8rem',
                        fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em',
                        textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem',
                    }}>
                        Let&apos;s talk
                    </span>
                    <h2 style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800, margin: '0 0 1rem',
                        background: 'linear-gradient(135deg, #f1f5f9 0%, #a5b4fc 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Get In Touch
                    </h2>
                    <p style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: '#94a3b8',
                        maxWidth: '520px', margin: '0 auto', lineHeight: 1.75,
                    }}>
                        I&apos;m actively looking for full-time opportunities in AI/ML and software engineering.
                        Whether you have a role, a project, or just want to connect — my inbox is always open.
                    </p>
                </div>

                {/* Contact cards */}
                <div
                    ref={cardsRef as React.Ref<HTMLDivElement>}
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1.1rem', marginBottom: '3rem',
                    }}
                >
                    {contactLinks.map(link => (
                        <a
                            key={link.id}
                            id={`contact-${link.id}`}
                            href={link.href}
                            target={link.id !== 'email' ? '_blank' : undefined}
                            rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                            style={{
                                display: 'block', textDecoration: 'none',
                                background: 'rgba(255,255,255,0.025)',
                                border: `1px solid ${link.color}2e`,
                                borderRadius: '18px', padding: '1.6rem',
                                backdropFilter: 'blur(12px)',
                                transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease, background 0.28s ease',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLAnchorElement
                                el.style.transform = 'translateY(-5px)'
                                el.style.boxShadow = `0 20px 48px ${link.glowColor}`
                                el.style.borderColor = `${link.color}55`
                                el.style.background = 'rgba(255,255,255,0.04)'
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLAnchorElement
                                el.style.transform = 'translateY(0)'
                                el.style.boxShadow = 'none'
                                el.style.borderColor = `${link.color}2e`
                                el.style.background = 'rgba(255,255,255,0.025)'
                            }}
                        >
                            <div style={{
                                width: '48px', height: '48px', fontSize: '1.5rem',
                                background: `${link.color}18`, borderRadius: '13px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: `1px solid ${link.color}28`, marginBottom: '0.9rem',
                            }}>
                                {link.icon}
                            </div>
                            <div style={{
                                fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700,
                                color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.12em',
                                marginBottom: '4px',
                            }}>
                                {link.label}
                            </div>
                            <div style={{
                                fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600,
                                color: '#f1f5f9', marginBottom: '4px', wordBreak: 'break-all',
                            }}>
                                {link.value}
                            </div>
                            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#64748b' }}>
                                {link.description}
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div
                    ref={ctaRef as React.Ref<HTMLDivElement>}
                    className="reveal"
                    style={{ textAlign: 'center' }}
                >
                    <p style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', color: '#475569',
                        margin: '0 0 1.25rem',
                    }}>
                        Prefer email? Drop me a line directly.
                    </p>
                    <a
                        href="mailto:svkathisiva2006@gmail.com"
                        id="contact-cta-email"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '14px 36px',
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            color: '#fff', borderRadius: '12px', textDecoration: 'none',
                            fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.95rem',
                            boxShadow: '0 0 28px rgba(99,102,241,0.35)',
                            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-3px)'
                            e.currentTarget.style.boxShadow = '0 0 48px rgba(99,102,241,0.5)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 0 28px rgba(99,102,241,0.35)'
                        }}
                    >
                        ✉️ svkathisiva2006@gmail.com
                    </a>
                </div>

                {/* Footer */}
                <div style={{
                    textAlign: 'center', marginTop: '5rem', paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#2d3748' }}>
                        Designed &amp; built by <span style={{ color: '#a5b4fc' }}>S. Athisiva</span> · 2026
                    </p>
                </div>
            </div>
        </section>
    )
}
