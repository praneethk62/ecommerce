var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "s 23 ultra",
      category: "Smart phone",
      description:
        "The phone features a remarkable 6.8-inch Quad HD screen and will be driven by the new Qualcomm Snapdragon 8 Gen 4.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/samsung-galaxy-s24-series-launch-soon-031813157-16x9.jpg?VersionId=1E1.A8TYY3MFE_iW6B_szsSj7QgWqpSl&size=690:388",
    },
    {
      name: "iphone 13 pro",
      category: "Smart phone",
      description:
        "The phone features a remarkable 6.8-inch Quad HD screen and will be driven by the new Qualcomm Snapdragon 8 Gen 4.",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/60a91f9a5f6002a4c8174108/Apple--iPhone--iPhone-13--new-iPhone--iPhone-upgrade--pink-iPhone--iPhone-13-release-/0x0.jpg?crop=1077,1013,x139,y0,safe&height=668&width=711&fit=bounds",
    },
    {
      name: "moto",
      category: "Smart phone",
      description:
        "The phone features a remarkable 6.8-inch Quad HD screen and will be driven by the new Qualcomm Snapdragon 8 Gen 4.",
      image:
        "https://hiraoka.com.pe/media/catalog/product/1/3/131259_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560",
    },
    {
      name: "s 23 ultra",
      category: "Smart phone",
      description:
        "The phone features a remarkable 6.8-inch Quad HD screen and will be driven by the new Qualcomm Snapdragon 8 Gen 4.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/samsung-galaxy-s24-series-launch-soon-031813157-16x9.jpg?VersionId=1E1.A8TYY3MFE_iW6B_szsSj7QgWqpSl&size=690:388",
    },
  ];
  res.render('index', { products ,admin:false});
});

module.exports = router;
