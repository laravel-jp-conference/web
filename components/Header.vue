<template>
  <div class="l-header">
    <nav class="menu">
      <span></span>
      <span></span>
      <span></span>
    </nav>
    <p class="title">Laravel  JP Conference</p>
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
    flex-direction: column;
    padding: 30px 0;
    width: 70px;
    height: 100vh;
    background: rgba(229,222,207,.25);

    position: fixed;
    top: 0;
    z-index: 100000;

    .menu {
      display: inline-flex;
      flex-direction: column;
      margin-bottom: 40px;
      width: 25px;
      span {
        display: inline-block;
        width: 25px;
        height: 2px;
        background: #F8F6F2;
        margin-bottom: 8px;
      }


    }

    .title{
      @include typo_navTitleEn;
    }

    .share {
      flex-grow: 1;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      &_title {
        display: block;
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-size: 1.8rem;
        font-weight: bold;
        writing-mode: vertical-rl;
        letter-spacing: .8em;
        text-orientation: mixed;
        color: #F8F6F2;
      }

      &_btn {
        text-align: center;
      }

      &_tw {
        display: inline-block;
        margin-bottom: 10px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        text-align: center;
        background: white;
        color: #1DA1F2;

        i{
          display: inline-block;
          transform: translateY(8px);
          font-size: 1.8rem;
        }
      }
      &_fb {
        display: inline-block;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        text-align: center;
        background: white;
        color: #4267B2;

        i{
          display: inline-block;
          transform: translateY(8px);
          font-size: 1.8rem;
        }
      }

    }

  }
</style>
