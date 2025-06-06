import Navigation from "@/components/Navigation";
import PageFooter from "@/components/PageFooter";

const Story = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Navigation />
    <main className="flex-1 container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-beige-100 rounded-lg shadow p-8">
        <h1 className="text-3xl font-serif font-bold text-olive-700 mb-6">
          Notre Histoire
        </h1>
        <p className="text-lg text-stone-700 mb-6">
          L’aventure{" "}
          <span className="font-semibold text-olive-700">
            Lucid Web Craftsman
          </span>{" "}
          commence avec une passion commune : révéler la beauté de l’artisanat
          et la partager au plus grand nombre.
        </p>
        <p className="text-stone-700 mb-4">
          Depuis nos débuts, nous parcourons les ateliers, les marchés et les
          villages à la recherche de créateurs talentueux. Chaque rencontre,
          chaque objet, chaque histoire nourrit notre envie de valoriser le
          fait-main et l’authenticité.
        </p>
        <p className="text-stone-700 mb-4">
          Aujourd’hui, notre boutique est le reflet de cette quête : une
          sélection exigeante, des pièces uniques, et une volonté de tisser un
          lien entre artisans et amoureux du beau.
        </p>
        <p className="text-stone-700">
          Merci de faire partie de cette aventure et de soutenir l’artisanat
          avec nous.
        </p>
      </div>
    </main>
    <PageFooter />
  </div>
);

export default Story;
