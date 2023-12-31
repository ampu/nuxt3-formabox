import Source1 from '~/assets/images/news/1.jpg'
import Source2 from '~/assets/images/news/2.jpg'
import Source3 from '~/assets/images/news/3.jpg'

export type NewsItem = {
    image: string
    date: string
    title: string
    text: string
}

export const NEWS: NewsItem[] = [
    {
        image: Source1,
        date: '2 августа 2022',
        title: 'Официальное открытие',
        text: 'Во Владимире открыли новое предприятие «Формабокс» по выпуску гофрокартона и гофро-продукции. В мероприятии приняли участие врио губернатора Владимирской области Александр Авдеев, глава города Владимира Андрей Шохин и генеральный директор предприятия Наталья Алексеева.',
    },
    {
        image: Source2,
        date: '21 мая 2022',
        title: 'Запуск гильзонавивочной линии',
        text: 'Шпуленавивное оборудование предназначено для производства картонной шпули (втулки, гильзы) способом спиралевидной навивки из полос бумаги/картона.',
    },
    {
        image: Source3,
        date: '5 апреля 2022',
        title: 'Запуск автоматической фальцевально-склеивающей машины',
        text: 'Фальцевально-склеивающая линия применяется для складывания и склейки прямоугольных картонных коробок в автоматическом режиме из заготовок. Может осуществлять склеивание картонных коробок и гофрокартонных коробов стандартного и сложного кроя, на 1 — 4 точек склейки.',
    }
]
