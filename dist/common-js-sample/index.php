<?php

/**
 * 共通パーツ確認ファイル
 *
 * @package WordPress
 */
// 外部からWP API 読み込み
require_once('../wp-load.php');
?>
<?php
get_header();
echo '<link rel="stylesheet" href="' . $astUrl . 'assets/css/top.css">';
echo '<link rel="stylesheet" href="/common-js-sample/assets/css/demo.css">';
echo '<script src="/common-js-sample/assets/js/demo.js" defer></script>';
?>


<div class="l-container">

  <div class="p-demo">

    <?php
    get_file('headmenu');
    ?>

    <main id="main" class="l-main l-main-demo">

      <section class="l-section p-demo__sec">
        <div class="l-section__inner">
          <h1 class="m-tit">デモ<span class="m-tit__en">DEMO</span></h1>
          <div class="m-hide-pc">SPのみ表示</div>
          <div class="m-hide-sp">PCのみ表示</div>
          <a href="" class="m-button">
            <span class="m-button__title">共通ボタン</span>
          </a>
          <a href="" class="m-button-textred">
            <span class="m-button__title">共通ボタン</span>
          </a>
        </div>
      </section>

      <section class="l-section p-demo__sec">
        <div class="p-demo__secInr">
          <h2>トグルデモです</h2>
          <div class="p-demo-demoarea js-toggle">
            <div class="js-toggle__switch p-demo-demoarea__switch">スイッチ</div>
            <div class="js-toggle__next p-demo-demoarea__next">コンテンツ</div>
          </div>
        </div>
      </section>

      <section class="l-section p-demo__sec">
        <div class="l-section__inner">
          <h2>タブデモです</h2>
          <div class="p-demo-demotab js-tab">
            <div class="js-tab__switch p-demo-demotab__switch">
              <div class="js-tab__switchItem p-demo-demotab__switchItem is-active" data-tabindex="0">スイッチ1</div>
              <div class="js-tab__switchItem p-demo-demotab__switchItem" data-tabindex="1">スイッチ2</div>
              <div class="js-tab__switchItem p-demo-demotab__switchItem" data-tabindex="2">スイッチ3</div>
            </div>
            <div class="js-tab__main p-demo-demotab__main">
              <div class="js-tab__mainItem p-demo-demotab__mainItem is-active">
                <p>コンテンツ1</p>
                <div class="p-demo-demoinrtab js-tabInr">
                  <div class="js-tabInr__switch p-demo-demoinrtab__switch">
                    <div class="js-tabInr__switchItem p-demo-demoinrtab__switchItem is-active" data-tabindex="0">インナースイッチ1</div>
                    <div class="js-tabInr__switchItem p-demo-demoinrtab__switchItem" data-tabindex="1">インナースイッチ2</div>
                    <div class="js-tabInr__switchItem p-demo-demoinrtab__switchItem" data-tabindex="2">インナースイッチ3</div>
                  </div>
                  <div class="js-tabInr__main p-demo-demoinrtab__main">
                    <div class="js-tabInr__mainItem p-demo-demoinrtab__mainItem is-active">インナーコンテンツ1</div>
                    <div class="js-tabInr__mainItem p-demo-demoinrtab__mainItem">インナーコンテンツ2</div>
                    <div class="js-tabInr__mainItem p-demo-demoinrtab__mainItem">インナーコンテンツ3</div>
                  </div>
                </div>
              </div>
              <div class="js-tab__mainItem p-demo-demotab__mainItem">コンテンツ2</div>
              <div class="js-tab__mainItem p-demo-demotab__mainItem">コンテンツ3</div>
            </div>
          </div>
        </div>
      </section>

      <section class="l-section p-demo__sec">
        <div class="l-section__inner">
          <h2>タブデモです</h2>
          <div class="p-demo-demolinktab js-tab">
            <div class="js-tab__switch p-demo-demolinktab__switch">
              <div class="js-tab__switchItem p-demo-demolinktab__switchItem is-active" data-tabindex="0">スイッチ1</div>
              <div class="js-tab__switchItem p-demo-demolinktab__switchItem" data-tabindex="1">スイッチ2</div>
              <div class="js-tab__switchItem p-demo-demolinktab__switchItem" data-tabindex="2">スイッチ3</div>
            </div>
            <div class="js-tab__main p-demo-demolinktab__main">
              <div class="js-tab__mainItem p-demo-demolinktab__mainItem is-active">
                <p>コンテンツ1</p>
              </div>
              <div class="js-tab__mainItem p-demo-demolinktab__mainItem">コンテンツ2</div>
              <div class="js-tab__mainItem p-demo-demolinktab__mainItem">コンテンツ3</div>
            </div>
            <div class="js-tab__switch p-demo-demolinktab__switch">
              <div class="js-tab__switchItem p-demo-demolinktab__switchItem is-active dir-prev" data-tabindex="0">スイッチ1</div>
              <div class="js-tab__switchItem p-demo-demolinktab__switchItem dir-prev" data-tabindex="1">スイッチ2</div>
              <div class="js-tab__switchItem p-demo-demolinktab__switchItem dir-prev" data-tabindex="2">スイッチ3</div>
            </div>
          </div>
        </div>
      </section>

      <section class="l-section p-demo__sec">
        <h2 class="m-tit">スライダーデモです。</h2>
        <div class="p-demo-demoSlider js-slider">
          <div class="p-demo-demoSlider__main">
            <div class="p-demo-demoSlider__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
            <div class="p-demo-demoSlider__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
            <div class="p-demo-demoSlider__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
            <div class="p-demo-demoSlider__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
          </div>
          <div class="js-slider__modul">
            <div class="js-slider__modulDots"></div>
            <div class="js-slider__modulArw is-prev">＜</div>
            <div class="js-slider__modulArw is-next">＞</div>
          </div>
        </div>
      </section>

      <section class="l-section p-demo__sec">
        <h2 class="m-tit">スライダーデモです。</h2>
        <div class="p-demo-demoSliderSub js-slider">
          <div class="p-demo-demoSliderSub__main">
            <div class="p-demo-demoSliderSub__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
            <div class="p-demo-demoSliderSub__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
            <div class="p-demo-demoSliderSub__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
            <div class="p-demo-demoSliderSub__mainItem">
              <img src="/common-js-sample/assets/img/demo/demo.png" alt="">
            </div>
          </div>
        </div>
      </section>

      <section class="l-section p-demo__sec">
        <div class="l-section__inner">
          <h2 class="m-tit">マッチハイトデモです。</h2>
          <h3>なし</h3>
          <div class="p-demo-demoHeight">
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テスト</div>
            </div>
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
            </div>
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
            </div>
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
            </div>
          </div>
          <h3>あり</h3>
          <div class="p-demo-demoHeight is-test">
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テスト</div>
            </div>
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
            </div>
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
            </div>
            <div class="p-demo-demoHeight__txt">
              <div class="p-demo-demoHeight__txtInr">テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <?php
    get_file('footmenu');
    ?>

  </div>

</div>


<?php get_footer(); ?>
