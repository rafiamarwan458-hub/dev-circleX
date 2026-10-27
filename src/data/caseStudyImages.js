const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const caseStudyImages = {
  alcami: {
    images: {
      thumbnail: assetUrl("/images/case-studies/alcami/alcami-thumbnail.webp"),
      first: assetUrl("/images/case-studies/alcami/alcami-02-overview.webp"),
      second: assetUrl("/images/case-studies/alcami/alcami-03-feature-education.webp"),
      third: assetUrl("/images/case-studies/alcami/alcami-04-feature-detail.webp"),
      //fourth: assetUrl("/images/case-studies/alcami/fourth.jpg"),
      mobile: assetUrl("/images/case-studies/alcami/alcami-mobile.webp"),
    },
    backgroundImage: assetUrl("/images/case-studies/alcami/alcami-01-background.webp"),
  },
  bajafarm: {
    images: {
      thumbnail: assetUrl("/images/case-studies/bajafarm/bajafarm-thumbnail.webp"),
      first: assetUrl("/images/case-studies/bajafarm/bajafarm-02-overview.webp"),
      second: assetUrl("/images/case-studies/bajafarm/bajafarm-03-feature-education.webp"),
      third: assetUrl("/images/case-studies/bajafarm/bajafarm-04-feature-detail.webp"),
      // fourth: assetUrl("/images/case-studies/bajafarm/fourth.jpg"),
      mobile: assetUrl("/images/case-studies/bajafarm/bajafarm-mobile.webp"),
    },
    backgroundImage: assetUrl("/images/case-studies/bajafarm/bajafarm-01-background.webp"),
  },
  coreex: {
    images: {
      thumbnail: assetUrl("/images/case-studies/coreex/coreex-thumbnail.webp"),
      first: assetUrl("/images/case-studies/coreex/coreex-02-overview.webp"),
      second: assetUrl("/images/case-studies/coreex/coreex-03-feature-education.webp"),
      third: assetUrl("/images/case-studies/coreex/coreex-04-feature-detail.webp"),
      // fourth: assetUrl("/images/case-studies/coreex/fourth.jpg"),
      mobile: assetUrl("/images/case-studies/coreex/coreex-mobile.webp"),
    },
    backgroundImage: assetUrl("/images/case-studies/coreex/coreex-01-background.webp"),
  },
  glowholic: {
    images: {
      thumbnail: assetUrl("/images/case-studies/glowholic/glowholic-thumbnail.webp"),
      first: assetUrl("/images/case-studies/glowholic/glowholic-02-overview.webp"),
      second: assetUrl("/images/case-studies/glowholic/glowholic-03-feature-education.webp"),
      third: assetUrl("/images/case-studies/glowholic/glowholic-04-feature-detail.webp"),
      // fourth: assetUrl("/images/case-studies/glowholic/fourth.jpg"),
      mobile: assetUrl("/images/case-studies/glowholic/glowholic-mobile.webp"),
    },
    backgroundImage: assetUrl("/images/case-studies/glowholic/glowholic-01-background.webp"),
  },
  juntos: {
    images: {
      thumbnail: assetUrl("/images/case-studies/juntos/juntos-thumbnail.webp"),
      first: assetUrl("/images/case-studies/juntos/juntos-02-overview.webp"),
      second: assetUrl("/images/case-studies/juntos/juntos-03-feature-education.webp"),
      third: assetUrl("/images/case-studies/juntos/juntos-04-feature-detail.webp"),
      // fourth: assetUrl("/images/case-studies/juntos/fourth.jpg"),
      mobile: assetUrl("/images/case-studies/juntos/juntos-mobile.webp"),
    },
    backgroundImage: assetUrl("/images/case-studies/juntos/juntos-01-background.webp"),
  },
  "kurbani-durjini": {
    images: {
      thumbnail: assetUrl("/images/case-studies/kurbani-durjini/kurbani-durjini-thumbnail.webp"),
      first: assetUrl("/images/case-studies/kurbani-durjini/kd-02-overview.webp"),
      second: assetUrl("/images/case-studies/kurbani-durjini/kd-03-feature-education.webp"),
      third: assetUrl("/images/case-studies/kurbani-durjini/kd-04-feature-detail.webp"),
      // fourth: assetUrl("/images/case-studies/kurbani-durjini/fourth.jpg"),
      mobile: assetUrl("/images/case-studies/kurbani-durjini/kd-mobile.webp"),
    },
    backgroundImage: assetUrl("/images/case-studies/kurbani-durjini/kd-01-background.webp"),
  },
};
