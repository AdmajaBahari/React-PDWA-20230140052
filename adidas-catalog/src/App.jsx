import { useState } from 'react'
import CatalogHome from './components/CatalogHome'
import ProductDetail from './components/ProductDetail'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Fungsi untuk berpindah halaman
  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {currentPage === 'home' ? (
        <CatalogHome onNavigate={navigateTo} />
      ) : (
        <ProductDetail onNavigate={navigateTo} />
      )}
    </>
  )
}

export default App