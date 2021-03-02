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
    total_items_in_stock: 12,
    items_remaining_in_stock: 11,
    total_money_expect: 252000,
    product_images: [
      {
        image_one: '/v1614874503/Production/Nike_React__guugmr.png',
        image_two: '/v1614876149/Production/culino_mayonaise_double_tm3qvh.jpg',
        image_three: '/v1614878996/Production/Group_46_t78qps.png',
      },
    ],
    product_title: 'Nike React, faster charger and Mayonnaise',
    product_description: 'Dear esteemed customers General Agent is selling three items at once at a very affordable price. The package contains a brand new shoe, a faster charger and Culino Mayonnaise with Lemon. Deliver fee is covered by customer.',
    product_owner: 'General Agent',
    product_deadline: 'Mar 11, 2021 23:59:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 2,
    total_items_in_stock: 3,
    items_remaining_in_stock: 2,
    total_money_expect: 58500,
    product_images: [
      {
        image_one: '/v1615051280/Production/water_bottle-removebg-preview_p0i3sm.png',
        image_two: '/v1614874503/Production/Nike_React__guugmr.png',
        image_three: 'v1615049444/Production/IMG_20210306_164612-removebg-preview_etx9mw.png',
      },
    ],
    product_title: 'Shoes, Water bottle and Earphones',
    product_description: 'Spend your next budget by ordering from us Nike React shoes, a Water bottle (2 litters) and ICEWARM Earphones (LEDLINE LENGTH = 1.2M, FREQUENCY RANGE = 20-20KHz, SENSITIVITY = 115dB +- 5dB, MICROPHONE 75-16.000HZ, IMPEDANCE = 320Hms) at 18500RWF. Customers should pay to deliver the package.',
    product_owner: 'General Agent',
    product_deadline: 'Mar 15, 2021 23:59:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 3,
    total_items_in_stock: 1,
    items_remaining_in_stock: 1,
    total_money_expect: 25000,
    product_images: [
      {
        image_one: '/v1615449650/Production/20210310_183415_dwa2hd.jpg',
        image_two: '/v1615450783/Production/Frame_1_1_a78i8q.png',
        image_three: '/v1615970403/Production/17_5628_6490_004_ex1r8l.jpg',
      },
    ],
    product_title: 'Chopping board, Chef knife, Skillet steel and Stainless steel Kitchenware(a set)',
    product_description: 'The essential kitchen tools are affordable. The packages combine Bamboo Cutting board(28*38cm), Chef knife (Titanize, Painting and Non-stick), Skillet steel Frying pan (Non-stick) and Stainless steel Kitchenware(a set). The delivery fee is not included.',
    product_owner: 'General Agent',
    product_deadline: 'Mar 30, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 4,
    total_items_in_stock: 5,
    items_remaining_in_stock: 4,
    total_money_expect: 92500,
    product_images: [
      {
        image_one: '/v1615671485/Production/yoga_mat_1_fxpz6d.jpg',
        image_two: '/v1615671346/Production/rope_4_bvoaai.jpg',
        image_three: '/v1615051280/Production/water_bottle-removebg-preview_p0i3sm.png',
      },
    ],
    product_title: 'Yoga Mats, Sports Rope and Water bottle',
    product_description: 'Order the Essential Sports Kit package from us. The new combination contains Yoga Mats (Size:61*173cm), Sports Rope (with count timer) and Water Bottle (1400ml). The customer pays the delivery fee.',
    product_owner: 'Agent',
    product_deadline: 'Mar 25, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  },
  {
    id_no: 5,
    total_items_in_stock: 3,
    items_remaining_in_stock: 3,
    total_money_expect: 27300,
    product_images: [
      {
        image_one: '/v1615971750/Production/Frame_3_zelyna.png',
        image_two: '/v1615971374/Production/toilet_brush_iqoxb0.jpg',
        image_three: '/v1615971270/Production/111440475-0f8ba000-870f-11eb-9239-3623a005d3e3_vcra4z.png',
      },
    ],
    product_title: 'Floor wiper, Broom, Duster pan, Cleaning brush and Toilet brush holder',
    product_description: 'Order the Essential Sports Kit package from us. The new combination contains a Floor wiper, Broom, Duster pan, Cleaning brush and Toilet brush holder. The customer pays the delivery fee.',
    product_owner: 'Agent',
    product_deadline: 'Mar 25, 2021 00:00:00',
    product_currency: 'RWF',
    product_payment_number: '0787533882',
  }
];
