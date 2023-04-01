import React from 'react'
import {Home, Code, Contacts, FolderSpecial, Info } from '@material-ui/icons'

export const SidebarData = [
    {
        tittle:"Home",
        icon:<Home/>,
        link:"/home"
    },
    {
        tittle:"About Me",
        icon:<Info/>,
        link:"/about"
    },
    {
        tittle:"Skills",
        icon:<Code/>,
        link:"/skills"
    },
    {
        tittle:"Contact",
        icon:<Contacts/>,
        link:"/contact"
    },
    {
        tittle:"Portfolio",
        icon:<FolderSpecial/>,
        link:"/portfolio"
    },
]