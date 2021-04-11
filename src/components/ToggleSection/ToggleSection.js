import { useState, useEffect } from "react";

import ItemContent from '../../components/ItemContent/ItemContent';

import './ToggleSection.scss';

const ToggleSection = props => {
    const [showContent, setShowContent] = useState({});

    const toggleComment = id => {
        setShowContent(prevShowContent => ({
            ...prevShowContent,
            [id]: !prevShowContent[id],
            selected: true
        }));
    }
    return (
        <div className="items-container">
            {props.items.map(obj => (
                <div className="items" key={obj.id}>
                    {obj ? (
                        <div className="items-title" onClick={() => toggleComment(obj.id)} style={showContent[obj.id] ? { backgroundColor: '#000', color: '#fff' } : null}>
                            <h1>{obj.title}</h1>
                        </div>
                    ) : null}
                    {showContent[obj.id] && <ItemContent>{obj.content.join(' ')}</ItemContent>}
                </div>
            ))}

        </div>
    );
};

export default ToggleSection;