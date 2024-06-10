import { Helmet } from 'react-helmet';
import LandingBanner from '../components/LandingBanner';
import LandingFeatureList from '../components/LandingFeatureList';
import LandingFooter from '../components/LandingFooter';
import topBannerImg from '../image-resource/Img-home-top.svg';
import bottomBannerImg from '../image-resource/Img-home-bottom.svg';

const TOP_HEADER_F = '일상의 모든 물건을';
const TOP_HEADER_S = '거래해보세요';
const BOTTOM_HEADER_F = '믿을 수 있는';
const BOTTOM_HEADER_S = '판다마켓 중고 거래';

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>판다 마켓</title>
      </Helmet>
      <LandingBanner
        src={topBannerImg}
        headerF={TOP_HEADER_F}
        headerS={TOP_HEADER_S}
        isTop={true}
      />
      <LandingFeatureList />
      <LandingBanner
        src={bottomBannerImg}
        headerF={BOTTOM_HEADER_F}
        headerS={BOTTOM_HEADER_S}
      />
      <LandingFooter />
    </>
  );
}

export default LandingPage;
