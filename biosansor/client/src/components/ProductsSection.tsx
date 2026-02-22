/*
 * BiosanSor — ProductsSection
 * Design: "Natureza Técnica" — Carrossel dos 4 modelos com cards detalhados
 * Cada card mostra: imagem, capacidade, dimensões, moradores, especificações
 */
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/5515988015195?text=Olá!%20Tenho%20interesse%20no%20produto%20Biosan.%20Pode%20me%20enviar%20mais%20informações?';

const DIMENSOES_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663373834958/CNvFUTjSuzsEyAac.webp';

// Note: product images from the sites show the product - using the hero image as fallback
// since the individual product images are the same (placeholder)
const HERO_IMG = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663373834958/MeGWdjCOGStqvflq.webp';

const products = [
  {
    id: 1,
    model: 'Biosan 1850',
    capacity: '1.850 L/dia',
    diameter: '70 cm',
    length: '120 cm',
    residents: 'Até 15 moradores',
    residentsNum: 15,
    volume: '1,85 m³',
    grading: '40 × 40 × 40 cm',
    extras: ['Acompanha amostra 100ml do catalisador de start', 'Manual e Vídeo de Instalação', '5 anos de garantia de fábrica'],
    ideal: 'Residências unifamiliares, sítios e chácaras de pequeno porte',
    color: 'oklch(0.32 0.08 220)',
    bg: 'oklch(0.88 0.04 220)',
    tag: 'Mais Compacto',
  },
  {
    id: 2,
    model: 'Biosan 3000',
    capacity: '3.000 L/dia',
    diameter: '70 cm',
    length: '200 cm',
    residents: 'Até 23 moradores',
    residentsNum: 23,
    volume: '3,00 m³',
    grading: '50 × 50 × 50 cm',
    extras: ['Manual e Vídeo de Instalação', '5 anos de garantia de fábrica'],
    ideal: 'Condomínios pequenos, pousadas e restaurantes de pequeno porte',
    color: 'oklch(0.48 0.08 155)',
    bg: 'oklch(0.88 0.04 155)',
    tag: 'Popular',
  },
  {
    id: 3,
    model: 'Biosan 4000',
    capacity: '4.000 L/dia',
    diameter: '80 cm',
    length: '200 cm',
    residents: 'Até 30 moradores',
    residentsNum: 30,
    volume: '4,00 m³',
    grading: '50 × 50 × 50 cm',
    extras: ['Manual e Vídeo de Instalação', '5 anos de garantia de fábrica'],
    ideal: 'Condomínios médios, hotéis e estabelecimentos comerciais',
    color: 'oklch(0.55 0.07 60)',
    bg: 'oklch(0.94 0.03 60)',
    tag: 'Mais Vendido',
  },
  {
    id: 4,
    model: 'Biosan 5000',
    capacity: '5.000 L/dia',
    diameter: '80 cm',
    length: '250 cm',
    residents: 'Até 38 moradores',
    residentsNum: 38,
    volume: '5,00 m³',
    grading: '60 × 60 × 60 cm',
    extras: ['Manual e Vídeo de Instalação', '5 anos de garantia de fábrica'],
    ideal: 'Condomínios maiores, hospitais de pequeno porte e clubes',
    color: 'oklch(0.32 0.08 220)',
    bg: 'oklch(0.88 0.04 220)',
    tag: 'Maior Capacidade',
  },
];

function PersonIcon({ color }: { color: string }) {
  return (
    <svg className="w-4 h-4" fill={color} viewBox="0 0 24 24">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  );
}

