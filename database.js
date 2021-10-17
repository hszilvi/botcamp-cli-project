const movies = [
    {
    "id": 1,
    "title": "Jurassic Park",
    "ageRating": "12",
    "duration": 120,
    "times": ["12:00", "14:20", "16:40", "19:00", "21:20"],
    "seating": {
      "rows": 16,
      "seats": 25
    },
    "ticketsSold": [
      {
        "time": "14:20",
        "seat": "B20"
      },
      {
        "time": "14:20",
        "seat": "B21"
      }
    ]
  },

    {
    "id": 2,
    "title": "Star Wars",
    "ageRating": "12",
    "duration": 120,
    "times": ["10:00", "12:20", "15:40", "18:00", "21:00"],
    "seating": {
      "rows": 16,
      "seats": 25
    },
    "ticketsSold": [
      {
        "time": "14:20",
        "seat": "B20"
      },
      {
        "time": "14:20",
        "seat": "B21"
      }
    ]
  },

    {
    "id": 2,
    "title": "No Time To Die",
    "ageRating": "12",
    "duration": 120,
    "times": ["12:20", "15:00", "18:00", "21:00"],
    "seating": {
      "rows": 16,
      "seats": 25
    },
    "ticketsSold": [
      {
        "time": "14:20",
        "seat": "B20"
      },
      {
        "time": "14:20",
        "seat": "B21"
      }
    ]
  },
    {
    "id": 2,
    "title": "Croods2",
    "ageRating": "6",
    "duration": 90,
    "times": ["10:00", "12:20", "15:00", "18:00"],
    "seating": {
      "rows": 16,
      "seats": 25
    },
    "ticketsSold": [
      {
        "time": "14:20",
        "seat": "B20"
      },
      {
        "time": "14:20",
        "seat": "B21"
      }
    ]
  },
    {
    "id": 2,
    "title": "Peter Rabbit",
    "ageRating": "6",
    "duration": 100,
    "times": ["10:00", "12:20", "15:00", "18:00"],
    "seating": {
      "rows": 16,
      "seats": 25
    },
    "ticketsSold": [
      {
        "time": "14:20",
        "seat": "B20"
      },
      {
        "time": "14:20",
        "seat": "B21"
      }
    ]
  }
];

const prices = {
  "adult" : 15,
  "child" : 10
};
let listOfSeats = {
  row1 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  row2 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  row3 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  row4 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  row5 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  row6 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  row7 : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
}
module.exports = {
  movies, prices, listOfSeats
}





