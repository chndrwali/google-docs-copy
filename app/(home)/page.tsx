'use client';

import { usePaginatedQuery } from 'convex/react';
import { Navbar } from './navbar';
import { TemplateGallery } from './template-gallery';
import { api } from '@/convex/_generated/api';
import { DocumentsTable } from './documents-table';
import { useSearchParams } from '@/hooks/use-search-params';

const Home = () => {
  const [search] = useSearchParams();
  const { results, status, loadMore } = usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable documents={results} loadMore={loadMore} status={status} />
      </div>
    </div>
  );
};

export default Home;
