import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {FcHome} from "react-icons/fc";
import{GoReport} from "react-icons/go";
import{MdProductionQuantityLimits, MdOutlineMessage, MdSupportAgent} from "react-icons/md";
import{GiTeamIdea} from "react-icons/gi";

export const SideBarData =[
    {
        title: 'HOME',
        path: '/',
        icon: <FcHome />,
        cName: "navText"
    },
    {
        title: 'REPORTS',
        path: '/reports',
        icon: <GoReport />,
        cName: "navText"
    },
    {
        title: 'PRODUCTS',
        path: '/products',
        icon: <MdProductionQuantityLimits />,
        cName: "navText"
    },
    {
        title: 'Team',
        path: '/team',
        icon: <GiTeamIdea />,
        cName: "navText"
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <MdOutlineMessage />,
        cName: "navText"
    },
    {
        title: 'Support',
        path: '/support',
        icon: <MdSupportAgent />,
        cName: "navText"
    },
    
]