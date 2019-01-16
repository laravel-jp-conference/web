<template>
  <div class="sponsor">
    <div class="bg_tex">
      <div class="bg_deco">
        <div class="bg_fuji"></div>
        <div class="content-box">
          <div class="sponsor-box">
            <div class="sponsor-title">
              <p class="ornament">SPONSOR</p>
              <div class="silver-card">
                <span class="silver">SILVER</span>
              </div>
              <p class="sponsor-name">株式会社サンプル</p>
            </div>
            <div class="logo-box">
              <img src="http://placehold.jp/150x150.png" class="logo-img">
            </div>
            <div class="sponsor-description">
              <p>Laravel JP Conferenceは PHPのフレームワークであるLaravelをメインテーマとした技術カンファレンスです。「Laravel JP」を冠したイベントとしては日本初開催となります。</p>
              <br>
              <p>Laravelとは2011年6月に初版が公開されたPHPによるオープンソースなWebアプリケーションフレームワーク。PHPのフレームワークの中でもGithub stars数は一番多く、Google Trendsによる人気の動向でも日本でもっとも注目を集めています。(2018年9月現在)</p>
              <br>
              <p>本イベントでは主に一般公募から参加していただくスピーカーによるトークセッションと、スポンサー様から参加していただくスピーカーのトークセッション他、懇親会や参加者同士で意見交換などができる場の提供を予定しています。</p>
            </div>
            <div class="button-box-a">
              <a class="btn button-a" href="#" target="_blank">
                スポンサーページを開く
              </a>
            </div>
          </div>
          <div class="button-box-b">
            <router-link to="/" class="btn button-b">
              トップページに戻る
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sponsor'
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/common.scss";
  .sponsor {
    background: #ff554c;
    background: -moz-linear-gradient(top, #ff554c 0%, #a08383 100%);
    background: -webkit-linear-gradient(top, #ff554c 0%,#a08383 100%);
    background: linear-gradient(to bottom, #ff554c 0%,#a08383 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff554c', endColorstr='#a08383',GradientType=0 );
    position: relative;
    overflow: hidden;
    .bg_tex {
      background-image: url("~assets/images/hero/hero_tex.svg");
      background-size: cover;
    }
    .bg_deco {
      display: inline-block;
      margin: 0 auto;
      width: 210vw;
      max-width: 1920px;
      min-height: 540px;
      background-size: contain;
      background-image: url( "~assets/images/hero/hero_cloud.svg");
      background-repeat: no-repeat;
      @include media_desktop {
        width: 100%;
        min-height: 900px;
        background-size: cover;
      }
    }
    .bg_fuji {
      width: 300vw;
      max-width: 1000px;
      display: inline-block;
      background-image: url("~assets/images/hero/hero_fujiyama.png");
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      left: 52%;
      bottom: 0;
      transform: translateX(-43%);
      @include media_desktop {
        width: 100vw;
        min-width: 1880px;
      }
      &::after {
        display: inline-block;
        content: "";
        padding-top: 42%;
      }
    }
  }
  .button-a {
    width: 90%;
    display: block;
    padding: 20px;
    margin: 0 auto;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    background: $clr_btn;
    position: relative;
    @include media_desktop {
      max-width: 350px;
    }
    &::after {
      content: "\f35d";
      display: inline-block;
      font-family: "Font Awesome 5 Free";
      font-size: .8em;
      font-style: normal;
      font-weight: bold;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
      color: #fff;
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      @include media_desktop {
        right: 20px;
      }
    }
  }
  .button-b {
    width: 90%;
    display: block;
    padding: 20px;
    margin: 0 auto;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    background: rgba(230, 119, 115, 0.5);
    border: solid 1px #fff;
    position: relative;
    @include media_desktop {
      max-width: 350px;
    }
    &::before {
      content: "\f104";
      display: inline-block;
      font-family: "Font Awesome 5 Free";
      font-size: .8em;
      font-style: normal;
      font-weight: bold;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
      color: #fff;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      @include media_desktop {
        left: 20px;
      }
    }
  }
  .content-box {
    width: 95vw;
    margin: 90px 10px;
    @include media_desktop {
      width: 55%;
      max-width: 650px;
      margin: 90px auto;
    }
    .sponsor-box {
      background: #f8f7f2;
      position: relative;
      .ornament {
        @include typo_sectionSubTitleEn;
        font-size: 30px;
        z-index: 10;
        top: -30px;
        right: -30px;
        position: absolute;
        @include media_desktop {
          font-size: 4rem;
        }
      }
      .sponsor-title {
        height: 140px;
        position: relative;
        @include media_desktop {
          height: 180px;
        }
        .silver-card {
          height: 30px;
          width: 130px;
          top: 20px;
          background: #64547b;
          text-align: center;
          position: absolute;
          @include media_desktop {
            height: 42px;
            width: 153px;
          }
          .silver {
            font-family: YuMincho, Medium;
            font-size: 14px;
            color: #ffffff;
            line-height: 30px;
            @include media_desktop {
              font-size: 20px;
              line-height: 42px;
            }
          }
        }
        .sponsor-name {
          @include typo_sectionTitleJa;
          top: 80px;
          margin: 0 30px;
          position: absolute;
          @include media_desktop {
            top: 100px;
            margin: 0 50px;
          }
        }
      }
      .logo-box {
        width: 100%;
        height: 200px;
        background: #ffffff;
        position: relative;
        @include media_desktop {
          height: 250px;
        }
        .logo-img {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translateY(-50%) translateX(-50%);
          transform: translateY(-50%) translateX(-50%);
          border-radius: 1000px;
        }
      }
      .sponsor-description {
        color: #605075;
        padding: 30px;
        @include media_desktop {
          margin: 0 30px;
        }
      }
      .button-box-a {
        padding-bottom: 50px;
      }
    }
    .button-box-b {
      padding: 50px 0 300px 0;
    }
  }
</style>