export default function ProductsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? products.length - 1 : a - 1));
  const next = () => setActive((a) => (a === products.length - 1 ? 0 : a + 1));

  const product = products[active];

  return (
    <section
      id="modelos"
      className="py-24 overflow-hidden"
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
            4 Modelos disponíveis
          </p>
          <h2
            className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
          >
            Escolha o modelo{' '}
            <span className="italic" style={{ color: 'oklch(0.32 0.08 220)' }}>
              ideal
            </span>{' '}
            para você
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg leading-relaxed"
            style={{ color: 'oklch(0.45 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
          >
            Todos os modelos incluem caixa de gradeamento, manual técnico e 5 anos de garantia de fábrica. Para tamanhos maiores, entre em contato.
          </p>
        </div>

        {/* Model selector tabs */}
        <div className="reveal flex flex-wrap gap-3 mb-8">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === i ? 'text-white shadow-lg' : 'bg-white border hover:shadow-md'
              }`}
              style={{
                backgroundColor: active === i ? product.color : undefined,
                borderColor: active === i ? 'transparent' : 'oklch(0.90 0.02 220)',
                color: active === i ? 'white' : 'oklch(0.45 0.03 220)',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {p.model}
            </button>
          ))}
        </div>

        {/* Main carousel card */}
        <div className="reveal-scale">
          <div
            className="bg-white rounded-3xl shadow-xl overflow-hidden border"
            style={{ borderColor: 'oklch(0.90 0.02 220)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Product visual */}
              <div
                className="relative flex flex-col items-center justify-center p-8 md:p-12 min-h-[400px]"
                style={{ backgroundColor: product.bg }}
              >
                {/* Tag */}
                <div
                  className="absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: product.color,
                    color: 'white',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {product.tag}
                </div>

                {/* Product image */}
                <img
                  src={HERO_IMG}
                  alt={`${product.model} — Micro-estação de tratamento de esgoto`}
                  className="w-full max-w-xs h-auto object-contain drop-shadow-xl"
                  loading="lazy"
                />

                {/* Dimensions diagram */}
                <div className="mt-6 w-full max-w-xs">
                  <img
                    src={DIMENSOES_IMG}
                    alt={`Dimensões do modelo ${product.model}`}
                    className="w-full h-auto object-contain opacity-80"
                    loading="lazy"
                  />
                </div>

                {/* Navigation arrows */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:shadow-lg hover:-translate-x-0.5"
                    style={{ color: product.color }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:shadow-lg hover:translate-x-0.5"
                    style={{ color: product.color }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {products.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: active === i ? '24px' : '8px',
                        height: '8px',
                        backgroundColor: active === i ? product.color : 'oklch(0.70 0.04 220)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Product details */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', color: 'oklch(0.18 0.02 220)' }}
                  >
                    {product.model}
                  </h3>
                  <p
                    className="text-lg font-semibold mb-6"
                    style={{ color: product.color, fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {product.capacity}
                  </p>

                  {/* Residents visual */}
                  <div
                    className="flex items-center gap-3 p-4 rounded-xl mb-6"
                    style={{ backgroundColor: product.bg }}
                  >
                    <div className="flex flex-wrap gap-1 flex-1">
                      {Array.from({ length: Math.min(product.residentsNum, 20) }).map((_, i) => (
                        <PersonIcon key={i} color={product.color} />
                      ))}
                      {product.residentsNum > 20 && (
                        <span
                          className="text-xs font-bold"
                          style={{ color: product.color, fontFamily: 'DM Sans, sans-serif' }}
                        >
                          +{product.residentsNum - 20}
                        </span>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div
                        className="text-2xl font-bold"
                        style={{ fontFamily: 'Playfair Display, serif', color: product.color }}
                      >
                        {product.residentsNum}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
                      >
                        moradores
                      </div>
                    </div>
                  </div>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: 'Diâmetro', value: product.diameter },
                      { label: 'Comprimento', value: product.length },
                      { label: 'Volume', value: product.volume },
                      { label: 'Caixa Gradeamento', value: product.grading },
                    ].map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: 'oklch(0.97 0.01 220)', border: '1px solid oklch(0.92 0.02 220)' }}
                      >
                        <div
                          className="text-xs mb-1"
                          style={{ color: 'oklch(0.55 0.04 220)', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {spec.label}
                        </div>
                        <div
                          className="font-bold"
                          style={{ color: 'oklch(0.18 0.02 220)', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Extras */}
                  <div className="space-y-2 mb-6">
                    {product.extras.map((extra) => (
                      <div key={extra} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke={product.color}
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span
                          className="text-sm"
                          style={{ color: 'oklch(0.45 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {extra}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal for */}
                  <div
                    className="p-4 rounded-xl mb-6"
                    style={{ backgroundColor: 'oklch(0.97 0.01 220)', border: `1px solid ${product.bg}` }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: product.color, fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Ideal para
                    </span>
                    <p
                      className="text-sm mt-1"
                      style={{ color: 'oklch(0.45 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {product.ideal}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`${WA_LINK.replace('Tenho interesse no produto Biosan.', `Tenho interesse no modelo ${product.model}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 w-full"
                  style={{
                    backgroundColor: product.color,
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar orçamento — {product.model}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="reveal mt-12 overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden" style={{ border: '1px solid oklch(0.90 0.02 220)' }}>
            <thead>
              <tr style={{ backgroundColor: 'oklch(0.32 0.08 220)' }}>
                <th className="text-left p-4 text-white text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Modelo</th>
                <th className="text-center p-4 text-white text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Capacidade</th>
                <th className="text-center p-4 text-white text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Dimensões (Ø × L)</th>
                <th className="text-center p-4 text-white text-sm font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>Moradores</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr
                  key={p.id}
                  className="cursor-pointer transition-colors hover:bg-opacity-50"
                  style={{ backgroundColor: active === i ? p.bg : i % 2 === 0 ? 'white' : 'oklch(0.99 0.002 220)' }}
                  onClick={() => setActive(i)}
                >
                  <td className="p-4">
                    <span
                      className="font-bold"
                      style={{ color: p.color, fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {p.model}
                    </span>
                  </td>
                  <td className="p-4 text-center text-sm" style={{ color: 'oklch(0.35 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}>{p.capacity}</td>
                  <td className="p-4 text-center text-sm" style={{ color: 'oklch(0.35 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}>{p.diameter} × {p.length}</td>
                  <td className="p-4 text-center text-sm" style={{ color: 'oklch(0.35 0.03 220)', fontFamily: 'DM Sans, sans-serif' }}>{p.residents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note about larger sizes */}
        <div
          className="reveal mt-6 p-4 rounded-xl text-center"
          style={{ backgroundColor: 'oklch(0.88 0.04 155)', border: '1px solid oklch(0.80 0.06 155)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'oklch(0.35 0.08 155)', fontFamily: 'DM Sans, sans-serif' }}
          >
            <strong>Precisa de capacidade maior?</strong> A Biosan atende projetos de qualquer porte — cidades inteiras, hospitais, laboratórios e centros de distribuição.{' '}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
              style={{ color: 'oklch(0.35 0.08 155)' }}
            >
              Entre em contato para tamanhos customizados.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
