import butterChicken from './menuImages/butterchicken.jpg';
import shahiPaneer from './menuImages/shahipaneer.jpg';
import bhindi from './menuImages/bhindi.jpg';
import dal from './menuImages/dalmakhni.jpg';
import naan from './menuImages/butternaan.jpg';
import roti from './menuImages/roti.jpg';
import rice from './menuImages/jeerarice.jpg';


const menucontainer = document.createElement('div');
let isPresent=false;

function displayMenu() {

    if (!isPresent) {
        menucontainer.classList.add('menucontainer');

        const menuheading = document.createElement('div');
        menuheading.classList.add('menuheading');
        menuheading.innerHTML = 'Our Food Menu';

        const menusubheading1 = document.createElement('div');
        menusubheading1.classList.add('menusubheading');
        menusubheading1.innerHTML = 'The Good Stuff';

        const item1 = document.createElement('div');
        item1.classList.add('item');
        const butterChickenImage = new Image();
        butterChickenImage.src = butterChicken;
        const butterChickenHeading = document.createElement('div');
        const butterChickenPrice = document.createElement('div');
        butterChickenHeading.innerHTML = 'Butter Chicken';
        butterChickenPrice.innerHTML = '$40';
        butterChickenPrice.classList.add('price');

        item1.appendChild(butterChickenImage);
        item1.appendChild(butterChickenHeading);
        item1.appendChild(butterChickenPrice);


        const item2 = document.createElement('div');
        item2.classList.add('item');
        const shahiPaneerImage = new Image();
        shahiPaneerImage.src = shahiPaneer;
        const shahiPaneerHeading = document.createElement('div');
        const shahiPaneerPrice = document.createElement('div');
        shahiPaneerHeading.innerHTML = 'Butter Chicken';
        shahiPaneerPrice.innerHTML = '$40';
        shahiPaneerPrice.classList.add('price');

        item2.appendChild(shahiPaneerImage);
        item2.appendChild(shahiPaneerHeading);
        item2.appendChild(shahiPaneerPrice);

        const item3 = document.createElement('div');
        item3.classList.add('item');
        const bhindiImage = new Image();
        bhindiImage.src = bhindi;
        const bhindiHeading = document.createElement('div');
        const bhindiPrice = document.createElement('div');
        bhindiHeading.innerHTML = 'Bhindi Sabzi';
        bhindiPrice.innerHTML = '$40';
        bhindiPrice.classList.add('price');

        item3.appendChild(bhindiImage);
        item3.appendChild(bhindiHeading);
        item3.appendChild(bhindiPrice);

        const item4 = document.createElement('div');
        item4.classList.add('item');
        const dalImage = new Image();
        dalImage.src = dal;
        const dalHeading = document.createElement('div');
        const dalPrice = document.createElement('div');
        dalHeading.innerHTML = 'Butter Chicken';
        dalPrice.innerHTML = '$40';
        dalPrice.classList.add('price');

        item4.appendChild(dalImage);
        item4.appendChild(dalHeading);
        item4.appendChild(dalPrice);

        const menusubheading2 = document.createElement('div');
        menusubheading2.classList.add('menusubheading');
        menusubheading2.innerHTML = 'Breads';

        const item5 = document.createElement('div');
        item5.classList.add('item');
        const naanImage = new Image();
        naanImage.src = naan;
        const naanHeading = document.createElement('div');
        const naanPrice = document.createElement('div');
        naanHeading.innerHTML = 'Butter Naan';
        naanPrice.innerHTML = '$40';
        naanPrice.classList.add('price');

        item5.appendChild(naanImage);
        item5.appendChild(naanHeading);
        item5.appendChild(naanPrice);

        const item6 = document.createElement('div');
        item6.classList.add('item');
        const rotiImage = new Image();
        rotiImage.src = roti;
        const rotiHeading = document.createElement('div');
        const rotiPrice = document.createElement('div');
        rotiHeading.innerHTML = 'Tawa Roti';
        rotiPrice.innerHTML = '$40';
        rotiPrice.classList.add('price');

        item6.appendChild(rotiImage);
        item6.appendChild(rotiHeading);
        item6.appendChild(rotiPrice);

        const menusubheading3 = document.createElement('div');
        menusubheading3.classList.add('menusubheading');
        menusubheading3.innerHTML = 'Rice';

        const item7 = document.createElement('div');
        item7.classList.add('item');
        const riceImage = new Image();
        riceImage.src = rice;
        const riceHeading = document.createElement('div');
        const ricePrice = document.createElement('div');
        riceHeading.innerHTML = 'Jeera Rice';
        ricePrice.innerHTML = '$40';
        ricePrice.classList.add('price');

        item7.appendChild(riceImage);
        item7.appendChild(riceHeading);
        item7.appendChild(ricePrice);


        menucontainer.appendChild(menuheading);

        menucontainer.appendChild(menusubheading1);
        menucontainer.appendChild(item1);
        menucontainer.appendChild(item2);
        menucontainer.appendChild(item3);
        menucontainer.appendChild(item4);

        menucontainer.appendChild(menusubheading2);
        menucontainer.appendChild(item5);
        menucontainer.appendChild(item6);

        menucontainer.appendChild(menusubheading3);
        menucontainer.appendChild(item7)



        document.body.appendChild(menucontainer);

        isPresent=true;
    }

    else 
        removeMenu();
}

function removeMenu() {
    document.body.removeChild(menucontainer);
    menucontainer.innerHTML="";
    isPresent=false;
}



export { displayMenu, removeMenu };