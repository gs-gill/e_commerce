import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZAHQuQl4aWzsW\n6YAx5tHvRH0aDtp/Omxc8nchrWo8t6eOO5dC6YqNu4MEfkq92vyaryp2N6a+l6K/\nPOubZWbE4B9r1nG7bFLogI6TVvI60h+dojCNFp2zG1u8lnTS7ohxwSjFMax7IWPr\njvH0DQiGRt1IKDn8ULP4rS8L43eiiDXKb/8OJ48p3Wppz5eHz6iLgVjzCejyk2w3\nKXqJzTmeAN0KIIVY3CmyUFMkl2KTYgXw+Aq2SiJNyr7kxKS+g0c+rR/ZvLiskB6b\nQY23gnC3F7DEKl4jQod0Yu68q4WJaknmOAPYE4Ms/4ZaMTwcFku9r5dYmUa9HhHY\nSbZVXvS/AgMBAAECggEAEWc/6hXYhjSa4JOJfHcOjynm/pgCXgHJfwrTExhdVNFF\n1tpgnzUrr4JCV7HpPKC7cYxq02BTNyXiH4Q7QRM40sFGw9dG98kQPSVSSe7HLoB7\nmKDRU/9kVmDzUoSeiewndTgQlQAO3TEoWlP0g6Yn8NzuEkNnoxy10lPRWhq8FYTB\nPAsdyrC8oVv5ulNAUvhq39eYA09NrmIsuZkCg2t7S0P9ub9IBtCP/U02Zcfxt4Lo\n0XjwAuTf2el1bW9sGGxoy8JsqhaYJag/i9SvU02yyQYGzc+L+MW87dWBTgvi8gTS\nat+Bcz/SBdR5Pmq7jM8xTVcZMXSm1wyZjcaiOhhqgQKBgQDvpmkgHkg77V8ZeYWS\n+r11/+QWfb8dh/ap8Yl13j4KR3aIlHAMgnpb1a4qg6E60t9D3Vi8lAa0IjpYgT7w\nzDlMrmyKX+2m/zqsWpF4BpnBER3Z4F5x5cLeAlwch2ECIlihm76iitP0h0w2YzCW\nKuS48Hie7OGrWY3Uv9itHdGWdwKBgQDnzntJaxLKwblkgP8TccJsly7+6EWuTizH\nJ1e7lwFqPHf31Uyin2mnx7qGxzpeVFo37VngEOF+mDZsSZG1H3a6pxWzphH63szQ\nvStzNSUsycjAfi2jXDKfh7p93uzy8cuxqEk+GVzp8JYiPCqidSbBVr3cVsf1N8FO\nH9X0h7D9+QKBgA/SlehH9471Wi0NZ/NPWMj8ryuI++BQRMntp5y/oqr9EudrnYZF\n6xw7HHe0HyYKHDGX4K76uwKTq/SB/Azb/wCAF6x/LuqyuUX96NLa5LXpkmX7OWEd\nwWL1Fu3PRmlkqSNqbAjBT8M6V57Tp7aSeG15ew1LKI8up32feQfdCyR7AoGBAN9x\n7Ot/d/TUOmYD5l0S6kwMi3OR6CE2H/m1Fd+wlt+V/Dp8dEvKCGl/oHBsuPnWq8R/\nWYQgIY0LImLNo9OIycTwbH3oViqR+7I2txxtnTEILShIOKvgoreeeQj+Cz/ADg5p\nXniqsCKdE8taXeqNrNbvS0KKsGLS5NXu4Cm/Zr/ZAoGAUR55oRI/E0AFPoufCwpq\nmsqimIe0L7UfB6UGbbbVlCWwafQGj4BAtRjslEUIpVmm6P79pIiWkG8GxxeSab72\nQUIKCRNAQI0iN2kbTZRPYZoSluPDH0crymI/B6E5FIYOpkxm+aWzNjdw9VAauWJs\ns19roSiA49slZLsoFeONRNU=\n-----END PRIVATE KEY-----\n",
  authDomain: "white-academy-365513.firebaseapp.com",
  projectId: "white-academy-365513",
  storageBucket: "white-academy-365513.appspot.com",
  messagingSenderId: "711898523972",
  databaseURL: 'https://white-academy-365513.firebaseio.com',
  appId: "ef83125ceae5f8b629be7704a612cf3441a6d174",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage};