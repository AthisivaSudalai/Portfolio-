'use client'
import React from 'react'
import { useReveal } from '../hooks/useReveal'

const projects = [
    {
        id: 'sharpe-ai',
        title: 'Sharpe AI',
        subtitle: 'AI-Powered Excel Add-in for Financial Modeling',
        context: 'Internship · Livewires Digital Solutions (Germany-based client)',
        description:
            'Architected an AI copilot for Excel that helps build financial models. A large multi-agent system comprising a FastAPI server, an Excel add-in, a spreadsheet parser, and a web app — managing 10 specialized AI agents each handling tasks like financial statements, valuations, and audits.',
        highlights: [
            'Built a validation engine that verifies financial calculations across sheets, catches errors, and fails safely — tested with 133 automated tests',
            'Implemented Excel integration layer: syncs workbook data in background, understands cell/range context, shows AI-suggested changes before applying',
            'Added fast search & caching with Pinecone and Redis for low-latency retrieval on large workbooks',
        ],
        tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'Pinecone', 'Redis', 'LangSmith', 'LLM APIs'],
        type: 'Production / B2B',
        icon: '📊',
        color: '#6366f1',
        textColor: '#a5b4fc',
        glowColor: 'rgba(99,102,241,0.18)',
        github: '#',
    },
    {
        id: 'chromoswin',
        title: 'ChromoSwin',
        subtitle: 'Deep Learning for Chromosome Classification & Aberration Detection',
        context: 'Guided Research Project · Preparing for Elsevier journal submission',
        description:
            'Contributed to a dual-branch Swin Transformer pipeline for 24-class chromosome classification and chromosomal aberration detection, trained on the AutoKary2022 dataset. The work integrates contrastive learning and explainable AI for clinical relevance.',
        highlights: [
            'Implemented contrastive training and threshold-calibration for the aberration-detection branch',
            'Applied explainability techniques (SwinCAM, LIME, Integrated Gradients) to support clinical interpretability',
            'Work reformatted for journal submission to Elsevier — currently incorporating reviewer feedback',
        ],
        tech: ['PyTorch', 'Swin Transformer', 'LIME', 'Integrated Gradients', 'SwinCAM', 'Python'],
        type: 'Research',
        icon: '🧬',
        color: '#8b5cf6',
        textColor: '#c4b5fd',
        glowColor: 'rgba(139,92,246,0.18)',
        github: '#',
    },
]

const awards = [
    { event: 'IEEE Research Summit', org: 'SRM-KTR', prize: '1st Prize – Research Poster', date: 'Dec 2025' },
    { event: 'New Logic 2k26', org: 'The New College', prize: '1st Prize – Paper Presentation', date: 'Feb 2026' },
    { event: 'Iritifa-26', org: 'Measi Institute of IT', prize: '1st Prize – Technical Quiz', date: 'Feb 2026' },
    { event: 'Tech Nova 1.0', org: 'SRM-KTR', prize: '2nd Prize – Paper Presentation', date: 'Feb 2026' },
]

