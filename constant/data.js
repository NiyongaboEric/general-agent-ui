/**
 *              Write Database manually here
 * 
 *                      Formulas
 *                 <================>
 * Price = Total money expect / Total items in stock
 * Total payment received = Items remaining in stock * Price
 * Total payment remaining = Total money expect - Total payment received
 * 
 * 
 * Price = Total money expect / Total items in stock
 * Total payment received = (Total items in stock - items remaining in stock) * price
 * Total payment remaining = Total money expect - Total payment received
 *
 *  
 * Price = Total money expect / Total items in stock
 * Items sold = Actual money received / price
 * Items remaining in stock = Total items in stock - Items sold
 * Total payment received = Items sold * price
 * Total payment remaining = Total money expect - Total payment received
 * 
 */


export const LISTED_PRODUCTS = [
  {
    id_no: 1,
    total_items_in_stock: 75,
    items_remaining_in_stock: 50,
    total_money_expect: 30000,
    product_images: [
      {
        image_one: 'https://res.cloudinary.com/realgeneagent/image/upload/v1610111990/Production/xnpyipduqrnuzvfkv33l.jpg',
        image_two: 'https://res.cloudinary.com/realgeneagent/image/upload/v1610111990/Production/yafarhggqnwdyfhyvqqh.jpg',
        image_three: 'https://res.cloudinary.com/realgeneagent/image/upload/v1610111989/Production/henayvro8thorm8n0pka.jpg',
      },
    ],
    product_title: 'I am title very big one so I can not be trimmed | My bad | I must admit I will be trimmed once I am too long enought to not on two lines',
    product_description: 'In this video we will be talking about 10 important insights for finding your life purpose from the writings of Marcus Aurelius. He was also a devout student of the philosophy of Stoicism. During his rule, Aurelius found the time to construct a series of autobiographical writings, now known as the Meditations. In these writings, the Marcus Aurelius offered a number of key insights on how to find your purpose in life.',
    product_owner: 'Agent',
    product_deadline: 'Feb 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 2,
    total_items_in_stock: 100,
    items_remaining_in_stock: 50,
    total_money_expect: 10000,
    product_images: [
      {
        image_one: 'https://res.cloudinary.com/realgeneagent/image/upload/v1610111576/Production/dmpze0mvwigxqvqafrgn.jpg',
        image_two: 'https://res.cloudinary.com/realgeneagent/image/upload/v1610111575/Production/s97pb7ghywyon4ajjt2n.jpg',
        image_three: 'https://res.cloudinary.com/realgeneagent/image/upload/v1610111574/Production/kssp6w6idpu7o9x4na57.jpg',
      },
    ],
    product_title: 'I am title very big ',
    product_description: 'In this video we will be talking ',
    product_owner: 'Agent',
    product_deadline: 'Feb 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 3,
    total_items_in_stock: 100,
    items_remaining_in_stock: 50,
    total_money_expect: 10000,
    product_images: [
      {
        image_one: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607953586/Production/k2chu3j1updwembe2hci.jpg',
        image_two: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607952890/Production/v7dk3q5z2ihpxal7hqr0.jpg',
        image_three: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607604607/Production/vkbojer8x3yavlnx1spw.jpg',
      },
    ],
    product_title: 'I am title very big one so I can not be trimmed | My bad',
    product_description: 'In this video we will be talking about 10 important insights for finding your life purpose from the writings of Marcus Aurelius. He was also a devout student of the philosophy of Stoicism. During his rule, Aurelius found the time to construct a series of autobiographical writings, now known as the Meditations. In these writings, the Marcus Aurelius offered a number of key insights on how to find your purpose in life.',
    product_owner: 'Agent',
    product_deadline: 'Feb 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 4,
    total_items_in_stock: 100,
    items_remaining_in_stock: 50,
    total_money_expect: 10000,
    product_images: [
      {
        image_one: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607524599/Production/gaevotbvryqk0tz3s96y.png',
        image_two: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607524597/Production/jwgtbqqujgrqxvekgngf.png',
        image_three: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607524595/Production/yjq77u9zptfzsizsyf1w.jpg',
      },
    ],
    product_title: 'I am title very big one so I can not be trimmed | My bad',
    product_description: 'In this video we will be talking about 10 important insights for finding your life purpose from the writings of Marcus Aurelius. He was also a devout student of the philosophy of Stoicism. During his rule, Aurelius found the time to construct a series of autobiographical writings, now known as the Meditations. In these writings, the Marcus Aurelius offered a number of key insights on how to find your purpose in life.',
    product_owner: 'Agent',
    product_deadline: 'Feb 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 5,
    total_items_in_stock: 100,
    items_remaining_in_stock: 50,
    total_money_expect: 10000,
    product_images: [
      {
        image_one: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607525354/Production/blauqhtxbkmzbag0m34j.jpg',
        image_two: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607525341/Production/x5ptci9yuljn7ot80sez.jpg',
        image_three: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607525332/Production/i9gaa55e9mgb0ftj7k7x.jpg',
      },
    ],
    product_title: 'I am title very big one so I can not be trimmed | My bad',
    product_description: 'In this video we will be talking about 10 important insights for finding your life purpose from the writings of Marcus Aurelius. He was also a devout student of the philosophy of Stoicism. During his rule, Aurelius found the time to construct a series of autobiographical writings, now known as the Meditations. In these writings, the Marcus Aurelius offered a number of key insights on how to find your purpose in life.',
    product_owner: 'Agent',
    product_deadline: 'Feb 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 6,
    total_items_in_stock: 100,
    items_remaining_in_stock: 50,
    total_money_expect: 10000,
    product_images: [
      {
        image_one: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607506681/Production/smmyoxseqduxdddjbgfs.jpg',
        image_two: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607506679/Production/pse1yekaccxmusshtvix.jpg',
        image_three: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607506677/Production/sjm1ptgndhs7ux9djfwe.jpg',
      },
    ],
    product_title: 'I am title very big one so I can not be trimmed | My bad',
    product_description: 'In this video we will be talking about 10 important insights for finding your life purpose from the writings of Marcus Aurelius. He was also a devout student of the philosophy of Stoicism. During his rule, Aurelius found the time to construct a series of autobiographical writings, now known as the Meditations. In these writings, the Marcus Aurelius offered a number of key insights on how to find your purpose in life.',
    product_owner: 'Agent',
    product_deadline: 'Feb 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 7,
    total_items_in_stock: 100,
    items_remaining_in_stock: 50,
    total_money_expect: 10000,
    product_images: [
      {
        image_one: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607518303/Production/qgolgc8gfa5ybdghrarj.jpg',
        image_two: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607511806/Production/ipods_oinory.jpg',
        image_three: 'https://res.cloudinary.com/realgeneagent/image/upload/v1607511805/Production/ipods_3_leub5u.png',
      },
    ],
    product_title: 'I am title very big one so I can not be trimmed | My bad',
    product_description: 'In this video we will be talking about 10 important insights for finding your life purpose from the writings of Marcus Aurelius. He was also a devout student of the philosophy of Stoicism. During his rule, Aurelius found the time to construct a series of autobiographical writings, now known as the Meditations. In these writings, the Marcus Aurelius offered a number of key insights on how to find your purpose in life.',
    product_owner: 'Agent',
    product_deadline: 'Feb 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
];
