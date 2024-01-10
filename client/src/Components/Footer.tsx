
import {
    SfIconContactSupport,
    SfIconFacebook,
    SfIconHelp,
    SfIconInstagram,
    SfIconCall,
    SfIconPinterest,
    SfIconTwitter,
    SfIconYoutube,
    SfButton,
    SfLink,
    SfListItem,
  } from '@storefront-ui/react';
  
  const categories = [
    {
      label: 'How to buy',
      subcategories: [
        {
          subcategoryLabel: 'Payment methods',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
        {
          subcategoryLabel: 'Returns',
          link: '#',
        },
      ],
    },
    {
      label: 'Help',
      subcategories: [
        {
          subcategoryLabel: 'Help centers',
          link: '#',
        },
        {
          subcategoryLabel: 'Security & fraud',
          link: '#',
        },
        {
          subcategoryLabel: 'Feedback',
          link: '#',
        },
        {
          subcategoryLabel: 'Contact',
          link: '#',
        },
      ],
    },
    {
      label: 'Services',
      subcategories: [
        {
          subcategoryLabel: 'Gift cards',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
      ],
    },
    {
      label: 'About',
      subcategories: [
        {
          subcategoryLabel: 'About us',
          link: '#',
        },
        {
          subcategoryLabel: 'Order pickup',
          link: '#',
        },
        {
          subcategoryLabel: 'Purchase status',
          link: '#',
        },
        {
          subcategoryLabel: 'Track orders',
          link: '#',
        },
        {
          subcategoryLabel: 'Returns',
          link: '#',
        },
      ],
    },
  ];
  const socialMedia = [
    {
      label: 'Facebook',
      link: '#https://www.facebook.com/Tristatecoach/',
      icon: () => <SfIconFacebook />,
    }
  ];
  const contactOptions = [
    {
      label: 'Help center',
      link: '#',
      details: ['Find answers online anytime'],
      icon: () => <SfIconHelp size="lg" />,
    },
    {
      label: 'Live chat',
      link: '#',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
      icon: () => <SfIconContactSupport size="lg" />,
    },
    {
      label: '1 234 567 8901',
      link: '#',
      details: ['Mon–Fri, 5am–10pm PT', 'Sat–Sun, 6am–9pm PT'],
      icon: () => <SfIconCall size="lg" />,
    },
  ];
  const bottomLinks = [
    {
      label: 'Terms',
      link: '#',
    },
    {
      label: 'Privacy policy',
      link: '#',
    },
  ];
  export default function FooterBasic() {
    return (
      <footer className="pt-10 bg-neutral-100">
        <hr />
        <div className="bg-neutral-900 justify-end px-4 py-10 md:flex md:py-6 max-w-[1536px] mx-auto">
          <div className="flex justify-center py-2 gap-x-4 md:self-start">
            {socialMedia.map(({ icon: Icon, label, link }) => (
              <SfButton
                key={label}
                square
                as="a"
                variant="tertiary"
                className="text-white active:text-white hover:text-white hover:!bg-neutral-500 active:bg-transparent"
                href={link}
                aria-label={`Go to ${label} page`}
              >
                <Icon />
              </SfButton>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0">
            {bottomLinks.map(({ label, link }) => (
              <SfLink
                key={label}
                variant="secondary"
                className="text-white no-underline typography-text-sm active:text-white active:underline hover:text-white hover:underline"
                href={link}
              >
                {label}
              </SfLink>
            ))}
          </div>
          <p className="flex items-center justify-center py-2 leading-5 text-center typography-text-sm text-white/50 font-body md:ml-6">
            TRI-STATE COACH 2023
          </p>
        </div>
      </footer>
    );
  }
  