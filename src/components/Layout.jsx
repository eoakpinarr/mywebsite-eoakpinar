import React from 'react';
import Navbar from './Navbar/Navbar'; // Navbar bileşenini içe aktarın
import Footer from './Footer/Footer'; // Footer bileşenini içe aktarın
import FloatingActionButtons from './FloatingActionButtons/FloatingActionButtons'; // Footer bileşenini içe aktarın
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container style={{ display: 'flex', padding: 0, flexDirection: 'column', minHeight: '100vh', minWidth: '100vw', width: '100vw' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {children}
        <FloatingActionButtons />
        </main> {/* Ana içerik alanı */}
      <Footer />
    </Container>
  );
};

export default Layout;
