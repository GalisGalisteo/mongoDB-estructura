use("spotify");


db.artists.insertMany(
    [
        {
            _id: ObjectId(),
            name: "Artist 1",
            image: "./img/Artist_1.jpeg",
            related_artists: [], // from artists collection
            followed_by: [], // from users collection
            albums:
                [
                    {
                        _id: ObjectId(),
                        title: "Album 1",
                        published_date: ISODate('2019-01-01T00:00:00'),
                        image: "./img/Artist_1_Album_1.jpeg",
                        liked_by: [], // from users collection
                        songs:
                            [
                                {
                                    _id: ObjectId(),
                                    title: "Song 1",
                                    duration: 240,
                                    times_played: 100,
                                    liked_by: [], // from users collection
                                },
                                {
                                    _id: ObjectId(),
                                    title: "Song 2",
                                    duration: 200,
                                    times_played: 70,
                                    liked_by: [], // from users collection
                                },
                                {
                                    _id: ObjectId(),
                                    title: "Song 3",
                                    duration: 260,
                                    times_played: 120,
                                    liked_by: [], // from users collection
                                }
                            ]
                    }
                ]
        },
        {
            _id: ObjectId(),
            name: "Artist 2",
            image: "./img/Artist_2.jpeg",
            related_artists: [], // from artists collection
            followed_by: [], // from users collection
            albums:
                [
                    {
                        _id: ObjectId(),
                        title: "Album 1",
                        published_date: ISODate('2021-01-01T00:00:00'),
                        image: "./img/Artist_2_Album_1.jpeg",
                        liked_by: [], // from users collection
                        songs:
                            [
                                {
                                    _id: ObjectId(),
                                    title: "Song 1",
                                    duration: 180,
                                    times_played: 40,
                                    liked_by: [], // from users collection
                                },
                                {
                                    _id: ObjectId(),
                                    title: "Song 2",
                                    duration: 210,
                                    times_played: 60,
                                    liked_by: [], // from users collection
                                },
                                {
                                    _id: ObjectId(),
                                    title: "Song 3",
                                    duration: 230,
                                    times_played: 20,
                                    liked_by: [], // from users collection
                                }
                            ]
                    },
                    {
                        _id: ObjectId(),
                        title: "Album 2",
                        published_date: ISODate('2022-01-01T00:00:00'),
                        image: "./img/Artist_2_Album_2.jpeg",
                        liked_by: [], // from users collection
                        songs:
                            [
                                {
                                    _id: ObjectId(),
                                    title: "Song 1",
                                    duration: 1000,
                                    times_played: 40,
                                    liked_by: [], // from users collection
                                }
                            ]
                    }
                ]
        },
        {
            _id: ObjectId(),
            name: "Artist 3",
            image: "./img/Artist_3.jpeg",
            related_artists: [], // from artists collection
            followed_by: [], // from users collection
            albums:
                [
                    {
                        _id: ObjectId(),
                        title: "Album 1",
                        published_date: ISODate('2020-01-01T00:00:00'),
                        image: "./img/Artist_3_Album_1.jpeg",
                        liked_by: [], // from users collection
                        songs:
                            [
                                {
                                    _id: ObjectId(),
                                    title: "Song 1",
                                    duration: 440,
                                    times_played: 90,
                                    liked_by: [], // from users collection
                                },
                                {
                                    _id: ObjectId(),
                                    title: "Song 2",
                                    duration: 600,
                                    times_played: 10,
                                    liked_by: [], // from users collection
                                }
                            ]
                    }
                ]
        }
    ]
)

const artists_id = db.artists.distinct("_id");
const artist_1 = artists_id[0];
const artist_2 = artists_id[1];
const artist_3 = artists_id[2];

const albums_id = db.artists.distinct("albums._id");
const artist_1_album_1 = albums_id[0];
const artist_2_album_1 = albums_id[1];
const artist_2_album_2 = albums_id[2];
const artist_3_album_1 = albums_id[3];


const songs_id = db.artists.distinct("albums.songs._id");
const artist_1_album_1_song_1 = songs_id[0];
const artist_1_album_1_song_2 = songs_id[1];
const artist_1_album_1_song_3 = songs_id[2];
const artist_2_album_1_song_1 = songs_id[3];
const artist_2_album_1_song_2 = songs_id[4];
const artist_2_album_1_song_3 = songs_id[5];
const artist_2_album_2_song_1 = songs_id[6];
const artist_3_album_1_song_1 = songs_id[7];
const artist_3_album_1_song_2 = songs_id[8];



