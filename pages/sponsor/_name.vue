<template>
  <div>
    <sec-header></sec-header>
    <div class="sponsor">
      <div class="bg_tex">
        <div class="bg_deco">
          <div class="bg_fuji"></div>
          <div class="c-container">
            <div class="sponsor-box">
              <p class="ornament">SPONSOR</p>
              <div class="sponsor-heading">
                <div class="plan-card">
                  <span class="plan">{{ sponsor.plan }}</span>
                </div>
                <p class="sponsor-name">{{ sponsor.name }}</p>
              </div>
              <div class="logo-box">
                <img :src="sponsor.avatar" class="logo-img">
              </div>
              <div class="sponsor-description">
                {{ sponsor.pr }}
              </div>
              <a class="btn button-sponsorLink" :href="sponsor.url" target="_blank">
                スポンサーページを開く
              </a>
            </div>
            <router-link to="/" class="btn button-top">
              トップページに戻る
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <sec-footer></sec-footer>
  </div>
</template>

<script>
  import secHeader from '~/components/Header.vue'
  import secFooter from '~/components/Footer.vue'

  export default {
    name: 'sponsor',
    head() {
      return {
        title: this.sponsor.name
      }
    },
    async asyncData({store, route}) {
      const [sponsor] = await Promise.all([
          store.dispatch("fetchSponsorData", route.params.name),
      ])
      return {
        sponsor
      }
    },
    components: {
        secHeader,
        secFooter
      }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/common.scss";

  .sponsor {
    text-align: center;

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
      @include space_section;
      display: inline-block;
      margin: 0 auto;
      padding-bottom: 300px;
      width: 100%;
      max-width: 1920px;
      min-height: 540px;
      background-image: url( "~assets/images/hero/hero_cloud.svg");
      background-size: 140%;
      background-position: center;
      background-repeat: no-repeat;

      @include media_desktop {
        padding-bottom: 600px;
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

    .sponsor-box {
      display: inline-block;
      margin: 60px 0 40px;
      background: #f8f7f2;
      width: 100%;
      max-width: 750px;
      position: relative;

      @include media_desktop {
        margin: 40px 0;
      }

    }
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

    .sponsor-heading {
      text-align: left;
    }
    .plan {
      display: inline-block;
      margin: 20px 0 20px;
      padding: 10px 40px;
      text-align: center;
      font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif;
      font-size: 1.4rem;
      color: white;
      background: $clr_fontBase;

      @include media_desktop {
        margin: 20px 0 35px;
        font-size: 2rem;
      }
    }
    .sponsor-name {
      @include typo_sectionTitleJa;
      margin: 0 20px 20px;

      @media screen and (min-width: 320px) {
        font-size: 1.8rem;
      }

      @include media_desktop {
        margin: 0 40px 35px;
      }

    }
    .logo-box {
      display: block;
      width: 100%;
      background: #ffffff;
      text-align: center;

      .logo-img {
        display: inline-block;
        width: 100%;
        height: auto;
        @include media_desktop {
          width: 300px;
        }
      }
    }
    .sponsor-description {
      margin: 20px 0 40px;
      padding: 0 20px;
      text-align: left;
      color: $clr_fontBase;
      line-height: 1.8;

      @include media_desktop {
        margin: 30px 0 60px;
        padding: 0 40px;
      }
    }
    .button-sponsorLink {
      display: block;
      margin: 0 auto 40px;
      padding: 20px;
      width: 100%;
      max-width: 280px;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      background: $clr_btn;
      position: relative;
      @include media_desktop {
        max-width: 350px;
        margin: 0 auto 60px;
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
      &:hover {
        color: white;
        text-decoration: none;
        opacity: .8;
      }
    }

    .button-top {
      display: block;
      margin: 0 auto;
      padding: 20px;
      width: 100%;
      max-width: 280px;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      background: rgba(255, 255, 255, 0.1);
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
      &:hover {
        color: white;
        text-decoration: underline;
      }
    }





  }
</style>