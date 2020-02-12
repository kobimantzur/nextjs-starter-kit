import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { Row, Col, Rate, Layout, Card, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { getFriendlyTime, isMobile } from '../../services/commonService';
import {
  getBusinessByFriendlyUrl,
  setReviewLoadingState,
  setEmptyState,
  submitBusinessReview,
  setReviewModalState,
  cleanBusinessPage
} from '../../reducers/BusinessPage/actions';
import './index.scss';

import mailIcon from '../../img/mail-icon.png';
import { ShareButtons } from './Components';

import Map, { DEF_PROPS } from './Components/Map';
import Gallery from './Components/Gallery';

import { reportScreen, reportEvent } from '../../services/analyticsService';
import { AppSpinner, CardWrap, UserInfo, FancyTitle } from '../../components';
import Breadcrumbs from '../../components/Breadcrumbs';
import Tags from './Components/Tags';
import Page from '../../components/Page';
import Content from '../../components/Content';
// const { Content } = Layout;
const daysList = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

const propTypes = {
  business: PropTypes.object,
  getBusinessByFriendlyUrl: PropTypes.func,
  isLoading: PropTypes.bool
};

const defaultProps = {
  business: undefined,
  getBusinessByFriendlyUrl: _.noop,
  isLoading: true
};

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  // componentWillMount() {
  //   const { friendlyUrl } = this.props.match.params;
  //   if (!friendlyUrl) {
  //     window.location.href = 'https://mymapo.com';
  //     // this.props.setEmptyState();
  //   } else {
  //     this.props.getBusinessByFriendlyUrl(friendlyUrl);
  //   }
  // }
  componentWillUnmount() {
    this.props.cleanBusinessPage();
  }

  componentDidMount() {
    reportScreen(location.pathname);
  }

  onModalStateChange = s => {
    this.props.setReviewModalState(s);
  };

  // eslint-disable-next-line class-methods-use-this
  getPlaceName(business) {
    if (!business.placements || business.placements.length === 0) return null;
    if (!business.subCategories || business.subCategories.length === 0) return null;
    const title = `${business.subCategories[0].title} ב${business.placements[0].heName} -`;
    // if (business.placements[0].country) {
    //   title += `, ${business.placements[0].country.heName}`;
    // }
    return title;
  }

  getLocationTitle(business) {
    if (!business || !business.placements || business.placements.length === 0) return '';

    const locationName = business.placements[0].heName;
    // if (business.placements[0].country) {
    //   locationName += `, <b>${business.placements[0].country.heName}</b>`;
    // }

    return (
      <div className="address">
        <b>{locationName}, </b>
        {business.placements[0].country && business.placements[0].country.heName}
      </div>
    );
  }

  formatPhoneNumber = s => {
    const s2 = `${s}`.replace(/\D/g, '');
    const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    return !m ? null : `(${m[1]}) ${m[2]}-${m[3]}`;
  };

  formatTime = time => {
    const parsedTime = new Date(JSON.parse(JSON.stringify(new Date(time))));
    if (parsedTime) {
      const hours =
        parsedTime.getHours() < 10 ? `0${parsedTime.getHours()}` : parsedTime.getHours();
      const minutes =
        parsedTime.getMinutes() < 10 ? `0${parsedTime.getMinutes()}` : parsedTime.getMinutes();
      return `${hours}:${minutes}`;
    }
    return '';
  };

  renderBusinessHeader() {
    const { business } = this.props;
    if (!business) return null;
    const { englishName, subSubCategory, description } = business;
    return (
      <Card className="business-header">
        {/* <Row className="row"> */}
        <div className="row">
          <div className="right">
            {/* <CurrentlyOpen business={business} /> */}
            <div className="description">{description}</div>
            {/* <Button className="share-button">שלח לחבר</Button> */}
          </div>
          <div className="left">
            {/* <h1 className="title">{englishName}</h1> */}
            <h4 className="sub-category">{subSubCategory}</h4>
            {/* <Rating disabled business={business} /> */}
          </div>
        </div>
        {/* </Row> */}
      </Card>
    );
  }

  renderBusinessBody() {
    const {
      business: {
        address,
        phoneNumber,
        facebookName,
        instagramName,
        websiteUrl,
        email,
        scale1,
        location
      }
    } = this.props;
    return (
      <div className="business-body">
        <Row>
          <Col className="right" span={8} push={16}>
            {/* {this.renderBusinessHours()} */}
          </Col>
          <Col className="left" span={10} pull={8}>
            <p className="phone-number">{this.formatPhoneNumber(phoneNumber)}</p>

            <Row className="social">
              {websiteUrl && (
                <a className="website-link" href={websiteUrl}>
                  website
                </a>
              )}
              {facebookName && (
                <a
                  target="_blank"
                  className="facebook"
                  href={`https://facebook.com/${facebookName}`}
                >
                  {/* <img src={facebookIcon} /> */}
                  <img src="/public/img/facebook-icon.png" alt={facebookName} />
                </a>
              )}
              {instagramName && (
                <a
                  target="_blank"
                  className="instagram"
                  href={`https://instagram.com/${instagramName}`}
                >
                  <img src="/public/img/instagram-icon.png" alt={instagramName} />
                </a>
              )}
              {email && (
                <a className="mail" href={`mailto:${email}`}>
                  <img src={mailIcon} alt={email} />
                </a>
              )}
            </Row>
          </Col>
        </Row>
        <Row>
          {/* <div className="address-wrapper">
            <FontAwesomeIcon className="address-icon" icon={faMapMarker} />
            <span className="address">{address}</span>
          </div>
          <Map isMarkerShown location={location} {...DEF_PROPS} /> */}
        </Row>
      </div>
    );
  }

  renderBusinessHours() {
    const {
      business: { businessHours }
    } = this.props;
    if (!businessHours) return null;
    const businessHoursObj = JSON.parse(businessHours);
    return (
      <div className="business-hours">
        <h1>שעות פעילות</h1>
        {businessHoursObj.map((day, i) => (
          <Row key={`day${i}`} className="hour-row">
            {day.length > 0 &&
              day.map((hour, i = j) => (
                <span key={`day${i}-hour${hour}`} className="hour">
                  {`${(i > 0 ? ', ' : '') + this.formatTime(hour.start)}-${this.formatTime(
                    hour.end
                  )}`}
                </span>
              ))}
            {day.length === 0 && <span className="hour">סגור</span>}
            <span className="day">{daysList[i]}</span>
          </Row>
        ))}
      </div>
    );
  }

  renderInfoSection = () => {
    return null;
    return (
      <Row className="info-wrapper">
        <Col span={12} push={12}>
          <div className="info-item">
            <h1>בעל עסק?</h1>
            <p>
              מחפש לקדם את העסק שלך?
              <br />
              אצלנו תקבל הזדמנות לחשיפה ענקית ופרסום לבית העסק שלך.
            </p>
          </div>
        </Col>
        <Col span={12} pull={12}>
          <div className="info-item">
            <h1>מה זה Mapo?</h1>
            <p>
              {`עברת ללוס אנג'לס?

מחפש רופא? או אולי עורך דין טוב? הקושי של השפה מקשה עלייך?

אתה לא לבד! `}
              <br />

              {`בשביל זה אנחנו פה.

אנחנו בMapo דואגים לספק לך את כל העסקים

ונותני השירות הישראלים.`}
            </p>
          </div>
        </Col>
      </Row>
    );
  };

  renderLoader() {
    return (
      <Content className="business-page loader">
        <AppSpinner />
      </Content>
    );
  }

  renderEmptyState() {
    return (
      <Content className="business-page">
        <h1 className="general-title">מטיילים ישראלים בחו״ל</h1>
        {this.renderInfoSection()}
      </Content>
    );
  }

  render() {
    const { isLoading, business, isReviewModalOpen } = this.props;
    if (isLoading) return this.renderLoader();
    if (!isLoading && !business) return this.renderEmptyState();
    return (
      <Page className="business-page">
        <Content>
          <FancyTitle
            highlightedTitle={business.englishName}
            regularTitle={this.getPlaceName(business)}
          />
          <Breadcrumbs
            items={[
              {
                link: '',
                title: business.placements[0].country.heName,
                placeObject: business.placements[0].country,
                pageName: 'CountryPage'
              },
              {
                link: '',
                title: business.placements[0].heName,
                placeObject: business.placements[0],
                pageName: 'CityPage'
              },
              {
                link: '',
                title: business.subCategories[0].title,
                subCategoryObject: business.subCategories[0],
                placeObject: business.placements[0],
                pageName: 'SearchResults'
              },
              {
                link: '',
                title: business.englishName,
                isHighlighted: true
              }
            ]}
          />
          <Tags {...this.props} />
          <div className="header-color" />

          <div className="info-and-share">
            {business && (
              <UserInfo
                userDetails={business.userId}
                additionalSecondaryTitle={`${getFriendlyTime(business.dateCreated)}`}
              />
            )}
            <ShareButtons {...this.props} />
          </div>
          {this.renderBusinessHeader()}
          <div className="cubes-row">
            <Gallery {...this.props} />
            <CardWrap>
              <div className="address-wrapper">
                <FontAwesomeIcon className="address-icon" icon={faMapMarker} />
                {this.getLocationTitle(business)}
              </div>
              {business && business.address && (
                <Map isMarkerShown location={business.location} {...DEF_PROPS} />
              )}
            </CardWrap>
          </div>
          {/* <Comments business={business} onAddClick={() => this.onModalStateChange(true)} /> */}
          {this.renderInfoSection()}
        </Content>
        {/* <ReviewModal
          isOpen={isReviewModalOpen}
          onCloseClick={() => this.onModalStateChange(false)}
          {...this.props}
          onClose={this.onModalStateChange}
        /> */}
      </Page>
    );
  }
}

BusinessPage.propTypes = propTypes;
BusinessPage.defaultProps = defaultProps;

const mapStateToProps = ({ BusinessPageReducer }) => {
  const { business, isLoading, isReviewModalOpen, isReviewLoading } = BusinessPageReducer;
  return {
    business,
    isLoading,
    isReviewModalOpen,
    isReviewLoading
  };
};
const mapDispatchToProps = {
  getBusinessByFriendlyUrl,
  setEmptyState,
  submitBusinessReview,
  setReviewModalState,
  setReviewLoadingState,
  cleanBusinessPage
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessPage);
