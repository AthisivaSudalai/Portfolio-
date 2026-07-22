'use client'
import React from 'react'
import { useReveal } from '../hooks/useReveal'

const skillCategories = [
    {
        icon: '💻',
        title: 'Languages & Core',
        color: '#6366f1',
        textColor: '#a5b4fc',
        glowColor: 'rgba(99,102,241,0.22)',
        skills: ['Python', 'Java', 'C', 'SQL'],
    },
    {
        icon: '🤖',
        title: 'ML / DL Frameworks',
        color: '#8b5cf6',
        textColor: '#c4b5fd',
        glowColor: 'rgba(139,92,246,0.22)',
        skills: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'Hugging Face Transformers'],
    },
    {
        icon: '🧩',
        title: 'AI Tooling',
        color: '#a855f7',
        textColor: '#d8b4fe',
        glowColor: 'rgba(168,85,247,0.22)',
        skills: ['LangChain', 'LangSmith', 'RAG Pipelines', 'Groq / LLM APIs', 'sentence-transformers'],
    },
    {
        icon: '🗄️',
        title: 'Data & Backend',
        color: '#06b6d4',
        textColor: '#67e8f9',
        glowColor: 'rgba(6,182,212,0.22)',
        skills: ['pandas', 'NumPy', 'FastAPI', 'Pinecone', 'Redis', 'Git / GitHub'],
    },
    {
        icon: '📊',
        title: 'Analytics & Productivity',
        color: '#10b981',
        textColor: '#6ee7b7',
        glowColor: 'rgba(16,185,129,0.22)',
        skills: ['Power BI', 'Tableau', 'MS Office', 'Canva'],
    },
]

export default function Skills() {
    const headerRef = useReveal()
    const gridRef   = useReveal(0.05)

    return (
        <section
            id="skills"
            style={{
                padding: '7rem 1.5rem',
                background: 'linear-gradient(180deg, #111128 0%, #0e0e22 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{
                position: 'absolute', bottom: '-80px', left: '-80px',
                width: '480px', height: '480px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header */}
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
                        What I work with
                    </span>
                    <h2 style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800, margin: 0,
                        background: 'linear-gradient(135deg, #f1f5f9 0%, #a5b4fc 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Technical Skills
                    </h2>
                </div>

                {/* Cards */}
                <div
                    ref={gridRef as React.Ref<HTMLDivElement>}
                    className="reveal-stagger"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                        gap: '1.25rem',
                    }}
                >
                    {skillCategories.map(cat => (
                        <div
                            key={cat.title}
                            style={{
                                background: 'rgba(255,255,255,0.025)',
                                border: `1px solid ${cat.color}2e`,
                                borderRadius: '20px', padding: '1.65rem',
                                backdropFilter: 'blur(12px)',
                                transition: 'transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease',
                                cursor: 'default', position: 'relative', overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLDivElement
                                el.style.transform = 'translateY(-6px) scale(1.01)'
                                el.style.boxShadow = `0 24px 50px ${cat.glowColor}`
                                el.style.borderColor = `${cat.color}55`
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLDivElement
                                el.style.transform = 'translateY(0) scale(1)'
                                el.style.boxShadow = 'none'
                                el.style.borderColor = `${cat.color}2e`
                            }}
                        >
                            {/* Corner glow */}
                            <div style={{
                                position: 'absolute', top: '-16px', right: '-16px',
                                width: '70px', height: '70px',
                                background: `radial-gradient(circle, ${cat.glowColor} 0%, transparent 70%)`,
                                borderRadius: '50%', pointerEvents: 'none',
                            }} />

                            {/* Icon + title */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.1rem' }}>
                                <div style={{
                                    fontSize: '1.4rem', width: '42px', height: '42px',
                                    background: `${cat.color}18`, borderRadius: '11px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: `1px solid ${cat.color}30`, flexShrink: 0,
                                }}>
                                    {cat.icon}
                                </div>
                                <h3 style={{
                                    fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
                                    fontWeight: 700, color: '#f1f5f9', margin: 0,
                                }}>
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Skill tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="skill-tag"
                                        style={{
                                            padding: '5px 11px',
                                            background: `${cat.color}12`,
                                            border: `1px solid ${cat.color}28`,
                                            borderRadius: '7px',
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '0.8rem', fontWeight: 500,
                                            color: cat.textColor,
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
