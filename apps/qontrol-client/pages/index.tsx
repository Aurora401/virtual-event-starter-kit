

import styles from './index.module.scss';
import ScheduleDelivery from '../components/schedule-delivery/schedule-delivery';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <ScheduleDelivery></ScheduleDelivery>
    </div>
  );
}

export default Index;
