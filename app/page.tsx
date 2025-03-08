'use client';

import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Countdown from 'react-countdown';
import { keyframes } from '@mui/system';
import { useEffect, useState } from 'react';

// Gradient Animation for Background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LaunchPage = () => {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30); // 30 days countdown

  const faqData = [
    {
      question: 'What is Letsy AI?',
      answer:
        'Letsy AI is an AI-powered tool designed to help Etsy sellers create optimized product listings with AI-generated titles, descriptions, and pricing insights.',
    },
    {
      question: 'How does Letsy AI boost sales?',
      answer:
        'By providing data-driven recommendations and AI-generated content, Letsy AI helps optimize your listings for better visibility and conversions.',
    },
    {
      question: 'Is Letsy AI easy to use?',
      answer:
        'Yes! Letsy AI is designed with a user-friendly interface, making it easy for anyone to create effective listings.',
    },
    {
      question: 'Will Letsy AI help with pricing?',
      answer:
        'Yes, Letsy AI provides pricing insights to help you determine the optimal price for your products.',
    },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only set to true when the component has mounted (client-side)
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  return (
    <Box
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      sx={{
        background: 'linear-gradient(to right, #FF5800, #F5A623, #FF5800)',
        backgroundSize: '300% 300%',
        animation: `${gradientAnimation} 10s ease infinite`,
        padding: { xs: 3, sm: 6 },
      }}
    >
      {/* Dark overlay for better text visibility */}
      <Box className="absolute inset-0 bg-black/30"></Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: 4,
          py: 8,
          sm: { px: 10, py: 12 },
        }}
      >
        {/* Title & Subtitle */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'extrabold',
            mb: 4,
            fontSize: { xs: '4xl', sm: '5xl', md: '6xl', lg: '7xl', xl: '8xl' },
          }}
        >
          <Box
            component="span"
            sx={{
              color: 'orangered',
              fontSize: {
                xs: '5xl',
                sm: '7xl',
                md: '7xl',
                lg: '8xl',
                xl: '9xl',
              },
              textShadow:
                '2px 2px 4px rgba(255, 255, 255, 0.7), 0 0 25px rgba(255, 255, 255, 0.5)',
            }}
          >
            Letsy AI{' '}
          </Box>

          <Box
            component="span"
            sx={{
              color: 'red.500',
              mt: 2,
              animation: 'bounce 1s infinite',
              fontSize: {
                xs: '2xl',
                sm: '3xl',
                md: '4xl',
                lg: '5xl',
                xl: '6xl',
              },
            }}
          >
            is Launching Soon!
          </Box>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            opacity: 0.9,
            fontSize: { xs: 'sm', sm: 'lg', md: 'xl', lg: '2xl', xl: '3xl' },
            mb: 4,
          }}
        >
          AI-powered <b>listing creation</b> & <b>recommendations </b>
          <br className="hidden sm:block" />
          to effortlessly boost your sales and optimize your store!
        </Typography>

        {/* Countdown Timer with Animation */}
        <Box
          sx={{
            backgroundColor: 'white',
            color: 'black',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            width: '100%',
            sm: { maxWidth: 'md' },
            mb: 6,
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'semibold',
              fontSize: { xs: 'lg', sm: '2xl' },
              color: 'orangered',
              marginBottom: 1,
            }}
            className=" animate-bounce"
          >
            Launching in:
          </Typography>
          <Countdown
            date={launchDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 1,
                  flexWrap: 'wrap',
                  width: '100%',
                }}
              >
                {[days, hours, minutes, seconds].map((time, index) => (
                  <Box
                    key={index}
                    sx={{
                      background: 'linear-gradient(to right, #F5A623, #FF5800)',
                      p: 2,
                      borderRadius: 2,
                      boxShadow: 5,
                      textAlign: 'center',
                      flex: 1,
                      minWidth: '100px',
                      maxWidth: '25%',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 'extrabold',
                        fontSize: {
                          xs: '2xl',
                          sm: '3xl',
                          md: '4xl',
                          lg: '5xl',
                        },
                      }}
                    >
                      {time}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: 'sm', sm: 'base', lg: 'lg' },
                      }}
                    >
                      {['Days', 'Hours', 'Minutes', 'Seconds'][index]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          />
        </Box>

        {/* App Details */}
        <Box sx={{ mt: 8, textAlign: 'center', px: 4, sm: { px: 8 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'semibold',
              fontSize: { xs: 'xl', sm: '2xl', lg: '3xl' },
              mb: 3,
            }}
          >
            About Letsy AI
          </Typography>
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              fontSize: { xs: 'base', sm: 'lg', lg: 'xl' },
              mt: 3,
            }}
          >
            Letsy AI helps Etsy sellers create high-quality product listings
            with AI-generated titles, descriptions, and pricing insights.
            Optimize your store and increase sales with minimal effort!
          </Typography>
        </Box>

        {/* FAQ Section */}
        <Box
          sx={{
            mt: 8,
            width: '100%',
            sm: { maxWidth: 'md' },
            lg: { maxWidth: 'lg' },
            xl: { maxWidth: 'xl' },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'semibold',
              fontSize: { xs: 'xl', sm: '2xl', lg: '3xl' },
              mb: 5,
              color: 'white',
            }}
          >
            Frequently Asked Questions
          </Typography>
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                mb: 2,
                borderRadius: 1,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Loader Effect */}
        <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress
            size={24}
            color="inherit"
            sx={{ textAlign: 'center' }}
          />
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: 'md', sm: 'lg' },
              textAlign: 'center',
            }}
          >
            Preparing your AI-powered experience...
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LaunchPage;
