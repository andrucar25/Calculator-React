import React from 'react';

import './Toggle.css';

const HeaderTheme = ({ toggled, onClick }) => {
    return (
        <>
           {toggled ? <p className="header__title_alt">calc</p> : <p className="header__title">calc</p> } 
            <div>
                <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
                <div className="notch">

                </div>
            </div>

        </div>
        </>
      );
}
 
export default HeaderTheme;