const mainList = [
    {
    title: 'Houttuynia Cordata Extract',
    title_desc: '어성초는 피부 혈관속 독소를 제거해주는 쿠에르치트런 성분이 풍부하고, 폴리페놀, 아미노산, 지방산이 풍부하게 들어있어 피부해독과 항산화에 효과가 좋은 식물입니다.',
    img:'../img/productmainimg1.png'
    },

    {
    title: 'Centella Asiatica Extract', 
    title_desc: '호랑이풀이라고도 불리는 병풀은 민감성 피부진정과 수분관리에 도움을줍니다. 또한, 100% 식물 유래 성분으로 피부의 색소침착을 개선하는데 도움을줍니다.',
    img:'../img/productmainimg2.png'    
    },

    {
    title: 'Artemisia Capillaris Extract', 
    title_desc: '인진쑥은 차가운 성질을 지니고 있어 홍조 피부의 열을 내려줍니다. 또한 피를 맑게 하여 피부 탄력과 윤기에 도움을 줍니다.',
    img:'../img/productmainimg3.png'        
    },

    {
    title: 'Galactomyces Ferment Filtrate',
    title_desc: '갈락토미세스에는 피부를 맑고 탄력있게 만들어주는 효모펩타이드, 아미노산, 효소단백질과 비타민B1, B2, 미네랄이 풍부하게 함유되어 있습니다. ',
    img:'../img/productmainimg4.png'    
    },
    
]

const customQna = [
    {
        q : '스트레스, 음주, 음식 섭취에 의해 얼굴과 목이 붉어지나요?',
        a : [
            {answer : '전혀 그런적이 없다', type : ['0','1']},
            {answer : '때때로 그렇다', type : ['2','3']},
            {answer : '자주 그렇다', type : ['0','2']},
            {answer : '항상 그렇다', type : ['1','3']},
        ]
    },

    {
        q : '화장품을 사용한 뒤 따끔거리는 증상을 경험한 적이 있나요?',
        a : [
            {answer : '거의 없다', type : ['0','3']},
            {answer : '가끔 있다', type : ['1','2']},
            {answer : '자주 있다', type : ['1','3']},
            {answer : '항상 있다', type : ['0','2']},
        ]
    },

    {
        q : '며칠동안 계속해서 햇빛에 노출된다면 내 피부는?',
        a : [
            {answer : '물집이 생겼으나 피부색은 변하지 않는다', type : ['1','2']},
            {answer : '피부색이 약간 짙어졌다', type : ['2','3']},
            {answer : '피부색이 많이 짙어졌다', type : ['0']},
            {answer : '원래 피부색이 짙어서 구분이 어렵다', type : ['1']},
        ]
    },

    {
        q : '여드름이나 염증이 있던 자리에 색소가 어둡게 남는 편인가요?',
        a : [
            {answer : '전혀 생기지 않는다', type : ['1','3']},
            {answer : '때때로 생긴다', type : ['0']},
            {answer : '자주 생긴다', type : ['2']},
            {answer : '항상 생긴다', type : ['0','1']},
        ]
    },

    {
        q : '얼굴에 주름이 있나요?',
        a : [
            {answer : '거의 없다. 웃거나 찡그릴 경우에도 없다', type : ['2']},
            {answer : '웃거나 찡그릴 경우에는 있다', type : ['1']},
            {answer : '얼굴을 움직이거나 안정된 상태에도 있다', type : ['0']},
            {answer : '웃거나 얼굴을 움직이지 않아도 있다', type : ['3']},
        ]
    },

    {
        q : '나는 얼마나 나의 들어 보인다고 생각하나요?',
        a : [
            {answer : '나이보다 5-10년 더 젊어보인다', type : ['1','0']},
            {answer : '나이대로 보인다', type : ['2','3']},
            {answer : '나이보다 5년 더 늙어보인다', type : ['2','1']},
            {answer : '나이보다 5년 이상 더 늙어보인다', type : ['3','0']},
        ]
    },

    {
        q : '얼굴의 T존(이마와 코)에 기름기가 있나요?',
        a : [
            {answer : '전혀 없다', type : ['1']},
            {answer : '때때로 있다', type : ['2']},
            {answer : '자주 있다', type : ['3']},
            {answer : '항상 있다', type : ['0']},
        ]
    },

    {
        q : '보습제를 사용하지 않아도 얼굴 피부는 촉촉한가요?',
        a : [
            {answer : '항상 그렇다', type : ['0','2']},
            {answer : '때때로 그렇다', type : ['2']},
            {answer : '거의 그렇지 않다', type : ['3']},
            {answer : '전혀 그렇지 않다', type : ['1']},
        ]
    },

]

