/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ResidencesPage } from './pages/ResidencesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AreasPage } from './pages/AreasPage';
import { AreaDetailPage } from './pages/AreaDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ForOwnersPage } from './pages/ForOwnersPage';
import { PersonalSearchPage } from './pages/PersonalSearchPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Strip query string for base route matching
  const basePath = currentPath.split('?')[0];

  // Route matching logic
  const renderRoute = () => {
    // Exact routes
    if (basePath === '/' || basePath === '') {
      return <HomePage />;
    }
    if (basePath === '/residences') {
      return <ResidencesPage />;
    }
    if (basePath === '/areas') {
      return <AreasPage />;
    }
    if (basePath === '/services') {
      return <ServicesPage />;
    }
    if (basePath === '/for-owners') {
      return <ForOwnersPage />;
    }
    if (basePath === '/personal-search') {
      return <PersonalSearchPage />;
    }
    if (basePath === '/about') {
      return <AboutPage />;
    }
    if (basePath === '/journal') {
      return <JournalPage />;
    }
    if (basePath === '/contact') {
      return <ContactPage />;
    }

    // Dynamic routes
    if (basePath.startsWith('/residences/')) {
      const slug = basePath.replace('/residences/', '');
      return <PropertyDetailPage slug={slug} />;
    }

    if (basePath.startsWith('/areas/')) {
      const slug = basePath.replace('/areas/', '');
      return <AreaDetailPage slug={slug} />;
    }

    if (basePath.startsWith('/journal/')) {
      const slug = basePath.replace('/journal/', '');
      return <JournalDetailPage slug={slug} />;
    }

    // Fallback: 404
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#18181B] font-sans antialiased selection:bg-[#18181B] selection:text-[#FBF9F5]">
      <Header />
      <main className="flex-1 w-full">
        {renderRoute()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
