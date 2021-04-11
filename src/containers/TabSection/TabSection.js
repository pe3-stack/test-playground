import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TabSection.scss";

import ToggleSection from '../../components/ToggleSection/ToggleSection';

function TabSection() {

    const [items, setItems] = useState([]);

    const getData = () => {
        let tab1 = "data/tab1.json";
        let tab2 = "data/tab2.json";
        let tab3 = "data/tab3.json";

        const reqTab1 = axios.get(tab1);
        const reqTab2 = axios.get(tab2);
        const reqTab3 = axios.get(tab3);

        axios
            .all([reqTab1, reqTab2, reqTab3])
            .then(
                axios.spread((...responses) => {
                    const resTab1 = responses[0];
                    const resTab2 = responses[1];
                    const resTab3 = responses[2];

                    setItems([Object.assign(resTab1.data.item, { id: 0 }), Object.assign(resTab2.data.item, { id: 1 }), Object.assign(resTab3.data.item, { id: 2 })]);
                })
            )
            .catch(errors => {
                console.error(errors);
            });

    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="sixth-section">
            <ToggleSection items={items} />
        </div>
    );
}

export default TabSection;
