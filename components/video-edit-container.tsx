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
import styles from './video-edit-container.module.css';
import styleUtils from './utils.module.css';
import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';
import React, { useEffect, useState } from 'react';
import VideoSnaphotsContainer from './video-snapshots';

import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import FormTemplate from '@data-driven-forms/suir-component-mapper/form-template';
import componentMapper from '@data-driven-forms/suir-component-mapper/component-mapper';

import { Player, DefaultUi, Youtube } from '@vime/react';

import { applyPolyfills, defineCustomElements } from '@vime/core/loader';

import '@vime/core/loader';
import { Button } from 'semantic-ui-react';

export default function VideoEditorContainer() {
  useEffect(() => {
    void applyPolyfills().then(() => {
      void defineCustomElements(window);
    });
  }, []);

  const searchSchema = {
    fields: [
      {
        component: 'text-field',
        label: 'Enter Youtube video Id',
        placeholder: 'Enter Youtube video Id',
        name: 'video-id'
      }
    ]
  };

  const videoEditorSchema = {
    fields: [
      {
        component: 'field-array',
        name: 'video-snapshots',
        label: 'Video Snapshots',
        description: 'This allow you to add nice people to the list dynamically',
        ArrayItemFieldsGridProps: {
          className: styles.videoEditorItem
        },
        fields: [
          {
            component: 'text-field',
            label: 'Start video from:',
            name: 'start-time',
            type: 'number'
          },
          {
            component: 'text-field',
            label: 'End video at:',
            name: 'end-time',
            type: 'number'
          },
          {
            component: 'text-field',
            label: 'Enter a name for your video',
            placeholder: 'Enter a name for your video',
            name: 'video-name'
          }
        ]
      }
    ]
  };

  const [videoId, setVideoId] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.streamContainer}>
        <FormRenderer
          schema={searchSchema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={values => {
            console.log(values);
            console.log(values['video-id']);
            setVideoId(values['video-id']);
          }}
        />
        {videoId && (
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: `
            <vm-player theme="dark">
              <vm-youtube video-id=${videoId}></vm-youtube>

              <vm-default-ui></vm-default-ui>
            </vm-player>`
              }}
            ></div>
            <FormRenderer
              schema={videoEditorSchema}
              FormTemplate={FormTemplate}
              componentMapper={componentMapper}
              onSubmit={values => {
                console.log(values);
              }}
            />
          </div>
        )}
        <div className={cn(styles.stream, styleUtils.appear, styleUtils['appear-first'])}>
          {/* <Player theme="dark">
            <Youtube videoId={videoId} />

            <DefaultUi />
          </Player> */}
        </div>
      </div>
      <VideoSnaphotsContainer />
    </div>
  );
}
