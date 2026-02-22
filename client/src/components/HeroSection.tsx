/*
 * BiosanSor — HeroSection
 * Design: "Natureza Técnica" — Split-screen assimétrico
 * Lado esquerdo: texto com tipografia display + CTA
 * Lado direito: imagem hero do produto com selos de patente
 */

const WA_LINK = 'https://wa.me/5515988015195?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Biosan.';

const HERO_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663373834958/MeGWdjCOGStqvflq.webp';

export default function HeroSection() {
  return (
    <section
      id="produto"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.32 0.08 220) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative circle top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.32 0.08 220) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)] py-16">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 mb-6 self-start">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: 'oklch(0.88 0.04 155)',
                  color: 'oklch(0.35 0.08 155)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Biotecnologia Patenteada
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: 'oklch(0.88 0.04 220)',
                  color: 'oklch(0.32 0.08 220)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                5 Anos de Garantia
              </span>
            </div>

            {/* Main title */}
            <h1
              className="reveal delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontFamily: 'Playfair Display, serif',
                color: 'oklch(0.18 0.02 220)',
                lineHeight: '1.1',
              }}
            >
              Do esgoto ao{' '}
              <span
                className="italic"
                style={{ color: 'oklch(0.32 0.08 220)' }}
              >
                efluente tratado
              </span>{' '}
              em até{' '}
              <span style={{ color: 'oklch(0.48 0.08 155)' }}>6 horas</span>
            </h1>

            {/* Divider line */}
            <span className="reveal delay-200 section-line" />

            {/* Description */}
            <p
              className="reveal delay-200 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              style={{
                color: 'oklch(0.45 0.03 220)',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              A <strong style={{ color: 'oklch(0.32 0.08 220)' }}>Biosan</strong> é a micro-estação de tratamento de esgoto mais compacta e eficiente do mercado. Mais de{' '}
              <strong>90% de eficiência</strong> na remoção de DBO, sem lodo, sem energia elétrica e com manutenção praticamente zero.
            </p>

            {/* Key stats */}
            <div className="reveal delay-300 grid grid-cols-3 gap-4 mb-10">
              {[
                { value: '+90%', label: 'Eficiência DBO' },
                { value: '5 anos', label: 'Garantia' },
                { value: '0', label: 'Energia Elétrica' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      color: 'oklch(0.32 0.08 220)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal delay-400 flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'oklch(0.32 0.08 220)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Orçamento
              </a>
              <a
                href="#como-funciona"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:shadow-md border"
                style={{
                  color: 'oklch(0.32 0.08 220)',
                  borderColor: 'oklch(0.32 0.08 220)',
                  fontFamily: 'DM Sans, sans-serif',
                  backgroundColor: 'transparent',
                }}
              >
                Ver como funciona
              </a>
            </div>

            {/* Location badge */}
            <div className="reveal delay-500 flex items-center gap-2 mt-8">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: 'oklch(0.48 0.08 155)' }}
              />
              <span
                className="text-sm"
                style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Distribuidor em <strong>Sorocaba-SP</strong> · WhatsApp: (15) 98801-5195
              </span>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="reveal-right relative flex items-center justify-center">
            {/* Background circle */}
            <div
              className="absolute inset-0 rounded-full opacity-10"
              style={{
                background: 'radial-gradient(circle, oklch(0.32 0.08 220) 0%, transparent 70%)',
                transform: 'scale(1.2)',
              }}
            />

            {/* Product image */}
            <div className="relative z-10 w-full max-w-md lg:max-w-lg">
              <img
                src={HERO_IMG}
                alt="Biosan — Micro-estação de tratamento de esgoto com biotecnologia patenteada e 5 anos de garantia"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20"
              style={{ border: '1px solid oklch(0.90 0.02 220)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'oklch(0.88 0.04 155)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="oklch(0.48 0.08 155)" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div
                  className="text-sm font-bold"
                  style={{ color: 'oklch(0.18 0.02 220)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Laudos INMETRO
                </div>
                <div
                  className="text-xs"
                  style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
                >
                  Eficiência comprovada em laboratório
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
            fill="oklch(0.97 0.01 220)" />
        </svg>
      </div>
    </section>
  );
}
