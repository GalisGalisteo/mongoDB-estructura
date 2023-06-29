use("youtube");
db.tags.insertMany(
    [
        {
            "name": "cars"
        },
        {
            "name": "cats"
        },
        {
            "name": "dogs"
        },
        {
            "name": "crazy"
        }
    ]
)

const tags_id = db.tags.find({}, { _id: 1 }).toArray();
const tag_cars_id = tags_id[0]._id;
const tag_cats_id = tags_id[1]._id;
const tag_dogs_id = tags_id[2]._id;
const tag_crazy_id = tags_id[3]._id;


db.users.insertMany(
    [
        {
            "email": "user1@example.com",
            "password": "password1",
            "user_name": "User1",
            "birth": ISODate("1990-01-01T00:00:00"),
            "gender": "male",
            "country": "Country 1",
            "zip": "12345",
            "playlists": [],
            "videos": [
                {
                    "_id": ObjectId(),
                    "title": "Video 1",
                    "description": "Description for Video 1",
                    "size": 100,
                    "file_name": "video1.mp4",
                    "duration": 630,
                    "thumbnail": "/img/thumbnail1.jpg",
                    "views": "1000",
                    "likes": "50",
                    "dislikes": "5",
                    "status": "public",
                    "tags": [
                        {
                            "_id": ObjectId(tag_cars_id),
                            "name": "cars"
                        }
                    ],
                    "published": ISODate("2022-01-01T21:00:00"),
                    "channel": {
                        "_id": ObjectId(),
                        "name": "Channel 1",
                        "description": "Description for Channel 1",
                        "date_created": ISODate("2023-06-07T00:00:00"),
                        "users_subscribed": [
                            {
                                "user_name": "User2",
                                "email": "user2@example.com"
                            },
                            {
                                "user_name": "User3",
                                "email": "user3@example.com"
                            }
                        ]
                    },
                    "users_liked": [
                        {
                            "user_name": "User1",
                            "user_email": "user1@example.com",
                            "datetime": ISODate("2022-01-01T21:01:00"),
                        },
                        {
                            "user_name": "User2",
                            "user_email": "user2@example.com",
                            "datetime": ISODate("2022-01-02T19:00:00"),
                        }
                    ],
                    "users_disliked": [
                        {
                            "user_name": "User3",
                            "user_email": "user3@example.com",
                            "datetime": ISODate("2022-01-02T21:01:00"),
                        },
                        {
                            "user_name": "User4",
                            "user_email": "user4@example.com",
                            "datetime": ISODate("2022-01-03T19:00:00"),
                        }
                    ],
                    "comments": [
                        {
                            "_id": ObjectId(),
                            "user_name": "User2",
                            "user_email": "user2@example.com",
                            "text": "Comment 1",
                            "datetime": ISODate("2022-01-02T19:00:00"),
                            "users_liked": [
                                {
                                    "user_name": "User1",
                                    "user_email": "user1@example.com",
                                    "datetime": ISODate("2022-01-01T21:01:00"),
                                },
                                {
                                    "user_name": "User3",
                                    "user_email": "user3@example.com",
                                    "datetime": ISODate("2022-01-02T22:00:00"),
                                }
                            ],
                            "users_disliked": [
                                {
                                    "user_name": "User4",
                                    "user_email": "user4@example.com",
                                    "datetime": ISODate("2022-01-04T19:00:00"),
                                }
                            ],
                        },
                        {
                            "_id": ObjectId(),
                            "user_name": "User3",
                            "user_email": "user3@example.com",
                            "text": "Comment 2",
                            "datetime": ISODate("2022-01-02T20:00:00"),
                        }
                    ]
                }
            ]
        },
        {
            "email": "user2@example.com",
            "password": "password2",
            "user_name": "User2",
            "birth": ISODate("1991-01-01T00:00:00"),
            "gender": "other",
            "country": "Country 2",
            "zip": "WE6 12345",
            "playlists": [],
            "videos": [
                {
                    "_id": ObjectId(),
                    "title": "Video 2",
                    "description": "Description for Video 2",
                    "size": 50,
                    "file_name": "video2.mp4",
                    "duration": 330,
                    "thumbnail": "/img/thumbnail2.jpg",
                    "views": "500",
                    "likes": "30",
                    "dislikes": "10",
                    "status": "public",
                    "tags": [
                        {
                            "_id": ObjectId(tag_cats_id),
                            "name": "cars"
                        }],
                    "published": ISODate("2022-02-01T21:00:00"),
                    "channel": {
                        "_id": ObjectId(),
                        "name": "Channel 2",
                        "description": "Description for Channel 2",
                        "date_created": ISODate("2023-06-08T00:00:00"),
                        "users_subscribed": [
                            {
                                "user_name": "User1",
                                "email": "user1@example.com"
                            }
                        ]
                    },
                    "users_liked": [
                        {
                            "user_name": "User1",
                            "user_email": "user1@example.com",
                            "datetime": ISODate("2022-02-01T21:01:00"),
                        }
                    ],
                    "users_disliked": [
                        {
                            "user_name": "User3",
                            "user_email": "user3@example.com",
                            "datetime": ISODate("2022-02-02T21:01:00"),
                        },
                        {
                            "user_name": "User4",
                            "user_email": "user4@example.com",
                            "datetime": ISODate("2022-02-03T19:00:00"),
                        }
                    ],
                    "comments": [
                        {
                            "_id": ObjectId(),
                            "user_name": "User1",
                            "user_email": "user1@example.com",
                            "text": "Comment 1",
                            "datetime": ISODate("2022-02-02T19:00:00"),
                            "users_liked": [
                                {
                                    "user_name": "User2",
                                    "user_email": "user2@example.com",
                                    "datetime": ISODate("2022-02-01T21:01:00"),
                                }
                            ],
                            "users_disliked": [
                                {
                                    "user_name": "User3",
                                    "user_email": "user3@example.com",
                                    "datetime": ISODate("2022-02-04T19:00:00"),
                                }
                            ],
                        },
                        {
                            "_id": ObjectId(),
                            "user_name": "User3",
                            "user_email": "user3@example.com",
                            "text": "Comment 2",
                            "datetime": ISODate("2022-02-02T20:00:00"),
                        }
                    ]
                }

            ]
        },
        {
            "email": "user3@example.com",
            "password": "password3",
            "user_name": "User3",
            "birth": ISODate("1992-01-01T00:00:00"),
            "gender": "female",
            "country": "Country 3",
            "zip": "08001",
            "playlists": [],
            "videos": [
                {
                    "_id": ObjectId(),
                    "title": "Video 3",
                    "description": "Description for Video 3",
                    "size": 150,
                    "file_name": "video3.mp4",
                    "duration": 430,
                    "thumbnail": "/img/thumbnail3.jpg",
                    "views": "1000",
                    "likes": "3000",
                    "dislikes": "100",
                    "status": "public",
                    "tags": [
                        {
                            "_id": ObjectId(tag_dogs_id),
                            "name": "dogs"
                        },
                        {
                            "_id": ObjectId(tag_crazy_id),
                            "name": "crazy"
                        }
                    ],
                    "published": ISODate("2022-03-01T21:00:00"),
                    "channel": {
                        "_id": ObjectId(),
                        "name": "Channel 3",
                        "description": "Description for Channel 3",
                        "date_created": ISODate("2023-06-09T00:00:00"),
                        "users_subscribed": [
                            {
                                "user_name": "User1",
                                "email": "user1@example.com"
                            },
                            {
                                "user_name": "User2",
                                "email": "user2@example.com"
                            }
                        ]
                    },
                    "users_liked": [
                        {
                            "user_name": "User1",
                            "user_email": "user1@example.com",
                            "datetime": ISODate("2022-03-01T21:01:00"),
                        }
                    ],
                    "users_disliked": [
                        {
                            "user_name": "User2",
                            "user_email": "user2@example.com",
                            "datetime": ISODate("2022-03-02T21:01:00"),
                        },
                        {
                            "user_name": "User4",
                            "user_email": "user4@example.com",
                            "datetime": ISODate("2022-03-03T19:00:00"),
                        }
                    ],
                    "comments": [
                        {
                            "_id": ObjectId(),
                            "user_name": "User2",
                            "user_email": "user2@example.com",
                            "text": "Comment 1",
                            "datetime": ISODate("2022-03-02T19:00:00"),
                            "users_liked": [
                                {
                                    "user_name": "User1",
                                    "user_email": "user1@example.com",
                                    "datetime": ISODate("2022-03-01T21:01:00"),
                                }
                            ],
                            "users_disliked": [
                                {
                                    "user_name": "User3",
                                    "user_email": "user3@example.com",
                                    "datetime": ISODate("2022-03-04T19:00:00"),
                                }
                            ],
                        },
                        {
                            "_id": ObjectId(),
                            "user_name": "User3",
                            "user_email": "user3@example.com",
                            "text": "Comment 2",
                            "datetime": ISODate("2022-03-02T20:00:00"),
                        }
                    ]
                }
            ]
        },
        {
            "email": "user4@example.com",
            "password": "password4",
            "user_name": "User4",
            "birth": ISODate("1993-01-01T00:00:00"),
            "gender": "prefer not to say",
            "country": "Country 4",
            "zip": "NY459298",
            "playlists": [],
            "videos": [
                {
                    "_id": ObjectId(),
                    "title": "Video 4",
                    "description": "Description for Video 4",
                    "size": 140,
                    "file_name": "video4.mp4",
                    "duration": 430,
                    "thumbnail": "/img/thumbnail4.jpg",
                    "views": "0",
                    "likes": "0",
                    "dislikes": "0",
                    "status": "private",
                    "tags": null,
                    "published": ISODate("2022-04-01T21:00:00"),
                    "channel": null,
                    "users_liked": null,
                    "users_disliked": null,
                    "comments": null
                }
            ]
        },
    ]
)