export default function Projects() {
    const headerRef  = useReveal()
    const p1Ref      = useReveal()
    const p2Ref      = useReveal()
    const awardsRef  = useReveal()

    const projectRefs = [p1Ref, p2Ref]

    return (
        <section
            id="projects"
            style={{
                padding: '7rem 1.5rem',
                background: 'linear-gradient(180deg, #0e0e22 0%, #0c0c20 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{
                position: 'absolute', top: '40%', right: '-120px',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.055) 0%, transparent 70%)',
                borderRadius: '50%', transform: 'translateY(-50%)', pointerEvents: 'none',
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
                        What I&apos;ve built
                    </span>
                    <h2 style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800, margin: 0,
                        background: 'linear-gradient(135deg, #f1f5f9 0%, #a5b4fc 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Projects &amp; Research
                    </h2>
                </div>

                {/* Project cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={projectRefs[index] as React.Ref<HTMLDivElement>}
                            className="reveal"
                        >
                            <div
                                style={{
                                    background: 'rgba(255,255,255,0.025)',
                                    border: `1px solid ${project.color}2e`,
                                    borderRadius: '24px', padding: '2rem',
                                    backdropFilter: 'blur(12px)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                                    position: 'relative', overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLDivElement
                                    el.style.transform = 'translateY(-4px)'
                                    el.style.boxShadow = `0 24px 64px ${project.glowColor}`
                                    el.style.borderColor = `${project.color}50`
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLDivElement
                                    el.style.transform = 'translateY(0)'
                                    el.style.boxShadow = 'none'
                                    el.style.borderColor = `${project.color}2e`
                                }}
                            >
                                {/* Corner number */}
                                <div style={{
                                    position: 'absolute', top: '1.5rem', right: '1.75rem',
                                    fontFamily: 'Inter, sans-serif', fontSize: '4.5rem', fontWeight: 900,
                                    color: `${project.color}12`, lineHeight: 1, pointerEvents: 'none',
                                }}>
                                    0{index + 1}
                                </div>

                                <div style={{
                                    display: 'flex', flexWrap: 'wrap', gap: '2rem',
                                    alignItems: 'flex-start',
                                }}>
                                    {/* Left */}
                                    <div style={{ flex: '1', minWidth: '260px' }}>
                                        {/* Icon + badge + title */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.6rem' }}>
                                            <div style={{
                                                width: '46px', height: '46px', fontSize: '1.4rem',
                                                background: `${project.color}18`, borderRadius: '14px',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                border: `1px solid ${project.color}30`, flexShrink: 0,
                                            }}>
                                                {project.icon}
                                            </div>
                                            <div>
                                                <span style={{
                                                    display: 'inline-block',
                                                    background: `${project.color}18`,
                                                    border: `1px solid ${project.color}30`,
                                                    borderRadius: '6px', padding: '2px 10px',
                                                    fontFamily: 'Inter, sans-serif', fontSize: '0.68rem',
                                                    fontWeight: 700, color: project.textColor,
                                                    letterSpacing: '0.06em', textTransform: 'uppercase',
                                                    marginBottom: '5px', display: 'block',
                                                }}>
                                                    {project.type}
                                                </span>
                                                <h3 style={{
                                                    fontFamily: 'Inter, sans-serif', fontSize: '1.35rem',
                                                    fontWeight: 800, color: '#f1f5f9', margin: 0, lineHeight: 1.2,
                                                }}>
                                                    {project.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', color: '#64748b', margin: '0 0 0.6rem', fontStyle: 'italic' }}>
                                            {project.subtitle}
                                        </p>
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#a5b4fc', margin: '0 0 1rem' }}>
                                            {project.context}
                                        </p>
                                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.93rem', lineHeight: 1.72, color: '#94a3b8', margin: '0 0 1rem' }}>
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul style={{ margin: '0 0 1.5rem', padding: 0, listStyle: 'none' }}>
                                            {project.highlights.map((h, i) => (
                                                <li key={i} style={{
                                                    display: 'flex', gap: '10px', alignItems: 'flex-start',
                                                    fontFamily: 'Inter, sans-serif', fontSize: '0.86rem',
                                                    color: '#b2bfd6', lineHeight: 1.65, marginBottom: '7px',
                                                }}>
                                                    <span style={{ color: project.textColor, flexShrink: 0, marginTop: '3px' }}>▸</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* GitHub link */}
                                        <a
                                            href={project.github}
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                                padding: '8px 16px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '8px', textDecoration: 'none',
                                                fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
                                                fontWeight: 600, color: '#94a3b8',
                                                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
                                                e.currentTarget.style.color = '#f1f5f9'
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                                                e.currentTarget.style.color = '#94a3b8'
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                                            }}
                                        >
                                            GitHub ↗
                                        </a>
                                    </div>

                                    {/* Right: tech stack */}
                                    <div style={{ width: '190px', flexShrink: 0 }}>
                                        <h4 style={{
                                            fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', fontWeight: 700,
                                            color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.12em',
                                            margin: '0 0 0.65rem',
                                        }}>
                                            Tech Stack
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                            {project.tech.map(t => (
                                                <span
                                                    key={t}
                                                    className="skill-tag"
                                                    style={{
                                                        padding: '4px 10px',
                                                        background: `${project.color}10`,
                                                        border: `1px solid ${project.color}22`,
                                                        borderRadius: '6px',
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '0.75rem', fontWeight: 500,
                                                        color: project.textColor,
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Awards */}
                <div
                    ref={awardsRef as React.Ref<HTMLDivElement>}
                    className="reveal"
                    style={{ marginTop: '3rem' }}
                >
                    <div style={{
                        background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.18)',
                        borderRadius: '20px', padding: '2rem', textAlign: 'center',
                    }}>
                        <h3 style={{
                            fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700,
                            color: '#a5b4fc', margin: '0 0 1.25rem',
                            textTransform: 'uppercase', letterSpacing: '0.1em',
                        }}>
                            🏆 Awards &amp; Recognition
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.9rem' }}>
                            {awards.map(award => (
                                <div
                                    key={award.event}
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        borderRadius: '12px', padding: '1rem 1.25rem',
                                        minWidth: '190px', maxWidth: '240px',
                                        transition: 'transform 0.2s, border-color 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement
                                        el.style.transform = 'translateY(-2px)'
                                        el.style.borderColor = 'rgba(251,191,36,0.2)'
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement
                                        el.style.transform = 'translateY(0)'
                                        el.style.borderColor = 'rgba(255,255,255,0.07)'
                                    }}
                                >
                                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.87rem', fontWeight: 700, color: '#fbbf24' }}>{award.prize}</div>
                                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#e2e8f0', marginTop: '4px' }}>{award.event}</div>
                                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#64748b', marginTop: '3px' }}>{award.org} · {award.date}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
