/*
 * BiosanSor — HowItWorksSection
 * Design: "Natureza Técnica" — Timeline dos estágios com imagem principal
 * Imagem do diagrama de estágios com logo Biosan em destaque
 */

const ESTAGIOS_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663373834958/cwyCxKBchGqSMfNK.jpg';
const INSTALACAO_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663373834958/pRFuKbewVVFrDhQD.webp';

const pretreatment = [
  {
    num: '01',
    title: 'Caixa de Gordura',
    description: 'Quando há necessidade de tratamento de água cinza da cozinha, é obrigatório o uso de caixa de gordura dimensionada conforme a vazão do projeto.',
  },
  {
    num: '02',
    title: 'Caixa Gradeada / Desarenador',
    description: 'Retém material sólido inorgânico (cabelo, areia, preservativos, lenços) que poderia causar entupimento no reator. É a única manutenção regular necessária.',
  },
];

const stages = [
  {
    num: '1 e 2',
    title: 'Degradação Biológica',
    description: 'Digestão da carga orgânica do efluente. A colônia bacteriana patenteada atua na degradação biológica, promovendo baixíssima concentração de lodo, sem necessidade de manutenção permanente.',
    color: 'oklch(0.32 0.08 220)',
    bg: 'oklch(0.88 0.04 220)',
  },
  {
    num: '3',
    title: 'Estabilização e Filtragem',
    description: 'Estabilização dos elementos dos efluentes e bactérias. Ocorre a remoção de DBO e DQO através de filtragem e aeração natural pela malha filtrante de bambu.',
    color: 'oklch(0.48 0.08 155)',
    bg: 'oklch(0.88 0.04 155)',
  },
  {
    num: '4',
    title: 'Polimento Final',
    description: 'Filtragem final e polimento do efluente. Neste estágio já não apresenta sedimento algum! O efluente sai em padrão classe 2 para descarte seguro.',
    color: 'oklch(0.55 0.07 60)',
    bg: 'oklch(0.94 0.03 60)',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="reveal section-line-green" />
          <p
            className="reveal text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'oklch(0.32 0.08 220)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Biotecnologia em ação
          </p>
          <h2
            className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
          >
            Como funciona a{' '}
            <span className="italic" style={{ color: 'oklch(0.48 0.08 155)' }}>
              Biosan
            </span>
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg leading-relaxed"
            style={{ color: 'oklch(0.45 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Um reator anaeróbio horizontal de fluxo em chicanas com biomassa aderida. Seu interior é dividido em 4 estágios, criando fluxos descendentes e ascendentes para maximizar o contato do esgoto com a colônia bacteriana patenteada.
          </p>
        </div>

        {/* Main diagram image */}
        <div className="reveal-scale mb-16">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl border"
            style={{ borderColor: 'oklch(0.90 0.02 220)' }}
          >
            <img
              src={ESTAGIOS_IMG}
              alt="Diagrama dos 4 estágios de tratamento da Biosan — do esgoto ao efluente tratado"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p
            className="text-center text-sm mt-3"
            style={{ color: 'oklch(0.60 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Diagrama completo dos estágios de tratamento — Biotecnologia Biosan
          </p>
        </div>

        {/* Two-column layout: stages + installation photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Stages */}
          <div>
            {/* Pre-treatment */}
            <div className="reveal mb-10">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: 'oklch(0.94 0.03 60)',
                  color: 'oklch(0.50 0.07 60)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Pré-Tratamento
              </div>
              <div className="space-y-4">
                {pretreatment.map((item) => (
                  <div
                    key={item.num}
                    className="flex gap-4 p-4 rounded-xl border"
                    style={{ borderColor: 'oklch(0.92 0.02 220)', backgroundColor: 'oklch(0.98 0.005 220)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{
                        backgroundColor: 'oklch(0.94 0.03 60)',
                        color: 'oklch(0.50 0.07 60)',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                    >
                      {item.num}
                    </div>
                    <div>
                      <h4
                        className="font-bold mb-1"
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'oklch(0.18 0.02 220)' }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'oklch(0.50 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment stages */}
            <div className="reveal delay-100">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: 'oklch(0.88 0.04 220)',
                  color: 'oklch(0.32 0.08 220)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Sistema Biosan — Tratamento Principal
              </div>
              <div className="space-y-4">
                {stages.map((stage, i) => (
                  <div
                    key={stage.num}
                    className={`reveal delay-${i * 100 + 100} flex gap-4 p-5 rounded-xl border transition-all duration-300 hover:shadow-md`}
                    style={{ borderColor: 'oklch(0.92 0.02 220)', backgroundColor: 'white' }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{
                        backgroundColor: stage.bg,
                        color: stage.color,
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1rem',
                      }}
                    >
                      {stage.num}
                    </div>
                    <div>
                      <h4
                        className="font-bold mb-1"
                        style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
                      >
                        {stage.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'oklch(0.50 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Installation photo + key info */}
          <div className="reveal-right">
            <div className="sticky top-24">
              <div
                className="rounded-3xl overflow-hidden shadow-xl mb-6"
                style={{ border: '1px solid oklch(0.90 0.02 220)' }}
              >
                <img
                  src={INSTALACAO_IMG}
                  alt="Instalação real da Biosan — micro-estação de tratamento de esgoto enterrada"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Key technical info */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: 'oklch(0.97 0.01 220)', border: '1px solid oklch(0.92 0.02 220)' }}
              >
                <h4
                  className="font-bold mb-4 text-lg"
                  style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
                >
                  Especificações Técnicas
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Norma técnica', value: 'ABNT NBR 17.076/2024' },
                    { label: 'Padrão de descarte', value: 'CONAMA Nº 430/2011' },
                    { label: 'Certificação', value: 'CETESB Decreto Nº 8.468/1976' },
                    { label: 'Material', value: 'Fibra de vidro reforçada com UV' },
                    { label: 'Meio filtrante', value: 'Bambu — vida útil estimada 50 anos' },
                    { label: 'Colônia bacteriana', value: '+180 tipos de bactérias patenteadas' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-4 py-2 border-b" style={{ borderColor: 'oklch(0.92 0.02 220)' }}>
                      <span
                        className="text-sm"
                        style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-sm font-semibold text-right"
                        style={{ color: 'oklch(0.32 0.08 220)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
