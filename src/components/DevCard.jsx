import React from 'react';



const DevCard = (props) => {

    const devLanguages = props.language;
    const languageList = devLanguages.map((devLanguages) =>
    <div className='dev-card-language'>{devLanguages}</div>    
    )

    return ( 
        <div className="dev-card">
            <div className="dev-card-content">
                <img src={props.img} alt='logo' className='dev-card-image' />
                <div className="dev-card-back"></div>
                <div className="dev-card-text">
                <h2>{props.title}</h2>
                <p dangerouslySetInnerHTML={{__html: props.desc}}></p>
                <div className="dev-card-languages">
                {languageList}
                </div>
                <div className="dev-card-links">
                <a href={props.source} target={'_blank'}>
                    <button><i className='bx bxl-github'></i>View Source Code</button>
                </a>
                <a href={props.demo} target={'_blank'}>
                    <button><i className='bx bx-link-external'></i>View Demo</button>
                </a>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default DevCard