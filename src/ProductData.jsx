const productData = [
    {
        name: "Coca-Cola, puszka",
        price: 2.99,
        seller: "Żabka",
        producer: "Coca-Cola Company",
        waznosc: 2,
        img: "https://www.coca-cola.pl/content/dam/one/pl/marki/coca-cola/cocacola_can.png"
    },
    {
        name: "Kajzerka, sztuka",
        price: 0.20,
        seller: "Żabka",
        producer: "Piekarnia Żabka",
        waznosc: 1,
        img: "https://lubisklep.pl/wp-content/uploads/2020/06/86003ACA-9600-4B80-ADDA-457ED16DC61B.jpeg"
    },
    {
        name: "Banany, kiść",
        price: 2.50,
        seller: "Biedronka",
        producer: "Biedronka",
        waznosc: 2,
        img: "https://bi.im-g.pl/im/d3/9c/18/z25806035Q,Jak-przechowywac-banany--W-zimnym-i-ciemnym-miejsc.jpg"
    },
    {
        name: "Banany, kiść",
        price: 2.20,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 3,
        img: "https://bi.im-g.pl/im/d3/9c/18/z25806035Q,Jak-przechowywac-banany--W-zimnym-i-ciemnym-miejsc.jpg"
    },
    {
        name: "Banany, kiść",
        price: 1.90,
        seller: "Aldi",
        producer: "Aldi",
        waznosc: 1,
        img: "https://bi.im-g.pl/im/d3/9c/18/z25806035Q,Jak-przechowywac-banany--W-zimnym-i-ciemnym-miejsc.jpg"
    },
    {
        name: "Banany, kiść",
        price: 2.10,
        seller: "Żabka",
        producer: "Żabka",
        waznosc: 1,
        img: "https://bi.im-g.pl/im/d3/9c/18/z25806035Q,Jak-przechowywac-banany--W-zimnym-i-ciemnym-miejsc.jpg"
    },
    {
        name: "Kajzerka, sztuka",
        price: 0.19,
        seller: "Lidl",
        producer: "Piekarnia Lidla",
        waznosc: 1,
        img: "https://lubisklep.pl/wp-content/uploads/2020/06/86003ACA-9600-4B80-ADDA-457ED16DC61B.jpeg"
    },
    {
        name: "Kajzerka, sztuka",
        price: 0.15,
        seller: "Biedronka",
        producer: "Piekarnia Biedronki",
        waznosc: 1,
        img: "https://lubisklep.pl/wp-content/uploads/2020/06/86003ACA-9600-4B80-ADDA-457ED16DC61B.jpeg"
    },
    {
        name: "Jabłko, 100g",
        price: 0.10,
        seller: "Żabka",
        producer: "Żabka",
        waznosc: 1,
        img: "https://100procent-natury.pl/userdata/public/gfx/1586/apple-honeycrisp.jpg"
    },
    {
        name: "Jabłko, 100g",
        price: 0.12,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 2,
        img: "https://100procent-natury.pl/userdata/public/gfx/1586/apple-honeycrisp.jpg"
    },
    {
        name: "Jabłko, 100g",
        price: 0.09,
        seller: "Dino",
        producer: "Dino",
        waznosc: 1,
        img: "https://100procent-natury.pl/userdata/public/gfx/1586/apple-honeycrisp.jpg"
    },
    {
        name: "Jabłko, 100g",
        price: 0.07,
        seller: "Biedronka",
        producer: "Biedronka",
        waznosc: 3,
        img: "https://100procent-natury.pl/userdata/public/gfx/1586/apple-honeycrisp.jpg"
    },
    {
        name: "Maliny, 100g",
        price: 5.49,
        seller: "Żabka",
        producer: "Żabka",
        waznosc: 1,
        img: "https://jedzpij.pl/public/assets/maliny4.jpg"
    },
    {
        name: "Maliny, 100g",
        price: 6.99,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 1,
        img: "https://jedzpij.pl/public/assets/maliny4.jpg"
    },
    {
        name: "Maliny, 100g",
        price: 5.99,
        seller: "Biedronka",
        producer: "Biedronka",
        waznosc: 2,
        img: "https://jedzpij.pl/public/assets/maliny4.jpg"
    },
    {
        name: "Maliny, 100g",
        price: 6.29,
        seller: "Dino",
        producer: "Dino",
        waznosc: 1,
        img: "https://jedzpij.pl/public/assets/maliny4.jpg"
    },
    {
        name: "Pomarańcza, 100g",
        price: 0.35,
        seller: "Dino",
        producer: "Dino",
        waznosc: 2,
        img: "https://stalowezdrowie.pl/wp-content/uploads/2019/01/pomara%C5%84cze.jpg"
    },
    {
        name: "Pomarańcza, 100g",
        price: 0.20,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 3,
        img: "https://stalowezdrowie.pl/wp-content/uploads/2019/01/pomara%C5%84cze.jpg"
    },
    {
        name: "Pomarańcza, 100g",
        price: 0.19,
        seller: "Aldi",
        producer: "Aldi",
        waznosc: 2,
        img: "https://stalowezdrowie.pl/wp-content/uploads/2019/01/pomara%C5%84cze.jpg"
    },
    {
        name: "Pomarańcza, 100g",
        price: 0.25,
        seller: "Lewiatan",
        producer: "Lewiatan",
        waznosc: 1,
        img: "https://stalowezdrowie.pl/wp-content/uploads/2019/01/pomara%C5%84cze.jpg"
    },
    {
        name: "Pomarańcza, 100g",
        price: 0.24,
        seller: "Chata Polska",
        producer: "Chata Polska",
        waznosc: 1,
        img: "https://stalowezdrowie.pl/wp-content/uploads/2019/01/pomara%C5%84cze.jpg"
    },
    {
        name: "Mandarynki, 100g",
        price: 0.70,
        seller: "Lewiatan",
        producer: "Lewiatan",
        waznosc: 1,
        img: "https://www.esklep-kubus.net/userdata/gfx/4715b13b56fa46e6f7d4c5cdb1064128.jpg"
    },
    {
        name: "Mandarynki, 100g",
        price: 0.69,
        seller: "Biedronka",
        producer: "Biedronka",
        waznosc: 2,
        img: "https://www.esklep-kubus.net/userdata/gfx/4715b13b56fa46e6f7d4c5cdb1064128.jpg"
    },
    {
        name: "Mandarynki, 100g",
        price: 0.70,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 3,
        img: "https://www.esklep-kubus.net/userdata/gfx/4715b13b56fa46e6f7d4c5cdb1064128.jpg"
    },
    {
        name: "Mandarynki, 100g",
        price: 0.50,
        seller: "Dino",
        producer: "Dino",
        waznosc: 1,
        img: "https://www.esklep-kubus.net/userdata/gfx/4715b13b56fa46e6f7d4c5cdb1064128.jpg"
    },
    {
        name: "Kiwi, 100g",
        price: 0.60,
        seller: "Biedronka",
        producer: "Biedronka",
        waznosc: 1,
        img: "https://leclerc.com.pl/public/upload/sellasist_cache/thumb_page_389e4ac3ac623c2595ebc43b34e3c86e.jpg"
    },
    {
        name: "Kiwi, 100g",
        price: 0.65,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 2,
        img: "https://leclerc.com.pl/public/upload/sellasist_cache/thumb_page_389e4ac3ac623c2595ebc43b34e3c86e.jpg"
    },
    {
        name: "Kiwi, 100g",
        price: 0.50,
        seller: "Żabka",
        producer: "Żabka",
        waznosc: 3,
        img: "https://leclerc.com.pl/public/upload/sellasist_cache/thumb_page_389e4ac3ac623c2595ebc43b34e3c86e.jpg"
    },
    {
        name: "Kiwi, 100g",
        price: 0.49,
        seller: "Chata Polska",
        producer: "Chata Polska",
        waznosc: 1,
        img: "https://leclerc.com.pl/public/upload/sellasist_cache/thumb_page_389e4ac3ac623c2595ebc43b34e3c86e.jpg"
    },
    {
        name: "Grahamka, sztuka",
        price: 0.79,
        seller: "Żabka",
        producer: "Piekarnia Żabki",
        waznosc: 1,
        img: "https://sklep.spolemkielce.pl/wp-content/uploads/2020/09/grahamka.png"
    },
    {
        name: "Grahamka, sztuka",
        price: 0.65,
        seller: "Lidl",
        producer: "Piekarnia Lidla",
        waznosc: 2,
        img: "https://sklep.spolemkielce.pl/wp-content/uploads/2020/09/grahamka.png"
    },
    {
        name: "Grahamka, sztuka",
        price: 0.59,
        seller: "Biedronka",
        producer: "Piekarnia Biedronki",
        waznosc: 1,
        img: "https://sklep.spolemkielce.pl/wp-content/uploads/2020/09/grahamka.png"
    },
    {
        name: "Grahamka, sztuka",
        price: 0.70,
        seller: "Dino",
        producer: "Piekarnia Dino",
        waznosc: 2,
        img: "https://sklep.spolemkielce.pl/wp-content/uploads/2020/09/grahamka.png"
    },
    {
        name: "Bagietka Czosnkowa, sztuka",
        price: 1.10,
        seller: "Biedronka",
        producer: "Piekarnia Biedronki",
        waznosc: 1,
        img: "https://emi.sklepkupiec.pl/188723-large_default/loraine-bagietka-czosnkowa-170g.jpg"
    },
    {
        name: "Bagietka Czosnkowa, sztuka",
        price: 1.20,
        seller: "Lidl",
        producer: "Piekarnia Lidla",
        waznosc: 2,
        img: "https://emi.sklepkupiec.pl/188723-large_default/loraine-bagietka-czosnkowa-170g.jpg"
    },
    {
        name: "Bagietka Czosnkowa, sztuka",
        price: 1.05,
        seller: "Dino",
        producer: "Piekarnia Dino",
        waznosc: 1,
        img: "https://emi.sklepkupiec.pl/188723-large_default/loraine-bagietka-czosnkowa-170g.jpg"
    },
    {
        name: "Bagietka Czosnkowa, sztuka",
        price: 0.95,
        seller: "Piekarnia Pod Strzechą",
        producer: "Piekarna Pod Strzechą",
        waznosc: 1,
        img: "https://emi.sklepkupiec.pl/188723-large_default/loraine-bagietka-czosnkowa-170g.jpg"
    },
    {
        name: "Bułka Serowa, sztuka",
        price: 0.90,
        seller: "Lidl",
        producer: "Piekarnia Lidla",
        waznosc: 1,
        img: "https://delikatesyuchlopcow.pl/5376-home_default/bulka-serowa-50g-merk.jpg"
    },
    {
        name: "Bułka Serowa, sztuka",
        price: 0.99,
        seller: "Biedronka",
        producer: "Piekarnia Biedronka",
        waznosc: 2,
        img: "https://delikatesyuchlopcow.pl/5376-home_default/bulka-serowa-50g-merk.jpg"
    },
    {
        name: "Bułka Serowa, sztuka",
        price: 0.89,
        seller: "Dino",
        producer: "Piekarnia Dino",
        waznosc: 3,
        img: "https://delikatesyuchlopcow.pl/5376-home_default/bulka-serowa-50g-merk.jpg"
    },
    {
        name: "Bułka Serowa, sztuka",
        price: 0.79,
        seller: "Aldi",
        producer: "Piekarnia Aldi",
        waznosc: 1,
        img: "https://delikatesyuchlopcow.pl/5376-home_default/bulka-serowa-50g-merk.jpg"
    },
    {
        name: "Makaron Lubella, opakowanie 400g",
        price: 4.49,
        seller: "Lidl",
        producer: "Lubella",
        waznosc: 4,
        img: "https://www.pakomarket.pl/wp-content/uploads/LUBELLA-Makaron-Swiderki-Eliche-500g.png"
    },
    {
        name: "Makaron Lubella, opakowanie 400g",
        price: 4.09,
        seller: "Aldi",
        producer: "Lubella",
        waznosc: 3,
        img: "https://www.pakomarket.pl/wp-content/uploads/LUBELLA-Makaron-Swiderki-Eliche-500g.png"
    },
    {
        name: "Makaron Lubella, opakowanie 400g",
        price: 3.99,
        seller: "Biedronka",
        producer: "Lubella",
        waznosc: 1,
        img: "https://www.pakomarket.pl/wp-content/uploads/LUBELLA-Makaron-Swiderki-Eliche-500g.png"
    },
    {
        name: "Makaron Lubella, opakowanie 400g",
        price: 4.99,
        seller: "Dino",
        producer: "Lubella",
        waznosc: 3,
        img: "https://www.pakomarket.pl/wp-content/uploads/LUBELLA-Makaron-Swiderki-Eliche-500g.png"
    },
    {
        name: "Lipton Brzoskwiniowy, butelka 0,5l",
        price: 2.99,
        seller: "Lidl",
        producer: "Lipton",
        waznosc: 2,
        img: "https://leclerc-online.pl/public/upload/sellasist_cache/thumb_page_887fd34ea09a0d919802a048a17eb3b2.jpg"
    },
    {
        name: "Lipton Brzoskwiniowy, butelka 0,5l",
        price: 3.29,
        seller: "Biedronka",
        producer: "Lipton",
        waznosc: 8,
        img: "https://leclerc-online.pl/public/upload/sellasist_cache/thumb_page_887fd34ea09a0d919802a048a17eb3b2.jpg"
    },
    {
        name: "Lipton Brzoskwiniowy, butelka 0,5l ",
        price: 2.79,
        seller: "Dino",
        producer: "Lipton",
        waznosc: 4,
        img: "https://leclerc-online.pl/public/upload/sellasist_cache/thumb_page_887fd34ea09a0d919802a048a17eb3b2.jpg"
    },
    {
        name: "Lipton Brzoskwiniowy, butelka 0,5l",
        price: 2.39,
        seller: "Lewiatan",
        producer: "Lipton",
        waznosc: 1,
        img: "https://leclerc-online.pl/public/upload/sellasist_cache/thumb_page_887fd34ea09a0d919802a048a17eb3b2.jpg"
    },
    {
        name: "Ryż biały, opakowanie 400g",
        price: 1.99,
        seller: "Lewiatan",
        producer: "Risana",
        waznosc: 2,
        img: "https://dodomku.pl/images/products/full/00030024.jpg?id=1524683255"
    },
    {
        name: "Ryż biały, opakowanie 400g",
        price: 2.39,
        seller: "Lidl",
        producer: "Risana",
        waznosc: 4,
        img: "https://dodomku.pl/images/products/full/00030024.jpg?id=1524683255"
    },
    {
        name: "Ryż biały, opakowanie 400g",
        price: 2.19,
        seller: "Biedronka",
        producer: "Risana",
        waznosc: 1,
        img: "https://dodomku.pl/images/products/full/00030024.jpg?id=1524683255"
    },
    {
        name: "Ryż biały, opakowanie 400g",
        price: 2.49,
        seller: "Chata Polska",
        producer: "Risana",
        waznosc: 5,
        img: "https://dodomku.pl/images/products/full/00030024.jpg?id=1524683255"
    },{
        name: "Ryż biały, opakowanie 400g",
        price: 2.69,
        seller: "Aldi",
        producer: "Risana",
        waznosc: 4,
        img: "https://dodomku.pl/images/products/full/00030024.jpg?id=1524683255"
    },
    {
        name: "Marchew, 100g",
        price: 0.22,
        seller: "Aldi",
        producer: "Aldi",
        waznosc: 3,
        img: "https://kobieco.pl/wp-content/uploads/2016/07/Marchewka-%E2%80%93-kalorie.jpg"
    },
    {
        name: "Marchew, 100g",
        price: 0.26,
        seller: "Biedronka",
        producer: "Biedronka",
        waznosc: 1,
        img: "https://kobieco.pl/wp-content/uploads/2016/07/Marchewka-%E2%80%93-kalorie.jpg"
    },
    {
        name: "Marchew, 100g",
        price: 0.28,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 2,
        img: "https://kobieco.pl/wp-content/uploads/2016/07/Marchewka-%E2%80%93-kalorie.jpg"
    },
    {
        name: "Marchew, 100g",
        price: 0.30,
        seller: "Dino",
        producer: "Dino",
        waznosc: 4,
        img: "https://kobieco.pl/wp-content/uploads/2016/07/Marchewka-%E2%80%93-kalorie.jpg"
    },
    {
        name: "Pomidor, 100g",
        price: 0.40,
        seller: "Lidl",
        producer: "Lidl",
        waznosc: 1,
        img: "https://profit.sklepkupiec.pl/17852-thickbox_default/pomidor-import.jpg"
    },
    {
        name: "Pomidor, 100g",
        price: 0.60,
        seller: "Biedronka",
        producer: "Biedronka",
        waznosc: 3,
        img: "https://profit.sklepkupiec.pl/17852-thickbox_default/pomidor-import.jpg"
    },
    {
        name: "Pomidor, 100g",
        price: 0.55,
        seller: "Aldi",
        producer: "Aldi",
        waznosc: 2,
        img: "https://profit.sklepkupiec.pl/17852-thickbox_default/pomidor-import.jpg"
    },
    {
        name: "Pomidor, 100g",
        price: 0.65,
        seller: "Dino",
        producer: "Dino",
        waznosc: 5,
        img: "https://profit.sklepkupiec.pl/17852-thickbox_default/pomidor-import.jpg"
    },
    {
        name: "Precel, sztuka",
        price: 0.89,
        seller: "Lidl",
        producer: "Piekarnia Lidla",
        waznosc: 1,
        img: "https://media.istockphoto.com/id/115984173/pl/zdj%C4%99cie/mi%C4%99kka-precel-na-bia%C5%82ym.jpg?s=612x612&w=0&k=20&c=ykGeqzVUnELx2JlSofBYLXx0ysloCgBH2bCyKIaM8kM="
    },
    {
        name: "Precel, sztuka",
        price: 0.99,
        seller: "Biedronka",
        producer: "Piekarnia Biedronki",
        waznosc: 3,
        img: "https://media.istockphoto.com/id/115984173/pl/zdj%C4%99cie/mi%C4%99kka-precel-na-bia%C5%82ym.jpg?s=612x612&w=0&k=20&c=ykGeqzVUnELx2JlSofBYLXx0ysloCgBH2bCyKIaM8kM="
    },
    {
        name: "Precel, sztuka",
        price: 0.79,
        seller: "Aldi",
        producer: "Piekarnia Aldi",
        waznosc: 1,
        img: "https://media.istockphoto.com/id/115984173/pl/zdj%C4%99cie/mi%C4%99kka-precel-na-bia%C5%82ym.jpg?s=612x612&w=0&k=20&c=ykGeqzVUnELx2JlSofBYLXx0ysloCgBH2bCyKIaM8kM="
    },
    {
        name: "Precel, sztuka",
        price: 1.09,
        seller: "Dino",
        producer: "Piekarnia Dino",
        waznosc: 2,
        img: "https://media.istockphoto.com/id/115984173/pl/zdj%C4%99cie/mi%C4%99kka-precel-na-bia%C5%82ym.jpg?s=612x612&w=0&k=20&c=ykGeqzVUnELx2JlSofBYLXx0ysloCgBH2bCyKIaM8kM="
    },
    {
        name: "Muffin czekoladowy, sztuka",
        price: 2.39,
        seller: "Biedronka",
        producer: "E. Wedel",
        waznosc: 1,
        img: "https://media.zabka.pl/product_thumbnail_new/v5/uploads/media/62331337a7dd1/zabka-muffin-wedel-new-v3.png"
    },
    {
        name: "Muffin czekoladowy, sztuka",
        price: 2.69,
        seller: "Żabka",
        producer: "E. Wedel",
        waznosc: 2,
        img: "https://media.zabka.pl/product_thumbnail_new/v5/uploads/media/62331337a7dd1/zabka-muffin-wedel-new-v3.png"
    },
    {
        name: "Muffin czekoladowy, sztuka",
        price: 2.79,
        seller: "Aldi",
        producer: "E. Wedel",
        waznosc: 3,
        img: "https://media.zabka.pl/product_thumbnail_new/v5/uploads/media/62331337a7dd1/zabka-muffin-wedel-new-v3.png"
    },
    {
        name: "Muffin czekoladowy, sztuka",
        price: 2.29,
        seller: "Lidl",
        producer: "E. Wedel",
        waznosc: 1,
        img: "https://media.zabka.pl/product_thumbnail_new/v5/uploads/media/62331337a7dd1/zabka-muffin-wedel-new-v3.png"
    },
]


export default productData