(this["webpackJsonpevaluacion-final"]=this["webpackJsonpevaluacion-final"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/rickandmorty.15c5ace1.png"},23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),i=a.n(c),l=(a(28),a(16)),s=a(17),o=a(6),m=a(22),u=a(21),h=a(5),d=a(18),p=a.n(d),f=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,image:e.image,origin:e.origin.name,status:e.status,episodes:e.episode}}))}))},g=a(8),E=function(e){return console.log(e),n.a.createElement("div",null,n.a.createElement(g.b,{to:"/character/".concat(e.character.id)},n.a.createElement("img",{className:"img",src:e.character.image,alt:"foto de ".concat(e.character.name)}),n.a.createElement("div",{className:"text-container"},n.a.createElement("h1",{className:"title"},e.character.name),n.a.createElement("h3",{className:"espices"},e.character.species))))},v=function(e){var t=e.characters.map((function(e){return n.a.createElement("li",{className:"itemList",key:e.id},n.a.createElement(E,{character:e}))}));return n.a.createElement("ul",{className:"list"},t)},C=function(e){return console.log(e.selectedCharacter),n.a.createElement("div",null,n.a.createElement("img",{className:"img",src:e.selectedCharacter.image,alt:"foto de ".concat(e.selectedCharacter.name)}),n.a.createElement("div",{className:"text-container"},n.a.createElement("h3",{className:"espices"},"Especie:",e.selectedCharacter.species),n.a.createElement("p",null,"origen: ",e.selectedCharacter.origin," "),n.a.createElement("p",null,"Estado: ",e.selectedCharacter.status," "),n.a.createElement("p",null,"episodios: ",e.selectedCharacter.episodes)))},b=function(e){return n.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"busca tu personaje favorito",onChange:function(t){console.log(t.target.value),e.handleFilter({value:t.target.value})}})},k=(a(34),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={characters:[],nameFilter:""},r.getDataFromApi=r.getDataFromApi.bind(Object(o.a)(r)),r.handleFilter=r.handleFilter.bind(Object(o.a)(r)),r.filteredCharacters=r.filteredCharacters.bind(Object(o.a)(r)),r.renderCharacterDetail=r.renderCharacterDetail.bind(Object(o.a)(r)),r}return Object(s.a)(a,[{key:"getDataFromApi",value:function(){var e=this;f().then((function(t){e.setState({characters:t})}))}},{key:"componentDidMount",value:function(){this.getDataFromApi()}},{key:"handleFilter",value:function(e){this.setState({nameFilter:e.value})}},{key:"filteredCharacters",value:function(){var e=this;return this.state.characters.filter((function(t){return t.name.toUpperCase().includes(e.state.nameFilter.toLocaleUpperCase())}))}},{key:"renderCharacterDetail",value:function(e){console.log(this.state);var t=this.state.characters.find((function(t){return t.id===parseInt(e.match.params.id)}));return console.log(t),n.a.createElement(C,{selectedCharacter:t})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("img",{className:"logo",src:p.a,alt:"rick and morty logo"}),n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/"},n.a.createElement(b,{handleFilter:this.handleFilter}),n.a.createElement(v,{characters:this.filteredCharacters()})),n.a.createElement(h.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),a}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(g.a,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.1cea0754.chunk.js.map