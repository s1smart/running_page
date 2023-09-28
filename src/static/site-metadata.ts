interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '太空战士',
  siteUrl: 'https://s1smart.github.io/running_page',
  logo: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/1115150/26570966/1/medium.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/s1smart',
    },
    {
      name: 'About',
      url: 'https://github.com/s1smart/running_page',
    },
  ],
};

export default data;
