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

import React, { useState, useEffect } from 'react';
import styles from './video-snapshots.module.css';
import { SHORT_DATE } from '@lib/constants';
import VideoCard from './video-card';

export default function VideoSnaphotsContainer() {
  const video = {
    title: 'Video tttle',
    thumbnail: 'https://picsum.photos/536/354',
    start: 'string',
    end: 'string'
  };

  return (
    <div className={styles.schedule}>
      <h3 className={styles.header}>Video Snapshots</h3>
      <p>{SHORT_DATE}</p>
      <VideoCard video={video} />
    </div>
  );
}
