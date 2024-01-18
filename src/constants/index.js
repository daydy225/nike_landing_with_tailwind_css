import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons'
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images'

export const navLinks = [
  { href: '#home', label: 'home' },
  { href: '#about-us', label: 'about_us' },
  { href: '#products', label: 'products' },
  { href: '#contact-us', label: 'contact_us' },
]

export const languages = ['English', 'French']

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
]

export const statistics = [
  { value: '1k+', label: 'brands' },
  { value: '500+', label: 'shops' },
  { value: '250k+', label: 'customers' },
]

export const products = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
  },
]

export const services = [
  {
    imgURL: truckFast,
    label: 'free_shipping',
    subtext: 'free_shipping_subtext',
  },
  {
    imgURL: shieldTick,
    label: 'secure_payment',
    subtext: 'secure_payment_subtext',
  },
  {
    imgURL: support,
    label: 'love_to_help',
    subtext: 'love_to_help_subtext',
  },
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: 'customer_feedback_1',
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: 'customer_feedback_2',
  },
]

export const footerLinks = [
  {
    title: 'products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'help',
    links: [
      { name: 'about_us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'how_it_works', link: '/' },
      { name: 'privacy_policy', link: '/' },
      { name: 'payment_policy', link: '/' },
    ],
  },
  {
    title: 'get_in_touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
]

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
]
