<template>
  <footer class="meetups_footer">
    <div class="meetups_footer__wrapper">
      <div class="meetups_footer__logo">MEETUPS</div>
      <ul class="meetups_footer__links">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Сайт разработчика</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterItem',
};
</script>
<style scoped lang="scss">
@import '../assets/styles/_constants.scss';
@import '../assets/fonts/_fonts.css';
.meetups_footer {
  display: flex;
  .meetups_footer__wrapper {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    height: 50px;
    width: 100vw;
    background: #444343;
    .meetups_footer__logo {
      font-size: 1.2em;
      color: white;
    }
    .meetups_footer__links {
      display: flex;
      li {
        display: flex;
        align-self: center;
        list-style-type: none;
        margin-left: 10px;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
</style>
