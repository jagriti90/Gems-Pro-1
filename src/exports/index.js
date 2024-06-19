// import { code, db, globe, lock } from "../assets/icons";
// import client1 from '../assets/images/client1.png'
// import client2 from '../assets/images/client2.png'
// import client3 from '../assets/images/client3.png'
// import client4 from '../assets/images/client4.png'
import { BsDatabaseFillCheck } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { BsPcDisplayHorizontal } from "react-icons/bs";





export const aboutgrids = [
    {
        icon: <BsPcDisplayHorizontal />,
        heading: 'SSL Certificate',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    },
    {
        icon: <BsDatabaseFillCheck />        ,
        heading: 'Personal Domain',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    },
    {
        icon: <AiOutlineGlobal />        ,
        heading: 'Media Storage',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    },
    {
        icon: <AiOutlineLock />        ,
        heading: 'Code Editor',
        text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        label: 'View More'
    }
];


export const clients = [
    {
        image: 'https://profile-images.xing.com/images/52b8605f5460c9d26c924c6110524421-1/celia-taroncher.1024x1024.jpg',
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Celia Almeda',
        profile: 'Web Developer'
    },

    {
        image: 'https://cdn.theorg.com/2851d6e5-50bf-45e2-9ee3-882316471e31_medium.jpg',
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Nat Reynolds',
        profile: 'Android Developer'
    },

    {
        image: 'https://usabilitygeek.com/wp-content/uploads/2018/06/difference-ux-ui-design-lead.jpg',
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Bob Roberts',
        profile: 'UI/UX Designer'
    },

    {
        image: 'https://tse1.mm.bing.net/th?id=OIP.QjynegEfQVPq5kIEuX9fWQHaFj&pid=Api&P=0&h=180',
        about: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar pro.',
        name: 'Mattie Smith',
        profile: 'Full Stack Developer'
    }
]


export const pricing = [
    {
        plan : 'Starter Plan',
        price : 'Free',
        label : 'Proceed Free',
        about : 'Free static.app domain included, No credit card'
    },

    {
        plan : 'Yearly Plan',
        price : '$9/month',
        label : 'Proceed Anually',
        about : 'Free static.app domain included, No credit card'
    },

    {
        plan : 'Monthly Plan',
        price : '$12/month',
        label : 'Proceed Monthly',
        about : 'Free static.app domain included, No credit card'
    }
]