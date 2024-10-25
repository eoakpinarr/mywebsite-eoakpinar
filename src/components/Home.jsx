import React from 'react';
import { Container, Typography, Stack, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}>
            <Box
                sx={{
                    bgcolor: '#f5f5f5', // Arka plan rengi
                    borderRadius: '8px', // Köşe yuvarlama
                    boxShadow: 3, // Gölge efekti
                    padding: '20px', // İç boşluk
                    border: '1px solid #ccc', // Kenar çizgisi
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Hoş Geldiniz!
                </Typography>
                <Typography variant="body1" paragraph align='left'>
                    Ben <strong>Etem Oğulcan AKPINAR</strong>, bir yazılımcı ve teknoloji tutkunu olarak, dijital dünyada yenilikçi çözümler yaratmaya adanmış bir profesyonelim. Kod yazmanın ötesinde, hayal gücümü ve teknik becerilerimi birleştirerek, kullanıcıların hayatlarını kolaylaştıracak ve iş süreçlerini hızlandıracak projeler üzerinde çalışmayı seviyorum.
                </Typography>
                <Typography variant="body1" paragraph align='left'>
                    Her satır kodda, sorunları çözmeyi ve kullanıcılara değer katmayı hedefliyorum. Modern teknolojileri ve en iyi uygulamaları takip ederek, web uygulamaları, mobil uygulamalar ve kullanıcı deneyimini geliştiren projeler geliştiriyorum.
                </Typography>
                <Typography variant="body1" paragraph align='left'>
                    Web sitem, yeteneklerimi, projelerimi ve teknolojiye olan tutkumun bir yansımasıdır. Hedefim, müşterilerime ve kullanıcılarıma en iyi deneyimi sunmaktır. Fikirlerinizi hayata geçirmek ve projelerinizi bir üst seviyeye taşımak için buradayım.
                </Typography>
                <Typography variant="body1" paragraph align='left'>
                    Gelin, birlikte yeni ve heyecan verici dijital dünyaları keşfedelim!
                </Typography>

                <Stack spacing={2} mt={3}>
                    <Button variant="contained" color="secondary" onClick={() => handleNavigation('/hakkimda')}>
                        Hakkımda
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleNavigation('/hizmetler')}>
                        Hizmetler
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleNavigation('/iletisim')}>
                        İletişim
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default Home;
