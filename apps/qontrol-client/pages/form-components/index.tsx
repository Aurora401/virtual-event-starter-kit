import './index.module.scss';
import { ListSimple } from '../../components/list-simple/list-simple';

/* eslint-disable-next-line */
export interface IndexProps {}

export function Index(props: IndexProps) {
  return (
    <div>
      <h1>Welcome to Index!</h1>
      <ListSimple></ListSimple>
    </div>
  );
}

export default Index;
