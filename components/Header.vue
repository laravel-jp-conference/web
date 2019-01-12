<template>
  <div class="l-header">
    <button class="menu-button" :class="{ 'is-active': isActive }" type="button" @click="onClickMenuButton" data-target="menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div id="menu" class="menu" :class="{ 'is-active': isActive }">
      <a class="menu_link" href="#">
        <span class="menu_linkText">ABOUT</span>
      </a>
      <a class="menu_link" href="#">
        <span class="menu_linkText">ACCESS</span>
      </a>
      <a class="menu_link" href="#">
        <span class="menu_linkText">SPONSOR</span>
      </a>
      <a class="menu_link" href="#">
        <span class="menu_linkText">STAFF</span>
      </a>
    </div>
    <p class="title">
      <span class="text">Laravel JP Conference</span>
      <img src="~/assets/images/logo-rectangle-white.svg" alt="Laravel JP Conference">
    </p>
    <div class="share">
      <div class="share_title">share</div>
      <div class="share_btn">
        <a class="share_tw" href="#"><i class="fab fa-twitter"></i></a>
        <a class="share_fb" href="#"><i class="fab fa-facebook-square"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: false
      }
    },
    mounted () {
      document.addEventListener('keydown', this.onKeyDown)
    },
    methods: {
      onClickMenuButton (e) {
        this.toggleMenu()
      },
      toggleMenu () {
        this.isActive = !this.isActive
      },
      onKeyDown (e) {
        if (~e.key.indexOf('Esc') && this.isActive) {
          this.isActive = false
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "~/assets/scss/common.scss";

  .l-header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 60px;
    background: rgba(229,222,207,.25);

    position: fixed;
    top: 0;
    z-index: 100000;

    @include media_desktop {
      flex-direction: column;
      padding: 30px 0;
      width: 70px;
      height: 100vh;
    }

    .menu-button {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      flex-direction: column;
      justify-content: center;
      padding: 0;
      width: 25px;
      height: 25px;
      border: 0;
      background-color: transparent;
      cursor: pointer;
      position: relative;
      z-index: 1;

      @include media_desktop {
        margin-bottom: 40px;
      }

      span {
        position: absolute;
        display: inline-block;
        width: 25px;
        height: 2px;
        background: #F8F6F2;
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        &:nth-of-type(1) {
          transform: translateY(-10px);
        }

        &:nth-of-type(2) {
          //
        }

        &:nth-of-type(3) {
          transform: translateY(10px);
        }
      }

      &.is-active {
        span {
          &:nth-of-type(1) {
            transform: rotate(135deg);
          }

          &:nth-of-type(2) {
            transform: scaleX(0);
          }

          &:nth-of-type(3) {
            transform: rotate(-135deg);
          }
        }
      }
    }

    .menu {
      opacity: 0;
      padding: 80px 40px;
      background-color: #e67773;
      transition: opacity 0.4s;
      pointer-events: none;

      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      @include media_desktop {
        padding: 60px 80px 60px 180px;
      }

      &_link {
        display: block;
        color: #fff;
        letter-spacing: 10px;
        font-weight: bold;
        font-size: 2.4rem;
        font-family: 'Playfair Display', serif;
        text-decoration: none;

        @include media_desktop {
          font-size: 3rem;
        }
      }

      &_linkText {
        display: block;
        padding: 30px 0;
        position: relative;

        @include media_desktop {
          display: inline-block;
          padding: 40px 0;
          width: auto;
        }

        &::before {
          display: none;
          width: 100%;
          height: 2px;
          background-color: #fff;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          content: '';
          position: absolute;
          bottom: 20px;
          left: 0;

          @include media_desktop {
            display: block;
          }
        }
      }

      &_link {
        &:hover {
          .menu_linkText {
            &::before {
              transform: none;
            }
          }
        }
      }

      &.is-active {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .title{
      @include typo_navTitleEn;

      margin-bottom: 0;
      margin-left: 10px;
      z-index: 1;

      @include media_desktop {
        margin-right: 0;
        margin-left: 0;
      }

      .text {
        display: none;

        @include media_desktop {
          display: inline;
        }
      }

      img {
        width: 150px;

        @include media_desktop {
          display: none;
        }
      }
    }

    .share {
      margin-left: auto;
      z-index: 1;

      @include media_desktop {
        flex-grow: 1;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin-left: 0;
      }

      &_title {
        display: none;
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-size: 1.8rem;
        font-weight: bold;
        writing-mode: vertical-rl;
        letter-spacing: .8em;
        text-orientation: mixed;
        color: #F8F6F2;

        @include media_desktop {
          display: block;
        }
      }

      &_btn {
        display: flex;

        @include media_desktop {
          display: block;
          text-align: center;
        }
      }

      &_tw {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 10px;
        width: 35px;
        height: 35px;
        background: white;
        color: #1DA1F2;

        @include media_desktop {
          margin-right: 0;
          margin-bottom: 10px;
          width: 40px;
          height: 40px;
        }
      }

      &_fb {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        background: white;
        color: #4267B2;

        @include media_desktop {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
</style>
