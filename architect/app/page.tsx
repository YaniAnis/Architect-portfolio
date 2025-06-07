import Image from "next/image";
import Navbar from "./components/nav";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        {/* Responsive container */}
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-2 sm:px-4">
          <div className="h-full w-full max-w-4xl lg:ml-12 p-4 sm:p-8 rounded-lg shadow-lg ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-yellow-800">
              A Propos de
            </h1>
            <p className="text-base sm:text-lg mb-8 mt-8 sm:mt-16 md:mt-44">
              Fondée en 2013, Benzamia Promotion Immobilière est un acteur
              incontournable du secteur immobilier dans la wilaya de Chlef. Avec
              260 appartements livrés sur 3 sites et 192 appartements en cours de
              réalisation sur 2 sites, nous avons su bâtir une réputation solide
              grâce à notre engagement envers l’excellence et la satisfaction de
              nos clients.
              <br />
              <br />
              Nous offrons bien plus que de simples appartements : nous concevons
              des espaces de vie élégants et fonctionnels, où confort et
              modernité se conjuguent harmonieusement. Nos projets se distinguent
              par des prestations haut de gamme, des finitions soignées et des
              emplacements stratégiques, garantissant ainsi un cadre de vie
              d’exception.
            </p>
          </div>
          <div className="w-full max-w-4xl lg:ml-12 mt-8 lg:mt-0 border-l border-gray-300 p-2 rounded-lg shadow-lg  hidden sm:block">
            <Image
              src="/images/architect.jpg"
              alt="Architectural Design"
              width={800}
              height={600}
              className="rounded-lg shadow-lg mb-8 object-cover w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
          {/* Mobile image */}
          <div className="w-full mt-6 sm:hidden">
            <Image
              src="/images/architect.jpg"
              alt="Architectural Design"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="px-2 sm:px-4">
          <ProjectCard
            title="Projet Résidentiel Chlef"
            description="Un projet moderne situé au cœur de Chlef, offrant des appartements spacieux et lumineux avec des prestations haut de gamme."
            imageUrl="/images/project1.jpg"
            link="/projects/chlef"
          />
        </div>
      </body>
    </html>
  );
}
