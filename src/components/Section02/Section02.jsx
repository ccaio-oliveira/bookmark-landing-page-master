import { useState } from 'react';
import ChangeContent from './ChangeContent/ChangeContent';
import SimpBook from './SimpleBookmarking/SimpBook';
import './style.css';

const Section02 = () => {
    const [content, setContent] = useState(<SimpBook />);
    return (
        <section id="features">
            <div className="container">
                <div className="text">
                    <h1>Features</h1>
                    <p>
                        Our aim is to make it quick and easy for yu to access your
                        favourite websites. Your bookmarks sync between your devices
                        so you can access them on the go.
                    </p>
                </div>
                <div className='changeContent'>
                    <ChangeContent setContent={setContent} />
                    {content}
                </div>
            </div>
        </section>
    )
}

export default Section02;