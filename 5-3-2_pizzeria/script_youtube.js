use('vegan_pizza');

db.clients.insertMany(
    [
        {
            "first_name": "Laura",
            "last_name": "Rodriguez",
            "address": {
                "street": "Calle Mayor",
                "num": "19",
                "floor": "1o",
                "door": "1a",
                "city": "Madrid",
                "zip": "28080",
                "province": "Madrid",
            },
            "tel": "+33629364850",
            "orders": [
                {
                    "_id": ObjectId(),
                    "type": "delivery",
                    "date_time": ISODate("2022-01-15T20:34:00"),
                    "items": [
                        {
                            "category": "pizzas",
                            "name": "barbecue",
                            "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
                            "quantity": 2,
                            "price": 9.50
                        },
                        {
                            "category": "drinks",
                            "name": "orange soda",
                            "description": "33cl",
                            "quantity": 2,
                            "price": 2.00
                        }
                    ],
                    "total": 22.00,
                    "location": "sol"
                },
                {
                    "_id": ObjectId(),
                    "type": "take-out",
                    "date_time": ISODate("2022-01-22T21:00:00"),
                    "items": [{
                        "category": "pizzas",
                        "name": "barbecue",
                        "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
                        "quantity": 1,
                        "price": 9.50
                    },
                    {
                        "category": "drinks",
                        "name": "orange soda",
                        "description": "33cl",
                        "quantity": 2,
                        "price": 2.00
                    }
                    ],
                    "total": 13.50,
                    "location": "malasaña"
                }
            ]
        },
        {
            "first_name": "Amelia",
            "last_name": "Clark",
            "address": {
                "street": "Maple Avenue",
                "num": "11",
                "floor": null,
                "door": null,
                "city": "Madrid",
                "zip": "28081",
                "province": "Madrid",
            },
            "tel": "+1122334477",
            "orders": [
                {
                    "_id": ObjectId(),
                    "type": "dine-in",
                    "date_time": ISODate("2022-01-15T20:54:00"),
                    "items": [
                        {
                            "category": "pizzas",
                            "name": "funghi",
                            "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
                            "quantity": 3,
                            "price": 8.50
                        },
                        {
                            "category": "pizzas",
                            "name": "barbecue",
                            "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
                            "quantity": 1,
                            "price": 9.50
                        },
                        {
                            "category": "drinks",
                            "name": "coke",
                            "description": "33cl",
                            "quantity": 3,
                            "price": 2.00
                        }
                    ],
                    "total": 39.50,
                    "location": "sol"
                }
            ]
        },
        {
            "first_name": "William",
            "last_name": "Anderson",
            "address": {
                "street": "Elm Avenue",
                "num": "12",
                "floor": "1",
                "door": "A",
                "city": "Madrid",
                "zip": "28010",
                "province": "Madrid",
            },
            "tel": "+1122334466",
            "orders": [
                {
                    "_id": ObjectId(),
                    "type": "delivery",
                    "date_time": ISODate("2022-01-16T19:45:00"),
                    "items": [
                        {
                            "category": "burgers",
                            "name": "vegan cheese burger",
                            "description": "vegan beef patty, cheese, onion, tomato, lettuce",
                            "quantity": 2,
                            "price": 7.50
                        },
                        {
                            "category": "drinks",
                            "name": "lemon soda",
                            "description": "33cl",
                            "quantity": 1,
                            "price": 2.00
                        },
                        {
                            "category": "drinks",
                            "name": "orange soda",
                            "description": "33cl",
                            "quantity": 1,
                            "price": 2.00
                        }
                    ],
                    "total": 17.00,
                    "location": "lavapies"
                }
            ]
        },
        {
            "first_name": "James",
            "last_name": "Taylor",
            "address": {
                "street": "High Street",
                "num": "5A",
                "floor": "3B",
                "door": "2",
                "city": "Madrid",
                "zip": "28020",
                "province": "Madrid",
            },
            "tel": "+447812345679",
            "orders": [
                {
                    "_id": ObjectId(),
                    "type": "take-out",
                    "date_time": ISODate("2022-01-16T21:10:00"),
                    "items": [{
                        "category": "pizzas",
                        "name": "margherita",
                        "description": "tomato sauce, vegan mozzarella cheese",
                        "quantity": 1,
                        "price": 8.00
                    },
                    {
                        "category": "pizzas",
                        "name": "funghi",
                        "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
                        "quantity": 1,
                        "price": 8.50
                    },
                    {
                        "category": "drinks",
                        "name": "orange soda",
                        "description": "33cl",
                        "quantity": 2,
                        "price": 2.00
                    }
                    ],
                    "total": 20.50,
                    "location": "lavapies"
                }
            ]
        },
        {
            "first_name": "Liam",
            "last_name": "Sanchez",
            "address": {
                "street": "Calle Principal",
                "num": "19",
                "floor": "A",
                "door": "izq",
                "city": "Madrid",
                "zip": "28003",
                "province": "Madrid",
            },
            "tel": "+3466889900",
            "orders": [
                {
                    "_id": ObjectId(),
                    "type": "delivery",
                    "date_time": ISODate("2022-01-17T19:00:00"),
                    "items": [{
                        "category": "pizzas",
                        "name": "funghi",
                        "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
                        "quantity": 1,
                        "price": 8.50
                    },
                    {
                        "category": "pizzas",
                        "name": "barbecue",
                        "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
                        "quantity": 1,
                        "price": 9.50
                    }
                    ],
                    "total": 23.00,
                    "location": "malasaña"
                }
            ]
        },
    ]
)

