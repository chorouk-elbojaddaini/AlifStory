import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = [
    {
      title: 'DES RÉCITS AUTHENTIQUES',
      description: 'offre aux enfants la possibilité'
    },
    {
      title: 'UN ACCOMPAGNEMENT ÉDUCATIF COMPLET',
      description: 'En plus des récits, ils inclusent'
    },
    {
      title: 'UN ACCOMPAGNEMENT ÉDUCATIF COMPLET',
      description: 'En plus des récits, ils inclusent'
    },
    {
      title: 'UN ACCOMPAGNEMENT ÉDUCATIF COMPLET',
      description: 'En plus des récits, ils inclusent'
    }
  ];

  middle_cards = [
    {
      icon: "assets",
      desc: "47 récits"
    },
    {
      icon: "assets",
      desc: "7 prophètes"
    },
    {
      icon: "assets",
      desc: "+ de 3h d'écoute"
    },
    {
      icon: "assets",
      desc: "sans onde !"
    }
  ];
  products = [
    {
      title: "Des livrets pédagogiques",
      image: "assets",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, exercitationem odio obcaecati nam libero"
    },
    {
      title: "D'autres récits à télécharger",
      image: "assets",
      description: "Lorem ipsum dolor sitadipisicing elit. Neque, exercitationem rem ex unde rerum officiis beatae laborum, odio obcaecati nam libero"
    }
  ];
  opinions = [
    {
      name: "Sandie Merina",
      opinion: "un cadeau parfait pour donner à un enfant , la boite est magnifique et très jolie",
      date: "12 juillet 2023",
      rating: 4
    },
    {
      name: "Sandie Merina",
      opinion: "un cadeau parfait pour donner à un enfant , la boite est magnifique et très jolie",
      date: "12 juillet 2023",
      rating: 0
    },
    {
      name: "Sandie Merina",
      opinion: "un cadeau parfait pour donner à un enfant , la boite est magnifique et très jolie",
      date: "12 juillet 2023",
      rating: 5
    }
  ];
}
