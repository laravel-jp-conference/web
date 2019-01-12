<template>
  <div class="l-header">
    <nav class="menu">
      <span></span>
      <span></span>
      <span></span>
    </nav>
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

    .menu {
      display: inline-flex;
      flex-shrink: 0;
      flex-direction: column;
      width: 25px;

      @include media_desktop {
        margin-bottom: 40px;
      }

      span {
        display: inline-block;
        width: 25px;
        height: 2px;
        background: #F8F6F2;

        &:not(:first-of-type) {
          margin-top: 8px;
        }
      }
    }

    .title{
      @include typo_navTitleEn;

      margin-bottom: 0;
      margin-left: 10px;

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
