// SPOTIFY SCHEMA

db.artists.insertMany(
    [
        {
            _id: ObjectId(),
            name: String,
            image: String,
            related_artists: [artists._id], // from artists collection
            followed_by: [users._id], // from users collection
            albums:
                [
                    {
                        _id: ObjectId(),
                        title: String,
                        published_date: Date,
                        image: String,
                        liked_by: [users._id], // from users collection
                        songs:
                            [
                                {
                                    _id: ObjectId(),
                                    title: String,
                                    duration: Number,
                                    times_played: Number,
                                    liked_by: [users._id], // from users collection
                                }
                            ]
                    }
                ]


        }
    ]
)


db.users.insertMany(
    [
        {
            _id: ObjectId(),
            type: String, // "free" or "premium",
            email: String,
            password: String,
            user_name: String,
            birth: Date,
            gender: String, // "prefer not to say", "other", "female" or "male",
            // if premium:
            subscription: {
                join_date: Date,
                renewal_date: Date,
                payment_method: {
                    credit_card: {
                        number: String,
                        exp_date: String,
                        sec_code: String

                    },
                    paypal: {
                        user_name: String
                    }
                },
                payments:
                    [
                        {
                            _id: ObjectId(),
                            date: Date,
                            total: Number
                        }
                    ],
            },
            playlists: [playlists._id], // from playlists collection
            artists_following: [artists._id], // from artists collection
            albums_liked: [artists.albums._id], // from artists collection
            songs_liked: [artists.albums.songs._id], // from artists collection
        }
    ]
)

db.playlists.insertMany(
    [
        {
            _id: ObjectId(),
            name: String,
            total_songs: Number,
            date_created: Date,
            created_by: users._id, // from users collection
            status: {
                erased: {
                    is_erased: Boolean,
                    date: Date
                },
                active: {
                    is_shared: Boolean,
                }
            },
            songs:
                [
                    {
                        songs_id: [artists.albums.songs._id], // from artists collection
                        // if shared === false, added_by === created_by
                        added_by: users._id, // from users collection
                    }
                ]

        }
    ]
)