db.locations.insertMany(
    [
        {
            "name": "sol",
            "address": {
                "street": "calle sol",
                "num": "1",
                "city": "Madrid",
                "zip": "28001",
                "province": "Madrid",
            },
            "tel": "+34911728394"
        },
        {
            "name": "lavapies",
            "address": {
                "street": "calle lavapies",
                "num": "1",
                "city": "Madrid",
                "zip": "28010",
                "province": "Madrid",
            },
            "tel": "+34911728399"
        },
        {
            "name": "malasaña",
            "address": {
                "street": "calle malasaña",
                "num": "3",
                "city": "Madrid",
                "zip": "28020",
                "province": "Madrid",
            },
            "tel": "+34911728396"
        }
    ]
)

db.employees.insertMany(
    [
        {
            "first_name": "Juan",
            "last_name": "Martinez",
            "nif": "80192468H",
            "tel": "+34628147392",
            "description": "cook",
            "location": "sol"
        },
        {
            "first_name": "Montse",
            "last_name": "Garcia",
            "nif": "97631527J",
            "tel": "+34634529671",
            "description": "cook",
            "location": "sol"
        },
        {
            "first_name": "Alicia",
            "last_name": "Mendoza",
            "nif": "41289064M",
            "tel": "+34609782145",
            "description": "delivery",
            "location": "sol"
        },
        {
            "first_name": "Dani",
            "last_name": "Gonzalez",
            "nif": "67893251R",
            "tel": "+34612438790",
            "description": "delivery",
            "location": "sol"
        },
        {
            "first_name": "Jose",
            "last_name": "Perez",
            "nif": "34521789S",
            "tel": "+34630947581",
            "description": "cook",
            "location": "lavapies"
        },
        {
            "first_name": "Ricardo",
            "last_name": "Porto",
            "nif": "56381924T",
            "tel": "+34623401856",
            "description": "delivery",
            "location": "lavapies"
        },
        {
            "first_name": "Angeles",
            "last_name": "De La Torre",
            "nif": "21893456N",
            "tel": "+34645782913",
            "description": "cook",
            "location": "lavapies"
        },
        {
            "first_name": "Manuel",
            "last_name": "Priego",
            "nif": "40283749G",
            "tel": "+34627839467",
            "description": "delivery",
            "location": "lavapies"
        }
    ]
)

db.pizza_categories.insertMany(
    [
        {
            "name": "wheat (white)"
        },
        {
            "name": "wheat (whole)"
        },
        {
            "name": "einkorn (whole)"
        },
        {
            "name": "spelt (white)"
        },
        {
            "name": "gluten-free"
        }
    ]

)

const pizza_categories_id = db.pizza_categories.find({}, { _id: 1 }).toArray();
const wheat_white_category = pizza_categories_id[0]._id;
const wheat_whole_category = pizza_categories_id[1]._id;
const einkorn_category = pizza_categories_id[2]._id;
const spelt_category = pizza_categories_id[3]._id;
const gluten_free_category = pizza_categories_id[4]._id;

