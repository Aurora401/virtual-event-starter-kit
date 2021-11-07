import './facebook-preview.module.scss';

import { Embed } from 'semantic-ui-react';

const iframeUrl =
  'https://www.facebook.com/ads/api/preview_iframe.php?d=AQLUXGhxmPyUasBepyl-kQ74imDboxLvQWvEdNR-CBhV8OOHttgW8vpDgAWwzF421PPuuaUX1WFoj6JEfbFaFTNNwozVZwYQw6KZd0ZZ86EB7X6ZDTOoftgKVFRRtUgbKQS8xdTlrPIwXHSAehzVhVc2_or2UueHcDQdpPjKP0OWMNfhdMNF1Kmo8tzt9ew_SKr-CT-l4C2zcRMasx_33VgooyJa6gil_Awbvymlspo2B_6jZDrtvAoCJQ8oIQV04ilXnNYiqb61--dCqELXFcmWrzuDSzLjYKgbu_znsuHJ8PvMu_YJdOktMQTd9V-VIpjMxwsoLF3X7WWk_k85lNeYQGxTOfFvMgqTRcLl8JFMkiJMERFIF2D7Kqg0q46xA-uAWouIcIDgsshBuX9VLCiW7poYThxYeAnx8bLznJZK9T-hrb1KGIq8VvMYsROAYpRPOyzQzl07IWLM0Wi34Elca8uiCubZAiZgEeVzAzy2JdS6EWLwxk0etTIsiXZKoBBH44CHkb9rG5TrKdx5mL2dp6zFL06Vh0xTL01MxfkwFfdV1OO112QcFKPAUcwTI8p-hbMgbC-cg_6_E0k2vr4wntPQRjH-Y2ZnSxLFqNktu-HNJq3NVaRcX_RSQYimVHTZ3BFwNyC4Wvwah-7_2Gv2tGsMeCEg6h6QnWVgpZ7kp3AD8hpAC9up_QHQTy3xp-IhR0qrLbgQMvMlrqbOv8U8hwSR12Vagmyo2bHdcpkrODk4Q7T8eFqcUwPExLvnpwgNskAc4tNsd-2NcSLIw5pCZPEYuiGhPtTDFSxOybRkLKpVoveHHl4UDcfJayzUSkE1jBbo5XHuhIg6iIxd4QKKPgdtY8noHFbPtnC2Lrude2GSJ7bJYyCzl_xyRaR0diPz1OAQ0dnosO1EEdbukPLA3CL1tH9m_5yZJw2jsudZQJYG-D0LAYdnQeduT2W94A6KL4-2mJBvszZFn2bRV8FkAcU79rvJDxYvA7lBIlRLikdZEjNq-Ez6xYCXRd1Xj1HW4sBeS-lpUiNsFAgsnkAkxZAHODO38TtqCfmAAbBDQF0kOxKgBA-ptJYTYbPIS8cMQSBsWD6zdopnqDoQE4r_pa3e8xC-EfahFuipVQ7BSrfw5xBhL8VvgiQOwHtzvA5oN2OP4pk10Q0K0VLMZi7kiKT0BOtsx8MWRPYBEz_rqL2rvDkTuEreMg5iEQW4EppILoikbpxZnQUB02_Q6fgiK8sxaGFG6lUOkWbM5p1Cyzl9z_8u2PJW9lmiA34IKdcdeXaurVK0EiHtUYr-zWJKCgTECWFOxyXWkAZjHOqmKwne_mCwVOdvMpQF4T3NlXB2LeQ703N-4r5Fv0ANjOc7Q9xx_35KOWJioqgmgcQIe3hsLM2TmVp5-deSRVCBsSFEot7aXgWPG_hUKFEmJyqenDfJzl0ghG798l2LAGX-LvdwyqQmLdBcCHv1Fa0RPN50WCL47-40umxKoULq4U4RF-YC-49pA6HReUqh8Htc6UezF0MLX3LUs8XKwsS9X6gIAhdEIv784qLyyIWYaOrYWHVBuNysn9MG36Ni4BZtkmxiojqvdFsTHRK1-CfD3yX4WHyLGErdkFPBkO5xtCHlp_mSWTJj09-9U82sqpBfYGDeonuZJMJDAGs89pDuMMaBJTk4TvM1RKSyJdPBI-Du4r0MloXTCtZaGto94KfTYQ&amp&t=AQKBIhbCJ2NdL7R1Xs4';
