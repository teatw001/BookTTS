import dotenv from "dotenv";
dotenv.config();

export const FormEmail = (name, email, randomCode, resetPasswordUrl) => {
    return /*html*/`
  <div>
  <div style="margin: 5px auto 5px; padding: 5px; max-width: 600px; background: linear-gradient(to left,#7347c1,#0674ec); border: 5px solid transparent; background-repeat: no-repeat; background-origin: padding-box,border-box">
      <table cellpadding="0" cellspacing="0" border="0" align="center" style="background:white">
          <tbody>
              <tr>
                  <td>
                      <div>
                          <table cellpadding="0" cellspacing="0" border="0" align="center" width="600">
                              <tbody>
                                  <tr height="40">
                                      <td width="200">&nbsp;</td>
                                      <td width="200">&nbsp;</td>
                                      <td width="200">&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td width="200" valign="top">&nbsp;</td>
                                      <td width="200" valign="top" align="center">
                                          <div>
                                              <div align="center">
                                                  <a href=${process.env.APP_URL} title="Cellphones"
                                                      target="_blank"
                                                      data-saferedirecturl="https://www.google.com/url?q=https://linkneverdie.net&amp;source=gmail&amp;ust=1681318427616000&amp;usg=AOvVaw39XgVgdIHLB1soAuAVGfO_">
                                                      <img src="https://brademar.com/wp-content/uploads/2022/10/CellphoneS-Logo-PNG-1.png"
                                                          alt="Cellphones Logo" class="CToWUd" data-bit="iit"
                                                          width="250px">
                                                  </a>
                                              </div>
                                          </div>
                                      </td>
                                      <td width="200" valign="top">&nbsp;</td>
                                  </tr>
                                  <tr height="25">
                                      <td width="200">&nbsp;</td>
                                      <td width="200">&nbsp;</td>
                                      <td width="200">&nbsp;</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div>
                          <table cellpadding="0" cellspacing="0" border="0" align="center" width="600">
                              <tbody>
                                  <tr>
                                      <td width="100%" colspan="3" align="center"
                                          style="padding-bottom:10px;padding-top:25px">
                                          <div>
                                              <div align="center">
                                                  <h2>Khôi phục tài khoản</h2>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td width="100">&nbsp;</td>
                                      <td width="400" align="center">
                                          <div>
                                              <div align="left">
                                                  <p>
                                                      Xin chào <b style="color:#0674ec">${name}</b>
                                                      <br>
                                                      Email: <b style="color:#0674ec">${email}</b>
                                                      <br>
                                                      <br>
                                                      Mã bảo mật: <b style="color:red">${randomCode}</b>
                                                      <br>
                                                      <br>
                                                      Bấm vào nút <b style="color:#0674ec">Khôi Phục</b> bên dưới để
                                                      đổi mật khẩu<br>
                                                      <span style="color:red">Thư này chỉ tồn tại trong 3 phút</span>
                                                  </p>
                                              </div>
                                          </div>
                                      </td>
                                      <td width="100">&nbsp;</td>
                                  </tr>
                              </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" border="0" align="center" width="600">
                              <tbody>
                                  <tr>
                                      <td width="200">&nbsp;</td>
                                      <td width="200" align="center" style="padding-top:25px">
                                          <table cellpadding="0" cellspacing="0" border="0" align="center" width="200"
                                              height="50">
                                              <tbody>
                                                  <tr>
                                                      <td bgcolor="#0674ec" align="center" style="border-radius:4px"
                                                          width="200" height="50">
                                                          <div>
                                                              <div align="center">
                                                                  <a style="color: white; text-decoration: none"
                                                                      href=${resetPasswordUrl}
                                                                      class="m_2881936300035526811link2"
                                                                      target="_blank"
                                                                      data-saferedirecturl="https://www.google.com/url?q=https://linkneverdie.com/recovery/?code%3D5cfd11a6-1db3-4c7b-ad83-ad8d94c5c93d&amp;source=gmail&amp;ust=1681318427616000&amp;usg=AOvVaw3al8rbom1DP7zDdpgUJNH5">Khôi
                                                                      phục</a>
                                                              </div>
                                                          </div>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                      <td width="200">&nbsp;</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div>
                          <table cellpadding="0" cellspacing="0" border="0" align="center" width="600">
                              <tbody>
                                  <tr>
                                      <td width="100%" colspan="2" style="padding-top:65px">
                                          <hr style="height:1px;border:none;color:#333;background-color:#ddd">
                                      </td>
                                  </tr>
                                  <tr>
                                      <td width="60%" height="70" valign="middle" style="padding:20px">
                                          <div>
                                              <div align="left">
                                                  <span
                                                      style="font-size:13px;color:#181818;font-family:Quicksand,Arial,sans-serif;line-height:200%">Email
                                                      sent by Cellphones</span>
                                                  <br>
                                                  <span
                                                      style="font-size:11px;color:#555;font-family:Quicksand,Arial,sans-serif;line-height:200%"><a
                                                          href="mailto:bavuongnganhthuongcung4@gmail.com"
                                                          target="_blank">bavuongnganhthuongcung4@gmail.com</a>
                                                      |
                                                      +84123456789</span>
                                                  <br>
                                              </div>
                                          </div>
                                      </td>
                                      <td width="40%" height="70" align="right" valign="top" style="padding:20px">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                              align="right">
                                              <tbody>
                                                  <tr>
                                                      <td width="57%"></td>
                                                      <td valign="top" width="34">
                                                          <div style="display:inline">
                                                              <div>
                                                                  <img src="https://lh3.googleusercontent.com/Ch_g1l5CS4c5yl7kHEEtBUESzpn_NGs6huL09liQoewradVl6Mn-oD2WZw7WmWg1LfRnGR2e1dQy-1574k4vcrSs_ccey7Gw23CHljLiJRkqvtfObRa0ca4AL2VyN4U4WmGRANvsyNraoJ5yzvID5-fat8RUvCUGkbD5csb6ZBqgtLmOnGb7cfkOlH3zlvFRx7XU-6PV79Yt9MhxRD4V8EnCmcwR1I0qJ6vedvbSAb6L3iIeu8S2PfzXnjQANkP6IbLXPKrusdQZZMcb2N1iTc6TsmV6SqNT-oC9-Edxj6EkYPTjC6foaIX57Nlqa6iqw-AOWdYn_v8yYqvIRPxuIyO4fuKhBuN5-mtwCGQODzDGNVGdx6TIpRtCcV168rR_saU7urnHP55QtrJsb2J1dk-FanuGWQrBUfaBf6FjNBMHLx4X6aMsX4XElb7mIrLyk-nxKvOoybLkWqQi8JnwSWoh_qFQa0EnjmRdXmrP-4sz-_m-zJjGLiE1h83JCkHHAxscRURH-_fpG6e_RH1M2rKTcYrFv6iINWk-y8F6J31wugmUkfOUBdh-WzQhbn_8QgK1Cp1A9Evq3OSlj1w2e1NTyoIPPbo6QsKWXeF_An4-Y4XZI4QWXo-tTWiys1SucX5TC6vKQyXNyrCqOw-8KKGPbqqTrLKbvF_CnVr1gqoIhhDnA59L_MVUGFJL_5LgkXq3BFD9lHUeLMog29pnZxEm-A=s82-no"
                                                                      width="30" height="30" alt="facebook"
                                                                      style="margin-right:40x" class="CToWUd"
                                                                      data-bit="iit">
                                                              </div>
                                                          </div>
                                                          <div style="display:inline">
                                                              <div>
                                                                  <img src="https://lh3.googleusercontent.com/V1wBClRjq7x66TlIGiecvwpfLpF2FtbBp289BR4LWQd85oOPGOWbRaJDxbPuHiixARcO0CEUuuw3JVZ-bxPl3xe1lp3XdDAjFEwZmFmfhMVmY0ybyemjt2-YjyWm1XRORlT4BW2y-Bz2gDUxL9WKjc9QhaEqILsMTZppAYZeKVVPyGZS_GFKct6ohXYkFcbtGK0_Fni_zA7qnjtKP_APphVz0mB6cg-tAshLhR3FiYNXEvwjLokn3CEOgfJGPZvvwUW2oJ5rCYcO-sLVOk3pn08fCkCOuzhLWGUdD4GO40qhh7rFXHGgEzIlhQg0mV3ip7mpML7SYzaxxq7irzh2n_hMCTGuNuEaGXk_DHqpFFW7Lyy-kzGigcI2rY4tTNp9xWaWIKg2XjujpvxU24-S85TSdNsR11nzMcNcokJETowKyHEV7SO967rGeDNpXMJhPiyL1EhDmrNa1hmSEmC_Sx6aMixD5_afp1wYIeVqPQbNMKzy1qg5TczlOGY3wEM0r3Q22xJwIcQP5KHBuZVSZHCpiQkl9RMK0R3oNPXl7mezAjypy6X86q7Iuw4hi55WToUMl4x0KLkGyndIYZu9Ztv1bq_tsa-Uo-a2h71F0WJbZqm14IvE8KFkWKQPfEwA-eLoVt4pgvMbiCWyCb3XpLG9qmHZAZRX1lftRXCLFNkspv5lkxfk1mZZsXBajRIh7YEN0ydk9y8jMNwos8stSHjc-w=s82-no"
                                                                      width="30" height="30" alt="facebook"
                                                                      style="margin-right:40x" class="CToWUd"
                                                                      data-bit="iit">
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td valign="top" width="34">
                                                          <div style="display:inline">
                                                              <div>
                                                                  <a href="#m_2881936300035526811_"
                                                                      style="text-decoration:none">
                                                                      <img src="https://lh3.googleusercontent.com/L7mm_-10ycDGgN63zNWegYmY4iRaWSgaZtV0OCNXWMw1jUpB-Co0ROVDDE9_saciUVLLPI-6-BIL2R8Hu72w-I4caqF7SE7I4AhAFM6g_IhUUa2j14XwFqduF-YcRxeKk5wE1koVeDkF9U4utSduB9XxTlsZO2wuCEYcIlwk1UvcT7rJxkuaZijVTCJ7s3QgMU4Q8H2mYvTdmT-7y_QHA4jbFE_qxUQErWvWKCn-tCK7rEKJImbb7Hi2FIpRnAYxmbc63B7O_EQda1PB4ipmMHYIQaBZszyy7GwX8N-_MBDw49x9k3wD-QLd6AfqV9GL2bmQe2o4CwblYV3W92uxOtaVvznJjwE1g5IiPVbqLKuOsfUeFT8x98E6UBw9IewPRDbn_rFlMea7xvSjv80xZkGX2HdeEWs__IhgN6WNhrW6MolYIqVsXZeLeimFRai95vH9ttgR8YWK_bETx5kwuNGTSx1aY4I5NUmEQcwrKADmUm9i8mcT4Z9f6H_O1MqIcfkEK8oB9tO5tlPotU7LoHQ9fXWjmF54Kv-p7AQkhk2uoOjM6g2bRJEmewNj7oNdOdqP2Jt3moqlVW_akFBLS-GJ3YYSo_19xwaCqV-otG_iE17x3wKFgjjocccM-ZDe9_FmtwLakVWKS7Mcv78NEWwWxl31IakGQ2VF-GFas5sXZam3c82He8dQ8Z0hRR-YtWoS75lJkKbZZW446jrk4X1JkA=s82-no"
                                                                          width="30" height="30" alt="pinterest"
                                                                          style="margin-right:40x" class="CToWUd"
                                                                          data-bit="iit">
                                                                  </a>
                                                              </div>
                                                          </div>
                                                          <div style="display:inline">
                                                              <div>
                                                                  <a href="#m_2881936300035526811_"
                                                                      style="text-decoration:none">
                                                                      <img src="https://lh3.googleusercontent.com/LSvbAInesLBPNN_wRhjzWuwY9ZIh6rEp5ybPz58qhGHgP02ISGNYrg-kSrYVYKmut-z2vZLAg_Gtme9ScA39XhHFpdYJk612BZeLysbZdJOOlMXQyg4pNermv5RLdJ4GHUGB4leB5OTAJ-Q7zBUEAXrp-q-D7ZX1cM6CP0hLeM9_b3mFqXE4odci2mJQ2g-sE4tNAZQvmuhLWMxBSttE9IaA25U5TXfzSP_vr-qWCA9uE4hWGIbIL45prLYS7XkKOHk1XSNg7SU_51wgQ0Y--3WJzHv7FTaw0seZqI59hyuFPl55nBy1YL3x3mV_uiKOXxCP1BCZYa7hLItmsED_ttryTQB1II1JVdJgTbMrNsOckVjW04g7WsRk5PVfDfbgEwTrL36wqE3C591E9l2BjGO6wFR4zy9M5cClswPjZWQ3pR-boniRm58bMspMr2ucxsZPjQop7ZZn4637FxUGvMXIiBsCFzWGaStCaIQh_0zSg4JeWP-tmGZkkgRAvgzYxkndcOsRA-ycNa9Ya5pjWOe3ECASbiBiRxfUbpAKCRdTIpzPcBZ4TjEkrOvHv-D-ftFFVT8Q2s-OJquGpp3t_wqXN9ZDwHiN_zvALZW_SCOjlWilGYylrY-3C__US4T2Td5Inu2SZKmuLe1jJoAZLhMB71vHqRg1HfYS6M3_p6oxM3vtLb8kq7rsfhF3gg1KQZRsqEBTDSUTW6H1qBsGwK7f0A=s512-no"
                                                                          width="30" height="30" alt="pinterest"
                                                                          style="margin-right:40x" class="CToWUd"
                                                                          data-bit="iit">
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td valign="top" width="34">
                                                          <div style="display:inline">
                                                              <div>
                                                                  <a href="#m_2881936300035526811_"
                                                                      style="text-decoration:none">
                                                                      <img src="https://lh3.googleusercontent.com/UESpC7XGz7CLNvWXnH8BNCpyE6W1zHWBow75y6MOxyvI2C-lXZ87MoMPJUSKjSc0Y8B1bV0HKD_xppZX4nEr_6dyWc9XzjgekmT00Qxsbq2hBc-PL1rdJ1j9BXTMkSZRnYzeDfmELAaQKC3lEdSxsAI8zM1scYxE2EB-1vRnwfyqYFyFUrob2_sgTwFtBF0gg8nKkVPlO9XQTl-5dps8JBbRXQM5urGGp8P6N7SF0qQXorXPy9EiDryujxxeibX0v6UgKTPBCzD96Ay12oLlLbi0ParmeA2vb5PrF2GerTtck1toXE_OVgVSCvXejZitA7HPb4t_gWZ7MEWYugJAWHsXOUrUCTtwT0NkAVDy6i0MrPrXt6Ervu9NYndiMu5nUAQ_Mh6WKIg6BjPlwKZ6K9qlES0G-97l1QM2cBw1-Rt6a-tFabPS7o9lVoK95djoLnaoLbJFcGy8hx1bVP7yP-uioA-TYXiHJb-PsyoA_aguE0rIUJ8c_onu4f8XuTRGApyYJsT9YYVdHFF--x_sXORYvImJXgsYB1dHqcev5PZ5Lc8H-ASCqoPeDwOGxtsezvBldvMuAYyXpM6x1n4cOtM3JZF_k_jIYIclgGZQFYBdhxcj6BehV6CHU5mevNaOHAuTJiOu7E9c44rWqsSYeLr3GJ4GCQMH5gDvgsqKM7vUqGK0qlxw2Fzg8Iy3w7kwq2e7u-Xg2OuqrfG8vGU5B1FNgg=s512-no"
                                                                          width="30" height="30" alt="pinterest"
                                                                          style="margin-right:40x" class="CToWUd"
                                                                          data-bit="iit">
                                                                  </a>
                                                              </div>
                                                          </div>
                                                          <div style="display:inline">
                                                              <div>
                                                                  <a href="#m_2881936300035526811_"
                                                                      style="text-decoration:none">
                                                                      <img src="https://lh3.googleusercontent.com/Oeb3Q-y1r30-jADaGUqBb9wA-BzBWRI3FugzfU7Hnk0TyQjKVqhfKUvGMopWQ0TEPCp7a73HkIJmISxOPip_xHpV4zYWfxevA18_0HlAtwvmzb3qr-mlcUaaQ2iWkYCTvFsd3RV-GLiL0mYI2h6_VLXXrgprfneyGjFH8fOlCbaG0PkogUV764ZL7cocXFQFTyo6anFKXuD7w8oAXA9SMJ6PFmwC0-EigHDsq7x9JQ-qNBaMY6BJzcoq6PcQvhpEEwEUWDdm37GeaWuwHwIJ8SKCCHogr3P3fstVypljJkKJX37FO9-gjH7zN9XNOYlwsyAJhGwwJXTZK53kMvWMt95q2oNLG52E8djhesrTc2FlZBrjnBszwdeRNGhutDgglZ5Bxt4p8KGD3NsCsIMy0qUH1zos2yCv501PyGlaKo8w6gTsviQFB2DzcXsg87uniMJVxcaDDmDe1vfvzjnSyp4TSSXCUu93gI61ZbB5lcuUKAiMzyT7nfI5mKZVSfS125FSopXaaBZf0LA2A9Xx97PeMvpUbHs38yesMf5Vu1--h7f5K6-J0f0OxNRpooIkOAFVjxhweO9AT2d-eC9v6n8eJ_gfJZVrRYQhhlK_u_Ob1vDJlDNkwPGuClkDxvaQcZ5xKUaqGMMssUyodIk2u4K1JZGRuerZTAy9vr_lKo8ZpDQzXmOjLOHCniZCyFAh-ysCjbynMeH59sms9ukZNXI-Qw=s512-no"
                                                                          width="30" height="30" alt="pinterest"
                                                                          style="margin-right:40x" class="CToWUd"
                                                                          data-bit="iit">
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </td>
                                                      <td valign="top" width="34">
                                                          <div style="display:inline">
                                                              <div>
                                                                  <a href="#m_2881936300035526811_"
                                                                      style="text-decoration:none">
                                                                      <img src="https://lh3.googleusercontent.com/TDUu7C4xq5KxPCD473FQRi4l8cBj2BKCv6RFJDlHfjXfMdHT3K_C4jBUG-Ez3Ea4RuAh3V2l3cfmg2hsQOIceB3s7quIvrcAxWCXw1evaEhj9laSRG9OovxZ9eyX9MQQ8evKFU41zzXgkbgcsoeUOFoOzk0HruseCa-0XJ5zvJN4Nd366nk25ppp1nn-G7Zdmc0pAP_MBIPHP1TEBhAESN_pzBkJ5khBst-WSk1brzswu-GIpXP9U4cZjyBMcFWGKobWxteoTA52tF5RYYUIm7uF4UWbj1_5KJs53JmqHnmR5GKe_AlvBqH783XSTHOEUYU1BmuJmPKmGy_Kl4wYA0jwwHpG7kKpxXjv5d8nmQq5T7zbGNEcl34nFL7Ui_S17gszcuVZWII28eIAjJ8pbGGybe2DBIEcXYib9JRac_5K0czz3YFK4JTrCBUyAzSVQXCO0bGCyNnadXsjCW9M0pIGGR3TiX65OwT_JHGQHmlv5WbhZp43Lfqn_miNw4WdobtAhXc1MciysBAlLYZbZcIvA3dT3tnYHsnklIxles6dEreBjPqZ5Y0s6Cl_MOjDVpA9-HpciHCM4DkYKjLe5WiARJSnmVNurZFhGndGp6Sb5tSrBEZXkuGsgdsJgEWKvCDfQxMnevYQNGv7r2JzVppTlubVmDkaV4q3u59_PUWkuvsN29UZpIGIT8udsLYS0NU_zg98HEkAl2hHXmUa1luNGA=s512-no"
                                                                          width="30" height="30" alt="pinterest"
                                                                          style="margin-right:40x" class="CToWUd"
                                                                          data-bit="iit">
                                                                  </a>
                                                              </div>
                                                          </div>
                                                          <div style="display:inline">
                                                              <div>
                                                                  <a href="#m_2881936300035526811_"
                                                                      style="text-decoration:none">
                                                                      <img src="https://lh3.googleusercontent.com/IGgk-DWO6cCWvkxD70qA6JsrViMKHduFcpFf886bjlNh_Mg4k4qpGUpiiHACflh-TlTNUWs9yyJF4iUXgfbpGuQMF-zjfHTUPA3t96vUWDiB4J6HM_3lz2gZytpjPJKo4KNULGo1Hwcg6wdWmNvKJZadR3WmVon9yDpVv7G_bIQ1gnCIKlnMDH4CeGVPk1szS29QWwtZrBa0NrQO9bFrIA7fAs_Xy_Ll51pkYnWTx7iBbieU37z0NjOtpu0rgoCAUoiaxiaJNM1ODyBiAZZhs27A0e4FeNNI_WVuldyB7_Sc84zRJaSga9YWrf9DvUzGljD-Zw4K3oZCJ-wIDlXbTgTN3TeNz8fmvYyGkP8-lgR1BrL2pijIAs5ITPbjHy5bMXRcKtazG8yDvwbOOStjPXO_xCGHoumMGBIl8W4F-MP17mmj5BlBxZx0GhKZm0ag3WY8b-2Sqdl2OtWoFVAVfcHmrDt4nXcKyqgUQOWhDktl59uF8smfCCIHGiL9AC9hF2-lK6UgItuLqdXWMuPv1L0icqvXn2dk3tFywRCPf1XAbX9XQr3Z9PjcRAXFSKJaEEAHhbCe05w2ya6uoV-t9pSfrkz7PUNkjsu1ZyeBuBuAOH1ScxJNPPrHxZzN_lgJDhsE-__JDwYuBpRp9N7Dk_Q0YHpht1sn8zkSqHRmlqpjqlYvUSFi12XDZUHI3m-zZ1SBOij840pUkmKr-578SqQwfA=s256-no"
                                                                          width="30" height="30" alt="pinterest"
                                                                          style="margin-right:40x" class="CToWUd"
                                                                          data-bit="iit">
                                                                  </a>
                                                              </div>
                                                          </div>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      <div class="yj6qo"></div>
      <div class="adL">
      </div>
  </div>
  <div class="adL">
  </div>
</div>
    `

}