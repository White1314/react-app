import { FC, memo } from 'react';
import { getLastUpdated } from '../utils';
import { Card, Avatar } from 'antd';
const { Meta } = Card;

interface P {
  issues: any;
}

const Issues: FC<P> = memo(({ issues }) => (
  <Card key={issues.id}>
    <Meta
      avatar={<Avatar src={issues.user.avatar_url} />}
      title={issues.title}
      description={`Updated at ${getLastUpdated(issues.updated_at)}`}
    ></Meta>
  </Card>
));

export default Issues;
