import {
    Chat,
    EmojiFlags,
    ExpandMore,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary,
} from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            {/* <SidebarRow title={user.displayName} src={user.photoURL} /> */}
            <SidebarRow title={user.displayName} src={user.photoURL} />
            <SidebarRow
                Icon={LocalHospital}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMore} title="See more" />
        </div>
    )
}

export default Sidebar
