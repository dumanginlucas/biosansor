/*
 * BiosanSor — ApplicationsSection
 * Design: "Natureza Técnica" — Grid de aplicações com foto de obra real
 */

const OBRA_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663373834958/QOuVoBHZxIItouZt.webp';

const applications = [
  {
    icon: '🏠',
    title: 'Residências',
    description: 'Casas, sítios, chácaras e propriedades rurais sem acesso à rede pública de esgoto.',
  },
  {
    icon: '🏢',
    title: 'Condomínios',
    description: 'Condomínios horizontais e verticais, loteamentos e comunidades isoladas.',
  },
  {
    icon: '🏨',
    title: 'Hotéis e Pousadas',
    description: 'Estabelecimentos de hospedagem em áreas turísticas e de difícil acesso à rede.',
  },
  {
    icon: '🍽️',
    title: 'Restaurantes',
    description: 'Estabelecimentos alimentícios com necessidade de tratamento de águas cinzas e negras.',
  },
  {
    icon: '🏥',
    title: 'Hospitais e Clínicas',
    description: 'Unidades de saúde de pequeno e médio porte com alta demanda de tratamento.',
  },
  {
    icon: '🏭',
    title: 'Indústrias',
    description: 'Centros de distribuição, galpões industriais e complexos empresariais.',
  },
  {
    icon: '🏫',
    title: 'Escolas e Clubes',
    description: 'Instituições de ensino, clubes esportivos e centros comunitários.',
  },
  {
    icon: '🌆',
    title: 'Municípios',
    description: 'Cidades e comunidades inteiras sem infraestrutura de saneamento básico.',
  },
];

const references = [
  { name: 'Conceição das Alagoas - MG', detail: '35.000 habitantes — tratamento da cidade inteira' },
  { name: 'Laboratório Hermes Pardini', detail: 'Vespasiano-MG — 320 m³/dia — 6.000 usuários/dia' },
  { name: 'Hospital de Brumadinho - MG', detail: '115 m³/dia — 1.500 usuários/dia' },
  { name: 'Hospital de Gurupi - TO', detail: '150 m³/dia — 2.000 usuários/dia' },
  { name: 'Banheiro Ferrovia Santos - SP', detail: '2.000 L/dia — infraestrutura ferroviária' },
  { name: 'Centro de Distribuição Tambasa', detail: 'Contagem-MG — 240 m³/dia — 3.500 usuários/dia' },
];

export default function ApplicationsSection() {
  return (
    <section
      id="aplicacoes"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="reveal section-line-green" />
          <p
            className="reveal text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'oklch(0.32 0.08 220)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Onde a Biosan atua
          </p>
          <h2
            className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
          >
            Solução para{' '}
            <span className="italic" style={{ color: 'oklch(0.48 0.08 155)' }}>
              qualquer escala
            </span>
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg leading-relaxed"
            style={{ color: 'oklch(0.45 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Da residência unifamiliar ao tratamento de cidades inteiras. A biotecnologia Biosan é escalável e adaptável a qualquer demanda.
          </p>
        </div>

        {/* Applications grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {applications.map((app, i) => (
            <div
              key={app.title}
              className={`reveal delay-${(i % 4) * 100 + 100} p-5 rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              style={{ borderColor: 'oklch(0.92 0.02 220)' }}
            >
              <div className="text-3xl mb-3">{app.icon}</div>
              <h3
                className="font-bold mb-2 text-sm md:text-base"
                style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.18 0.02 220)' }}
              >
                {app.title}
              </h3>
              <p
                className="text-xs md:text-sm leading-relaxed"
                style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
              >
                {app.description}
              </p>
            </div>
          ))}
        </div>

        {/* References section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: References list */}
          <div className="reveal-left">
            <span className="section-line" />
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'oklch(0.48 0.08 155)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Obras de referência
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
            >
              Tecnologia comprovada em{' '}
              <span className="italic" style={{ color: 'oklch(0.32 0.08 220)' }}>
                grandes projetos
              </span>
            </h3>
            <div className="space-y-3">
              {references.map((ref, i) => (
                <div
                  key={ref.name}
                  className={`reveal delay-${i * 100} flex items-start gap-3 p-4 rounded-xl border`}
                  style={{ borderColor: 'oklch(0.92 0.02 220)', backgroundColor: 'oklch(0.98 0.005 220)' }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: 'oklch(0.48 0.08 155)' }}
                  />
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: 'oklch(0.18 0.02 220)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {ref.name}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {ref.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Aerial photo */}
          <div className="reveal-right">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid oklch(0.90 0.02 220)' }}
            >
              <img
                src={OBRA_IMG}
                alt="Vista aérea de obra de tratamento de esgoto Biosan em Conceição das Alagoas - MG"
                className="w-full h-80 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <p
              className="text-sm text-center mt-3"
              style={{ color: 'oklch(0.60 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
            >
              Vista aérea — Conceição das Alagoas, MG (35.000 habitantes)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
