'use client';

import { useRouter } from 'next/navigation';
import { Typography } from '@mui/material';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import the MUI components to avoid SSR mismatch issues
const MUIButton = dynamic(() => import('@mui/material/Button'), { ssr: false });
const MUIContainer = dynamic(() => import('@mui/material/Container'), {
  ssr: false,
});

const MUIBox = dynamic(() => import('@mui/material/Box'), { ssr: false });
const MUIStack = dynamic(() => import('@mui/material/Stack'), { ssr: false });

const WelcomePage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Letsy AI</title>
        <meta
          name="description"
          content="AI-powered tool to generate optimized Etsy listings effortlessly."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Letsy AI" />
        <meta
          property="og:description"
          content="AI-powered tool to generate optimized Etsy listings effortlessly."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/welcome" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Letsy AI" />
        <meta
          name="twitter:description"
          content="AI-powered tool to generate optimized Etsy listings effortlessly."
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/welcome" />
      </Head>

      <MUIBox
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column', // Use column direction for layout
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/bg.svg)', // Set background image
          backgroundSize: 'cover', // Ensure the background covers the entire container
          backgroundPosition: 'center', // Center the background image
          backgroundAttachment: 'fixed', // Fix the background to the WelcomePage
          color: 'black', // Dark text color for readability
          px: 2,
          position: 'relative',
        }}
      >
        <MUIContainer maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: '#23282D' }}
          >
            Welcome to Letsy AI
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
            AI-powered tool to generate optimized Etsy listings effortlessly.
          </Typography>

          <MUIStack
            spacing={2}
            direction="row" // Change direction to row to place buttons horizontally
            justifyContent="flex-end" // Align buttons to the right side
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 10, // Make sure buttons are above other content
            }}
          >
            <MUIButton
              variant="contained"
              color="secondary"
              onClick={() => router.push('/register')}
              sx={{
                backgroundColor: '#23282D', // Etsy dark gray
                '&:hover': { backgroundColor: '#1c242a' }, // Darker shade on hover
              }}
            >
              Sign Up
            </MUIButton>
            <MUIButton
              variant="outlined"
              color="inherit"
              onClick={() => router.push('/login')}
              sx={{
                borderColor: '#FFFFFF', // White border for better contrast
                color: '#FFFFFF', // White text color
                '&:hover': {
                  borderColor: '#FF7F50', // Use the orange for hover effect
                  color: '#FF7F50', // Use the orange for hover text color
                },
              }}
            >
              Sign In
            </MUIButton>
          </MUIStack>

          <MUIButton
            variant="contained"
            sx={{
              backgroundColor: '#FF7F50', // Etsy orange color
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              px: 5, // Increase padding for larger button
              py: 2, // Increase vertical padding
              borderRadius: '50px', // Rounded corners for a modern look
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow for depth
              transition: 'all 0.3s ease', // Smooth transition for hover effect
              '&:hover': {
                backgroundColor: '#FF4C00', // Darker orange on hover
                transform: 'scale(1.05)', // Slightly enlarge the button on hover
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Stronger shadow on hover
              },
              '&:active': {
                transform: 'scale(1)', // Restore size when clicked
              },
            }}
            onClick={() => router.push('/dashboard')}
          >
            Get Started 🚀
          </MUIButton>
        </MUIContainer>
      </MUIBox>
    </>
  );
};

export default WelcomePage;
