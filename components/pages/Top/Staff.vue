<template>
  <section class="p-staff">
    <div class="bg_deco">
      <img src="~/assets/images/staff/staff_left.png" class="bg_cloudLerf">
      <img src="~/assets/images/staff/staff_right.png" class="bg_cloudRight">
      <div class="c-container">
        <h2 class="title">
          Staff
        </h2>
        <span class="subTitle">STAFF</span>
        <div class="staffList">
          <a
            class="staffList_item"
            v-for="(staff,key) in staffs"
            :key="key"
            :href="staff.url"
            target="_blank"
            ref="noopener"
          >
            <img :src="staff.avatar_url" alt="" class="staffList_icon">
            <span class="staffList_name">
              {{ staff.name }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:{
    staffs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/common.scss";

  .p-staff {
    @include space_section;
    padding-bottom: 100px;
    .bg_deco {
      margin: 0 auto;
      width: 100%;
      position: relative;

      @include media_desktop {
        max-width: 2500px;
      }
    }

    .bg_cloudLerf{
      width: 20vw;
      min-width: 300px;
      max-width: 500px;
      position: absolute;
      left: 0;
    }

    .bg_cloudRight {
      width: 20vw;
      min-width: 300px;
      max-width: 500px;
      position: absolute;
      bottom: -20px;
      right: 0;
    }

    .c-container {
      position: relative;
    }

    .title {
      @include typo_sectionTitleEn
    }
    .subTitle {
      @include typo_sectionSubTitleEn;
      top: -10rem;
      right: 50px;
    }

    .staffList {
      max-width: 100%;
      @include media_desktop{
        max-width: 85%;
      }
    }

    .staffList_item {
      display: inline-block;
      vertical-align: top;
      margin: 0 10px 20px;
      @include media_desktop {
        margin: 0 30px 30px;;
      }
    }

    .staffList_icon {
      margin-bottom: 5px;
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      background: image;
      @include media_desktop {
        width: 70px;
        height: 70px;
      }
    }

    .staffList_name {
      display: block;
      max-width: 60px;
      font-size: 1.3rem;
      line-height: 1.4;
      word-break: break-all;
      text-align: center;
      color: $clr_fontBase;
      @include media_desktop {
        font-size: 1.4rem;
        max-width: 70px;
      }
    }

  }
</style>

