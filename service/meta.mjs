const defaultMeta = {
  description: "Laravel JP Conference は、Laravelを利用している・利用する予定のあるエンジニアたちのためのカンファレンスです。",
  title: "Laravel JP Conference" ,
  host: "https://conference2019.laravel.jp",
  image: "/laracon.png"
}

export default (args) => {
  const {title,description,host,image} = {...defaultMeta,...args}
  return [

    { hid: 'DESC', name: 'description', content: description },
    { hid: 'OG:TITLE', property: 'og:title', content: title },
    { hid: 'OG:IMAGE', property: 'og:image', content: `${host}${image}` },
    { hid: 'OG:DESC', property: 'og:description', content: description},
    { hid: 'TW:CARD', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'TW:SITE', name: 'twitter:site', content: '@frontkansai' },
    { hid: 'TW:CREATOR', name: 'twitter:creator', content: '@frontkansai' },
    { hid: 'TW:TITLE', name: 'twitter:title', content: title },
    { hid: 'TW:DESC', name: 'twitter:description', content: description },
    { hid: 'TW:IMAGE', name: 'twitter:image', content: `${host}${image}` },
  ]

}