db.users.insertMany(
    [
        {
            _id: ObjectId(),
            type: "premium", // "free" or "premium",
            email: "user_1@mail.com",
            password: "password1",
            user_name: "user_1",
            birth: ISODate("1990-03-20T00:00:00"),
            gender: "prefer not to say", // "prefer not to say", "other", "female" or "male",
            // if premium:
            subscription: {
                join_date: ISODate("2020-03-01T00:00:00"),
                renewal_date: ISODate("2023-07-01T00:00:00"),
                payment_method: {
                    credit_card: {
                        number: "4532015112894567",
                        exp_date: ISODate("2024-09-01T00:00:00"),
                        sec_code: "012"

                    },
                    paypal: null
                },
                payments:
                    [
                        {
                            _id: ObjectId(),
                            date: ISODate("2023-06-01T00:00:00"),
                            total: 9.99
                        },
                        {
                            _id: ObjectId(),
                            date: ISODate("2023-05-01T00:00:00"),
                            total: 9.99
                        },
                        {
                            _id: ObjectId(),
                            date: ISODate("2023-04-01T00:00:00"),
                            total: 9.99
                        }
                    ],
            },
            playlists: [], // from playlists collection
            artists_following: [
                artist_1, 
                artist_2, 
                artist_3
            ], // from artists collection
            albums_liked: [
                artist_1_album_1, 
                artist_2_album_1, 
                artist_2_album_2, 
                artist_3_album_1
            ], // from artists collection
            songs_liked: [
                artist_1_album_1_song_1, 
                artist_1_album_1_song_2, 
                artist_2_album_1_song_3
            ], // from artists collection
        },
        {
            _id: ObjectId(),
            type: "free", // "free" or "premium",
            email: "user_2@mail.com",
            password: "password2",
            user_name: "user_2",
            birth: ISODate("1991-02-22T00:00:00"),
            gender: "other", // "prefer not to say", "other", "female" or "male",
            // if premium:
            subscription: null,
            playlists: [], // from playlists collection
            artists_following: [artist_3], // from artists collection
            albums_liked: [], // from artists collection
            songs_liked: [
                artist_2_album_1_song_1, 
                artist_2_album_2_song_1, 
                artist_3_album_1_song_1
            ], // from artists collection
        },
        {
            _id: ObjectId(),
            type: "premium", // "free" or "premium",
            email: "user_3@mail.com",
            password: "password3",
            user_name: "user_3",
            birth: ISODate("1983-07-20T00:00:00"),
            gender: "female", // "prefer not to say", "other", "female" or "male",
            // if premium:
            subscription: {
                join_date: ISODate("2019-01-01T00:00:00"),
                renewal_date: ISODate("2023-08-01T00:00:00"),
                payment_method: {
                    credit_card: null,
                    paypal: {
                        user_name: "user_3"
                    }
                },
                payments:
                    [
                        {
                            _id: ObjectId(),
                            date: ISODate("2022-09-01T00:00:00"),
                            total: 99.99
                        }
                    ],
            },
            playlists: [], // from playlists collection
            artists_following: [
                artist_1, 
                artist_2
            ], // from artists collection
            albums_liked: [
                artist_1_album_1, 
                artist_2_album_1, 
                artist_2_album_2, 
                artist_3_album_1
            ], // from artists collection
            songs_liked: [
                artist_1_album_1_song_2, 
                artist_1_album_1_song_3, 
                artist_2_album_1_song_2, 
                artist_2_album_2_song_1, 
                artist_3_album_1_song_2
            ], // from artists collection
        }
    ]
)

const users_id = db.users.distinct("_id");
const user_1 = users_id[0];
const user_2 = users_id[1];
const user_3 = users_id[2];


