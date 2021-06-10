import './App.css';
import "./bootstrap.css";
import FilmList from "./components/filmList/FilmList";
import civilwar from "./image/civilwar.jpg";
import endgame from "./image/endgame.jpg";
import infinitywar from "./image/infinitywar.jpg";
import ragnarok from "./image/ragnarok.jpg";
import spiderman from "./image/spiderman.jpg";
import Header from "./components/header/Header"


const movies = [
  { 
    id: 1,
    titre: "Capitaine America: La guerre civile",
    synopsis: "Les Avengers ont sauvé beaucoup de gens lors de leurs précédentes interventions, mais ils ont aussi fait beaucoup d'innocentes victimes. Le gouvernement demande donc au groupe de superhéros de signer une entente qui ferait de lui une filiation de l'État. Cette nouvelle provoque une scission au sein de l'équipe : Capitaine America refuse d'être tributaire du gouvernement alors qu'Iron Man croit aux bienfaits de cette alliance. Quand Steve Rogers réalise que des gens mal intentionnés tentent de nuire à son ami Bucky, il s'efforcera de le protéger, même si cela signifie scinder le groupe encore davantage.",
    affiche: civilwar,
    filmFavori: false,
  },
  {
    id: 2,
    titre: "Avengers: La guerre de l'infini",
    synopsis: "La destruction de l'univers est imminente. Le diabolique Thanos est à la recherche des Pierres d'Infinité qui lui permettront de régner en maître et en Dieu. Quelques superhéros en possèdent une et ils sont la cible d'ennemis puissants. Des alliances se forment au fil des affrontements, permettant notamment à Thor de faire équipe avec les Gardiens de la Galaxie. Les Avengers auront peut-être même la chance d'être réhabilités. Où qu'ils se trouvent, que ce soit à Wakanda ou dans l'espace, le temps est compté et les défenseurs de la planète devront donner le meilleur d'eux pour survivre.",
    affiche: infinitywar,
    filmFavori: false,
  },
  {
    id: 3,
    titre: "Avengers: Phase finale",
    synopsis: "Depuis que Thanos a fait disparaître en un seul claquement de doigts la moitié de toute forme de vie, l'univers est en déroute. Les survivants sont en colère, devant faire le deuil de leur existence passée. Le fautif s'est complètement volatilisé dans la nature, obligeant les Avengers à se lancer à ses trousses afin de lui ravir les pierres du Gant de l'infini. Iron Man est en mission dans l'espace, pendant que Captain America, Thor, Hulk et leurs camarades protègent la Terre. Lorsque Captain Marvel débarque pour leur prêter main-forte, le groupe reçoit un signal émanant d'une planète leur indiquant la présence de Thanos...",
    affiche: endgame,
    filmFavori: false,
  },
  {
    id: 4,
    titre: "Thor: Ragnarok",
    synopsis: "Après avoir constaté la mort de leur père, le dieu Odin, Thor et son frère Loki sont transportés sur une mystérieuse planète gouvernée par un hurluberlu qui organise des combats de gladiateurs. Thor doit alors combattre son ami Hulk, considéré comme le guerrier le plus puissant et acclamé par les habitants de l'endroit. Pendant ce temps, sur Asgard, la déesse de la mort engendre un règne de terreur. Thor devra trouver un moyen de s'échapper de la planète qui a fait de lui un esclave afin d'aller défendre son royaume et son peuple, en perdition.",
    affiche: ragnarok,
    filmFavori: false,
  },
  {
    id: 5,
    titre:"Spider-Man: Loin des siens",
    synopsis: "Depuis que les Avengers ont sauvé la planète, tout est redevenu comme avant. Peter Parker a retrouvé son ancienne vie : celle d'un adolescent qui doit composer avec l'école et ses béguins amoureux. Son alter ego Spider-Man a besoin de vacances et il ne répond même pas aux appels de Nick Fury. Lors d'un séjour scolaire en Europe, il voit apparaître un monstre qui saccage tout sur son passage. Heureusement, cette entité est tenue en échec par Mysterio. Voilà un allié idéal pour Spider-Man, qui s'enfonce dans une véritable crise identitaire. Iron Man n'est plus là pour le protéger et l'univers a besoin d'un véritable superhéros.",
    affiche: spiderman,
    filmFavori: false,
  }
];

function App() {
  return (    
    <div className="App">
      <Header />
      <FilmList filmItems={movies} />

    </div>
  );
}

export default App;
