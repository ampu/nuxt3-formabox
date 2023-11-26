import Product1 from '~/assets/images/products/1.jpg'
import Product2 from '~/assets/images/products/2.jpg'
import Product3 from '~/assets/images/products/3.jpg'
import Product4 from '~/assets/images/products/4.jpg'
import Product5 from '~/assets/images/products/5.jpg'
import Product6 from '~/assets/images/products/6.jpg'
import Product7 from '~/assets/images/products/7.jpg'
import Product8 from '~/assets/images/products/8.jpg'
import Product9 from '~/assets/images/products/9.jpg'
import Product10 from '~/assets/images/products/10.jpg'
import Product11 from '~/assets/images/products/11.jpg'
import Product12 from '~/assets/images/products/12.jpg'
import Product13 from '~/assets/images/products/13.jpg'

export type Product = {
  colspan: number,
  title: string,
  text: string[],
  images: {
    tv: { source: string, width: number, height: number, right: number, bottom: number },
    desktop: { source: string, width: number, height: number, right: number, bottom: number },
    notebook: { source: string, width: number, height: number, right: number, bottom: number },
    tablet: { source: string, width: number, height: number, right: number, bottom: number },
    mobile: { source: string, width: number, height: number, left: number, top: number },
  },
}

export const PRODUCTS: Product[] = [
  { // 1
    colspan: 2,
    title: `Микрогофрокартон`,
    text: [
      'Оптимальный материал для производства коробок, который отличается экологичностью, небольшим весом и много-функциональностью.',
      'Примечательно, что при изготовлении гофрокартона можно использовать бумагу и картон из макулатуры.',
    ],
    images: {
      tv: {source: Product1, width: 343, height: 343, right: 0, bottom: -20},
      desktop: {source: Product1, width: 343, height: 343, right: -65, bottom: 0},
      notebook: {source: Product1, width: 306, height: 301, right: 39, bottom: 0},
      tablet: {source: Product1, width: 306, height: 301, right: 0, bottom: 0},
      mobile: {source: Product1, width: 185, height: 151, left: 51, top: 10},
    },
  },
  { // 2
    colspan: 2,
    title: `Микрогофрокартон`,
    text: ['Микрогофрокартон подходит для изготовления упаковки небольших размеров под хрупкий или компактный товар. Тем не менее микрогофрокартон может использоваться и для коробок под более габаритную продукцию'],
    images: {
      tv: {source: Product2, width: 240, height: 280, right: 67, bottom: 60},
      desktop: {source: Product2, width: 240, height: 280, right: 0, bottom: 60},
      notebook: {source: Product2, width: 212, height: 247, right: 85, bottom: 30},
      tablet: {source: Product2, width: 212, height: 247, right: 45, bottom: 30},
      mobile: {source: Product2, width: 122, height: 143, left: 80, top: 10},
    },
  },
  { // 3
    colspan: 1,
    title: `Трехслойный гофрокартон`,
    text: ['Состоит из двух плоских слоев (лайнер) и одного гофрированного слоя (флютинг)'],
    images: {
      tv: {source: Product3, width: 336, height: 231, right: 0, bottom: 0},
      desktop: {source: Product3, width: 336, height: 231, right: -30, bottom: 0},
      notebook: {source: Product3, width: 336, height: 231, right: 40, bottom: -20},
      tablet: {source: Product3, width: 336, height: 231, right: 0, bottom: -30},
      mobile: {source: Product3, width: 278, height: 192, left: 0, top: -30},
    },
  },
  { // 4
    colspan: 1,
    title: `Пятислойный гофрокартон`,
    text: ['Состоит из трех плоских (лайнер) и двух гофрированных (флютинг) слоев'],
    images: {
      tv: {source: Product4, width: 276, height: 224, right: 25, bottom: 0},
      desktop: {source: Product4, width: 276, height: 224, right: -10, bottom: 0},
      notebook: {source: Product4, width: 276, height: 224, right: 90, bottom: -30},
      tablet: {source: Product4, width: 276, height: 224, right: 0, bottom: -30},
      mobile: {source: Product4, width: 268, height: 185, left: 0, top: -30},
    },
  },
  { // 5
    colspan: 2,
    title: `Короб 4-х клапанный`,
    text: ['Микрогофрокартон подходит для изготовления упаковки небольших размеров под хрупкий или компактный товар. Тем не менее микрогофрокартон может использоваться и для коробок под более габаритную продукцию'],
    images: {
      tv: {source: Product5, width: 558, height: 437, right: -133, bottom: -120},
      desktop: {source: Product5, width: 558, height: 437, right: -253, bottom: -135},
      notebook: {source: Product5, width: 440, height: 344, right: -10, bottom: -90},
      tablet: {source: Product5, width: 276, height: 224, right: 0, bottom: 0},
      mobile: {source: Product5, width: 268, height: 185, left: 0, top: 0},
    },
  },
  { // 6
    colspan: 2,
    title: `Упаковка из гофрокартона`,
    text: [
      'Оптимальный материал для производства коробок, который отличается экологич-ностью, небольшим весом и много-функциональностью.',
      'Примечательно, что при изготовлении гофрокартона можно использовать бумагу и картон из макулатуры: это позволяет снизить нагрузку на окружающую среду и экономить материалы для сырья.',
    ],
    images: {
      tv: {source: Product6, width: 350, height: 283, right: 0, bottom: 27},
      desktop: {source: Product6, width: 350, height: 283, right: -80, bottom: 27},
      notebook: {source: Product6, width: 350, height: 283, right: 20, bottom: -10},
      tablet: {source: Product6, width: 276, height: 224, right: 0, bottom: 0},
      mobile: {source: Product6, width: 268, height: 185, left: 0, top: 0},
    },
  },
  { // 7
    colspan: 1,
    title: `Короб сложной высечки`,
    text: ['Упаковка сложной конфигурации с дополнительными отверстиями, ручками и элементами'],
    images: {
      tv: {source: Product7, width: 336, height: 338, right: 0, bottom: -70},
      desktop: {source: Product7, width: 336, height: 338, right: -50, bottom: -70},
      notebook: {source: Product7, width: 336, height: 338, right: 50, bottom: -120},
      tablet: {source: Product7, width: 336, height: 338, right: 0, bottom: -90},
      mobile: {source: Product7, width: 336, height: 338, left: -25, top: -100},
    },
  },
  { // 8
    colspan: 1,
    title: `Гофрорешетка в сборе`,
    text: ['Ряд ячеек, образованных поперечными и продольными планками из гофрокартона'],
    images: {
      tv: {source: Product8, width: 336, height: 338, right: 0, bottom: -120},
      desktop: {source: Product8, width: 336, height: 338, right: -50, bottom: -120},
      notebook: {source: Product8, width: 336, height: 338, right: 45, bottom: -120},
      tablet: {source: Product8, width: 336, height: 338, right: 0, bottom: -140},
      mobile: {source: Product8, width: 336, height: 338, left: -10, top: -50},
    },
  },
  { // 9
    colspan: 2,
    title: `Каталог FEFCO`,
    text: ['Каталог разработан как формальная система для упрощения сложных словесных описаний коробок и упаковочных конструкций'],
    images: {
      tv: {source: Product9, width: 582, height: 383, right: -80, bottom: 0},
      desktop: {source: Product9, width: 582, height: 383, right: -200, bottom: 0},
      notebook: {source: Product9, width: 582, height: 383, right: -75, bottom: -80},
      tablet: {source: Product9, width: 582, height: 383, right: -200, bottom: -70},
      mobile: {source: Product9, width: 291, height: 192, left: 0, top: 0},
    },
  },
  { // 10
    colspan: 1,
    title: `Бумажные мешки`,
    text: ['Экологически чистый вид упаковки применяемый в различных сферах'],
    images: {
      tv: {source: Product10, width: 336, height: 380, right: 0, bottom: 0},
      desktop: {source: Product10, width: 336, height: 380, right: -30, bottom: -30},
      notebook: {source: Product10, width: 336, height: 380, right: 50, bottom: -80},
      tablet: {source: Product10, width: 336, height: 380, right: 0, bottom: -90},
      mobile: {source: Product10, width: 168, height: 190, left: 50, top: -30},
    },
  },
  { // 11
    colspan: 1,
    title: `Картонные гильзы`,
    text: ['Втулки выпускаются в несколько слоев. Количество бумажных слоёв может быть от 3 до 25'],
    images: {
      tv: {source: Product11, width: 336, height: 238, right: 0, bottom: 0},
      desktop: {source: Product11, width: 336, height: 238, right: -40, bottom: -40},
      notebook: {source: Product11, width: 269, height: 190, right: 75, bottom: -30},
      tablet: {source: Product11, width: 269, height: 190, right: 40, bottom: -30},
      mobile: {source: Product11, width: 269, height: 190, left: 0, top: -10},
    },
  },
  { // 12
    colspan: 2,
    title: `Полиэтилен`,
    text: ['Помимо прямого использования плёнка из полиэтилена высокого давления (ПВД) является универсальным материалом для изготовления различной упаковки'],
    images: {
      tv: {source: Product12, width: 409, height: 324, right: 35, bottom: 20},
      desktop: {source: Product12, width: 409, height: 324, right: -90, bottom: 20},
      notebook: {source: Product12, width: 409, height: 324, right: 0, bottom: 0},
      tablet: {source: Product12, width: 409, height: 324, right: 0, bottom: 0},
      mobile: {source: Product12, width: 205, height: 162, left: 50, top: 0},
    },
  },
  { // 13
    colspan: 2,
    title: `Вспомогательные упаковочные материалы`,
    text: ['Материалы для упаковывания — материалы, предназначенные для обеспечения целостности различных изделий при их хранении или перевозке'],
    images: {
      tv: {source: Product13, width: 378, height: 260, right: -36, bottom: 76},
      desktop: {source: Product13, width: 378, height: 260, right: -140, bottom: 76},
      notebook: {source: Product13, width: 378, height: 260, right: 0, bottom: 0},
      tablet: {source: Product13, width: 378, height: 260, right: 0, bottom: 0},
      mobile: {source: Product13, width: 189, height: 130, left: 50, top: 0},
    },
  },
]
