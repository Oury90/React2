import React from "react";
import Timer from "../Timer";

const sizing = {
    width: "100%",
    height: "100vh"
}


function Banair(){
    return <div  className="amadou">
    <div id="carouselExampleFade" class="carousel slide carousel-fade " >
        <Timer />
        <div class="carousel-inner " style={sizing}>
            <div class="carousel-item active ">
                <img src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_1280.jpg" className="d-block w-100 oury" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=ais" class="d-block w-100 h-50" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://png.pngtree.com/background/20230512/original/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-picture-image_2503007.jpg" class="d-block w-100 h-50" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon oury" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
}

export default Banair;