db.items.insertMany(
    [
        {
            "category": "pizzas",
            "pizza_category_id": wheat_white_category._id,
            "name": "margherita",
            "description": "tomato sauce, vegan mozzarella cheese",
            "picture": "/img/001_margherita.jpeg",
            "price": 8.00
        },
        {
            "category": "pizzas",
            "pizza_category_id": wheat_whole_category._id,
            "name": "margherita",
            "description": "tomato sauce, vegan mozzarella cheese",
            "picture": "/img/001_margherita.jpeg",
            "price": 8.00
        },
        {
            "category": "pizzas",
            "pizza_category_id": einkorn_category._id,
            "name": "margherita",
            "description": "tomato sauce, vegan mozzarella cheese",
            "picture": "/img/001_margherita.jpeg",
            "price": 8.00
        },
        {
            "category": "pizzas",
            "pizza_category_id": spelt_category._id,
            "name": "margherita",
            "description": "tomato sauce, vegan mozzarella cheese",
            "picture": "/img/001_margherita.jpeg",
            "price": 8.00
        },
        {
            "category": "pizzas",
            "pizza_category_id": gluten_free_category._id,
            "name": "margherita",
            "description": "tomato sauce, vegan mozzarella cheese",
            "picture": "/img/001_margherita.jpeg",
            "price": 8.00
        },
        {
            "category": "pizzas",
            "pizza_category_id": wheat_white_category._id,
            "name": "funghi",
            "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
            "picture": "/img/002_funghi.jpeg",
            "price": 8.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": wheat_whole_category._id,
            "name": "funghi",
            "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
            "picture": "/img/002_funghi.jpeg",
            "price": 8.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": einkorn_category._id,
            "name": "funghi",
            "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
            "picture": "/img/002_funghi.jpeg",
            "price": 8.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": spelt_category._id,
            "name": "funghi",
            "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
            "picture": "/img/002_funghi.jpeg",
            "price": 8.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": gluten_free_category._id,
            "name": "funghi",
            "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
            "picture": "/img/002_funghi.jpeg",
            "price": 8.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": wheat_white_category._id,
            "name": "barbecue",
            "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
            "picture": "/img/003_barbecue.jpeg",
            "price": 9.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": wheat_whole_category._id,
            "name": "barbecue",
            "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
            "picture": "/img/003_barbecue.jpeg",
            "price": 9.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": einkorn_category._id,
            "name": "barbecue",
            "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
            "picture": "/img/003_barbecue.jpeg",
            "price": 9.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": spelt_category._id,
            "name": "barbecue",
            "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
            "picture": "/img/003_barbecue.jpeg",
            "price": 9.50
        },
        {
            "category": "pizzas",
            "pizza_category_id": gluten_free_category._id,
            "name": "barbecue",
            "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
            "picture": "/img/003_barbecue.jpeg",
            "price": 9.50
        },
        {
            "category": "burgers",
            "pizza_category_id": null,
            "name": "vegan beef burger",
            "description": "vegan beef patty, onion, tomato, lettuce",
            "picture": "/img/004_beef_burger.jpeg",
            "price": 6.50
        },
        {
            "category": "burgers",
            "pizza_category_id": null,
            "name": "vegan cheese burger",
            "description": "vegan beef patty, cheese, onion, tomato, lettuce",
            "picture": "/img/005_cheese_burger.jpeg",
            "price": 7.50
        },
        {
            "category": "burgers",
            "pizza_category_id": null,
            "name": "vegan crispy chicken burger",
            "description": "vegan crispy chicken, cheese, tomato, lettuce",
            "picture": "/img/006_crispy_chicken_burger.jpeg",
            "price": 8.00
        },
        {
            "category": "drinks",
            "pizza_category_id": null,
            "name": "mineral water",
            "description": "50cl",
            "picture": "/img/007_water.jpeg",
            "price": 1.50
        },
        {
            "category": "drinks",
            "pizza_category_id": null,
            "name": "sparkling water",
            "description": "50cl",
            "picture": "/img/008_sparkling_water.jpeg",
            "price": 1.50
        },
        {
            "category": "drinks",
            "pizza_category_id": null,
            "name": "coke",
            "description": "33cl",
            "picture": "/img/009_coke.jpeg",
            "price": 2.00
        },
        {
            "category": "drinks",
            "pizza_category_id": null,
            "name": "lemon soda",
            "description": "33cl",
            "picture": "/img/010_lemon_soda.jpeg",
            "price": 2.00
        },
        {
            "category": "drinks",
            "pizza_category_id": null,
            "name": "orange soda",
            "description": "33cl",
            "picture": "/img/011_orange_soda.jpeg",
            "price": 2.00
        },
        {
            "category": "drinks",
            "pizza_category_id": null,
            "name": "beer",
            "description": "33cl",
            "picture": "/img/012_beer.jpeg",
            "price": 2.00
        }
    ]

)

