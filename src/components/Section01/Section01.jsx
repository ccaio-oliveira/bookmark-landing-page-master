import './style.css';

const Section01 = () => {
    return (
        <section id="section01">
            <div className="container">
                <div className="title">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>
                        A clean and simple interface to organize your favourite websites.
                        Open a new browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="goToDown">
                        <a href="#download" id='linkChrome' className='btnGeral'>Get it on Chrome</a>
                        <a href="#download" id='linkFire'>Get it on Firefox</a>
                    </div>
                </div>
                <div className="img">
                    <img src="./img/illustration-hero.svg" alt="Illustration Hero" />
                    <div className="formBackImg"></div>
                </div>
            </div>
        </section>
    )
}

export default Section01;