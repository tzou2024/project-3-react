import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Link
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaAlignJustify } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

const Nav = ({ onOpen, ref, user }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue('white', 'blackAlpha.200');
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >

      <Text fontSize="xl" fontWeight="bold">
              Spotlight
              </Text>
      {isLargerThanMD ? (
        <>
        

        <Link href="/" fontSize="md" ml={6}>
          Feed
        </Link>
        <Text > <pre>  </pre> </Text>
        { user ? (
          <Link href="/myposts" fontSize="md" ml={3}>
            My Posts
          </Link>) 
          : ''
        }
        
        </>
      ) : (
        <>
          
        </>
      )}
      

      <Spacer />
      
      <Flex alignItems="center">
        <IconButton mr="5" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>

        {isLargerThanMD ? (
          <>
            <a target="_blank" rel="noreferrer" href="https://appseed.us/apps/react/" fontSize="md" mr="10">
              { user ? 'Logout' : (<a href="/signin" fontSize="md" >Log In </a>)
            
             }
            </a>
          </>
        ) : (
          <IconButton ref={ref} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}

      </Flex>
    </Flex>
  );
};

export default Nav;