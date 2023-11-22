import ServiceWithGradient1 from '~/assets/images/services/1-with-gradient.jpg'
import Service1 from '~/assets/images/services/1.png'
import ServiceTablet1 from '~/assets/images/services/1--tablet.png'
import ServiceMobile1 from '~/assets/images/services/1--mobile.png'

import ServiceWithGradient2 from '~/assets/images/services/2-with-gradient.jpg'
import Service2 from '~/assets/images/services/2.png'
import ServiceTablet2 from '~/assets/images/services/2--tablet.png'
import ServiceMobile2 from '~/assets/images/services/2--mobile.png'

import ServiceWithGradient3 from '~/assets/images/services/3-with-gradient.jpg'
import Service3 from '~/assets/images/services/3.png'
import ServiceTablet3 from '~/assets/images/services/3--tablet.png'
import ServiceMobile3 from '~/assets/images/services/3--mobile.png'

import ServiceWithGradient4 from '~/assets/images/services/4-with-gradient.jpg'
import Service4 from '~/assets/images/services/4.png'
import ServiceTablet4 from '~/assets/images/services/4--tablet.png'
import ServiceMobile4 from '~/assets/images/services/4--mobile.png'

export type Service = {
  title: string
  subtitle: string
  text: string
  image: string
  imageWithGradient: string
  imageTablet: string
  imageMobile: string
}

export const SERVICES: Service[] = [
  {
    title: `Проектирование и&nbsp;дизайн`,
    subtitle: `Упаковка — лицо бренда`,
    text: `Это важный инструмент, который помогает увеличивать прибыль, привлекать новых клиентов, формировать имидж и репутацию`,
    image: Service1,
    imageWithGradient: ServiceWithGradient1,
    imageTablet: ServiceTablet1,
    imageMobile: ServiceMobile1,
  },
  {
    title: `Печать`,
    subtitle: `Гофротара как рекламный носитель`,
    text: `Нанесение логотипа на транспортировочную упаковку — это не дорогой способ повысить узнаваемость и увеличить лояльность к бренду`,
    image: Service2,
    imageWithGradient: ServiceWithGradient2,
    imageTablet: ServiceTablet2,
    imageMobile: ServiceMobile2,
  },
  {
    title: `Транспортировка`,
    subtitle: `Все виды доставки`,
    text: `Компания осуществляет доставку в любую точку Центральной России`,
    image: Service3,
    imageWithGradient: ServiceWithGradient3,
    imageTablet: ServiceTablet3,
    imageMobile: ServiceMobile3,
  },
  {
    title: `Хранение`,
    subtitle: `Хранение продукции`,
    text: `Предприятие оборудовано тёплым складом класса А с электронной библиотекой хранения`,
    image: Service4,
    imageWithGradient: ServiceWithGradient4,
    imageTablet: ServiceTablet4,
    imageMobile: ServiceMobile4,
  },
]
