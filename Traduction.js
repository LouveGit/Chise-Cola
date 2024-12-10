

const translations = {
    "fr": {
    "title_Index": "LE SODA 100% NATUREL, MADE IN JAPAN !",
    "title1_Produits": "Nos Produits",
    "title_Histoire": "Notre Histoire",
    "title_Collab": "Nos Collaborations",
    "title_Collab2": "Chise'Cola soutien le projet Miata Itasha",
    "title_Contact": "Nous Contacter",
    "title_Mentions": "Mentions Légales",
    "intro": "Découvrez notre gamme de boissons pétillante et fruitée.",
    "text3-1": "Chise Hayami",
    "text3-2": "Originaire de Kagoshima, au sud du Japon, c'est dans la plongée et la natation que cette femme talentueuse connais ses premiers succès avec 6 championnats nationaux remportés. À l'âge de 22ans, elle fonde le Black Eyes, un petit bar convivial dans le quartier de Shinagawa à Tokyo.",
    "text3-3": "Fort de son succès, elle lance le paris fou de créer une marque de soda 100% Nipponne dans le plus grand respect de la nature, la santé et la dignité humaine.",
    "text3-4": "de l'idée... aux bulles",
    "text3-5": "C'est de la collaboration entre Chise Hayami et des producteurs locaux Japonais qu'est née Chise'Cola. Notre marque a connue quelques évolutions, mais a toujours gardé comme objectif une démarche de commerce équitable afin de promouvoir les produits locaux et valoriser les petits producteurs. Notre coeur d'activitée est la production de boissons pétillante fruitée.",
    "text3-6": "Nos Engagements",
    "text3-7": "Avec 100% d'ingrédients d'origines naturelles, des fruits cultivés sans pesticides ni OGM par des producteurs indépendant et rémunérés au juste prix de l'est du Japon, notre soda est garantit sans arômes ni colorants artificiels et sans sucre ajoutés. Du cola, du jus de fruits, des bulles et c'est tout ! Également soucieux de l'environnement, nos canettes d'aluminium sont 100% recyclables. Nous avons aussi lancé des bouteilles en verres consignées afin qu'elles soient traitées, après consommation, par notre réseau et réutilisées pour être remplis à nouveau, et ce à l'infini ! De plus, notre production et transports logistique sont garantis sans empruntes carbone. Bon pour vous, bon pour nous, bon pour la planète, c'est ça le secret d'une boisson qui pétille respectueusement !",
    "text4.1": "Partenaire majeur de l'écurie Fate Stay Night Racing",
    },
    "ja": {
    "title_Index": "100% 天然ソーダ、メイドイン 日本！",
    "title1_Produits": "当社の製品",
    "title_Histoire": "私たちの物語",
    "title_Collab": "私たちのコラボレーション",
    "title_Collab2": "Chise'Cola はミアータ痛車プロジェクトを支援します",
    "title_Contact": "お問い合わせ",
    "title_Mentions": "法的通知",
    "intro": "スパークリングドリンクやフルーティードリンクを取り揃えております。",
    "text3-1": "Chise Hayami",
    "text3-2": "日本の南部、鹿児島出身のこの才能ある女性は、飛び込みと水泳で初めて成功を収め、全国選手権で 6 回優勝しました。 22 歳のとき、彼女は東京の品川区に小さくてフレンドリーなバー、Black Eyes を設立しました。",
    "text3-3": "その成功を踏まえて、彼女は自然、健康、人間の尊厳を最大限に尊重した100％国産ソーダブランドを作るというクレイジーな挑戦に着手しました。",
    "text3-4": "アイデアから泡まで",
    "text3-5": "Chise'Colaは、速水チセと地元の日本のプロデューサーとのコラボレーションから生まれました。私たちのブランドはいくつかの変化を経てきましたが、地元の製品を宣伝し、小規模生産者を促進する目的として、常にフェアトレードのアプローチを維持してきました。当社の中核事業は、スパークリングフルーティードリンクの製造です。",
    "text3-6": "私たちの約束",
    "text3-7": "100%天然由来の原料を使用し、東日本の独立した手頃な価格の生産者によって農薬やGMOを使用せずに栽培された果物を使用した当社のソーダは、人工香料や着色料、砂糖を加えていないことが保証されています。コーラ、フルーツジュース、泡、それだけです。環境にも配慮しており、当社のアルミ缶は100％リサイクル可能です。また、リターナブルガラスボトルも発売しました。これにより、消費後は当社のネットワークで処理され、無限に再充填して再利用できます。さらに、当社の生産と物流輸送は二酸化炭素排出量なしで保証されています。あなたにとっても私たちにとっても地球にとっても良い、それが敬意を込めて輝くドリンクの秘密です。",
    "text4.1": "Fate Stay Night Racing チームの主要パートナー",
    },

};


document.addEventListener("DOMContentLoaded", function () {
const languageSelector = document.getElementById("language-selector");

// Fonction pour appliquer la traduction
function applyTranslation(language) {
const elementsToTranslate = document.querySelectorAll("[data-translate]");

elementsToTranslate.forEach(element => {
    const key = element.getAttribute("data-translate");
    if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
    }
});
}

// Appliquer la langue par défaut (français)
applyTranslation("fr");

// Changer la langue lorsqu'un utilisateur sélectionne une nouvelle langue
languageSelector.addEventListener("change", function (event) {
const selectedLanguage = event.target.value;
applyTranslation(selectedLanguage);
});
});







