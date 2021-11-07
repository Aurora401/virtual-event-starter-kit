import { Injectable, HttpService } from '@nestjs/common';
import {
  AdAccount,
  AdPreview,
  FacebookAdsApi,
} from 'facebook-nodejs-business-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// const AdAccount = bizSdk.AdAccount;
// const AdPreview = bizSdk.AdPreview;
import { AxiosResponse } from 'axios';

const FACEBOOK_ACCESS_TOKEN =
  'EAAo3qjSLyC8BAA95zRDhPGgBeutn0Am8AoMR69UinmXDIS20ZBKAOUTbZAfxoettg8ch0EiFC0iRZA9K2WBDLGtP9hm8ZAr3WITUTkVEgccZCV66mJWYy3ZB9aa1zPurZAGPCVlQamub5e8uC1gXtqNcR0prTSbnfiUZBVRPBPQijuHzwKqV0PkT';
// const app_secret = '<APP_SECRET>';
// const APP_ID = '3723537174539042';
const FACEBOOK_ACC_ID = '3723537174539042';
const api = FacebookAdsApi.init(FACEBOOK_ACCESS_TOKEN);

const fields = [];
const params = {
  creative: {
    object_story_spec: {
      page_id: '275869669269722',
      video_data: {
        video_id: '197215985862756',
        title: 'eero: wifi your home deserves',
        message:
          'Wifi for everything on your wish list. Shop & save up to 30% on eero mesh wifi systems.\n\nSave on select eero Wi-Fi 6 mesh systems. Ends November 7. US only. While supplies last.',
        call_to_action: {
          type: 'LEARN_MORE',
          value: {
            link: 'https://example.com',
          },
        },
        image_url: 'https://picsum.photos/536/354',
      },
    },
  },
  ad_format: 'DESKTOP_FEED_STANDARD',
  access_token: FACEBOOK_ACCESS_TOKEN,
};

const params2 = {
  creative: {
    object_story_spec: {
      link_data: {
        call_to_action: {
          type: 'USE_APP',
          value: { link: 'https://www.example.com' },
        },
        description: 'Description',
        link: 'https://www.example.com',
        message: 'Lorem ipsum dolor sit amet',
        name: 'Lorem ipsum dolor sit amet',
        picture:
          'https://www.facebook.com/ads/image/?d=AQIxdVCWVvT7pyTk-dGZ8aFq53bABA029pLlBrHqZlzjXIMlAkAiKt8zpN2QCeE_utiRWQhQsmRfeWJj85YTCghhkNbYYkJlP72uU7UEOVUkTTx60Q4BhcJ0raRhpkqc6-NcI5cLdfQdSmUOIeZLLelr',
      },
      page_id: '275869669269722',
    },
  },
  ad_format: 'SUGGESTED_VIDEO_MOBILE',
};

@Injectable()
export class FacebookService {
  constructor(private httpService: HttpService) {}

  async getPreviewsWithHttpGet(): Promise<any> {
    const previews = this.httpService
      .get(
        `https://graph.facebook.com/v12.0/6259452871189/previews/?access_token=${FACEBOOK_ACCESS_TOKEN}&ad_format=DESKTOP_FEED_STANDARD`
      )
      .pipe(
        map((response) => {
          return response.data.data[0].body;
        })
      );

    return previews;
  }

  async generatePreviews(): Promise<any> {
    const apiResponse: AdPreview[] = await new AdAccount(
      'act_10100702785484051'
    ).getGeneratePreviews(fields, params2);

    const iframeHtml = apiResponse[0]._data.body.replace(';t=', '&t=');

    return iframeHtml;
  }
}
