import Search from './search'
import classes from './banner.module.css';
import TravelArtLightIcon from "./travel-art.svg";
import { useTheme } from '../../theme';

export default function Banner() {
   
    return (
        <div className={classes.heroSection}>
            <div className={classes.titleSection}>
                <h1 className={classes.heading}>Find Your Package</h1>
                <h4 className={classes.subHeading}>100+ Travel Experiences in 12+ Countries</h4>
            </div>
            <Search />
            <TravelArtLightIcon className={classes.icon} />
        </div>
    )
}