const user_id = db.users.find({}, { _id: 1 }).toArray();
const user_1_id = user_id[0]._id;
const user_2_id = user_id[1]._id;
const user_3_id = user_id[2]._id;
const user_4_id = user_id[3]._id;


db.users.updateOne(
    {
        _id: user_1_id
    },
    {
        $push: {
            playlists: [
                {
                    _id: ObjectId(),
                    name: "Playlist 1",
                    date_created: ISODate("2022-01-01T00:00:00"),
                    state: "public",
                    videos: [
                        ObjectId(user_1_id),
                        ObjectId(user_2_id)
                    ]
                },
                {
                    _id: ObjectId(),
                    name: "Playlist 2",
                    date_created: ISODate("2022-02-01T00:00:00"),
                    state: "private",
                    videos: [
                        ObjectId(user_3_id),
                        ObjectId(user_4_id)
                    ]
                }
            ]
        }
    }
)

db.users.updateOne(
    {
        _id: user_2_id
    },
    {
        $push: {
            playlists: [
                {
                    _id: ObjectId(),
                    name: "Playlist 1",
                    date_created: ISODate("2022-03-01T00:00:00"),
                    state: "public",
                    videos: [
                        ObjectId(user_1_id),
                        ObjectId(user_3_id)
                    ]
                }
            ]
        }
    }
)

db.users.updateOne(
    {
        _id: user_3_id
    },
    {
        $push: {
            playlists: [
                {
                    _id: ObjectId(),
                    name: "Playlist 1",
                    date_created: ISODate("2022-04-01T00:00:00"),
                    state: "public",
                    videos: [
                        ObjectId(user_1_id),
                        ObjectId(user_2_id),
                        ObjectId(user_4_id)
                    ]
                },
                {
                    _id: ObjectId(),
                    name: "Playlist 2",
                    date_created: ISODate("2022-04-01T00:00:00"),
                    state: "public",
                    videos: [
                        ObjectId(user_3_id)
                    ]
                }
            ]
        }
    }
)