db.playlists.insertMany(
    [
        {
            _id: ObjectId(),
            name: "Playlist_1_user_1",
            total_songs: 2,
            date_created: ISODate("2022-10-01T00:00:00"),
            created_by: user_1, // from users collection
            status: {
                erased: {
                    is_erased: false,
                    date: null
                },
                active: {
                    is_shared: false,
                }
            },
            songs:
                [
                    {
                        songs_id: [artist_1_album_1_song_1], // from artists collection
                        // if shared === false, added_by === created_by
                        added_by: user_1, // from users collection
                    },
                    {
                        songs_id: [artist_2_album_1_song_1], // from artists collection
                        // if shared === false, added_by === created_by
                        added_by: user_1, // from users collection
                    }
                ]

        },
        {
            _id: ObjectId(),
            name: "Playlist_2_user_1",
            total_songs: 1,
            date_created: ISODate("2022-11-01T00:00:00"),
            created_by: user_1, // from users collection
            status: {
                erased: {
                    is_erased: false,
                    date: null
                },
                active: {
                    is_shared: true,
                }
            },
            songs:
                [
                    {
                        songs_id: [artist_3_album_1_song_1], // from artists collection
                        // if shared === false, added_by === created_by
                        added_by: user_2, // from users collection
                    },
                    {
                        songs_id: [artist_1_album_1_song_2], // from artists collection
                        // if shared === false, added_by === created_by
                        added_by: user_1, // from users collection
                    }
                ]

        },
        {
            _id: ObjectId(),
            name: "Playlist_1_user_3",
            total_songs: 2,
            date_created: ISODate("2022-12-01T00:00:00"),
            created_by: user_1, // from users collection
            status: {
                erased: {
                    is_erased: true,
                    date: ISODate("2023-01-01T00:00:00")
                },
                active: {
                    is_shared: false,
                }
            },
            songs:
                [
                    {
                        songs_id: [artist_1_album_1_song_2, artist_3_album_1_song_2], // from artists collection
                        // if shared === false, added_by === created_by
                        added_by: user_3, // from users collection
                    }
                ]

        }
    ]
)

const playlists_id = db.playlists.distinct("_id");
const playlist_1_user_1 = playlists_id[0];
const playlist_2_user_1 = playlists_id[1];
const playlist_1_user_3 = playlists_id[2];



db.artists.updateOne(
    {
        _id: artist_1
    },
    {
        $push: {
            related_artists: [ObjectId(artist_2), ObjectId(artist_3)],
            followed_by: [ObjectId(user_1), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_1_album_1
    },
    {
        $push: {
            liked_by: [ObjectId(user_1), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_1_album_1_song_1
    },
    {
        $push: {
            liked_by: [ObjectId(user_1)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_1_album_1_song_2
    },
    {
        $push: {
            liked_by: [ObjectId(user_1), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_1_album_1_song_3
    },
    {
        $push: {
            liked_by: [ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: ObjectId(artist_2)
    },
    {
        $push: {
            related_artists: [ObjectId(artist_3)],
            followed_by: [ObjectId(user_1), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_2_album_1
    },
    {
        $push: {
            liked_by: [ObjectId(user_1), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_2_album_1_song_1
    },
    {
        $push: {
            liked_by: [ObjectId(user_2)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_2_album_1_song_2
    },
    {
        $push: {
            liked_by: [ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_2_album_1_song_3
    },
    {
        $push: {
            liked_by: [ObjectId(user_1)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_2_album_2
    },
    {
        $push: {
            liked_by: [ObjectId(user_1), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_2_album_2_song_1
    },
    {
        $push: {
            liked_by: [ObjectId(user_2), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: ObjectId(artist_3)
    },
    {
        $push: {
            related_artists: [ObjectId(artist_1)],
            followed_by: [ObjectId(user_1), ObjectId(user_2)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_3_album_1
    },
    {
        $push: {
            liked_by: [ObjectId(user_1), ObjectId(user_3)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_3_album_1_song_1
    },
    {
        $push: {
            liked_by: [ObjectId(user_2)]
        }
    }
)

db.artists.updateOne(
    {
        _id: artist_3_album_1_song_2
    },
    {
        $push: {
            liked_by: [ObjectId(user_3)]
        }
    }
)

db.users.updateOne(
    {
        _id: user_1
    },
    {
        $push: {
            playlists: [ObjectId(playlist_1_user_1), ObjectId(playlist_2_user_1)]
        }
    }
)

db.users.updateOne(
    {
        _id: user_3
    },
    {
        $push: {
            playlists: [ObjectId(playlist_1_user_3)]
        }
    }
)

