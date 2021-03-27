import React from 'react';

import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="140" r="140" />
      <rect x="279" y="102" rx="0" ry="0" width="2" height="0" />
      <rect x="0" y="295" rx="3" ry="3" width="300" height="18" />
      <rect x="0" y="328" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="3" ry="3" width="108" height="34" />
      <rect x="146" y="420" rx="25" ry="25" width="130" height="50" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
