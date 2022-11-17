import SimpBook from "../SimpleBookmarking/SimpBook";
import Speed from './../SpeedySearching/Speed';
import Easy from './../EasySharing/Easy';
import './style.css';
import { useState } from 'react';

const ChangeContent = ({ setContent }) => {
    const [linkContent, setLinkContent] = useState('simple')
    const changeCont = (linkContent, content) => {
        setLinkContent(linkContent);
        setContent(content);
    }

    return (
        <div id="btnChange" className={`${linkContent}Content`}>
            <button className="simple" onClick={() => changeCont('simple', <SimpBook />)}>Simple Bookmarking</button>
            <button className="speed" onClick={() => changeCont('speed', <Speed />)}>Speedy Searching</button>
            <button className="easy" onClick={() => changeCont('easy', <Easy />)}>Easy Sharing</button>
        </div>
    )
}

export default ChangeContent;