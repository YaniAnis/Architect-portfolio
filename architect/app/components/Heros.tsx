import Link from "next/link"


export default function Heros() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/luxury-apartment.mp4" type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navigation */}


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/90 text-sm lg:text-base mb-4 tracking-wide">Promotion Immobilière BENZAMIA</p>

          <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Trouvez Votre Appartement Neuf
            <br />
            <span className="text-3xl lg:text-5xl xl:text-6xl">à Chlef</span>
          </h2>

          <p className="text-white/90 text-base lg:text-lg xl:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Investissez dans un logement de qualité, alliant confort, sécurité et proximité des commodités. Trouvez
            <br className="hidden lg:block" />
            votre futur chez-vous dès aujourd&apos;hui !
          </p>

          </div>
        </div>
      </div>

  )
}
