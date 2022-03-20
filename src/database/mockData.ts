const mockData = [
  {
    name: "Jalebi",
    deliveryTime: 14,
    price: 220,
    discount: 0,
    rating: 4.7,
    veg: true,
    type: "DESSERT",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053241/zuck-food/jalebi_hdom9d.jpg",
    description:
      "Jalebi is a popular sweet snack in the Indian Subcontinent. It is made by deep-frying maida flour batter in pretzel or circular shapes, which are then soaked in sugar syrup. This dessert can be served warm or cold. ",
  },
  {
    name: "Naan",
    deliveryTime: 17,
    price: 40,
    discount: 0,
    rating: 4.4,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/naan_ngge6e.jpg",
    description:
      "Naan is a unique and popular flatbread with a chewy texture that has its roots in India. Traditionally, naan is served hot from the oven, slightly charred, brushed with ghee - Indian clarified butter, and it is usually consumed as an accompaniment to a variety of dishes.",
  },
  {
    name: "Biryani",
    deliveryTime: 35,
    price: 240,
    discount: 5,
    rating: 4.9,
    veg: false,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053239/zuck-food/biryani_ptuzbf.jpg",
    description:
      "Biryani is a group of classic dishes dating back to the Mughal Empire. It is believed that Mumtaz Mahal, Emperor Shah Jahan's queen inspired the dish in the 1600s. The word biryani is derived from the Persian word birian, meaning fried or roasted, and the dish made its way from Persia to India via groups of traders and immigrants.",
  },
  {
    name: "Butter Chicken",
    deliveryTime: 30,
    price: 290,
    discount: 8,
    rating: 4.8,
    veg: false,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053239/zuck-food/butterchicken_zsbd6o.jpg",
    description:
      "Probably the best known of all Indian dishes, butter chicken, also known as murgh makhani, is a staple dish at most Indian restaurants. The dish originated in Delhi during the 1950s, when a man named Kundan Lal Gujral opened his restaurant called Moti Mahal.",
  },
  {
    name: "Dosa",
    deliveryTime: 18,
    price: 90,
    discount: 0,
    rating: 4.2,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053240/zuck-food/dosa_ue13tp.jpg",
    description:
      "The thin pancake known as dosa is one of the most famous Indian dishes. It is made with soaked rice and black gram beans, which are ground into a paste and mixed to create a thick batter, usually left to ferment overnight.",
  },
  {
    name: "Idli",
    deliveryTime: 18,
    price: 90,
    discount: 0,
    rating: 4.2,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053241/zuck-food/idli_ryqpbo.jpg",
    description:
      "Idli is a traditional, savory Indian cake that is a popular breakfast item in numerous South Indian households, although it can be found throughout the country. It is made with a batter consisting of fermented lentils and rice, which is then steamed.",
  },
  {
    name: "Vada Pav",
    deliveryTime: 21,
    price: 30,
    discount: 0,
    rating: 4.9,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646054992/zuck-food/vadapav_neejyq.jpg",
    description:
      "Vada pav is one of Mumbai's favorite sandwiches, its name referring to the key ingredients: vada, or spicy mashed potatoes that are deep-fried in chickpea batter, and pav, or white bread rolls. This iconic street food is said to have originated from a street vendor named Ashok Vaidya, who worked near the Dadar train station in the 1960s and 1970s.",
  },
  {
    name: "Samosa",
    deliveryTime: 19,
    price: 30,
    discount: 0,
    rating: 4.6,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053238/zuck-food/samosa_yemnsb.jpg",
    description:
      "Due to their crunchy texture and a variety of different flavors, samosas provide a perfect introduction to the world of Indian cuisine for newcomers. These deep-fried, triangular pastries are filled with a variety of ingredients ranging from vegetables to meat, such as onions, lentils, spiced potatoes, peas, or ground meat.",
  },
  {
    name: "Gulab Jamun",
    deliveryTime: 14,
    price: 50,
    discount: 0,
    rating: 4.0,
    veg: true,
    type: "DESSERT",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053241/zuck-food/gulabjamun_nrrxcf.jpg",
    description:
      "Gulab jamun is a dessert based on milk solids that are kneaded into a dough, shaped into balls, and deep-fried in ghee. The balls then get soaked in a sugary concoction flavored with saffron, green cardamom, and rose water.",
  },
  {
    name: "Rasgulla",
    deliveryTime: 36,
    price: 80,
    discount: 5,
    rating: 4.5,
    veg: true,
    type: "DESSERT",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053246/zuck-food/rasgulla_jdztd3.jpg",
    description:
      "Rasgulla is a traditional sweet that is usually served at the end of a meal, like many other Indian milk-based desserts. It is prepared from chhena paneer dumplings and semolina dough, cooked together in a sugary syrup. The origin of rasgulla is the subject of a heated debate, with West Bengal and Odisha both claiming to be the birthplace of the dessert.",
  },
  {
    name: "Ras Malai",
    deliveryTime: 22,
    price: 210,
    discount: 10,
    rating: 3.2,
    veg: true,
    type: "DESSERT",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053243/zuck-food/rasmalai_sqtev4.jpg",
    description:
      "Ras malai is a popular Indian dessert consisting of white cream, sugar, milk, and cardamom-flavored paneer cheese known as chhana. Almonds, cashews, and saffron are often added to the dessert. Ras malai is of West Bengali origins, and is sometimes described as a rich cheesecake without a crust.",
  },
  {
    name: "Dal makhani",
    deliveryTime: 23,
    price: 140,
    discount: 10,
    rating: 2.7,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053240/zuck-food/dalmakhani_uofnra.jpg",
    description:
      "The dish is prepared with hefty amounts of ghee and various seasonings such as ginger garlic paste and chili, and it is slowly cooked in a rich, tomato-based sauce. The name makhani, meaning butter, stems from the last addition, a drizzle of melted ghee or butter that provides the typical velvety flavor of this classic.",
  },
  {
    name: "Misal",
    deliveryTime: 25,
    price: 120,
    discount: 7,
    rating: 4.1,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/misal_lhg1d9.jpg",
    description:
      "Misal is a specialty dish of the Indian state of Maharashtra, its name literally translated to a mixture of everything, so the ingredients vary from cook to cook. However, a combination of these ingredients is the most common in a typical misal: curd, pav, moth bean or pea curry, gravy, spiced potatoes, and garnishings such as onions, coriander, and tomatoes.",
  },
  {
    name: "Tandoori Chicken",
    deliveryTime: 48,
    price: 300,
    discount: 20,
    rating: 4.9,
    veg: false,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053238/zuck-food/tandoorichicken_bo8crc.jpg",
    description:
      "Tandoori chicken or tandoori murgh is one of the most popular dishes in Indian cuisine, its name derived from the Persian word tannur, meaning fire. The dish consists of chicken meat that is marinated in yogurt, seasoned with tandoori masala, nutmeg, and cumin, then placed on skewers.",
  },
  {
    name: "Chole Bhature",
    deliveryTime: 32,
    price: 130,
    discount: 8,
    rating: 1.7,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053239/zuck-food/cholebhature_pggze2.jpg",
    description:
      "At its core, chole bhature is a combination of two dishes: chole - a spicy chickpea curry, and bhature - a type of fried bread made with maida flour. Popular throughout North India, the dish was invented in Delhi in the 1940s.",
  },
  {
    name: "Shahi paneer",
    deliveryTime: 26,
    price: 180,
    discount: 10,
    rating: 4.2,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053238/zuck-food/shahipaneer_by16ra.jpg",
    description:
      "Originating from India's Moghul cuisine, shahi paneer is a cheese curry that is prepared with paneer cheese, onions, almond paste, and a rich, spicy tomato-cream sauce. The dish is typically accompanied by Indian breads such as naan, roti, or puri.",
  },
  {
    name: "Pav bhaji",
    deliveryTime: 44,
    price: 120,
    discount: 0,
    rating: 4.3,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/pavbhaji_b3pyzo.jpg",
    description:
      "Pav bhaji is a popular street snack originating from the Indian state of Maharashtra. It consists of a vegetable curry that is typically served with a soft bread roll known as pav. The dish was invented in the 1850s as a midnight meal by street vendors who prepared it with all the leftover vegetables from the day, which were then mashed and combined with spices and ghee butter.",
  },
  {
    name: "Chaat",
    deliveryTime: 18,
    price: 60,
    discount: 0,
    rating: 4.8,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053239/zuck-food/chaat_kc1kfb.jpg",
    description:
      " The name chaat is derived from a Hindi verb chaatna, meaning to lick, possibly referring to the finger-licking good quality of the dishes. Chaats are usually small, consumed on their own as a snack, or combined with other dishes to form a big meal.",
  },
  {
    name: "Pakora",
    deliveryTime: 19,
    price: 60,
    discount: 0,
    rating: 4.9,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/pakora_bt1k3i.jpg",
    description:
      "Pakora is a savory, deep-fried Indian snack made with pieces of vegetables such as cauliflower and eggplant. Although it is a quintessential Indian snack that can be easily found on numerous street corners, it can also be made at home. Traditionally, pakoras are at their most popular during spring, when the locals enjoy fried foods to celebrate the monsoon season.",
  },
  {
    name: "Paneer Tikka",
    deliveryTime: 24,
    price: 220,
    discount: 0,
    rating: 4.7,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/paneertikka_gej9am.jpg",
    description:
      "This North Indian tikka variety consists of a combination of marinated paneer cheese and vegetables that are cooked in a tandoor - a traditional Indian oven. This vegetarian version of tikka is based on paneer, a crumbly cheese with a soft texture.",
  },
  {
    name: "Chicken 65",
    deliveryTime: 27,
    price: 280,
    discount: 10,
    rating: 4.4,
    veg: false,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053239/zuck-food/chicken65_wurpzq.jpg",
    description:
      "Chicken 65 is a classic poultry dish with origins in Chennai, India. It consists of deep-fried chicken that is marinated in ginger, lemon, red chiles, and a variety of other spices. There are a few theories about the origin of chicken 65. The most popular theory says that it was created in Tamil Nadu by A. M. Buhari in 1965.",
  },
  {
    name: "Bhelpuri",
    deliveryTime: 14,
    price: 60,
    discount: 0,
    rating: 4.8,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053238/zuck-food/bhelpuri_s0m5yo.jpg",
    description:
      "Bhelpuri (also spelled bhel puri) is a type of chaat - a savory snack that is commonly served in cafés and street carts throughout India. There is a lot of debate about what should go in a bhelpuri, but the most commonly used ingredients include puffed rice, ground nuts, potatoes, fried noodles, onions, and chilis.",
  },
  {
    name: "Dhokla",
    deliveryTime: 22,
    price: 80,
    discount: 7,
    rating: 3.7,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053240/zuck-food/dhokla_llzebh.jpg",
    description:
      "Originating from the Indian state of Gujarat, dhokla is a vegetarian snack consisting of fermented chickpea batter and rice. Spices such as chili and ginger are added to the batter in order to improve the flavor of the dish. When baked, dhokla is often garnished with coriander, coconut, or chopped chilies, and it is typically accompanied by besan chutney.",
  },
  {
    name: "Medu Vada",
    deliveryTime: 19,
    price: 80,
    discount: 8,
    rating: 4.0,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/meduvada_gbexy2.jpg",
    description:
      "Medu vada is an Indian snack that is visually similar to a doughnut, consisting of a deep-fried batter made from black lentils and seasonings such as fenugreek, cumin, pepper, chili, and ginger. The fritters are often served for breakfast with coconut chutney and sambar on the side.",
  },
  {
    name: "Bombay Sandwich",
    deliveryTime: 24,
    price: 90,
    discount: 0,
    rating: 4.7,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053239/zuck-food/bombaysandwhich_gkw7rq.jpg",
    description:
      "Bombay sandwich is a traditional Indian sandwich originating from Mumbai, hence the name. In order to prepare it, green chutney is spread on a slice of crustless white sandwich bread, while butter is spread on the other slice. What goes in between the two slices is a medley of vegetables and spices such as sliced boiled potatoes, masala spices (cumin, fennel, black pepper cinnamon, chaat masala), tomatoes, green bell peppers, cucumbers, beetroot slices, and onion slices.",
  },
  {
    name: "Dabeli",
    deliveryTime: 26,
    price: 30,
    discount: 0,
    rating: 3.9,
    veg: true,
    type: "FAST_FOOD",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/dabeli_tfgtzm.jpg",
    description:
      "Although it originates from Kutch in Indian Gujarat, this filling snack is also enjoyed in other parts of the country. Dabeli combines toasted ladi pav buns and a filling that is made with mashed potatoes and a spice mix usually consisting of coriander, turmeric, cardamom, fennel seeds, coriander, chili peppers, and other spices.",
  },
  {
    name: "Kaju Katli",
    deliveryTime: 14,
    price: 440,
    discount: 8,
    rating: 4.9,
    veg: true,
    type: "DESSERT",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053241/zuck-food/kajukatli_t4rid7.jpg",
    description:
      "Kaju katli, also known as kaju barfi, is a traditional Indian dessert characterized by its diamond shape, made with cashew nuts, sugar, cardamom powder, and ghee butter. This sweet treat often comes wrapped in an edible silver foil, signifying luxury and appreciation for the consumer.",
  },
  {
    name: "Barfi",
    deliveryTime: 22,
    price: 260,
    discount: 0,
    rating: 4.0,
    veg: true,
    type: "DESSERT",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053238/zuck-food/barfi_cudo6k.jpg",
    description:
      "It is made with a base of condensed milk solids (khoa or khoya), granulated sugar, and ghee, and the most common ingredients added to the base include nuts, usually pistachios, cashews, and peanuts. However, fruits, saffron, rose water, gram flour, or almonds are also found in some regional varieties.",
  },
  {
    name: "Gajar Ka Halwa",
    deliveryTime: 32,
    price: 140,
    discount: 8,
    rating: 4.2,
    veg: true,
    type: "DESSERT",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053240/zuck-food/gajarkahalwa_iguvxs.jpg",
    description:
      "Gajar ka halwa is a sweet pudding made with grated carrots, milk, sugar, nuts, clarified butter known as ghee, and dried milk known as khoya. The dessert originated in Northern India and Pakistan, but today it's consumed throughout India as an everyday treat or a traditional sweet during numerous Indian festivals.",
  },
  {
    name: "Paneer Makhani",
    deliveryTime: 29,
    price: 180,
    discount: 9,
    rating: 3.3,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053242/zuck-food/paneermakhani_a7ubm5.jpg",
    description:
      "Paneer makhani is a traditional Indian curry originating from Punjab. The dish has a few versions, but it’s usually made with a combination of paneer cheese and a gravy consisting of butter, tomatoes, cashews, cream, green chili peppers, garam masala spices, cinnamon, cloves, cardamom, ginger, garlic, red chili powder, sugar, salt, turmeric, and fenugreek leaves.",
  },
  {
    name: "Pizza",
    deliveryTime: 40,
    price: 240,
    discount: 9,
    rating: 4.3,
    veg: true,
    type: "MAIN_COURSE",
    image:
      "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053243/zuck-food/pizza_kqy2tq.jpg",
    description:
      "But the pizza we all know today, made with tomato sauce, cheese, and numerous toppings, originated in Italy. It became popular in Naples in the 18th century as a cheap, nourishing food that was consumed mainly by peasants. The modern pizza as we know it today evolved from early Neapolitan flatbreads topped with lard, salt, and garlic.",
  },
];
