const db = require('./server/db/db.js')
const {green, red} = require('chalk')

const User = require('./server/db/models/user')
const PointOfInterest = require('./server/db/models/pointOfInterest')

const UsersArr = [
  {
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'test@admin.com',
    password: '123',
    isAdmin: true
  },
  {
    firstName: 'Roberto',
    lastName: 'login',
    email: 'a',
    password: 'a',
    isAdmin: true
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    email: 'jsmith@email.com',
    password: '123',
    isAdmin: false
  }
]

const PointOfInterestArr = [
  {
    name: 'Charging Bull2',
    longitude: -74.013441,
    latitude: 40.705568,
    imageUrl: 'https://c1.staticflickr.com/7/6028/5921525870_f66936c8cf_b.jpg',
    description:
      'Charging Bull, which is sometimes referred to as the Wall Street Bull or the Bowling Green Bull, is a bronze sculpture that stands in Bowling Green in the Financial District in Manhattan, New York City. Originally guerrilla art, installed unofficially by Arturo Di Modica its popularity led to it being a permanent feature.',
    category: 'Attractions'
  },
  {
    name: 'Wallstreet Exchange Center',
    longitude: -74.009103,
    latitude: 40.705059,
    imageUrl:
      'https://wtop.com/wp-content/uploads/2018/07/Financial_Markets_Wall_Street_99131-780x520.jpg',
    description:
      "The New York Stock Exchange (NYSE, nicknamed The Big Board)[6] is an American stock exchange located at 11 Wall Street, Lower Manhattan, New York City, New York. It is by far[7][8] the world's largest stock exchange by market capitalization of its listed companies at US$30.1 trillion as of February 2018.[9] ",
    category: 'Attractions'
  },
  {
    name: 'NW FullStack Academy',
    longitude: -74.009947,
    latitude: 40.705128,
    imageUrl: 'https://www.fullstackacademy.com/images/fa-logo@2x.png',
    description:
      'Fullstack Academy is a top-ranked coding bootcamp with campuses in NYC, Chicago, and online. Want to become a professional software developer?',
    category: 'Attractions'
  },
  {
    name: 'FarAway1',
    longitude: -73.0091771,
    latitude: 41.7049455,
    imageUrl: 'https://www.fullstackacademy.com/images/fa-logo@2x.png',
    description:
      'Fullstack Academy is a top-ranked coding bootcamp with campuses in NYC, Chicago, and online. Want to become a professional software developer?',
    category: 'Attractions'
  },
  {
    name: 'FarAway 2',
    longitude: -72.0080012,
    latitude: 39.7049455,
    imageUrl: 'https://www.fullstackacademy.com/images/fa-logo@2x.png',
    description:
      'Fullstack Academy is a top-ranked coding bootcamp with campuses in NYC, Chicago, and online. Want to become a professional software developer?',
    category: 'Attractions'
  }
]

const seed = async () => {
  try {
    await db.sync({force: true})

    await Promise.all(
      UsersArr.map(el => {
        return User.create(el)
      }),
      await Promise.all(
        PointOfInterestArr.map(el => {
          return PointOfInterest.create(el)
        })
      )
    )
    console.log(green('Seeding success!'))
    db.close()
  } catch (err) {
    console.error(red('Oh dear!!!!! Something went awry :/!'))
    console.error(err)
    db.close()
  }
}
seed()
