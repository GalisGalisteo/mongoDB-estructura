use('cul_d_ampolla');

db.suppliers.insertMany(
	[
		{
			"name": "tusgafas",
			"address": {
				"street": "Poligono industrial Can Serra, calle A",
				"num": "34",
				"floor": null,
				"door": null,
				"city": "Sabadell",
				"zip": "08212",
				"country": "Spain"
			},
			"tel": "+34936457283",
			"fax": "+34936457284",
			"nif": "ES46283048G",
			"brands": [
				"Libbey",
				"Bormioli Rocco"
			]
		},
		{
			"name": "veoveo",
			"address": {
				"street": "Calle Industrial",
				"num": "14B",
				"floor": 1,
				"door": 1,
				"city": "Terrassa",
				"zip": "08583",
				"country": "Spain"
			},
			"tel": "+34936320943",
			"fax": null,
			"nif": "ES72930475X",
			"brands": [
				"Riedel",
				"Schott Zwiesel"
			]
		},
		{
			"name": "hermanos gafunos",
			"address": {
				"street": "Poligono industrial Can Riba, calle C",
				"num": "57",
				"floor": 2,
				"door": 2,
				"city": "Martorell",
				"zip": "08903",
				"country": "Spain",
			},
			"tel": "+34932638495",
			"fax": "+34932638495",
			"nif": "ES73950375V",
			"brands": [
				"RayBan",
				"Waterford"
			]
		}
	]
)

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
				"country": "Spain"
			},
			"tel": "+34629364850",
			"email": "laurarodriguez@gmail.com",
			"registration_date": ISODate("2021-11-08T10:30:00"),
			"recommended_by": {},
			"orders": [
				{
					"_id": 1,
					"items": [
						{
							"brand": "Bormioli Rocco",
							"supplier": "tusgafas",
							"frame_type": "floating",
							"frame_color": "blue",
							"lens_gradation": 1.50,
							"lens_color": "transparent",
							"quantity": 1,
							"price": 200.00,
						},
						{
							"brand": "Schott Zwiesel",
							"supplier": "veoveo",
							"frame_type": "horn-rimmed",
							"frame_color": "brown",
							"lens_gradation": 2.00,
							"lens_color": "transparent",
							"quantity": 2,
							"price": 300.00
						}
					],
					"sale_date": ISODate("2022-05-15T18:30:00"),
					"sold_by": {
						"first_name": "Montse",
						"last_name": "Garcia"
					}
				},
			]
		},
		{
			"first_name": "Amelia",
			"last_name": "Clark",
			"address": {
				"street": "Maple Avenue",
				"num": "11E",
				"floor": "10th",
				"door": "A",
				"city": "Los Angeles",
				"zip": "90003",
				"country": "USA"
			},
			"tel": "+11122334477",
			"email": "amelia.clark@example.com",
			"registration_date": ISODate("2021-11-10T11:30:00"),
			"recommended_by": {},
			"orders": [
				{
					"_id": 2,
					"items": [
						{
							"brand": "Waterford",
							"supplier": "hermanos gafunos",
							"frame_type": "floating",
							"frame_color": "silver",
							"lens_gradation": 1.75,
							"lens_color": "mirrored",
							"quantity": 1,
							"price": 250.00
						}
					],
					"sale_date": ISODate("2022-06-20T09:30:00"),
					"sold_by": {
						"first_name": "Juan",
						"last_name": "Martinez"
					}
				}
			]
		},
		{
			"first_name": "William",
			"last_name": "Anderson",
			"address": {
				"street": "Elm Avenue",
				"num": "12",
				"floor": "6th",
				"door": "C2",
				"city": "Los Angeles",
				"zip": "90002",
				"country": "USA"
			},
			"tel": "+11122334466",
			"email": "william.anderson@example.com",
			"registration_date": ISODate("2021-12-01T08:30:00"),
			"recommended_by": {
				"first_name": "Laura",
				"last_name": "Rodriguez",
			},
			"orders": [
				{
					"_id": 3,
					"items": [
						{
							"brand": "Libbey",
							"supplier": "tusgafas",
							"frame_type": "horn-rimmed",
							"frame_color": "black",
							"lens_gradation": 2.50,
							"lens_color": "transparent",
							"quantity": 1,
							"price": 350.00
						},
						{
							"brand": "Waterford",
							"supplier": "hermanos gafunos",
							"frame_type": "floating",
							"frame_color": "silver",
							"lens_gradation": 1.75,
							"lens_color": "mirrored",
							"quantity": 1,
							"price": 250.00
						},
						{
							"brand": "RayBan",
							"supplier": "hermanos gafunos",
							"frame_type": "metal",
							"frame_color": "gold",
							"lens_gradation": 3.00,
							"lens_color": "transparent",
							"quantity": 2,
							"price": 450.00
						}
					],
					"sale_date": ISODate("2022-07-28T10:30:00"),
					"sold_by": {
						"first_name": "Juan",
						"last_name": "Martinez"
					}
				}
			]
		},
		{
			"first_name": "James",
			"last_name": "Taylor",
			"address": {
				"street": "High Street",
				"num": "5W",
				"floor": null,
				"door": null,
				"city": "London",
				"zip": "W1K 2PN",
				"country": "United Kingdom"
			},
			"tel": "+447812345679",
			"email": "james.taylor@example.com",
			"registration_date": ISODate("2022-09-30T14:30:00"),
			"recommended_by": {
				"first_name": "Amelia",
				"last_name": "Clark"
			},
			"orders": [
				{
					"_id": 4,
					"items": [
						{
							"brand": "Schott Zwiesel",
							"supplier": "veoveo",
							"frame_type": "horn-rimmed",
							"frame_color": "brown",
							"lens_gradation": 2.00,
							"lens_color": "transparent",
							"quantity": 1,
							"price": 300.00
						}
					],
					"sale_date": ISODate("2022-09-12T16:30:00"),
					"sold_by": {
						"first_name": "Alicia",
						"last_name": "Mendoza"
					}
				}
			]
		},
		{
			"first_name": "Liam",
			"last_name": "Sanchez",
			"address": {
				"street": "Calle Principal",
				"num": "19",
				"floor": "2",
				"door": "izq",
				"city": "Madrid",
				"zip": "28003",
				"country": "Spain",
			},
			"tel": "+3466889900",
			"email": "liam.sanchez@example.com",
			"registration_date": ISODate("2022-03-05T19:30:00"),
			"recommended_by": {
				"first_name": "Laura",
				"last_name": "Rodriguez",
			},
			"orders": [
				{
					"_id": 5,
					"items": [
						{
							"brand": "Bormioli Rocco",
							"supplier": "tusgafas",
							"frame_type": "floating",
							"frame_color": "blue",
							"lens_gradation": 1.50,
							"lens_color": "transparent",
							"quantity": 1,
							"price": 200.00
						}
					],
					"sale_date": ISODate("2022-09-25T19:30:00"),
					"sold_by": {
						"first_name": "Dani",
						"last_name": "Gonzalez"
					}
				}
			]
		}
	]
)

db.items.insertMany(
	[
		{
			"brand": "Libbey",
			"supplier": "tusgafas",
			"frame_type": "horn-rimmed",
			"frame_color": "black",
			"lens_gradation": 2.50,
			"lens_color": "transparent",
			"price": 350.00
		},
		{
			"brand": "Waterford",
			"supplier": "hermanos gafunos",
			"frame_type": "floating",
			"frame_color": "silver",
			"lens_gradation": 1.75,
			"lens_color": "mirrored",
			"price": 250.00
		},
		{
			"brand": "RayBan",
			"supplier": "hermanos gafunos",
			"frame_type": "metal",
			"frame_color": "gold",
			"lens_gradation": 3.00,
			"lens_color": "transparent",
			"price": 450.00
		},
		{
			"brand": "Schott Zwiesel",
			"supplier": "veoveo",
			"frame_type": "horn-rimmed",
			"frame_color": "brown",
			"lens_gradation": 2.00,
			"lens_color": "transparent",
			"price": 300.00
		},
		{
			"brand": "Bormioli Rocco",
			"supplier": "tusgafas",
			"frame_type": "floating",
			"frame_color": "blue",
			"lens_gradation": 1.50,
			"lens_color": "transparent",
			"price": 200.00
		}
	]
)