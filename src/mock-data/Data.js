// import img balo
import balo1 from '../assets/img/balo1-1.jpeg';
import balo2 from '../assets/img/balo2-2.webp';
import balo3 from '../assets/img/balo3-3.jpeg';
import balo4 from '../assets/img/balo4-4.webp';
import balo5 from '../assets/img/balo5-5.jpeg';
// import img jacket
import jacket1 from '../assets/img/jacket1.webp';
import jacket2 from '../assets/img/jacket2.webp';
import jacket3 from '../assets/img/jacket3.webp';
import jacket4 from '../assets/img/jacket4.webp';
import jacket5 from '../assets/img/jacket5.webp';
// import img Tshirt
import Tshirt1 from '../assets/img/Tshirt1.webp';
import Tshirt2 from '../assets/img/Tshirt2.webp';
import Tshirt3 from '../assets/img/Tshirt3.webp';
import Tshirt4 from '../assets/img/Tshirt4.webp';
import Tshirt5 from '../assets/img/Tshirt5.webp';
import Tshirt6 from '../assets/img/Tshirt6.webp';

const Data = [
    {
        id: 1,
        category: 'Balo',
        imgSrc: balo1,
        destTitle: 'TieDye BackPack Dark Green - TDBP dark green',
        fees: '700',
        discount: 15,
    },
    {
        id: 2,
        category: 'Balo',
        imgSrc: balo2,
        destTitle: 'TieDye BackPack Dark Green - TDBP dark green',
        fees: '500',
        discount: 15,
    },
    {
        id: 3,
        imgSrc: balo3,
        category: 'Balo',
        destTitle: 'Balo Đám Mây Degrey - BDM',
        fees: '300',

        discount: 15,
    },
    {
        id: 4,
        category: 'Balo',
        imgSrc: balo4,
        destTitle: 'Degrey Tiedye Backpack - DTDB',
        fees: '600',

        discount: 15,
    },
    {
        id: 5,
        category: 'Balo',
        imgSrc: balo4,
        destTitle: 'Degrey Galaxy Backpack - DGB',
        fees: '100',

        discount: 15,
    },
    {
        id: 6,
        category: 'Balo',
        imgSrc: balo1,
        destTitle: 'TieDye BackPack Dark Green - TDBP dark green',
        fees: '500',

        discount: 15,
    },

    {
        id: 7,
        category: 'Balo',
        imgSrc: balo3,
        destTitle: 'Degrey Galaxy Backpack - DGB',
        fees: '900',

        discount: 15,
    },

    {
        id: 8,
        category: 'Balo',
        imgSrc: balo5,
        destTitle: 'Degrey Galaxy Backpack - DGB',
        fees: '700',

        discount: 15,
    },

    {
        id: 9,
        category: 'Balo',
        imgSrc: balo2,
        destTitle: 'Degrey Galaxy Backpack - DGB',
        fees: '700',

        discount: 15,
    },

    {
        id: 10,
        category: 'Balo',
        imgSrc: balo4,
        destTitle: 'Degrey Galaxy Backpack - DGB',
        fees: '700',

        discount: 15,
    },
    {
        id: 11,
        imgSrc: jacket1,
        category: 'Jacket',
        destTitle: 'Áo Jean Degrey Basic - AJB Xanh',
        fees: '200',

        discount: 15,
    },
    {
        id: 12,
        category: 'Jacket',
        imgSrc: jacket2,
        destTitle: 'Áo Jean Degrey Basic Đen - AJB Đen',
        fees: '200',

        discount: 15,
    },
    {
        id: 13,
        category: 'Jacket',
        imgSrc: jacket3,
        destTitle: 'Áo Khoác Nấm Degrey Navy SS2 - AKND Navy SS2',
        fees: '210',

        discount: 15,
    },
    {
        id: 14,
        category: 'Jacket',
        imgSrc: jacket4,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '280',

        discount: 15,
    },
    {
        id: 15,
        category: 'Jacket',
        imgSrc: jacket1,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '270',

        discount: 15,
    },
    {
        id: 16,
        category: 'Jacket',
        imgSrc: jacket5,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '270',

        discount: 15,
    },
    {
        id: 17,
        category: 'Jacket',
        imgSrc: jacket2,
        destTitle: 'Degrey Cardigan D - DCD',
        fees: '220',

        discount: 15,
    },
    {
        id: 18,
        category: 'Jacket',
        imgSrc: jacket5,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '500',

        discount: 15,
    },
    {
        id: 19,
        category: 'Jacket',
        imgSrc: jacket4,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '200',

        discount: 15,
    },
    {
        id: 20,
        category: 'Jacket',
        imgSrc: jacket2,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '300',

        discount: 15,
    },
    {
        id: 21,
        category: 'Tshirt',
        imgSrc: Tshirt1,
        destTitle: 'Áo Jean Degrey Basic - AJB Xanh',
        fees: '900',

        discount: 15,
    },
    {
        id: 22,
        category: 'Tshirt',
        imgSrc: Tshirt2,
        destTitle: 'Áo Jean Degrey Basic Đen - AJB Đen',
        fees: '500',

        discount: 15,
    },
    {
        id: 23,
        category: 'Tshirt',
        imgSrc: Tshirt3,
        destTitle: 'Áo Khoác Nấm Degrey Navy SS2 - AKND Navy SS2',
        fees: '500',

        discount: 15,
    },
    {
        id: 24,
        category: 'Tshirt',
        imgSrc: Tshirt4,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '800',

        discount: 15,
    },
    {
        id: 25,
        category: 'Tshirt',
        imgSrc: Tshirt5,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '500',
        discount: 15,
    },
    {
        id: 26,
        category: 'Tshirt',
        imgSrc: Tshirt6,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '500',
        discount: 15,
    },
    {
        id: 27,
        category: 'Tshirt',
        imgSrc: Tshirt5,
        destTitle: 'Degrey Cardigan D - DCD',
        fees: '600',

        discount: 15,
    },
    {
        id: 28,
        category: 'Tshirt',
        imgSrc: Tshirt3,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '400',

        discount: 15,
    },
    {
        id: 29,
        category: 'Tshirt',
        imgSrc: Tshirt2,
        destTitle: 'Hoodie Xoài Nhí Nhố - HNN',
        fees: '1000',

        discount: 15,
    },
    {
        id: 30,
        category: 'Tshirt',
        imgSrc: Tshirt1,
        destTitle: 'Áo Khoác Nấm Degrey ss2 - AKND ss2',
        fees: '400',

        discount: 15,
    },
];

export default Data;
