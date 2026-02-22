/*
 * BiosanSor — BenefitsSection
 * Design: "Natureza Técnica" — Grid de benefícios com ícones e números de impacto
 */

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '+90% de Eficiência',
    description: 'Remoção de DBO acima dos padrões exigidos pela legislação ambiental, comprovada por laudos de laboratórios credenciados pelo INMETRO.',
    color: 'oklch(0.32 0.08 220)',
    bg: 'oklch(0.88 0.04 220)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Zero Energia Elétrica',
    description: 'Funciona completamente sem energia elétrica. Processo 100% natural e passivo, ideal para áreas remotas e sem infraestrutura.',
    color: 'oklch(0.48 0.08 155)',
    bg: 'oklch(0.88 0.04 155)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: 'Sem Lodo Excedente',
    description: 'Diga adeus ao caminhão limpa-fossa. Sem geração de lodo excedente, economize mais de R$ 1.000,00 por ano em manutenção.',
    color: 'oklch(0.55 0.07 60)',
    bg: 'oklch(0.94 0.03 60)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Manutenção Quase Zero',
    description: 'A única manutenção necessária é a limpeza simples da caixa de gradeamento. Sem produtos químicos, sem reaplicação de bactérias.',
    color: 'oklch(0.32 0.08 220)',
    bg: 'oklch(0.88 0.04 220)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: 'Mais Compacto do Mercado',
    description: 'A partir de apenas 120 × 70 cm. Menor volume de escavação, instalação rápida e fácil, mesmo em espaços reduzidos.',
    color: 'oklch(0.48 0.08 155)',
    bg: 'oklch(0.88 0.04 155)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: '5 Anos de Garantia',
    description: 'Garantia de fábrica de 5 anos. Fabricado em fibra de vidro reforçada com proteção UV, material 100% impermeável e altamente resistente.',
    color: 'oklch(0.55 0.07 60)',
    bg: 'oklch(0.94 0.03 60)',
  },
];

export default function BenefitsSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'oklch(0.97 0.01 220)' }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="reveal section-line" />
          <p
            className="reveal text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'oklch(0.48 0.08 155)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Por que escolher a Biosan
          </p>
          <h2
            className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
          >
            Tecnologia que{' '}
            <span className="italic" style={{ color: 'oklch(0.32 0.08 220)' }}>
              transforma
            </span>{' '}
            o saneamento
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg leading-relaxed"
            style={{ color: 'oklch(0.45 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Solução ideal para imóveis, condomínios, sítios, chácaras, hotéis, restaurantes e comunidades sem acesso à rede pública de esgoto.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`reveal delay-${(i % 3) * 100 + 100} bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              style={{ borderColor: 'oklch(0.92 0.02 220)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: benefit.bg, color: benefit.color }}
              >
                {benefit.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'oklch(0.50 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div
          className="reveal mt-16 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ backgroundColor: 'oklch(0.32 0.08 220)' }}
        >
          {[
            { value: '+180', label: 'Tipos de bactérias na colônia patenteada' },
            { value: '8h', label: 'Tempo de Detenção Hidráulica (TDH)' },
            { value: '50 anos', label: 'Vida útil estimada do meio filtrante de bambu' },
            { value: '4', label: 'Estágios de tratamento interno' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-white mb-1"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-medium leading-tight"
                style={{ color: 'oklch(0.80 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
