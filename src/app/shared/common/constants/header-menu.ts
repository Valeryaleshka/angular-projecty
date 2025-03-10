export interface HeaderMenuType {
  title: string;
  url: string;
}

export const HeaderTitles = {
  home: 'Orders',
  about: 'About',
  video: 'Video Service',
};

export const HeaderMenu: HeaderMenuType[] = [
  {
    title: HeaderTitles.home,
    url: '/orders',
  },
  {
    title: HeaderTitles.about,
    url: '/about',
  },
  {
    title: HeaderTitles.video,
    url: '/video',
  },
];
