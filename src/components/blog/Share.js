import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton
} from 'react-share';

const Share = ({ socialConfig, tags }) => {
  return (
    <ul className="flex md:flex-col flex-row w-auto md:float-left items-center gap-5 justify-center lg:pl-10 md:pl-6">
      <li className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md"><FacebookShareButton className="facebook" url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""}>
        <svg width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.19118 16.208V9.16648H7.55548L7.91527 6.4424H5.19118V4.69487C5.19118 3.9239 5.39677 3.35853 6.52753 3.35853H7.96667V0.891431C7.70968 0.840033 6.83591 0.788635 5.85935 0.788635C3.75204 0.788635 2.3129 2.07358 2.3129 4.38649V6.4424H0V9.16648H2.3643V16.208H5.19118Z" fill="#05473C" /></svg>
      </FacebookShareButton></li>

      <li className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md"><TwitterShareButton className="twitter" url={socialConfig.config.url} quote={socialConfig.config.title}>
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2 1.52156C15.5912 1.79212 14.9486 1.96122 14.2891 2.04577C14.9825 1.63993 15.5067 0.99734 15.7603 0.23638C15.1008 0.625315 14.3906 0.895879 13.6466 1.04807C12.3952 -0.287837 10.2983 -0.355478 8.94551 0.895879C8.2691 1.52156 7.89708 2.40089 7.89708 3.31404C7.89708 3.56769 7.9309 3.82135 7.98163 4.075C5.30981 3.92281 2.8071 2.67145 1.11607 0.591495C0.219833 2.0965 0.642588 4.04118 2.09687 5.02197C1.57265 5.00506 1.04843 4.86978 0.591858 4.61613C0.591858 6.20569 1.70793 7.55851 3.26367 7.8798C2.77328 8.01508 2.26597 8.03199 1.75866 7.93053C2.19833 9.31717 3.4666 10.2641 4.92088 10.2641C3.73716 11.1942 2.28288 11.6846 0.794781 11.6846C0.524217 11.7015 0.270564 11.7015 0 11.6846C1.52192 12.6654 3.29749 13.1727 5.10689 13.1727C10.2983 13.2065 14.5259 9.0297 14.5597 3.83826C14.5597 3.77062 14.5597 3.71989 14.5597 3.65225C14.5597 3.50005 14.5597 3.36477 14.5597 3.21258C15.2023 2.77291 15.7603 2.19797 16.2 1.52156Z" fill="#05473C" /></svg>
      </TwitterShareButton></li>

      <li className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md"><LinkedinShareButton className="linkedin" url={socialConfig.config.url} quote={socialConfig.config.title}>
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9547 4.31275C9.83211 4.2192 8.70953 4.87404 8.14824 5.80953V5.90308V4.49985H5.06114C5.06114 5.34178 5.06114 13.8547 5.06114 13.8547H8.14824V8.61598C8.14824 8.33533 8.14824 8.14824 8.24179 7.86759C8.42888 7.21275 9.08372 6.74501 9.83211 6.74501C10.9547 6.74501 11.4224 7.58695 11.4224 8.80307V13.7611H14.5095V8.52243C14.5095 5.62243 13.0128 4.31275 10.9547 4.31275Z" fill="#05473C" /><path d="M3.28372 4.49985H0.196621V13.8547H3.28372V4.49985Z" fill="#05473C" /><path d="M1.78633 0.00891225C0.944396 -0.0846361 0.102461 0.570203 0.00891225 1.41214C-0.0846361 2.25407 0.570203 3.09601 1.41214 3.18956C1.50569 3.18956 1.59923 3.18956 1.78633 3.18956C2.62827 3.28311 3.4702 2.62827 3.56375 1.78633C3.6573 0.944396 3.00246 0.102461 2.16053 0.00891225C2.06698 0.00891225 1.87988 0.00891225 1.78633 0.00891225Z" fill="#05473C" /></svg>
      </LinkedinShareButton></li>

      <li className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md"><RedditShareButton className="reddit" url={socialConfig.config.url} title={socialConfig.config.title} >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.34863 12.651L12.6519 7.34766" stroke="#05473C" stroke-width="2" stroke-linejoin="round" /><path d="M11.3248 13.9771L9.11506 16.1868C8.41176 16.8899 7.458 17.2848 6.46355 17.2847C5.4691 17.2846 4.5154 16.8896 3.81222 16.1864C3.10903 15.4832 2.71395 14.5295 2.71387 13.5351C2.71378 12.5406 3.1087 11.5868 3.81176 10.8835L6.02147 8.67383" stroke="#05473C" stroke-width="2" stroke-linejoin="round" /><path d="M13.9781 11.3253L16.1878 9.11555C16.8909 8.41225 17.2858 7.45849 17.2857 6.46403C17.2856 5.46958 16.8905 4.51589 16.1874 3.81271C15.4842 3.10952 14.5305 2.71444 13.536 2.71436C12.5416 2.71427 11.5878 3.10919 10.8845 3.81225L8.6748 6.02196" stroke="#05473C" stroke-width="2" stroke-linejoin="round" /></svg>
      </RedditShareButton></li>

      <li className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md"><EmailShareButton className="email" subject={socialConfig.config.url} body={socialConfig.config.title}>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5C1.5 3.675 2.175 3 3 3Z" stroke="#05473C" stroke-width="1.75" /><path d="M16.5 4.5L9 9.75L1.5 4.5" stroke="#05473C" stroke-width="1.75" /></svg>
      </EmailShareButton></li>
    </ul>
  )
};



Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;

