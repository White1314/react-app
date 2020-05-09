import { FC } from 'react';
import { FireFilled, StarFilled } from '@ant-design/icons';
import Link from 'next/link';

import { getLastUpdated } from '../utils';

interface P {
  repo: {
    name: string;
    full_name: string;
    owner: {
      login: string;
    };
    description: string;
    updated_at: Date;
    language: string;
    stargazers_count: number;
  };
}

const Repo: FC<P> = ({ repo }) => {
  const {
    name,
    full_name,
    owner,
    description,
    updated_at,
    language,
    stargazers_count,
  } = repo;
  return (
    <div>
      <div className="repo-info">
        <h3 className="repo-title">
          <Link href={`/detail?owner=${owner.login}&name=${name}`}>
            <a>{full_name}</a>
          </Link>
        </h3>
        <div className="repo-desc">{description}</div>
        <div className="repo-other">
          {language ? (
            <span className="language">
              <FireFilled style={{ color: '#e54d42' }} />
              <div className="other-cont">{language}</div>
            </span>
          ) : null}
          <span className="stars">
            <StarFilled style={{ color: '#fbbd08' }} />
            <div className="other-cont">{stargazers_count}</div>
          </span>
          <span className="last-updated">
            {`Updated on ${getLastUpdated(updated_at)}`}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .repo-info {
            width: 100%;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
            padding-bottom: 20px;
          }
          .repo-title {
            font-size: 20px;
          }
          .repo-desc {
            width: 400px;
            margin-bottom: 20px;
          }
          .repo-other {
            font-size: 12px;
            display: flex;
          }
          .repo-other span {
            height: 20px;
            display: flex;
            align-items: center;
            margin-right: 15px;
          }
          .other-cont {
            padding-left: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Repo;
