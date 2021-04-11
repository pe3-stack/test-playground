import React from "react";

import "./CardSection.scss";

import card_play_harder from "../../assets/card-play-harder.png";
import card_simplicity from "../../assets/card-simplicity.png";
import card_innovation from "../../assets/card-innovation.png";

import Card from "../../components/UI/Card/Card";

function CardSection() {

    return (
        <div className="card-section">
            <Card image={card_play_harder}>Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.</Card>
            <Card image={card_simplicity}>Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.</Card>
            <Card image={card_innovation}>Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.</Card>
        </div>
    );
}

export default CardSection;
