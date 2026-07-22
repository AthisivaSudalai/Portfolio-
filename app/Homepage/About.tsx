'use client'
import React from 'react'
import { useReveal } from '../hooks/useReveal'

const stats = [
    { label: 'CGPA', value: '9.55' },
    { label: 'Projects', value: '2+' },
    { label: 'Awards Won', value: '5' },
    { label: 'Internship', value: '1' },
]

const education = [
    { degree: 'B.Sc. Computer Science', inst: 'Madras Christian College', year: '2024 – 2027', score: '9.55 CGPA' },
    { degree: 'HSC (Higher Secondary)', inst: 'Tilak Vidhyalaya Hr. Sec. School', year: '2024', score: '89%' },
    { degree: 'SSLC (Secondary)', inst: 'Bharathiyar Govt. Hr. Sec. School', year: '2022', score: '91%' },
]

export default function About() {
    const headerRef  = useReveal()
    const bioRef     = useReveal()
    const sideRef    = useReveal()

    return (
        <section
            id="about"
            style={{
                padding: '7rem 1.5rem',
                background: 'linear-gradient(180deg, #0f0c29 0%, #111128 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* bg decoration */}
            <div style={{
                position: 'absolute', top: '-60px', right: '-60px',
                width: '420px', height: '420px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* ── Section header ── */}
                <div
                    ref={headerRef as React.Ref<HTMLDivElement>}
                    className="reveal"
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <span style={{
                        display: 'inline-block', color: '#a5b4fc', fontSize: '0.8rem',
                        fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em',
                        textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6rem',
                    }}>
                        Get to know me
                    </span>
                    <h2 style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800, margin: 0,
                        background: 'linear-gradient(135deg, #f1f5f9 0%, #a5b4fc 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        About Me
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'start',
                }}>
                    {/* ── Bio card ── */}
                    <div
                        ref={bioRef as React.Ref<HTMLDivElement>}
                        className="reveal"
                    >
                        <div style={{
                            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '22px', padding: '2rem', backdropFilter: 'blur(12px)',
                            height: '100%',
                        }}>
                            <div style={{
                                width: '56px', height: '56px',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                borderRadius: '16px', marginBottom: '1.5rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.7rem', boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
                            }}>
                                🧠
                            </div>
                            {[
                                `I'm a final-year B.Sc. Computer Science student at Madras Christian College with a 9.55 CGPA, currently interning as an AI/ML Engineer at Livewires Digital Solutions, where I've been building production RAG-based AI systems for real-world financial modeling workflows.`,
                                `My work spans full-stack AI development — from designing retrieval pipelines with Pinecone and Redis, to contributing to deep-learning research on chromosome classification using Swin Transformers, with explainability techniques for clinical relevance.`,
                                `I'm driven by the challenge of making AI systems that actually work in production — reliable, fast, and interpretable. I'm seeking a full-time role where I can apply my skills in model development, research, and engineering to solve meaningful problems.`,
                            ].map((para, i) => (
                                <p key={i} style={{
                                    fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.82,
                                    color: '#b2bfd6', margin: i < 2 ? '0 0 1rem 0' : 0,
                                }}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* ── Stats + Education ── */}
                    <div
                        ref={sideRef as React.Ref<HTMLDivElement>}
                        className="reveal"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        {/* Stats */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {stats.map(stat => (
                                <div
                                    key={stat.label}
                                    style={{
                                        background: 'rgba(99,102,241,0.07)',
                                        border: '1px solid rgba(99,102,241,0.18)',
                                        borderRadius: '16px', padding: '1.25rem',
                                        textAlign: 'center',
                                        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement
                                        el.style.transform = 'translateY(-3px)'
                                        el.style.boxShadow = '0 12px 30px rgba(99,102,241,0.2)'
                                        el.style.borderColor = 'rgba(99,102,241,0.35)'
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement
                                        el.style.transform = 'translateY(0)'
                                        el.style.boxShadow = 'none'
                                        el.style.borderColor = 'rgba(99,102,241,0.18)'
                                    }}
                                >
                                    <div style={{
                                        fontFamily: 'Inter, sans-serif', fontSize: '2.1rem', fontWeight: 800,
                                        background: 'linear-gradient(135deg, #a5b4fc, #c084fc)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text', lineHeight: 1.1,
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div style={{
                                        fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#64748b',
                                        marginTop: '5px', textTransform: 'uppercase', letterSpacing: '0.07em',
                                        fontWeight: 600,
                                    }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div style={{
                            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '20px', padding: '1.5rem',
                        }}>
                            <h3 style={{
                                fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 700,
                                color: '#a5b4fc', margin: '0 0 1.25rem 0',
                                textTransform: 'uppercase', letterSpacing: '0.12em',
                            }}>
                                Education
                            </h3>
                            {education.map((edu, i) => (
                                <div key={i} style={{
                                    borderLeft: '2px solid rgba(99,102,241,0.35)', paddingLeft: '1rem',
                                    marginBottom: i < education.length - 1 ? '1.1rem' : 0,
                                    transition: 'border-color 0.2s',
                                }}>
                                    <div style={{
                                        fontFamily: 'Inter, sans-serif', fontSize: '0.93rem',
                                        fontWeight: 600, color: '#f1f5f9',
                                    }}>
                                        {edu.degree}
                                    </div>
                                    <div style={{
                                        fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                                        color: '#94a3b8', marginTop: '2px',
                                    }}>
                                        {edu.inst} · {edu.year}
                                    </div>
                                    <div style={{
                                        fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                                        color: '#6ee7b7', marginTop: '2px', fontWeight: 500,
                                    }}>
                                        {edu.score}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
