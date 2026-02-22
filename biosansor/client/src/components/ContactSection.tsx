/*
 * BiosanSor — ContactSection
 * Design: "Natureza Técnica" — CTA final com WhatsApp Sorocaba-SP
 * Fundo claro com destaque para o botão de contato
 */

const WA_LINK = 'https://wa.me/5515988015195?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Biosan%20e%20solicitar%20um%20orçamento.';

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="py-24 overflow-hidden"
      style={{ backgroundColor: 'oklch(0.97 0.01 220)' }}
    >
      <div className="container">
        <div
          className="reveal-scale rounded-3xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, oklch(0.32 0.08 220) 0%, oklch(0.25 0.09 230) 50%, oklch(0.40 0.09 200) 100%)',
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          {/* Decorative circles */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, white 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, oklch(0.80 0.06 155) 0%, transparent 70%)',
              transform: 'translate(-30%, 30%)',
            }}
          />

          <div className="relative z-10 p-8 md:p-16 text-center">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Pronto para{' '}
              <span className="italic" style={{ color: 'oklch(0.85 0.08 155)' }}>
                transformar
              </span>{' '}
              seu saneamento?
            </h2>

            <p
              className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Fale agora com nosso distribuidor em <strong className="text-white">Sorocaba-SP</strong>. Tire suas dúvidas, solicite um orçamento personalizado e descubra qual modelo Biosan é ideal para sua necessidade.
            </p>

            {/* Main CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center gap-4 px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-200 hover:opacity-95 hover:shadow-2xl hover:-translate-y-1 mb-6"
              style={{
                backgroundColor: '#25D366',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp agora
            </a>

            {/* Phone number */}
            <div className="flex items-center justify-center gap-2 text-white/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span
                className="text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                (15) 98801-5195 · Sorocaba-SP
              </span>
            </div>
          </div>
        </div>

        {/* Quick FAQ */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              q: 'Precisa de caminhão limpa-fossa?',
              a: 'Não. A Biosan não gera lodo excedente, eliminando a necessidade de caminhão limpa-fossa e economizando mais de R$ 1.000/ano.',
            },
            {
              q: 'Funciona sem energia elétrica?',
              a: 'Sim. O processo é 100% passivo e natural, sem necessidade de energia elétrica, ideal para áreas remotas.',
            },
            {
              q: 'Qual a manutenção necessária?',
              a: 'Apenas a limpeza simples da caixa de gradeamento, que retém sólidos grosseiros. Sem produtos químicos ou reaplicação de bactérias.',
            },
          ].map((faq, i) => (
            <div
              key={faq.q}
              className={`reveal delay-${i * 100 + 100} p-6 rounded-2xl bg-white border`}
              style={{ borderColor: 'oklch(0.92 0.02 220)' }}
            >
              <h4
                className="font-bold mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
              >
                {faq.q}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'oklch(0.50 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