db.deliveries.insertMany(
    [
        {
            "client": {
                "first_name": "Laura",
                "last_name": "Rodriguez",
                "address": {
                    "street": "Calle Mayor",
                    "num": "19",
                    "floor": "1o",
                    "door": "1a",
                    "city": "Madrid",
                    "zip": "28080",
                    "province": "Madrid",
                },
                "tel": "+33629364850"
            },
            "order": {
                "_id": 1,
                "date_time": ISODate("2022-01-15T20:34:00"),
                "items": [
                    {
                        "category": "pizzas",
                        "name": "barbecue",
                        "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
                        "quantity": 2,
                        "price": 9.50
                    },
                    {
                        "category": "drinks",
                        "name": "orange soda",
                        "description": "33cl",
                        "quantity": 2,
                        "price": 2.00
                    }
                ],
                "total": 22.00,
                "location": "sol"
            },
            "employee": {
                "first_name": "Alicia",
                "last_name": "Mendoza",
                "tel": "609782145",
            },
            "date_time": ISODate("2022-01-15T21:04:00")
        },
        {
            "client": {
                "first_name": "William",
                "last_name": "Anderson",
                "address": {
                    "street": "Elm Avenue",
                    "num": "12",
                    "floor": "1",
                    "door": "A",
                    "city": "Madrid",
                    "zip": "28010",
                    "province": "Madrid",
                },
                "tel": "+1122334466"
            },
            "order": {
                "_id": 3,
                "date_time": ISODate("2022-01-16T19:45:00"),
                "items": [
                    {
                        "category": "burgers",
                        "name": "vegan cheese burger",
                        "description": "vegan beef patty, cheese, onion, tomato, lettuce",
                        "quantity": 2,
                        "price": 7.50
                    },
                    {
                        "category": "drinks",
                        "name": "lemon soda",
                        "description": "33cl",
                        "quantity": 1,
                        "price": 2.00
                    },
                    {
                        "category": "drinks",
                        "name": "orange soda",
                        "description": "33cl",
                        "quantity": 1,
                        "price": 2.00
                    }
                ],
                "total": 17.00,
                "location": "lavapies"
            },
            "employee": {
                "first_name": "Dani",
                "last_name": "Gonzalez",
                "tel": "612438790"
            },
            "date_time": ISODate("2022-01-16T20:15:00")
        },
        {
            "client": {
                "first_name": "Liam",
                "last_name": "Sanchez",
                "address": {
                    "street": "Calle Principal",
                    "num": "19",
                    "floor": "A",
                    "door": "izq",
                    "city": "Madrid",
                    "zip": "28003",
                    "province": "Madrid",
                },
                "tel": "+3466889900"
            },
            "order": {
                "_id": 5,
                "date_time": ISODate("2022-01-17T19:00:00"),
                "items": [{
                    "category": "pizzas",
                    "name": "funghi",
                    "description": "tomato sauce, vegan mozzarella cheese, onions, mushrooms",
                    "quantity": 1,
                    "price": 8.50
                },
                {
                    "category": "pizzas",
                    "name": "barbecue",
                    "description": "tomato sauce, vegan mozzarella cheese, vegan beef, barbacue sauce, chilli",
                    "quantity": 1,
                    "price": 9.50
                }
                ],
                "total": 23.00,
                "location": "malasaña"
            },
            "employee": {
                "first_name": "Ricardo",
                "last_name": "Porto",
                "tel": "623401856"
            },
            "date_time": ISODate("2022-01-17T20:30:00")
        }
    ]
)


db.clients.aggregate([
    { $unwind: "$orders" },
    { $sort: { "date_time": 1 } }
  ])
  