export type NavItem = {
  title: string
  href: string
  isSecondary?: boolean
}

const ABOUT = {title: `О&nbsp;нас`, href: `#about`}
const PRODUCTS = {title: `Продукция`, href: `#products`}
const SERVICES = {title: `Услуги`, href: `#services`}
const NEWS = {title: `Новости`, href: `#news`}
const VACANCIES = {title: `Вакансии`, href: `#vacancies`}
const CONTACTS = {title: `Контакты`, href: `#footer`}
const CONSULTING = {title: `Консультация`, href: `#consulting`, isSecondary: true}
const WRITE_US = {title: `Связаться`, href: `#`, isSecondary: true}
const SUBMIT_APPLICATION = {title: `Оставить заявку`, href: `#`, isSecondary: true}

export const HEADER_NAVIGATION: NavItem[] = [ABOUT, PRODUCTS, SERVICES, NEWS, VACANCIES, CONTACTS]

export const FOOTER_NAVIGATION: NavItem[] = [
  ABOUT, NEWS, CONSULTING,
  PRODUCTS, VACANCIES, WRITE_US,
  SERVICES, CONTACTS, SUBMIT_APPLICATION,
]
