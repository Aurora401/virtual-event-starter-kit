/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { parseISO, format, isBefore, isAfter } from 'date-fns';
import { VideoEdit } from '@lib/types';
import styles from './video-card.module.css';

type Props = {
  video: VideoEdit;
};

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

export default function VideoCard({ video: { title, thumbnail, start, end } }: Props) {
  const [isTalkLive, setIsTalkLive] = useState(false);

  useEffect(() => {
    const now = Date.now();
    setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
  }, [end, start]);

  return (
    <div key={title} className={styles.talk}>
      <Link href={'/'}>
        <a
          className={cn(styles.card, {
            [styles['is-live']]: isTalkLive
          })}
        >
          <div className={styles['card-body']}>
            <h4 title={title} className={styles.title}>
              {title}
            </h4>
            <div className={styles.speaker}>
              <div className={styles['avatar-group']}>
                <div className={styles['avatar-wrapper']}>
                  <Image
                    loading="lazy"
                    alt="thumbnail"
                    className={styles.avatar}
                    src={thumbnail}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
