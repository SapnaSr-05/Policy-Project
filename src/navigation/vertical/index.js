import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'request_details',
    title: 'Request Details',
    icon: <Mail size={20} />,
    navLink: '/request-details'
  },
  {
    id: 'training',
    title: 'Traning',
    icon: <Mail size={20} />,
    navLink: '/traning'
  },
  {
    id: 'test',
    title: 'Test',
    icon: <Mail size={20} />,
    navLink: '/test'
  }

]
