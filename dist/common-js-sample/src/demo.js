/*
 * demo.js is setting up rule.
 */
$(document).ready(function () {
  cmntoggleInit(".p-demo-demoarea");
  cmntabInit(".p-demo-demotab");
  cmntabInrInit(".p-demo-demoinrtab");
  cmntabLinkageInit(".p-demo-demolinktab");
  sliderInit(
    {
      blockName:".p-demo-demoSlider",
      sliderName:".p-demo-demoSlider__main",
      sliderItemName:".p-demo-demoSlider__mainItem"
    },
    {
      minNumPc: 3,
      minNumSp: 1
    },
    {
      settingPC: {
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      },
      useOriginalArw: true,
    }
  );
  sliderInit(
    {
      blockName:".p-demo-demoSliderSub",
      sliderName:".p-demo-demoSliderSub__main",
      sliderItemName:".p-demo-demoSliderSub__mainItem"
    },
    {
      minNumPc: 3,
      minNumSp: 1
    },
    {
      settingPC: {
        autoplay: true,
        autoplaySpeed: 5000,
        arrows:true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      },
      settingSP: {
        autoplay: false,
        autoplaySpeed: 5000,
        arrows:true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      },
      useOriginalArw: false,
    }
  );
  matchHeight(".p-demo-demoHeight.is-test .p-demo-demoHeight__txtInr");
});