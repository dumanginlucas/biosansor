/*
 * BiosanSor — PatentsSection
 * Design: "Natureza Técnica" — Seção de patentes com fundo azul-petróleo
 * Destaque para a biotecnologia patenteada e certificações
 */

const PATENT_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663373834958/nubOGUPndyqJtbWN.webp';

const certifications = [
  {
    title: 'Biotecnologia Patenteada',
    description: 'A colônia de mais de 180 tipos de bactérias e microorganismos selecionados é protegida por patente. Uma inovação exclusiva que garante máxima eficiência no tratamento.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'ABNT NBR 17.076/2024',
    description: 'Dimensionada conforme a mais recente norma técnica da ABNT para sistemas de tratamento de esgoto, garantindo conformidade legal e técnica.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'CONAMA Nº 430/2011',
    description: 'O efluente tratado atende aos parâmetros da Resolução CONAMA Nº 430/2011, podendo ser descartado em cursos hídricos com poder de autodepuração.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Laudos INMETRO',
    description: 'Eficiência comprovada por análises de laboratórios credenciados pelo INMETRO, monitorando 20 equipamentos por 2 anos. Mais de 80% de remoção de DBO, chegando a 90%.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function PatentsSection() {
  return (
    <section
      className="py-24 overflow-hidden relative"
      style={{ backgroundColor: 'oklch(0.32 0.08 220)' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="reveal block w-12 h-0.5 bg-white/40 mb-6" />
            <p
              className="reveal text-sm font-semibold uppercase tracking-widest mb-3 text-white/70"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Inovação protegida
            </p>
            <h2
              className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Biotecnologia{' '}
              <span className="italic" style={{ color: 'oklch(0.80 0.06 155)' }}>
                patenteada
              </span>{' '}
              e certificada
            </h2>
            <p
              className="reveal delay-200 text-lg leading-relaxed text-white/80 mb-10"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              A Biosan é a única micro-estação de tratamento de esgoto com colônia bacteriana patenteada de mais de 180 tipos de microorganismos selecionados — em sua maioria rizobactérias naturais do solo e de plantas. Esta inovação garante máxima eficiência em um equipamento extremamente compacto.
            </p>

            {/* Certifications */}
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.title}
                  className={`reveal delay-${i * 100 + 100} flex gap-4 p-4 rounded-xl`}
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <div
                    className="flex-shrink-0 text-white/70"
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-white mb-1"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {cert.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed text-white/70"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Patent image + key info */}
          <div className="reveal-right flex flex-col items-center gap-8">
            <img
              src={PATENT_IMG}
              alt="Selos de Biotecnologia Patenteada e 5 Anos de Garantia da Biosan"
              className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />

            {/* Key differentiator */}
            <div
              className="w-full rounded-2xl p-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <h4
                className="text-lg font-bold text-white mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                O grande diferencial
              </h4>
              <p
                className="text-sm leading-relaxed text-white/80"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Diferente das fossas sépticas e biodigestores convencionais, que utilizam somente as bactérias presentes no próprio esgoto, a Biosan promove a <strong className="text-white">hidrólise</strong> — quebrando moléculas maiores e pesadas, gerando principalmente CO e CO₂ e baixíssimos níveis de sólidos. Resultado: <strong className="text-white">sem lodo excedente</strong>, sem caminhão limpa-fossa, economizando mais de <strong className="text-white">R$ 1.000,00 por ano</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
