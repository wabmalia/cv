import "./header.scss"
import { Icon } from '@iconify/react'
import linkedinIcon from '@iconify-icons/fa/linkedin'
import mapMarker from '@iconify-icons/el/map-marker';


import avatar from "../../../images/profile.jpg"

const Header = () => (
    <header className="cv-header">
        <div>
            <h1>Wilson Mália</h1>
            <h3>Software Enginner</h3>
            <div className="info">
                <div>
                    <Icon icon={mapMarker} />
                    <span>Lisbon, Portugal</span>
                </div>
                <div>
                    <Icon icon={linkedinIcon} />
                    <a href="https://linkedin.com/in/wabmalia">linkedin.com/in/wabmalia</a>
                </div>
            </div>
        </div>
        <img src={avatar} alt="It's me" />
    </header>
)

export { Header }