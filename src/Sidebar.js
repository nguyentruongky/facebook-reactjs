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

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <SidebarRow title={user.displayName} src={user.photoURL} /> */}
            <SidebarRow
                title="Ky Nguyen"
                src="https://vcdn-sohoa.vnecdn.net/2021/02/16/v2-4f48da9ef042a1915ebfedd0682-6733-6243-1613447924.jpg"
            />
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
