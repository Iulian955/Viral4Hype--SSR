import {lazy} from 'react';

const HomePage = lazy(()=>import('../components/Homepage/Homepage'));
const Services = lazy(()=>import('../components/ServicesPage/ServicesPage'));
const Marketing = lazy(()=>import('../components/Marketing/Marketing'));
const Advertising = lazy(()=>import('../components/Advertising/Advertising'));

import { publicRoutesType } from './types';

const publicRoutes: publicRoutesType[] = [

{
    path:"/" , 
    layout:null,
    component: HomePage
},
{
    path:"/services" , 
    layout:null,
    component: Services
},
{
    path:"/marketing" , 
    layout:null,
    component: Marketing
},


{
    path:"/advertising" , 
    layout:null,
    component: Advertising
},
]

export default publicRoutes;