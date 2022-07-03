import { Link } from 'react-router-dom';

import { LINKED_IN_URL, GITHUB_URL, TWITTER_URL } from '../../constants/externalLinks';
import { hyphenate } from '../../util/strings';
import EmployeeImage from '../EmployeeImage/EmployeeImage';

export type TEmployee = {
  name: string
  imagePortraitUrl?: string
  imageWallOfLeetUrl?: string
  office: string
  linkedIn?: string
  gitHub?: string
  twitter?: string
  mainText?: string
}

export type TEmployeeCard = {
  employee: TEmployee
}

const LinkedInIcon = require('../../assets/icons/linkedin.png');
const GitHubIcon = require('../../assets/icons/github.png');
const TwitterIcon = require('../../assets/icons/twitter.png');

function EmployeeCard({ employee }: TEmployeeCard) {
  return (
    <section className="c-employee-card">
      {employee.imagePortraitUrl && (
        <EmployeeImage src={employee.imagePortraitUrl} name={employee.name} />
      )}
      <Link to={`/employee/${hyphenate(employee.name)}`} className="c-employee-card__link">
        <h2>{employee.name}</h2>
      </Link>
      <h3>
        Office:
        {' '}
        {employee.office}
      </h3>
      <div>
        {employee.linkedIn && (
          <a href={`${LINKED_IN_URL}/${employee.linkedIn}`} target="_blank" rel="noreferrer">
            <img src={LinkedInIcon} alt={`${employee.name}-linkedin`} className="c-employee-card--social-icon" />
          </a>
        )}
        {employee.gitHub && (
          <a href={`${GITHUB_URL}/${employee.gitHub}`} target="_blank" rel="noreferrer">
            <img src={GitHubIcon} alt={`${employee.name}-github`} className="c-employee-card--social-icon" />
          </a>
        )}
        {employee.twitter && (
          <a href={`${TWITTER_URL}/${employee.twitter}`} target="_blank" rel="noreferrer">
            <img src={TwitterIcon} alt={`${employee.name}-twitter`} className="c-employee-card--social-icon" />
          </a>
        )}
      </div>
    </section>
  );
}

export default EmployeeCard;
