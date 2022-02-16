import React from 'react';
import Helmet from '../components/Helmet';
import ScrollButton from '../components/ScrollButton';
import Slide from 'react-reveal/Slide';

import devData from '../assets/data/dev';
import DevCard from '../components/DevCard';

const Code = () => {
    return ( 
    <Helmet title='Dev - '>
            <div className="dev">
                <div className="dev-header">
                    <h1>Projects</h1>
                </div>
                <div className="dev-content">
                    {devData.map((item, index) => (
                        <div className="dev-individual">
                            <Slide bottom>
                            <DevCard
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            language={item.language}
                            source={item.source}
                            demo={item.demo}
                            />
                            </Slide>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollButton />
    </Helmet>
     );
}
 
export default Code;