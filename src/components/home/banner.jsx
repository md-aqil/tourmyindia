import BannerImage from './banner-image'
import Search from './search'
import classes from './banner.module.css'

export default function Banner() {
    return (
        <div className={classes.heroSection}>
            <div className={classes.titleSection}>
                <h1 className={classes.heading}>Find Your Package</h1>
                <h4 className={classes.subHeading}>100+ Travel Experiences in 12+ Countries</h4>
            </div>
            <Search />
            <BannerImage />
        </div>
    )
}
