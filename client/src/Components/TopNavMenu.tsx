import {
    SfIconShoppingCart,
    SfIconFavorite,
    SfIconPerson,
    SfIconExpandMore,
    SfIconClose,
    SfButton,
    SfDrawer,
    SfListItem,
    useDisclosure,
    useTrapFocus,
    SfInput,
    SfIconSearch,
    SfIconMenu,
  } from '@storefront-ui/react';
  import { useRef, useState } from 'react';
  import { useClickAway } from 'react-use';
  import { CSSTransition } from 'react-transition-group';
  import logo from '../assets/tri-state-coach-logo.png'
  import React from 'react';

  const actionItems = [

    {
      icon: <SfIconPerson />,
      label: 'Log in',
      ariaLabel: 'Log in',
      role: 'login',
    },
  ];
  
  const categoriesContent = [
    {
      heading: 'Book a Ride',
      items: [
        {
          title: "Home",
          link: '/',
        },
        {
          title: 'College Shuttles',
          link: '/college-shuttles',
        },
        {
          title: 'Get A Quote',
          link: '/quote',
        },
        {
          title: 'Contact Us',
          link: '/contact-us',
        }
      ],
    },
    {
      heading: 'About Us',
      items: [
        {
          title: 'Our Buses',
          link: '/about-us',
        },
        {
          title: 'Chartering',
          link: '/charter-work',
        },
        {
          title: 'Pay Invoice',
          link: '/product/invoice',
        },
        {
          title: 'Services',
          link: '/services',
        },
        {
          title: 'Terms Of Service',
          link: '/terms-of-service',
        },
        {
          title: 'Privacy Policy',
          link: '/privacy-policy',
        },
      ],
    }
  ];
  
  export default function BaseMegaMenu() {
    const { close, toggle, isOpen } = useDisclosure();
    const drawerRef = useRef(null);
    const menuRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
  
    useTrapFocus(drawerRef, {
      activeState: isOpen,
      arrowKeysUpDown: true,
      initialFocus: 'container',
    });
    useClickAway(menuRef, () => {
      close();
    });
  
    const search = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      alert(`Successfully found 10 results for ${inputValue}`);
    };
  
    return (
      <div className="w-full z-99999">
        {isOpen && <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
        <header
          ref={menuRef}
          style={{ 
            position: 'sticky', // Make the header sticky
            top: 0, // Stick to the top of the viewport
            zIndex: 9999, 
            backgroundColor: 'rgb(190, 18, 60)', 
            height: '5rem' 
          }}
          className="flex flex-wrap md:flex-nowrap justify-center w-full py-2 md:py-5 border-0 bg-primary-700 border-neutral-200 md:relative md:z-10"
        >
          <div className="flex items-center justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
            <SfButton
              className="block md:hidden text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              aria-haspopup="true"
              aria-expanded={isOpen}
              variant="tertiary"
              onClick={toggle}
              square
            >
              <SfIconMenu className=" text-white" />
            </SfButton>
            <a
              href="#"
              aria-label="SF Homepage"
              className="flex shrink-0 ml-4 md:ml-0 mr-2 md:mr-10 text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
            >
              <picture>
                <img
                  src={logo}
                  alt="Tri-State Coach Logo"
                  style={{ height: '80%', maxHeight: '4rem' }} // Adjust the height as needed
                />
              </picture>
            </a>

            <SfButton
              className="hidden md:flex text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              aria-haspopup="true"
              aria-expanded={isOpen}
              slotSuffix={<SfIconExpandMore className="hidden md:inline-flex" />}
              variant="tertiary"
              onClick={toggle}
              square
            >
              <span className="hidden md:inline-flex whitespace-nowrap px-2">Book a Ride</span>
            </SfButton>
            <nav>
              <ul>
                <li role="none">
                  <CSSTransition
                    in={isOpen}
                    timeout={500}
                    unmountOnExit
                    classNames={{
                      enter: '-translate-x-full md:opacity-0 md:translate-x-0',
                      enterActive: 'translate-x-0 md:opacity-100 transition duration-500 ease-in-out',
                      exitActive: '-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out',
                    }}
                  >
                    <SfDrawer
                      ref={drawerRef}
                      open
                      disableClickAway
                      placement="top"
                      className="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-20 max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                    >
                      <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-negative-700 md:hidden">
                        <div className="flex items-center font-medium text-white typography-text-lg">Browse products</div>
                        <SfButton
                          square
                          variant="tertiary"
                          aria-label="Close navigation menu"
                          onClick={close}
                          className="text-white ml-2"
                        >
                          <SfIconClose />
                        </SfButton>
                      </div>
                      {categoriesContent.map(({ heading, items }) => (
                        <div key={heading} className="[&:nth-child(2)]:pt-0 pt-6 md:pt-0">
                          <h2
                            role="presentation"
                            className="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
                          >
                            {heading}
                          </h2>
                          <hr className="mb-3.5" />
                          <ul>
                            {items.map((item) => (
                              <li key={item.title}>
                                <SfListItem
                                  as="a"
                                  size="sm"
                                  role="none"
                                  href={item.link}
                                  className="typography-text-base md:typography-text-sm py-4 md:py-1.5"
                                >
                                  {item.title}
                                </SfListItem>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <SfButton
                        square
                        size="sm"
                        variant="tertiary"
                        aria-label="Close navigation menu"
                        onClick={close}
                        className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                      >
                        <SfIconClose className="text-neutral-500" />
                      </SfButton>
                    </SfDrawer>
                  </CSSTransition>
                </li>
              </ul>
            </nav>
            <nav className="flex-1 flex flex-nowrap justify-end items-center md:ml-10 gap-x-1" aria-label="SF Navigation">
              {actionItems.map((actionItem) => (
                <SfButton
                  className="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                  key={actionItem.ariaLabel}
                  aria-label={actionItem.ariaLabel}
                  variant="tertiary"
                  slotPrefix={actionItem.icon}
                  square
                >
                  {actionItem.role === 'login' && (
                    <p className="hidden lg:inline-flex whitespace-nowrap pr-2">{actionItem.label}</p>
                  )}
                </SfButton>
              ))}
            </nav>
          </div>
        </header>
      </div>
    );
  }
  