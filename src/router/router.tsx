import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from '../components/Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TimelinePage = lazy(() => import('../pages/TimelinePage/TimelinePage'));
const SkillsPage = lazy(() => import('../pages/SkillsPage/SkillsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div style={{ padding: '40px' }}>Загрузка...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/timeline',
        element: (
          <Suspense fallback={<div style={{ padding: '40px' }}>Загрузка таймлайна...</div>}>
            <TimelinePage />
          </Suspense>
        ),
      },
      {
        path: '/skills',
        element: (
          <Suspense fallback={<div style={{ padding: '40px' }}>Загрузка навыков...</div>}>
            <SkillsPage />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<div style={{ padding: '40px' }}>Загрузка контактов...</div>}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);
