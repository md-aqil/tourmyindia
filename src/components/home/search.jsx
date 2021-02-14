import classes from './search.module.css';
import { useState } from "react";
const Search = () => {
    const [ text, setText ] = useState('');
    return(
        <div>
            <div className={classes.searchBox}>
                <svg className={classes.searchIcon} xmlns="http://www.w3.org/2000/svg" width="27" height="27.007" viewBox="0 0 27 27.007">
                    <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z" transform="translate(-4.5 -4.493)" opacity="0.568"/>
                </svg>
               <input onChange={e => setText(e.target.value)} value={text} className={classes.input} type="text" placeholder="Where to...?"/>
               { text && <span className="closeIcon" onClick={() => setText('')}>&times;</span> } 
               <button>SEARCH</button>
            </div>
        </div>
    )
}
export default Search;