import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const socialLinks = [
  {
    icon: <GitHubLogoIcon className='w-5 h-5' />,
    to: '#github',
  },
  {
    icon: <InstagramLogoIcon className='w-5 h-5' />,
    to: '#instagram',
  },
  {
    icon: <TwitterLogoIcon className='w-5 h-5' />,
    to: '#twitter',
  },
  {
    icon: <LinkedInLogoIcon className='w-5 h-5' />,
    to: '#linkedin',
  },
];

const links = [
  {
    label: 'About',
    to: '#about',
  },
  {
    label: 'Blog',
    to: '#blog',
  },
  {
    label: 'Contact',
    to: '#contact',
  },
];

export const Footer = () => {
  return (
    <div className='bg-white pt-4 sm:pt-10 lg:pt-12'>
      <footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-b gap-4 py-6'>
          <nav className='flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6'>
            {links.map(({ label, to }) => (
              <a
                key={to}
                href={to}
                className='text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100'>
                {label}
              </a>
            ))}
          </nav>

          <div className='flex gap-4'>
            {socialLinks.map(({ icon, to }) => (
              <a
                key={to}
                href={to}
                target='_blank'
                rel='noreferrer'
                className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className='text-gray-400 text-sm text-center py-8'>
          © {new Date().getFullYear()} - Present Books. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
