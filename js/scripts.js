//Creo array di oggetti con le informazioni fornite
const groupOfTheWork = [
    {
        firstname: 'Wayne',
        lastname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstname: 'Angela',
        lastname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        firstname: 'Walter',
        lastname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        firstname: 'Angela',
        lastname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        firstname: 'Scott',
        lastname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        firstname: 'Barbara',
        lastname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
];
//console.log(groupOfTheWork)
//Stampo in console tutte le informazioni e poi le stampo sul DOC
for (let i = 0; i < groupOfTheWork.length; i++){
    const element = groupOfTheWork[i];
    const colDom = document.createElement('div');
    colDom.classList.add('col-4');
    for (let key in element) {
        colDom.innerHTML += element[key];         
        //console.log(element[key]);
    }
    const rowDom = document.querySelector('.row');
    rowDom.append(colDom);

}