const resultList = [
    {
        a : [
            {eng : 'GALACTOMYCES FERMENT FILTRATE', tit : '갈락토미세스 발효여과물', capa : '300ml', price : '18,000원' , img:'img/result/갈락토미세스.png'},
            {eng : 'Moisture Plus Cream', tit : '모이스처 플러스 크림', capa : '50ml', price : '15,800원' , img:'img/result/모이스처플러스크림.png'},
            {eng : 'organic lip essence', tit : '유기능 립에센스', capa : '13g', price : '4,900원' , img:'img/result/유기농오일립에센스.png'}
        ]
    },

    {
        a : [
            {eng : 'HOUTTUYNIA CORDATA EXTRACT', tit : '어성초 추출물 어성초 원액', capa : '150ml', price : '6,600원', img:'img/result/어성초추출물.png'},
            {eng : 'Idebenone ampoule', tit : '이데베논 앰플 원액', capa : '30ml', price : '13,800원', img:'img/result/이데베논앰플.png'},
            {eng : 'Modeling Pack', tit : '(탄력)콜라겐 모델링팩', capa : '30g x 7개입', price : '12,800원', img:'img/result/콜라겐모델링팩.png'}
        ]
    },

    {
        a : [
            {eng : 'ARTEMISIA CAPILLARIS EXTRACT', tit : '인진쑥 추출물 인진쑥 원액', capa : '150ml', price : '6,600원', img:'img/result/인진쑥추출물.png'},
            {eng : 'Tea Tree Soap', tit : '어성초 티트리 비누', capa : '100g', price : '10,800원', img:'img/result/어성초비누.png'},
            {eng : 'soothing cream', tit : '병풀 수딩 크림', capa : '100ml', price : '11,900원', img:'img/result/병풀수딩크림.png'}
        ]
    },

    {
        a : [
            {eng : 'CENTELLA ASIATICA EXTRACT', tit : '병풀 추출물 병풀 원액', capa : '150ml', price : '6,600원', img:'img/result/병풀추출물.png'},
            {eng : 'organic jojoba oil', tit : '유기농 호호바 오일', capa : '30ml', price : '5,880원', img:'img/result/호호바오일.png'},
            {eng : 'Modeling Pack', tit : '(진정)어성초 모델링팩', capa : '30g x 7개입', price : '12,800원', img:'img/result/어성초모델링팩.png'}
        ]
    }
]

const review = [
    {
        id : 'ramj****',
        con : '일단 배송도 아주 빠르고, 유해성분이 전혀 없더라구요. 화해 어플을 통해서 유해성분도 다 검색하고 구매했어요. 최근에 몸에 트러블이 너무 올라와서 충격받고 바로 구매했구요. 8일차 됐을 때 올라왔던 트러블 전 후 사진을 올려봅니다!',
        img1 : 'img/shop_sub/review (1).jpeg',
        img2 : 'img/shop_sub/review (2).jpeg'
    },

    {
        id : 'jang****',
        con : '두번째 구매에요! 등에 여드름이 나서 스트레스를 많이 받았는데, 등드름에 좋다는거 다 써도 안듣더니 병풀 쓰니깐 한번에 없어지네요... 너무 신기하고 또 좋은 제품 만들어 주셔서 감사할 따름입니다.',
        img1 : 'img/shop_sub/review (3).jpeg',
        img2 : 'img/shop_sub/review (4).jpeg'
    },

    {
        id : 'xkwh****',
        con : '집에서 다양한 조합으로 정말 잘 사용하고 있어요! 지금 사용중인  8가지 제품들이 있는데, 4-5가지로 조합해서 피부상태나 습관에 따라서 부모님과 저 다양한 스타일로 쓰고 있어요!',
        img1 : 'img/shop_sub/review (5).jpeg',
        img2 : 'img/shop_sub/review (6).jpeg'
    },

    {
        id : '9840****',
        con : '두번째 구매입니다. 중학생 딸이 여드름 때문에 고민인데, 꽤 마음에 들었나봐요. 다쓰고 다시 사달라고 하네요. 냉장고에 넣어두고 세수하고 나와서 바로 뿌리네요!',
        img1 : 'img/shop_sub/review (7).jpeg',
        img2 : 'img/shop_sub/review (8).jpeg'
    },

    {
        id : 'taik****',
        con : '군대에 있는 남자친구 보내줬어요. 휴가때 얼굴봤는데 역시나 여드름 왕 사라짐ㅜㅜ 흑흑 남자친구까지 효과 좋아서 더 기분 좋아요.',
        img1 : 'img/shop_sub/review (9).jpeg',
        img2 : 'img/shop_sub/review (10).jpeg'
    },

    {
        id : 'daug****',
        con : '항상 어성초 썼었는데 이번엔 병풀도 구매했어요. 병풀만 발랐을 때는 효과가 미미한데 같이 섞어 쓰니깐 확실히 좋네요. 공병에 넣어서 닦토하고 스킨으로 쓰고 하니 많이 좋아졌어요.',
        img1 : 'img/shop_sub/review (11).jpeg',
        img2 : 'img/shop_sub/review (12).jpeg'
    },

    {
        id : 'honj****',
        con : '화장품 자체가 품질이 아주 좋아요!!! 순수하게 주요성분만 들어가 있어서 얼굴에 부작용도 없구요~ 계절도 안타고 얼굴이 괴롭힘 받지 않고 쉬는 기분이 들어요!',
        img1 : 'img/shop_sub/review (13).jpeg',
        img2 : 'img/shop_sub/review (14).jpeg'
    },
]