/* eslint-disable-next-line */

const previewIframe =
  'https://www.facebook.com/ads/api/preview_iframe.php?d=AQK0amHjjk_hNMcUcnXdFDR_gl9FhpVtz_n7yDgUP5CM8jl1Xqs6OK20o_h8VFPzfyXWWvmVDAWiIC4vLgg_0RfNrZoddC-V3JqCmCYTueNysfXxWnTx4pzhzhyEy9L7mVjJqAzQALxSbzJquFTzmnjt9ZlkE4eEx8z8r3czzeX86kIBtkTn7NmckLz3TR3ldoeaD8M8bdL2lBTqPPUnULn2HbM3s14GQQHkcwQai1qqPrrHY528jaCGDxUTgqnNw1FBnQ9v-g1_7vwqr0Z2cIe3HKc-59wTtXgGb_gfXcVQWjB-K0Rf6PrLKGnE89PALYEZ6Of3f8qv97uNeXGgSDYXloa6Sp2iq1MDV9Pp5x8zzW1ATpnp1-U2E01jcy_sxGulPp9L_tsBEnkkNlNVBdGSgztFdMYfgOxP9J4wLAF1jfE1gQ5sR050LikEvjIPsas-KXVGtntpmgmx7ybZWzwQq_fuddJ0xd7kwktEcZs-7RA-ywuN6R9rRyWLwggi_Mi6d5WzzdjBhoBkrMIpV6FVTKUTTfXHrE8mVKTd91HIXIEjEZqHYtQWyBCfqBRixrMoCtVDd0bBypQzi8aw9xPV3FIqi7MUvu5PiD74Xe6a3hGS-kXOODT-J6Z9l_h029j3pG4edqPFCMrK4PThap9dDDJ7jmLB3wmlVHFt5mW2UQEsKffOCc8_5L4KqboOocZ78qMe84IWytwYjYvvTF5CjL-vh4V1U6gaOV566DOcvWWbEvYHCAB8zNuSh0nbOglZudL8s-IWSYa-cbmRDFT97FCKatt7_tSIBbgYXMFLGdUhj_esM8wYFmTzQAOp1fMVN8qZlnD02vHFZOOSnaOUP_jAQMkRaJzK6RSMzG867i7nGkRwZmLvHohPomq7L0KADZCzYaFjxhc0iG638AC2lp9eXelYZxzaU2HOMxQs5Wa3Q-3WGqPDodAL_3e68r9URoIabQ_GwRUTYcCcomtpfIg1JKrbHuVEXJIvF25u6n4Fyl_cRP9pFtQptcsWWWNkppD--MUAVBaGawb_UqmDuurgd1giMNZO831gmxwF3ltjyjk2xXkScicXVpQV9ZT2dbUM3cB3GZn00EwEra1irD3zpuWXVDWDlW9r7ZYZulqckXy-rKbpOyaDD7Q42wiNSJi1ErkAqTqRZbsiYsLpgAdve9xBPsvtF6z5i4OTkoagMEY3dHeHxEO3MY93KKFLnLjuwiTM1Jbp42hEuP6kPyFPNW2_JaZ5DSkb0ZsktYDkJFcZLTHO7KN2ZgfcBD9YwgxLAgnj4WuOJsYtMVqxpJqFqxsJ1xh8o95hclhVU2-zzISy1Mo0lfN5Y2YafcQgQ2cDlHHS2XWdpQCfR_GxCtYKSETWMDGAUBBkHf1kVExKtL_ApR8lDkuXnF-CTcZXz52f0tl6jS90bMxr5VewISq9X6H39aDLHqUGTyIXpwxjy3kcyJYmmel62XDkqKTHjxvDHbk1SUvxBZX3BEg50arB-bVxQq3fkaoMtP9_lpzrvUKmiv823Xl1VUbyPzFn6x5APQtfSK_6FZWI9G57sm4IgyWCfF_IuCJcWXTcexOkL6ZOoGZZJA2oaF10O83Nwi95FJKiM_adS-_4HosbwwAhn7iY2WUSMsILbQPMcbmYEiExwccHwV1IaenEj5X0NfhQbo4qhLjBzE3aOE8vTkkemJivA-wPgMIyDcfdB4B205KKyoPz9jUc2K9vfdawBKYt1QWGWsozNXUr4Gy_VDtJrJJxp5HmJkvASe5Xl7ULv7X5IczCu9qHffPeRlZcWR_EOxyAnd9UP974rFn3CUrW8HOTtrjmtF-vnvcmmcdXx08ej0bpFwST3WTbw3r8q1uhnzaMxHBe73MLq50y5rEz1TOA5mawQpXfCHL21sVSTTM247BdORsG8QB85gpY_mQk3b_BN9X5bkwpNRr8bhLyO_m9VCu8quEyJ3CiV8C44-OJVZcZriTEWyFL7MbRaDeBjkXn3sKXzvNJ8cWOA5CeHlMSFOlWSbfwp6e5TZM1ENEGSGCO1DUspdyLam02C_9o4Z8AJcXWScR5K0FDEL3YrDLOQxTEMSrmKZ6jl1IA26ZEPE-IWHlOyrLA7-1SLAXUWIbalmIJTPXipksys-P4ckTPhJhkBrsKPy21iPYFjZXp1qXphtT7KOSbeOu7V8kyeJXWMu2CML5T_bNo3aSOTMXR5YzJBB3ZGnkB5A6cobw8hIaQliL-vlRazEiHyQ4E13FJJjPs8urR6IekOiWCy-fqbGBn0wPFjv9dA0huUwvSg4CreREDi8L9L5E&amp;t=AQLcSkkoKvHRPtMGwDE" width="540" height="690" scrolling="yes" style="border: none;"></iframe>"},"_fields":["body"],"_changes":{"body":"<iframe src="https://www.facebook.com/ads/api/preview_iframe.php?d=AQK0amHjjk_hNMcUcnXdFDR_gl9FhpVtz_n7yDgUP5CM8jl1Xqs6OK20o_h8VFPzfyXWWvmVDAWiIC4vLgg_0RfNrZoddC-V3JqCmCYTueNysfXxWnTx4pzhzhyEy9L7mVjJqAzQALxSbzJquFTzmnjt9ZlkE4eEx8z8r3czzeX86kIBtkTn7NmckLz3TR3ldoeaD8M8bdL2lBTqPPUnULn2HbM3s14GQQHkcwQai1qqPrrHY528jaCGDxUTgqnNw1FBnQ9v-g1_7vwqr0Z2cIe3HKc-59wTtXgGb_gfXcVQWjB-K0Rf6PrLKGnE89PALYEZ6Of3f8qv97uNeXGgSDYXloa6Sp2iq1MDV9Pp5x8zzW1ATpnp1-U2E01jcy_sxGulPp9L_tsBEnkkNlNVBdGSgztFdMYfgOxP9J4wLAF1jfE1gQ5sR050LikEvjIPsas-KXVGtntpmgmx7ybZWzwQq_fuddJ0xd7kwktEcZs-7RA-ywuN6R9rRyWLwggi_Mi6d5WzzdjBhoBkrMIpV6FVTKUTTfXHrE8mVKTd91HIXIEjEZqHYtQWyBCfqBRixrMoCtVDd0bBypQzi8aw9xPV3FIqi7MUvu5PiD74Xe6a3hGS-kXOODT-J6Z9l_h029j3pG4edqPFCMrK4PThap9dDDJ7jmLB3wmlVHFt5mW2UQEsKffOCc8_5L4KqboOocZ78qMe84IWytwYjYvvTF5CjL-vh4V1U6gaOV566DOcvWWbEvYHCAB8zNuSh0nbOglZudL8s-IWSYa-cbmRDFT97FCKatt7_tSIBbgYXMFLGdUhj_esM8wYFmTzQAOp1fMVN8qZlnD02vHFZOOSnaOUP_jAQMkRaJzK6RSMzG867i7nGkRwZmLvHohPomq7L0KADZCzYaFjxhc0iG638AC2lp9eXelYZxzaU2HOMxQs5Wa3Q-3WGqPDodAL_3e68r9URoIabQ_GwRUTYcCcomtpfIg1JKrbHuVEXJIvF25u6n4Fyl_cRP9pFtQptcsWWWNkppD--MUAVBaGawb_UqmDuurgd1giMNZO831gmxwF3ltjyjk2xXkScicXVpQV9ZT2dbUM3cB3GZn00EwEra1irD3zpuWXVDWDlW9r7ZYZulqckXy-rKbpOyaDD7Q42wiNSJi1ErkAqTqRZbsiYsLpgAdve9xBPsvtF6z5i4OTkoagMEY3dHeHxEO3MY93KKFLnLjuwiTM1Jbp42hEuP6kPyFPNW2_JaZ5DSkb0ZsktYDkJFcZLTHO7KN2ZgfcBD9YwgxLAgnj4WuOJsYtMVqxpJqFqxsJ1xh8o95hclhVU2-zzISy1Mo0lfN5Y2YafcQgQ2cDlHHS2XWdpQCfR_GxCtYKSETWMDGAUBBkHf1kVExKtL_ApR8lDkuXnF-CTcZXz52f0tl6jS90bMxr5VewISq9X6H39aDLHqUGTyIXpwxjy3kcyJYmmel62XDkqKTHjxvDHbk1SUvxBZX3BEg50arB-bVxQq3fkaoMtP9_lpzrvUKmiv823Xl1VUbyPzFn6x5APQtfSK_6FZWI9G57sm4IgyWCfF_IuCJcWXTcexOkL6ZOoGZZJA2oaF10O83Nwi95FJKiM_adS-_4HosbwwAhn7iY2WUSMsILbQPMcbmYEiExwccHwV1IaenEj5X0NfhQbo4qhLjBzE3aOE8vTkkemJivA-wPgMIyDcfdB4B205KKyoPz9jUc2K9vfdawBKYt1QWGWsozNXUr4Gy_VDtJrJJxp5HmJkvASe5Xl7ULv7X5IczCu9qHffPeRlZcWR_EOxyAnd9UP974rFn3CUrW8HOTtrjmtF-vnvcmmcdXx08ej0bpFwST3WTbw3r8q1uhnzaMxHBe73MLq50y5rEz1TOA5mawQpXfCHL21sVSTTM247BdORsG8QB85gpY_mQk3b_BN9X5bkwpNRr8bhLyO_m9VCu8quEyJ3CiV8C44-OJVZcZriTEWyFL7MbRaDeBjkXn3sKXzvNJ8cWOA5CeHlMSFOlWSbfwp6e5TZM1ENEGSGCO1DUspdyLam02C_9o4Z8AJcXWScR5K0FDEL3YrDLOQxTEMSrmKZ6jl1IA26ZEPE-IWHlOyrLA7-1SLAXUWIbalmIJTPXipksys-P4ckTPhJhkBrsKPy21iPYFjZXp1qXphtT7KOSbeOu7V8kyeJXWMu2CML5T_bNo3aSOTMXR5YzJBB3ZGnkB5A6cobw8hIaQliL-vlRazEiHyQ4E13FJJjPs8urR6IekOiWCy-fqbGBn0wPFjv9dA0huUwvSg4CreREDi8L9L5E&amp;t=AQLcSkkoKvHRPtMGwDE" width="540" height="690" scrolling="yes" style="border: none;"></iframe>"},"body":"<iframe src="https://www.facebook.com/ads/api/preview_iframe.php?d=AQK0amHjjk_hNMcUcnXdFDR_gl9FhpVtz_n7yDgUP5CM8jl1Xqs6OK20o_h8VFPzfyXWWvmVDAWiIC4vLgg_0RfNrZoddC-V3JqCmCYTueNysfXxWnTx4pzhzhyEy9L7mVjJqAzQALxSbzJquFTzmnjt9ZlkE4eEx8z8r3czzeX86kIBtkTn7NmckLz3TR3ldoeaD8M8bdL2lBTqPPUnULn2HbM3s14GQQHkcwQai1qqPrrHY528jaCGDxUTgqnNw1FBnQ9v-g1_7vwqr0Z2cIe3HKc-59wTtXgGb_gfXcVQWjB-K0Rf6PrLKGnE89PALYEZ6Of3f8qv97uNeXGgSDYXloa6Sp2iq1MDV9Pp5x8zzW1ATpnp1-U2E01jcy_sxGulPp9L_tsBEnkkNlNVBdGSgztFdMYfgOxP9J4wLAF1jfE1gQ5sR050LikEvjIPsas-KXVGtntpmgmx7ybZWzwQq_fuddJ0xd7kwktEcZs-7RA-ywuN6R9rRyWLwggi_Mi6d5WzzdjBhoBkrMIpV6FVTKUTTfXHrE8mVKTd91HIXIEjEZqHYtQWyBCfqBRixrMoCtVDd0bBypQzi8aw9xPV3FIqi7MUvu5PiD74Xe6a3hGS-kXOODT-J6Z9l_h029j3pG4edqPFCMrK4PThap9dDDJ7jmLB3wmlVHFt5mW2UQEsKffOCc8_5L4KqboOocZ78qMe84IWytwYjYvvTF5CjL-vh4V1U6gaOV566DOcvWWbEvYHCAB8zNuSh0nbOglZudL8s-IWSYa-cbmRDFT97FCKatt7_tSIBbgYXMFLGdUhj_esM8wYFmTzQAOp1fMVN8qZlnD02vHFZOOSnaOUP_jAQMkRaJzK6RSMzG867i7nGkRwZmLvHohPomq7L0KADZCzYaFjxhc0iG638AC2lp9eXelYZxzaU2HOMxQs5Wa3Q-3WGqPDodAL_3e68r9URoIabQ_GwRUTYcCcomtpfIg1JKrbHuVEXJIvF25u6n4Fyl_cRP9pFtQptcsWWWNkppD--MUAVBaGawb_UqmDuurgd1giMNZO831gmxwF3ltjyjk2xXkScicXVpQV9ZT2dbUM3cB3GZn00EwEra1irD3zpuWXVDWDlW9r7ZYZulqckXy-rKbpOyaDD7Q42wiNSJi1ErkAqTqRZbsiYsLpgAdve9xBPsvtF6z5i4OTkoagMEY3dHeHxEO3MY93KKFLnLjuwiTM1Jbp42hEuP6kPyFPNW2_JaZ5DSkb0ZsktYDkJFcZLTHO7KN2ZgfcBD9YwgxLAgnj4WuOJsYtMVqxpJqFqxsJ1xh8o95hclhVU2-zzISy1Mo0lfN5Y2YafcQgQ2cDlHHS2XWdpQCfR_GxCtYKSETWMDGAUBBkHf1kVExKtL_ApR8lDkuXnF-CTcZXz52f0tl6jS90bMxr5VewISq9X6H39aDLHqUGTyIXpwxjy3kcyJYmmel62XDkqKTHjxvDHbk1SUvxBZX3BEg50arB-bVxQq3fkaoMtP9_lpzrvUKmiv823Xl1VUbyPzFn6x5APQtfSK_6FZWI9G57sm4IgyWCfF_IuCJcWXTcexOkL6ZOoGZZJA2oaF10O83Nwi95FJKiM_adS-_4HosbwwAhn7iY2WUSMsILbQPMcbmYEiExwccHwV1IaenEj5X0NfhQbo4qhLjBzE3aOE8vTkkemJivA-wPgMIyDcfdB4B205KKyoPz9jUc2K9vfdawBKYt1QWGWsozNXUr4Gy_VDtJrJJxp5HmJkvASe5Xl7ULv7X5IczCu9qHffPeRlZcWR_EOxyAnd9UP974rFn3CUrW8HOTtrjmtF-vnvcmmcdXx08ej0bpFwST3WTbw3r8q1uhnzaMxHBe73MLq50y5rEz1TOA5mawQpXfCHL21sVSTTM247BdORsG8QB85gpY_mQk3b_BN9X5bkwpNRr8bhLyO_m9VCu8quEyJ3CiV8C44-OJVZcZriTEWyFL7MbRaDeBjkXn3sKXzvNJ8cWOA5CeHlMSFOlWSbfwp6e5TZM1ENEGSGCO1DUspdyLam02C_9o4Z8AJcXWScR5K0FDEL3YrDLOQxTEMSrmKZ6jl1IA26ZEPE-IWHlOyrLA7-1SLAXUWIbalmIJTPXipksys-P4ckTPhJhkBrsKPy21iPYFjZXp1qXphtT7KOSbeOu7V8kyeJXWMu2CML5T_bNo3aSOTMXR5YzJBB3ZGnkB5A6cobw8hIaQliL-vlRazEiHyQ4E13FJJjPs8urR6IekOiWCy-fqbGBn0wPFjv9dA0huUwvSg4CreREDi8L9L5E&amp&t=AQLcSkkoKvHRPtMGwDE';

export function FacebookPreview(props) {
  return (
    <div>
      <h1>Welcome to FacebookPreview!</h1>

      <iframe
        src={previewIframe}
        width="540"
        height="690"
        scrolling="yes"
      ></iframe>
    </div>
  );
}

export default FacebookPreview;
